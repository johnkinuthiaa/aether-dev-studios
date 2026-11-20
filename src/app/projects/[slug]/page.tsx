import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/lib/site-data";
import { SEO_KEYWORDS, SITE_NAME, buildProjectJsonLd, toJsonLd } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageTitle = `${project.title} Case Study`;
  const description = `${project.summary} Explore goals, process, and measurable results delivered by ${SITE_NAME}.`;

  return {
    title: pageTitle,
    description,
    keywords: [...project.tags, ...SEO_KEYWORDS],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${pageTitle} | ${SITE_NAME}`,
      description,
      type: "article",
      url: `/projects/${project.slug}`,
    },
    twitter: {
      title: `${pageTitle} | ${SITE_NAME}`,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="page-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(buildProjectJsonLd(project)),
        }}
      />
      <SiteHeader compact />
      <main className="main-area font-sans!">
        <div className="shell back-link-wrap">
          <Link href="/#work" className="back-link flex items-center gap-3">
          <div className="bg-white rounded-md p-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
          </div>
      

            Back to Work
          </Link>
        </div>
        <ProjectDetail project={project} related={related} />
      </main>
      <SiteFooter />
    </div>
  );
}
