import { NextResponse } from "next/server";
import { estAuthentifie } from "../../../../lib/interne/auth";
import { updateContactCustomFieldsByKey } from "../../../../lib/ghl/client";
import {
  calculerEcheancier,
  rendreEcheancierTexte,
  eurosVersCentimes,
} from "../../../../lib/echeancier";
import { FORMATIONS } from "../../../formations/data";

type Corps = {
  contactId: string;
  formationSlug: string;
  voieConcours: string;
  specialite: string;
  montant: string;
  acompte: string;
  nombreEcheances: number;
  premiereEcheance: string; // AAAA-MM-JJ
  modePaiement: string;
};

export async function POST(req: Request) {
  if (!(await estAuthentifie())) {
    return NextResponse.json({ erreur: "Non authentifié." }, { status: 401 });
  }

  let c: Corps;
  try {
    c = await req.json();
  } catch {
    return NextResponse.json({ erreur: "Requête illisible." }, { status: 400 });
  }

  const formation = FORMATIONS[c.formationSlug];
  if (!formation) {
    return NextResponse.json({ erreur: `Formation inconnue : ${c.formationSlug}` }, { status: 400 });
  }
  if (!c.contactId) {
    return NextResponse.json({ erreur: "Aucun candidat sélectionné." }, { status: 400 });
  }

  let texteEcheancier: string;
  let montantCentimes: number;
  try {
    montantCentimes = eurosVersCentimes(c.montant);
    const acompteCentimes = eurosVersCentimes(c.acompte || "0");
    const [a, m, j] = c.premiereEcheance.split("-").map(Number);
    if (!a || !m || !j) throw new Error("Date de première échéance invalide.");
    const lignes = calculerEcheancier({
      montantTotalCentimes: montantCentimes,
      acompteCentimes,
      nombreEcheances: c.nombreEcheances,
      premiereEcheance: new Date(a, m - 1, j),
    });
    texteEcheancier = rendreEcheancierTexte(lignes, montantCentimes);
  } catch (e) {
    return NextResponse.json(
      { erreur: e instanceof Error ? e.message : "Échéancier incalculable." },
      { status: 400 }
    );
  }

  try {
    await updateContactCustomFieldsByKey(c.contactId, {
      formation_choisie: c.formationSlug,
      // La session vient de data.ts et non d'une saisie : la convention doit
      // mentionner le calendrier, et un candidat inscrit au bureau plutôt que
      // par le site n'a pas ce champ rempli.
      ...(formation.session?.demarrageISO
        ? { session_choisie: formation.session.demarrageISO }
        : {}),
      voie_concours_inscription: c.voieConcours,
      specialite_concours: c.specialite,
      montant_formation: String(montantCentimes / 100),
      acompte_verse: String(eurosVersCentimes(c.acompte || "0") / 100),
      nombre_echeances: String(c.nombreEcheances),
      mode_de_paiement: c.modePaiement,
      echeancier_convention: texteEcheancier,
    });
  } catch (e) {
    console.error("[interne/convention]", e);
    return NextResponse.json(
      { erreur: e instanceof Error ? e.message : "Écriture dans GHL impossible." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, echeancier: texteEcheancier });
}
