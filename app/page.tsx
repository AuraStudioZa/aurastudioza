import type { Metadata } from "next";
import { StudioHomePage } from "../components/studio/studio-home-page";

export const metadata: Metadata = {
  title: "AuraStudioZa - Practical Software for Freelancers and Small Business",
  description:
    "AuraStudioZa builds focused tools for modern independent work. Explore InvoiceFast and future products from one studio.",
  openGraph: {
    title: "AuraStudioZa",
    description: "Practical software for freelancers and small businesses.",
    url: "https://aurastudioza.com",
    siteName: "AuraStudioZa",
    type: "website",
  },
};

export default function HomePage() {
  return <StudioHomePage />;
}
