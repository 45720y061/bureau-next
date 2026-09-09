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

function diagnosticValue(value: unknown) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return undefined;

  const secrets = [process.env.SMTP_PASS, process.env.SMTP_USER].filter(
    (item): item is string => Boolean(item)
  );

  if (secrets.some((secret) => value.includes(secret))) {
    return "[redacted]";
  }

  return value.slice(0, 1000);
}

function smtpErrorDiagnostics(error: unknown) {
  if (!error || typeof error !== "object") {
    return { message: "Unknown SMTP error" };
  }

  const smtpError = error as {
    name?: unknown;
    code?: unknown;
    responseCode?: unknown;
    command?: unknown;
    response?: unknown;
    message?: unknown;
  };

  return {
    name: diagnosticValue(smtpError.name),
    code: diagnosticValue(smtpError.code),
    responseCode: diagnosticValue(smtpError.responseCode),
    command: diagnosticValue(smtpError.command),
    response: diagnosticValue(smtpError.response),
    message: diagnosticValue(smtpError.message),
  };
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

  if (!name || !isEmail(email) || !message) {
    return NextResponse.json(
      { ok: false, error: "Datos incompletos (nombre/correo/mensaje)." },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!to || !host || !user || !pass || !from) {
    console.error("[CONTACT-FORM] Missing SMTP env. Delivery disabled.");
    return NextResponse.json(
      { ok: false, error: "El envío de mensajes no está configurado. Por favor contáctenos por correo o teléfono." },
      { status: 503 }
    );
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

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });
  } catch (error) {
    console.error("[CONTACT-FORM] SMTP delivery failed.", smtpErrorDiagnostics(error));
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
