# NoahZ969.github.io

Personal academic website for Noah Zhang (张诺亚), Ph.D. student in Physics at Georgia Tech / LIGO Scientific Collaboration. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live site: https://noahz969.github.io

## Features

- Bilingual (English / Simplified Chinese) content and UI toggle
- Pages for home, research, publications, quant work, and CV
- Downloadable CV in both English and Chinese
- Automatic build and deploy to GitHub Pages, plus a nightly rebuild

## Project structure

```
src/
  components/   Shared UI (nav, footer, language toggle)
  data/         Site content and publications data
  layouts/      Base page layout
  pages/        Route pages (index, research, publications, quant, cv)
  styles/       Global styles
public/         Static assets (background images, photo, CV PDFs)
scripts/        Data-fetching / build helper scripts
```

## Development

```bash
npm install
npm run dev        # start local dev server
npm run build       # build to ./dist
npm run preview     # preview the production build
```

Regenerate the Chinese CV PDF from `scripts/cv-zh.html`:

```bash
npm run build-cv-zh
```

## Editing content

Most text lives in `src/data/`:

- `site.ts` — name, role, bio, contact details, external profile links. Bilingual fields are `{ en, zh }` pairs.
- `publications.ts` — publication entries, currently maintained by hand. The `fetch-publications` script in `package.json` is a placeholder for pulling from INSPIRE-HEP once that profile is set up.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The workflow also runs nightly at 04:00 UTC so that externally sourced data can flow into the published site without a manual push.
