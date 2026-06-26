const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://app.aurastudioza.com";

const marketingBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://aurastudioza.com";

export const appLinks = {
  signup: `${appBaseUrl}/sign-up`,
  login: `${appBaseUrl}/sign-in`,
  signupPro: `${appBaseUrl}/sign-up?plan=pro`,
  privacy: `${appBaseUrl}/privacy`,
  terms: `${appBaseUrl}/terms`,
} as const;

export const siteLinks = {
  home: "/",
  invoicefast: "/invoicefast",
  logbook: "/logbook",
  emailSignature: "/email-signature",
  vatCalculator: "/vat-calculator",
  /** Canonical studio legal pages (marketing site). */
  privacy: "/privacy",
  terms: "/terms",
  contact: "/contact",
} as const;

export const contactEmail = "support@aurastudioza.com";

export type UtmParams = {
  source?: string;
  medium: string;
  campaign: string;
};

/** Append UTM query params to an absolute or site-relative marketing/app URL. */
export function withUtm(url: string, { source = "aurastudioza", medium, campaign }: UtmParams): string {
  const isRelative = url.startsWith("/");
  const base = isRelative ? marketingBaseUrl : undefined;
  const parsed = new URL(url, base);
  parsed.searchParams.set("utm_source", source);
  parsed.searchParams.set("utm_medium", medium);
  parsed.searchParams.set("utm_campaign", campaign);
  return parsed.toString();
}

export const emailSignatureUtm = {
  medium: "tool",
  campaign: "email-signature",
} as const;

export function emailSignatureAppLink(path: "signup" | "login" | "signupPro" = "signup"): string {
  return withUtm(appLinks[path], emailSignatureUtm);
}

export function emailSignatureMarketingLink(path: string): string {
  return withUtm(`${marketingBaseUrl}${path.startsWith("/") ? path : `/${path}`}`, emailSignatureUtm);
}
