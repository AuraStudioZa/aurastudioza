"use client";

import { useEffect } from "react";
import { BrandLogo } from "../brand-logo";
import { ThemeToggle } from "../theme-toggle";
import { products } from "./content";

function StudioHeader() {
  return (
    <header className="site-header glass-panel">
      <div className="container nav-wrap">
        <BrandLogo href="/" variant="compact" />
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

function StudioFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">AuraStudioZa</p>
          <p className="footer-copy">Practical software for freelancers and small businesses.</p>
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
          </ul>
        </nav>
      </div>
    </footer>
  );
}

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

  const invoiceFast = products[0];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <StudioHeader />
      <main id="main-content">
        <section className="studio-hero section">
          <div className="container studio-hero-layout reveal">
            <div className="studio-hero-copy">
              <h1 className="display-heading">Practical software for modern independent work.</h1>
              <p className="studio-hero-subheadline">
                AuraStudioZa builds focused tools that help freelancers and small businesses work
                faster, look professional, and get paid with less admin.
              </p>
            </div>
            <div className="studio-hero-logo glass-panel">
              <BrandLogo href="/" variant="hero" />
            </div>
          </div>
        </section>

        <section id="products" className="section muted-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Products</p>
              <h2 className="display-heading display-heading-sm">Tools from AuraStudioZa</h2>
              <p className="section-lead">
                Start with InvoiceFast today. More products will join the studio over time.
              </p>
            </div>

            <div className="bento-grid">
              <article className="bento-card bento-invoicefast glass-panel reveal">
                <p className="product-status">Live</p>
                <h3 className="display-heading display-heading-sm">{invoiceFast.name}</h3>
                <p className="product-tagline">{invoiceFast.tagline}</p>
                <p>{invoiceFast.description}</p>
                <ul className="product-highlights">
                  {invoiceFast.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="btn btn-primary" href={invoiceFast.href}>
                  View {invoiceFast.name}
                </a>
              </article>

              <article className="bento-card bento-soon glass-panel reveal" aria-label="More products coming">
                <p className="product-status product-status-soon">Coming later</p>
                <h3 className="display-heading display-heading-sm">More on the way</h3>
                <p className="product-tagline">New tools for creators and small teams.</p>
                <p>Future AuraStudioZa products will appear here as they launch.</p>
              </article>

              <article id="about" className="bento-card bento-about glass-panel reveal">
                <p className="eyebrow">About</p>
                <h3 className="display-heading display-heading-sm">Built in South Africa</h3>
                <p>
                  A solo-founder studio focused on clean UX, trustworthy workflows, and software
                  that solves real business problems—starting with invoicing through InvoiceFast.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <StudioFooter />
    </>
  );
}
