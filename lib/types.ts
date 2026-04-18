export type Category =
  | "ai"
  | "design"
  | "development"
  | "automation"
  | "systems"
  | "research"
  | "operators"
  | "media"
  | "writing";

export interface Resource {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  category: Category;
  tags: string[];
  featured: boolean;
}

export interface CategoryInfo {
  slug: Category | "explore";
  label: string;
  icon: string;
  href: string;
}
