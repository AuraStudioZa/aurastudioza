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
          <p className="footer-brand">AuraStudioZa</p>
          <p className="footer-copy">{tagline}</p>
        </div>
        <nav aria-label="Footer links">
          <ul className="footer-links">
            <li>
              <a href={siteLinks.terms}>Terms of Service</a>
            </li>
            <li>
              <a href={siteLinks.privacy}>Privacy Policy</a>
            </li>
            <li>
              <a href={siteLinks.contact}>Contact</a>
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
