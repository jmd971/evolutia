// ─── Certification Qualiopi ──────────────────────────────────────────────────
// Source : certificat Certifopac n° 984211-1 délivré à EVOLUTIA le 21/09/2026.
//
// ⚠️ Règlement d'usage de la marque de garantie Qualiopi (marque n° 4704889) :
//  - le logo officiel ne doit JAMAIS être modifié (couleurs, proportions,
//    bandeau « République Française »), ni recréé ou redessiné ;
//  - il ne doit JAMAIS apparaître seul : la mention ci-dessous (MENTION_LEGALE)
//    doit l'accompagner partout où il est affiché ;
//  - il ne doit pas servir à promouvoir une formation en particulier : c'est le
//    processus de l'organisme qui est certifié, pas les formations elles-mêmes ;
//  - l'usage est contrôlé à chaque audit de surveillance, un mauvais usage peut
//    entraîner la suspension ou le retrait du certificat.
// Un audit de surveillance interviendra entre le 14e et le 22e mois suivant le
// 21/09/2026 : penser à remplacer le certificat publié après chaque nouvelle
// édition (numéro, dates de validité, fichier PDF).

export const QUALIOPI = {
  certificateur: "CERTIFOPAC",
  certificateurUrl: "https://certifopac.fr",
  certificateurEmail: "contact@certifopac.fr",
  certificateurTel: "+33 (0)4 27 88 81 30",
  accreditation: "Accréditation Cofrac n° 5-0620 (portée disponible sur www.cofrac.fr)",
  accreditationUrl: "https://tools.cofrac.fr/annexes/sect5/5-0620.pdf",
  numeroCertificat: "984211-1",
  edition: "21/09/2026",
  debutValidite: "21/09/2026",
  finValidite: "20/09/2029",
  debutValiditeISO: "2026-09-21",
  finValiditeISO: "2029-09-20",
  categorie: "L.6313-1 – 1° Actions de formation",
  categorieCourte: "ACTIONS DE FORMATION",
  // Mention imposée par le règlement d'usage : elle accompagne le logo partout.
  mentionLegale:
    "La certification qualité a été délivrée au titre de la catégorie d'action suivante : ACTIONS DE FORMATION.",
  // Numéro de déclaration d'activité (art. L. 6351-1 du Code du travail) :
  // à faire figurer sur les documents de l'organisme, avec la mention légale
  // « Cet enregistrement ne vaut pas agrément de l'État ».
  nda: "01973722197",
  siren: "927 489 690",
  pdf: "/qualiopi/certificat-qualiopi-evolutia-984211-1.pdf",
  // Logo officiel tel que Certifopac l'intègre dans le certificat (439 x 174 px,
  // aucune retouche). Ne pas l'afficher au-delà de 87 px de haut : au-delà il
  // perd en netteté sur les écrans 2x. Pour un affichage plus grand, reprendre
  // le fichier haute définition du kit Certifopac sous le même nom.
  logo: "/qualiopi/logo-qualiopi-actions-de-formation.png",
  page: "/certification-qualiopi",
} as const;
