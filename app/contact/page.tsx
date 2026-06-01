import { contactEmail } from "../../lib/site-links";
import { LegalPageShell } from "../../components/legal-page-shell";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact AuraStudioZa for support, billing, and general enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <LegalPageShell title="Contact">
      <p>
        We&apos;re here to help with AuraStudioZa and InvoiceFast questions. For the fastest
        response, email us with your account email and a short description of your request.
      </p>
      <div className="contact-card">
        <h2>Email</h2>
        <p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </div>
      <h2>What to include</h2>
      <ul>
        <li>Your registered email address</li>
        <li>Product name (e.g. InvoiceFast)</li>
        <li>What you were trying to do and what happened</li>
        <li>Screenshots if relevant</li>
      </ul>
      <h2>Response time</h2>
      <p>We aim to reply within 1–2 business days.</p>
    </LegalPageShell>
  );
}
