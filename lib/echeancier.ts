// Calcul de l'échéancier d'une convention de formation.
//
// Convention Evolutia (articles 9 à 11, modèle d'octobre 2026) et Code du travail :
// - rien ne peut être exigé du stagiaire avant la fin du délai de rétractation
//   de 10 jours (art. L. 6353-5) ;
// - à cette date, le premier versement ne peut dépasser 30 % du prix (art. L. 6353-6) ;
// - le solde est échelonné au fur et à mesure de la formation, encaissements
//   entre le 1er et le 5 ou entre le 25 et le 31 du mois.

export type Echeance = {
  libelle: string;
  date: Date | null; // null pour l'acompte, versé à la fin du délai de rétractation
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
  if (acompteCentimes > plafondAcompteCentimes(montantTotalCentimes)) {
    throw new Error(
      `L'acompte ne peut pas dépasser 30 % du prix, soit ${formaterEuros(plafondAcompteCentimes(montantTotalCentimes))} (art. L. 6353-6 du Code du travail).`
    );
  }
  if (nombreEcheances < 1 || nombreEcheances > 10) {
    throw new Error("Le nombre d'échéances doit être compris entre 1 et 10.");
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
    const quand = l.date ? formaterDate(l.date) : "à l'expiration du délai de rétractation";
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

/** 30 % du prix, arrondi au centime inférieur (art. L. 6353-6 du Code du travail). */
export function plafondAcompteCentimes(montantTotalCentimes: number): number {
  return Math.floor(montantTotalCentimes * 0.3);
}

/** Acompte proposé par défaut : la valeur de la formation, dans la limite de 30 %. */
export function acompteParDefautCentimes(montantTotalCentimes: number, souhaiteCentimes: number): number {
  return Math.min(souhaiteCentimes, plafondAcompteCentimes(montantTotalCentimes));
}

function formaterPourcentage(p: number): string {
  return p.toLocaleString("fr-FR", { maximumFractionDigits: 2 }) + " %";
}

/**
 * Texte de l'article « Conditions tarifaires » de la convention, inséré via le
 * champ GHL `conditions_tarifaires_convention`. Reprend la rédaction du modèle
 * d'octobre 2026, avec ou sans remise commerciale.
 */
export function rendreConditionsTarifaires(prixCentimes: number, remiseCentimes: number): string {
  if (prixCentimes <= 0) throw new Error("Le prix de la formation doit être positif.");
  if (remiseCentimes < 0) throw new Error("La remise ne peut pas être négative.");
  if (remiseCentimes >= prixCentimes) throw new Error("La remise doit rester inférieure au prix.");
  const base = `Le coût de la formation est de ${formaterEuros(prixCentimes)}, non assujetti à la TVA, par participant.`;
  if (remiseCentimes === 0) return base;
  const net = prixCentimes - remiseCentimes;
  const pourcentage = formaterPourcentage((remiseCentimes / prixCentimes) * 100);
  return (
    `${base} À titre exceptionnel, le stagiaire bénéficie d'une remise commerciale de ${pourcentage}, ` +
    `soit une réduction de ${formaterEuros(remiseCentimes)}. Après application de cette remise, ` +
    `le montant total de la formation est ramené à ${formaterEuros(net)}, non assujetti à la TVA.`
  );
}
