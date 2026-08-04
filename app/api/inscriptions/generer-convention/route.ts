import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { getContact, updateContact, findCustomFieldValue } from "@/lib/ghl/client";
import { GHL_FIELD_IDS } from "@/lib/ghl/fields";
import { generateConventionPdf } from "@/lib/pdf/convention";
import { createSignatureRequest } from "@/lib/yousign/client";
import { FORMATIONS } from "@/app/formations/data";

// Appelée par le Workflow GHL "Formulaire complet → génération convention"
// (webhook sortant, voir docs/ghl-inscriptions.md, Workflow 2).
function extractContactId(body: any): string | undefined {
  return body?.contact_id ?? body?.contactId ?? body?.contact?.id ?? body?.id;
}

function toNumber(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const n = Number(value.replace(",", "."));
  return Number.isFinite(n) ? n : undefined;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const contactId = extractContactId(body);
  if (!contactId) {
    return NextResponse.json({ error: "contactId manquant dans le payload" }, { status: 400 });
  }

  const contact = await getContact(contactId);

  const formationSlug = findCustomFieldValue(contact, GHL_FIELD_IDS.formationChoisie);
  if (!formationSlug || !FORMATIONS[formationSlug]) {
    return NextResponse.json(
      { error: `formation_choisie ("${formationSlug}") ne correspond à aucun slug de app/formations/data.ts` },
      { status: 422 }
    );
  }

  const pdf = await generateConventionPdf({
    formationSlug,
    stagiaire: {
      nom: `${contact.firstName ?? ""} ${contact.lastName ?? ""}`.trim(),
      telephone: contact.phone ?? undefined,
      adresse: contact.address1 ?? undefined,
      email: contact.email ?? undefined,
    },
    voieConcours: findCustomFieldValue(contact, GHL_FIELD_IDS.voieConcours),
    modeFinancement: findCustomFieldValue(contact, GHL_FIELD_IDS.modeFinancement),
    modePaiement: findCustomFieldValue(contact, GHL_FIELD_IDS.modePaiement),
    montantFormation: toNumber(findCustomFieldValue(contact, GHL_FIELD_IDS.montantFormation)),
    acompteVerse: toNumber(findCustomFieldValue(contact, GHL_FIELD_IDS.acompteVerse)),
    nombreEcheances: toNumber(findCustomFieldValue(contact, GHL_FIELD_IDS.nombreEcheances)),
  });

  const fileName = `convention-${formationSlug}-${contactId}.pdf`;
  const blob = await put(`conventions/${fileName}`, pdf, {
    access: "public",
    contentType: "application/pdf",
  });

  await updateContact(contactId, {
    customFields: [{ id: GHL_FIELD_IDS.conventionPdfUrl, value: blob.url }],
  });

  // Envoi à Yousign uniquement si le compte est configuré (voir Task Yousign
  // dans docs/ghl-inscriptions.md — pas encore le cas au moment de l'écriture
  // de cette route).
  let signatureRequestId: string | undefined;
  if (process.env.YOUSIGN_API_KEY) {
    signatureRequestId = await createSignatureRequest({
      externalId: contactId,
      name: `Convention ${FORMATIONS[formationSlug].titre} — ${contact.firstName ?? ""} ${contact.lastName ?? ""}`.trim(),
      pdf,
      fileName,
      signer: {
        firstName: contact.firstName ?? "",
        lastName: contact.lastName ?? "",
        email: contact.email ?? "",
        phoneNumber: contact.phone ?? undefined,
      },
    });
    await updateContact(contactId, {
      customFields: [{ id: GHL_FIELD_IDS.yousignSignatureRequestId, value: signatureRequestId }],
    });
  }

  return NextResponse.json({ success: true, conventionPdfUrl: blob.url, signatureRequestId });
}
