import { ContactEmailBlock } from "../../components/contact-email-block";
import { LegalPageShell } from "../../components/legal-page-shell";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact AuraStudioZa for support on InvoiceFast, Vehicle Logbook, free tools, billing, and general enquiries.",
  path: "/contact",
  keywords: [
    "AuraStudioZa contact",
    "InvoiceFast support",
    "Vehicle Logbook support",
    "freelancer software support South Africa",
    "AuraStudioZa support email",
  ],
});

export default function ContactPage() {
  return (
    <LegalPageShell title="Contact">
      <p>
        We&apos;re here to help with AuraStudioZa products and services — including InvoiceFast,
        Vehicle Logbook, our free tools, billing, and general enquiries. For the fastest response,
        email us from your account email with a short description of your request.
      </p>
      <ContactEmailBlock />
      <h2>What to include</h2>
      <ul>
        <li>Your registered email address (if you have an account)</li>
        <li>Product name (e.g. InvoiceFast, Vehicle Logbook, or a free tool on aurastudioza.com)</li>
        <li>What you were trying to do and what happened</li>
        <li>Screenshots if relevant</li>
      </ul>
      <h2>Response time</h2>
      <p>We aim to reply within 1–2 business days.</p>
    </LegalPageShell>
  );
}
