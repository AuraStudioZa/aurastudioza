import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "VAT & GST Calculator",
  description:
    "Free VAT and GST calculator for 40+ countries — convert between tax-inclusive and tax-exclusive amounts. Currency and standard rate update by country.",
  path: "/vat-calculator",
  keywords: [
    "VAT calculator",
    "GST calculator",
    "VAT calculator South Africa",
    "VAT inclusive exclusive calculator",
    "international VAT calculator",
    "remove VAT from price",
    "add VAT to amount",
    "sales tax calculator",
    "multi currency VAT tool",
  ],
  openGraphTitle: "Free VAT & GST Calculator | AuraStudioZa",
  openGraphDescription:
    "Convert incl. ↔ excl. tax for 40+ countries. Currency symbols and standard rates update when you change country.",
});

export default function VatCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
