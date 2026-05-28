import { AuraStudioZaMark } from "./aurastudioza-mark";

type BrandLogoProps = {
  href?: string;
  variant?: "compact" | "hero";
};

export function BrandLogo({ href = "/", variant = "compact" }: BrandLogoProps) {
  const mark = (
    <AuraStudioZaMark
      variant={variant}
      className={variant === "hero" ? "brand-mark-hero" : "brand-mark-compact"}
    />
  );

  if (!href) {
    return <span className="brand brand-logo">{mark}</span>;
  }

  return (
    <a href={href} className="brand brand-logo" aria-label="AuraStudioZa Home">
      {mark}
    </a>
  );
}
