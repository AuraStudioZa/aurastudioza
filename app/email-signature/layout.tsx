import type { Metadata } from "next";
import { brandOpenGraphImage } from "../../lib/brand-assets";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Free Email Signature Generator",
    description:
      "Free email signature generator for South African freelancers and creatives. Build HTML signatures, copy into Gmail, Outlook, or Spacemail — no sign-up required.",
    path: "/email-signature",
  }),
  openGraph: {
    title: "Free Email Signature Generator | AuraStudioZa",
    description:
      "Create professional email signatures for freelancers and creatives. Live preview, copy HTML, optional logo URL.",
    url: "https://aurastudioza.com/email-signature",
    siteName: "AuraStudioZa",
    type: "website",
    images: [brandOpenGraphImage],
  },
};

export default function EmailSignatureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
