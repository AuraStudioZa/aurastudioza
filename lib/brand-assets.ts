/** Canonical AuraStudioZa brand files in /public (keep in sync via `npm run export:logo`). */
export const brandAssets = {
  favicon: "/icon.svg",
  markSvg: "/brand-mark.svg",
  markIconSvg: "/brand-mark-icon.svg",
  markPng: "/brand-mark.png",
  markIconPng: "/brand-mark-icon.png",
  markCompactPng: "/brand-mark-compact.png",
} as const;

export const brandOpenGraphImage = {
  url: brandAssets.markPng,
  width: 520,
  height: 260,
  alt: "AuraStudioZa — Design, Media, Creative",
} as const;
