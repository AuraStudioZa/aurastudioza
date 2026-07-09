import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const lightPng = join(publicDir, "logbook-live-preview-light.png");
const lightWebp = join(publicDir, "logbook-live-preview-light.webp");

if (!existsSync(lightPng)) {
  console.error("Missing public/logbook-live-preview-light.png — export or copy the source PNG first.");
  process.exit(1);
}

const pngBytes = statSync(lightPng).size;
const buffer = await sharp(readFileSync(lightPng)).webp({ quality: 82 }).toBuffer();
writeFileSync(lightWebp, buffer);

console.log(`Wrote public/logbook-live-preview-light.webp (${buffer.length} bytes, was ${pngBytes} bytes PNG)`);
