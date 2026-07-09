"use client";

import { useEffect } from "react";
import { BrandLogo } from "../brand-logo";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { siteLinks } from "../../lib/site-links";
import { freeTools, products } from "./content";

export function StudioHomePage() {
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

  const bentoClassBySlug: Record<string, string> = {
    invoicefast: "bento-invoicefast",
    logbook: "bento-logbook",
    expenses: "bento-expense",
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="studio-hero section">
          <div className="container studio-hero-layout">
            <div className="studio-hero-copy reveal">
              <h1 className="display-heading">Practical software for modern independent work.</h1>
              <p className="studio-hero-subheadline">
                AuraStudioZa builds focused tools that help freelancers and small businesses work
                faster, look professional, and get paid with less admin.
              </p>
            </div>
            <div className="studio-hero-logo glass-panel">
              <BrandLogo href={null} variant="hero" />
            </div>
          </div>
        </section>

        <section id="products" className="section muted-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Products</p>
              <h2 className="display-heading display-heading-sm">Tools from AuraStudioZa</h2>
              <p className="section-lead">
                InvoiceFast, Vehicle Logbook, and Expense Report are live. More studio tools will
                join over time.
              </p>
            </div>

            <div className="bento-grid">
              {products.map((product) => (
                <article
                  key={product.slug}
                  className={`bento-card glass-panel reveal ${
                    bentoClassBySlug[product.slug] ?? ""
                  }`}
                >
                  <p className="product-status">{product.status}</p>
                  <h3 className="display-heading display-heading-sm">{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p>{product.description}</p>
                  <ul className="product-highlights">
                    {product.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="btn btn-primary" href={product.href}>
                    View {product.name}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <div className="about-block reveal glass-panel">
              <p className="eyebrow">About</p>
              <h2 className="display-heading display-heading-sm">Built in South Africa</h2>
              <p>
                A solo-founder studio focused on clean UX, trustworthy workflows, and software
                that solves real business problems—starting with InvoiceFast, Vehicle Logbook, and
                Expense Report.{" "}
                <a href={siteLinks.about}>Read our full story</a>.
              </p>
            </div>
          </div>
        </section>

        <section id="free-tools" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Free tools</p>
              <h2 className="display-heading display-heading-sm">Useful utilities, no sign-up</h2>
              <p className="section-lead">
                Small helpers from AuraStudioZa — free to use in your browser. More will appear here
                as we ship them.
              </p>
            </div>
            <div className="free-tools-grid">
              {freeTools.map((tool) => (
                <article
                  key={tool.slug}
                  className="bento-card glass-panel reveal bento-free-tool"
                >
                  <p className="product-status product-status-free">{tool.status}</p>
                  <h3 className="display-heading display-heading-sm">{tool.name}</h3>
                  <p className="product-tagline">{tool.tagline}</p>
                  <p>{tool.description}</p>
                  <ul className="product-highlights">
                    {tool.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    className="btn btn-free-tool"
                    href={tool.href}
                    aria-label={`Open ${tool.name}`}
                  >
                    {tool.slug === "email-signature" ? "Open generator" : "Open calculator"}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showSupport />
    </>
  );
}
