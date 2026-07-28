"use client";

import { useState } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { FORMATIONS_LIST } from "./formations/data"
import { CONTACT_FORM_URL } from "./config"

const NAV_LINKS = [
  { label: "Formations", href: "/formations" },
  { label: "Notre Méthode", href: "/notre-methode" },
  { label: "Calendrier", href: "/calendrier-concours-guadeloupe" },
  { label: "Témoignages", href: "/temoignages-laureats" },
  { label: "Tarifs & CPF", href: "/financement-tarifs" },
  { label: "Contact", href: "/contact" },
  { label: "Ressources", href: "/ressources" },
];


const PILIERS = [
  {
    num: "01",
    titre: "Programme sur mesure",
    desc: "Chaque formation est adaptée au profil du candidat — externe, interne, examen professionnel. Contenus ciblés sur les épreuves réelles.",
  },
  {
    num: "02",
    titre: "Formateurs experts",
    desc: "Nos formateurs sont des professionnels de la fonction publique territoriale en Guadeloupe, avec une connaissance des jurys locaux et nationaux.",
  },
  {
    num: "03",
    titre: "Suivi individuel",
    desc: "Chaque candidat bénéficie d'un suivi personnalisé, de corrections détaillées et de séances de simulation d'oral régulières.",
  },
];

const TEMOIGNAGES = [
  {
    nom: "Dada 971",
    concours: "Décembre 2025",
    texte: "Une équipe de grande qualité, toujours présente et à l'écoute, avec un suivi adapté à chaque parcours. Tout est mis en œuvre pour nous accompagner efficacement vers la réussite des concours.",
    initial: "D",
    note: 5,
  },
  {
    nom: "William GERMAIN",
    concours: "Juillet 2025",
    texte: "Des cours interactifs, évolutifs, adaptés aux objectifs de chacun.",
    initial: "W",
    note: 5,
  },
  {
    nom: "manuela AIME",
    concours: "Décembre 2024",
    texte: "Un regard expérimenté. Une méthode pointue efficace adaptée à chacun. La bienveillance et les encouragements à chaque étape. Un combo gagnant pour aborder les concours.",
    initial: "M",
    note: 5,
  },
  {
    nom: "Isabelle Gabriel",
    concours: "Décembre 2024",
    texte: "Très bel espace de formation. Formation de niveau et efficace pour ceux ou celles qui souhaitent passer un concours de la fonction publique. Vives recommandations.",
    initial: "I",
    note: 5,
  },
  {
    nom: "Anael Ssosse",
    concours: "Octobre 2024",
    texte: "Formation bien faite pour mener à la réussite aux concours de la territoriale. Je l'ai faite pour deux concours différents, couronnés de succès à chaque fois. Merci Tony !",
    initial: "A",
    note: 5,
  },
  {
    nom: "To B",
    concours: "Octobre 2024",
    texte: "Une assistance et un accompagnement sans pareil. Avec Évolutia c'est à coup sûr, la réussite qui sera au bout (même si ils vous bousculent un peu et c'est tant mieux).",
    initial: "T",
    note: 5,
  },
];

const CONCOURS = [
  { concours: "Ingénieur Territorial", session: "16 juin 2027", inscription: "8 déc. 2026 → 13 jan. 2027", format: "Écrit + Oral", statut: "À venir" },
  { concours: "Technicien Territorial", session: "Prochaine session à confirmer", inscription: "CDG 971 — à confirmer", format: "Écrit + Oral", statut: "À confirmer" },
  { concours: "Rédacteur Territorial", session: "14 oct. 2027", inscription: "2 fév. 2027 → 10 mars 2027", format: "Écrit + Oral", statut: "À venir" },
  { concours: "Agent de Maîtrise", session: "28 jan. 2027", inscription: "1er sept. → 7 oct. 2026", format: "Pratique + Oral", statut: "Inscriptions bientôt" },
  { concours: "Ingénieur en Chef", session: "7 sept. 2026", inscription: "Clôturées (session 2026)", format: "Écrit + Oral", statut: "Clôturé" },
  { concours: "Rédacteur Principal (examen)", session: "24 sept. 2026", inscription: "Clôturées (session 2026)", format: "RAEP + Oral", statut: "Clôturé" },
];

const CATEGORY_ORDER = ["Catégorie A", "Catégorie A+", "Catégorie B", "Catégorie C", "Toutes catégories"];
const CATEGORY_ACCENT: Record<string, string> = {
  "Catégorie A": "#1B3A6B",
  "Catégorie A+": "#122852",
  "Catégorie B": "#4BADD4",
  "Catégorie C": "#F5A623",
  "Toutes catégories": "#5a6f8f",
};

const INFOS_PRATIQUES = [
  {
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: "Grand-Camp, Les Abymes",
  },
  {
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    label: "0690 44 73 60",
  },
  {
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: "contact@evolutiaformation.fr",
  },
  {
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    label: "Lun–Ven 15h30–18h30",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [showAllFormations, setShowAllFormations] = useState(false);
  const carouselPrev = () => setCarouselIdx(i => (i - 1 + TEMOIGNAGES.length) % TEMOIGNAGES.length);
  const carouselNext = () => setCarouselIdx(i => (i + 1) % TEMOIGNAGES.length);

  const formationsToShow = showAllFormations ? FORMATIONS_LIST : FORMATIONS_LIST.slice(0, 9);

  // Group visible formations by category
  const groupedFormations: Record<string, typeof FORMATIONS_LIST> = {};
  formationsToShow.forEach(f => {
    if (!groupedFormations[f.categorie]) groupedFormations[f.categorie] = [];
    groupedFormations[f.categorie].push(f);
  });

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      {/* ─── NAVBAR ─── */}
      <NavBar />

      {/* ─── HERO ─── */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #122852 50%, #0d1e3d 100%)", padding: "96px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "rgba(75,173,212,0.08)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, background: "rgba(245,166,35,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          <div style={{ maxWidth: 680 }}>
            <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, background: "#F5A623", borderRadius: "50%" }} />
              <span style={{ color: "#F5A623", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>Centre de formation — concours territoriaux</span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: 20, margin: "0 0 20px 0" }}>
              Décrochez votre concours<br />
              <span style={{ color: "#4BADD4" }}>territorial</span> en Guadeloupe et en France
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 36, margin: "0 0 36px 0", maxWidth: 560 }}>
              Evolutia Formation vous prépare aux concours de la fonction publique territoriale avec une méthode éprouvée, des formateurs experts et un suivi personnalisé.
            </p>

            {/* Stats highlight */}
            <div className="hero-stats" style={{ display: "inline-flex", gap: 24, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 12, padding: "16px 24px", marginBottom: 40 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#F5A623", fontFamily: "monospace" }}>100%</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>réussite Agent de Maîtrise 2026</div>
              </div>
              <div className="hero-stat-sep" style={{ width: 1, background: "rgba(255,255,255,0.15)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#4BADD4", fontFamily: "monospace" }}>{FORMATIONS_LIST.length}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>formations disponibles</div>
              </div>
              <div className="hero-stat-sep" style={{ width: 1, background: "rgba(255,255,255,0.15)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#F5A623", fontFamily: "monospace" }}>4,7★</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>avis Google</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#contact" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none", transition: "all 0.2s", display: "inline-block" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = "#D4901A"; (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = "#F5A623"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>
                Réserver un entretien gratuit
              </a>
              <a href="#formations" style={{ background: "transparent", color: "white", fontWeight: 600, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none", border: "2px solid rgba(255,255,255,0.3)", transition: "all 0.2s", display: "inline-block" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "white"; (e.target as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.target as HTMLElement).style.background = "transparent"; }}>
                Voir les formations
              </a>
            </div>
          </div>

          {/* Hero card */}
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(75,173,212,0.2)", borderRadius: 16, padding: "28px 24px", minWidth: 220, flexShrink: 0 }} className="hero-card">
            <div style={{ color: "#4BADD4", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Infos pratiques</div>
            {INFOS_PRATIQUES.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <span style={{ color: "#4BADD4", flexShrink: 0, marginTop: 1 }}>{item.svg}</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.4 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BANDEAU RÉASSURANCE ─── */}
      <section style={{ background: "white", borderBottom: "1px solid #D6E4F0", padding: "0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            { val: "8/15", label: "lauréats Ingénieur 2026", color: "#F5A623" },
            { val: String(FORMATIONS_LIST.length), label: "Formations disponibles", color: "#4BADD4" },
            { val: "15", label: "Avis Google (4,7★)", color: "#1B3A6B" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "32px 24px", textAlign: "center", borderRight: i < 2 ? "1px solid #D6E4F0" : "none" }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: s.color, fontFamily: "monospace", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 13, color: "#5a6f8f", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FORMATIONS ─── */}
      <section id="formations" style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Nos programmes</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 16px 0" }}>Une préparation pour chaque concours du calendrier CDG 971</h2>
            <p style={{ color: "#5a6f8f", fontSize: 17, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>De catégorie A à C, Evolutia prépare aux concours de la FPT passés en Guadeloupe comme dans l'Hexagone.</p>
          </div>

          {CATEGORY_ORDER.filter(cat => groupedFormations[cat]).map(cat => (
            <div key={cat} style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 4, height: 24, background: CATEGORY_ACCENT[cat] ?? "#4BADD4", borderRadius: 2 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: CATEGORY_ACCENT[cat] ?? "#4BADD4", letterSpacing: "0.06em", textTransform: "uppercase" }}>{cat}</span>
                <div style={{ flex: 1, height: 1, background: "#E8EEF7" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 16 }}>
                {groupedFormations[cat].map((f, i) => (
                  <a key={i} href={`/formations/${f.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <div style={{ background: "#F8FAFF", border: "1px solid #D6E4F0", borderRadius: 14, padding: "22px 20px", height: "100%", transition: "all 0.2s", cursor: "pointer" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = CATEGORY_ACCENT[cat] ?? "#4BADD4"; el.style.background = "white"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 6px 24px rgba(27,58,107,0.1)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#D6E4F0"; el.style.background = "#F8FAFF"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
                      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                        {f.nouveau && <div style={{ display: "inline-block", background: "#FFF3DC", color: "#B8700A", fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 4, letterSpacing: "0.05em" }}>NOUVEAU</div>}
                      </div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#1B3A6B", margin: "0 0 8px 0", lineHeight: 1.3 }}>{f.titre}</h3>
                      <p style={{ fontSize: 13, color: "#5a6f8f", lineHeight: 1.6, margin: "0 0 14px 0" }}>{f.desc}</p>
                      <span style={{ color: CATEGORY_ACCENT[cat] ?? "#4BADD4", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
                        En savoir plus
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}

          {!showAllFormations && FORMATIONS_LIST.length > 9 && (
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button onClick={() => setShowAllFormations(true)} style={{ background: "white", border: "1.5px solid #1B3A6B", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 10, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1B3A6B"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "#1B3A6B"; }}>
                Voir les {FORMATIONS_LIST.length - 9} autres formations
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── NOTRE MÉTHODE ─── */}
      <section id="methode" style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "#F5A623", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Notre approche</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "white", margin: "0 0 16px 0" }}>La méthode Evolutia</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>Une préparation structurée pour les concours locaux CDG 971 et les concours nationaux CNFPT, conçue pour maximiser vos chances.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {PILIERS.map((p, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(75,173,212,0.2)", borderRadius: 16, padding: "36px 28px" }}>
                <div style={{ fontFamily: "monospace", fontSize: 42, fontWeight: 900, color: "rgba(75,173,212,0.25)", marginBottom: 16, lineHeight: 1 }}>{p.num}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "white", margin: "0 0 14px 0" }}>{p.titre}</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TÉMOIGNAGES CAROUSEL ─── */}
      <section id="temoignages" style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Ils ont réussi</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>Nos lauréats témoignent</h2>
            {/* Note Google */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F8FAFF", border: "1px solid #D6E4F0", borderRadius: 100, padding: "6px 16px", marginTop: 12 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1B3A6B" }}>4,7</span>
              <div style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, s) => <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#F5A623"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
              </div>
              <span style={{ fontSize: 12, color: "#5a6f8f" }}>sur Google</span>
            </div>
          </div>

          {/* Carousel card */}
          <div style={{ position: "relative" }}>
            <div style={{ background: "#F8FAFF", border: "1px solid #D6E4F0", borderRadius: 20, padding: "40px 48px", minHeight: 220 }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, s) => <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#F5A623"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
              </div>
              <p style={{ fontSize: 17, color: "#3a4f6a", lineHeight: 1.8, margin: "0 0 28px 0", fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
                &ldquo;{TEMOIGNAGES[carouselIdx].texte}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #1B3A6B, #4BADD4)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{TEMOIGNAGES[carouselIdx].initial}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#1B3A6B" }}>{TEMOIGNAGES[carouselIdx].nom}</div>
                  <div style={{ fontSize: 13, color: "#5a6f8f" }}>{TEMOIGNAGES[carouselIdx].concours}</div>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <button onClick={carouselPrev} aria-label="Précédent" className="carousel-arrow-l" style={{ position: "absolute", left: -24, top: "50%", transform: "translateY(-50%)", width: 48, height: 48, borderRadius: "50%", background: "white", border: "1px solid #D6E4F0", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#1B3A6B", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1B3A6B"; (e.currentTarget as HTMLElement).style.color = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "#1B3A6B"; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={carouselNext} aria-label="Suivant" className="carousel-arrow-r" style={{ position: "absolute", right: -24, top: "50%", transform: "translateY(-50%)", width: 48, height: 48, borderRadius: "50%", background: "white", border: "1px solid #D6E4F0", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#1B3A6B", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1B3A6B"; (e.currentTarget as HTMLElement).style.color = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "#1B3A6B"; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
            {TEMOIGNAGES.map((_, i) => (
              <button key={i} onClick={() => setCarouselIdx(i)} aria-label={`Avis ${i + 1}`} style={{ width: i === carouselIdx ? 24 : 8, height: 8, borderRadius: 100, background: i === carouselIdx ? "#1B3A6B" : "#D6E4F0", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
            ))}
          </div>

          {/* Compteur + lien Google */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "#5a6f8f", fontSize: 13 }}>Avis {carouselIdx + 1} sur {TEMOIGNAGES.length}</span>
            <a href="https://search.google.com/local/reviews?placeid=ChIJX83z1iJHE4wRXyQgrNUeR60" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", border: "1px solid #D6E4F0", borderRadius: 8, padding: "10px 18px", textDecoration: "none", color: "#1B3A6B", fontSize: 13, fontWeight: 600, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1B3A6B"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D6E4F0"; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Voir tous nos avis Google
            </a>
          </div>
        </div>
      </section>

      {/* ─── CALENDRIER CONCOURS ─── */}
      <section id="calendrier" style={{ padding: "80px 24px", background: "#F8FAFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Prochaines sessions</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 16px 0" }}>Calendrier des concours 2026–2027</h2>
            <p style={{ color: "#5a6f8f", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>Consultez les prochaines dates et inscrivez-vous avant la clôture des dossiers.</p>
          </div>

          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #D6E4F0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#1B3A6B" }}>
                  {["Concours", "Épreuves", "Inscriptions", "Statut"].map(h => (
                    <th key={h} style={{ padding: "16px 20px", textAlign: "left", color: "white", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CONCOURS.map((c, i) => {
                  const statutColors: Record<string, {bg:string,text:string}> = {
                    "À venir": {bg:"#EEF5FF", text:"#1B3A6B"},
                    "Inscriptions bientôt": {bg:"#FFF7E6", text:"#d97706"},
                    "Clôturé": {bg:"#F3F4F6", text:"#6b7280"},
                    "À confirmer": {bg:"#F0FDF4", text:"#16a34a"},
                  };
                  const sc = statutColors[c.statut] ?? {bg:"#EEF5FF", text:"#1B3A6B"};
                  return (
                    <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#F8FAFF", borderBottom: "1px solid #D6E4F0" }}>
                      <td style={{ padding: "16px 20px", fontWeight: 600, color: "#1B3A6B", fontSize: 14 }}>{c.concours}</td>
                      <td style={{ padding: "16px 20px", color: "#3a4f6a", fontSize: 14 }}>{c.session}</td>
                      <td style={{ padding: "16px 20px", color: "#5a6f8f", fontSize: 13 }}>{c.inscription}</td>
                      <td style={{ padding: "16px 20px" }}>
                        <span style={{ background: sc.bg, color: sc.text, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6 }}>{c.statut}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a href="/calendrier-concours-guadeloupe" style={{ color: "#4BADD4", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              Voir le calendrier complet → CDG 971 Guadeloupe
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINANCEMENT CPF ─── */}
      <section id="financement" style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Financement</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 20px 0", lineHeight: 1.2 }}>Formations finançables à 100% via le CPF</h2>
            <p style={{ color: "#5a6f8f", fontSize: 16, lineHeight: 1.8, margin: "0 0 28px 0" }}>
              Nos formations sont éligibles au Compte Personnel de Formation. Vous pouvez financer tout ou partie de votre préparation sans avancer de frais.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {["Éligible CPF — aucune avance de frais", "Prise en charge OPCO pour les salariés", "Tarifs adaptés aux demandeurs d'emploi", "Facilités de paiement disponibles"].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 22, height: 22, background: "#4BADD4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span style={{ fontSize: 15, color: "#3a4f6a", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" style={{ background: "#1B3A6B", color: "white", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none", display: "inline-block", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = "#122852"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = "#1B3A6B"; }}>
              En savoir plus sur le financement
            </a>
          </div>

          <div style={{ background: "#F8FAFF", borderRadius: 20, padding: "40px 36px", border: "1px solid #D6E4F0" }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ width: 64, height: 64, background: "linear-gradient(135deg, #1B3A6B, #4BADD4)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#1B3A6B", margin: "0 0 8px 0", fontWeight: 700 }}>Simulez votre financement</h3>
              <p style={{ color: "#5a6f8f", fontSize: 14, margin: 0 }}>Vérifiez votre solde CPF sur moncompteformation.gouv.fr</p>
            </div>
            {[
              { label: "Solde CPF moyen disponible", val: "~1 500 €" },
              { label: "Nos formations à partir de", val: "Sur devis" },
              { label: "Reste à charge possible", val: "0 € avec CPF" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: i < 2 ? "1px solid #D6E4F0" : "none" }}>
                <span style={{ fontSize: 14, color: "#5a6f8f" }}>{row.label}</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#1B3A6B" }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL + FORMULAIRE ─── */}
      <section id="contact" style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #122852 100%)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#F5A623", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Passez à l'action</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "white", margin: "0 0 16px 0", lineHeight: 1.2 }}>
            Prêt à décrocher votre concours ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, lineHeight: 1.7, margin: "0 0 40px 0" }}>
            Réservez un entretien gratuit avec notre équipe. Nous analysons votre profil et vous orientons vers la meilleure préparation.
          </p>

          <div style={{ maxWidth: 560, margin: "0 auto", background: "white", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}>
            <iframe
              src={CONTACT_FORM_URL}
              id="inline-n4T5zoDr0V95hQloBneb"
              title="Réserver un entretien gratuit — Evolutia Formation"
              style={{ width: "100%", border: "none", minHeight: 640, display: "block" }}
            />
          </div>
          <script src="https://link.siboard-consulting.fr/js/form_embed.js" async />
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: "16px 0 0" }}>Réponse garantie sous 24h ouvrées. Aucun engagement.</p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <Footer />

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .hero-card { display: none; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
