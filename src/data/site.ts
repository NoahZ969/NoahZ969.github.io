export interface ExternalLink {
  label: string;
  url: string;
}

// Fill these in. Use "#" for any link you don't have yet.
export const site = {
  name: 'Noah Zhang',
  role: 'Graduate Researcher',
  affiliation: 'Georgia Institute of Technology',
  bio: 'Short bio goes here. A paragraph or two on what you work on, what excites you, and how to get in touch.',
  photoUrl: '/photo.jpg',
  email: 'zhangnuoya969@gmail.com',
  links: [
    { label: 'Google Scholar', url: '#' },
    { label: 'INSPIRE-HEP', url: '#' },
    { label: 'LIGO DCC', url: '#' },
    { label: 'ORCID', url: '#' },
    { label: 'arXiv', url: '#' },
    { label: 'GitHub', url: 'https://github.com/NoahZ969' },
    { label: 'GitLab', url: '#' },
  ] satisfies ExternalLink[],
};
