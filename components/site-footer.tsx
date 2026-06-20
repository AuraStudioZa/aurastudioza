import { contactEmail, siteLinks } from "../lib/site-links";

type SiteFooterProps = {
  tagline?: string;
  showSupport?: boolean;
};

export function SiteFooter({
  tagline = "Practical software for freelancers and small businesses.",
  showSupport = false,
}: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <a href={siteLinks.home}>AuraStudioZa</a>
          </p>
          <p className="footer-copy">{tagline}</p>
        </div>
        <nav aria-label="Footer links">
          <ul className="footer-links">
            <li>
              <a href={siteLinks.home}>Home</a>
            </li>
            <li>
              <a href={siteLinks.invoicefast}>InvoiceFast</a>
            </li>
            <li>
              <a href={siteLinks.logbook}>Vehicle Logbook</a>
            </li>
            <li>
              <a href={`${siteLinks.home}#free-tools`}>Free tools</a>
            </li>
            <li>
              <a href={siteLinks.contact}>Contact</a>
            </li>
            <li>
              <a href={siteLinks.privacy}>Privacy</a>
            </li>
            <li>
              <a href={siteLinks.terms}>Terms</a>
            </li>
            {showSupport ? (
              <li>
                <a href={`mailto:${contactEmail}`}>Support</a>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
