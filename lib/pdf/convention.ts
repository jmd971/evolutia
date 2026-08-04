import PDFDocument from "pdfkit";
import { FORMATIONS } from "@/app/formations/data";

// Invariant (voir new_livret_transmiexpert) : PDFDocument doit être construit
// avec margin 0. Des marges non nulles cassent le calcul de pagination
// automatique de pdfkit et génèrent des pages en trop. La mise en page est
// donc gérée à la main via PAGE_MARGIN + checkPageBreak().
const PAGE_WIDTH = 595.28; // A4 portrait, en points
const PAGE_HEIGHT = 841.89;
const PAGE_MARGIN = 56;
const CONTENT_WIDTH = PAGE_WIDTH - PAGE_MARGIN * 2;
const CONTENT_BOTTOM = PAGE_HEIGHT - PAGE_MARGIN;

const EVOLUTIA_ADRESSE =
  "Immeuble La Coupole, Grand Camp, Rue Johannes Gutenberg, 97139 Les Abymes";

export type ConventionStagiaire = {
  civilite?: string;
  nom: string;
  telephone?: string;
  adresse?: string;
  email?: string;
};

export type ConventionInput = {
  formationSlug: string;
  stagiaire: ConventionStagiaire;
  voieConcours?: string;
  modeFinancement?: string;
  montantFormation?: number;
  acompteVerse?: number;
  nombreEcheances?: number;
  modePaiement?: string;
  dateSignature?: string;
  lieuSignature?: string;
};

function formatEuros(value: number): string {
  // Intl "fr-FR" sépare les milliers par une espace fine insécable (U+202F)
  // que la police Helvetica standard de pdfkit ne sait pas afficher (rendue
  // comme un glyphe erroné) : on la remplace par une espace normale.
  const formatted = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return formatted.replace(/[  ]/g, " ") + " €";
}

export async function generateConventionPdf(input: ConventionInput): Promise<Buffer> {
  const formation = FORMATIONS[input.formationSlug];
  if (!formation) {
    throw new Error(`Formation inconnue: ${input.formationSlug}`);
  }

  const doc = new PDFDocument({ size: "A4", margin: 0, bufferPages: true });
  const chunks: Buffer[] = [];
  doc.on("data", (chunk) => chunks.push(chunk));
  const done = new Promise<Buffer>((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(chunks)));
  });

  // PDFDocument crée déjà une première page automatiquement (autoFirstPage
  // par défaut) : ne pas appeler addPage() ici sous peine d'une page 1 vide.
  doc.y = PAGE_MARGIN;

  const checkPageBreak = (needed: number) => {
    if (doc.y + needed > CONTENT_BOTTOM) {
      doc.addPage();
      doc.y = PAGE_MARGIN;
    }
  };

  const title = (text: string, opts: { size?: number; gap?: number } = {}) => {
    const size = opts.size ?? 13;
    checkPageBreak(size + 10);
    doc
      .font("Helvetica-Bold")
      .fontSize(size)
      .text(text, PAGE_MARGIN, doc.y, { width: CONTENT_WIDTH });
    doc.y += opts.gap ?? 8;
  };

  const paragraph = (text: string, opts: { size?: number; bold?: boolean; gap?: number } = {}) => {
    const size = opts.size ?? 10;
    doc.font(opts.bold ? "Helvetica-Bold" : "Helvetica").fontSize(size);
    const height = doc.heightOfString(text, { width: CONTENT_WIDTH });
    checkPageBreak(height);
    doc.text(text, PAGE_MARGIN, doc.y, { width: CONTENT_WIDTH });
    doc.y += opts.gap ?? 8;
  };

  const bulletList = (items: string[], opts: { size?: number } = {}) => {
    const size = opts.size ?? 10;
    doc.font("Helvetica").fontSize(size);
    for (const item of items) {
      const text = `•  ${item}`;
      const height = doc.heightOfString(text, { width: CONTENT_WIDTH - 12 });
      checkPageBreak(height + 4);
      doc.text(text, PAGE_MARGIN + 12, doc.y, { width: CONTENT_WIDTH - 12 });
      doc.y += 4;
    }
    doc.y += 6;
  };

  const spacer = (h: number) => {
    doc.y += h;
  };

  // ---- Page de garde ----
  doc.font("Helvetica-Bold").fontSize(16).text("CONVENTION DE FORMATION SIMPLIFIÉE", PAGE_MARGIN, doc.y, {
    width: CONTENT_WIDTH,
    align: "center",
  });
  doc.y += 6;
  doc.font("Helvetica-Bold").fontSize(13).text(`« ${formation.titre.toUpperCase()} »`, PAGE_MARGIN, doc.y, {
    width: CONTENT_WIDTH,
    align: "center",
  });
  doc.y += 4;
  doc.font("Helvetica").fontSize(9).text("En deux exemplaires", PAGE_MARGIN, doc.y, {
    width: CONTENT_WIDTH,
    align: "center",
  });
  spacer(20);

  paragraph("Entre les soussignés :");
  paragraph(
    "EVOLUTIA, immatriculée au Registre du Commerce et des Sociétés de la Guadeloupe (971) sous le numéro Siret : 927 489 690, disposant en sa qualité d'organisme de formation d'une déclaration d'activité de soutien à l'enseignement APE : 85.59A, enregistrée auprès du Répertoire des Entreprises et des Établissements (SIRENE)."
  );
  paragraph(`Dont le siège social est sis ${EVOLUTIA_ADRESSE}.`);
  paragraph(
    "Prise en la personne de M. BARBIER J. Louis en qualité de Président, ci-après désignée EVOLUTIA SAS, Société par actions simplifiée, « le prestataire »."
  );
  paragraph("D'UNE PART", { bold: true });
  spacer(8);
  paragraph("ET,", { bold: true });
  paragraph(
    `${input.stagiaire.civilite ?? ""} ${input.stagiaire.nom}`.trim(),
    { bold: true }
  );
  paragraph(`Téléphone : ${input.stagiaire.telephone ?? "—"}`);
  paragraph(`Adresse : ${input.stagiaire.adresse ?? "—"}`);
  paragraph(`Courriel : ${input.stagiaire.email ?? "—"}`);
  paragraph("Ci-dessus désignée « le stagiaire ».");
  paragraph("D'AUTRE PART,", { bold: true });
  spacer(10);

  // ---- Article 1 ----
  title("Article 1er : Objet de la convention");
  paragraph(
    `EVOLUTIA, organisme de formation, s'engage à organiser l'action de formation suivante : « ${formation.titre} — ${formation.sousTitre} ».`
  );
  if (input.voieConcours) {
    paragraph(`Voie choisie par le stagiaire : ${input.voieConcours}.`, { bold: true });
  }

  // ---- Article 2 ----
  title("Article 2 : Nature et caractéristiques de l'action de formation");
  paragraph(
    "L'action de formation entre dans la catégorie des actions de perfectionnement des connaissances prévues par l'article L6353-1 du code du travail."
  );
  paragraph("Objectifs :", { bold: true, gap: 4 });
  paragraph(formation.accroche);
  paragraph("Programme :", { bold: true, gap: 4 });
  bulletList(formation.programme);
  paragraph("Équipe pédagogique :", { bold: true, gap: 4 });
  paragraph("Cette formation est assurée par les formateurs experts d'EVOLUTIA dans le domaine concerné. Les supports pédagogiques sont fournis par EVOLUTIA.");
  paragraph(`Durée totale : ${formation.duree}.`);
  paragraph(`Déroulement : ${formation.format}.`);
  paragraph(`Lieu de la formation : ${EVOLUTIA_ADRESSE}.`);

  // ---- Article 3 ----
  title("Article 3 : Effectifs dans le cadre de l'action de formation");
  paragraph("L'organisme de formation précise que l'action de formation sera dispensée auprès de 6 à 15 stagiaires.");

  // ---- Article 4 ----
  title("Article 4 : Niveau de connaissances préalables nécessaires");
  paragraph(
    "Afin de suivre au mieux l'action de formation susvisée et obtenir la ou les qualifications auxquelles elle prépare, le stagiaire est informé qu'il est nécessaire de posséder, avant l'entrée en formation, le niveau de connaissances correspondant aux conditions d'accès suivantes :"
  );
  for (const c of formation.conditions) {
    paragraph(`${c.voie} : ${c.condition}`, { gap: 6 });
  }

  // ---- Article 5 ----
  title("Article 5 : Diplômes, titres ou références des personnes chargées de la formation");
  paragraph(
    "L'action de formation professionnelle définie à l'article 2 de la présente convention est dispensée par l'équipe pédagogique d'EVOLUTIA, dont les formateurs justifient de titres, diplômes et références en rapport avec la spécialité enseignée."
  );

  // ---- Article 6 ----
  title("Article 6 : Modalités de sanction à l'issue de la formation");
  paragraph(
    "En application de l'article L. 6313-7 du Code du travail, une attestation mentionnant les objectifs, la nature et la durée de l'action et les résultats de l'évaluation des acquis de la formation sera remise au stagiaire à l'issue de la formation."
  );

  // ---- Article 7 ----
  title("Article 7 : Moyens permettant de suivre l'exécution de l'action");
  paragraph(
    "Il est communément admis pour les stages en présentiel, les feuilles de présence (états d'émargement signés par le stagiaire et le formateur) et le volume horaire de la séance de formation, l'objectif étant de justifier la réalisation de la formation."
  );

  // ---- Article 8 ----
  title("Article 8 : Moyens permettant d'apprécier les résultats de l'action de formation");
  paragraph(
    "L'appréciation des résultats se fait à travers la mise en œuvre d'une procédure d'évaluation permettant de déterminer si le stagiaire a acquis les connaissances ou gestes professionnels dont la maîtrise constitue l'objectif initial de l'action. Ces procédures se concrétisent par des concours blancs, des QCM de contrôle de connaissances, ou des entretiens avec un jury professionnel."
  );

  // ---- Article 9 ----
  title("Article 9 : Suivi de l'exécution de l'action");
  paragraph(
    "Le suivi est justifié par les feuilles de présence signées par demi-journée de formation et, le cas échéant, par des documents tels que rapports, mémoires ou comptes rendus."
  );

  // ---- Article 10 ----
  title("Article 10 : Conditions tarifaires");
  paragraph(
    `Le coût de la formation est de « ${
      typeof input.montantFormation === "number" ? formatEuros(input.montantFormation) : "à préciser"
    } » non assujetti à la TVA par participant.${
      input.modeFinancement ? ` Mode de financement retenu : ${input.modeFinancement}.` : ""
    }`
  );

  // ---- Article 11 ----
  title("Article 11 : Dispositions financières");
  paragraph(
    "Le règlement de la formation peut être échelonné selon un échéancier transmis. Les chèques seront déposés au dossier du stagiaire le jour de son inscription. Les paiements en espèces sont acceptés sur contre-valeur en chèque laissée en garantie, représentant le coût total de la formation."
  );
  paragraph(
    `Modalités de règlement convenues : ${input.modePaiement ?? "à préciser"}.`
  );
  paragraph(
    "Le prestataire se réserve le droit de refuser l'accès à la formation en cas de non-paiement et de non-respect du règlement."
  );

  if (typeof input.montantFormation === "number" && input.nombreEcheances) {
    paragraph("Échéancier :", { bold: true, gap: 4 });
    const acompte = input.acompteVerse ?? 0;
    const solde = input.montantFormation - acompte;
    const parEcheance = input.nombreEcheances > 0 ? solde / input.nombreEcheances : 0;

    const rows: [string, string][] = [["Acompte", formatEuros(acompte)]];
    for (let i = 1; i <= input.nombreEcheances; i++) {
      rows.push([`Échéance ${i}`, formatEuros(parEcheance)]);
    }
    rows.push(["Total", formatEuros(input.montantFormation)]);

    const rowHeight = 18;
    checkPageBreak(rowHeight * rows.length + 10);
    const colX = PAGE_MARGIN;
    const col2X = PAGE_MARGIN + 260;
    doc.font("Helvetica").fontSize(9);
    for (const [label, value] of rows) {
      checkPageBreak(rowHeight);
      // doc.text() avance doc.y tout seul après écriture : on fige la ligne
      // dans une variable locale pour positionner les deux colonnes sur la
      // même hauteur, puis on force doc.y au lieu de laisser les deux appels
      // l'incrémenter en cascade (sinon l'espacement double).
      const rowY = doc.y;
      doc.text(label, colX, rowY, { width: 250, lineBreak: false });
      doc.text(value, col2X, rowY, { width: CONTENT_WIDTH - 260, lineBreak: false });
      doc.y = rowY + rowHeight;
    }
    paragraph(
      "À l'expiration du délai de rétractation, il ne peut être demandé au stagiaire le paiement de plus de 30 % du prix convenu. Le solde est échelonné au fur et à mesure du déroulement de l'action de formation (article L. 6353-6 du Code du travail). Les dates de règlement de chaque échéance sont fixées d'un commun accord avec le service administratif d'EVOLUTIA.",
      { gap: 8 }
    );
  }

  // ---- Article 12 ----
  title("Article 12 : Délai de rétractation");
  paragraph(
    "Conformément à l'article L.6353-5 du Code du Travail, dans un délai de quatorze jours à compter de la signature de la présente convention, le stagiaire peut se rétracter par lettre recommandée avec avis de réception adressée à EVOLUTIA SAS."
  );

  // ---- Article 13 ----
  title("Article 13 : Inexécution totale ou partielle de la convention");
  paragraph(
    "Dans le cas où le nombre de participants à une formation serait jugé insuffisant, l'organisme de formation se réserve le droit d'annuler une formation au plus tard 2 jours ouvrés avant la date prévue, sous réserve d'en informer chaque stagiaire. En cas d'inexécution partielle ou totale de l'action de formation, le prestataire s'engage à rembourser l'intégralité des sommes indûment perçues de ce fait."
  );
  paragraph(
    "Le stagiaire peut rompre le contrat en cas de force majeure dûment reconnue. Dans ce cas, seules les prestations effectivement dispensées sont payées, à due proportion de leur valeur prévue au contrat (article L. 6353-7 du Code du travail). Pour toute annulation ne respectant pas ces conditions, l'intégralité du montant de la formation sera due."
  );

  // ---- Article 14 ----
  title("Article 14 : Différends éventuels");
  paragraph(
    "Si une contestation ou un différend ne peuvent être réglés à l'amiable, le tribunal administratif de Basse-Terre sera seul compétent pour régler le litige."
  );

  // ---- Article 15 ----
  title("Article 15 : Données personnelles");
  paragraph(
    `Toute inscription à une formation fait l'objet d'un enregistrement informatique accessible au stagiaire sur simple demande à l'adresse ${EVOLUTIA_ADRESSE}.`
  );
  paragraph(
    "Conformément à la loi 78-17 « Informatique et Libertés » du 6 janvier 1978 modifiée, le stagiaire dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant. Toute demande à ce titre doit être signée, accompagnée de la photocopie d'un titre d'identité valide, et préciser l'adresse à laquelle le prestataire doit répondre. La réponse sera adressée dans un délai de 2 mois suivant la réception de la demande."
  );

  // ---- Signatures ----
  spacer(10);
  paragraph(
    `Fait à ${input.lieuSignature ?? "Les Abymes"}, le ${input.dateSignature ?? "___________________"}, en deux (2) exemplaires originaux.`
  );
  spacer(20);
  checkPageBreak(90);
  const half = CONTENT_WIDTH / 2 - 10;
  const sigY = doc.y;
  doc.font("Helvetica-Bold").fontSize(10).text("Pour l'organisme de formation :", PAGE_MARGIN, sigY, { width: half });
  doc.font("Helvetica").fontSize(9).text("M. BARBIER Jean-Louis, Président", PAGE_MARGIN, doc.y, { width: half });
  doc.font("Helvetica").fontSize(9).text('« Lu et approuvé »', PAGE_MARGIN, doc.y + 30, { width: half });

  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .text("Le / la stagiaire :", PAGE_MARGIN + half + 20, sigY, { width: half });
  doc
    .font("Helvetica")
    .fontSize(9)
    .text(`${input.stagiaire.civilite ?? ""} ${input.stagiaire.nom}`.trim(), PAGE_MARGIN + half + 20, sigY + 14, {
      width: half,
    });
  doc
    .font("Helvetica")
    .fontSize(9)
    .text('« Lu et approuvé »', PAGE_MARGIN + half + 20, sigY + 44, { width: half });

  doc.end();
  return done;
}
