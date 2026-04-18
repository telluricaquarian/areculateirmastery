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
  /** Path relative to /public, e.g. "/logos/openai.svg" */
  logoSrc?: string;
  logoAlt?: string;
  logoMode?: "contain" | "cover";
  /** Invert logo in dark mode — useful for black monochrome SVGs */
  invertLogoInDark?: boolean;
}

export interface CategoryInfo {
  slug: Category | "explore";
  label: string;
  icon: string;
  href: string;
}
