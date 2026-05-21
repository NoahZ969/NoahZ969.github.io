export interface ExternalLink {
  label: string;
  url: string;
}

// Fill these in. Use "#" for any link you don't have yet.
export const site = {
  name: 'Noah Zhang',
  role: 'Graduate Researcher, LIGO Scientific Collaboration',
  affiliation: 'Georgia Institute of Technology',
  location: 'Atlanta, GA',
  bio: 'Ph.D. student in Physics at Georgia Tech, working with Prof. Surabhi Sachdev on gravitational-wave detection for the LIGO Scientific Collaboration. My research focuses on low-latency signal processing — the GstLAL pipeline, search algorithms for compact-binary mergers, and statistical methods for production analysis. I am also pursuing an M.S. in Computational Science and Engineering, and apply quantitative methods to high-frequency time-series and market microstructure.',
  photoUrl: '/photo.jpg' as string | null,
  email: 'zhangnuoya969@gmail.com',
  links: [
    { label: 'Google Scholar', url: '#' },
    { label: 'INSPIRE-HEP', url: '#' },
    { label: 'LIGO DCC', url: '#' },
    { label: 'ORCID', url: '#' },
    { label: 'arXiv', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'GitHub', url: 'https://github.com/NoahZ969' },
    { label: 'GitLab', url: '#' },
  ] satisfies ExternalLink[],
};
