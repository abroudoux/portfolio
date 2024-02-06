export type ProjectsDataProps = {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  technos: string[];
  date: string;
  repository: string;
};

export type MenuLinkProps = {
  section: string;
};

export type ProjectCardProps = {
  title: string;
  tags: string[];
  link: string;
  image?: string;
  size?: string;
};
