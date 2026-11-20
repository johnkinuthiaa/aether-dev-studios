import type { ProjectItem } from "@/lib/site-data";

export const SITE_NAME = "Aether Tech Studios";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aethertechstudios.com").replace(
  /\/+$/,
  "",
);
export const CONTACT_EMAIL = "hello@aethertechstudios.com";

export const DEFAULT_TITLE = "Backend Solutions, App Dev, Distributed Systems & Paid Ads";
export const DEFAULT_DESCRIPTION =
  "Aether Tech Studios engineers robust backend solutions, distributed systems, modern app dev, API architectures, AI design cleanup, and high-ROAS Google, Meta, and TikTok ad campaigns.";

// Keyword set tuned for high-intent technical software services and digital performance marketing
export const SEO_KEYWORDS = [
  "backend solutions",
  "backend development company",
  "distributed systems development",
  "distributed systems engineering",
  "app dev services",
  "web and mobile app development",
  "api development services",
  "rest api graphql grpc",
  "ai design cleanup",
  "figma design system cleanup",
  "ui ux design cleanup",
  "google ads management agency",
  "meta ads agency",
  "tiktok ads performance marketing",
  "high throughput backend systems",
  "event driven architecture kafka",
  "microservices engineering",
  "full stack software engineering",
  "performance marketing and media buying",
  "aether tech studios",
];

export function absoluteUrl(pathname = "/") {
  return `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function toJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildProjectJsonLd(project: ProjectItem) {
  const projectUrl = absoluteUrl(`/projects/${project.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "@id": `${projectUrl}#case-study`,
    name: project.title,
    url: projectUrl,
    headline: project.heroLabel,
    description: project.summary,
    keywords: project.tags.join(", "),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: project.tags.map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
  };
}
