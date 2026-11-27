"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { consultationSchema } from "@/lib/submissions";
import { siteConfig } from "@/content/pages";

type FieldErrors = Partial<
  Record<"name" | "email" | "company" | "topic" | "message" | "consent", string>
>;

export default function ConsultationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [topic, setTopic] = useState("ai-automation");
  const [timeline, setTimeline] = useState("1-3-months");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // Honeypot
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
      const validated = consultationSchema.parse({
        name,
        email,
        company,
        role,
        topic,
        timeline,
        message,
        consent,
        website,
      });

      setSubmitting(true);
      const res = await fetch("/api/consultation/", {
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
      } else {
        setResult({
          status: "error",
          note: data.message || `Please review your entries or email ${siteConfig.email}.`,
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

  if (result.status === "success") {
    return (
      <div
        role="status"
        className="max-w-2xl mx-auto rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 text-center shadow-sm"
      >
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex mx-auto items-center justify-center mb-5">
          <CheckCircle2 size={28} aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-extrabold text-brand-ink mb-2">
          Consultation Request Received
        </h2>
        <p className="text-xs font-bold text-brand-teal mb-4">Reference: {result.referenceId}</p>
        <p className="text-brand-muted text-base leading-relaxed mb-8">{result.note}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full bg-brand-dark text-white font-bold text-sm hover:bg-brand-navy transition-colors"
        >
          Return to Homepage &rarr;
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6"
    >
      <div>
        <h2 className="text-2xl font-extrabold text-brand-ink mb-2">
          Request Your Free Initial Consultation
        </h2>
        <p className="text-brand-muted text-sm">
          Initial consultation is complimentary. Customized solution demonstrations are subject to suitability and availability.
        </p>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="consult-website">Leave empty</label>
        <input
          id="consult-website"
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
          <label htmlFor="consult-name" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="consult-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "consult-name-error" : undefined}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          />
          {errors.name && (
            <p id="consult-name-error" className="text-red-600 text-xs mt-1.5 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="consult-email" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Business Email <span className="text-red-600">*</span>
          </label>
          <input
            id="consult-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "consult-email-error" : undefined}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          />
          {errors.email && (
            <p id="consult-email-error" className="text-red-600 text-xs mt-1.5 font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="consult-company" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Company Name <span className="text-red-600">*</span>
          </label>
          <input
            id="consult-company"
            name="company"
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "consult-company-error" : undefined}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          />
          {errors.company && (
            <p id="consult-company-error" className="text-red-600 text-xs mt-1.5 font-medium">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="consult-role" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Your Role / Title
          </label>
          <input
            id="consult-role"
            name="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g., CTO, Head of Operations"
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="consult-topic" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Primary Discussion Topic <span className="text-red-600">*</span>
          </label>
          <select
            id="consult-topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          >
            <option value="ai-automation">AI & Intelligent Automation</option>
            <option value="ai-agents">AI Agents & AI Assistants</option>
            <option value="software-development">Software & Product Engineering</option>
            <option value="quality-assurance">Quality Assurance & Test Automation</option>
            <option value="web-ecommerce">Enterprise Websites & E-Commerce</option>
            <option value="saas-development">Custom SaaS Platform</option>
            <option value="crm-erp">CRM, ERP & Integrations</option>
            <option value="cloud-legacy">Cloud & Legacy Modernization</option>
            <option value="it-consulting">IT Consulting</option>
            <option value="talent-outsourcing">Recruitment, Staffing & Dedicated Teams</option>
          </select>
        </div>

        <div>
          <label htmlFor="consult-timeline" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Target Timeline
          </label>
          <select
            id="consult-timeline"
            name="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          >
            <option value="immediate">Immediate (Within 30 days)</option>
            <option value="1-3-months">1–3 Months</option>
            <option value="3-6-months">3–6 Months</option>
            <option value="exploratory">Exploratory / Planning</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="consult-message" className="block text-sm font-semibold text-brand-ink mb-1.5">
          Project Goals & Context <span className="text-red-600">*</span>
        </label>
        <textarea
          id="consult-message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "consult-message-error" : undefined}
          placeholder="Briefly describe your business objectives, current systems, or demo interest..."
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
        />
        {errors.message && (
          <p id="consult-message-error" className="text-red-600 text-xs mt-1.5 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consult-consent"
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consult-consent-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-dark"
          />
          <label htmlFor="consult-consent" className="text-sm text-brand-muted leading-relaxed">
            I agree to VG Consultancy processing my inquiry details in accordance with the{" "}
            <Link href="/privacy-policy/" className="text-brand-bronze-text font-semibold underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        {errors.consent && (
          <p id="consult-consent-error" className="text-red-600 text-xs mt-1.5 font-medium">
            {errors.consent}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Submitting Request..." : "Request Free Consultation"}
      </Button>

      {result.status === "error" && (
        <div role="alert" className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-900 text-sm">
          {result.note}
        </div>
      )}
    </form>
  );
}
