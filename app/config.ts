// URL canonique du site (domaine de production, servi en 200 sans redirection).
// Le domaine pointe désormais sur Vercel : l'apex evolutiaformation.fr redirige (308) vers www.
export const SITE_URL = "https://www.evolutiaformation.fr";

// Widget de prise de rendez-vous (entretien d'orientation gratuit).
// Intégré en iframe sur /contact uniquement — ne pas disséminer l'URL dans le contenu (règle CLAUDE.md).
export const BOOKING_URL = "https://link.siboard-consulting.fr/widget/bookings/rdv-evolutia-formation";

// Formulaire de capture de lead (section « Passez à l'action » de l'accueil).
export const CONTACT_FORM_URL = "https://link.siboard-consulting.fr/widget/form/n4T5zoDr0V95hQloBneb";

// ─── Inscription en ligne (GoHighLevel) ──────────────────────────────────────
// Formulaire « Inscription Evolutia — sessions 2026-2027 » du sous-compte GHL
// Evolutia (locationId O5XCNBuMjjvy7DPbGC6n).
export const INSCRIPTION_FORM_ID = "102GjFFxUq6b5VHVRUc8";

// Domaine qui sert le formulaire.
// Cible : "https://inscription.evolutiaformation.fr" — à basculer ici dès que le
// sous-domaine est connecté dans GHL (Paramètres → Domaines) et que le CNAME est
// en place chez Hostinger. En attendant on sert depuis le domaine LeadConnector
// par défaut : jamais link.siboard-consulting.fr dans un lien visible (CLAUDE.md).
export const INSCRIPTION_HOST = "https://api.leadconnectorhq.com";

// Lien d'inscription pour une formation donnée.
// `formation_choisie` reçoit le slug de app/formations/data.ts et `session_choisie`
// la date ISO de démarrage : ce sont les deux champs que la route
// /api/inscriptions/generer-convention relit pour produire la convention.
// Tant que ces deux champs cachés ne sont pas posés sur le formulaire GHL, les
// paramètres sont simplement ignorés — le lien reste fonctionnel.
export function inscriptionUrl(slug: string, sessionISO?: string): string {
  const params = new URLSearchParams({ formation_choisie: slug });
  if (sessionISO) params.set("session_choisie", sessionISO);
  return `${INSCRIPTION_HOST}/widget/form/${INSCRIPTION_FORM_ID}?${params.toString()}`;
}
