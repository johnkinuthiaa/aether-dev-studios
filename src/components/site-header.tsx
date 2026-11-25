"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navItems } from "@/lib/site-data";
import Image from "next/image"

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        overlayRef.current,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.24, ease: "power2.out" },
      );
      return;
    }

    gsap.to(overlayRef.current, {
      autoAlpha: 0,
      y: -12,
      duration: 0.2,
      ease: "power2.in",
    });
  }, [menuOpen]);

  return (
    <header className="site-header" data-nav>
      <div className="shell site-header-row">
        <Link href="/" className="logo-mark flex items-center gap-2" aria-label="Aether Tech Studios home">
        <Image src={"/logo-light.svg"} alt={"logo"} height={100} width={100} className="h-10 w-10"/> Aether Tech Studios
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`desktop-nav ${compact ? "compact" : ""}`}>
          {navItems.map((item) => (
            <Link key={item.href} href={`/${item.href}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div ref={overlayRef} className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav shell">
          {navItems.map((item) => (
            <Link key={item.href} href={`/${item.href}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="button-primary button-small" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
