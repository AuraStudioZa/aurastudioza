const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://app.aurastudioza.com";

export const appLinks = {
  signup: `${appBaseUrl}/sign-up`,
  login: `${appBaseUrl}/sign-in`,
  signupPro: `${appBaseUrl}/sign-up?plan=pro`,
} as const;

export const siteLinks = {
  home: "/",
  invoicefast: "/invoicefast",
  privacy: "/privacy",
  terms: "/terms",
  contact: "/contact",
} as const;

export const contactEmail = "support@aurastudioza.com";
