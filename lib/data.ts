import { Resource, CategoryInfo } from "./types";

export const categories: CategoryInfo[] = [
  { slug: "explore", label: "Explore", icon: "Compass", href: "/" },
  { slug: "ai", label: "Artificial Intelligence", icon: "Brain", href: "/ai" },
  { slug: "design", label: "Design", icon: "Palette", href: "/design" },
  { slug: "development", label: "Development", icon: "Code", href: "/development" },
  { slug: "automation", label: "Automation", icon: "Zap", href: "/automation" },
  { slug: "systems", label: "Systems", icon: "Layers", href: "/systems" },
  { slug: "research", label: "Research", icon: "Search", href: "/research" },
  { slug: "operators", label: "Operators", icon: "Terminal", href: "/operators" },
  { slug: "media", label: "Media", icon: "Play", href: "/media" },
  { slug: "writing", label: "Writing", icon: "PenTool", href: "/writing" },
];

// ---------------------------------------------------------------------------
// TODO: Logo assets
// Drop the following files into /public/logos/ to activate logos on cards.
// Each file should be an SVG (preferred) or PNG with transparent background.
// Cards fall back gracefully to letter placeholders if a file is missing.
//
//   /public/logos/openai.svg       — OpenAI (white/black wordmark or "O" mark)
//   /public/logos/anthropic.svg    — Anthropic (monochrome wordmark)
//   /public/logos/perplexity.svg   — Perplexity AI mark
//   /public/logos/langchain.svg    — LangChain mark
//   /public/logos/elevenlabs.svg   — ElevenLabs wordmark
//   /public/logos/figma.svg        — Figma "F" mark
//   /public/logos/framer.svg       — Framer "F" mark
//   /public/logos/spline.svg       — Spline mark
//   /public/logos/awwwards.svg     — Awwwards wordmark
//   /public/logos/v0.svg           — v0 wordmark
//   /public/logos/vercel.svg       — Vercel triangle mark
//   /public/logos/github.svg       — GitHub Octocat / wordmark
//   /public/logos/supabase.svg     — Supabase mark
//   /public/logos/resend.svg       — Resend mark
//   /public/logos/n8n.svg          — n8n wordmark
//   /public/logos/zapier.svg       — Zapier wordmark
//   /public/logos/make.svg         — Make wordmark
//   /public/logos/notion.svg       — Notion mark
//   /public/logos/linear.svg       — Linear mark
//   /public/logos/airtable.svg     — Airtable mark
//   /public/logos/readwise.svg     — Readwise mark
//   /public/logos/scholar.svg      — Google Scholar mark
//   /public/logos/arxiv.svg        — arXiv wordmark
//   /public/logos/raycast.svg      — Raycast mark
//   /public/logos/arc.svg          — Arc Browser mark
//   /public/logos/warp.svg         — Warp mark
//   /public/logos/descript.svg     — Descript mark
//   /public/logos/runway.svg       — Runway mark
//   /public/logos/loom.svg         — Loom mark
//   /public/logos/obsidian.svg     — Obsidian mark
//   /public/logos/typefully.svg    — Typefully mark
//   /public/logos/grammarly.svg    — Grammarly mark
//   /public/logos/malloy-studio.svg — Malloy Studio mark
//   /public/logos/3d-logo-lab.svg  — 3D Logo Lab mark
// ---------------------------------------------------------------------------

export const resources: Resource[] = [
  // AI
  {
    id: "openai",
    title: "OpenAI",
    description: "Advanced AI research and deployment. Building safe and beneficial artificial general intelligence.",
    href: "https://openai.com",
    image: "/resources/openai.svg",
    category: "ai",
    tags: ["llm", "api", "research"],
    featured: true,
    logoSrc: "/logos/openai.svg",
    logoAlt: "OpenAI logo",
    invertLogoInDark: false,
  },
  {
    id: "anthropic",
    title: "Anthropic",
    description: "AI safety company building reliable, interpretable, and steerable AI systems.",
    href: "https://anthropic.com",
    image: "/resources/anthropic.svg",
    category: "ai",
    tags: ["llm", "safety", "research"],
    featured: true,
    logoSrc: "/logos/anthropic.svg",
    logoAlt: "Anthropic logo",
    invertLogoInDark: false,
  },
  {
    id: "perplexity",
    title: "Perplexity",
    description: "AI-powered search engine that delivers accurate answers with cited sources.",
    href: "https://perplexity.ai",
    image: "/resources/perplexity.svg",
    category: "ai",
    tags: ["search", "research", "answers"],
    featured: false,
    logoSrc: "/logos/perplexity.svg",
    logoAlt: "Perplexity logo",
  },
  {
    id: "langchain",
    title: "LangChain",
    description: "Framework for developing applications powered by language models.",
    href: "https://langchain.com",
    image: "/resources/langchain.svg",
    category: "ai",
    tags: ["framework", "llm", "agents"],
    featured: false,
    logoSrc: "/logos/langchain.svg",
    logoAlt: "LangChain logo",
  },
  {
    id: "elevenlabs",
    title: "ElevenLabs",
    description: "AI voice generation platform with natural-sounding text-to-speech.",
    href: "https://elevenlabs.io",
    image: "/resources/elevenlabs.svg",
    category: "ai",
    tags: ["voice", "audio", "tts"],
    featured: false,
    logoSrc: "/logos/elevenlabs.svg",
    logoAlt: "ElevenLabs logo",
  },
  // Design
  {
    id: "figma",
    title: "Figma",
    description: "Collaborative interface design tool for teams to create, prototype, and iterate.",
    href: "https://figma.com",
    image: "/resources/figma.svg",
    category: "design",
    tags: ["ui", "collaboration", "prototyping"],
    featured: true,
    logoSrc: "/logos/figma.svg",
    logoAlt: "Figma logo",
  },
  {
    id: "framer",
    title: "Framer",
    description: "Design and publish stunning websites with AI-powered tools and no-code editor.",
    href: "https://framer.com",
    image: "/resources/framer.svg",
    category: "design",
    tags: ["website", "no-code", "animation"],
    featured: true,
    logoSrc: "/logos/framer.svg",
    logoAlt: "Framer logo",
    invertLogoInDark: true,
  },
  {
    id: "spline",
    title: "Spline",
    description: "Create 3D content for the web with an easy-to-use design tool.",
    href: "https://spline.design",
    image: "/resources/spline.svg",
    category: "design",
    tags: ["3d", "webgl", "interactive"],
    featured: false,
    logoSrc: "/logos/spline.svg",
    logoAlt: "Spline logo",
  },
  {
    id: "awwwards",
    title: "Awwwards",
    description: "Website awards that recognize the best web designers, developers, and agencies.",
    href: "https://awwwards.com",
    image: "/resources/awwwards.svg",
    category: "design",
    tags: ["inspiration", "awards", "showcase"],
    featured: false,
    logoSrc: "/logos/awwwards.svg",
    logoAlt: "Awwwards logo",
  },
  {
    id: "3d-logo-lab",
    title: "3D Logo Lab",
    description: "Tool for turning 2D logos into polished 3D logo animations and export-ready branding visuals in seconds.",
    href: "https://3dlogolab.io",
    image: "/resources/3d-logo-lab.svg",
    category: "design",
    tags: ["3d", "logos", "branding", "animation", "identity"],
    featured: false,
    logoSrc: "/logos/3d-logo-lab.svg",
    logoAlt: "3D Logo Lab logo",
  },
  // Development
  {
    id: "v0",
    title: "v0",
    description: "AI-powered UI generation tool by Vercel. Describe what you want, get production-ready code.",
    href: "https://v0.dev",
    image: "/resources/v0.svg",
    category: "development",
    tags: ["ai", "ui", "code-generation"],
    featured: true,
    logoSrc: "/logos/v0.svg",
    logoAlt: "v0 logo",
    invertLogoInDark: true,
  },
  {
    id: "vercel",
    title: "Vercel",
    description: "Frontend cloud platform for developers. Deploy instantly with zero configuration.",
    href: "https://vercel.com",
    image: "/resources/vercel.svg",
    category: "development",
    tags: ["hosting", "deployment", "edge"],
    featured: true,
    logoSrc: "/logos/vercel.svg",
    logoAlt: "Vercel logo",
    invertLogoInDark: true,
  },
  {
    id: "github",
    title: "GitHub",
    description: "Complete developer platform to build, scale, and deliver secure software.",
    href: "https://github.com",
    image: "/resources/github.svg",
    category: "development",
    tags: ["git", "collaboration", "open-source"],
    featured: false,
    logoSrc: "/logos/github.svg",
    logoAlt: "GitHub logo",
    invertLogoInDark: true,
  },
  {
    id: "supabase",
    title: "Supabase",
    description: "Open source Firebase alternative with Postgres database, auth, and realtime subscriptions.",
    href: "https://supabase.com",
    image: "/resources/supabase.svg",
    category: "development",
    tags: ["database", "auth", "backend"],
    featured: false,
    logoSrc: "/logos/supabase.svg",
    logoAlt: "Supabase logo",
  },
  {
    id: "resend",
    title: "Resend",
    description: "Email API for developers. Build, test, and deliver transactional emails at scale.",
    href: "https://resend.com",
    image: "/resources/resend.svg",
    category: "development",
    tags: ["email", "api", "transactional"],
    featured: false,
    logoSrc: "/logos/resend.svg",
    logoAlt: "Resend logo",
  },
  // Automation
  {
    id: "n8n",
    title: "n8n",
    description: "Workflow automation tool that connects any app with an API. Self-hostable and extendable.",
    href: "https://n8n.io",
    image: "/resources/n8n.svg",
    category: "automation",
    tags: ["workflow", "integration", "self-hosted"],
    featured: true,
    logoSrc: "/logos/n8n.svg",
    logoAlt: "n8n logo",
  },
  {
    id: "zapier",
    title: "Zapier",
    description: "Automate workflows by connecting your apps and services without code.",
    href: "https://zapier.com",
    image: "/resources/zapier.svg",
    category: "automation",
    tags: ["integration", "no-code", "workflow"],
    featured: false,
    logoSrc: "/logos/zapier.svg",
    logoAlt: "Zapier logo",
  },
  {
    id: "make",
    title: "Make",
    description: "Visual automation platform that lets you design, build, and automate workflows.",
    href: "https://make.com",
    image: "/resources/make.svg",
    category: "automation",
    tags: ["visual", "workflow", "integration"],
    featured: false,
    logoSrc: "/logos/make.svg",
    logoAlt: "Make logo",
  },
  // Systems
  {
    id: "notion",
    title: "Notion",
    description: "All-in-one workspace for notes, docs, wikis, and project management.",
    href: "https://notion.so",
    image: "/resources/notion.svg",
    category: "systems",
    tags: ["workspace", "docs", "collaboration"],
    featured: true,
    logoSrc: "/logos/notion.svg",
    logoAlt: "Notion logo",
    invertLogoInDark: true,
  },
  {
    id: "linear",
    title: "Linear",
    description: "Streamlined issue tracking and project management for high-performance teams.",
    href: "https://linear.app",
    image: "/resources/linear.svg",
    category: "systems",
    tags: ["issue-tracking", "project", "team"],
    featured: true,
    logoSrc: "/logos/linear.svg",
    logoAlt: "Linear logo",
  },
  {
    id: "airtable",
    title: "Airtable",
    description: "Low-code platform to build apps that perfectly fit your workflow.",
    href: "https://airtable.com",
    image: "/resources/airtable.svg",
    category: "systems",
    tags: ["database", "spreadsheet", "apps"],
    featured: false,
    logoSrc: "/logos/airtable.svg",
    logoAlt: "Airtable logo",
  },
  // Research
  {
    id: "readwise",
    title: "Readwise",
    description: "Sync highlights from Kindle, articles, and PDFs to your note-taking apps.",
    href: "https://readwise.io",
    image: "/resources/readwise.svg",
    category: "research",
    tags: ["reading", "highlights", "knowledge"],
    featured: true,
    logoSrc: "/logos/readwise.svg",
    logoAlt: "Readwise logo",
  },
  {
    id: "scholar",
    title: "Google Scholar",
    description: "Search across scholarly literature including articles, theses, and books.",
    href: "https://scholar.google.com",
    image: "/resources/scholar.svg",
    category: "research",
    tags: ["academic", "papers", "citations"],
    featured: false,
    logoSrc: "/logos/scholar.svg",
    logoAlt: "Google Scholar logo",
  },
  {
    id: "arxiv",
    title: "arXiv",
    description: "Open-access archive for scholarly articles in physics, mathematics, and computer science.",
    href: "https://arxiv.org",
    image: "/resources/arxiv.svg",
    category: "research",
    tags: ["papers", "preprints", "academic"],
    featured: false,
    logoSrc: "/logos/arxiv.svg",
    logoAlt: "arXiv logo",
  },
  // Operators
  {
    id: "raycast",
    title: "Raycast",
    description: "Blazingly fast launcher that lets you control your tools with a few keystrokes.",
    href: "https://raycast.com",
    image: "/resources/raycast.svg",
    category: "operators",
    tags: ["launcher", "productivity", "mac"],
    featured: true,
    logoSrc: "/logos/raycast.svg",
    logoAlt: "Raycast logo",
  },
  {
    id: "arc",
    title: "Arc Browser",
    description: "Browser designed for the way we use the internet in 2024.",
    href: "https://arc.net",
    image: "/resources/arc.svg",
    category: "operators",
    tags: ["browser", "productivity", "workspace"],
    featured: false,
    logoSrc: "/logos/arc.svg",
    logoAlt: "Arc Browser logo",
  },
  {
    id: "warp",
    title: "Warp",
    description: "Modern terminal reimagined with AI assistance and collaborative features.",
    href: "https://warp.dev",
    image: "/resources/warp.svg",
    category: "operators",
    tags: ["terminal", "ai", "productivity"],
    featured: false,
    logoSrc: "/logos/warp.svg",
    logoAlt: "Warp logo",
  },
  // Media
  {
    id: "descript",
    title: "Descript",
    description: "Edit video and podcasts like a doc. Transcription, screen recording, and publishing.",
    href: "https://descript.com",
    image: "/resources/descript.svg",
    category: "media",
    tags: ["video", "podcast", "editing"],
    featured: true,
    logoSrc: "/logos/descript.svg",
    logoAlt: "Descript logo",
  },
  {
    id: "runway",
    title: "Runway",
    description: "AI-powered creative tools for video editing, generation, and effects.",
    href: "https://runwayml.com",
    image: "/resources/runway.svg",
    category: "media",
    tags: ["ai", "video", "generative"],
    featured: true,
    logoSrc: "/logos/runway.svg",
    logoAlt: "Runway logo",
  },
  {
    id: "loom",
    title: "Loom",
    description: "Record quick videos to explain anything and share instantly with a link.",
    href: "https://loom.com",
    image: "/resources/loom.svg",
    category: "media",
    tags: ["video", "async", "communication"],
    featured: false,
    logoSrc: "/logos/loom.svg",
    logoAlt: "Loom logo",
  },
  {
    id: "malloy-studio",
    title: "Malloy Studio",
    description: "AI-powered motion graphics and overlay creation platform for generating ready-to-use visual assets, templates, and animated compositions.",
    href: "https://portal.malloy.sg",
    image: "/resources/malloy-studio.svg",
    category: "media",
    tags: ["motion", "overlays", "templates", "video", "creative-tools"],
    featured: false,
    logoSrc: "/logos/malloy-studio.svg",
    logoAlt: "Malloy Studio logo",
  },
  // Writing
  {
    id: "obsidian",
    title: "Obsidian",
    description: "Private, flexible markdown writing app for notes and knowledge management.",
    href: "https://obsidian.md",
    image: "/resources/obsidian.svg",
    category: "writing",
    tags: ["markdown", "notes", "pkm"],
    featured: true,
    logoSrc: "/logos/obsidian.svg",
    logoAlt: "Obsidian logo",
  },
  {
    id: "typefully",
    title: "Typefully",
    description: "Write and schedule Twitter threads and posts with analytics and collaboration.",
    href: "https://typefully.com",
    image: "/resources/typefully.svg",
    category: "writing",
    tags: ["twitter", "scheduling", "writing"],
    featured: false,
    logoSrc: "/logos/typefully.svg",
    logoAlt: "Typefully logo",
  },
  {
    id: "grammarly",
    title: "Grammarly",
    description: "AI writing assistant that helps with grammar, clarity, and tone across all platforms.",
    href: "https://grammarly.com",
    image: "/resources/grammarly.svg",
    category: "writing",
    tags: ["grammar", "ai", "editing"],
    featured: false,
    logoSrc: "/logos/grammarly.svg",
    logoAlt: "Grammarly logo",
  },
];

export function getResourcesByCategory(category: string): Resource[] {
  if (category === "explore") {
    return resources;
  }
  return resources.filter((r) => r.category === category);
}

export function getCategoryCount(category: string): number {
  return getResourcesByCategory(category).length;
}

export function searchResources(query: string, category?: string): Resource[] {
  const filtered = category && category !== "explore" 
    ? resources.filter((r) => r.category === category)
    : resources;
  
  if (!query.trim()) return filtered;
  
  const lowerQuery = query.toLowerCase();
  return filtered.filter(
    (r) =>
      r.title.toLowerCase().includes(lowerQuery) ||
      r.description.toLowerCase().includes(lowerQuery) ||
      r.tags.some((t) => t.toLowerCase().includes(lowerQuery)) ||
      r.category.toLowerCase().includes(lowerQuery)
  );
}
