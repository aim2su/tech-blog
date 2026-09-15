export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover: string;
  date: string;
  readingTime: number;
  tags: string[];
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
  date: string;
}

export interface TelegramPost {
  id: string;
  text: string;
  date: string;
  url: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  url?: string;
}

export interface PressItem {
  title: string;
  source: string;
  url: string;
  date: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  longBio: string;
  avatar: string;
  socials: {
    youtube: string;
    telegram: string;
    tiktok: string;
    instagram: string;
  };
  stats: Stat[];
  projects: Project[];
  press: PressItem[];
  email: string;
}

export interface PlatformStat {
  platform: string;
  followers: string;
  avgViews: string;
  description: string;
}

export interface AdFormat {
  title: string;
  description: string;
  price?: string;
}

export interface CaseExample {
  brand: string;
  description: string;
  result: string;
}