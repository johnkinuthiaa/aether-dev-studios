"use client";

import * as React from "react";
import MeadowRiseFooter from "@/components/ui/meadow-rise-footer";
import { Layers } from "lucide-react";

export function SiteFooter() {
  return (
    <MeadowRiseFooter
      name="Aether Tech Studios"
      brandHref="/"
      logo={
        <span className="flex items-center gap-2">
          
          
        </span>
      }
      heading="Scale your backend throughput & *accelerate discovery* today."
      subheading="Engineering high-throughput distributed backends, 60fps web & mobile apps, AI Figma design systems, and scalable Google, Meta & TikTok ad campaigns."
      cta={{
        label: "Book an Architecture Call",
        href: "/#contact",
      }}
      tagline="Enterprise engineering and full-funnel discovery marketing partner for startups, scale-ups, and global companies."
      placeholder="Enter your work email address"
      successMessage="Thank you for connecting. Our technical leads will be in touch shortly."
      newsletter={true}
      preset="moonlit"
      columns={[
        {
          title: "Services",
          links: [
            { label: "Backend Solutions", href: "/#services" },
            { label: "Distributed Systems Dev", href: "/#services" },
            { label: "Contract-First API Dev", href: "/#services" },
            { label: "App Dev (Web & Mobile)", href: "/#services" },
            { label: "AI Design Cleanup", href: "/#services" },
            { label: "Google, Meta & TikTok Ads", href: "/#services" },
          ],
        },
        {
          title: "Case Studies",
          links: [
            { label: "Fugitive - Real-Time Search", href: "/projects/fugitive" },
            { label: "Radiant UI - Design System", href: "/projects/radiant-ui" },
            { label: "SOC Simulator - Cyber Engine", href: "/projects/soc-simulator" },
            { label: "Live Client Performance KPIs", href: "/#kpis" },
            { label: "All Case Studies & Outcomes", href: "/#work" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "Why Teams Choose Us", href: "/#benefits" },
            { label: "CTO & Founder Reviews", href: "/#reviews" },
            { label: "Technical FAQs", href: "/#faqs" },
            { label: "hello@aethertechstudios.com", href: "mailto:hello@aethertechstudios.com" },
            { label: "Schedule Strategy Call", href: "/#contact" },
          ],
        },
      ]}
      socialTitle="Connect"
      socials={[
        { icon: "x", href: "https://x.com", label: "X (Twitter)" },
        { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
        { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
        { icon: "youtube", href: "https://youtube.com", label: "YouTube" },
      ]}
      copyright="© 2026 Aether Tech Studios. All rights reserved."
      legal={[
        { label: "Privacy Policy", href: "/#contact" },
        { label: "Terms of Service", href: "/#contact" },
        { label: "Security & SLA", href: "/#contact" },
      ]}
    />
  );
}

export default SiteFooter;
