/**
 * Regenerate public/invoicefast-live-preview.png with anonymized sample data.
 * Run from Website/: node scripts/capture-invoicefast-preview.mjs
 */
import { chromium } from "playwright";
import { writeFileSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outPath = join(root, "public", "invoicefast-live-preview.png");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Inter, system-ui, sans-serif;
      background: #fafafa;
      color: #18181b;
      padding: 16px;
      width: 520px;
    }
    .live-label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 600;
      color: #3f3f46;
    }
    .pulse {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: linear-gradient(90deg, #7c3aed, #c026d3, #4f46e5);
    }
    .card {
      position: relative;
      background: #fff;
      border-radius: 16px;
      border: 1px solid rgba(228, 228, 231, 0.8);
      box-shadow: 0 4px 24px -4px rgba(124, 58, 237, 0.12);
      padding: 24px;
      overflow: hidden;
    }
    .card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #7c3aed, #c026d3, #4f46e5);
    }
    .header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      padding-bottom: 24px;
      margin-bottom: 24px;
      border-bottom: 1px solid #f4f4f5;
    }
    .brand {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .logo {
      width: 64px;
      height: 64px;
      border-radius: 12px;
      object-fit: contain;
      border: 1px solid rgba(228, 228, 231, 0.8);
    }
    .brand h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .brand p {
      margin: 4px 0 0;
      font-size: 14px;
      color: #71717a;
    }
    .meta {
      text-align: right;
      font-size: 14px;
      color: #71717a;
      border-left: 2px solid rgba(124, 58, 237, 0.4);
      padding-left: 16px;
    }
    .meta strong {
      display: block;
      color: #18181b;
      font-size: 16px;
      margin-bottom: 8px;
    }
    .section-label {
      font-size: 12px;
      font-weight: 600;
      color: #7c3aed;
      margin-bottom: 8px;
    }
    .client {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
    }
    .client-email {
      margin: 4px 0 0;
      font-size: 14px;
      color: #71717a;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      font-size: 14px;
    }
    th {
      text-align: left;
      color: #71717a;
      font-size: 12px;
      font-weight: 600;
      padding-bottom: 12px;
      border-bottom: 1px solid #f4f4f5;
    }
    th.num { text-align: right; }
    td {
      padding: 14px 0;
      border-bottom: 1px solid #fafafa;
      color: #27272a;
    }
    td.num {
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    td.amount {
      font-weight: 600;
      color: #18181b;
    }
    .totals {
      margin-left: auto;
      width: 208px;
      font-size: 14px;
    }
    .totals div {
      display: flex;
      justify-content: space-between;
      color: #52525b;
      margin-bottom: 8px;
    }
    .totals span:last-child {
      font-weight: 500;
      color: #18181b;
      font-variant-numeric: tabular-nums;
    }
    .total-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
      padding: 12px 16px;
      border-radius: 12px;
      background: linear-gradient(90deg, #7c3aed, #c026d3, #4f46e5);
      color: #fff;
      font-weight: 600;
    }
    .total-bar strong {
      font-size: 18px;
      font-variant-numeric: tabular-nums;
    }
    .payment {
      border-top: 1px solid #f4f4f5;
      padding-top: 24px;
      margin-top: 24px;
      font-size: 14px;
      color: #52525b;
    }
  </style>
</head>
<body>
  <div class="live-label"><span class="pulse"></span> Live preview</div>
  <div class="card">
    <div class="header">
      <div class="brand">
        <img class="logo" src="https://aurastudioza.com/brand-mark-icon.png" alt="" width="64" height="64" />
        <div>
          <h1>AuraStudioZa</h1>
          <p>Invoice</p>
        </div>
      </div>
      <div class="meta">
        <strong>INV-2041</strong>
        <div>Date 15 June 2026</div>
        <div>Due 22 June 2026</div>
      </div>
    </div>
    <div class="section-label">Bill to</div>
    <p class="client">Mokoena Creative Studio</p>
    <p class="client-email">billing@mokoenacreative.co.za</p>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th class="num">Qty</th>
          <th class="num">Rate (incl.)</th>
          <th class="num">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brand strategy package</td>
          <td class="num">1</td>
          <td class="num">R 12&nbsp;345,00</td>
          <td class="num amount">R 12&nbsp;345,00</td>
        </tr>
        <tr>
          <td>Design retainer</td>
          <td class="num">1</td>
          <td class="num">R 123,00</td>
          <td class="num amount">R 123,00</td>
        </tr>
        <tr>
          <td>Project materials</td>
          <td class="num">1</td>
          <td class="num">R 30&nbsp;000,00</td>
          <td class="num amount">R 30&nbsp;000,00</td>
        </tr>
      </tbody>
    </table>
    <div class="totals">
      <div><span>Subtotal (ex VAT)</span><span>R 36&nbsp;928,70</span></div>
      <div><span>VAT (15%, included)</span><span>R 5&nbsp;539,30</span></div>
      <div class="total-bar"><span>Total</span><strong>R 42&nbsp;468,00</strong></div>
    </div>
    <div class="payment">
      <div class="section-label">Payment details</div>
      <div>Bank: Example Bank</div>
    </div>
  </div>
</body>
</html>`;

const tmpHtml = join(root, "scripts", ".preview-capture.html");
writeFileSync(tmpHtml, html, "utf8");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 520, height: 720 } });
await page.goto(`file:///${tmpHtml.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });
await page.locator("body").screenshot({ path: outPath, type: "png" });
await browser.close();

try {
  unlinkSync(tmpHtml);
} catch {
  /* ignore */
}

console.log(`Wrote ${outPath}`);
