import { JsonLd, aboutOrganizationJsonLd } from "../json-ld";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { siteLinks } from "../../lib/site-links";

const beliefs = [
  {
    title: "Clean UX beats feature bloat",
    description:
      "Every screen should earn its place. We ship focused tools that do one job well instead of dashboards you need a manual for.",
  },
  {
    title: "Fair pricing for independent work",
    description:
      "Generous free tiers, clear ZAR pricing, and trials without card tricks. You should know what you pay before you commit.",
  },
  {
    title: "Built for South African reality",
    description:
      "VAT-inclusive defaults, ZAR, WhatsApp-friendly workflows, and honest disclaimers about SARS — not copy-pasted US SaaS patterns.",
  },
  {
    title: "Your data, your business",
    description:
      "POPIA-aware forms, transparent privacy policies, and exports you can hand to an accountant without vendor lock-in theatre.",
  },
];

export function AboutPageContent() {
  return (
    <>
      <JsonLd data={aboutOrganizationJsonLd()} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="section legal-page about-page">
        <div className="container legal-content glass-panel reveal">
          <p className="eyebrow">About AuraStudioZa</p>
          <h1 className="display-heading">Practical software for South African freelancers and small businesses</h1>
          <p>
            AuraStudioZa is a solo-founder studio based in South Africa. We build focused tools that
            reduce admin, help you look professional, and keep records you can defend — without
            enterprise complexity or surprise pricing.
          </p>

          <h2>Founder story</h2>
          <p>
            <strong>Gerswin Isaacs</strong> started AuraStudioZa after years of juggling invoices,
            mileage logs, and client comms as an independent operator. Existing software was either
            too generic (US-centric tax and currency defaults) or too heavy for a one-person business.
          </p>
          <p>
            The first product, <a href={siteLinks.invoicefast}>InvoiceFast</a>, came from a simple
            need: send a VAT-friendly PDF invoice with bank details on it, share it on WhatsApp, and
            keep a history without spreadsheets. Vehicle Logbook followed when structured travel
            records proved just as painful. Free tools on this site — like the{" "}
            <a href={siteLinks.vatCalculator}>VAT calculator</a> and{" "}
            <a href={siteLinks.emailSignature}>email signature generator</a> — ship the same
            philosophy: useful in the browser, no sign-up required.
          </p>

          <h2>Why AuraStudioZa exists</h2>
          <p>
            South African freelancers, consultants, and small business owners wear every hat. Tax
            years, VAT periods, travel allowances, and client payment chasing compete for the same
            evenings. AuraStudioZa exists to shrink that load with software that respects your time,
            your currency, and your compliance context — while staying honest that we are not your
            tax practitioner.
          </p>

          <h2>Mission</h2>
          <p>
            Help independent workers and lean teams in South Africa run cleaner businesses: professional
            client-facing output, trustworthy records, and workflows that fit how work actually happens
            here — mobile-first, WhatsApp-adjacent, and priced in Rands.
          </p>

          <h2>What we believe</h2>
          <ul>
            {beliefs.map((belief) => (
              <li key={belief.title}>
                <strong>{belief.title}.</strong> {belief.description}
              </li>
            ))}
          </ul>

          <h2>Products today</h2>
          <p>
            <a href={siteLinks.invoicefast}>InvoiceFast</a> (invoicing),{" "}
            <a href={siteLinks.logbook}>Vehicle Logbook</a> (mileage records), plus free utilities and
            upcoming studio tools documented on our <a href={siteLinks.blog}>blog</a>. Questions?{" "}
            <a href={siteLinks.contact}>Contact support</a>.
          </p>
        </div>
      </main>
      <SiteFooter showSupport />
    </>
  );
}
