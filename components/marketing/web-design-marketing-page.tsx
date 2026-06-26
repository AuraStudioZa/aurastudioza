"use client";

import { useEffect } from "react";
import { siteLinks } from "../../lib/site-links";
import { BrandLogo } from "../brand-logo";
import { SiteFooter } from "../site-footer";
import { ThemeToggle } from "../theme-toggle";
import {
  faqs,
  ongoingPlans,
  portfolio,
  processSteps,
  whyPoints,
} from "./web-design-content";

function Header() {
  return (
    <header className="site-header glass-panel">
      <div className="container nav-wrap">
        <BrandLogo href="/" variant="compact" />
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <a href={siteLinks.home}>Studio</a>
            </li>
            <li>
              <a href="/web-design#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/web-design#pricing">Pricing</a>
            </li>
            <li>
              <a href="/web-design#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="btn btn-primary" href={siteLinks.contact}>
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}

export function WebDesignMarketingPage() {
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
      { threshold: 0.14, rootMargin: "0px 0px -24px 0px" }
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
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Web Design by AuraStudioZa</p>
              <h1>Websites for South African local businesses.</h1>
              <p className="hero-subheadline">
                Fast, mobile-first websites with .co.za domains, professional email, and POPIA-ready
                contact forms — built by the team behind InvoiceFast and Vehicle Logbook.
              </p>
              <div className="hero-cta-group">
                <a className="btn btn-primary btn-lg" href={siteLinks.contact}>
                  Request a quote
                </a>
                <a className="btn btn-secondary btn-lg" href="#portfolio">
                  View portfolio
                </a>
              </div>
              <ul className="hero-bullets">
                <li>Mobile-first, click-to-call design</li>
                <li>.co.za domain &amp; email setup included in retainer</li>
                <li>You own your domain — we manage hosting</li>
              </ul>
            </div>
            <div className="hero-mockup reveal" aria-hidden="true">
              <div className="hero-screenshot card" style={{ padding: "2rem", minHeight: "16rem" }}>
                <p className="eyebrow">Local service sites</p>
                <p style={{ margin: 0, color: "var(--text-muted)" }}>
                  Plumbers, salons, dentists, and more — each with sticky call buttons, service
                  areas, reviews, and WhatsApp integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section muted-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Portfolio</p>
              <h2>Live demo sites</h2>
              <p className="section-lead">
                Mock local-business sites deployed on our showcase domain — click to view live.
              </p>
            </div>
            <div className="feature-grid">
              {portfolio.map((item) => (
                <article key={item.name} className="card reveal">
                  <p className="eyebrow">{item.niche}</p>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <a
                    className="btn btn-primary"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Process</p>
              <h2>From discovery to handover</h2>
            </div>
            <ol className="steps">
              {processSteps.map((step, index) => (
                <li key={step.title} className="step-card reveal">
                  <span className="step-index">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" className="section muted-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Ongoing costs</p>
              <h2>Domain, hosting &amp; email</h2>
              <p className="section-lead">
                Separate from the one-off build fee. Itemised so you know exactly what you&apos;re
                paying for.
              </p>
            </div>
            <div className="pricing-grid">
              {ongoingPlans.map((plan) => (
                <article key={plan.name} className="pricing-card reveal">
                  <h3>{plan.name}</h3>
                  <p className="price">
                    {plan.price} <span>{plan.suffix}</span>
                  </p>
                  <ul>
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="price-subtext reveal" style={{ marginTop: "1.5rem", textAlign: "center" }}>
              Website build fees are quoted per project based on pages and features.{" "}
              <a href={siteLinks.contact}>Contact us</a> for a fixed quote.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Why AuraStudioZa</p>
              <h2>Software studio quality, local business focus</h2>
            </div>
            <div className="feature-grid">
              {whyPoints.map((point) => (
                <article key={point.title} className="card reveal">
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section muted-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">FAQ</p>
              <h2>Common questions</h2>
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

        <section className="section">
          <div className="container cta-banner reveal">
            <div>
              <p className="eyebrow">Ready to get online?</p>
              <h2>Book a free discovery call and get a fixed quote.</h2>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary btn-lg" href={siteLinks.contact}>
                Contact us
              </a>
              <a className="btn btn-ghost btn-lg" href="#portfolio">
                View portfolio
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter tagline="Web design for South African local businesses." showSupport />
    </>
  );
}
