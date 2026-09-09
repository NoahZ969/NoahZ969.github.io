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
    en: 'I extract signal from noisy, high-frequency data — professionally on gravitational-wave detectors, and independently in financial markets. As a Physics Ph.D. student at Georgia Tech working with Prof. Surabhi Sachdev, I build low-latency search pipelines for the LIGO Scientific Collaboration: hybrid C++/Python systems that process terabytes of streaming data at sub-second latency, together with the Bayesian and statistical methods behind production analysis. I also hold an M.S. in Computational Science and Engineering from Georgia Tech. My quantitative work spans cross-sectional alpha research, Kalman-filtered market microstructure, and pre-registered backtesting.',
    zh: '我的工作是从高噪声、高频数据中提取信号 —— 专业上用于引力波探测，业余则应用于金融市场。作为佐治亚理工学院物理学博士生，师从 Surabhi Sachdev 教授，我为 LIGO 科学合作组织构建低延迟搜索流水线：以 C++/Python 混合系统在亚秒级延迟下处理 TB 量级的流式数据，并负责生产分析背后的贝叶斯与统计方法。我同时获得佐治亚理工学院计算科学与工程硕士学位。量化方面的工作涵盖横截面 alpha 研究、基于卡尔曼滤波的市场微观结构建模，以及预注册的回测框架。',
  } satisfies Bilingual,
  // Short form for <meta description> and link previews; the bio is too long for those.
  tagline: {
    en: 'Physics Ph.D. student at Georgia Tech building low-latency signal-processing pipelines for LIGO, and applying the same methods to quantitative finance.',
    zh: '佐治亚理工学院物理学博士生，为 LIGO 构建低延迟信号处理流水线，并将同样的方法应用于量化金融。',
  } satisfies Bilingual,
  photoUrl: '/photo.jpg' as string | null,
  email: 'nzhang352@gatech.edu',
  emailPersonal: 'zhangnuoya969@gmail.com',
  links: [
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=xOrW2S8AAAAJ&hl=en' },
    { label: 'ORCID', url: 'https://orcid.org/0009-0003-3361-5538' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/noah-zhang-2b88981b7/' },
    { label: 'GitHub', url: 'https://github.com/NoahZ969' },
    { label: 'GitLab', url: 'https://git.ligo.org/noah.zhang' },
  ] satisfies ExternalLink[],
};
