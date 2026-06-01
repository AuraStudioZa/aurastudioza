import { LegalPageShell } from "../../components/legal-page-shell";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms for using AuraStudioZa websites and software products including InvoiceFast.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Service">
      <p className="legal-updated">Last updated: 28 May 2026</p>
      <p>
        By using aurastudioza.com or InvoiceFast, you agree to these terms. If you do not agree,
        please do not use our services.
      </p>
      <h2>Service</h2>
      <p>
        AuraStudioZa provides online software tools for freelancers and small businesses. Features,
        limits, and availability may change as the product evolves.
      </p>
      <h2>Accounts</h2>
      <ul>
        <li>You are responsible for keeping your login details secure.</li>
        <li>You must provide accurate account information.</li>
        <li>You are responsible for activity under your account.</li>
      </ul>
      <h2>Acceptable use</h2>
      <p>You agree not to misuse the service, including attempts to:</p>
      <ul>
        <li>Break the law or infringe others&apos; rights.</li>
        <li>Upload malicious code or disrupt systems.</li>
        <li>Access accounts or data that are not yours.</li>
      </ul>
      <h2>Payments and subscriptions</h2>
      <p>
        Paid plans (such as InvoiceFast Pro) are billed according to the pricing shown at checkout.
        You can cancel according to the billing provider&apos;s process. Fees are generally
        non-refundable except where required by law.
      </p>
      <h2>Disclaimer</h2>
      <p>
        The service is provided &quot;as is&quot;. We do not guarantee uninterrupted or error-free
        operation. You are responsible for verifying that invoices and tax information meet your
        business and legal requirements.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, AuraStudioZa is not liable for indirect or
        consequential damages arising from use of the service.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent via our <a href="/contact">Contact page</a>.
      </p>
      <p className="legal-note">
        This page is a general template and does not constitute legal advice.
      </p>
    </LegalPageShell>
  );
}
