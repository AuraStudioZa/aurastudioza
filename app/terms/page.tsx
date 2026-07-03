import { LegalPageShell } from "../../components/legal-page-shell";
import { StudioLegalContact } from "../../components/studio-legal-contact";
import {
  EXPENSE_LIMITS,
  INVOICEFAST_LIMITS,
  LEGAL_LAST_UPDATED,
  LOGBOOK_PRICING,
  STUDIO_LEGAL_NAME,
} from "../../lib/legal-studio-content";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "AuraStudioZa Terms of Service — InvoiceFast, Vehicle Logbook, Expense Report, free tools, billing, and acceptable use.",
  path: "/terms",
  keywords: [
    "AuraStudioZa terms of service",
    "InvoiceFast terms",
    "Vehicle Logbook terms",
    "Expense Report terms",
    "SaaS terms South Africa",
  ],
});

export default function TermsPage() {
  const limits = INVOICEFAST_LIMITS;

  return (
    <LegalPageShell title="Terms of Service">
      <p className="legal-updated">Last updated: {LEGAL_LAST_UPDATED}</p>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of products and services offered by{" "}
        {STUDIO_LEGAL_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By creating an account,
        subscribing, or using any of our products, you agree to these Terms. If you do not agree, do not use
        the service.
      </p>

      <h2>Products covered</h2>
      <ul>
        <li>
          <strong>InvoiceFast</strong> — <a href="https://app.aurastudioza.com">app.aurastudioza.com</a>
        </li>
        <li>
          <strong>Vehicle Logbook</strong> —{" "}
          <a href="https://logbook.aurastudioza.com">logbook.aurastudioza.com</a>
        </li>
        <li>
          <strong>Expense Report</strong> —{" "}
          <a href="https://expenses.aurastudioza.com">expenses.aurastudioza.com</a>
        </li>
        <li>
          <strong>Free tools</strong> — e.g. email signature generator and VAT calculator on{" "}
          <a href="https://aurastudioza.com">aurastudioza.com</a>
        </li>
      </ul>
      <p>
        Product-specific terms below apply in addition to the general terms. Where there is a conflict for a
        given product, the product-specific section prevails for that product.
      </p>

      <h2>General terms (all products)</h2>
      <h3>Accounts and acceptable use</h3>
      <p>
        You are responsible for your account credentials and all activity under your account. Use our products
        only for lawful purposes. Do not abuse services, circumvent limits, attempt unauthorised access, send
        spam, upload malicious content, or harm other users or our infrastructure.
      </p>
      <h3>No professional advice</h3>
      <p>
        Our software helps you format records and documents. It does not provide tax, legal, accounting, or
        SARS compliance advice. You are responsible for accuracy and compliance with laws that apply to you.
        Consult a qualified professional for your situation.
      </p>
      <h3>Availability</h3>
      <p>
        Services are provided &quot;as is&quot; and &quot;as available&quot;. We strive for reliability but do
        not guarantee uninterrupted or error-free operation. Maintenance or updates may temporarily affect
        availability.
      </p>
      <h3>Intellectual property</h3>
      <p>
        We own the software, design, and branding (except content you provide). You retain ownership of
        content you create. You grant us a limited licence to process that content solely to provide the
        service.
      </p>
      <h3>Limitation of liability</h3>
      <p>
        To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential
        damages, or loss of profits, data, or business opportunities. Our total liability for any claim
        related to a product is limited to the amount you paid us for that product in the twelve months
        before the claim, or one hundred US dollars (USD $100), whichever is greater.
      </p>
      <h3>Suspension and termination</h3>
      <p>
        We may suspend or terminate access if you violate these Terms, abuse a product, or pose a risk to
        other users or our systems.
      </p>
      <h3>Governing law</h3>
      <p>
        These Terms are governed by the laws of the Republic of South Africa, except where mandatory consumer
        protections in your jurisdiction apply.
      </p>

      <h2 id="invoicefast">InvoiceFast</h2>
      <p>
        InvoiceFast lets you create, preview, and download professional invoices. New accounts receive a{" "}
        {limits.trialDays}-day Pro trial with full features. After the trial, a free plan applies unless you
        subscribe. Paid Pro subscribers receive unlimited PDF downloads (no watermark), logo on PDFs, email
        delivery, and higher saved-invoice limits.
      </p>
      <h3>Plans and usage limits</h3>
      <ul>
        <li>
          <strong>Pro trial:</strong> {limits.trialDays} days of full Pro access when you create an account
          (unlimited PDFs, no watermark, email delivery, logo on PDFs, up to {limits.proSavedInvoices} saved
          invoices). One trial per account. No credit card required.
        </li>
        <li>
          <strong>Free plan (after trial):</strong> up to {limits.freeMonthlyPdf} watermarked PDF downloads
          per calendar month and up to {limits.freeSavedInvoices} saved invoices in Previous invoices at any
          time.
        </li>
        <li>
          <strong>Pro plan (paid):</strong> unlimited PDF downloads per month (no watermark), email delivery,
          logo on PDFs, and up to {limits.proSavedInvoices} saved invoices in Previous invoices. When you save
          beyond that limit, the oldest saved invoice is permanently removed — export CSV or PDFs if you need
          long-term records.
        </li>
      </ul>
      <h3>Tax and invoicing</h3>
      <p>
        You are solely responsible for invoice accuracy and VAT/tax compliance. InvoiceFast formats and
        exports documents; it is not a substitute for professional advice.
      </p>
      <h3>Subscriptions and payments</h3>
      <p>
        Paid plans are billed through Lemon Squeezy. Advertised pricing is {limits.proPriceInclVat} per month
        including VAT where shown on checkout. Your bank may add foreign-exchange or card fees. You authorise
        recurring charges until you cancel.
      </p>
      <h3>Refunds (paid subscriptions only)</h3>
      <p>
        You may request a full refund within <strong>14 days</strong> of your initial Pro purchase by emailing
        support with your account email and purchase date. Refunds are not available for the free trial itself.
        After 14 days, fees are non-refundable except where required by law.
      </p>
      <h3>Cancellation</h3>
      <p>
        Cancel through your payment provider or contact support. Cancellation stops future charges; access
        continues until the end of the current billing period unless stated otherwise.
      </p>

      <h2 id="vehicle-logbook">Vehicle Logbook</h2>
      <p>
        Vehicle Logbook helps you record odometer readings, classify trips, and export CSV/PDF records. Sign-in
        is required on the production app.
      </p>
      <ul>
        <li>
          <strong>Not tax or legal advice.</strong> Home-to-work travel is usually private, not business — you
          are responsible for classifications. Consult a registered tax practitioner before official use.
        </li>
        <li>
          <strong>Exports</strong> are for record-keeping only. Optional SARS-style column layouts are
          convenience formats — not endorsed by SARS.
        </li>
        <li>
          <strong>Trial and subscription:</strong> {LOGBOOK_PRICING.trial}, then{" "}
          {LOGBOOK_PRICING.monthlyInclVat}/month incl. VAT (monthly billing via Lemon Squeezy; checkout may
          show USD). Refunds follow the payment provider&apos;s policy.
        </li>
        <li>
          <strong>Cancellation:</strong> Use Settings → Manage billing in the app or email support. Access
          continues until the end of the current paid period.
        </li>
        <li>
          <strong>Records:</strong> You are responsible for accuracy. Many advisers recommend retaining travel
          records for at least five years.
        </li>
      </ul>

      <h2 id="expense-report">Expense Report</h2>
      <p>
        Expense Report lets you create, preview, and download professional expense reports. New
        accounts receive a {EXPENSE_LIMITS.trialDays}-day Pro trial with full features. After the
        trial, a free plan applies unless you subscribe.
      </p>
      <h3>Plans and usage limits</h3>
      <ul>
        <li>
          <strong>Pro trial:</strong> {EXPENSE_LIMITS.trialDays} days of full Pro access when you
          create an account (unlimited PDFs, no watermark, receipt images, company logo, Excel
          export, email delivery, up to {EXPENSE_LIMITS.freeSavedReports} saved reports). One trial
          per account. No credit card required.
        </li>
        <li>
          <strong>Free plan (after trial):</strong> up to{" "}
          {EXPENSE_LIMITS.freeMonthlyReports} watermarked PDF expense reports per calendar month,
          up to {EXPENSE_LIMITS.freeMaxLines} expense lines per report, and up to{" "}
          {EXPENSE_LIMITS.freeSavedReports} saved reports.
        </li>
        <li>
          <strong>Pro plan (paid):</strong> unlimited PDF expense reports per month (no watermark),
          receipt images in PDF, company logo, Excel export, email delivery, and up to{" "}
          {EXPENSE_LIMITS.freeSavedReports} saved reports. {EXPENSE_LIMITS.proPriceInclVat}/month
          incl. VAT (monthly billing via Lemon Squeezy; checkout may show USD).
        </li>
      </ul>
      <h3>Accuracy and compliance</h3>
      <p>
        You are responsible for the accuracy of expense data you enter. Expense Report formats and
        exports documents; it does not provide tax, accounting, or compliance advice. Consult a
        qualified professional for your situation.
      </p>
      <h3>Subscriptions, cancellation, and refunds</h3>
      <p>
        Same terms as InvoiceFast above: paid plans billed via Lemon Squeezy, 14-day refund window
        on initial purchase, cancellation stops future charges with access until end of period.
      </p>

      <h2 id="free-tools">Free tools (aurastudioza.com)</h2>
      <p>
        Free tools (e.g. email signature generator, VAT calculator) are provided without sign-up. They run in
        your browser; progress may be stored locally on your device only. VAT rates and calculator output are
        indicative — not tax advice. Email signatures are HTML templates; appearance may vary by mail client.
      </p>
      <p>
        Free tools are offered &quot;as is&quot; without warranties. We may change or remove them at any time.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be posted on this page with an
        updated date. Continued use after changes constitutes acceptance where permitted by law.
      </p>

      <StudioLegalContact subject="Terms or billing inquiry" />
    </LegalPageShell>
  );
}
