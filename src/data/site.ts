export interface ExternalLink {
  label: string;
  url: string;
}

export interface Bilingual {
  en: string;
  zh: string;
}

export const site = {
  name: {
    en: 'Noah Zhang',
    zh: '张诺亚',
  } satisfies Bilingual,
  role: {
    en: 'Graduate Researcher, LIGO Scientific Collaboration',
    zh: '博士研究生 · LIGO 科学合作组织',
  } satisfies Bilingual,
  affiliation: {
    en: 'Georgia Institute of Technology',
    zh: '佐治亚理工学院',
  } satisfies Bilingual,
  location: {
    en: 'Atlanta, GA',
    zh: '亚特兰大，佐治亚州',
  } satisfies Bilingual,
  bio: {
    en: 'Ph.D. student in Physics at Georgia Tech, working with Prof. Surabhi Sachdev on gravitational-wave detection for the LIGO Scientific Collaboration. My research focuses on low-latency signal processing — the GstLAL pipeline, search algorithms for compact-binary mergers, and statistical methods for production analysis. I am also pursuing an M.S. in Computational Science and Engineering, and apply quantitative methods to high-frequency time-series and market microstructure.',
    zh: '佐治亚理工学院物理学博士生，师从 Surabhi Sachdev 教授，在 LIGO 科学合作组织从事引力波探测研究。研究方向为低延迟信号处理 —— GstLAL 流水线、致密双星并合事件的搜索算法，以及生产分析中的统计方法。同时攻读计算科学与工程硕士学位，并将量化方法应用于高频时间序列与市场微观结构。',
  } satisfies Bilingual,
  photoUrl: '/photo.jpg' as string | null,
  email: 'nzhang352@gatech.edu',
  emailPersonal: 'zhangnuoya969@gmail.com',
  links: [
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=xOrW2S8AAAAJ&hl=en' },
    { label: 'LIGO DCC', url: '#' },
    { label: 'ORCID', url: '#' },
    { label: 'arXiv', url: '#' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/noah-zhang-2b88981b7/' },
    { label: 'GitHub', url: 'https://github.com/NoahZ969' },
    { label: 'GitLab', url: 'https://git.ligo.org/noah.zhang' },
  ] satisfies ExternalLink[],
};
