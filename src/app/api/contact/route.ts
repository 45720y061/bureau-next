import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  services?: string[];
  message: string;
  website?: string; // honeypot
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Payload | null;
  if (!body) {
    return NextResponse.json({ ok: false, error: "Body inválido." }, { status: 400 });
  }

  // honeypot => pretend success
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2 || !isEmail(email) || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Datos incompletos (nombre/email/mensaje)." },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // If SMTP isn’t configured, log the payload and still return OK
  // (so the UI works, but delivery is not real until env is set)
  if (!to || !host || !user || !pass || !from) {
    console.log("[CONTACT-FORM] Missing SMTP env. Payload:", body);
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `Nuevo contacto: ${name}${body.company ? ` (${body.company})` : ""}`;
  const text = [
    `Nombre: ${name}`,
    `Empresa: ${body.company || "-"}`,
    `Email: ${email}`,
    `Teléfono: ${body.phone || "-"}`,
    `Servicios: ${(body.services || []).join(", ") || "-"}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject,
    text,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}