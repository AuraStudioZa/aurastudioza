export type VatJurisdiction = {
  id: string;
  label: string;
  region: "Africa" | "Europe" | "Americas" | "Asia-Pacific" | "Middle East";
  currency: string;
  locale: string;
  standardVatRate: number;
  /** Display name for the tax (VAT, GST, etc.). */
  taxName: string;
};

/** Standard / typical rates — always editable. Not tax advice. */
export const VAT_JURISDICTIONS: VatJurisdiction[] = [
  { id: "ZA", label: "South Africa", region: "Africa", currency: "ZAR", locale: "en-ZA", standardVatRate: 15, taxName: "VAT" },
  { id: "KE", label: "Kenya", region: "Africa", currency: "KES", locale: "en-KE", standardVatRate: 16, taxName: "VAT" },
  { id: "NG", label: "Nigeria", region: "Africa", currency: "NGN", locale: "en-NG", standardVatRate: 7.5, taxName: "VAT" },
  { id: "EG", label: "Egypt", region: "Africa", currency: "EGP", locale: "en-EG", standardVatRate: 14, taxName: "VAT" },
  { id: "GH", label: "Ghana", region: "Africa", currency: "GHS", locale: "en-GH", standardVatRate: 15, taxName: "VAT" },
  { id: "GB", label: "United Kingdom", region: "Europe", currency: "GBP", locale: "en-GB", standardVatRate: 20, taxName: "VAT" },
  { id: "IE", label: "Ireland", region: "Europe", currency: "EUR", locale: "en-IE", standardVatRate: 23, taxName: "VAT" },
  { id: "DE", label: "Germany", region: "Europe", currency: "EUR", locale: "de-DE", standardVatRate: 19, taxName: "VAT" },
  { id: "FR", label: "France", region: "Europe", currency: "EUR", locale: "fr-FR", standardVatRate: 20, taxName: "VAT" },
  { id: "NL", label: "Netherlands", region: "Europe", currency: "EUR", locale: "nl-NL", standardVatRate: 21, taxName: "VAT" },
  { id: "BE", label: "Belgium", region: "Europe", currency: "EUR", locale: "nl-BE", standardVatRate: 21, taxName: "VAT" },
  { id: "ES", label: "Spain", region: "Europe", currency: "EUR", locale: "es-ES", standardVatRate: 21, taxName: "VAT" },
  { id: "IT", label: "Italy", region: "Europe", currency: "EUR", locale: "it-IT", standardVatRate: 22, taxName: "VAT" },
  { id: "PT", label: "Portugal", region: "Europe", currency: "EUR", locale: "pt-PT", standardVatRate: 23, taxName: "VAT" },
  { id: "AT", label: "Austria", region: "Europe", currency: "EUR", locale: "de-AT", standardVatRate: 20, taxName: "VAT" },
  { id: "CH", label: "Switzerland", region: "Europe", currency: "CHF", locale: "de-CH", standardVatRate: 8.1, taxName: "VAT" },
  { id: "SE", label: "Sweden", region: "Europe", currency: "SEK", locale: "sv-SE", standardVatRate: 25, taxName: "VAT" },
  { id: "NO", label: "Norway", region: "Europe", currency: "NOK", locale: "nb-NO", standardVatRate: 25, taxName: "VAT" },
  { id: "DK", label: "Denmark", region: "Europe", currency: "DKK", locale: "da-DK", standardVatRate: 25, taxName: "VAT" },
  { id: "FI", label: "Finland", region: "Europe", currency: "EUR", locale: "fi-FI", standardVatRate: 25.5, taxName: "VAT" },
  { id: "PL", label: "Poland", region: "Europe", currency: "PLN", locale: "pl-PL", standardVatRate: 23, taxName: "VAT" },
  { id: "CZ", label: "Czechia", region: "Europe", currency: "CZK", locale: "cs-CZ", standardVatRate: 21, taxName: "VAT" },
  { id: "HU", label: "Hungary", region: "Europe", currency: "HUF", locale: "hu-HU", standardVatRate: 27, taxName: "VAT" },
  { id: "RO", label: "Romania", region: "Europe", currency: "RON", locale: "ro-RO", standardVatRate: 19, taxName: "VAT" },
  { id: "GR", label: "Greece", region: "Europe", currency: "EUR", locale: "el-GR", standardVatRate: 24, taxName: "VAT" },
  { id: "TR", label: "Türkiye", region: "Europe", currency: "TRY", locale: "tr-TR", standardVatRate: 20, taxName: "VAT" },
  { id: "US", label: "United States", region: "Americas", currency: "USD", locale: "en-US", standardVatRate: 0, taxName: "Sales tax" },
  { id: "CA", label: "Canada", region: "Americas", currency: "CAD", locale: "en-CA", standardVatRate: 5, taxName: "GST" },
  { id: "MX", label: "Mexico", region: "Americas", currency: "MXN", locale: "es-MX", standardVatRate: 16, taxName: "VAT" },
  { id: "BR", label: "Brazil", region: "Americas", currency: "BRL", locale: "pt-BR", standardVatRate: 17, taxName: "VAT" },
  { id: "AR", label: "Argentina", region: "Americas", currency: "ARS", locale: "es-AR", standardVatRate: 21, taxName: "VAT" },
  { id: "CL", label: "Chile", region: "Americas", currency: "CLP", locale: "es-CL", standardVatRate: 19, taxName: "VAT" },
  { id: "CO", label: "Colombia", region: "Americas", currency: "COP", locale: "es-CO", standardVatRate: 19, taxName: "VAT" },
  { id: "AU", label: "Australia", region: "Asia-Pacific", currency: "AUD", locale: "en-AU", standardVatRate: 10, taxName: "GST" },
  { id: "NZ", label: "New Zealand", region: "Asia-Pacific", currency: "NZD", locale: "en-NZ", standardVatRate: 15, taxName: "GST" },
  { id: "IN", label: "India", region: "Asia-Pacific", currency: "INR", locale: "en-IN", standardVatRate: 18, taxName: "GST" },
  { id: "SG", label: "Singapore", region: "Asia-Pacific", currency: "SGD", locale: "en-SG", standardVatRate: 9, taxName: "GST" },
  { id: "MY", label: "Malaysia", region: "Asia-Pacific", currency: "MYR", locale: "en-MY", standardVatRate: 8, taxName: "SST" },
  { id: "TH", label: "Thailand", region: "Asia-Pacific", currency: "THB", locale: "th-TH", standardVatRate: 7, taxName: "VAT" },
  { id: "PH", label: "Philippines", region: "Asia-Pacific", currency: "PHP", locale: "en-PH", standardVatRate: 12, taxName: "VAT" },
  { id: "ID", label: "Indonesia", region: "Asia-Pacific", currency: "IDR", locale: "id-ID", standardVatRate: 11, taxName: "VAT" },
  { id: "JP", label: "Japan", region: "Asia-Pacific", currency: "JPY", locale: "ja-JP", standardVatRate: 10, taxName: "Consumption tax" },
  { id: "KR", label: "South Korea", region: "Asia-Pacific", currency: "KRW", locale: "ko-KR", standardVatRate: 10, taxName: "VAT" },
  { id: "HK", label: "Hong Kong", region: "Asia-Pacific", currency: "HKD", locale: "en-HK", standardVatRate: 0, taxName: "VAT" },
  { id: "PK", label: "Pakistan", region: "Asia-Pacific", currency: "PKR", locale: "en-PK", standardVatRate: 18, taxName: "GST" },
  { id: "AE", label: "United Arab Emirates", region: "Middle East", currency: "AED", locale: "en-AE", standardVatRate: 5, taxName: "VAT" },
  { id: "SA", label: "Saudi Arabia", region: "Middle East", currency: "SAR", locale: "en-SA", standardVatRate: 15, taxName: "VAT" },
  { id: "IL", label: "Israel", region: "Middle East", currency: "ILS", locale: "he-IL", standardVatRate: 17, taxName: "VAT" },
];

export const DEFAULT_JURISDICTION_ID = "ZA";

export function getJurisdiction(id: string): VatJurisdiction {
  return VAT_JURISDICTIONS.find((j) => j.id === id) ?? VAT_JURISDICTIONS[0];
}

export const VAT_JURISDICTION_REGIONS = [
  "Africa",
  "Europe",
  "Americas",
  "Asia-Pacific",
  "Middle East",
] as const;

export function jurisdictionsByRegion(region: VatJurisdiction["region"]): VatJurisdiction[] {
  return VAT_JURISDICTIONS.filter((j) => j.region === region);
}
