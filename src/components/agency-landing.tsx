"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteFooter } from "@/components/site-footer";
import { ProjectDeck } from "@/components/ui/scroll-stacking-cards";
// import { AgencyKpiSection } from "@/components/agency-kpis";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { FeatureUIRow, ChecklistVisual, TimelineVisual } from "@/components/ui/feature-ui-row";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Server, Activity, ShieldCheck, Zap } from "lucide-react";
import { faqs, projects, reviews, serviceGroups } from "@/lib/site-data";
import {Button} from "@/components/ui/button"

export function AgencyLanding() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    if (!rootRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 24,
        opacity: 0,
        duration: 0.58,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-sections]",
          start: "top 84%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="page-root font-sans!">
      <section className="m-0 p-0 mb-8 w-full">
        <PrismaHero />
      </section>
      <main className="main-area">
       
        <div data-sections>
          {/* <AgencyKpiSection /> */}

          <section id="services" className="shell section font-sans!" data-reveal>
            <div className="section-heading ">
              <p className="label-line text-blue-500!">{"// Services"}</p>
              <h2 className="font-sans">What we offer</h2>
              <p className="my-6!">
                Complete technical and growth delivery: greenfield product engineering, high-throughput backend solutions, AI design cleanup & agent MVP refinement, and high-ROAS paid advertising.
              </p>
            </div>

            <div className="my-14 flex flex-col gap-24">
              {/* Row 1: Product Engineering */}
              <div className="flex flex-col gap-8">
                <FeatureUIRow
                  tone="night"
                  eyebrow="Websites, Web & Mobile App Dev"
                  title="Product Engineering"
                  body="Full-cycle digital product delivery from zero to one. We engineer custom marketing websites, high-performance web applications, and native cross-platform mobile apps (iOS & Android) with fluid 60fps UX and clean architectures."
                  cta={{ label: "Explore product engineering", href: "/services/product-engineering" }}
                  visual={
                    <TimelineVisual
                      title="Product Engineering Roadmap"
                      stages={[
                        { label: "Architecture & Scaffolding", years: 2 },
                        { label: "Web & Mobile Engineering", years: 4 },
                        { label: "60fps Polish & Launch", years: 2 },
                      ]}
                      total={8}
                      unit="wks"
                      note="Zero-to-one launch in 8-week sprints"
                    />
                  }
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceGroups[0]?.items.map((service) => (
                    <article key={service.title} className="rounded-xl border border-black/10 bg-[#f0f0f0]! p-5 transition-all hover:bg-white! hover:shadow-md">
                      <h4 className="font-semibold text-[15px] text-[#0b1424]">{service.title}</h4>
                      <p className="mt-2 text-[13px] leading-relaxed text-black/65">{service.details}</p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Row 2: Backend Solutions & Distributed Systems */}
              <div className="flex flex-col gap-8">
                <FeatureUIRow
                  reverse
                  tone="royal"
                  eyebrow="Infrastructure & Cloud"
                  title="Backend Solutions & Distributed Systems"
                  body="High-concurrency infrastructure, fault-tolerant architectures, and mission-critical data pipelines built to handle massive scale without downtime."
                  cta={{ label: "Explore backend solutions", href: "/services/backend-solutions" }}
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
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceGroups[1]?.items.map((service) => (
                    <article key={service.title} className="rounded-xl border border-black/10 bg-[#f0f0f0]! p-5 transition-all hover:bg-white! hover:shadow-md">
                      <h4 className="font-semibold text-[15px] text-[#0b1424]">{service.title}</h4>
                      <p className="mt-2 text-[13px] leading-relaxed text-black/65">{service.details}</p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Row 3: AI Design Cleanup & Agent MVP Refinement */}
              <div className="flex flex-col gap-8">
                <FeatureUIRow
                  tone="night"
                  eyebrow="Agent MVP Polish & Figma Design Systems"
                  title="AI Design Cleanup & Agent MVP Refinement"
                  body="Already have a prototype built by AI agents or rough concepts? We rescue disjointed AI-generated wireframes and fragile code, transforming them into accessible, pixel-perfect Figma design systems and hardened production architectures."
                  cta={{ label: "Explore AI design cleanup", href: "/services/ai-design-cleanup" }}
                  visual={
                    <ChecklistVisual
                      title="AI MVP Cleanup & Figma Audit"
                      rows={[
                        { label: "AI Concept Ingestion", value: "Audited & Tokenized" },
                        { label: "Figma Design System", value: "100+ Components" },
                        { label: "Accessibility (WCAG AAA)", value: "Contrast Verified" },
                        { label: "Code-Ready Sync", value: "Tailwind Tokens" },
                      ]}
                      stat={{ value: 100, suffix: "%", label: "Production-ready token parity" }}
                    />
                  }
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {serviceGroups[2]?.items.map((service) => (
                    <article key={service.title} className="rounded-xl border border-black/10 bg-[#f0f0f0]! p-5 transition-all hover:bg-white! hover:shadow-md">
                      <h4 className="font-semibold text-[15px] text-[#0b1424]">{service.title}</h4>
                      <p className="mt-2 text-[13px] leading-relaxed text-black/65">{service.details}</p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Row 4: Paid Acquisition & Performance Marketing */}
              <div className="flex flex-col gap-8">
                <FeatureUIRow
                  reverse
                  eyebrow="Performance Marketing"
                  title="Paid Acquisition & Performance Marketing"
                  body="Full-funnel media buying across Google, Meta, and TikTok, engineered for profitable customer acquisition, low CAC, and high ROAS."
                  cta={{ label: "Explore performance marketing", href: "/services/performance-marketing" }}
                  tone="royal"
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
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceGroups[3]?.items.map((service) => (
                    <article key={service.title} className="rounded-xl border border-black/10 bg-[#f0f0f0]! p-5 transition-all hover:bg-white! hover:shadow-md">
                      <h4 className="font-semibold text-[15px] text-[#0b1424]">{service.title}</h4>
                      <p className="mt-2 text-[13px] leading-relaxed text-black/65">{service.details}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="shell section" data-reveal>
            <div className="section-heading">
              <p className="label-line text-blue-500!">{"// Core Pillars"}</p>
              <h2 className="font-sans">Engineered for scale, reliability, and growth</h2>
              <p className="my-6!">
                We merge deep systems engineering with clean visual precision and data-backed paid advertising:
              </p>
            </div>
            <div className="grid-cards mt-4! *:bg-[#f0f0f0]! bg-[#E3E2E2]! px-2 py-4 rounded-md">
              <article className="base-card ">
                <h3>Backend & Distributed Systems</h3>
                <p>
                  Fault-tolerant microservices, Kafka event streams, database sharding, and high-throughput APIs engineered to handle millions of transactions with zero downtime.
                </p>
              </article>
              <article className="base-card">
                <h3>App Dev & AI Design Cleanup</h3>
                <p>
                  Refining raw AI-generated concepts into production-grade Figma design systems, alongside native mobile and web applications with 60fps UX.
                </p>
              </article>
              <article className="base-card">
                <h3>Google, Meta & TikTok Ads</h3>
                <p>
                  Full-funnel performance marketing combining creative testing, server-side attribution (CAPI), and hyper-targeted media buying to scale customer acquisition.
                </p>
              </article>
            </div>
          </section>

          <section id="work" className="section" data-reveal>
            <div className="shell section-heading">
              <p className="label-line text-blue-500!">{"// Work"}</p>
              <h2 className="font-sans">Proven transformations</h2>
              <p className="my-6!">
                See proof of high-impact platforms, systems, and product transformations.
              </p>
            </div>
            <ProjectDeck ground="#f0f0f0" />
            <div className="shell" style={{ marginTop: "3rem" }}>
              <div className="project-grid">
                {projects.map((project) => (
                  <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card-link bg-[#f0f0f0]!">
                    <div className="project-thumb" style={{ background: project.gradient }} aria-hidden />
                    <div className="project-card-copy">
                      <h3>{project.title}</h3>
                      <p className="font-mono! tracking-tighter!">{project.category}</p>
                      <p className="font-sans! my-4! leading-relaxed!">{project.summary}</p>
                      <div className="tag-row mt-4!">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="benefits" className="shell section" data-reveal>
            <div className="section-heading">
              <p className="label-line text-blue-500!">{"// Why Teams Trust Us"}</p>
              <h2>Why teams trust us</h2>
              <p className="my-6!">
                You get senior-level systems engineering, design refinement, and data-backed media buying built for measurable commercial outcomes.
              </p>
            </div>

            <div className="mt-8 font-sans">
              <BentoGridShowcase
                integration={
                  <Card className="flex h-full flex-col justify-between border-black/10 bg-[#f0f0f0]! p-6 shadow-xs hover:bg-white! transition-all">
                    <CardHeader className="p-0">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                        <Server className="size-6" />
                      </div>
                      <Badge variant="outline" className="w-fit border-blue-600/30 text-blue-600">
                        99.999% SLA
                      </Badge>
                      <CardTitle className="mt-4 text-xl font-bold text-[#0b1424]">
                        Distributed Architecture at Scale
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm leading-relaxed text-black/65">
                        We engineer backends, Kafka event streams, and database sharding designed to process millions of transactions without single points of failure.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-8 flex items-center justify-between border-t border-black/10 p-0 pt-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-black/75">
                        <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                        Multi-Region Failover
                      </div>
                      <Switch defaultChecked aria-label="Toggle multi-region failover" />
                    </CardFooter>
                  </Card>
                }
                trackers={
                  <Card className="h-full border-black/10 bg-[#f0f0f0]! p-6 shadow-xs hover:bg-white! transition-all">
                    <CardContent className="flex h-full flex-col justify-between p-0">
                      <div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="size-4 text-blue-600" />
                          <CardTitle className="text-base font-bold text-[#0b1424]">
                            Senior-Level Delivery
                          </CardTitle>
                        </div>
                        <CardDescription className="mt-1 text-xs text-black/65">
                          Dedicated tier-1 engineering & design squads
                        </CardDescription>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex -space-x-2 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="inline-block size-8 rounded-full ring-2 ring-white object-cover"
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                            alt="Lead Architect"
                          />
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="inline-block size-8 rounded-full ring-2 ring-white object-cover"
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                            alt="Design Systems Lead"
                          />
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="inline-block size-8 rounded-full ring-2 ring-white object-cover"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                            alt="Growth Engineer"
                          />
                        </div>
                        <span className="text-xs font-semibold text-blue-600">100% In-House</span>
                      </div>
                    </CardContent>
                  </Card>
                }
                statistic={
                  <Card className="relative h-full w-full overflow-hidden border-black/10 bg-[#f0f0f0]! p-6 shadow-xs hover:bg-white! transition-all">
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: "radial-gradient(#0b1424 1px, transparent 1px)",
                        backgroundSize: "14px 14px",
                      }}
                    />
                    <CardContent className="relative z-10 flex h-full flex-col items-center justify-center p-0 text-center">
                      <span className="text-6xl font-black text-[#0b1424] md:text-7xl">10X</span>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                        Delivery Velocity Lift
                      </p>
                    </CardContent>
                  </Card>
                }
                focus={
                  <Card className="h-full border-black/10 bg-[#f0f0f0]! p-6 shadow-xs hover:bg-white! transition-all">
                    <CardContent className="flex h-full flex-col justify-between p-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-base font-bold text-[#0b1424]">
                            AI Design Cleanup
                          </CardTitle>
                          <CardDescription className="text-xs text-black/65">
                            Component tokenization
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-600">
                          WCAG AAA
                        </Badge>
                      </div>
                      <div className="my-2">
                        <span className="text-5xl font-black text-[#0b1424]">60fps</span>
                      </div>
                      <div className="flex justify-between text-xs text-black/55">
                        <span>Zero Layout Shift</span>
                        <span>Smooth UX</span>
                      </div>
                    </CardContent>
                  </Card>
                }
                productivity={
                  <Card className="h-full border-black/10 bg-[#f0f0f0]! p-6 shadow-xs hover:bg-white! transition-all">
                    <CardContent className="flex h-full flex-col justify-between p-0">
                      <div className="flex items-center gap-2">
                        <Zap className="size-4 text-blue-600" />
                        <CardTitle className="text-base font-bold text-[#0b1424]">
                          High-ROAS Acquisition
                        </CardTitle>
                      </div>
                      <CardDescription className="mt-2 text-xs leading-relaxed text-black/65">
                        Full-funnel Google, Meta, and TikTok campaigns engineered with server-side attribution to scale spend profitably.
                      </CardDescription>
                      <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                        <Activity className="size-3.5" />
                        <span>340% Average ROAS Uplift</span>
                      </div>
                    </CardContent>
                  </Card>
                }
                shortcuts={
                  <Card className="h-full border-black/10 bg-[#f0f0f0]! p-6 shadow-xs hover:bg-white! transition-all">
                    <CardContent className="flex h-full flex-wrap items-center justify-between gap-4 p-0">
                      <div>
                        <CardTitle className="text-base font-bold text-[#0b1424]">
                          Contract-First API Engineering
                        </CardTitle>
                        <CardDescription className="text-xs text-black/65">
                          OpenAPI & Protobuf schemas, automated rate limiting, and instant SDK generation.
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md border border-black/15 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-[#0b1424]">
                          gRPC
                        </span>
                        <span className="rounded-md border border-black/15 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-[#0b1424]">
                          GraphQL
                        </span>
                        <span className="rounded-md border border-black/15 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-[#0b1424]">
                          REST
                        </span>
                        <span className="rounded-md border border-black/15 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-[#0b1424]">
                          Kafka
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                }
              />
            </div>
          </section>

          <section id="reviews" className="shell section" data-reveal>
            <div className="section-heading">
              <p className="my-6! label-line text-blue-500!">{"// Reviews"}</p>
              <h2>What clients say</h2>
              <p className="my-6!">Trusted by CTOs, founders, and growth leaders who demand dependable execution.</p>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article key={review.name} className="base-card review-card">
                  <p className="review-rating">{review.rating}</p>
                  <p>{review.quote}</p>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="faqs" className="shell section" data-reveal>
            <div className="section-heading">
              <p className="my-6! label-line text-blue-500!">{"// FAQs"}</p>
              <h2>Common questions</h2>
              <p className="my-6!">Everything you need to know about our engineering, design, and paid advertising partnerships.</p>
            </div>
            <div className="my-4!">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <article key={faq.question} className={`faq-item ${isOpen ? "open" : ""}`}>
                    <button
                      type="button"
                      className="faq-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setActiveFaq((prev) => (prev === index ? null : index))}
                    >
                      <span>{faq.question}</span>
                      <span>{isOpen ? "−" : "+"}</span>
                    </button>
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="contact" className="shell section" data-reveal>
            <div className="section-heading">
              <p className="my-6! label-line text-blue-500!">{"// Contact"}</p>
              <h2>Let&apos;s build and scale your next breakthrough.</h2>
              <p className="my-6!">
                Tell us your engineering goals, design challenges, or growth targets. We&apos;ll formulate the architectural roadmap and execution plan.
              </p>
            </div>
            <div className="contact-grid">
              <form className="base-card contact-form">
                <label>
                  Your name*
                  <input type="text" name="name" placeholder="John Kamau" required />
                </label>
                <label>
                  E-mail*
                  <input type="email" name="email" placeholder="john@company.com" required />
                </label>
                <label>
                  Engagement type
                  <select name="engagement">
                    <option>Backend Solutions & Distributed Systems</option>
                    <option>App Development (Web & Mobile)</option>
                    <option>API Development & Integrations</option>
                    <option>AI Design Cleanup & Design Systems</option>
                    <option>Google, Meta & TikTok Ads Management</option>
                    <option>Full-Stack Engineering & Growth Partnership</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Share your technical requirements, current stack, paid acquisition goals, or timeline."
                  />
                </label>
                <Button type="submit" variant={"default"} className="cursor-pointer bg-blue-500 text-white w-fit my-3! ">
                  Start the Conversation
                </Button>
              </form>
              
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
