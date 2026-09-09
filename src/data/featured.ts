import type { Bilingual } from './site';

// Hand-maintained. publications.json is overwritten by every build, so papers to
// highlight are keyed here instead of flagged there.
//
// `match` is the arXiv ID when the paper has one, otherwise its exact title.
// Add `year` when a title appears more than once (a journal paper and its
// conference abstract, say).
export interface FeaturedPaper {
  match: string;
  year?: number;
  role: Bilingual;
  doi?: string;
}

export const featured: FeaturedPaper[] = [
  {
    match: '2606.22266',
    role: {
      en: 'Second author, 7-author paper',
      zh: '第二作者，7 人合著',
    },
  },
  {
    match: 'Dynamics, statistics, and task allocation of foraging ants',
    year: 2023,
    role: {
      en: 'First author, 2-author paper',
      zh: '第一作者，2 人合著',
    },
    doi: '10.1103/PhysRevE.108.054306',
  },
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export function findFeatured(pub: { title: string; year?: number; arxivId?: string }) {
  return featured.find(
    (f) =>
      (f.year === undefined || f.year === pub.year) &&
      (pub.arxivId === f.match || normalize(pub.title) === normalize(f.match))
  );
}
