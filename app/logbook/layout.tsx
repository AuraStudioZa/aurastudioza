import { pageMetadata } from "../../lib/site-metadata";
import { JsonLd, faqPageJsonLd, softwareApplicationJsonLd } from "../../components/json-ld";
import { logbookFaqs } from "../../components/marketing/logbook-content";

export const metadata = pageMetadata({
  title: "Vehicle Logbook",
  description:
    "Vehicle Logbook — log odometer stops, business vs private km, monthly and tax-year exports. 1 month free, then R89/month incl. VAT.",
  path: "/logbook",
  keywords: [
    "Vehicle Logbook",
    "SARS travel logbook app",
    "business km log South Africa",
    "odometer logbook PWA",
    "company car logbook SA",
    "travel allowance records",
    "Mar Feb tax year mileage",
    "R89 logbook subscription",
  ],
  openGraphTitle: "Vehicle Logbook — KM Tracker for South African Businesses",
  openGraphDescription:
    "Log odometer stops, split business vs private km, and export monthly or Mar–Feb tax-year reports. Built for SA company car and travel allowance records.",
});

export default function LogbookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={faqPageJsonLd(logbookFaqs)} />
      <JsonLd
        data={softwareApplicationJsonLd({
          name: "Vehicle Logbook",
          description:
            "Odometer-based vehicle logbook for South African business and private km tracking with monthly and tax-year exports.",
          url: "https://logbook.aurastudioza.com",
          price: 89,
        })}
      />
      {children}
    </>
  );
}
