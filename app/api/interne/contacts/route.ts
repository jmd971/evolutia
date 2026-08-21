import { NextResponse } from "next/server";
import { estAuthentifie } from "../../../../lib/interne/auth";
import { searchContacts, upsertContact } from "../../../../lib/ghl/client";

export async function GET(req: Request) {
  if (!(await estAuthentifie())) {
    return NextResponse.json({ erreur: "Non authentifié." }, { status: 401 });
  }

  const query = new URL(req.url).searchParams.get("q")?.trim() ?? "";
  if (query.length < 2) {
    return NextResponse.json({ contacts: [] });
  }

  try {
    return NextResponse.json({ contacts: await searchContacts(query) });
  } catch (e) {
    console.error("[interne/contacts] recherche", e);
    return NextResponse.json(
      { erreur: e instanceof Error ? e.message : "Recherche impossible." },
      { status: 502 }
    );
  }
}

/** Crée le candidat (ou récupère sa fiche s'il existe déjà). */
export async function POST(req: Request) {
  if (!(await estAuthentifie())) {
    return NextResponse.json({ erreur: "Non authentifié." }, { status: 401 });
  }

  let d: { prenom?: string; nom?: string; email?: string; telephone?: string };
  try {
    d = await req.json();
  } catch {
    return NextResponse.json({ erreur: "Requête illisible." }, { status: 400 });
  }

  const prenom = (d.prenom ?? "").trim();
  const nom = (d.nom ?? "").trim();
  const email = (d.email ?? "").trim();
  const telephone = (d.telephone ?? "").trim();

  if (!prenom || !nom) {
    return NextResponse.json({ erreur: "Le prénom et le nom sont obligatoires." }, { status: 400 });
  }
  if (!email && !telephone) {
    return NextResponse.json(
      { erreur: "Renseignez un e-mail ou un téléphone : c'est ce qui permet d'éviter un doublon." },
      { status: 400 }
    );
  }

  try {
    const { contact, nouveau } = await upsertContact({
      firstName: prenom,
      lastName: nom,
      email: email || undefined,
      phone: telephone || undefined,
    });
    return NextResponse.json({ contact, nouveau });
  } catch (e) {
    console.error("[interne/contacts] création", e);
    return NextResponse.json(
      { erreur: e instanceof Error ? e.message : "Création impossible." },
      { status: 502 }
    );
  }
}
