import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({
  items,
  dark = false,
}: {
  items: BreadcrumbItem[];
  dark?: boolean;
}) {
  const fullItems = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav
        aria-label="Breadcrumb"
        className={dark ? "text-brand-dark-muted text-sm" : "text-brand-muted text-sm"}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={item.href} className="inline-flex items-center gap-1.5">
                {idx > 0 && <ChevronRight size={14} className="opacity-60" aria-hidden="true" />}
                {isLast ? (
                  <span
                    aria-current="page"
                    className={dark ? "text-brand-gold font-semibold" : "text-brand-ink font-semibold"}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={
                      dark
                        ? "hover:text-brand-gold transition-colors"
                        : "hover:text-brand-bronze-text transition-colors"
                    }
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
