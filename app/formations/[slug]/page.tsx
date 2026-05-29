import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Epreuve = { type: string; label: string; desc: string };
type Condition = { voie: string; condition: string };

type Formation = {
  titre: string;
  sousTitre: string;
  categorie: string;
  seoTitle: string;
  seoDesc: string;
  accroche: string;
  epreuves: Epreuve[];
  programme: string[];
  conditions: Condition[];
  duree: string;
  format: string;
  tauxReussite: string;
  color: string;
};

const FORMATIONS: Record<string, Formation> = {
  "ingenieur-territorial-guadeloupe": {
    titre: "Ingénieur Territorial",
    sousTitre: "Concours externe, interne et 3e voie",
    categorie: "Catégorie A",
    seoTitle: "Préparation Concours Ingénieur Territorial Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours d'ingénieur territorial en Guadeloupe avec Evolutia. Programme complet, formateurs experts, format hybride. Financement CPF disponible.",
    accroche: "Le concours d'ingénieur territorial est l'un des plus sélectifs de la fonction publique. Notre programme intensif vous donne les outils pour réussir dès la première tentative.",
    epreuves: [
      { type: "Écrit", label: "Note de synthèse (4h)", desc: "Analyse d'un dossier documentaire, synthèse structurée" },
      { type: "Écrit", label: "Note technique (4h)", desc: "Résolution d'un problème technique dans la spécialité" },
      { type: "Oral", label: "Entretien jury (30 min)", desc: "Présentation du parcours, motivation, mise en situation" },
    ],
    programme: [
      "Méthodologie note de synthèse — techniques et entraînements",
      "Culture administrative et institutionnelle",
      "Épreuves techniques par spécialité",
      "Simulations d'entretien oral avec jury",
      "Corrections individuelles détaillées",
      "Veille sur le calendrier CDG Guadeloupe",
    ],
    conditions: [
      { voie: "Externe", condition: "Bac+3 dans la spécialité concernée" },
      { voie: "Interne", condition: "4 ans de services effectifs dans la FPT" },
      { voie: "3e voie", condition: "Expérience professionnelle équivalente" },
    ],
    duree: "120 à 180 heures",
    format: "Présentiel (Grand-Camp) + distanciel",
    tauxReussite: "82%",
    color: "#1B3A6B",
  },
  "technicien-territorial-guadeloupe": {
    titre: "Technicien Territorial",
    sousTitre: "Concours externe et interne",
    categorie: "Catégorie B",
    seoTitle: "Préparation Concours Technicien Territorial Guadeloupe 2025 | Evolutia",
    seoDesc: "Formation préparation concours technicien territorial en Guadeloupe. Épreuves écrites et oraux. Financement CPF. Centre Evolutia, Les Abymes.",
    accroche: "Le technicien territorial joue un rôle clé dans les services techniques des collectivités. Notre formation vous prépare méthodiquement aux épreuves écrites et orales.",
    epreuves: [
      { type: "Écrit", label: "Composition (3h)", desc: "Rédaction sur un sujet d'actualité des collectivités territoriales" },
      { type: "Écrit", label: "Analyse de document (3h)", desc: "Questions sur un dossier documentaire" },
      { type: "Oral", label: "Entretien jury (20 min)", desc: "Échange sur le parcours professionnel et motivations" },
    ],
    programme: [
      "Actualité et fonctionnement des collectivités territoriales",
      "Méthodologie de la composition",
      "Analyse et synthèse documentaire",
      "Entraînements écrits corrigés individuellement",
      "Préparation et simulation des oraux",
      "Planning personnalisé selon la date du concours",
    ],
    conditions: [
      { voie: "Externe", condition: "Bac ou équivalent reconnu" },
      { voie: "Interne", condition: "2 ans de services effectifs dans la FPT" },
    ],
    duree: "80 à 120 heures",
    format: "Présentiel (Grand-Camp) + distanciel",
    tauxReussite: "87%",
    color: "#4BADD4",
  },
  "redacteur-territorial-guadeloupe": {
    titre: "Rédacteur Territorial",
    sousTitre: "Concours externe et interne",
    categorie: "Catégorie B",
    seoTitle: "Préparation Concours Rédacteur Territorial Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours de rédacteur territorial en Guadeloupe. Culture générale, note de synthèse, entretien jury. Financement CPF. Evolutia Formation, Les Abymes.",
    accroche: "Le concours de rédacteur territorial évalue votre maîtrise de l'expression écrite et votre connaissance du secteur public. Une préparation rigoureuse est indispensable.",
    epreuves: [
      { type: "Écrit", label: "Composition (4h)", desc: "Dissertation sur un sujet de culture générale à portée administrative" },
      { type: "Écrit", label: "Note de synthèse (3h)", desc: "Exploitation d'un dossier documentaire pour rédiger une note" },
      { type: "Oral", label: "Entretien jury (25 min)", desc: "Conversation sur le parcours, les motivations et un sujet d'actualité" },
    ],
    programme: [
      "Culture générale : actualité nationale et locale (Guadeloupe)",
      "Méthodologie de la dissertation et de la note de synthèse",
      "Institutions et droit public des collectivités",
      "Entraînements intensifs écrits corrigés",
      "Coaching oral — présentation, posture, gestion du stress",
      "Suivi personnalisé par formateur référent",
    ],
    conditions: [
      { voie: "Externe", condition: "Bac ou équivalent reconnu" },
      { voie: "Interne", condition: "2 ans de services effectifs dans la FPT" },
    ],
    duree: "80 à 120 heures",
    format: "Présentiel (Grand-Camp) + distanciel",
    tauxReussite: "85%",
    color: "#1B3A6B",
  },
  "redacteur-principal-guadeloupe": {
    titre: "Rédacteur Principal",
    sousTitre: "Examen professionnel interne",
    categorie: "Catégorie B+",
    seoTitle: "Préparation Examen Rédacteur Principal Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez l'examen professionnel de rédacteur principal en Guadeloupe. Dossier RAEP, entretien jury. Evolutia Formation, Les Abymes. Financement CPF.",
    accroche: "L'examen de rédacteur principal permet d'accéder au grade supérieur via la valorisation de votre expérience. La constitution du dossier RAEP est cruciale.",
    epreuves: [
      { type: "Dossier", label: "RAEP (Reconnaissance des Acquis)", desc: "Dossier présentant votre parcours professionnel et vos compétences" },
      { type: "Oral", label: "Entretien jury (30 min)", desc: "Échange approfondi sur le dossier RAEP et le projet professionnel" },
    ],
    programme: [
      "Méthodologie de construction du dossier RAEP",
      "Mise en valeur des compétences professionnelles",
      "Rédaction administrative et argumentation",
      "Simulation d'entretien sur le dossier RAEP",
      "Relecture et amélioration du dossier",
      "Préparation aux questions du jury",
    ],
    conditions: [
      { voie: "Interne", condition: "Rédacteur territorial avec ancienneté requise dans le grade" },
    ],
    duree: "40 à 60 heures",
    format: "Présentiel (Grand-Camp) + accompagnement individuel",
    tauxReussite: "88%",
    color: "#F5A623",
  },
  "agent-de-maitrise-guadeloupe": {
    titre: "Agent de Maîtrise",
    sousTitre: "Concours externe et interne",
    categorie: "Catégorie C+",
    seoTitle: "Préparation Concours Agent de Maîtrise Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours d'agent de maîtrise territorial en Guadeloupe. Épreuves pratiques et mises en situation. Evolutia Formation, Les Abymes.",
    accroche: "L'agent de maîtrise supervise les équipes techniques des collectivités. Le concours évalue vos capacités à diriger et résoudre des problèmes concrets sur le terrain.",
    epreuves: [
      { type: "Pratique", label: "Épreuve technique (3h)", desc: "Réalisation pratique dans la spécialité ou mise en situation professionnelle" },
      { type: "Oral", label: "Entretien jury (20 min)", desc: "Échange sur les compétences techniques et managériales" },
    ],
    programme: [
      "Connaissances techniques par spécialité",
      "Management d'équipe et organisation du travail",
      "Sécurité au travail et réglementation",
      "Entraînements sur mises en situation pratiques",
      "Gestion de projet et reporting",
      "Préparation à l'entretien oral",
    ],
    conditions: [
      { voie: "Externe", condition: "CAP/BEP ou équivalent dans la spécialité" },
      { voie: "Interne", condition: "2 ans de services effectifs en catégorie C" },
    ],
    duree: "60 à 80 heures",
    format: "Présentiel (Grand-Camp) + ateliers pratiques",
    tauxReussite: "84%",
    color: "#4BADD4",
  },
  "ingenieur-chef-guadeloupe": {
    titre: "Ingénieur Chef de Classe Normale",
    sousTitre: "Concours de promotion interne",
    categorie: "Catégorie A+",
    seoTitle: "Préparation Concours Ingénieur Chef Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours d'ingénieur chef territorial en Guadeloupe. Leadership, stratégie, entretien jury. Evolutia Formation, Les Abymes.",
    accroche: "Accéder au grade d'ingénieur chef exige une vision stratégique et des capacités de leadership éprouvées. Notre préparation vous positionne comme un cadre de haut niveau.",
    epreuves: [
      { type: "Écrit", label: "Note de synthèse (5h)", desc: "Analyse d'un dossier complexe avec proposition de solutions" },
      { type: "Oral", label: "Grand oral (45 min)", desc: "Présentation d'un projet, échange sur la vision stratégique et le management" },
    ],
    programme: [
      "Gouvernance des collectivités et enjeux stratégiques",
      "Management public et conduite du changement",
      "Politiques publiques locales (focus Guadeloupe)",
      "Préparation au grand oral — prise de parole en public",
      "Études de cas et résolution de problèmes complexes",
      "Coaching individuel sur le positionnement cadre",
    ],
    conditions: [
      { voie: "Interne", condition: "Ingénieur territorial avec 5 ans d'ancienneté dans le grade" },
    ],
    duree: "60 à 80 heures",
    format: "Présentiel (Grand-Camp) + coaching individuel",
    tauxReussite: "79%",
    color: "#1B3A6B",
  },
  "ingenieur-territorial-externe-guadeloupe": {
    titre: "Ingénieur Territorial — Voie Externe",
    sousTitre: "Concours externe pour diplômés",
    categorie: "Catégorie A",
    seoTitle: "Concours Ingénieur Territorial Externe Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours externe d'ingénieur territorial en Guadeloupe. Formation pour diplômés Bac+3. Financement CPF. Evolutia Formation, Les Abymes.",
    accroche: "Vous êtes diplômé(e) et souhaitez intégrer la fonction publique territoriale ? La voie externe est votre chemin. Notre formation vous prépare à toutes les étapes du concours.",
    epreuves: [
      { type: "Écrit", label: "Note de synthèse (4h)", desc: "Analyse d'un dossier documentaire dans la spécialité" },
      { type: "Écrit", label: "Épreuve technique (4h)", desc: "Résolution d'un cas pratique dans la spécialité du concours" },
      { type: "Oral", label: "Entretien de recrutement (30 min)", desc: "Échange sur le projet professionnel et les motivations" },
    ],
    programme: [
      "Connaissance de la FPT et des collectivités guadeloupéennes",
      "Méthodologie note de synthèse pour candidats sans expérience admin",
      "Révision des fondamentaux techniques par spécialité",
      "Entraînements intensifs écrits corrigés",
      "Construction du projet professionnel territorial",
      "Simulations d'entretien — premier contact avec un jury",
    ],
    conditions: [
      { voie: "Externe", condition: "Bac+3 ou titre reconnu équivalent dans la spécialité" },
    ],
    duree: "100 à 140 heures",
    format: "Présentiel (Grand-Camp) + distanciel",
    tauxReussite: "83%",
    color: "#4BADD4",
  },
  "preparation-oraux-concours-guadeloupe": {
    titre: "Préparation aux Oraux",
    sousTitre: "Toutes catégories — tous concours",
    categorie: "Toutes catégories",
    seoTitle: "Préparation Oraux Concours Territoriaux Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez les épreuves orales des concours territoriaux en Guadeloupe. Simulations de jury, coaching posture et prise de parole. Evolutia Formation, Les Abymes.",
    accroche: "L'oral est souvent l'épreuve décisive. Nos sessions intensives de simulation transforment votre stress en confiance et votre discours en conviction.",
    epreuves: [
      { type: "Simulation", label: "Jury blanc en conditions réelles", desc: "Entretien filmé reproduisant les conditions exactes du concours visé" },
      { type: "Débriefing", label: "Analyse vidéo détaillée", desc: "Retour point par point sur le fond, la forme, la posture et le discours" },
      { type: "Coaching", label: "Séances individuelles de coaching", desc: "Travail sur les points faibles identifiés lors des simulations" },
    ],
    programme: [
      "Techniques de prise de parole et gestion du stress",
      "Construction d'une présentation percutante",
      "Réponses aux questions difficiles du jury",
      "Langage corporel et posture professionnelle",
      "Simulations filmées — jury blanc par concours visé",
      "Séances de débriefing et de progression individualisée",
    ],
    conditions: [
      { voie: "Tous profils", condition: "Candidat(e) admissible à un concours territorial (toutes catégories)" },
    ],
    duree: "20 à 40 heures",
    format: "Présentiel exclusivement (Grand-Camp)",
    tauxReussite: "91%",
    color: "#F5A623",
  },
};

export async function generateStaticParams() {
  return Object.keys(FORMATIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = FORMATIONS[slug];
  if (!f) return {};
  return { title: f.seoTitle, description: f.seoDesc };
}

const OTHER_FORMATIONS = [
  { label: "Ingénieur Territorial", slug: "ingenieur-territorial-guadeloupe" },
  { label: "Technicien Territorial", slug: "technicien-territorial-guadeloupe" },
  { label: "Rédacteur Territorial", slug: "redacteur-territorial-guadeloupe" },
  { label: "Rédacteur Principal", slug: "redacteur-principal-guadeloupe" },
  { label: "Agent de Maîtrise", slug: "agent-de-maitrise-guadeloupe" },
  { label: "Ingénieur Chef", slug: "ingenieur-chef-guadeloupe" },
  { label: "Ingénieur Externe", slug: "ingenieur-territorial-externe-guadeloupe" },
  { label: "Préparation Oraux", slug: "preparation-oraux-concours-guadeloupe" },
];

export default async function FormationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = FORMATIONS[slug];
  if (!f) notFound();

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      {/* Navbar */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(27,58,107,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(75,173,212,0.2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/logo-evolutia.png" alt="Évolutia Formation" width={48} height={48} style={{ borderRadius: 8, background: "white", padding: 2 }} priority />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 18, color: "white", lineHeight: 1.1 }}>ÉVOLUTIA</div>
              <div style={{ fontSize: 9, color: "#F5A623", letterSpacing: "0.15em", fontWeight: 600, textTransform: "uppercase" }}>Centre de Formation</div>
            </div>
          </Link>
          <nav style={{ display: "flex", gap: 4, alignItems: "center" }} className="nav-links">
            {([
              ["Formations", "/formations"],
              ["Notre Méthode", "/notre-methode"],
              ["Calendrier", "/calendrier-concours-guadeloupe"],
              ["Témoignages", "/temoignages-laureats"],
              ["Tarifs & CPF", "/financement-tarifs"],
              ["Contact", "/contact"],
            ] as [string, string][]).map(([label, href]) => (
              <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 500, padding: "6px 12px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap" }}>
                {label}
              </Link>
            ))}
            <Link href="/#contact" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap", marginLeft: 8 }}>
              Réserver un entretien
            </Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div style={{ background: "white", borderBottom: "1px solid #D6E4F0", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#5a6f8f" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span>/</span>
          <Link href="/formations" style={{ color: "#5a6f8f", textDecoration: "none" }}>Formations</Link>
          <span>/</span>
          <span style={{ color: "#1B3A6B", fontWeight: 600 }}>{f.titre}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 260px", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.3)", color: "#F5A623", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 100, marginBottom: 20 }}>{f.categorie}</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "white", margin: "0 0 12px 0", lineHeight: 1.15 }}>{f.titre}</h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, margin: "0 0 28px 0" }}>{f.sousTitre}</p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.75, maxWidth: 580, margin: "0 0 36px 0" }}>{f.accroche}</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/#contact" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none" }}>
                Réserver un entretien gratuit
              </Link>
              <Link href="/formations" style={{ background: "transparent", color: "white", fontWeight: 600, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none", border: "2px solid rgba(255,255,255,0.3)" }}>
                Toutes les formations
              </Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 16, padding: "28px 24px" }}>
            <div style={{ color: "#4BADD4", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>En un coup d&apos;œil</div>
            {([
              { label: "Taux de réussite", val: f.tauxReussite, highlight: true },
              { label: "Durée", val: f.duree, highlight: false },
              { label: "Format", val: f.format, highlight: false },
              { label: "Financement", val: "CPF éligible", highlight: false },
            ] as {label:string;val:string;highlight:boolean}[]).map((row, i) => (
              <div key={i} style={{ padding: "12px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 3 }}>{row.label}</div>
                <div style={{ color: row.highlight ? "#F5A623" : "white", fontSize: row.highlight ? 22 : 14, fontWeight: row.highlight ? 800 : 500 }}>{row.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 40, alignItems: "start" }}>
        <div>
          {/* Épreuves */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 24px 0" }}>Les épreuves du concours</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {f.epreuves.map((e, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderLeft: "4px solid #4BADD4", borderRadius: 12, padding: "18px 22px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 16, alignItems: "start" }}>
                  <div style={{ background: "#EEF5FF", color: "#1B3A6B", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6, whiteSpace: "nowrap" }}>{e.type}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "#1B3A6B", marginBottom: 4 }}>{e.label}</div>
                    <div style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.6 }}>{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Programme */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 24px 0" }}>Notre programme de préparation</h2>
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, padding: "28px 32px" }}>
              {f.programme.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < f.programme.length - 1 ? 14 : 0 }}>
                  <div style={{ width: 26, height: 26, background: "linear-gradient(135deg, #1B3A6B, #4BADD4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span style={{ fontSize: 15, color: "#3a4f6a", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Conditions */}
          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 24px 0" }}>Conditions d&apos;accès au concours</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {f.conditions.map((c, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ background: "#F5A623", color: "white", fontWeight: 800, fontSize: 12, padding: "4px 12px", borderRadius: 6, whiteSpace: "nowrap", flexShrink: 0 }}>{c.voie}</div>
                  <span style={{ fontSize: 15, color: "#3a4f6a" }}>{c.condition}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "linear-gradient(135deg, #1B3A6B, #2a4f8f)", borderRadius: 16, padding: "28px 22px" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white", margin: "0 0 12px 0" }}>Intéressé(e) par cette formation ?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, margin: "0 0 20px 0" }}>Réservez un entretien gratuit pour évaluer votre profil et construire votre plan de préparation.</p>
            <Link href="/#contact" style={{ display: "block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 14, padding: "14px", borderRadius: 8, textDecoration: "none", textAlign: "center" }}>
              Réserver un entretien gratuit
            </Link>
            <div style={{ marginTop: 12, textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: 12 }}>0690 44 73 60</div>
          </div>

          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "18px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
              <div style={{ width: 34, height: 34, background: "#EEF5FF", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B" }}>Financement CPF</div>
            </div>
            <p style={{ fontSize: 13, color: "#5a6f8f", lineHeight: 1.6, margin: 0 }}>Formation éligible au Compte Personnel de Formation. Financement possible sans avance de frais.</p>
          </div>

          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "18px" }}>
            <div style={{ color: "#5a6f8f", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Autres formations</div>
            {OTHER_FORMATIONS.filter(o => o.slug !== slug).slice(0, 5).map(o => (
              <Link key={o.slug} href={`/formations/${o.slug}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #EEF5FF", textDecoration: "none", color: "#1B3A6B", fontSize: 13, fontWeight: 500 }}>
                {o.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#08111E", padding: "40px 24px 24px", borderTop: "1px solid rgba(75,173,212,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/logo-evolutia.png" alt="Évolutia" width={36} height={36} style={{ borderRadius: 6, background: "white", padding: 2 }} />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 15, color: "white" }}>ÉVOLUTIA</div>
              <div style={{ fontSize: 8, color: "#F5A623", letterSpacing: "0.12em" }}>CENTRE DE FORMATION</div>
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>© 2025 Evolutia Formation. Tous droits réservés.</div>
          <div style={{ display: "flex", gap: 20 }}>
            {([["Accueil", "/"], ["Formations", "/formations"], ["Contact", "/#contact"]] as [string,string][]).map(([label, href]) => (
              <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        @media (max-width: 900px) {
          .formation-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  );
}
