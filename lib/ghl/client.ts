// Client minimal pour l'API GHL v2 (contacts). Nécessite les variables
// d'environnement GHL_API_TOKEN et GHL_LOCATION_ID (Private Integration Token,
// voir docs/ghl-inscriptions.md).

const GHL_BASE_URL = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

function ghlHeaders() {
  const token = process.env.GHL_API_TOKEN;
  if (!token) throw new Error("GHL_API_TOKEN manquant");
  return {
    Authorization: `Bearer ${token}`,
    Version: GHL_API_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export type GhlCustomField = { id: string; value: string };

export type GhlContact = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  address1: string | null;
  tags: string[];
  customFields: GhlCustomField[];
};

export async function getContact(contactId: string): Promise<GhlContact> {
  const res = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
    headers: ghlHeaders(),
  });
  if (!res.ok) {
    throw new Error(`GHL getContact ${contactId} a échoué (${res.status}): ${await res.text()}`);
  }
  const body = await res.json();
  return body.contact as GhlContact;
}

export async function updateContact(
  contactId: string,
  update: { tags?: string[]; customFields?: GhlCustomField[] }
): Promise<void> {
  const res = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
    method: "PUT",
    headers: ghlHeaders(),
    body: JSON.stringify(update),
  });
  if (!res.ok) {
    throw new Error(`GHL updateContact ${contactId} a échoué (${res.status}): ${await res.text()}`);
  }
}

// Un contact GHL avec un tag existant garde ce tag si on ne le renvoie pas
// dans `tags` lors d'un PUT — mais GHL remplace la liste complète des tags
// envoyée, donc on ajoute au tableau existant plutôt que d'écraser.
export async function addTagToContact(contactId: string, tag: string): Promise<void> {
  const contact = await getContact(contactId);
  const tags = new Set(contact.tags ?? []);
  tags.add(tag);
  await updateContact(contactId, { tags: [...tags] });
}

export function findCustomFieldValue(contact: GhlContact, fieldId: string): string | undefined {
  return contact.customFields?.find((f) => f.id === fieldId)?.value;
}

// ─── Ajouts pour la page interne « convention » ──────────────────────────────

export type GhlContactResume = {
  id: string;
  nom: string;
  email: string | null;
  phone: string | null;
};

/**
 * Recherche des contacts par nom, email ou téléphone.
 * Utilisé par la page interne pour retrouver un candidat inscrit.
 */
export async function searchContacts(query: string, limit = 20): Promise<GhlContactResume[]> {
  const locationId = process.env.GHL_LOCATION_ID;
  if (!locationId) throw new Error("GHL_LOCATION_ID manquant");

  const url = new URL(`${GHL_BASE_URL}/contacts/`);
  url.searchParams.set("locationId", locationId);
  url.searchParams.set("query", query);
  url.searchParams.set("limit", String(limit));

  const res = await fetch(url, { headers: ghlHeaders(), cache: "no-store" });
  if (!res.ok) {
    throw new Error(`GHL searchContacts a échoué (${res.status}): ${await res.text()}`);
  }
  const body = await res.json();
  const contacts = (body.contacts ?? []) as Array<Record<string, unknown>>;
  return contacts.map((c) => ({
    id: String(c.id),
    nom: [c.firstName, c.lastName].filter(Boolean).join(" ").trim() || String(c.email ?? "(sans nom)"),
    email: (c.email as string) ?? null,
    phone: (c.phone as string) ?? null,
  }));
}

/**
 * Écrit des champs personnalisés en les désignant par leur CLÉ
 * (`{{contact.montant_formation}}` → `montant_formation`) plutôt que par leur id.
 * Plus lisible dans le code, et ça évite d'avoir à relever un id dans l'interface
 * GHL à chaque nouveau champ.
 */
export async function updateContactCustomFieldsByKey(
  contactId: string,
  valeurs: Record<string, string>
): Promise<void> {
  const customFields = Object.entries(valeurs).map(([key, value]) => ({ key, field_value: value }));
  const res = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
    method: "PUT",
    headers: ghlHeaders(),
    body: JSON.stringify({ customFields }),
  });
  if (!res.ok) {
    throw new Error(`GHL updateContactCustomFieldsByKey ${contactId} a échoué (${res.status}): ${await res.text()}`);
  }
}
