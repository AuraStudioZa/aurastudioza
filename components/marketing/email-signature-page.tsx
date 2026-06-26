"use client";

import { useEffect, useMemo, useRef, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import {
  copySignatureHtmlSource,
  copySignaturePlain,
  copySignatureRich,
} from "../../lib/copy-signature";
import {
  clearSignatureDraft,
  loadSignatureDraft,
  saveSignatureDraft,
} from "../../lib/signature-draft";
import { siteLinks } from "../../lib/site-links";
import { processSignatureImageFile } from "../../lib/signature-image";
import {
  buildSignatureHtml,
  buildSignaturePlainText,
  defaultSignatureFields,
  type SignatureFields,
  type SignatureTemplate,
  type StudioImageMode,
} from "../../lib/signature-html";
import {
  defaultIncludeInvoiceFast,
  imageProcessModeForTemplate,
  templateFieldConfig,
} from "../../lib/signature-template-config";
import { BrandLogo } from "../brand-logo";
import { SiteFooter } from "../site-footer";
import { ThemeToggle } from "../theme-toggle";
import {
  emailSignatureLinks,
  installSteps,
  otherClientsInstallNote,
  logoImageGuidance,
  signatureFaqs,
  templateGroups,
  templateOptions,
} from "./email-signature-content";

type FormState = Omit<SignatureFields, "invoiceFastUrl">;

const initialForm: FormState = {
  fullName: defaultSignatureFields.fullName,
  jobTitle: defaultSignatureFields.jobTitle,
  company: defaultSignatureFields.company,
  phone: defaultSignatureFields.phone,
  email: defaultSignatureFields.email,
  website: defaultSignatureFields.website,
  tagline: defaultSignatureFields.tagline,
  accentColor: defaultSignatureFields.accentColor,
  imageUrl: defaultSignatureFields.imageUrl,
  studioImageMode: defaultSignatureFields.studioImageMode,
  linkedIn: defaultSignatureFields.linkedIn,
  instagram: defaultSignatureFields.instagram,
  facebook: defaultSignatureFields.facebook,
  includeInvoiceFastLine: true,
};

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
              <a href="#how-to">How to install</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="btn btn-primary" href={emailSignatureLinks.signup}>
            Try InvoiceFast
          </a>
        </div>
      </div>
    </header>
  );
}

function updateField<K extends keyof FormState>(
  setter: Dispatch<SetStateAction<FormState>>,
  key: K,
  value: FormState[K]
) {
  setter((prev) => ({ ...prev, [key]: value }));
}

export function EmailSignaturePage() {
  const [template, setTemplate] = useState<SignatureTemplate>("professional");
  const [form, setForm] = useState<FormState>(initialForm);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [draftRestored, setDraftRestored] = useState(false);
  const [storageWarning, setStorageWarning] = useState<string | null>(null);
  const prevTemplateRef = useRef<SignatureTemplate | null>(null);

  useEffect(() => {
    const draft = loadSignatureDraft();
    if (draft) {
      setTemplate(draft.template);
      setForm(draft.form);
      setUploadedFileName(draft.uploadedFileName);
      setDraftRestored(true);
      prevTemplateRef.current = draft.template;
    } else {
      prevTemplateRef.current = "professional";
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const timer = window.setTimeout(() => {
      const saved = saveSignatureDraft({ template, form, uploadedFileName });
      if (!saved && form.imageUrl.startsWith("data:")) {
        setStorageWarning(
          "Your logo could not be saved in this browser — re-upload after refresh if needed."
        );
      } else {
        setStorageWarning((prev) => (prev?.includes("logo") ? null : prev));
      }
    }, 400);

    return () => window.clearTimeout(timer);
  }, [hydrated, template, form, uploadedFileName]);

  useEffect(() => {
    if (!hydrated) return;
    if (prevTemplateRef.current !== null && prevTemplateRef.current !== template) {
      const config = templateFieldConfig[template];
      setForm((prev) => ({
        ...prev,
        includeInvoiceFastLine: defaultIncludeInvoiceFast(template),
        accentColor: config.defaultAccent,
      }));
    }
    prevTemplateRef.current = template;
  }, [template, hydrated]);

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

  const fields: SignatureFields = useMemo(
    () => ({
      ...form,
      invoiceFastUrl: emailSignatureLinks.invoiceFastInSignature,
    }),
    [form]
  );

  const html = useMemo(() => buildSignatureHtml(template, fields), [template, fields]);
  const plainText = useMemo(() => buildSignaturePlainText(template, fields), [template, fields]);

  const fieldConfig = templateFieldConfig[template];

  function imageProcessMode(): "logo" | "headshot" {
    return imageProcessModeForTemplate(template, form.studioImageMode);
  }

  async function onImageFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    setImageError(null);
    try {
      const dataUrl = await processSignatureImageFile(file, imageProcessMode());
      setForm((prev) => ({ ...prev, imageUrl: dataUrl }));
      setUploadedFileName(file.name);
      setCopyStatus(null);
    } catch (error) {
      setImageError(error instanceof Error ? error.message : "Could not use that image.");
    }
  }

  function clearUploadedImage() {
    setForm((prev) => ({ ...prev, imageUrl: "" }));
    setUploadedFileName(null);
    setImageError(null);
  }

  function onImageUrlChange(value: string) {
    setImageError(null);
    setUploadedFileName(null);
    updateField(setForm, "imageUrl", value);
  }

  function startOver() {
    clearSignatureDraft();
    setTemplate("professional");
    setForm(initialForm);
    setUploadedFileName(null);
    setImageError(null);
    setStorageWarning(null);
    setDraftRestored(false);
    setCopyStatus(null);
    prevTemplateRef.current = "professional";
  }

  async function copyForPaste() {
    const ok = await copySignatureRich(html, plainText);
    if (ok) {
      clearSignatureDraft();
      setDraftRestored(false);
      setCopyStatus(
        "Signature copied — paste into your mail client, then Save. Draft cleared; your progress was saved until now."
      );
      return;
    }
    const fallback = await copySignatureHtmlSource(html);
    setCopyStatus(
      fallback
        ? "Copied as HTML text — if paste shows code, use Copy HTML source only in clients with an HTML mode."
        : "Copy failed — select the preview and copy manually."
    );
  }

  async function copyHtml() {
    const ok = await copySignatureHtmlSource(html);
    setCopyStatus(
      ok
        ? "HTML source copied — for clients with a dedicated HTML / source mode only."
        : "Copy failed — select the preview and copy manually."
    );
  }

  async function copyPlain() {
    const ok = await copySignaturePlain(plainText);
    setCopyStatus(ok ? "Plain text copied." : "Copy failed — try selecting the text manually.");
  }

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
              <h1>Email signature generator for freelancers and creatives.</h1>
              <p className="hero-subheadline">
                Build a professional HTML signature, preview it live, and copy into Gmail, Outlook,
                or Spacemail. No sign-up required.
              </p>
            </div>
          </div>
        </section>

        <section className="section sig-builder-section tool-page-main">
          <div className="container">
            <div className="sig-builder-grid">
              <div className="sig-form card">
                <div className="sig-template-picker">
                  {templateGroups.map((group) => (
                    <div key={group.id} className="sig-template-group">
                      <p className="sig-template-group-label">{group.label}</p>
                      <div
                        className="sig-template-tabs"
                        role="tablist"
                        aria-label={`${group.label} templates`}
                      >
                        {templateOptions
                          .filter((option) => option.group === group.id)
                          .map((option) => (
                            <button
                              key={option.id}
                              type="button"
                              role="tab"
                              aria-selected={template === option.id}
                              className={`sig-template-tab${template === option.id ? " active" : ""}`}
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => setTemplate(option.id)}
                            >
                              <span className="sig-template-tab-label">{option.label}</span>
                              <span className="sig-template-tab-desc">{option.description}</span>
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sig-form-head">
                  <h2 className="sig-panel-title">Your details</h2>
                  <button type="button" className="sig-start-over" onClick={startOver}>
                    Start over
                  </button>
                </div>
                {draftRestored ? (
                  <p className="status status-success sig-draft-note">
                    Draft restored — your last session was saved in this browser.
                  </p>
                ) : (
                  <p className="sig-hint sig-draft-note">
                    Progress saves automatically in this browser until you copy your signature.
                  </p>
                )}
                {storageWarning ? <p className="sig-error">{storageWarning}</p> : null}

                <fieldset className="sig-form-section">
                  <legend className="sig-section-legend">Essentials</legend>
                  <label className="sig-label" htmlFor="sig-name">
                    Full name
                  </label>
                  <input
                    id="sig-name"
                    className="sig-input"
                    value={form.fullName}
                    onChange={(e) => updateField(setForm, "fullName", e.target.value)}
                    placeholder="Alex Mokoena"
                  />
                  <label className="sig-label" htmlFor="sig-title">
                    Job title / role
                  </label>
                  <input
                    id="sig-title"
                    className="sig-input"
                    value={form.jobTitle}
                    onChange={(e) => updateField(setForm, "jobTitle", e.target.value)}
                    placeholder="Freelance designer"
                  />
                </fieldset>

                {fieldConfig.company || fieldConfig.tagline ? (
                  <fieldset className="sig-form-section">
                    <legend className="sig-section-legend">About</legend>
                    {fieldConfig.company ? (
                      <>
                        <label className="sig-label" htmlFor="sig-company">
                          Company or studio
                        </label>
                        <input
                          id="sig-company"
                          className="sig-input"
                          value={form.company}
                          onChange={(e) => updateField(setForm, "company", e.target.value)}
                          placeholder="Mokoena Studio"
                        />
                      </>
                    ) : null}
                    {fieldConfig.tagline ? (
                      <>
                        <label className="sig-label" htmlFor="sig-tagline">
                          Tagline (optional)
                        </label>
                        <input
                          id="sig-tagline"
                          className="sig-input"
                          value={form.tagline}
                          onChange={(e) => updateField(setForm, "tagline", e.target.value)}
                          placeholder="Brand designer · Cape Town"
                        />
                      </>
                    ) : null}
                  </fieldset>
                ) : null}

                <fieldset className="sig-form-section">
                  <legend className="sig-section-legend">Contact</legend>
                  <label className="sig-label" htmlFor="sig-phone">
                    Phone
                  </label>
                  <input
                    id="sig-phone"
                    className="sig-input"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField(setForm, "phone", e.target.value)}
                    placeholder="+27 82 000 0000"
                  />
                  <label className="sig-label" htmlFor="sig-email">
                    Email
                  </label>
                  <input
                    id="sig-email"
                    className="sig-input"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField(setForm, "email", e.target.value)}
                    placeholder="you@example.com"
                  />
                  {fieldConfig.website ? (
                    <>
                      <label className="sig-label" htmlFor="sig-website">
                        {fieldConfig.websiteLabel}
                      </label>
                      <input
                        id="sig-website"
                        className="sig-input"
                        type="url"
                        value={form.website}
                        onChange={(e) => updateField(setForm, "website", e.target.value)}
                        placeholder="https://yourportfolio.com"
                      />
                    </>
                  ) : null}
                </fieldset>

                {fieldConfig.accentColor || fieldConfig.image ? (
                  <fieldset className="sig-form-section">
                    <legend className="sig-section-legend">Branding</legend>
                    {fieldConfig.accentColor ? (
                      <>
                        <label className="sig-label" htmlFor="sig-accent">
                          Accent colour
                        </label>
                        <div className="sig-color-row">
                          <input
                            id="sig-accent"
                            className="sig-color-input"
                            type="color"
                            value={form.accentColor}
                            onChange={(e) => updateField(setForm, "accentColor", e.target.value)}
                          />
                          <input
                            className="sig-input sig-color-text"
                            value={form.accentColor}
                            onChange={(e) => updateField(setForm, "accentColor", e.target.value)}
                            aria-label="Accent colour hex"
                          />
                        </div>
                      </>
                    ) : null}

                    {fieldConfig.image ? (
                      <>
                        {fieldConfig.imageUsesHeadshotMode ? (
                          <fieldset className="sig-fieldset">
                            <legend className="sig-label">Image type</legend>
                            <div className="sig-toggle-row">
                              {(["headshot", "logo"] as StudioImageMode[]).map((mode) => (
                                <button
                                  key={mode}
                                  type="button"
                                  className={`sig-toggle-btn${form.studioImageMode === mode ? " active" : ""}`}
                                  onMouseDown={(e) => e.preventDefault()}
                                  onClick={() => updateField(setForm, "studioImageMode", mode)}
                                >
                                  {mode === "headshot" ? "Photo" : "Logo"}
                                </button>
                              ))}
                            </div>
                          </fieldset>
                        ) : null}

                        <label className="sig-label" htmlFor="sig-image-upload">
                          {fieldConfig.imageUsesHeadshotMode && form.studioImageMode === "headshot"
                            ? "Photo (optional)"
                            : "Logo (optional)"}
                        </label>
                        <div className="sig-upload-row">
                          <label className="btn btn-secondary sig-upload-btn" htmlFor="sig-image-upload">
                            Upload JPEG/PNG
                          </label>
                          <input
                            id="sig-image-upload"
                            className="sig-file-input"
                            type="file"
                            accept="image/jpeg,image/png,.jpg,.jpeg,.png"
                            onChange={(e) => void onImageFileChange(e)}
                          />
                          {uploadedFileName ? (
                            <button
                              type="button"
                              className="sig-clear-upload"
                              onClick={clearUploadedImage}
                            >
                              Remove {uploadedFileName}
                            </button>
                          ) : null}
                        </div>

                        <label className="sig-label" htmlFor="sig-image">
                          Or paste image URL
                        </label>
                        <input
                          id="sig-image"
                          className="sig-input"
                          type="url"
                          value={form.imageUrl.startsWith("data:") ? "" : form.imageUrl}
                          onChange={(e) => onImageUrlChange(e.target.value)}
                          placeholder="https://yoursite.com/logo.png"
                          disabled={Boolean(uploadedFileName)}
                        />
                        {imageError ? <p className="sig-error">{imageError}</p> : null}
                        <div className="sig-tip" role="note">
                          <p>{logoImageGuidance.upload}</p>
                          <p>{logoImageGuidance.url}</p>
                          <p>
                            <strong>Important:</strong> {logoImageGuidance.corporate}
                          </p>
                        </div>
                      </>
                    ) : null}
                  </fieldset>
                ) : null}

                {fieldConfig.social ? (
                  <fieldset className="sig-form-section">
                    <legend className="sig-section-legend">Social (optional)</legend>
                    <label className="sig-label" htmlFor="sig-linkedin">
                      LinkedIn
                    </label>
                    <input
                      id="sig-linkedin"
                      className="sig-input"
                      type="url"
                      value={form.linkedIn}
                      onChange={(e) => updateField(setForm, "linkedIn", e.target.value)}
                      placeholder="https://linkedin.com/in/you"
                    />
                    <label className="sig-label" htmlFor="sig-instagram">
                      Instagram
                    </label>
                    <input
                      id="sig-instagram"
                      className="sig-input"
                      type="url"
                      value={form.instagram}
                      onChange={(e) => updateField(setForm, "instagram", e.target.value)}
                      placeholder="https://instagram.com/you"
                    />
                    <label className="sig-label" htmlFor="sig-facebook">
                      Facebook
                    </label>
                    <input
                      id="sig-facebook"
                      className="sig-input"
                      type="url"
                      value={form.facebook}
                      onChange={(e) => updateField(setForm, "facebook", e.target.value)}
                      placeholder="https://facebook.com/yourpage"
                    />
                  </fieldset>
                ) : null}

                {fieldConfig.invoiceFastOption ? (
                  <label className="sig-checkbox">
                    <input
                      type="checkbox"
                      checked={form.includeInvoiceFastLine}
                      onChange={(e) =>
                        updateField(setForm, "includeInvoiceFastLine", e.target.checked)
                      }
                    />
                    <span>Include small &ldquo;Invoices: InvoiceFast&rdquo; line in signature</span>
                  </label>
                ) : null}
              </div>

              <div className="sig-preview-wrap">
                <div className="sig-preview-header">
                  <h2 className="sig-panel-title">Preview</h2>
                  <div className="sig-copy-actions">
                    <button type="button" className="btn btn-primary" onClick={() => void copyForPaste()}>
                      Copy signature
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => void copyHtml()}>
                      Copy HTML source
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => void copyPlain()}>
                      Copy plain text
                    </button>
                  </div>
                </div>
                {copyStatus ? <p className="status status-success">{copyStatus}</p> : null}
                <div
                  className={`sig-email-frame${template === "luxe" ? " sig-email-frame-dark" : ""}`}
                  aria-live="polite"
                >
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                <p className="sig-hint">
                  Use <strong>Copy signature</strong> for Spacemail, Gmail, Outlook on the web, Apple
                  Mail, and most visual editors — no HTML mode required. Preview uses the same table
                  HTML that email clients receive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to" className="section muted-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">How to install</p>
              <h2>Paste into your mail client</h2>
            </div>
            <div className="sig-install-grid">
              {installSteps.map((block) => (
                <article key={block.client} className="card reveal">
                  <h3>{block.client}</h3>
                  <ol className="sig-install-list">
                    {block.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
            <aside className="sig-install-other card reveal" aria-label={otherClientsInstallNote.title}>
              <h3>{otherClientsInstallNote.title}</h3>
              <ul className="sig-install-other-list">
                {otherClientsInstallNote.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">FAQ</p>
              <h2>Common questions</h2>
            </div>
            <div className="faq-list">
              {signatureFaqs.map((faq) => (
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
              <p className="eyebrow">Need invoices too?</p>
              <h2>Create professional ZAR invoices in minutes with InvoiceFast.</h2>
              <p className="cta-subcopy">14-day Pro trial · no card required · from R79/mo incl. VAT</p>
            </div>
            <a className="btn btn-primary btn-lg" href={emailSignatureLinks.signup}>
              Start free trial
            </a>
          </div>
        </section>
      </main>
      <SiteFooter tagline="Free tools and practical software for freelancers and creatives." />
    </>
  );
}
