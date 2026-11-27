"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { navConfig } from "@/content/pages";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Set<string>>(new Set());
  const navRef = useRef<HTMLElement>(null);

  const toggleDesktopDropdown = (label: string) => {
    setOpenDesktopDropdown((prev) => (prev === label ? null : label));
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const closeAll = () => {
    setMobileOpen(false);
    setOpenDesktopDropdown(null);
    setOpenMobileDropdowns(new Set());
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktopDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktopDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-brand-gold/25 bg-brand-dark/95 backdrop-blur-md text-white"
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Preserved Brand Logo */}
          <Link
            href="/"
            onClick={closeAll}
            className="inline-flex flex-col items-start shrink-0 focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg py-1"
            aria-label="VG Consultancy — Virtual Growth Private Limited home"
          >
            <span className="flex items-center gap-2.5">
              <img
                src="/images/logo.png"
                alt="VG Consultancy logo"
                width={54}
                height={28}
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-extrabold text-brand-gold tracking-tight text-lg whitespace-nowrap leading-none">
                Consultancy
              </span>
            </span>
            <span className="text-xs font-medium text-slate-300 tracking-wide leading-tight mt-1 whitespace-nowrap">
              Virtual Growth Private Limited
            </span>
          </Link>

          {/* Desktop navigation (1024px+) */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-2.5 xl:gap-5">
            {navConfig.primary.map((item) => {
              if (item.items && item.items.length > 0) {
                const isOpen = openDesktopDropdown === item.label;
                const menuId = `nav-dropdown-${item.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
                return (
                  <div key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDesktopDropdown(item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={menuId}
                      className="flex items-center gap-1 text-[13px] xl:text-sm font-semibold text-slate-200 hover:text-brand-gold transition-colors rounded-lg px-2 py-2 whitespace-nowrap"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition-transform duration-150 ${isOpen ? "rotate-180 text-brand-gold" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={menuId}
                        role="menu"
                        className="absolute left-0 mt-2 w-80 whitespace-nowrap rounded-xl border border-slate-200 bg-white p-2 shadow-2xl z-50 text-brand-ink"
                      >
                        <Link
                          href={item.href}
                          role="menuitem"
                          onClick={closeAll}
                          className="block whitespace-nowrap px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-brand-bronze-text border-b border-slate-100 mb-1 hover:bg-brand-light rounded-lg"
                        >
                          All {item.label} &rarr;
                        </Link>
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href + sub.label}
                            href={sub.href}
                            role="menuitem"
                            onClick={closeAll}
                            className="block whitespace-nowrap px-3 py-2 text-sm font-medium text-brand-ink hover:bg-brand-light hover:text-brand-bronze-text rounded-lg transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                  className="text-[13px] xl:text-sm font-semibold text-slate-200 hover:text-brand-gold transition-colors rounded-lg px-2 py-2 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={navConfig.cta.href}
              onClick={closeAll}
              className="ml-1 inline-flex items-center justify-center min-h-[40px] bg-brand-gold text-brand-dark font-bold rounded-full px-4 xl:px-5 py-2 text-[13px] xl:text-sm hover:bg-[#e7b26b] transition-colors whitespace-nowrap shrink-0"
            >
              <span className="xl:hidden">{navConfig.cta.shortLabel}</span>
              <span className="hidden xl:inline">{navConfig.cta.label}</span>
            </Link>
          </nav>

          {/* Mobile / Tablet menu toggle (<1024px) */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 text-white hover:text-brand-gold rounded-lg"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-white/10 bg-brand-dark max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="container py-5 space-y-1">
            {navConfig.primary.map((item) => {
              if (item.items && item.items.length > 0) {
                const expanded = openMobileDropdowns.has(item.label);
                return (
                  <div key={item.label} className="border-b border-white/10 pb-1">
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.label)}
                      aria-expanded={expanded}
                      className="w-full min-h-[44px] flex items-center justify-between px-3 py-2.5 text-base font-semibold text-white hover:text-brand-gold rounded-lg"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${expanded ? "rotate-180 text-brand-gold" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {expanded && (
                      <div className="pl-4 pr-2 pb-2 space-y-1">
                        <Link
                          href={item.href}
                          onClick={closeAll}
                          className="block min-h-[40px] px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-gold hover:bg-white/5 rounded-lg"
                        >
                          All {item.label} &rarr;
                        </Link>
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href + sub.label}
                            href={sub.href}
                            onClick={closeAll}
                            className="block min-h-[40px] px-3 py-2 text-sm text-brand-dark-muted hover:text-brand-gold hover:bg-white/5 rounded-lg"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                  className="block min-h-[44px] px-3 py-2.5 text-base font-semibold text-white hover:text-brand-gold border-b border-white/10 rounded-lg"
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 pb-2">
              <Link
                href={navConfig.cta.href}
                onClick={closeAll}
                className="w-full min-h-[48px] inline-flex items-center justify-center bg-brand-gold text-brand-dark font-bold rounded-full px-6 py-3 text-base hover:bg-[#e7b26b] transition-colors"
              >
                {navConfig.cta.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
