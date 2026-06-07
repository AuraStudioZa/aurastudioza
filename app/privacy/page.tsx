import { redirect } from "next/navigation";
import { appLinks } from "../../lib/site-links";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "InvoiceFast Privacy Policy on app.aurastudioza.com.",
  path: "/privacy",
});

/** Canonical policy lives on the app — one source of truth. */
export default function PrivacyPage() {
  redirect(appLinks.privacy);
}
