import type { Metadata } from "next";
import { LegalPageShell } from "../../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | AuraStudioZa",
  description: "How AuraStudioZa and InvoiceFast collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <p className="legal-updated">Last updated: 28 May 2026</p>
      <p>
        AuraStudioZa (&quot;we&quot;, &quot;us&quot;) operates aurastudioza.com and products such as
        InvoiceFast. This policy explains what information we collect and how we use it.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Account details you provide (such as name and email) when you sign up for InvoiceFast.</li>
        <li>Invoice and business data you enter into the product.</li>
        <li>Basic usage and device data to keep the service secure and reliable.</li>
        <li>Payment-related information processed by our payment provider (we do not store full card details).</li>
      </ul>
      <h2>How we use information</h2>
      <ul>
        <li>To provide, maintain, and improve our software.</li>
        <li>To send service-related messages (such as account or billing notices).</li>
        <li>To prevent abuse, fraud, and security incidents.</li>
        <li>To comply with legal obligations where applicable.</li>
      </ul>
      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with trusted service providers
        (hosting, analytics, email, payments) only as needed to run the service.
      </p>
      <h2>Retention</h2>
      <p>
        We keep information for as long as your account is active or as needed for legal, tax, and
        operational purposes.
      </p>
      <h2>Your rights</h2>
      <p>
        You may request access, correction, or deletion of your personal information by contacting us.
        We will respond within a reasonable time.
      </p>
      <h2>Contact</h2>
      <p>
        For privacy questions, contact us via the <a href="/contact">Contact page</a>.
      </p>
      <p className="legal-note">
        This page is provided for transparency and does not constitute legal advice.
      </p>
    </LegalPageShell>
  );
}
