import Image from "next/image";

type BrandLogoProps = {
  href?: string;
};

export function BrandLogo({ href = "/" }: BrandLogoProps) {
  const image = (
    <Image
      src="/aurastudioza-logo.png"
      alt="AuraStudioZa — Design, Media, Creative"
      width={220}
      height={88}
      className="brand-logo-image"
      priority
    />
  );

  if (!href) {
    return <span className="brand brand-logo">{image}</span>;
  }

  return (
    <a href={href} className="brand brand-logo" aria-label="AuraStudioZa Home">
      {image}
    </a>
  );
}
