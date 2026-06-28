"use client";

import { useEffect } from "react";
import { appLinks, siteLinks } from "../../lib/site-links";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { faqs, features, plans, socialProof, steps } from "./content";

type MarketingPageProps = {
  basePath?: string;
};

function Header() {
  return (
    <SiteHeader
      actions={
        <>
          <a className="btn btn-ghost" href={appLinks.login} aria-label="Sign in to InvoiceFast">
            Sign In
          </a>
          <a
            className="btn btn-primary"
            href={appLinks.signup}
            aria-label="Start 14-day Pro trial with InvoiceFast"
          >
            Start trial
          </a>
        </>
      }
    />
  );
}

function HeroSection({ basePath }: { basePath: string }) {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">InvoiceFast by AuraStudioZa</p>
          <h1>Professional invoices in minutes.</h1>
          <p className="hero-subheadline">
            Create, export, and track invoices with a clean workflow built for freelancers.
          </p>
          <div className="hero-cta-group">
            <a className="btn btn-primary btn-lg" href={appLinks.signup} aria-label="Start 14-day Pro trial">
              Start 14-day trial
            </a>
            <a
              className="btn btn-secondary btn-lg"
              href={`${basePath}#pricing`}
              aria-label="View pricing plans"
            >
              View Pricing
            </a>
          </div>
          <ul className="hero-bullets" aria-label="Product highlights">
            <li>14-day full Pro trial — no card required</li>
            <li>Bank &amp; VAT details on PDFs (all plans)</li>
            <li>Then R79/month incl. VAT to keep Pro</li>
          </ul>
        </div>

        <div className="hero-mockup reveal" aria-label="InvoiceFast live preview">
          <div className="hero-screenshot">
            <img
              src="/invoicefast-live-preview.png"
              alt="InvoiceFast live invoice preview with line items, VAT-inclusive ZAR totals, and bank payment details on the PDF."
              width={520}
              height={696}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="social-proof">
      <div className="container social-proof-wrap reveal">
        <p>Built for freelancers and small teams.</p>
        <div className="logo-strip" aria-label="Client and creator logos">
          {socialProof.map((proof) => (
            <span key={proof} className="logo-pill">
              {proof}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Features</p>
          <h2>Everything you need to invoice with confidence</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="card reveal">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="section muted-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">How it works</p>
          <h2>Create - Export/Send - Get Paid</h2>
        </div>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title} className="step-card reveal">
              <span className="step-index">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Pricing</p>
          <h2>Try full Pro free for 14 days</h2>
        </div>
        <div className="pricing-grid">
          <article
            className="pricing-card pricing-card-pro reveal"
            aria-label="Pro trial"
          >
            <p className="plan-badge">Start here</p>
            <h3>{plans.trial.name}</h3>
            <p className="price">
              {plans.trial.price}{" "}
              <span>· {plans.trial.priceSuffix}</span>
            </p>
            <p className="price-subtext">{plans.trial.subtext}</p>
            <ul>
              {plans.trial.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className="btn btn-primary btn-full" href={appLinks.signup}>
              {plans.trial.cta}
            </a>
          </article>

          <article className="pricing-card reveal" aria-label="Pro plan">
            <h3>{plans.pro.name}</h3>
            <p className="price">
              {plans.pro.price}{" "}
              <span>/{plans.pro.priceSuffix ?? "month"}</span>
            </p>
            <p className="price-subtext">{plans.pro.subtext}</p>
            <ul>
              {plans.pro.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            {"footnote" in plans.pro && plans.pro.footnote && (
              <p className="price-subtext">{plans.pro.footnote}</p>
            )}
            <a className="btn btn-secondary btn-full" href={appLinks.signupPro}>
              {plans.pro.cta}
            </a>
          </article>
        </div>
        <p className="price-subtext reveal" style={{ marginTop: "1.5rem", textAlign: "center" }}>
          After your trial: <strong>{plans.free.name}</strong> — {plans.free.features[0].toLowerCase()},{" "}
          {plans.free.features[1].toLowerCase()}, {plans.free.features[2].toLowerCase()}.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section">
      <div className="container about-block reveal">
        <p className="eyebrow">About AuraStudioZa</p>
        <h2>Built in South Africa, designed for modern independent work</h2>
        <p>
          AuraStudioZa builds practical digital products that help people work faster and get paid
          with less admin. InvoiceFast focuses on clean workflows, secure account history, and
          professional output your clients can trust.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section muted-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">FAQ</p>
          <h2>Answers before you start</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item reveal">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection({ basePath }: { basePath: string }) {
  return (
    <section className="section">
      <div className="container cta-banner reveal">
        <div>
          <p className="eyebrow">Ready to simplify invoicing?</p>
          <h2>Start your 14-day Pro trial and send your first invoice in minutes.</h2>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary btn-lg" href={appLinks.signup}>
            Start 14-day trial
          </a>
          <a className="btn btn-ghost btn-lg" href={`${basePath}#pricing`}>
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

export function MarketingPage({ basePath = "/invoicefast" }: MarketingPageProps) {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -24px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection basePath={basePath} />
        <SocialProofSection />
        <FeaturesSection />
        <StepsSection />
        <PricingSection />
        <AboutSection />
        <FaqSection />
        <FinalCtaSection basePath={basePath} />
      </main>
      <SiteFooter tagline="InvoiceFast - Create professional invoices in minutes." showSupport />
    </>
  );
}
