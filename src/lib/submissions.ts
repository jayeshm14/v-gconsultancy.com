import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid business email"),
  company: z.string().trim().min(1, "Please enter your company or organization"),
  subject: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please provide at least 10 characters describing your inquiry"),
  website: z.string().optional(), // Honeypot field
});

export const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid business email"),
  company: z.string().trim().min(1, "Please enter your company name"),
  role: z.string().trim().optional(),
  topic: z.string().trim().min(1, "Please select a discussion area"),
  timeline: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please share a brief overview of your goals (min 10 characters)"),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please confirm consent to process your enquiry",
  }),
  website: z.string().optional(), // Honeypot field
});

export const careersSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  discipline: z.string().trim().min(1, "Please select your primary discipline"),
  experience: z.string().trim().min(1, "Please select your experience range"),
  portfolioUrl: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please summarize your skills and interests (min 10 characters)"),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please confirm consent to review your profile inquiry",
  }),
  website: z.string().optional(), // Honeypot field
});

export type SubmissionDeliveryResult = {
  accepted: boolean;
  deliveryMode: "resend" | "webhook" | "pending_configuration";
  referenceId: string;
  note: string;
};

export async function dispatchSubmission(
  kind: "contact" | "consultation" | "careers",
  payload: Record<string, unknown>
): Promise<SubmissionDeliveryResult> {
  const referenceId = `VG-${kind.slice(0, 3).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "info@v-gconsultancy.com";

  // 1. Resend API integration (when RESEND_API_KEY is configured)
  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "VG Consultancy <noreply@v-gconsultancy.com>",
        to: [recipient],
        subject: `[VG Consultancy] New ${kind} inquiry (${referenceId})`,
        text: JSON.stringify(payload, null, 2),
      }),
    });

    if (!res.ok) {
      throw new Error(`Resend API error (${res.status})`);
    }

    return {
      accepted: true,
      deliveryMode: "resend",
      referenceId,
      note: "Your inquiry has been delivered to the VG Consultancy team.",
    };
  }

  // 2. Webhook integration (when FORM_WEBHOOK_URL is configured)
  if (process.env.FORM_WEBHOOK_URL) {
    const res = await fetch(process.env.FORM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind,
        referenceId,
        receivedAt: new Date().toISOString(),
        payload,
      }),
    });

    if (!res.ok) {
      throw new Error(`Webhook error (${res.status})`);
    }

    return {
      accepted: true,
      deliveryMode: "webhook",
      referenceId,
      note: "Your inquiry has been forwarded to our intake system.",
    };
  }

  // 3. No external mail/webhook provider configured in environment yet
  console.info(`[VG Consultancy][${kind}][pending_configuration]`, {
    referenceId,
    receivedAt: new Date().toISOString(),
    name: payload.name,
    email: payload.email,
  });

  return {
    accepted: true,
    deliveryMode: "pending_configuration",
    referenceId,
    note: `Your submission (${referenceId}) was validated by our server endpoint. External email forwarding (RESEND_API_KEY / FORM_WEBHOOK_URL) is pending environment configuration; for immediate assistance, email ${recipient}.`,
  };
}
