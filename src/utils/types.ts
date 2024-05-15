export type SectionCompProps = {
  title: string;
  content: JSX.Element;
};

export type ProjectDataProps = {
  id: number;
  title: string;
  status: string;
  description: string;
  technos: string[];
  repository: string;
};

export type ExperiencesDataProps = {
  id: number;
  name: string;
  company: string;
  description: string;
  date: string;
  technos: string[];
  siteUrl?: string;
};

export type SkillDataProps = {
  id: number;
  name: string;
  technos: string[];
};

export type EducationtDataProps = {
  id: number;
  title: string;
  description: string;
  establishment: string;
  date: string;
};

export type HobbiesDataProps = {
  id: number;
  name: string;
};

export type MusicDataProps = {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  songUrl?: string;
  duration?: string;
  isPlaying?: boolean;
};
