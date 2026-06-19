import { redirect } from "next/navigation";
import { appLinks } from "../../lib/site-links";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "InvoiceFast Terms of Service on app.aurastudioza.com.",
  path: "/terms",
  keywords: ["InvoiceFast terms of service", "AuraStudioZa terms", "SaaS terms South Africa"],
});

/** Canonical terms live on the app — one source of truth. */
export default function TermsPage() {
  redirect(appLinks.terms);
}
