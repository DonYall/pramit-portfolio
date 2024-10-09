export type project = {
  name: string;
  description: string;
  href: string;
  img: string;
  className?: string;
  subtitle?: string;
  content?: string;
  gallery?: string[];
};

export type skill = {
  name: string;
  description: string;
  icon?: JSX.Element;
  className?: string;
};
