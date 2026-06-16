import type { Metadata } from "next";
import { brandOpenGraphImage } from "../../lib/brand-assets";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Vehicle Logbook",
    description:
      "Vehicle Logbook — log odometer stops, business vs private km, monthly and tax-year exports. 1 month free, then R89/month incl. VAT.",
    path: "/logbook",
  }),
  openGraph: {
    title: "Vehicle Logbook by AuraStudioZa",
    description:
      "Company car mileage logging for South Africa. Monthly business travel export and Mar–Feb tax year support.",
    url: "https://aurastudioza.com/logbook",
    siteName: "AuraStudioZa",
    type: "website",
    images: [brandOpenGraphImage],
  },
};

export default function LogbookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
