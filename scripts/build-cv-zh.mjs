// Render scripts/cv-zh.html into public/cv-zh.pdf using headless Chrome.
// Run with: npm run build-cv-zh

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const htmlPath = path.join(__dirname, 'cv-zh.html');
const pdfPath = path.join(repoRoot, 'public', 'cv-zh.pdf');

const chromeCandidates = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
];

const chrome = chromeCandidates.find((p) => existsSync(p));
if (!chrome) {
  console.error('No Chromium-based browser found. Install Google Chrome and retry.');
  process.exit(1);
}

execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdfPath}`,
  pathToFileURL(htmlPath).href,
], { stdio: 'inherit' });

console.log(`Wrote ${pdfPath}`);
