// Client Yousign (API v3) — squelette prêt à l'emploi, PAS encore testé :
// aucun compte Yousign n'existe à ce stade (voir docs/ghl-inscriptions.md).
// À vérifier/ajuster avec la vraie doc dès que la clé API est disponible :
// https://developers.yousign.com/reference/post-signature_requests-1

const YOUSIGN_BASE_URL = process.env.YOUSIGN_BASE_URL ?? "https://api.yousign.app/v3";

function yousignHeaders() {
  const apiKey = process.env.YOUSIGN_API_KEY;
  if (!apiKey) throw new Error("YOUSIGN_API_KEY manquant");
  return { Authorization: `Bearer ${apiKey}` };
}

export type CreateSignatureRequestInput = {
  /** ID du contact GHL — transmis en external_id pour retrouver le contact au webhook. */
  externalId: string;
  name: string;
  pdf: Buffer;
  fileName: string;
  signer: { firstName: string; lastName: string; email: string; phoneNumber?: string };
};

/**
 * Crée une demande de signature avec un document et un signataire, puis
 * l'active. Retourne l'id de la signature_request Yousign.
 */
export async function createSignatureRequest(input: CreateSignatureRequestInput): Promise<string> {
  const createRes = await fetch(`${YOUSIGN_BASE_URL}/signature_requests`, {
    method: "POST",
    headers: { ...yousignHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({
      name: input.name,
      external_id: input.externalId,
      delivery_mode: "email",
    }),
  });
  if (!createRes.ok) {
    throw new Error(`Yousign création signature_request a échoué (${createRes.status}): ${await createRes.text()}`);
  }
  const { id: signatureRequestId } = await createRes.json();

  const form = new FormData();
  form.append("file", new Blob([new Uint8Array(input.pdf)], { type: "application/pdf" }), input.fileName);
  form.append("nature", "signable_document");
  const docRes = await fetch(`${YOUSIGN_BASE_URL}/signature_requests/${signatureRequestId}/documents`, {
    method: "POST",
    headers: yousignHeaders(),
    body: form,
  });
  if (!docRes.ok) {
    throw new Error(`Yousign ajout document a échoué (${docRes.status}): ${await docRes.text()}`);
  }

  const signerRes = await fetch(`${YOUSIGN_BASE_URL}/signature_requests/${signatureRequestId}/signers`, {
    method: "POST",
    headers: { ...yousignHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({
      info: {
        first_name: input.signer.firstName,
        last_name: input.signer.lastName,
        email: input.signer.email,
        phone_number: input.signer.phoneNumber,
        locale: "fr",
      },
      signature_level: "electronic_signature",
      signature_authentication_mode: "no_otp",
    }),
  });
  if (!signerRes.ok) {
    throw new Error(`Yousign ajout signataire a échoué (${signerRes.status}): ${await signerRes.text()}`);
  }

  const activateRes = await fetch(`${YOUSIGN_BASE_URL}/signature_requests/${signatureRequestId}/activate`, {
    method: "POST",
    headers: yousignHeaders(),
  });
  if (!activateRes.ok) {
    throw new Error(`Yousign activation a échoué (${activateRes.status}): ${await activateRes.text()}`);
  }

  return signatureRequestId;
}

/** Télécharge le document signé (PDF final) d'une signature_request terminée. */
export async function downloadSignedDocument(signatureRequestId: string, documentId: string): Promise<Buffer> {
  const res = await fetch(
    `${YOUSIGN_BASE_URL}/signature_requests/${signatureRequestId}/documents/${documentId}/download`,
    { headers: yousignHeaders() }
  );
  if (!res.ok) {
    throw new Error(`Yousign téléchargement document signé a échoué (${res.status}): ${await res.text()}`);
  }
  return Buffer.from(await res.arrayBuffer());
}
