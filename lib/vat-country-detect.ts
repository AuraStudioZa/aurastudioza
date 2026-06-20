import { VAT_JURISDICTIONS, getJurisdiction, type VatJurisdiction } from "./vat-jurisdictions";

/** Common IANA timezones → jurisdiction id (subset; locale is tried first). */
const TIMEZONE_TO_JURISDICTION: Record<string, string> = {
  "Africa/Johannesburg": "ZA",
  "Africa/Nairobi": "KE",
  "Africa/Lagos": "NG",
  "Africa/Cairo": "EG",
  "Africa/Accra": "GH",
  "Europe/London": "GB",
  "Europe/Dublin": "IE",
  "Europe/Berlin": "DE",
  "Europe/Paris": "FR",
  "Europe/Amsterdam": "NL",
  "Europe/Brussels": "BE",
  "Europe/Madrid": "ES",
  "Europe/Rome": "IT",
  "Europe/Lisbon": "PT",
  "Europe/Vienna": "AT",
  "Europe/Zurich": "CH",
  "Europe/Stockholm": "SE",
  "Europe/Oslo": "NO",
  "Europe/Copenhagen": "DK",
  "Europe/Helsinki": "FI",
  "Europe/Warsaw": "PL",
  "Europe/Prague": "CZ",
  "Europe/Budapest": "HU",
  "Europe/Bucharest": "RO",
  "Europe/Athens": "GR",
  "Europe/Istanbul": "TR",
  "America/New_York": "US",
  "America/Chicago": "US",
  "America/Denver": "US",
  "America/Los_Angeles": "US",
  "America/Phoenix": "US",
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "America/Mexico_City": "MX",
  "America/Sao_Paulo": "BR",
  "America/Argentina/Buenos_Aires": "AR",
  "America/Santiago": "CL",
  "America/Bogota": "CO",
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  "Australia/Brisbane": "AU",
  "Australia/Perth": "AU",
  "Pacific/Auckland": "NZ",
  "Asia/Kolkata": "IN",
  "Asia/Singapore": "SG",
  "Asia/Kuala_Lumpur": "MY",
  "Asia/Bangkok": "TH",
  "Asia/Manila": "PH",
  "Asia/Jakarta": "ID",
  "Asia/Tokyo": "JP",
  "Asia/Seoul": "KR",
  "Asia/Hong_Kong": "HK",
  "Asia/Karachi": "PK",
  "Asia/Dubai": "AE",
  "Asia/Riyadh": "SA",
  "Asia/Jerusalem": "IL",
};

const KNOWN_IDS = new Set(VAT_JURISDICTIONS.map((j) => j.id));

function detectFromBrowserLocale(): string | null {
  if (typeof navigator === "undefined") return null;

  const languages = navigator.languages?.length
    ? [...navigator.languages]
    : navigator.language
      ? [navigator.language]
      : [];

  for (const lang of languages) {
    const segment = lang.split("-")[1]?.toUpperCase();
    if (segment && KNOWN_IDS.has(segment)) {
      return segment;
    }
  }

  return null;
}

function detectFromTimezone(): string | null {
  if (typeof Intl === "undefined") return null;

  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!timeZone) return null;

    const exact = TIMEZONE_TO_JURISDICTION[timeZone];
    if (exact) return exact;

    if (timeZone.startsWith("Australia/")) return "AU";
    if (timeZone.startsWith("Pacific/Auckland")) return "NZ";
  } catch {
    return null;
  }

  return null;
}

/**
 * Best-effort country guess from browser locale + timezone.
 * No GPS, no IP lookup, no permission prompt — approximate only.
 */
export function detectJurisdictionFromBrowser(): string | null {
  return detectFromBrowserLocale() ?? detectFromTimezone();
}

/** Shown on focus before the user types — not the full list. */
const POPULAR_JURISDICTION_IDS = ["ZA", "GB", "US", "AU", "DE", "FR", "IN", "CA", "NL", "IE"] as const;

const MAX_SUGGESTIONS = 10;

function scoreJurisdiction(j: VatJurisdiction, q: string): number {
  const label = j.label.toLowerCase();
  const id = j.id.toLowerCase();
  const currency = j.currency.toLowerCase();
  const region = j.region.toLowerCase();

  if (id === q) return 100;
  if (label === q) return 95;
  if (currency === q) return 90;
  if (label.startsWith(q)) return 80;
  if (id.startsWith(q)) return 75;
  if (label.includes(q)) return 60;
  if (currency.includes(q)) return 50;
  if (region.includes(q)) return 30;
  if (`${label} ${id} ${currency} ${region}`.includes(q)) return 20;
  return 0;
}

function popularSuggestions(currentId: string): VatJurisdiction[] {
  const ids = new Set<string>([currentId, ...POPULAR_JURISDICTION_IDS]);
  return [...ids].map((id) => getJurisdiction(id));
}

export function formatJurisdictionOption(j: VatJurisdiction): string {
  return `${j.label} (${j.currency})`;
}

export function searchJurisdictions(
  query: string,
  options?: { currentId?: string; limit?: number }
): VatJurisdiction[] {
  const limit = options?.limit ?? MAX_SUGGESTIONS;
  const q = query.trim().toLowerCase();

  if (!q) {
    return popularSuggestions(options?.currentId ?? "ZA").slice(0, limit);
  }

  return VAT_JURISDICTIONS.map((j) => ({ j, score: scoreJurisdiction(j, q) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.j.label.localeCompare(b.j.label))
    .slice(0, limit)
    .map((entry) => entry.j);
}

export function highlightMatch(text: string, query: string): { before: string; match: string; after: string } {
  const q = query.trim();
  if (!q) return { before: text, match: "", after: "" };

  const lowerText = text.toLowerCase();
  const lowerQ = q.toLowerCase();
  const index = lowerText.indexOf(lowerQ);
  if (index === -1) return { before: text, match: "", after: "" };

  return {
    before: text.slice(0, index),
    match: text.slice(index, index + q.length),
    after: text.slice(index + q.length),
  };
}

export function jurisdictionSearchLabel(id: string): string {
  return formatJurisdictionOption(getJurisdiction(id));
}
