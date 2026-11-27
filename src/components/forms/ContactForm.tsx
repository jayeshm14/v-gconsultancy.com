"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { contactSchema } from "@/lib/submissions";
import { siteConfig } from "@/content/pages";

type FieldErrors = Partial<Record<"name" | "email" | "company" | "message", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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
      const validated = contactSchema.parse({
        name,
        email,
        company,
        subject,
        message,
        website,
      });

      setSubmitting(true);
      const res = await fetch("/api/contact/", {
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
        setCompany("");
        setSubject("");
        setMessage("");
      } else {
        setResult({
          status: "error",
          note: data.message || `Please verify your details or email ${siteConfig.email} directly.`,
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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
      <h2 className="text-2xl font-extrabold text-brand-ink mb-2">Send Us a Message</h2>
      <p className="text-brand-muted text-sm mb-6">
        Tell us about your project, technical challenge, or staffing requirements.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot anti-spam field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input
            id="contact-website"
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
            <label htmlFor="contact-name" className="block text-sm font-semibold text-brand-ink mb-1.5">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              placeholder="Jane Smith"
              className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
            />
            {errors.name && (
              <p id="contact-name-error" className="text-red-600 text-xs mt-1.5 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-semibold text-brand-ink mb-1.5">
              Business Email <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              placeholder="jane@company.com"
              className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
            />
            {errors.email && (
              <p id="contact-email-error" className="text-red-600 text-xs mt-1.5 font-medium">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-company" className="block text-sm font-semibold text-brand-ink mb-1.5">
              Company / Organization <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "contact-company-error" : undefined}
              placeholder="Organization Name"
              className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
            />
            {errors.company && (
              <p id="contact-company-error" className="text-red-600 text-xs mt-1.5 font-medium">
                {errors.company}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-sm font-semibold text-brand-ink mb-1.5">
              Area of Interest
            </label>
            <select
              id="contact-subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
            >
              <option value="">General Inquiry</option>
              <option value="ai-automation">AI & Intelligent Automation</option>
              <option value="software-engineering">Software & SaaS Engineering</option>
              <option value="enterprise-systems">CRM, ERP & Integrations</option>
              <option value="cloud-modernization">Cloud & Legacy Modernization</option>
              <option value="staffing-outsourcing">Recruitment, Staffing & Outsourcing</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-semibold text-brand-ink mb-1.5">
            Project or Inquiry Details <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            placeholder="Share context on your goals, timeline, and current systems..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-brand-ink text-sm"
          />
          {errors.message && (
            <p id="contact-message-error" className="text-red-600 text-xs mt-1.5 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        <p className="text-xs text-brand-muted">
          By submitting this form you agree to our{" "}
          <Link href="/privacy-policy/" className="text-brand-bronze-text font-semibold underline">
            Privacy Policy
          </Link>
          .
        </p>

        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Submitting..." : "Send Message"}
        </Button>
      </form>

      {result.status === "success" && (
        <div role="status" className="mt-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 text-sm">
          <p className="font-bold mb-1">Inquiry Received ({result.referenceId})</p>
          <p>{result.note}</p>
        </div>
      )}

      {result.status === "error" && (
        <div role="alert" className="mt-6 p-4 rounded-xl border border-red-200 bg-red-50 text-red-900 text-sm">
          <p className="font-bold mb-1">Submission Notice</p>
          <p>{result.note}</p>
        </div>
      )}
    </div>
  );
}
