import { LegalPageShell } from "../../components/legal-page-shell";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How AuraStudioZa and InvoiceFast collect, use, and protect your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <p className="legal-updated">Last updated: 28 May 2026</p>
      <p>
        AuraStudioZa (&quot;we&quot;, &quot;us&quot;) operates aurastudioza.com and products such as
        InvoiceFast. This policy explains what information we collect and how we use it.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you use InvoiceFast, we collect account details (such as your email address via our
        authentication provider), invoice data you enter, and usage information needed to run the
        service.
      </p>
      <h2>How we use information</h2>
      <ul>
        <li>Provide and improve our products</li>
        <li>Process subscriptions and support requests</li>
        <li>Send service-related communications</li>
        <li>Maintain security and prevent abuse</li>
      </ul>
      <h2>Third-party services</h2>
      <p>
        We use trusted providers for authentication, hosting, payments, and analytics. Their
        processing is governed by their own policies.
      </p>
      <h2>Data retention</h2>
      <p>
        We retain your data while your account is active and as needed for legal, security, or
        operational purposes.
      </p>
      <h2>Your rights</h2>
      <p>
        You may request access, correction, or deletion of your personal data by contacting us at
        the email on our Contact page.
      </p>
      <h2>Contact</h2>
      <p>Questions about this policy: see our Contact page.</p>
    </LegalPageShell>
  );
}
