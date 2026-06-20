import { AuraStudioZaMark } from "./aurastudioza-mark";

type BrandLogoProps = {
  href?: string | null;
  variant?: "compact" | "hero";
};

export function BrandLogo({ href = "/", variant = "compact" }: BrandLogoProps) {
  const mark = (
    <AuraStudioZaMark
      variant={variant}
      className={variant === "hero" ? "brand-mark-hero" : "brand-mark-compact"}
    />
  );

  if (href === null) {
    return <span className="brand brand-logo brand-logo-alive">{mark}</span>;
  }

  return (
    <a href={href} className="brand brand-logo brand-logo-alive" aria-label="AuraStudioZa Home">
      {mark}
    </a>
  );
}
