// Calcul de l'échéancier d'une convention de formation.
//
// La convention Evolutia (article 11) prévoit un acompte puis jusqu'à
// 10 règlements. Les chèques sont remis à l'inscription et déposés au dossier
// du stagiaire sans être encaissés ; les encaissements suivent les dates
// ci-dessous, entre le 1er et le 5 ou entre le 25 et le 31 de chaque mois.

export type Echeance = {
  libelle: string;
  date: Date | null; // null pour l'acompte, remis le jour de l'inscription
  montantCentimes: number;
};

export type EcheancierParams = {
  montantTotalCentimes: number;
  acompteCentimes: number;
  nombreEcheances: number;
  premiereEcheance: Date;
};

/**
 * Répartit le solde sur `nombreEcheances` mensualités.
 *
 * Le solde est rarement divisible : on arrondit chaque mensualité au centime
 * inférieur et la DERNIÈRE absorbe le reliquat, pour que la somme retombe
 * exactement sur le montant total. Sans ça, un total de 1 500 € sur 7 fois
 * afficherait 7 × 214,28 € = 1 499,96 € et la convention serait fausse.
 */
export function calculerEcheancier(p: EcheancierParams): Echeance[] {
  const { montantTotalCentimes, acompteCentimes, nombreEcheances, premiereEcheance } = p;

  if (montantTotalCentimes <= 0) throw new Error("Le montant total doit être positif.");
  if (acompteCentimes < 0) throw new Error("L'acompte ne peut pas être négatif.");
  if (acompteCentimes > montantTotalCentimes) throw new Error("L'acompte dépasse le montant total.");
  if (nombreEcheances < 1 || nombreEcheances > 10) {
    throw new Error("Le nombre d'échéances doit être compris entre 1 et 10 (article 11 de la convention).");
  }

  const lignes: Echeance[] = [];
  if (acompteCentimes > 0) {
    lignes.push({ libelle: "Acompte", date: null, montantCentimes: acompteCentimes });
  }

  const solde = montantTotalCentimes - acompteCentimes;
  const base = Math.floor(solde / nombreEcheances);
  let cumul = 0;

  for (let i = 0; i < nombreEcheances; i++) {
    const dernier = i === nombreEcheances - 1;
    const montant = dernier ? solde - cumul : base;
    cumul += montant;
    lignes.push({
      libelle: `Échéance ${i + 1}`,
      date: ajouterMois(premiereEcheance, i),
      montantCentimes: montant,
    });
  }

  return lignes;
}

/**
 * Ajoute `n` mois en gardant le quantième, sans déborder sur le mois suivant :
 * le 31 janvier + 1 mois donne le 28 (ou 29) février, pas le 3 mars.
 */
export function ajouterMois(d: Date, n: number): Date {
  const jour = d.getDate();
  const cible = new Date(d.getFullYear(), d.getMonth() + n, 1);
  const dernierJour = new Date(cible.getFullYear(), cible.getMonth() + 1, 0).getDate();
  cible.setDate(Math.min(jour, dernierJour));
  return cible;
}

export function formaterEuros(centimes: number): string {
  return (centimes / 100).toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

export function formaterDate(d: Date): string {
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

/**
 * Rend l'échéancier en texte, tel qu'il sera inséré dans la convention GHL
 * via le champ personnalisé `echeancier_convention` (type multiligne).
 */
export function rendreEcheancierTexte(lignes: Echeance[], montantTotalCentimes: number): string {
  const corps = lignes.map((l) => {
    const quand = l.date ? formaterDate(l.date) : "à l'inscription";
    return `${l.libelle} : ${formaterEuros(l.montantCentimes)} — ${quand}`;
  });
  corps.push(`Total : ${formaterEuros(montantTotalCentimes)}`);
  return corps.join("\n");
}

/** Convertit une saisie en euros ("1 900", "1900,50", "1900.5") en centimes. */
export function eurosVersCentimes(saisie: string): number {
  const nettoye = saisie.replace(/\s/g, "").replace(",", ".");
  const valeur = Number(nettoye);
  if (!Number.isFinite(valeur)) throw new Error(`Montant illisible : « ${saisie} »`);
  return Math.round(valeur * 100);
}
