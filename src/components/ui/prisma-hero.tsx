"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TransformingNavbar } from "@/components/ui/transforming-navbar";
import Image from "next/image";

export interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
export interface Segment {
  text: string;
  className?: string;
}

export interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
export interface NavItemObject {
  label: string;
  href: string;
}

export interface PrismaHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  videoSrc?: string;
  poster?: string;
  navItems?: (string | NavItemObject)[];
  className?: string;
  showAsterisk?: boolean;
}

const defaultNavItems: NavItemObject[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const defaultTitle = "Aether Tech studios";
const defaultSubtitle =
  "Aether Tech Studios engineers resilient backend architectures and distributed systems, builds world-class web and mobile applications with pristine design systems, and scales customer acquisition with high-ROAS paid ads.";
const defaultCtaText = "Contact Us";
const defaultCtaHref = "#contact";

const PrismaHero = ({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  ctaText = defaultCtaText,
  ctaHref = defaultCtaHref,
  onCtaClick,
  videoSrc = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
  poster = "/opengraph-image.png",
  navItems = defaultNavItems,
  className = "",
  showAsterisk = true,
}: PrismaHeroProps = {}) => {
  return (
    <section className={`min-h-screen w-full relative m-0 p-0 ${className}`}>
      {/* Transforming Sticky Navbar: begins as centered hero pill, morphs to full-width fixed bar on scroll */}
      <TransformingNavbar navItems={navItems} ctaText={ctaText} ctaHref={ctaHref} />

      <div className="relative min-h-screen w-full overflow-hidden rounded-none border-none! shadow-none">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-8 md:px-12 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-6">
            
            <div className="flex md:flex-row flex-col items-center gap-3 col-span-12 lg:col-span-7 xl:col-span-8">
            
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[24vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[17vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text={title} showAsterisk={showAsterisk} />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-4 lg:col-span-5 xl:col-span-4 lg:pb-8">
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs text-primary/80 sm:text-sm md:text-base font-light"
                style={{ lineHeight: 1.4 }}
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="self-start"
              >
                {ctaHref ? (
                  <a
                    href={ctaHref}
                    className="group inline-flex items-center gap-3 rounded-full bg-primary py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white! transition-all hover:gap-4 sm:text-base hover:bg-white shadow-xl cursor-pointer"
                  >
                    {ctaText}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                      <ArrowRight className="h-4 w-4" style={{ color: "#000" }} />
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={onCtaClick}
                    className="group inline-flex items-center gap-3 rounded-full bg-primary py-1.5 pl-6 pr-1.5 text-sm font-semibold text-black transition-all hover:gap-4 sm:text-base hover:bg-white shadow-xl cursor-pointer"
                  >
                    {ctaText}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                      <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                    </span>
                  </button>
                )}
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero, PrismaHero as AetherHero, TransformingNavbar };
export default PrismaHero;
