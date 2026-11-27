import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found (404)",
  description: "The requested page could not be found on VG Consultancy.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1 flex items-center">
        <div className="container section-lg text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-brand-bronze-text mx-auto mb-6">
            <AlertTriangle size={30} aria-hidden="true" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-ink mb-4">
            404 — Page Not Found
          </h1>
          <p className="text-brand-muted text-base sm:text-lg max-w-xl mx-auto mb-10">
            The page you requested could not be found or has moved. Explore our primary sections below or return to the homepage.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left mb-10">
            <Link href="/" className="card p-6 group">
              <h2 className="text-lg font-bold text-brand-ink mb-2 group-hover:text-brand-bronze-text">
                Homepage
              </h2>
              <p className="text-brand-muted text-sm mb-3">
                Overview of VG Consultancy&apos;s AI and technology practice.
              </p>
              <span className="text-brand-bronze-text text-sm font-bold inline-flex items-center gap-1">
                Go Home <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>

            <Link href="/services/" className="card p-6 group">
              <h2 className="text-lg font-bold text-brand-ink mb-2 group-hover:text-brand-bronze-text">
                Services
              </h2>
              <p className="text-brand-muted text-sm mb-3">
                Explore AI automation, software, SaaS, cloud, and staffing.
              </p>
              <span className="text-brand-bronze-text text-sm font-bold inline-flex items-center gap-1">
                View Services <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>

            <Link href="/contact/" className="card p-6 group">
              <h2 className="text-lg font-bold text-brand-ink mb-2 group-hover:text-brand-bronze-text">
                Contact Us
              </h2>
              <p className="text-brand-muted text-sm mb-3">
                Reach our consulting and engineering teams directly.
              </p>
              <span className="text-brand-bronze-text text-sm font-bold inline-flex items-center gap-1">
                Get in Touch <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          </div>

          <Button asChild size="lg">
            <Link href="/free-consultation/">Request a Free Consultation</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
