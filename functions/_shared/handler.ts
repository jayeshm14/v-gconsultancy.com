import { z } from "zod";
import { contactSchema, consultationSchema, careersSchema } from "../../src/lib/submissions";

export interface PagesEnv {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  FORM_WEBHOOK_URL?: string;
  CONTACT_RECIPIENT_EMAIL?: string;
}

export async function handlePagesFormRequest(
  kind: "contact" | "consultation" | "careers",
  request: Request,
  env: PagesEnv
): Promise<Response> {
  const headers = { "Content-Type": "application/json" };

  try {
    const body = await request.json();
    const schema =
      kind === "contact"
        ? contactSchema
        : kind === "consultation"
          ? consultationSchema
          : careersSchema;

    const validated = schema.parse(body) as Record<string, unknown> & { website?: string };

    if (validated.website && validated.website.trim().length > 0) {
      return new Response(
        JSON.stringify({
          success: true,
          referenceId: "VG-SPAM-FILTERED",
          note: "Submission processed.",
        }),
        { status: 200, headers }
      );
    }

    const referenceId = `VG-${kind.slice(0, 3).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
    const recipient = env.CONTACT_RECIPIENT_EMAIL || "info@v-gconsultancy.com";

    if (env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env.RESEND_FROM_EMAIL || "VG Consultancy <noreply@v-gconsultancy.com>",
          to: [recipient],
          subject: `[VG Consultancy] New ${kind} inquiry (${referenceId})`,
          text: JSON.stringify(validated, null, 2),
        }),
      });
      if (!res.ok) {
        throw new Error(`Resend API error (${res.status})`);
      }
      return new Response(
        JSON.stringify({
          success: true,
          deliveryMode: "resend",
          referenceId,
          note: "Your inquiry has been delivered to the VG Consultancy team.",
        }),
        { status: 200, headers }
      );
    }

    if (env.FORM_WEBHOOK_URL) {
      const res = await fetch(env.FORM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          referenceId,
          receivedAt: new Date().toISOString(),
          payload: validated,
        }),
      });
      if (!res.ok) {
        throw new Error(`Webhook error (${res.status})`);
      }
      return new Response(
        JSON.stringify({
          success: true,
          deliveryMode: "webhook",
          referenceId,
          note: "Your inquiry has been forwarded to our intake system.",
        }),
        { status: 200, headers }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        deliveryMode: "pending_configuration",
        referenceId,
        note: `Your submission (${referenceId}) was validated by our server endpoint. External email forwarding (RESEND_API_KEY / FORM_WEBHOOK_URL) is pending environment configuration; for immediate assistance, email ${recipient}.`,
      }),
      { status: 200, headers }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          errors: error.errors,
          message: "Validation failed.",
        }),
        { status: 400, headers }
      );
    }
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error processing submission.",
      }),
      { status: 500, headers }
    );
  }
}
