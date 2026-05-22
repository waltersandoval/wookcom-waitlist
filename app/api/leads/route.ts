import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LeadPayload = {
  name: string;
  contact: string;
  businessType: string;
  desiredOperator: string;
  currentTools?: string;
  mainConcern?: string;
  source?: string;
  submittedAt: string;
};

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function formatLead(payload: LeadPayload): { subject: string; html: string } {
  const subject = `Nuevo lead Wookcom - ${payload.name} (${payload.businessType})`;

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body { font-family: system-ui, sans-serif; background: #f3f5f8; padding: 24px; }
  .card { background: #fff; border-radius: 8px; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #d9e0ea; }
  h1 { color: #0878f7; font-size: 22px; margin: 0 0 6px; }
  .time { color: #5d6673; font-size: 13px; margin: 0 0 20px; }
  .field { margin-bottom: 14px; }
  .label { color: #5d6673; font-size: 12px; font-weight: 800; text-transform: uppercase; }
  .value { font-size: 16px; margin-top: 2px; }
  .source { color: #aaa; font-size: 12px; margin-top: 24px; border-top: 1px solid #eee; padding-top: 12px; }
</style></head>
<body>
  <div class="card">
    <h1>🚀 Nuevo lead Wookcom</h1>
    <p class="time">${payload.submittedAt}</p>

    <div class="field">
      <div class="label">Nombre</div>
      <div class="value">${payload.name}</div>
    </div>
    <div class="field">
      <div class="label">Contacto</div>
      <div class="value">${payload.contact}</div>
    </div>
    <div class="field">
      <div class="label">Tipo de negocio</div>
      <div class="value">${payload.businessType}</div>
    </div>
    <div class="field">
      <div class="label">Qué quieres que haga el operador IA</div>
      <div class="value">${payload.desiredOperator}</div>
    </div>
    <div class="field">
      <div class="label">Herramientas que usa hoy</div>
      <div class="value">${payload.currentTools || "No indicado"}</div>
    </div>
    <div class="field">
      <div class="label">Principal miedo o duda</div>
      <div class="value">${payload.mainConcern || "No indicado"}</div>
    </div>

    <div class="source">Fuente: ${payload.source}</div>
  </div>
</body>
</html>`;

  return { subject, html };
}

async function sendEmail(payload: LeadPayload) {
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.LEAD_EMAIL_TO || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.warn("Wookcom lead (SMTP no configurado)", payload);
    return { ok: false, reason: "SMTP not configured" };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const { subject, html } = formatLead(payload);

  await transporter.sendMail({
    from: `"Wookcom Leads" <${smtpUser}>`,
    to: toEmail,
    subject,
    html,
  });

  return { ok: true };
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload: LeadPayload = {
    name: clean(formData.get("name")),
    contact: clean(formData.get("contact")),
    businessType: clean(formData.get("businessType")),
    desiredOperator: clean(formData.get("desiredOperator")),
    currentTools: clean(formData.get("currentTools")),
    mainConcern: clean(formData.get("mainConcern")),
    source: clean(formData.get("source")) || "wookcom-waitlist-v1",
    submittedAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.contact || !payload.businessType || !payload.desiredOperator) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  try {
    const result = await sendEmail(payload);
    if (!result.ok) {
      console.error("Lead guardado pero email no enviado — SMTP sin configurar");
    }
  } catch (error) {
    console.error("Error al enviar lead por email:", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo registrar la solicitud." },
      { status: 502 }
    );
  }

  return NextResponse.redirect(new URL("/gracias", request.url), { status: 303 });
}
