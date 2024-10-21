export type project = {
  name: string;
  slug: string;
  organization: string;
  href?: string;
  img: string;
  className?: string;
  subtitle: string;
  content?: string;
  gallery?: projectImage[];
};

export type projectImage = {
  caption: string;
  src: string;
};

export type skill = {
  name: string;
  description: string;
  icon?: JSX.Element;
  className?: string;
};
