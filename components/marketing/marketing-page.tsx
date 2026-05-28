"use client";

import { useEffect } from "react";
import { BrandLogo } from "../brand-logo";
import { faqs, features, plans, socialProof, steps } from "./content";

type MarketingPageProps = {
  basePath?: string;
};

function Header({ basePath }: { basePath: string }) {
  const navLinks = [
    { href: `${basePath}#features`, label: "Features" },
    { href: `${basePath}#pricing`, label: "Pricing" },
    { href: `${basePath}#faq`, label: "FAQ" },
  ];

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <BrandLogo href="/" />
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <a className="btn btn-ghost" href="#" aria-label="Sign in to InvoiceFast">
            Sign In
          </a>
          <a className="btn btn-primary" href="#" aria-label="Start free with InvoiceFast">
            Start Free
          </a>
        </div>
      </div>
    </header>
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
            <a className="btn btn-primary btn-lg" href="#" aria-label="Start free now">
              Start Free
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
            <li>Live invoice builder with real-time preview</li>
            <li>VAT-friendly totals for South African invoicing</li>
            <li>Secure account-based invoice history</li>
          </ul>
        </div>

        <div className="hero-mockup reveal" aria-label="InvoiceFast product preview">
          <div className="mockup-window">
            <div className="mockup-header">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <p>InvoiceFast Dashboard</p>
            </div>
            <div className="mockup-body">
              <div className="mockup-form">
                <h2>Create Invoice</h2>
                <label>Client name</label>
                <div className="field">Mokoena Creative Studio</div>
                <label>Service item</label>
                <div className="field">Brand strategy package</div>
                <label>Amount</label>
                <div className="field">R4,500.00</div>
                <div className="status status-success">Ready to export PDF</div>
              </div>
              <div className="mockup-preview">
                <h3>Invoice Preview</h3>
                <p>INV-2041</p>
                <p>
                  Subtotal <strong>R4,500.00</strong>
                </p>
                <p>
                  VAT (15%) <strong>R675.00</strong>
                </p>
                <p className="total-row">
                  Total <strong>R5,175.00</strong>
                </p>
                <button className="btn btn-accent mockup-btn" type="button" aria-label="Download PDF">
                  Download PDF
                </button>
              </div>
            </div>
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
          <h2>Start free, upgrade when you need more power</h2>
        </div>
        <div className="pricing-grid">
          <article className="pricing-card reveal" aria-label="Free plan">
            <h3>{plans.free.name}</h3>
            <p className="price">
              {plans.free.price} <span>/month</span>
            </p>
            <p className="price-subtext">{plans.free.subtext}</p>
            <ul>
              {plans.free.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className="btn btn-secondary btn-full" href="#">
              {plans.free.cta}
            </a>
          </article>

          <article className="pricing-card pricing-card-pro reveal" aria-label="Pro plan">
            <p className="plan-badge">Most Popular</p>
            <h3>{plans.pro.name}</h3>
            <p className="price">
              {plans.pro.price} <span>/month</span>
            </p>
            <p className="price-subtext">{plans.pro.subtext}</p>
            <ul>
              {plans.pro.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className="btn btn-primary btn-full" href="#">
              {plans.pro.cta}
            </a>
          </article>
        </div>
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
          <h2>Start free today and send your first invoice in minutes.</h2>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary btn-lg" href="#">
            Start Free
          </a>
          <a className="btn btn-ghost btn-lg" href={`${basePath}#pricing`}>
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">AuraStudioZa</p>
          <p className="footer-copy">InvoiceFast - Create professional invoices in minutes.</p>
        </div>
        <nav aria-label="Footer links">
          <ul className="footer-links">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
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
      <Header basePath={basePath} />
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
      <Footer />
    </>
  );
}
