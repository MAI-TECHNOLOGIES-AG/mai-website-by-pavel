import { NextResponse } from "next/server";
import postmark from "postmark";
import { z } from "zod";

const maxMessageLength = 5000;

const contactPayloadSchema = z.object({
  name: z.string().trim().min(1, "Please complete all fields."),
  email: z
    .string()
    .trim()
    .min(1, "Please complete all fields.")
    .email("Please provide a valid email address."),
  company: z.string().trim().min(1, "Please complete all fields."),
  companyType: z.string().trim().min(1, "Please complete all fields."),
  message: z
    .string()
    .trim()
    .min(1, "Please complete all fields.")
    .max(maxMessageLength, "Message is too long."),
});

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validated = contactPayloadSchema.safeParse(body);
  if (!validated.success) {
    const firstError = validated.error.issues[0]?.message ?? "Invalid request body.";
    return NextResponse.json({ error: firstError }, { status: 400 });
  }

  const serverToken = process.env.POSTMARK_SERVER_TOKEN;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;

  if (!serverToken || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Contact form is not configured on the server." },
      { status: 500 },
    );
  }

  try {
    const client = new postmark.ServerClient(serverToken);
    const { name, email, company, companyType, message } = validated.data;

    await client.sendEmail({
      From: fromEmail,
      To: toEmail,
      ReplyTo: email,
      Subject: `New contact form submission from ${name}`,
      TextBody: [
        "New contact form submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Company Type: ${companyType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      MessageStream: "outbound",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Postmark send failed:", error);
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again." },
      { status: 502 },
    );
  }
}
