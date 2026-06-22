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

  const shellClass =
    variant === "compact"
      ? "brand brand-logo brand-logo-alive"
      : "brand brand-logo brand-logo-static";

  if (href === null) {
    return <span className={shellClass}>{mark}</span>;
  }

  return (
    <a href={href} className={shellClass} aria-label="AuraStudioZa Home">
      {mark}
    </a>
  );
}
