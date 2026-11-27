import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { footerConfig, siteConfig } from "@/content/pages";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-brand-dark text-white border-t border-brand-gold/25">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pt-16 pb-12">
          {/* Brand Summary */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex flex-col items-start mb-4"
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
                <span className="font-display font-extrabold text-brand-gold tracking-tight text-lg leading-none">
                  Consultancy
                </span>
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wide mt-1">
                Virtual Growth Private Limited
              </span>
            </Link>
            <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-3">
              {footerConfig.company.tagline}
            </p>
            <p className="text-brand-dark-muted text-sm leading-relaxed max-w-sm mb-5">
              {footerConfig.company.description}
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-slate-200 hover:text-brand-gold transition-colors"
              >
                <Mail size={16} className="text-brand-gold shrink-0" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-2 text-brand-dark-muted text-xs">
                <Globe size={15} className="text-brand-gold shrink-0" aria-hidden="true" />
                <span>Serving clients across India and global markets • Established 2016</span>
              </div>
            </div>
          </div>

          {/* 4 Navigation Columns */}
          {footerConfig.columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h2 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h2>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      className="text-brand-dark-muted text-sm hover:text-brand-gold transition-colors inline-block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-dark-muted">
          <p>
            © {siteConfig.established}–{currentYear} VG Consultancy. All Rights Reserved. | Technology • AI • Talent
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy/" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions/" className="hover:text-brand-gold transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/cookie-policy/" className="hover:text-brand-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
