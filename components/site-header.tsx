import type { ReactNode } from "react";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";
import { siteLinks } from "../lib/site-links";

export const mainNavLinks = [
  { href: `${siteLinks.home}#products`, label: "Products" },
  { href: `${siteLinks.home}#free-tools`, label: "Free tools" },
  { href: siteLinks.invoicefast, label: "InvoiceFast" },
  { href: siteLinks.logbook, label: "Logbook" },
  { href: siteLinks.expenses, label: "Expenses" },
  { href: siteLinks.blog, label: "Blog" },
  { href: siteLinks.about, label: "About" },
] as const;

type SiteHeaderProps = {
  actions?: ReactNode;
};

export function SiteHeader({ actions }: SiteHeaderProps) {
  return (
    <header className="site-header glass-panel">
      <div className="container nav-wrap">
        <BrandLogo href={siteLinks.home} variant="compact" />
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          {actions}
        </div>
      </div>
    </header>
  );
}
