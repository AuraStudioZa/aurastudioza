import { LegalPageShell } from "../../components/legal-page-shell";
import { StudioLegalContact } from "../../components/studio-legal-contact";
import {
  INVOICEFAST_LIMITS,
  LEGAL_LAST_UPDATED,
  LOGBOOK_PRICING,
  STUDIO_LEGAL_NAME,
  legalMailto,
} from "../../lib/legal-studio-content";
import { contactEmail } from "../../lib/site-links";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "AuraStudioZa Privacy Policy — InvoiceFast, Vehicle Logbook, Expense Report, free tools, POPIA, and your data rights.",
  path: "/privacy",
  keywords: [
    "AuraStudioZa privacy policy",
    "InvoiceFast privacy",
    "Vehicle Logbook privacy",
    "Expense Report privacy",
    "POPIA",
    "South Africa SaaS privacy",
  ],
});

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <p className="legal-updated">Last updated: {LEGAL_LAST_UPDATED}</p>
      <p>
        {STUDIO_LEGAL_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) builds practical software
        for freelancers and small businesses in South Africa. This Privacy Policy explains what personal
        information we collect across our products, why we collect it, how we use it, and your rights under
        the Protection of Personal Information Act (POPIA) and applicable data protection laws.
      </p>

      <h2>Scope</h2>
      <p>This policy applies to:</p>
      <ul>
        <li>
          <strong>InvoiceFast</strong> — invoicing app at{" "}
          <a href="https://app.aurastudioza.com">app.aurastudioza.com</a>
        </li>
        <li>
          <strong>Vehicle Logbook</strong> — logbook app at{" "}
          <a href="https://logbook.aurastudioza.com">logbook.aurastudioza.com</a>
        </li>
        <li>
          <strong>Expense Report</strong> — expense report app at{" "}
          <a href="https://expenses.aurastudioza.com">expenses.aurastudioza.com</a>
        </li>
        <li>
          <strong>Free tools</strong> on{" "}
          <a href="https://aurastudioza.com">aurastudioza.com</a> (e.g. email signature generator, VAT
          calculator)
        </li>
        <li>
          <strong>Marketing and contact</strong> pages on aurastudioza.com
        </li>
      </ul>
      <p>
        Product-specific details are in the sections below. Where a product stores data only on your device
        and does not require sign-in, we do not receive the content you enter.
      </p>

      <h2>General principles</h2>
      <ul>
        <li>
          <strong>We do not sell your data.</strong> We do not sell, rent, or trade personal information for
          marketing purposes.
        </li>
        <li>
          <strong>Service providers only.</strong> We share data with trusted processors (hosting,
          authentication, payments, email delivery, database) only as needed to run the relevant product,
          under appropriate confidentiality and security obligations.
        </li>
        <li>
          <strong>Security.</strong> We use reasonable technical and organisational safeguards. No internet
          transmission is completely secure — protect your account credentials.
        </li>
        <li>
          <strong>Retention.</strong> We keep account and product data while your account is active or as
          needed to provide the service, unless you request deletion or we must retain records by law.
        </li>
      </ul>

      <h2 id="invoicefast">InvoiceFast</h2>
      <p>
        InvoiceFast is a web-based invoice generator. When you create an account or use paid features, we
        may process:
      </p>
      <ul>
        <li>
          <strong>Account information</strong> — email and authentication identifiers (via Clerk).
        </li>
        <li>
          <strong>Invoice data</strong> — business and client details, line items, notes, optional logos, and
          PDFs you generate.
        </li>
        <li>
          <strong>Usage data</strong> — invoice counts and subscription status to enforce plan limits.
        </li>
        <li>
          <strong>Payment metadata</strong> — subscription status from Lemon Squeezy (we do not store full
          card numbers).
        </li>
      </ul>
      <p>
        We use this data to authenticate you, generate and deliver invoices (including email for Pro users),
        manage billing, and improve the service. See our{" "}
        <a href="/terms#invoicefast">InvoiceFast terms</a> for plan limits.
      </p>

      <h2 id="vehicle-logbook">Vehicle Logbook</h2>
      <p>
        Vehicle Logbook requires sign-in on the production app. We may process:
      </p>
      <ul>
        <li>
          <strong>Sign-in account</strong> — email and user id (Clerk).
        </li>
        <li>
          <strong>Logbook data</strong> — vehicles, trips/stops, odometer readings, and settings, stored in
          Supabase and cached in IndexedDB on your device for offline use.
        </li>
        <li>
          <strong>Subscription status</strong> — plan active/cancelled and renewal dates (Lemon Squeezy).
        </li>
      </ul>
      <p>
        While your trial or subscription is active, we maintain cloud backup so you can use the logbook on
        another device. Optional JSON exports you download stay on your device only.
      </p>

      <h2 id="expense-report">Expense Report</h2>
      <p>
        Expense Report is a web-based expense report generator. When you create an account or use
        paid features, we may process:
      </p>
      <ul>
        <li>
          <strong>Account information</strong> — email and authentication identifiers (via Clerk).
        </li>
        <li>
          <strong>Expense data</strong> — employee details, expense line items, categories, receipt
          images, company logos, and PDFs you generate.
        </li>
        <li>
          <strong>Usage data</strong> — report counts and subscription status to enforce plan limits.
        </li>
        <li>
          <strong>Payment metadata</strong> — subscription status from Lemon Squeezy (we do not store
          full card numbers).
        </li>
      </ul>
      <p>
        We use this data to authenticate you, generate and deliver expense reports (including email for
        Pro users), manage billing, and improve the service. See our{" "}
        <a href="/terms#expense-report">Expense Report terms</a> for plan limits.
      </p>

      <h2 id="free-tools">Free tools (aurastudioza.com)</h2>
      <p>
        Tools such as the <strong>email signature generator</strong> and <strong>VAT calculator</strong> run
        in your browser. Details you enter are stored in <strong>local browser storage</strong> on your device
        until you clear them or click Start over / copy your signature. We do not upload that content to our
        servers for those tools.
      </p>
      <p>
        Like most websites, we may collect standard server or analytics logs (e.g. page views) through our
        hosting provider. We do not require sign-in for free tools.
      </p>

      <h2>Marketing site and contact</h2>
      <p>
        If you email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> or use our contact page, we process
        the information you send to respond to your enquiry.
      </p>

      <h2>Third-party services</h2>
      <p>Depending on the product you use, processors may include:</p>
      <ul>
        <li>
          <strong>Clerk</strong> — authentication (InvoiceFast, Vehicle Logbook, Expense Report)
        </li>
        <li>
          <strong>Supabase</strong> — database and cloud sync (InvoiceFast, Vehicle Logbook, Expense
          Report)
        </li>
        <li>
          <strong>Lemon Squeezy</strong> — subscriptions and payments
        </li>
        <li>
          <strong>Resend</strong> — transactional email (InvoiceFast)
        </li>
        <li>
          <strong>Vercel</strong> — hosting
        </li>
      </ul>

      <h2>Your rights (POPIA)</h2>
      <p>
        You may request access, correction, deletion, or object to processing of your personal information,
        and lodge a complaint with the Information Regulator of South Africa. Email{" "}
        <a href={legalMailto("Privacy request")}>{contactEmail}</a> with the subject &quot;Privacy
        request&quot;, your registered email, and the product name. Deletion may close your account and remove
        associated data, subject to legal retention requirements.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. Material changes will be posted on this page with an
        updated date. Continued use after changes constitutes acceptance where permitted by law.
      </p>

      <StudioLegalContact subject="Privacy request" />
    </LegalPageShell>
  );
}
