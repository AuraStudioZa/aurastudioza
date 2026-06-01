import type { Metadata } from "next";
import { StudioHomePage } from "../components/studio/studio-home-page";
import { brandOpenGraphImage } from "../lib/brand-assets";
import { siteUrl } from "../lib/site-metadata";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "AuraStudioZa",
    description: "Practical software for freelancers and small businesses.",
    url: siteUrl,
    siteName: "AuraStudioZa",
    type: "website",
    images: [brandOpenGraphImage],
  },
};

export default function HomePage() {
  return <StudioHomePage />;
}
