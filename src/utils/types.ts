export type SectionCompProps = {
  title: string;
  content: JSX.Element;
};

export type ProjectDataProps = {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  technos: string[];
  date: string;
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
