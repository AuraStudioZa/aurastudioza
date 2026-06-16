"use client";

import { useEffect } from "react";
import { siteLinks } from "../../lib/site-links";
import { BrandLogo } from "../brand-logo";
import { SiteFooter } from "../site-footer";
import { ThemeToggle } from "../theme-toggle";
import {
  logbookAppUrl,
  logbookFaqs,
  logbookFeatures,
  logbookSteps,
} from "./logbook-content";

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
              <a href="/logbook#features">Features</a>
            </li>
            <li>
              <a href="/logbook#pricing">Pricing</a>
            </li>
            <li>
              <a href="/logbook#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="btn btn-primary" href={logbookAppUrl}>
            Open app
          </a>
        </div>
      </div>
    </header>
  );
}

export function LogbookMarketingPage() {
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
              <p className="eyebrow">Vehicle Logbook by AuraStudioZa</p>
              <h1>Company car mileage, without spreadsheet pain.</h1>
              <p className="hero-subheadline">
                Log odometer stops, split business vs private km, and export monthly or annual
                travel logs — built for South African reporting periods.
              </p>
              <div className="hero-cta-group">
                <a className="btn btn-primary btn-lg" href={logbookAppUrl}>
                  Start free month
                </a>
                <a className="btn btn-secondary btn-lg" href="#pricing">
                  View pricing
                </a>
              </div>
              <ul className="hero-bullets">
                <li>1 full calendar month free — sign in to start trial</li>
                <li>Monthly business travel CSV &amp; PDF</li>
                <li>R89/month incl. VAT after trial</li>
              </ul>
            </div>
            <div className="hero-mockup reveal" aria-label="Vehicle Logbook live preview">
              <p className="hero-preview-label">
                <span className="hero-preview-pulse" aria-hidden="true" />
                Live preview
              </p>
              <div className="hero-screenshot hero-screenshot-phone">
                <img
                  className="logbook-preview logbook-preview-light"
                  src="/logbook-live-preview-light.png"
                  alt="Vehicle Logbook dashboard in light mode — period stats and today's business and private stops."
                  width={390}
                  height={844}
                  loading="eager"
                  decoding="async"
                />
                <img
                  className="logbook-preview logbook-preview-dark"
                  src="/logbook-live-preview-dark.png"
                  alt="Vehicle Logbook dashboard in dark mode — period stats and today's business and private stops."
                  width={390}
                  height={844}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Features</p>
              <h2>Built for monthly and annual mileage reporting</h2>
            </div>
            <div className="feature-grid">
              {logbookFeatures.map((feature) => (
                <article key={feature.title} className="card reveal">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">How it works</p>
              <h2>Log · Sync · Export</h2>
            </div>
            <ol className="steps">
              {logbookSteps.map((step, index) => (
                <li key={step.title} className="step-card reveal">
                  <span className="step-index">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Pricing</p>
              <h2>Try a full month free</h2>
            </div>
            <div className="pricing-grid" style={{ maxWidth: "28rem", margin: "0 auto" }}>
              <article className="pricing-card pricing-card-pro reveal">
                <p className="plan-badge">Trial</p>
                <h3>1 calendar month</h3>
                <p className="price">
                  Free <span>· no card in app</span>
                </p>
                <p className="price-subtext">Full export access during trial</p>
                <ul>
                  <li>Cloud sync across devices</li>
                  <li>Monthly &amp; tax-year CSV/PDF</li>
                  <li>Business travel log export</li>
                </ul>
                <a className="btn btn-primary btn-full" href={logbookAppUrl}>
                  Open Vehicle Logbook
                </a>
              </article>
              <article className="pricing-card reveal">
                <h3>After trial</h3>
                <p className="price">
                  R89 <span>/month incl. VAT</span>
                </p>
                <p className="price-subtext">Subscribe in app when trial ends</p>
                <ul>
                  <li>Unlimited stops &amp; vehicles</li>
                  <li>All export formats</li>
                  <li>Cloud backup</li>
                </ul>
              </article>
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
              {logbookFaqs.map((faq) => (
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
              <p className="eyebrow">Ready to log smarter?</p>
              <h2>Open the app and log your first stop in minutes.</h2>
            </div>
            <a className="btn btn-primary btn-lg" href={logbookAppUrl}>
              Go to logbook.aurastudioza.com
            </a>
          </div>
        </section>
      </main>
      <SiteFooter tagline="Vehicle Logbook — business & private km for SA drivers." showSupport />
    </>
  );
}
