export const ASCII_ART = `
 ____  _     _
|  _ \\(_) __| | __ ___      ____ _ _   _
| |_) | |/ _\` |/ _\` \\ \\ /\\ / / _\` | | | |
|  _ <| | (_| | (_| |\\ V  V / (_| | |_| |
|_| \\_\\_|\\__,_|\\__, | \\_/\\_/ \\__,_|\\__, |
               |___/                |___/
 _   _      _                      _
| \\ | | ___| |___      _____  _ __| | _____
|  \\| |/ _ \\ __\\ \\ /\\ / / _ \\| '__| |/ / __|
| |\\  |  __/ |_ \\ V  V / (_) | |  |   <\\__ \\
|_| \\_|\\___\\__|  \\_/\\_/ \\___/|_|  |_|\\_\\___/
`.trimStart();

export const ASCII_ART_MOBILE = `
 ____  _     _
|  _ \\(_) __| | __ ___      ____ _ _   _
| |_) | |/ _\` |/ _\` \\ \\ /\\ / / _\` | | | |
|  _ <| | (_| | (_| |\\ V  V / (_| | |_| |
|_| \\_\\_|\\__,_|\\__, | \\_/\\_/ \\__,_|\\__, |
               |___/                |___/

 _   _      _                      _
| \\ | | ___| |___      _____  _ __| | _____
|  \\| |/ _ \\ __\\ \\ /\\ / / _ \\| '__| |/ / __|
| |\\  |  __/ |_ \\ V  V / (_) | |  |   <\\__ \\
|_| \\_|\\___\\__|  \\_/\\_/ \\___/|_|  |_|\\_\\___/
`.trimStart();

export const TAGLINE = "Full-Stack Development & Digital Infrastructure";

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites, landing pages, and portfolio sites built with modern frameworks. Responsive, performant, and SEO-optimised.",
    icon: "◈",
  },
  {
    title: "Full-Stack Applications",
    description:
      "SaaS platforms, dashboards, and data-driven applications. End-to-end development from database design to polished UI.",
    icon: "⬡",
  },
  {
    title: "API & Backend Development",
    description:
      "REST APIs, CMS backends, authentication systems, and database architecture. Scalable and well-documented.",
    icon: "⏣",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Kubernetes clusters, CI/CD pipelines, GitOps workflows, and Cloudflare integration. Self-hosted and production-ready.",
    icon: "⎔",
  },
];

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  url?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Mesmerise Digital Intelligence",
    subtitle: "AI-Powered Lead Scoring SaaS",
    description:
      "An AI-powered lead scoring platform that automates website audits, SEO analysis, and intelligent lead prioritisation. Features Excel lead upload, automated Playwright-based web scraping, PDF report generation, and background job processing with Inngest.",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Inngest",
      "Playwright",
      "Tailwind CSS",
    ],
    url: "https://mesmerise.ridgwaynetworks.com",
  },
  {
    title: "MonSec.io",
    subtitle: "Cybersecurity Company",
    description:
      "Built the entire online presence for a cybersecurity consultancy. Designed and developed the website from the ground up, establishing a professional digital identity for the brand.",
    techStack: ["Web Development", "UI/UX Design", "SEO"],
    url: "https://monsec.io",
  },
  {
    title: "ebonyash.fashion",
    subtitle: "Professional Model Portfolio",
    description:
      "A fashion model portfolio site with clean, image-forward design. Built to showcase editorial and runway work with optimised image loading, SEO structured data, and social meta tags.",
    techStack: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    url: "https://ebonyash.fashion",
  },
  {
    title: "vanilathrilacosplay.com",
    subtitle: "Cosplay Portfolio & Custom CMS",
    description:
      "A cosplay portfolio with a fully custom content management system. Features a Fastify backend API with JWT authentication, image upload and processing, rate limiting, and Swagger API documentation.",
    techStack: [
      "React",
      "Vite",
      "Fastify",
      "PostgreSQL",
      "JWT Auth",
      "Sharp",
      "Swagger",
    ],
    url: "https://vanilathrilacosplay.com",
  },
  {
    title: "LenaRecipes",
    subtitle: "Full-Stack Recipe Application",
    description:
      "A recipe management site featuring a curated collection of traditional Lebanese recipes. Includes cooking timers, ingredient checklists, serving calculators, dark mode, social sharing, and an admin dashboard.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "SQLite",
      "NextAuth",
      "Tailwind CSS",
    ],
    url: "https://lenarecipes.com",
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "HTML/CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Fastify", "Python", "REST APIs", "NextAuth", "JWT"],
  },
  {
    category: "Databases & ORM",
    items: ["PostgreSQL", "SQLite", "Drizzle ORM", "Prisma"],
  },
  {
    category: "Infrastructure",
    items: [
      "Kubernetes",
      "Docker",
      "Cloudflare",
      "Linux",
      "Nginx",
      "GitOps",
      "CI/CD",
    ],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub", "Kaniko", "Inngest", "Playwright", "Sharp"],
  },
];

export const ABOUT_TEXT = [
  "I'm a full-stack developer who builds and ships production software end-to-end — from frontend interfaces to backend APIs to the infrastructure they run on.",
  "Every project in my portfolio runs on a self-hosted Kubernetes cluster with automated GitOps deployments: push to main, and it's live. I built the CI/CD pipeline myself using GitHub webhooks, Kaniko builds, and Cloudflare Tunnels.",
  "I work with clients to turn ideas into production-ready applications. Whether it's a SaaS platform, a portfolio site, or a custom CMS — I handle the full stack.",
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
