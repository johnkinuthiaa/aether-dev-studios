"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image"

export interface NavItemObject {
  label: string;
  href: string;
}

export interface TransformingNavbarProps {
  navItems?: (string | NavItemObject)[];
  brandName?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

const defaultNavItems: NavItemObject[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function TransformingNavbar({
  navItems = defaultNavItems,
  brandName = "Aether Tech Studios",
  ctaText = "Let's talk",
  ctaHref = "#contact",
  className,
}: TransformingNavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      setIsScrolled(scrolled);
      if (!scrolled) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalizedItems: NavItemObject[] = React.useMemo(() => {
    return navItems.map((item) => {
      if (typeof item === "string") {
        return { label: item, href: `#${item.toLowerCase()}` };
      }
      return item;
    });
  }, [navItems]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isScrolled
          ? "w-full bg-black/90 backdrop-blur-xl shadow-2xl py-0"
          : "pointer-events-none flex justify-center pt-0",
        className
      )}
      style={{ color: "#E1E0CC" }}
    >
      <div
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "mx-auto flex h-16 md:h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
            : "mx-auto flex w-auto max-w-fit items-center justify-center gap-3 rounded-b-2xl bg-black/95 px-5 py-3 shadow-2xl backdrop-blur-md sm:gap-6 sm:px-8 md:gap-8 md:rounded-b-3xl md:px-10"
        )}
      >
        {/* Brand Logo (expands & slides in when scrolled) */}
        <div
          className={cn(
            "flex items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isScrolled
              ? "max-w-[280px] opacity-100 translate-x-0 mr-4"
              : "max-w-0 opacity-0 -translate-x-4 pointer-events-none"
          )}
        >
          <Link
            href="/"
            className="whitespace-nowrap font-display text-base font-extrabold tracking-tight transition-colors sm:text-lg cursor-pointer"
            style={{ color: "#E1E0CC" }}
          >
            <div className="flex items-center">
            <Image src={"/logo-dark.svg"} alt={"logo"} height={100} width={100} className="h-10 w-10"/>
            {brandName}
            </div>
            
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          className={cn(
            "flex items-center transition-all duration-500",
            isScrolled
              ? "hidden sm:flex gap-5 md:gap-8"
              : "gap-3 sm:gap-6 md:gap-8"
          )}
        >
          {normalizedItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "font-semibold tracking-wide transition-colors cursor-pointer",
                isScrolled
                  ? "text-xs md:text-sm"
                  : "text-xs sm:text-sm"
              )}
              style={{ color: "#E1E0CC" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#E1E0CC")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action: CTA Button & Mobile Toggle (expands & slides in when scrolled) */}
        <div
          className={cn(
            "flex items-center gap-3 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isScrolled
              ? "max-w-[240px] opacity-100 translate-x-0"
              : "max-w-0 opacity-0 translate-x-4 pointer-events-none"
          )}
        >
          {/* CTA */}
          <a
            href={ctaHref}
            className="hidden items-center gap-2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold shadow-md transition-all hover:gap-3 sm:inline-flex md:text-sm"
            style={{ color: "#000000", backgroundColor: "#E1E0CC" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E1E0CC")}
          >
            {ctaText}
            <ArrowRight className="size-3.5" style={{ color: "#000000" }} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex sm:hidden size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors hover:bg-white/20"
            style={{ color: "#FFFFFF" }}
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (when scrolled on mobile) */}
      {mobileMenuOpen && isScrolled && (
        <div
          className="sm:hidden absolute top-full left-0 right-0 border-b border-white/15 px-6 py-6 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.98)" }}
        >
          <nav className="flex flex-col gap-3">
            {normalizedItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold tracking-wide transition-colors"
                style={{ color: "#E1E0CC" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#E1E0CC")}
              >
                {item.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full py-2.5 px-6 text-sm font-semibold shadow-md transition-all"
              style={{ color: "#000000", backgroundColor: "#E1E0CC" }}
            >
              {ctaText}
              <ArrowRight className="size-4" style={{ color: "#000000" }} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default TransformingNavbar;
