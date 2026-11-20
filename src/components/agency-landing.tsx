"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteFooter } from "@/components/site-footer";
import { ProjectDeck } from "@/components/ui/scroll-stacking-cards";
// import { AgencyKpiSection } from "@/components/agency-kpis";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { benefits, faqs, projects, reviews, serviceGroups } from "@/lib/site-data";
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
    <section className="mb-8">
          <PrismaHero />
        </section>
      <main className="main-area">
       
        <div data-sections>
          {/* <AgencyKpiSection /> */}

          <section id="services" className="shell section font-sans!" data-reveal>
            <div className="section-heading ">
              
              <h2 className="font-sans">What we offer</h2>
              <p className="my-6!">
                Complete technical and growth delivery across backend solutions, AI design cleanup, mobile and web app dev, contract-first API development, distributed systems, and performance paid advertising.
              </p>
            </div>
            <div className="service-groups gap-8! my-10!">
              {serviceGroups.map((group) => (
                <article key={group.title} className="service-group">
                  <header className="service-group-heading gap-3!">
                    <h3>{group.title}</h3>
                    <p>{group.intro}</p>
                  </header>
                  <div className="service-grid mt-4! bg-[#E3E2E2]! px-2 py-4 rounded-md w-fit!">
                    {group.items.map((service) => (
                      <article key={service.title} className="base-card bg-[#f0f0f0]!">
                        <h3>{service.title}</h3>
                        <p>{service.details}</p>
                      </article>
                    ))}
                  </div>
                </article>
              ))}
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
              <p className="label-line text-blue-500!">{"// Benefits"}</p>
              <h2>Why teams choose us</h2>
              <p className="my-6!">
                You get senior-level engineering, design refinement, and data-backed media buying built for measurable business outcomes.
              </p>
            </div>
            <div className="benefit-grid font-sans">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="base-card bg-[#f0f0f0]!">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.details}</p>
                </article>
              ))}
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
