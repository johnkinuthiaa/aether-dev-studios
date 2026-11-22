"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProjectItem, ServiceFeature } from "@/lib/site-data";
import { FeatureUIRow, ChecklistVisual, TimelineVisual } from "@/components/ui/feature-ui-row";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";

type ServiceDetailProps = {
  service: ServiceFeature;
  relatedProjects: ProjectItem[];
};

export function ServiceDetail({ service, relatedProjects }: ServiceDetailProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-service-hero]", { y: 26, opacity: 0, duration: 0.66, ease: "power2.out" });
      gsap.from("[data-service-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-service-sections]",
          start: "top 80%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="shell page-gap font-sans">
      {/* Navigation Breadcrumb */}
      <div className="pt-8">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black"
        >
          <ArrowLeft className="size-4" />
          Back to all services
        </Link>
      </div>

      {/* Hero Header */}
      <section className="project-hero bg-[#f0f0f0]! shadow-none! border-0! rounded-2xl p-8 md:p-12" data-service-hero>
        <div className="project-hero-copy max-w-4xl">
          <p className="label-line text-blue-500!">{"// " + service.eyebrow}</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl text-[#0b1424]">
            {service.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-black/75">{service.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-600/10 px-3.5 py-1 text-xs font-semibold text-blue-600">
              {service.badge}
            </span>
            <span className="rounded-full bg-black/5 px-3.5 py-1 text-xs font-medium text-black/70">
              {service.stat.value}
              {service.stat.suffix ?? ""} — {service.stat.label}
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Feature Row Showcase */}
      <section className="my-12 rounded-2xl border border-black/10 bg-white/50 p-6 md:p-12 shadow-xs backdrop-blur-sm">
        {service.slug === "product-engineering" ? (
          <FeatureUIRow
            tone="night"
            eyebrow={service.eyebrow}
            title={service.title}
            body={service.tagline}
            cta={{ label: "Start your project", href: "/#contact" }}
            visual={
              <TimelineVisual
                title="Product Engineering Roadmap"
                stages={[
                  { label: "AI Cleanup & Figma", years: 2 },
                  { label: "Web & Mobile App Dev", years: 4 },
                  { label: "Optimization & Launch", years: 2 },
                ]}
                total={8}
                unit="wks"
                note="Production-grade launch in 8-week sprints"
              />
            }
          />
        ) : service.slug === "backend-solutions" ? (
          <FeatureUIRow
            tone="royal"
            eyebrow={service.eyebrow}
            title={service.title}
            body={service.tagline}
            cta={{ label: "Request architecture review", href: "/#contact" }}
            visual={
              <ChecklistVisual
                title="Infrastructure & Systems SLA"
                rows={[
                  { label: "Backend Solutions", value: "High throughput" },
                  { label: "Distributed Systems Dev", value: "Kafka & Sharding" },
                  { label: "Contract-first APIs", value: "REST, GraphQL & gRPC" },
                  { label: "High Availability", value: "99.99% Uptime SLA" },
                ]}
                stat={{ value: 99, suffix: "%", label: "Uptime & fault-tolerance SLA" }}
              />
            }
          />
        ) : (
          <FeatureUIRow
            tone="royal"
            eyebrow={service.eyebrow}
            title={service.title}
            body={service.tagline}
            cta={{ label: "Schedule growth consultation", href: "/#contact" }}
            visual={
              <ChecklistVisual
                title="Paid Ads Performance Suite"
                rows={[
                  { label: "Google Ads (Search & PMax)", value: "High Intent" },
                  { label: "Meta Ads (CAPI Tracking)", value: "Zero Signal Loss" },
                  { label: "TikTok Ads (Spark & UGC)", value: "Viral Scaling" },
                  { label: "Attribution & ROAS", value: "Real-time Tracking" },
                ]}
                stat={{ value: 340, suffix: "%", label: "Average client ROAS uplift" }}
              />
            }
          />
        )}
      </section>

      <div data-service-sections className="project-sections flex flex-col gap-12">
        {/* Core Sub-Offerings */}
        <section className="content-block bg-[#f0f0f0]! shadow-none! border-0! rounded-2xl p-8" data-service-reveal>
          <h2 className="label-line font-bold text-2xl text-blue-500!">{"// Core Capabilities & Offerings"}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((item) => (
              <article key={item.title} className="rounded-xl border border-black/10 bg-white p-6 shadow-xs">
                <h3 className="text-lg font-bold text-[#0b1424]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="content-block bg-[#f0f0f0]! shadow-none! border-0! rounded-2xl p-8" data-service-reveal>
          <h2 className="label-line font-bold text-2xl text-blue-500!">{"// What We Deliver"}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <article key={item.title} className="flex gap-4 rounded-xl border border-black/10 bg-white p-6 shadow-xs">
                <div className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-600/10 text-blue-600">
                  <Check className="size-4" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px] text-[#0b1424]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-black/65">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Delivery Process */}
        <section className="content-block bg-[#f0f0f0]! shadow-none! border-0! rounded-2xl p-8" data-service-reveal>
          <h2 className="label-line font-bold text-2xl text-blue-500!">{"// Engineering & Execution Process"}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <article key={step.step} className="rounded-xl border border-black/10 bg-white p-6 shadow-xs">
                <span className="font-mono text-2xl font-black text-blue-600">{step.step}</span>
                <h3 className="mt-2 font-bold text-[15px] text-[#0b1424]">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-black/65">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Technologies & Tools */}
        <section className="content-block bg-[#f0f0f0]! shadow-none! border-0! rounded-2xl p-8" data-service-reveal>
          <h2 className="label-line font-bold text-xl text-blue-500!">{"// Core Stack & Tools"}</h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {service.technologies.map((tech) => (
              <span key={tech} className="rounded-md border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-black/80">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedProjects.length > 0 && (
          <section className="content-block bg-[#f0f0f0]! shadow-none! border-0! rounded-2xl p-8" data-service-reveal>
            <h2 className="label-line font-bold text-2xl text-blue-500!">{"// Related Proven Case Studies"}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group rounded-xl border border-black/10 bg-white p-6 shadow-xs transition-all hover:border-blue-500 hover:shadow-md"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-blue-600">{project.category}</p>
                  <h3 className="mt-2 text-lg font-bold text-[#0b1424] group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-black/65 line-clamp-3">{project.summary}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                    Read case study <ChevronRight className="size-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="mb-16 rounded-2xl bg-[#0b1424] p-8 md:p-14 text-white text-center" data-service-reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Ready to deploy {service.shortTitle.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70 text-sm md:text-base leading-relaxed">
            Contact our engineering and growth team to map out your architecture roadmap or launch plan.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-500">
              <Link href="/#contact">Start the Conversation</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
