import type { Metadata } from "next";
import { AgencyLanding } from "@/components/agency-landing";
import { faqs, projects, services } from "@/lib/site-data";
import {
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  toJsonLd,
} from "@/lib/seo";

const trendFocusedTerms = [
  "backend solutions development",
  "distributed systems engineering",
  "custom app development",
  "api development services",
  "ai design cleanup figma",
  "google ads agency",
  "meta ads performance marketing",
  "tiktok ads scaling",
];

export const metadata: Metadata = {
  title: "Backend Solutions, App Dev, Distributed Systems & Paid Ads",
  description:
    "Engineering high-throughput backend solutions, distributed systems, modern web & mobile app dev, AI design cleanup, API architectures, and performance-driven Google, Meta, and TikTok ad campaigns.",
  keywords: [...SEO_KEYWORDS, ...trendFocusedTerms],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: SITE_URL,
    title: `${SITE_NAME} | Backend Solutions, App Dev, Distributed Systems & Paid Ads`,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    title: `${SITE_NAME} | Backend Solutions, App Dev, Distributed Systems & Paid Ads`,
    description: DEFAULT_DESCRIPTION,
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT_EMAIL,
          availableLanguage: ["en"],
        },
      ],
      knowsAbout: trendFocusedTerms,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#professional-service`,
      name: SITE_NAME,
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Startups, Scale-ups, and Enterprises",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Backend Solutions, Distributed Systems, App Dev, AI Design Cleanup, and Paid Ads Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          sku: `service-${index + 1}`,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.details,
            provider: {
              "@id": `${SITE_URL}/#organization`,
            },
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faqs`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#case-studies`,
      name: "Client Case Studies",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/projects/${project.slug}`),
        name: project.title,
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(homeJsonLd),
        }}
      />
      <AgencyLanding />
    </>
  );
}
