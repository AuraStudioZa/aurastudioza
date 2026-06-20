"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  breakdownSummary,
  calculateVat,
  clampVatRate,
  currencySymbol,
  formatMoney,
  formatVatRateLabel,
  parseAmountInput,
  type VatInputMode,
} from "../../lib/vat-calculator";
import { detectJurisdictionFromBrowser } from "../../lib/vat-country-detect";
import {
  DEFAULT_JURISDICTION_ID,
  getJurisdiction,
} from "../../lib/vat-jurisdictions";
import { siteLinks } from "../../lib/site-links";
import { BrandLogo } from "../brand-logo";
import { SiteFooter } from "../site-footer";
import { ThemeToggle } from "../theme-toggle";
import { vatCalculatorLinks, vatFaqs } from "./vat-calculator-content";
import { VatCountryCombobox } from "./vat-country-combobox";

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
              <a href={siteLinks.invoicefast}>InvoiceFast</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="btn btn-primary" href={vatCalculatorLinks.signup}>
            Try InvoiceFast
          </a>
        </div>
      </div>
    </header>
  );
}

export function VatCalculatorPage() {
  const [jurisdictionId, setJurisdictionId] = useState(DEFAULT_JURISDICTION_ID);
  const [inputMode, setInputMode] = useState<VatInputMode>("inclusive");
  const [amountInput, setAmountInput] = useState("115");
  const [vatRateInput, setVatRateInput] = useState(
    String(getJurisdiction(DEFAULT_JURISDICTION_ID).standardVatRate)
  );
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [detectNote, setDetectNote] = useState<string | null>(null);
  const userPickedCountryRef = useRef(false);

  useEffect(() => {
    if (userPickedCountryRef.current) return;

    const detectedId = detectJurisdictionFromBrowser();
    if (!detectedId) return;

    const detected = getJurisdiction(detectedId);
    setJurisdictionId(detected.id);
    setVatRateInput(String(detected.standardVatRate));

    if (detectedId !== DEFAULT_JURISDICTION_ID) {
      setDetectNote(
        `We pre-selected ${detected.label} from your browser locale or timezone — change if you need another country.`
      );
    }
  }, []);

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
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const jurisdiction = getJurisdiction(jurisdictionId);
  const symbol = currencySymbol(jurisdiction);
  const parsedAmount = parseAmountInput(amountInput);
  const parsedRate = parseAmountInput(vatRateInput);
  const vatRate = parsedRate ?? jurisdiction.standardVatRate;
  const standardRateLabel = formatVatRateLabel(jurisdiction.standardVatRate);

  const breakdown = useMemo(() => {
    if (parsedAmount === null) return null;
    return calculateVat(parsedAmount, vatRate, inputMode);
  }, [parsedAmount, vatRate, inputMode]);

  const amountError =
    amountInput.trim() && parsedAmount === null ? "Enter a valid amount (0 or more)." : null;

  function onJurisdictionChange(id: string) {
    userPickedCountryRef.current = true;
    setDetectNote(null);
    const next = getJurisdiction(id);
    setJurisdictionId(next.id);
    setVatRateInput(String(next.standardVatRate));
    setCopyStatus(null);
  }

  async function copyBreakdown() {
    if (!breakdown) return;
    const text = breakdownSummary(breakdown, jurisdiction);
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("Copied to clipboard.");
    } catch {
      setCopyStatus("Copy failed — select the amounts and copy manually.");
    }
  }

  const amountLabel =
    inputMode === "inclusive"
      ? `Amount incl. ${jurisdiction.taxName} (${symbol})`
      : `Amount excl. ${jurisdiction.taxName} (${symbol})`;

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <section className="section tool-page-hero">
          <div className="container">
            <div className="hero-copy reveal">
              <p className="eyebrow">Free tool by AuraStudioZa</p>
              <h1>VAT &amp; GST calculator — incl. and excl.</h1>
              <p className="hero-subheadline">
                Convert between tax-inclusive and tax-exclusive amounts for 40+ countries. Currency
                and standard rate update when you change country — no sign-up required.
              </p>
            </div>
          </div>
        </section>

        <section className="section sig-builder-section tool-page-main">
          <div className="container">
            <div className="sig-builder-grid">
              <div className="sig-form card">
                <h2 className="sig-panel-title">Your amount</h2>
                <p className="sig-hint sig-draft-note">
                  Pick your country, choose incl. or excl., then enter the amount. Edit the rate if
                  you need a reduced or zero rate.
                </p>

                <fieldset className="sig-form-section">
                  <legend className="sig-section-legend">Country &amp; currency</legend>
                  <VatCountryCombobox
                    jurisdictionId={jurisdictionId}
                    onSelect={onJurisdictionChange}
                    detectNote={detectNote}
                  />
                  <p className="sig-hint">
                    Standard {jurisdiction.taxName}: {standardRateLabel}% · {jurisdiction.currency}{" "}
                    ({symbol})
                  </p>
                </fieldset>

                <fieldset className="sig-form-section">
                  <legend className="sig-section-legend">Amount type</legend>
                  <div className="sig-toggle-row">
                    {(
                      [
                        ["inclusive", "Incl. tax"],
                        ["exclusive", "Excl. tax"],
                      ] as const
                    ).map(([mode, label]) => (
                      <button
                        key={mode}
                        type="button"
                        className={`sig-toggle-btn${inputMode === mode ? " active" : ""}`}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => setInputMode(mode)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <p className="sig-hint">
                    {inputMode === "inclusive"
                      ? `Total including ${jurisdiction.taxName} (e.g. ${formatMoney(115, jurisdiction)} on a receipt).`
                      : `Net price before ${jurisdiction.taxName} is added (e.g. ${formatMoney(100, jurisdiction)} on an invoice line).`}
                  </p>
                </fieldset>

                <fieldset className="sig-form-section">
                  <legend className="sig-section-legend">Values</legend>
                  <label className="sig-label" htmlFor="vat-amount">
                    {amountLabel}
                  </label>
                  <input
                    id="vat-amount"
                    className="sig-input"
                    inputMode="decimal"
                    value={amountInput}
                    onChange={(e) => {
                      setAmountInput(e.target.value);
                      setCopyStatus(null);
                    }}
                    placeholder="115.00"
                  />
                  {amountError ? <p className="sig-error">{amountError}</p> : null}

                  <label className="sig-label" htmlFor="vat-rate">
                    {jurisdiction.taxName} rate (%)
                  </label>
                  <input
                    id="vat-rate"
                    className="sig-input"
                    inputMode="decimal"
                    value={vatRateInput}
                    onChange={(e) => {
                      setVatRateInput(e.target.value);
                      setCopyStatus(null);
                    }}
                    placeholder={standardRateLabel}
                  />
                  <div className="sig-toggle-row vat-rate-presets">
                    <button
                      type="button"
                      className={`sig-toggle-btn${
                        clampVatRate(vatRate) === jurisdiction.standardVatRate ? " active" : ""
                      }`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setVatRateInput(String(jurisdiction.standardVatRate))}
                    >
                      {standardRateLabel}% (standard)
                    </button>
                    <button
                      type="button"
                      className={`sig-toggle-btn${clampVatRate(vatRate) === 0 ? " active" : ""}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setVatRateInput("0")}
                    >
                      0% (zero-rated)
                    </button>
                  </div>
                </fieldset>
              </div>

              <div className="sig-preview-wrap">
                <div className="sig-preview-header">
                  <h2 className="sig-panel-title">Breakdown</h2>
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!breakdown}
                    onClick={() => void copyBreakdown()}
                  >
                    Copy amounts
                  </button>
                </div>
                {copyStatus ? <p className="status status-success">{copyStatus}</p> : null}
                <div className="vat-results card" aria-live="polite">
                  {breakdown ? (
                    <dl className="vat-results-list">
                      <div className="vat-results-row">
                        <dt>Amount excl. {jurisdiction.taxName}</dt>
                        <dd>{formatMoney(breakdown.amountExclVat, jurisdiction)}</dd>
                      </div>
                      <div className="vat-results-row vat-results-row-accent">
                        <dt>
                          {jurisdiction.taxName} ({formatVatRateLabel(breakdown.vatRate)}%)
                        </dt>
                        <dd>{formatMoney(breakdown.vatAmount, jurisdiction)}</dd>
                      </div>
                      <div className="vat-results-row vat-results-row-total">
                        <dt>Total including {jurisdiction.taxName}</dt>
                        <dd>{formatMoney(breakdown.amountInclVat, jurisdiction)}</dd>
                      </div>
                    </dl>
                  ) : (
                    <p className="sig-hint">Enter a valid amount to see the breakdown.</p>
                  )}
                </div>
                <p className="sig-hint">
                  Standard rates are indicative — not tax advice. Local reduced rates, exemptions, and
                  registration rules may apply ({jurisdiction.label}, {jurisdiction.currency}).
                </p>
              </div>
            </div>

            <aside className="tool-product-promo reveal" aria-label="InvoiceFast">
              <div className="tool-product-promo-copy">
                <p className="eyebrow">Need invoices too?</p>
                <h2 className="tool-product-promo-title">
                  Send professional ZAR invoices with VAT on the PDF
                </h2>
                <p className="tool-product-promo-text">
                  InvoiceFast — VAT-inclusive line items, bank details on every PDF, email to
                  clients, and a 14-day Pro trial. From R79/mo incl. VAT after trial.
                </p>
                <ul className="tool-product-promo-points">
                  <li>VAT-inclusive ZAR totals</li>
                  <li>Bank + VAT reg on PDF</li>
                  <li>14-day Pro trial · no card</li>
                </ul>
              </div>
              <div className="tool-product-promo-actions">
                <a className="btn btn-primary btn-lg" href={vatCalculatorLinks.signup}>
                  Start free trial
                </a>
                <a className="btn btn-secondary" href={vatCalculatorLinks.invoicefast}>
                  View InvoiceFast
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="faq" className="section tool-page-faq">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">FAQ</p>
              <h2>Common questions</h2>
            </div>
            <div className="faq-list">
              {vatFaqs.map((faq) => (
                <details key={faq.question} className="faq-item reveal">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter tagline="Free tools and practical software for freelancers and creatives." />
    </>
  );
}
