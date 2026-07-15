import { contactEmail } from "./site-links";

export const LEGAL_LAST_UPDATED = "15 July 2026";

export const STUDIO_LEGAL_NAME = "AuraStudioZa";

/** InvoiceFast plan limits — keep in sync with Invoice Generator usage-constants. */
export const INVOICEFAST_LIMITS = {
  trialDays: 14,
  freeMonthlyPdf: 10,
  freeSavedInvoices: 10,
  proSavedInvoices: 50,
  proPriceInclVat: "R79",
} as const;

export const LOGBOOK_PRICING = {
  trial: "1 full calendar month free",
  monthlyInclVat: "R89",
} as const;

/** Expense Report plan limits — keep in sync with Expense Report usage-constants. */
export const EXPENSE_LIMITS = {
  trialDays: 14,
  freeMonthlyReports: 10,
  freeMaxLines: 5,
  freeSavedReports: 10,
  proSavedReports: 50,
  proPriceInclVat: "R49",
} as const;

export function legalMailto(subject: string): string {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}
