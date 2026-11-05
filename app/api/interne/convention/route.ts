import { NextResponse } from "next/server";
import { estAuthentifie } from "../../../../lib/interne/auth";
import { updateContactCustomFieldsByKey } from "../../../../lib/ghl/client";
import {
  calculerEcheancier,
  rendreEcheancierTexte,
  rendreConditionsTarifaires,
  eurosVersCentimes,
} from "../../../../lib/echeancier";
import { FORMATIONS } from "../../../formations/data";
import { conditionsConvention, REGLEMENTS_MAX_DEFAUT } from "../../../formations/conventions";
import { VOIE_CONCOURS_OPTIONS } from "../../../../lib/ghl/fields";

const EQUIPE_PAR_DEFAUT =
  "Cette formation est assurée par les formateurs du centre EVOLUTIA. Les supports pédagogiques sont fournis par EVOLUTIA.";

type Corps = {
  contactId: string;
  formationSlug: string;
  concours?: string;
  voieConcours: string;
  option?: string;
  specialite?: string;
  duree: string;
  joursCours: string;
  prix: string;
  remise?: string;
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
  if (!c.duree?.trim() || !c.joursCours?.trim()) {
    return NextResponse.json({ erreur: "Durée et jours de cours obligatoires." }, { status: 400 });
  }
  if (!c.contactId) {
    return NextResponse.json({ erreur: "Aucun candidat sélectionné." }, { status: 400 });
  }

  const conv = conditionsConvention(c.formationSlug);
  const condition = formation.conditions.find((x) => x.voie === c.voieConcours);
  if (!condition) {
    return NextResponse.json({ erreur: `Voie inconnue pour cette formation : ${c.voieConcours}` }, { status: 400 });
  }
  const concours = conv.concours?.find((x) => x.libelle === c.concours);
  if (conv.concours && !concours) {
    return NextResponse.json({ erreur: "Choisissez le concours visé." }, { status: 400 });
  }
  const avecOptions = !!conv.options?.length && (concours ? concours.options : true);
  if (avecOptions && !conv.options!.includes(c.option ?? "")) {
    return NextResponse.json({ erreur: "Choisissez l'option d'épreuve." }, { status: 400 });
  }
  if (conv.specialites?.length && !conv.specialites.includes(c.specialite ?? "")) {
    return NextResponse.json({ erreur: "Choisissez la spécialité." }, { status: 400 });
  }
  // Une seule ligne « Spécialité » dans la convention : option, spécialité, ou rien.
  const specialite = avecOptions
    ? `Option : ${c.option}`
    : conv.specialites?.length
      ? c.specialite!
      : "Sans objet";

  let texteEcheancier: string;
  let texteConditions: string;
  let montantCentimes: number;
  let acompteCentimes: number;
  try {
    const prixCentimes = eurosVersCentimes(c.prix);
    const remiseCentimes = eurosVersCentimes(c.remise || "0");
    texteConditions = rendreConditionsTarifaires(prixCentimes, remiseCentimes);
    montantCentimes = prixCentimes - remiseCentimes;
    acompteCentimes = eurosVersCentimes(c.acompte || "0");
    const reglementsMax = conv.reglementsMax ?? REGLEMENTS_MAX_DEFAUT;
    if (c.nombreEcheances + (acompteCentimes > 0 ? 1 : 0) > reglementsMax) {
      throw new Error(`Pas plus de ${reglementsMax} règlements, acompte compris, pour cette formation.`);
    }
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
      // Voie réelle (examen pro., sur titres…), en texte libre pour la convention.
      voie_acces_convention: c.voieConcours,
      // Liste déroulante GHL limitée à Externe / Interne / 3e voie : n'y écrire
      // que ces valeurs, sinon GHL rejette ou vide le champ.
      ...((VOIE_CONCOURS_OPTIONS as readonly string[]).includes(c.voieConcours)
        ? { voie_concours_inscription: c.voieConcours }
        : {}),
      specialite_concours: specialite,
      intitule_formation: concours?.libelle ?? formation.titre,
      duree_formation: c.duree.trim(),
      jours_cours: c.joursCours.trim(),
      montant_formation: String(montantCentimes / 100),
      acompte_verse: String(acompteCentimes / 100),
      nombre_echeances: String(c.nombreEcheances),
      mode_de_paiement: c.modePaiement,
      echeancier_convention: texteEcheancier,
      conditions_tarifaires_convention: texteConditions,
      conditions_acces_convention: condition.condition,
      equipe_pedagogique_convention: conv.equipe ?? formation.programmeDetaille?.equipe ?? EQUIPE_PAR_DEFAUT,
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