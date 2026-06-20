import type { VatJurisdiction } from "./vat-jurisdictions";
import { getJurisdiction } from "./vat-jurisdictions";

export const DEFAULT_ZA_VAT_RATE = 15;

export type VatInputMode = "exclusive" | "inclusive";

export type VatBreakdown = {
  amountExclVat: number;
  vatAmount: number;
  amountInclVat: number;
  vatRate: number;
  inputMode: VatInputMode;
};

export function parseAmountInput(value: string): number | null {
  const cleaned = value.replace(/\s/g, "").replace(/,/g, ".");
  if (!cleaned) return null;
  const parsed = Number(cleaned);
  if (!Number.isFinite(parsed) || parsed < 0) return null;
  return parsed;
}

export function clampVatRate(rate: number, fallback = DEFAULT_ZA_VAT_RATE): number {
  if (!Number.isFinite(rate)) return fallback;
  return Math.min(100, Math.max(0, rate));
}

export function calculateVat(
  amount: number,
  vatRate: number,
  mode: VatInputMode
): VatBreakdown {
  const rate = clampVatRate(vatRate);

  if (rate === 0) {
    return {
      amountExclVat: amount,
      vatAmount: 0,
      amountInclVat: amount,
      vatRate: rate,
      inputMode: mode,
    };
  }

  if (mode === "inclusive") {
    const amountInclVat = amount;
    const amountExclVat = amountInclVat / (1 + rate / 100);
    const vatAmount = amountInclVat - amountExclVat;
    return {
      amountExclVat,
      vatAmount,
      amountInclVat,
      vatRate: rate,
      inputMode: mode,
    };
  }

  const amountExclVat = amount;
  const vatAmount = amountExclVat * (rate / 100);
  return {
    amountExclVat,
    vatAmount,
    amountInclVat: amountExclVat + vatAmount,
    vatRate: rate,
    inputMode: mode,
  };
}

export function currencySymbol(jurisdiction: Pick<VatJurisdiction, "currency" | "locale">): string {
  try {
    const formatted = formatMoney(0, jurisdiction);
    const symbol = formatted.replace(/[\d.,\s\u00a0\u202f-]/g, "").trim();
    if (symbol && symbol !== jurisdiction.currency) return symbol;
  } catch {
    /* fall through */
  }

  try {
    const parts = new Intl.NumberFormat(jurisdiction.locale, {
      style: "currency",
      currency: jurisdiction.currency,
      currencyDisplay: "narrowSymbol",
    }).formatToParts(0);
    const symbol = parts.find((part) => part.type === "currency")?.value;
    if (symbol && symbol !== jurisdiction.currency) return symbol;
  } catch {
    /* fall through */
  }

  return jurisdiction.currency;
}

export function formatMoney(
  amount: number,
  jurisdiction: Pick<VatJurisdiction, "currency" | "locale">
): string {
  const fractionDigits = jurisdiction.currency === "JPY" || jurisdiction.currency === "KRW" ? 0 : 2;
  try {
    return new Intl.NumberFormat(jurisdiction.locale, {
      style: "currency",
      currency: jurisdiction.currency,
      currencyDisplay: "symbol",
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(amount);
  } catch {
    return `${jurisdiction.currency} ${amount.toFixed(fractionDigits)}`;
  }
}

/** @deprecated Use formatMoney with jurisdiction */
export function formatZar(amount: number): string {
  return formatMoney(amount, getJurisdiction("ZA"));
}

export function breakdownSummary(
  breakdown: VatBreakdown,
  jurisdiction: VatJurisdiction
): string {
  const taxLabel = jurisdiction.taxName;
  return [
    `Excl. ${taxLabel}: ${formatMoney(breakdown.amountExclVat, jurisdiction)}`,
    `${taxLabel} (${breakdown.vatRate}%): ${formatMoney(breakdown.vatAmount, jurisdiction)}`,
    `Total including ${taxLabel}: ${formatMoney(breakdown.amountInclVat, jurisdiction)}`,
  ].join("\n");
}

export function formatVatRateLabel(rate: number): string {
  return Number.isInteger(rate) ? String(rate) : rate.toFixed(1).replace(/\.0$/, "");
}
