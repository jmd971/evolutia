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
  /** Voies pour lesquelles une spécialité est à choisir (par défaut : toutes). */
  specialitesVoies?: string[];
  /** Spécialités ouvertes à certaines voies seulement. */
  specialitesReservees?: { libelle: string; voies: string[] }[];
  /** Chaque spécialité se décline en options dont la liste varie selon la session :
   *  l'option est saisie en texte libre (facultative). */
  optionSpecialiteLibre?: boolean;
};

/** Spécialités proposées pour une voie donnée (liste vide = pas de spécialité). */
export function specialitesPour(c: ConditionsConvention, voie: string): string[] {
  if (!c.specialites?.length) return [];
  if (c.specialitesVoies && !c.specialitesVoies.includes(voie)) return [];
  const reservees = (c.specialitesReservees ?? [])
    .filter((s) => s.voies.includes(voie))
    .map((s) => s.libelle);
  return [...c.specialites, ...reservees];
}

// Nature de la procédure pour chaque voie des fiches (app/formations/data.ts) :
// concours ou examen professionnel, et pour ce dernier promotion interne ou
// avancement de grade (cf. répertoire des concours et examens de la FPT,
// novembre 2026). C'est ce libellé qui figure à l'article 1 de la convention.
const NATURE_VOIE: Record<string, string> = {
  "Externe": "Concours externe",
  "Interne": "Concours interne",
  "3e voie": "Troisième concours",
  "Concours externe": "Concours externe",
  "Concours interne": "Concours interne",
  "Concours 3e voie": "Troisième concours",
  "Concours (externe)": "Concours externe",
  "Externe — dispense de diplôme": "Concours externe (dispense de diplôme)",
  "Sur titres": "Concours sur titres",
  "Sur titres — spécialité aide médico-psychologique": "Concours sur titres — spécialité aide médico-psychologique",
  "Sur titres — spécialité assistant dentaire": "Concours sur titres — spécialité assistant dentaire",
  "Avancement de grade": "Examen professionnel d'avancement de grade",
  "Examen pro. 2e classe (avancement)": "Examen professionnel d'avancement au grade de technicien principal de 2e classe",
  "Examen pro. 1re classe (avancement)": "Examen professionnel d'avancement au grade de technicien principal de 1re classe",
  "Examen pro. 2e classe (promotion interne)": "Examen professionnel de promotion interne au grade de technicien principal de 2e classe",
  "Examen pro. (promotion interne)": "Examen professionnel de promotion interne",
  "Examen pro. — ATSEM": "Examen professionnel de promotion interne (ATSEM)",
  "Tous profils": "Préparation aux épreuves orales d'un concours ou d'un examen professionnel",
};

/** Libellé complet de la voie pour la convention (« Concours externe »,
 *  « Examen professionnel d'avancement de grade »…). */
export function natureVoie(voie: string): string {
  return NATURE_VOIE[voie] ?? voie;
}

/** Famille de la procédure, pour l'affichage (pastille). */
export function familleVoie(voie: string): "Concours" | "Examen professionnel" | "Préparation" {
  const n = natureVoie(voie);
  if (n.startsWith("Examen professionnel")) return "Examen professionnel";
  if (n.startsWith("Concours") || n === "Troisième concours") return "Concours";
  return "Préparation";
}

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
    // Décret n° 2013-593 : spécialité choisie à l'inscription, dans les trois voies.
    specialites: [
      "Administration générale",
      "Gestion du secteur sanitaire et social",
      "Analyste",
      "Animation",
      "Urbanisme et développement des territoires",
    ],
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
  "agent-de-maitrise-guadeloupe": {
    prix: 1200,
    // Concours seulement : l'examen professionnel de promotion interne n'a pas
    // de spécialité. Liste des brochures CDG 2025.
    specialitesVoies: ["Concours externe", "Concours interne", "Concours 3e voie"],
    specialites: [
      "Bâtiment, travaux publics, voirie, réseaux divers",
      "Espaces naturels, espaces verts",
      "Mécanique, électromécanique, électronique, électrotechnique",
      "Restauration",
      "Environnement, hygiène",
      "Techniques de la communication et des activités artistiques",
      "Logistique et sécurité",
    ],
    specialitesReservees: [
      {
        libelle: "Hygiène et accueil des enfants des écoles maternelles ou des classes enfantines",
        voies: ["Concours interne"],
      },
    ],
  },
  "ingenieur-territorial-guadeloupe": {
    prix: 1900,
    // 5 spécialités et 14 options, mêmes listes en externe et en interne : le
    // candidat choisit la spécialité et l'option à l'inscription.
    specialites: [
      "Ingénierie, gestion technique et architecture — option construction et bâtiments",
      "Ingénierie, gestion technique et architecture — option centres techniques",
      "Ingénierie, gestion technique et architecture — option logistique et maintenance",
      "Infrastructures et réseaux — option voirie, réseaux divers (VRD)",
      "Infrastructures et réseaux — option déplacements et transports",
      "Prévention et gestion des risques — option sécurité et prévention des risques",
      "Prévention et gestion des risques — option hygiène, laboratoires, qualité de l'eau",
      "Prévention et gestion des risques — option déchets, assainissement",
      "Prévention et gestion des risques — option sécurité du travail",
      "Urbanisme, aménagement et paysages — option urbanisme",
      "Urbanisme, aménagement et paysages — option paysages, espaces verts",
      "Informatique et systèmes d'information — option systèmes d'information et de communication",
      "Informatique et systèmes d'information — option réseaux et télécommunications",
      "Informatique et systèmes d'information — option systèmes d'information géographiques (SIG), topographie",
    ],
  },
  "adjoint-technique-principal-guadeloupe": {
    // Arrêté de 2007 : chaque spécialité se décline en options, ouvertes ou non
    // selon la session : l'option est saisie à la main.
    specialites: [
      "Bâtiment, travaux publics, voirie et réseaux divers",
      "Espaces naturels, espaces verts",
      "Mécanique, électromécanique",
      "Restauration",
      "Environnement, hygiène",
      "Communication, spectacle",
      "Logistique et sécurité",
      "Artisanat d'art",
      "Conduite de véhicules",
    ],
    optionSpecialiteLibre: true,
  },
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
