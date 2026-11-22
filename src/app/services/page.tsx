import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { serviceFeatures } from "@/lib/site-data";
import { DEFAULT_DESCRIPTION, SEO_KEYWORDS, SITE_NAME } from "@/lib/seo";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Our Services | ${SITE_NAME}`,
  description: DEFAULT_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="page-root font-sans">
      <SiteHeader compact />
      <main className="main-area shell py-12">
        <header className="max-w-3xl">
          <p className="label-line text-blue-500!">{"// Services Directory"}</p>
          <h1 className="mt-4 text-3xl font-extrabold md:text-5xl text-[#0b1424]">
            Engineering & Growth Delivery
          </h1>
          <p className="mt-4 text-lg text-black/70 leading-relaxed">
            Full-cycle technical architecture, product engineering, design systems, and data-backed media buying.
          </p>
        </header>

        <div className="my-12 grid gap-8 md:grid-cols-3">
          {serviceFeatures.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-[#f0f0f0]! p-8 transition-all hover:bg-white! hover:shadow-lg"
            >
              <div>
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-600">
                  {service.badge}
                </span>
                <h2 className="mt-4 text-xl font-bold text-[#0b1424] group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{service.tagline}</p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-4 text-xs font-semibold text-blue-600">
                <span>Explore {service.shortTitle}</span>
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
