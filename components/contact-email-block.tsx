"use client";

import { useState } from "react";
import { contactEmail } from "../lib/site-links";

export function ContactEmailBlock() {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyStatus("Email copied.");
    } catch {
      setCopyStatus("Copy failed — select the address and copy manually.");
    }
  }

  return (
    <div className="contact-card">
      <h2>Email</h2>
      <div className="contact-email-row">
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        <button type="button" className="btn btn-secondary contact-copy-btn" onClick={() => void copyEmail()}>
          Copy email
        </button>
      </div>
      <p className="contact-email-hint">
        Opens your default mail app when configured. Otherwise use <strong>Copy email</strong> and paste
        into Gmail, Outlook, or Spacemail.
      </p>
      {copyStatus ? <p className="status status-success contact-copy-status">{copyStatus}</p> : null}
    </div>
  );
}
