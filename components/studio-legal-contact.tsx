import { contactEmail } from "../lib/site-links";
import { legalMailto } from "../lib/legal-studio-content";

type StudioLegalContactProps = {
  subject?: string;
};

export function StudioLegalContact({ subject = "AuraStudioZa inquiry" }: StudioLegalContactProps) {
  return (
    <div className="contact-card studio-legal-contact">
      <h2>Contact</h2>
      <p>
        For support, billing, refunds, privacy requests, and account help across AuraStudioZa products,
        email{" "}
        <a href={legalMailto(subject)}>{contactEmail}</a>.
      </p>
      <p className="contact-email-hint">
        Include your registered email (if you have an account), the product name, and a short description.
        We aim to reply within 1–2 business days.
      </p>
    </div>
  );
}
