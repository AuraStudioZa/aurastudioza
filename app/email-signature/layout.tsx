import { pageMetadata } from "../../lib/site-metadata";
import { JsonLd, faqPageJsonLd } from "../../components/json-ld";
import { signatureFaqs } from "../../components/marketing/email-signature-content";

export const metadata = pageMetadata({
  title: "Free Email Signature Generator",
  description:
    "Free email signature generator for South African freelancers and creatives. Build HTML signatures, copy into Gmail, Outlook, or Spacemail — no sign-up required.",
  path: "/email-signature",
  keywords: [
    "free email signature generator",
    "HTML email signature South Africa",
    "Gmail signature template freelancer",
    "Outlook signature copy paste",
    "Spacemail signature HTML",
    "professional email footer SA",
    "table based email signature",
  ],
  openGraphTitle: "Free Email Signature Generator | AuraStudioZa",
  openGraphDescription:
    "Create professional HTML email signatures with live preview. Upload a photo or logo, copy into Gmail, Outlook, or Spacemail — no sign-up.",
});

export default function EmailSignatureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={faqPageJsonLd(signatureFaqs)} />
      {children}
    </>
  );
}
