import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/service-detail";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects, serviceFeatures } from "@/lib/site-data";
import { SEO_KEYWORDS, SITE_NAME, buildServiceJsonLd, toJsonLd } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceFeatures.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceFeatures.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageTitle = `${service.title} | ${SITE_NAME}`;
  const description = `${service.description} Deliverables, technical architecture, and client outcomes delivered by ${SITE_NAME}.`;

  return {
    title: pageTitle,
    description,
    keywords: [...service.technologies, ...SEO_KEYWORDS],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description,
      type: "website",
      url: `/services/${service.slug}`,
    },
    twitter: {
      title: pageTitle,
      description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceFeatures.find((item) => item.slug === slug);

  if (!service) notFound();

  const relatedProjects = projects.filter((project) =>
    service.relatedProjectSlugs.includes(project.slug),
  );

  return (
    <div className="page-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(buildServiceJsonLd(service)),
        }}
      />
      <SiteHeader compact />
      <main className="main-area">
        <ServiceDetail service={service} relatedProjects={relatedProjects} />
      </main>
      <SiteFooter />
    </div>
  );
}
