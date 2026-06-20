import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const archiveDir = join(publicDir, "archive", "logos", "pre-vivid-2026-06");

const archiveTargets = [
  "brand-mark.svg",
  "brand-mark-icon.svg",
  "brand-mark.png",
  "brand-mark-icon.png",
  "brand-mark-compact.png",
];

function archiveIfPresent(filename) {
  const source = join(publicDir, filename);
  if (!existsSync(source)) {
    return;
  }
  mkdirSync(archiveDir, { recursive: true });
  const dest = join(archiveDir, filename);
  if (!existsSync(dest)) {
    copyFileSync(source, dest);
    console.log(`Archived public/${filename} → public/archive/logos/pre-vivid-2026-06/`);
  }
}

async function exportPng(svgFile, outFile, width) {
  const svg = readFileSync(join(publicDir, svgFile));
  const buffer = await sharp(svg, { density: 300 })
    .resize(width)
    .ensureAlpha()
    .trim({ threshold: 10 })
    .png()
    .toBuffer();
  writeFileSync(join(publicDir, outFile), buffer);
  console.log(`Wrote public/${outFile} (${width}px wide, transparent)`);
}

for (const file of archiveTargets) {
  archiveIfPresent(file);
}

await exportPng("brand-mark.svg", "brand-mark.png", 520);
await exportPng("brand-mark-icon.svg", "brand-mark-icon.png", 140);
await exportPng("brand-mark-icon.svg", "brand-mark-compact.png", 96);
