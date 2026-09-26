// Socle commun des fiches programme (format Qualiopi, indicateur 1 du référentiel
// national qualité : information du public sur les prestations).
//
// Ce qui relève de la méthode Evolutia est identique d'une préparation à l'autre :
// public accueilli, moyens pédagogiques, modalités de suivi, délai d'accès. Ces
// éléments sont écrits ICI une seule fois, et non recopiés dans les 22 fiches —
// une évolution de la méthode se répercute alors partout d'un seul coup.
//
// Ce qui est propre à chaque concours — objectifs, prérequis, contenu, durée,
// tarif — reste dans la fiche de la formation : c'est ce qu'un auditeur vérifie
// en premier, et des fiches identiques mot pour mot lui signaleraient que
// l'information n'est pas réellement tenue à jour.

import type { ProgrammeDetaille } from "./data";

export const PUBLICS_DEFAUT =
  "Fonctionnaires, agents publics et adultes motivés hors fonction publique (salariés du privé, demandeurs d'emploi) : tout public remplissant les conditions d'accès au concours ou à l'examen professionnel visé.";

// ⚠️ Valeur reprise de la fiche Attaché Territorial, seule fiche renseignée à ce
// jour. À confirmer par Evolutia : le délai peut différer selon les préparations.
export const DELAI_ACCES_DEFAUT = "15 jours après inscription";

export const MOYENS_DEFAUT = [
  "Alternance d'apports théoriques et méthodologiques et de travaux pratiques, à partir de sujets et de dossiers conformes aux notes de cadrage nationales de l'épreuve visée.",
  "Études de cas et mises en situation proches des conditions réelles de l'épreuve, construites à partir des annales.",
  "Exercices individuels et collectifs avec corrections personnalisées, différenciés selon la voie d'accès lorsque les épreuves diffèrent.",
  "Outils interactifs : quiz, questionnaires à choix multiples, mises en situation.",
  "Devoirs corrigés individuellement avec conseils personnalisés.",
  "Évaluation formative continue, avec bref rappel de la séance précédente à chaque début de cours.",
];

export const SUIVI_DEFAUT = [
  "Un bref rappel de la séance précédente à chaque début de cours",
  "Des sujets d'entraînement aux épreuves, corrigés et commentés",
  "Des concours blancs en conditions réelles",
  "Des entretiens avec un jury professionnel",
  "Un formateur référent joignable entre les séances, jusqu'aux résultats",
];

// Fiche complète telle qu'elle est affichée : le socle comble ce que la fiche
// ne précise pas, et `moyensEnPlus` / `suiviEnPlus` ajoutent au socle ce qui est
// propre à la préparation, sans avoir à en recopier le contenu commun.
export type FicheAffichee = {
  publics: string;
  objectifs: string[];
  prerequis: string[];
  equipe?: string;
  delaiAcces: string;
  tarif?: string;
  moyens: string[];
  contenuIntro: string;
  contenu: ProgrammeDetaille["contenu"];
  suivi: string[];
};

export function ficheQualiopi(pd: ProgrammeDetaille): FicheAffichee {
  return {
    publics: pd.publics ?? PUBLICS_DEFAUT,
    objectifs: pd.objectifs,
    prerequis: pd.prerequis,
    equipe: pd.equipe,
    delaiAcces: pd.delaiAcces ?? DELAI_ACCES_DEFAUT,
    tarif: pd.tarif,
    moyens: [...(pd.moyens ?? MOYENS_DEFAUT), ...(pd.moyensEnPlus ?? [])],
    contenuIntro: pd.contenuIntro,
    contenu: pd.contenu,
    suivi: [...(pd.suivi ?? SUIVI_DEFAUT), ...(pd.suiviEnPlus ?? [])],
  };
}
