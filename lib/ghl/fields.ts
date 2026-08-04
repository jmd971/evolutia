// Référence des custom fields et tags créés dans GHL (sous-compte Evolutia,
// location O5XCNBuMjjvy7DPbGC6n) pour le workflow d'inscription.
// Voir docs/ghl-inscriptions.md pour le contexte complet.

export const GHL_FIELD_IDS = {
  formationChoisie: "GT6rYUbTWnXYETUYVT8U",
  sessionChoisie: "DakdZidsC3RpdboppMY4",
  modeFinancement: "g1Mv1EhUuQ96TiQji6jF",
  etapeFormulaire: "sjpNqML70lCyYjJ2yEOO",
  yousignSignatureRequestId: "x9sBDEv4xC17PVHtVHgN",
  conventionPdfUrl: "qT5ThIcXBWPCYGOK3E25",
  conventionSigneePdfUrl: "GufcIzdfVNXBWEAoCC2w",
  voieConcours: "pc5imfY1U7l6hDqMWJKF",
  montantFormation: "PDvI8qrqnLGZouu76eeG",
  acompteVerse: "MMTZ3NYKtI0eDySFX2fo",
  nombreEcheances: "ZfOIDQxTHj2QSG38L4t0",
  modePaiement: "bQHg5Pv5mhYBDUI5kj9Y",
} as const;

// IDs utiles pour le endpoint /tags (suppression, etc.).
export const GHL_TAG_IDS = {
  formulaireDemarre: "JqfmJTOtUaY4JkghBuzp",
  formulaireComplete: "eZSAaWJEqBh9kEPPQn7J",
  relance1Envoyee: "PeeYBXOV5MtjKjxcbV1B",
  relance2Envoyee: "I32EoTUCLMe1dZFLCLIH",
  abandonne: "A4KKfYpqLpRkbQSzk0zd",
  conventionSignee: "Q7ZQPL5nkqv70eDoQk3R",
} as const;

// Noms des tags — c'est ce que l'API contacts attend dans `tags: string[]`
// (le tableau `tags` d'un contact est une liste de noms, pas d'ids).
export const GHL_TAG_NAMES = {
  formulaireDemarre: "formulaire_demarre",
  formulaireComplete: "formulaire_complete",
  relance1Envoyee: "relance_1_envoyee",
  relance2Envoyee: "relance_2_envoyee",
  abandonne: "abandonne",
  conventionSignee: "convention_signee",
} as const;

export const VOIE_CONCOURS_OPTIONS = ["Externe", "Interne", "3e voie"] as const;
export type VoieConcours = (typeof VOIE_CONCOURS_OPTIONS)[number];

export const MODE_PAIEMENT_OPTIONS = [
  "Chèque",
  "Virement",
  "Espèces",
  "Carte bancaire",
  "Prélèvement SEPA",
] as const;
export type ModePaiement = (typeof MODE_PAIEMENT_OPTIONS)[number];

export const MODE_FINANCEMENT_OPTIONS = [
  "CPF",
  "OPCO",
  "Personnel",
  "Paiement en plusieurs fois",
] as const;
export type ModeFinancement = (typeof MODE_FINANCEMENT_OPTIONS)[number];
