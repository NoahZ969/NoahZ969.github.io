export interface Publication {
  title: string;
  authors: string;
  venue?: string;
  year: number;
  arxivId?: string;
  doi?: string;
  dccId?: string;
  url?: string;
}

// Manual list for now. Once the INSPIRE-HEP profile is approved, the build
// script will fetch from the API and merge with these entries.
export const publications: Publication[] = [
  // {
  //   title: 'Example paper title',
  //   authors: 'Zhang, N., Collaborator A., et al.',
  //   venue: 'Phys. Rev. D',
  //   year: 2025,
  //   arxivId: '2501.00001',
  //   doi: '10.1103/PhysRevD.111.000000',
  // },
];
