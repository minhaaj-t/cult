/**
 * Renders the first page of each PDF in /reference to PNGs in /public/images/gallery.
 * Run: node scripts/export-gallery.mjs
 */
import { pdf } from "pdf-to-img";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const refDir = path.join(root, "reference");
const outDir = path.join(root, "public", "images", "gallery");

const mapping = [
  { file: "book_GNR_18x24cm(curved).pdf", base: "gnr-18x24" },
  {
    file: "book_i'll see youon the other side of the moon_18x24cm(curved).pdf",
    base: "other-side-moon-18x24",
  },
  {
    file: "princess of the darkness lives forever_18x24cm(curved).pdf",
    base: "princess-darkness-18x24",
  },
  { file: "Where-Legends-Live-Forever.pdf.pdf", base: "where-legends-forever" },
];

await fs.mkdir(outDir, { recursive: true });

for (const { file, base } of mapping) {
  const pdfPath = path.join(refDir, file);
  let buffer;
  for await (const page of await pdf(pdfPath, { scale: 1.5 })) {
    buffer = page;
    break;
  }
  if (!buffer) {
    console.warn("No pages in", file);
    continue;
  }
  const w1200 = path.join(outDir, `${base}-1200w.webp`);
  const w800 = path.join(outDir, `${base}-800w.webp`);
  const og = path.join(outDir, `${base}-og.webp`);
  await sharp(buffer)
    .resize(1200, null, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality: 86 })
    .toFile(w1200);
  await sharp(buffer)
    .resize(800, null, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality: 84 })
    .toFile(w800);
  await sharp(buffer)
    .resize(1200, 630, { fit: "cover" })
    .webp({ quality: 82 })
    .toFile(og);
  console.log("Wrote", base);
}

console.log("Done.");
