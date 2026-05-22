import { NextResponse } from "next/server";

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

async function sendWebhook(payload: LeadPayload) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.info("Wookcom lead received", payload);
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Lead webhook failed with ${response.status}`);
  }
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
    submittedAt: new Date().toISOString()
  };

  if (!payload.name || !payload.contact || !payload.businessType || !payload.desiredOperator) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  try {
    await sendWebhook(payload);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "No se pudo registrar la solicitud." },
      { status: 502 }
    );
  }

  return NextResponse.redirect(new URL("/gracias", request.url), { status: 303 });
}
