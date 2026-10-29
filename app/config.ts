// URL canonique du site (domaine de production, servi en 200 sans redirection).
// Le domaine pointe désormais sur Vercel : l'apex evolutiaformation.fr redirige (308) vers www.
export const SITE_URL = "https://www.evolutiaformation.fr";

// Widget de prise de rendez-vous (entretien d'orientation gratuit).
// Intégré en iframe sur /contact uniquement — ne pas disséminer l'URL dans le contenu (règle CLAUDE.md).
export const BOOKING_URL = "https://link.siboard-consulting.fr/widget/bookings/rdv-evolutia-formation";

// Formulaire de capture de lead (section « Passez à l'action » de l'accueil).
export const CONTACT_FORM_URL = "https://link.siboard-consulting.fr/widget/form/n4T5zoDr0V95hQloBneb";

// ─── Inscription en ligne ────────────────────────────────────────────────────
// Formulaire « Inscription Evolutia — sessions 2026-2027 » du sous-compte GHL
// Evolutia (locationId O5XCNBuMjjvy7DPbGC6n). Champs cachés `formation_choisie`
// et `session_choisie`, préremplis par les paramètres d'URL.
export const INSCRIPTION_FORM_ID = "102GjFFxUq6b5VHVRUc8";

// Hôte qui sert le widget GHL.
// ⚠️ `inscription.evolutiaformation.fr` ne peut PAS servir /widget/form/… : un
// domaine connecté dans GHL (Paramètres → Domaines) est rattaché au produit
// Entonnoirs/Sites et ne rend que des pages de funnel — vérifié le 20/08/2026,
// il répond 404. Les widgets sont servis par le domaine de liens white-label de
// l'agence, réglable uniquement au niveau agence.
// Le widget est donc servi depuis le domaine LeadConnector, mais à l'intérieur
// d'une page /inscription/[slug] du site : le candidat ne voit que
// evolutiaformation.fr dans sa barre d'adresse, et aucun lien siboard n'apparaît
// (règle CLAUDE.md).
export const GHL_WIDGET_HOST = "https://api.leadconnectorhq.com";

// Script officiel GHL qui redimensionne l'iframe du formulaire selon son contenu.
// Domaine neutre (msgsndr.com), même version que celle déjà utilisée sur /contact.
export const GHL_FORM_EMBED_JS = "https://link.msgsndr.com/js/form_embed.js";

// Lien d'inscription affiché sur le site : une page interne, pas GHL.
export function inscriptionUrl(slug: string): string {
  return `/inscription/${slug}`;
}

// URL du widget GHL embarqué dans cette page.
// `formation_choisie` reçoit le slug de app/formations/data.ts et
// `session_choisie` la date ISO de démarrage : ce sont les deux champs que la
// route /api/inscriptions/generer-convention relit pour produire la convention.
export function inscriptionEmbedUrl(slug: string, sessionISO?: string): string {
  const params = new URLSearchParams({ formation_choisie: slug });
  if (sessionISO) params.set("session_choisie", sessionISO);
  return `${GHL_WIDGET_HOST}/widget/form/${INSCRIPTION_FORM_ID}?${params.toString()}`;
}

// ─── Assistant virtuel (chat) ────────────────────────────────────────────────
// Widget de chat GHL « Chat Evolutia » (sous-compte Evolutia), relié à l'agent
// Conversation AI « Léa - Conseillère Evolutia ». Le script est servi par le
// domaine neutre LeadConnector : aucun lien siboard n'apparaît (règle CLAUDE.md).
// Le widget n'est chargé que si NEXT_PUBLIC_CHAT_WIDGET=on côté Vercel : fusionner
// ce code ne change rien tant que l'interrupteur n'est pas posé (voir docs/chatbot.md).
export const CHAT_WIDGET_ENABLED = process.env.NEXT_PUBLIC_CHAT_WIDGET === "on";
export const CHAT_WIDGET_ID = "66c03927d1bc9e2e73f3ab9e";
export const CHAT_WIDGET_SCRIPT = "https://widgets.leadconnectorhq.com/loader.js";
export const CHAT_WIDGET_RESOURCES = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
// Pages où la bulle de chat ne doit pas se charger : espace interne et tunnel d'inscription.
export const CHAT_WIDGET_EXCLUDED_PREFIXES = ["/interne", "/inscription"];

// ─── Gérer un rendez-vous existant (annuler / reporter) ──────────────────────
// Les mails de confirmation et de rappel pointent vers /rendez-vous/annuler?id=… et
// /rendez-vous/reporter?id=… (id = {{appointment.id}} dans GHL) : ces pages embarquent
// les widgets GHL, pour que le candidat reste sur evolutiaformation.fr au lieu d'atterrir
// sur le domaine de liens de l'agence (règle CLAUDE.md : aucun lien siboard visible).
// Calendrier « Reserver un entretien » (même que BOOKING_URL).
export const RDV_CALENDAR_ID = "2s1uZtXtzs4Rp4YLbZ75";
// Identifiant d'un rendez-vous GHL (20 caractères alphanumériques) : on refuse tout le reste
// avant de le placer dans l'URL de l'iframe.
export const RDV_ID_PATTERN = /^[A-Za-z0-9]{10,40}$/;

export function rdvAnnulerEmbedUrl(id: string): string {
  return `${GHL_WIDGET_HOST}/widget/cancel-booking?event_id=${encodeURIComponent(id)}`;
}

export function rdvReporterEmbedUrl(id: string): string {
  return `${GHL_WIDGET_HOST}/widget/booking/${RDV_CALENDAR_ID}?event_id=${encodeURIComponent(id)}`;
}
