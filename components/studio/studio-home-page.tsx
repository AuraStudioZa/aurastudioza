"use client";

import { useEffect } from "react";
import { products } from "./content";

function StudioHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="/" className="brand" aria-label="AuraStudioZa Home">
          <span className="brand-mark" aria-hidden="true">
            AS
          </span>
          <span className="brand-text">AuraStudioZa</span>
        </a>
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

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <StudioHeader />
      <main id="main-content">
        <section className="studio-hero section">
          <div className="container studio-hero-inner reveal">
            <p className="eyebrow">AuraStudioZa</p>
            <h1>Practical software for modern independent work.</h1>
            <p className="studio-hero-subheadline">
              We build focused tools that help freelancers and small businesses work faster, look
              professional, and get paid with less admin.
            </p>
          </div>
        </section>

        <section id="products" className="section muted-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Products</p>
              <h2>Tools from AuraStudioZa</h2>
              <p className="section-lead">
                Start with InvoiceFast today. More products will join the studio over time.
              </p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article key={product.slug} className="product-card reveal">
                  <div className="product-card-top">
                    <p className="product-status">{product.status}</p>
                    <h3>{product.name}</h3>
                    <p className="product-tagline">{product.tagline}</p>
                    <p>{product.description}</p>
                    <ul className="product-highlights">
                      {product.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <a className="btn btn-primary btn-full" href={product.href}>
                    View {product.name}
                  </a>
                </article>
              ))}

              <article className="product-card product-card-soon reveal" aria-label="More products coming">
                <div className="product-card-top">
                  <p className="product-status product-status-soon">Coming later</p>
                  <h3>More on the way</h3>
                  <p className="product-tagline">New tools for creators and small teams.</p>
                  <p>
                    AuraStudioZa is growing. Future products will appear here as they launch.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-block reveal">
            <p className="eyebrow">About</p>
            <h2>Built in South Africa, designed for global-ready work</h2>
            <p>
              AuraStudioZa is a solo-founder studio focused on clean UX, trustworthy workflows, and
              software that solves real day-to-day business problems—starting with invoicing through
              InvoiceFast.
            </p>
          </div>
        </section>
      </main>
      <StudioFooter />
    </>
  );
}
