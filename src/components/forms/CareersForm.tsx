"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { careersSchema } from "@/lib/submissions";
import { siteConfig } from "@/content/pages";

type FieldErrors = Partial<
  Record<"name" | "email" | "discipline" | "experience" | "message" | "consent", string>
>;

export default function CareersForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discipline, setDiscipline] = useState("software-engineering");
  const [experience, setExperience] = useState("3-5-years");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    status: "idle" | "success" | "error";
    note?: string;
    referenceId?: string;
  }>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setResult({ status: "idle" });

    try {
      const validated = careersSchema.parse({
        name,
        email,
        discipline,
        experience,
        portfolioUrl,
        message,
        consent,
        website,
      });

      setSubmitting(true);
      const res = await fetch("/api/careers/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setResult({
          status: "success",
          note: data.note,
          referenceId: data.referenceId,
        });
        setName("");
        setEmail("");
        setPortfolioUrl("");
        setMessage("");
        setConsent(false);
      } else {
        setResult({
          status: "error",
          note: data.message || `Please verify your entries or email ${siteConfig.email}.`,
        });
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const nextErrors: FieldErrors = {};
        for (const issue of err.issues) {
          const field = issue.path[0] as keyof FieldErrors;
          if (!nextErrors[field]) nextErrors[field] = issue.message;
        }
        setErrors(nextErrors);
      } else {
        setResult({
          status: "error",
          note: `Unable to submit right now. Please email ${siteConfig.email} directly.`,
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-5 text-left"
    >
      <div>
        <h2 className="text-2xl font-extrabold text-brand-ink mb-2">
          Submit a Careers & Talent Inquiry
        </h2>
        <p className="text-brand-muted text-sm">
          Share your background across software engineering, AI, cloud, enterprise systems, or IT consulting.
        </p>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="careers-website">Leave empty</label>
        <input
          id="careers-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="careers-name" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="careers-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "careers-name-error" : undefined}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          />
          {errors.name && (
            <p id="careers-name-error" className="text-red-600 text-xs mt-1.5 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="careers-email" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            id="careers-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "careers-email-error" : undefined}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          />
          {errors.email && (
            <p id="careers-email-error" className="text-red-600 text-xs mt-1.5 font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="careers-discipline" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Primary Discipline <span className="text-red-600">*</span>
          </label>
          <select
            id="careers-discipline"
            name="discipline"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          >
            <option value="software-engineering">Software & Full-Stack Engineering</option>
            <option value="ai-ml">AI Engineering & Automation</option>
            <option value="cloud-devops">Cloud Architecture & DevOps</option>
            <option value="crm-erp">CRM / ERP & Enterprise Systems</option>
            <option value="ui-ux">Product Design & UI/UX</option>
            <option value="it-consulting">IT Consulting & Delivery Management</option>
            <option value="talent-acquisition">Technical Recruitment & Operations</option>
          </select>
        </div>

        <div>
          <label htmlFor="careers-experience" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Experience Level <span className="text-red-600">*</span>
          </label>
          <select
            id="careers-experience"
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          >
            <option value="0-2-years">0–2 Years</option>
            <option value="3-5-years">3–5 Years</option>
            <option value="6-10-years">6–10 Years</option>
            <option value="10-plus-years">10+ Years</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="careers-portfolio" className="block text-sm font-semibold text-brand-ink mb-1.5">
          Portfolio, GitHub, or LinkedIn URL (Optional)
        </label>
        <input
          id="careers-portfolio"
          name="portfolioUrl"
          type="url"
          value={portfolioUrl}
          onChange={(e) => setPortfolioUrl(e.target.value)}
          placeholder="https://..."
          className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
        />
      </div>

      <div>
        <label htmlFor="careers-message" className="block text-sm font-semibold text-brand-ink mb-1.5">
          Summary of Experience & Interests <span className="text-red-600">*</span>
        </label>
        <textarea
          id="careers-message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "careers-message-error" : undefined}
          placeholder="Tell us about your technical focus, key projects, and preferred engagement type..."
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
        />
        {errors.message && (
          <p id="careers-message-error" className="text-red-600 text-xs mt-1.5 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="careers-consent"
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "careers-consent-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-dark"
          />
          <label htmlFor="careers-consent" className="text-sm text-brand-muted leading-relaxed">
            I consent to VG Consultancy reviewing my careers inquiry in line with the{" "}
            <Link href="/privacy-policy/" className="text-brand-bronze-text font-semibold underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        {errors.consent && (
          <p id="careers-consent-error" className="text-red-600 text-xs mt-1.5 font-medium">
            {errors.consent}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Submitting Inquiry..." : "Submit Careers Inquiry"}
      </Button>

      {result.status === "success" && (
        <div role="status" className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 text-sm">
          <p className="font-bold mb-1">Inquiry Received ({result.referenceId})</p>
          <p>{result.note}</p>
        </div>
      )}

      {result.status === "error" && (
        <div role="alert" className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-900 text-sm">
          {result.note}
        </div>
      )}
    </form>
  );
}
