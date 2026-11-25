import type { ProjectItem, ServiceFeature } from "@/lib/site-data";

export const SITE_NAME = "Aether Tech Studios";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aethertechstudios.com").replace(
  /\/+$/,
  "",
);
export const CONTACT_EMAIL = "hello@aethertechstudios.com";

export const DEFAULT_TITLE = "Web Development, Backend Solutions, App Dev & Paid Ads";
export const DEFAULT_DESCRIPTION =
  "Aether Tech Studios engineers backend solutions, distributed systems, modern app dev, APIs, AI design cleanup, and Google, Meta, and TikTok ad campaigns.";

export const OPENGRAPH_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";
export const OPENGRAPH_IMAGE_PATH = "/opengraph-image.png";
export const TWITTER_IMAGE_PATH = "/twitter-image.png";

export const OPENGRAPH_VIDEO = {
  url: OPENGRAPH_VIDEO_URL,
  secureUrl: OPENGRAPH_VIDEO_URL,
  type: "video/mp4",
  width: 1920,
  height: 1080,
};

export const OPENGRAPH_IMAGE = {
  url: OPENGRAPH_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} - ${DEFAULT_TITLE}`,
  type: "image/png",
};

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

export function buildServiceJsonLd(service: ServiceFeature) {
  const serviceUrl = absoluteUrl(`/services/${service.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    url: serviceUrl,
    headline: service.tagline,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.items.map((item, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        name: item.title,
        description: item.details,
      })),
    },
  };
}
