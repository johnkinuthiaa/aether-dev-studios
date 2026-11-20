"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProjectItem } from "@/lib/site-data";

type ProjectDetailProps = {
  project: ProjectItem;
  related: ProjectItem[];
};

export function ProjectDetail({ project, related }: ProjectDetailProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-project-hero]", { y: 26, opacity: 0, duration: 0.66, ease: "power2.out" });
      gsap.from("[data-project-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-project-sections]",
          start: "top 80%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="shell page-gap">
      <section className="project-hero bg-[#f0f0f0]! shadow-none! border-0!" data-project-hero>
        <div className="project-hero-copy">
          <p className="label-line text-blue-500!">{"// Case Study"}</p>
          <div className="md:text-5xl text-3xl font-extrabold leading-tight tracking-tight">{project.title}</div>
          <p className="">{project.summary}</p>
          <div className="project-meta">
            <span>{project.category}</span>
            <span>{project.heroLabel}</span>
          </div>
        </div>
        {/* <div className="project-hero-visual" style={{ background: project.gradient }} aria-hidden /> */}
      </section>

      <div data-project-sections className="project-sections">
        <section className="content-block bg-[#f0f0f0]! shadow-none! border-0!" data-project-reveal>
          <div className="label-line font-bold text-2xl text-blue-500!">{"// Project Goals"}</div>
          <ul>
            {project.goals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="content-block bg-[#f0f0f0]! shadow-none! border-0!" data-project-reveal>
          <h3 className="label-line text-blue-500!">{"// What We Delivered"}</h3>
          <div className="grid-cards mt-6">
            {project.identityShowcase.map((item) => (
              <article key={item} className="base-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-block flex flex-col gap-6 my-4! bg-[#f0f0f0]! border-none! shadow-none!" data-project-reveal>
          <article>
            <h3 className="label-line text-blue-500!">{"// Engineering & Delivery Process"}</h3>
            <ul>
              {project.process.map((item) => (
                <li className="flex items-center gap-1" key={item}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3 className="label-line text-blue-500!">{"// Company Impact & Measurable Results //"}</h3>
            <ul>
              {project.results.map((item) => (
                <li className="flex items-center gap-1" key={item}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="content-block bg-[#f0f0f0]! border-none! shadow-none!" data-project-reveal>
          <h3 className="label-line text-blue-500!">{"// Related Case Studies "}</h3>
          <div className="grid-cards my-4!">
            {related.map((item) => (
              <Link key={item.slug} className="project-card-link" href={`/projects/${item.slug}`}>
                <div className="project-thumb font-sans!" style={{ background: item.gradient }} aria-hidden />
                <div className="flex flex-col gap-3 p-2 my-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-muted">{item.category}</p>
                </div>
                
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
