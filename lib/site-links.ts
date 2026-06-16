const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://app.aurastudioza.com";

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
  /** Canonical InvoiceFast legal pages (app subdomain). */
  privacy: appLinks.privacy,
  terms: appLinks.terms,
  contact: "/contact",
} as const;

export const contactEmail = "support@aurastudioza.com";
