import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { addTagToContact, updateContact } from "@/lib/ghl/client";
import { GHL_FIELD_IDS, GHL_TAG_NAMES } from "@/lib/ghl/fields";
import { downloadSignedDocument } from "@/lib/yousign/client";

// Reçoit l'événement Yousign signature_request.done (Workflow 3, voir
// docs/ghl-inscriptions.md). PAS TESTÉ contre un vrai payload Yousign — le
// compte n'existe pas encore. À vérifier/ajuster dès le premier vrai envoi :
// nom exact du header de signature, structure de `data`.
function isValidSignature(rawBody: string, headerSignature: string | null): boolean {
  const secret = process.env.YOUSIGN_WEBHOOK_SECRET;
  if (!secret) return true; // pas encore configuré, on ne bloque pas
  if (!headerSignature) return false;
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(headerSignature);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signatureHeader = req.headers.get("yousign-signature-256");

  if (!isValidSignature(rawBody, signatureHeader)) {
    return NextResponse.json({ error: "signature invalide" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);
  if (event.event_name !== "signature_request.done") {
    return NextResponse.json({ ignored: event.event_name ?? "unknown" });
  }

  const signatureRequest = event.data?.signature_request;
  const contactId: string | undefined = signatureRequest?.external_id;
  const documentId: string | undefined = signatureRequest?.documents?.[0]?.id;

  if (!contactId || !documentId) {
    return NextResponse.json(
      { error: "external_id ou document manquant dans le payload Yousign" },
      { status: 422 }
    );
  }

  const signedPdf = await downloadSignedDocument(signatureRequest.id, documentId);
  const blob = await put(`conventions-signees/${contactId}.pdf`, signedPdf, {
    access: "public",
    contentType: "application/pdf",
  });

  await updateContact(contactId, {
    customFields: [{ id: GHL_FIELD_IDS.conventionSigneePdfUrl, value: blob.url }],
  });
  await addTagToContact(contactId, GHL_TAG_NAMES.conventionSignee);

  return NextResponse.json({ success: true, conventionSigneePdfUrl: blob.url });
}
