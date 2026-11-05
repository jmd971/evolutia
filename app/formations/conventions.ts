// Conditions de convention par formation : prix, acompte, échéancier, durée exacte,
// équipe, options et spécialités. Source unique pour la page interne
// (/interne/convention), les fiches formation et la page /financement-tarifs.
//
// Valeurs confirmées par Evolutia (Michaëlla REGENT) le 30/10/2026 :
// - prix 2026-2027 des 8 formations ci-dessous, prix FERMES (pas « à partir de ») ;
// - convention Technicien (modèle Rosinel) : 1 600 €, acompte 300 €, 7 règlements,
//   108 h d'écrit (36 séances) + 42 h d'oral (21 séances de 2 h).
// Les 14 autres formations n'ont pas encore de prix communiqué : elles restent
// « sur devis » et la page interne demande de saisir le prix à la main.
//
// Règles légales appliquées dans lib/echeancier.ts (art. L. 6353-5 et L. 6353-6
// du Code du travail) : rien n'est exigible avant la fin du délai de rétractation
// de 10 jours, puis 30 % du prix au plus ; le solde est échelonné pendant la formation.

export type ConditionsConvention = {
  /** Prix catalogue 2026-2027, en euros. Absent = sur devis. */
  prix?: number;
  /** Acompte par défaut, en euros (plafonné à 30 % du prix net au calcul). */
  acompte?: number;
  /** Nombre maximal de règlements, acompte compris (art. 10 de la convention). */
  reglementsMax?: number;
  /** Durée exacte à porter sur la convention, quand Evolutia l'a fixée. */
  duree?: string;
  /** Jours et rythme des cours, quand Evolutia les a fixés. */
  joursCours?: string;
  /** Formateurs et références (art. 5 de la convention). */
  equipe?: string;
  /** Concours préparés dans la même session (ex. rédacteur / rédacteur principal). */
  concours?: { libelle: string; options: boolean }[];
  /** Options d'épreuve à choisir à l'inscription. */
  options?: string[];
  /** Spécialités à choisir à l'inscription. */
  specialites?: string[];
};

export const ACOMPTE_DEFAUT = 300;
export const REGLEMENTS_MAX_DEFAUT = 7;
export const DELAI_RETRACTATION_JOURS = 10;

const EQUIPE_TECHNIQUE =
  "M. Tony BARBIER, ingénieur territorial en chef, spécialité infrastructures, formateur indépendant en génie civil, travaux publics et filières technique et administrative territoriales ; " +
  "M. Fabrice MAES, responsable des services techniques de Petit-Bourg, technicien principal de 1re classe (maîtrise de sciences, DUT) ; " +
  "Mme Michaëlla REGENT, directrice de service, attachée territoriale (maîtrise de sciences et techniques, DUT).";

export const CONVENTIONS: Record<string, ConditionsConvention> = {
  "attache-territorial-guadeloupe": {
    prix: 1900,
    acompte: 400,
    reglementsMax: 10,
    duree: "166 heures : 146 heures de préparation écrite et 20 heures de préparation orale",
  },
  "redacteur-territorial-guadeloupe": {
    prix: 1600,
    concours: [
      { libelle: "Rédacteur territorial", options: true },
      { libelle: "Rédacteur principal de 2e classe", options: false },
    ],
    // Rédacteur : en externe, l'option porte sur l'épreuve de questions ; en
    // interne, sur la note. Rédacteur principal de 2e classe : aucune option.
    options: [
      "Finances, budgets et intervention économique des collectivités territoriales",
      "Droit public en lien avec les missions des collectivités territoriales",
      "Action sanitaire et sociale des collectivités territoriales",
      "Droit civil en lien avec les missions des collectivités territoriales",
    ],
  },
  "redacteur-principal-guadeloupe": { prix: 1600 },
  "technicien-territorial-guadeloupe": {
    prix: 1600,
    acompte: 300,
    reglementsMax: 7,
    duree:
      "150 heures : 108 heures de préparation écrite (36 séances) et 42 heures de préparation orale (21 séances de 2 heures)",
    joursCours: "le mercredi ou le vendredi, le samedi étant réservé aux examens blancs",
    equipe: EQUIPE_TECHNIQUE,
    specialites: [
      "Bâtiments, génie civil",
      "Réseaux, voirie et infrastructures",
      "Prévention et gestion des risques, hygiène, restauration",
      "Aménagement urbain et développement durable",
      "Déplacements, transports",
      "Espaces verts et naturels",
      "Ingénierie, informatique et systèmes d'information",
      "Services et interventions techniques",
      "Métiers du spectacle",
      "Artisanat et métiers d'art",
    ],
  },
  "agent-de-maitrise-guadeloupe": { prix: 1200 },
  "ingenieur-territorial-guadeloupe": { prix: 1900 },
  "ingenieur-chef-guadeloupe": { prix: 2200 },
  "preparation-oraux-concours-guadeloupe": { prix: 500 },
};

export function conditionsConvention(slug: string): ConditionsConvention {
  return CONVENTIONS[slug] ?? {};
}

/** « 1 600 € » — format d'affichage des prix catalogue. */
export function formaterPrix(euros: number): string {
  return euros.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/ /g, " ") + " €";
}

/** Prix affiché sur le site, ou undefined si la formation est sur devis. */
export function prixAffiche(slug: string): string | undefined {
  const p = CONVENTIONS[slug]?.prix;
  return p === undefined ? undefined : formaterPrix(p);
}
