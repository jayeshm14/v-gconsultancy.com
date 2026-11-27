import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema, dispatchSubmission } from "@/lib/submissions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = contactSchema.parse(body);

    // Silent drop if honeypot triggered
    if (validated.website && validated.website.trim().length > 0) {
      return NextResponse.json(
        {
          success: true,
          referenceId: "VG-SPAM-FILTERED",
          note: "Submission processed.",
        },
        { status: 200 }
      );
    }

    const result = await dispatchSubmission("contact", {
      name: validated.name,
      email: validated.email,
      company: validated.company,
      subject: validated.subject || "General Inquiry",
      message: validated.message,
    });

    return NextResponse.json(
      {
        success: true,
        deliveryMode: result.deliveryMode,
        referenceId: result.referenceId,
        note: result.note,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors, message: "Validation failed." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Server error processing contact inquiry." },
      { status: 500 }
    );
  }
}
