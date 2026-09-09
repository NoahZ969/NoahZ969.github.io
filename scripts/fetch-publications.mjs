// Refresh src/data/publications.json from the Google Scholar profile via SerpAPI.
// Run with: npm run fetch-publications  (needs SERPAPI_KEY in the environment)
//
// Google Scholar has no public API and blocks datacenter IPs, so SerpAPI acts as
// the intermediary. Without a key the script leaves the committed JSON untouched
// and exits 0, so a missing or exhausted key degrades to stale data, not a broken build.

import { writeFileSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const AUTHOR_ID = 'xOrW2S8AAAAJ';
const PAGE_SIZE = 100;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'src', 'data', 'publications.json');

const apiKey = process.env.SERPAPI_KEY;
if (!apiKey) {
  console.warn('SERPAPI_KEY not set — keeping the existing publications.json.');
  process.exit(0);
}

async function fetchPage(start) {
  const url = new URL('https://serpapi.com/search.json');
  url.searchParams.set('engine', 'google_scholar_author');
  url.searchParams.set('author_id', AUTHOR_ID);
  url.searchParams.set('api_key', apiKey);
  url.searchParams.set('sort', 'pubdate');
  url.searchParams.set('num', String(PAGE_SIZE));
  url.searchParams.set('start', String(start));

  const res = await fetch(url);
  const body = await res.json().catch(() => null);

  if (!res.ok || !body || body.error) {
    const reason = body?.error ?? `HTTP ${res.status}`;
    throw new Error(reason);
  }
  return body.articles ?? [];
}

function toPublication(article) {
  const venue = article.publication ?? '';
  const pub = {
    title: article.title,
    authors: article.authors ?? '',
  };

  const year = Number(article.year);
  if (Number.isInteger(year)) pub.year = year;
  if (venue) pub.venue = venue;

  const arxiv = venue.match(/arXiv:(\d{4}\.\d{4,5})/i);
  if (arxiv) pub.arxivId = arxiv[1];

  const cites = Number(article.cited_by?.value);
  if (Number.isInteger(cites) && cites > 0) pub.citedBy = cites;
  if (article.link) pub.url = article.link;

  return pub;
}

let articles = [];
try {
  for (let start = 0; ; start += PAGE_SIZE) {
    const page = await fetchPage(start);
    articles.push(...page);
    if (page.length < PAGE_SIZE) break;
  }
} catch (err) {
  console.warn(`SerpAPI request failed (${err.message}) — keeping the existing publications.json.`);
  process.exit(0);
}

if (articles.length === 0) {
  console.warn('SerpAPI returned no articles — keeping the existing publications.json.');
  process.exit(0);
}

const publications = articles
  .map(toPublication)
  .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || (b.citedBy ?? 0) - (a.citedBy ?? 0));

const previous = JSON.parse(readFileSync(outPath, 'utf8'));
const payload = {
  source: 'serpapi',
  syncedAt: new Date().toISOString(),
  publications,
};
writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n');
console.log(`Wrote ${publications.length} publications (was ${previous.publications.length}).`);
