"use client";

import { useEffect } from "react";
import { siteLinks } from "../../lib/site-links";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import {
  expenseAppUrl,
  expenseBlogSlug,
  expenseFaqs,
  expenseFeatures,
  expenseSignInUrl,
  expenseSteps,
} from "./expense-content";

function Header() {
  return (
    <SiteHeader
      actions={
        <>
          <a className="btn btn-ghost" href={expenseSignInUrl}>
            Sign in
          </a>
          <a className="btn btn-primary" href={expenseAppUrl}>
            Start free
          </a>
        </>
      }
    />
  );
}

export function ExpenseMarketingPage() {
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
              <p className="eyebrow">Expense Report by AuraStudioZa</p>
              <h1>Expense reports for SA contractors — PDF in minutes.</h1>
              <p className="hero-subheadline">
                10 free PDFs per month, ZAR by default, and Share on WhatsApp. Pro adds receipts,
                spreadsheet export, and email — R49/mo incl. VAT.
              </p>
              <div className="hero-cta-group">
                <a className="btn btn-primary btn-lg" href={expenseAppUrl}>
                  Start 14-day Pro trial
                </a>
                <a className="btn btn-secondary btn-lg" href="#pricing">
                  View pricing
                </a>
              </div>
              <ul className="hero-bullets">
                <li>14-day full Pro trial — no card required</li>
                <li>Then 10 free watermarked PDFs/mo</li>
                <li>R49/month incl. VAT for unlimited Pro exports</li>
              </ul>
            </div>
            <div className="hero-mockup reveal" aria-label="Expense Report preview">
              <div className="hero-screenshot glass-panel" style={{ padding: "1.5rem" }}>
                <p className="eyebrow">Live in app</p>
                <h2 className="display-heading display-heading-sm">Professional ZAR expense PDFs</h2>
                <p className="hero-subheadline">
                  Sign in at expenses.aurastudioza.com to build reports with live preview, saved
                  history, and WhatsApp share.
                </p>
                <a className="btn btn-primary btn-full" href={expenseAppUrl}>
                  Open Expense Report
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Features</p>
              <h2>Focused reimbursement reports — not a full accounting suite</h2>
              <p className="section-lead">
                An expense report generator for South African contractors — ZAR by default, PDF and
                WhatsApp share on the free tier, and receipt images plus spreadsheet export when you
                need a proper reimbursement claim.
              </p>
            </div>
            <div className="feature-grid">
              {expenseFeatures.map((feature) => (
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
              <h2>Enter · Preview · Export</h2>
            </div>
            <ol className="steps">
              {expenseSteps.map((step, index) => (
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
              <h2>Try full Pro free for 14 days</h2>
            </div>
            <div className="pricing-grid">
              <article className="pricing-card pricing-card-pro reveal">
                <p className="plan-badge">Trial</p>
                <h3>14 days Pro</h3>
                <p className="price-line">
                  <span className="price-amount">Free</span>
                  <span className="price-detail">No card required</span>
                </p>
                <p className="price-subtext">Unlimited PDFs, spreadsheet export, receipts, email during trial</p>
                <ul>
                  <li>Logo on PDF</li>
                  <li>Receipt images in PDF</li>
                  <li>Up to 50 saved reports (oldest removed when full)</li>
                </ul>
                <a className="btn btn-primary btn-full" href={expenseAppUrl}>
                  Start free trial
                </a>
              </article>
              <article className="pricing-card reveal">
                <h3>After trial</h3>
                <p className="price-line">
                  <span className="price-amount">R49</span>
                  <span className="price-detail">/month incl. VAT</span>
                </p>
                <p className="price-subtext">Or stay on Free — 10 PDFs/mo with watermark</p>
                <ul>
                  <li>Free: 5 lines per report, 10 saved, WhatsApp share</li>
                  <li>Pro: unlimited PDFs, spreadsheet (.xlsx), email, 50 saved</li>
                  <li>Cancel anytime in billing portal</li>
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
              {expenseFaqs.map((faq) => (
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
              <p className="eyebrow">Ready to claim faster?</p>
              <h2>Build your first expense report in minutes.</h2>
            </div>
            <a className="btn btn-primary btn-lg" href={expenseAppUrl}>
              Go to expenses.aurastudioza.com
            </a>
          </div>
        </section>

        <section className="section muted-section" aria-label="Related reading">
          <div className="container reveal">
            <p className="eyebrow">Related reading</p>
            <a
              className="btn btn-secondary"
              href={`${siteLinks.blog}/${expenseBlogSlug}`}
            >
              What to include on a contractor expense report
            </a>
          </div>
        </section>

        <section className="section muted-section" aria-label="Related products">
          <div className="container reveal">
            <p className="eyebrow">Also from AuraStudioZa</p>
            <div className="hero-cta-group">
              <a className="btn btn-secondary" href={siteLinks.invoicefast}>
                InvoiceFast — client invoices
              </a>
              <a className="btn btn-secondary" href={siteLinks.logbook}>
                Vehicle Logbook — business km
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter tagline="Expense Report — reimbursement PDFs for SA contractors." showSupport />
    </>
  );
}
