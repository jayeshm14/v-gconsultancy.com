"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "vg_cookie_consent_v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setVisible(true);
      }
    } catch {
      // Ignore storage access errors in restricted environments
    }
  }, []);

  const handleChoice = (choice: "essential" | "all") => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, timestamp: new Date().toISOString() })
      );
    } catch {
      // Ignore storage access errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl text-brand-ink"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-lg bg-brand-light p-2 text-brand-bronze-text shrink-0">
          <Cookie size={18} aria-hidden="true" />
        </div>
        <div className="text-sm">
          <p className="font-bold text-brand-ink mb-1">Cookie Preferences</p>
          <p className="text-brand-muted leading-relaxed mb-3">
            We use essential cookies to ensure reliable site navigation and form security. Read our{" "}
            <Link href="/cookie-policy/" className="text-brand-bronze-text font-semibold underline">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleChoice("all")}
              className="min-h-[38px] px-4 py-1.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-navy transition-colors"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={() => handleChoice("essential")}
              className="min-h-[38px] px-4 py-1.5 rounded-full border border-slate-300 text-brand-ink text-xs font-semibold hover:bg-brand-light transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
