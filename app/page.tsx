"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Formations", href: "#formations" },
  { label: "Notre Méthode", href: "#methode" },
  { label: "Calendrier", href: "#calendrier" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Tarifs & CPF", href: "#financement" },
  { label: "Contact", href: "#contact" },
];

const FORMATIONS = [
  { titre: "Ingénieur Territorial", cat: "Catégorie A", desc: "Concours externe et interne, épreuves techniques et oraux.", slug: "ingenieur-territorial" },
  { titre: "Technicien Territorial", cat: "Catégorie B", desc: "Maîtrise des épreuves écrites et préparation aux oraux.", slug: "technicien-territorial" },
  { titre: "Rédacteur Territorial", cat: "Catégorie B", desc: "Culture générale, note de synthèse, entretien jury.", slug: "redacteur-territorial" },
  { titre: "Rédacteur Principal", cat: "Catégorie B+", desc: "Examen professionnel interne, dossier RAEP.", slug: "redacteur-principal" },
  { titre: "Agent de Maîtrise", cat: "Catégorie C+", desc: "Épreuves pratiques et mise en situation professionnelle.", slug: "agent-de-maitrise" },
  { titre: "Ingénieur Chef", cat: "Catégorie A+", desc: "Concours d'accès au grade supérieur, leadership.", slug: "ingenieur-chef" },
  { titre: "Ingénieur Externe", cat: "Catégorie A", desc: "Voie externe pour les candidats civils Bac+3.", slug: "ingenieur-externe" },
  { titre: "Préparation Oraux", cat: "Toutes catégories", desc: "Entraînement intensif aux épreuves d'admission, simulation jury.", slug: "preparation-oraux" },
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
    desc: "Nos formateurs sont des professionnels de la fonction publique territoriale en Guadeloupe, avec une connaissance précise des jury locaux.",
  },
  {
    num: "03",
    titre: "Suivi individuel",
    desc: "Chaque candidat bénéficie d'un suivi personnalisé, de corrections détaillées et de séances de simulation d'oral régulières.",
  },
];

const TEMOIGNAGES = [
  {
    nom: "Marie-Claire L.",
    concours: "Ingénieur Territorial — 2023",
    texte: "Grâce à Evolutia, j'ai réussi mon concours du premier coup. La méthode est rigoureuse et les formateurs disponibles. Je recommande vivement !",
    initial: "M",
  },
  {
    nom: "Jean-Philippe A.",
    concours: "Rédacteur Territorial — 2023",
    texte: "La préparation aux oraux a fait toute la différence. Les simulations de jury m'ont permis d'arriver en confiance le jour J.",
    initial: "J",
  },
  {
    nom: "Sandra B.",
    concours: "Technicien Territorial — 2022",
    texte: "Un centre sérieux, proche des réalités guadeloupéennes. Les contenus sont précis, adaptés aux concours de la CDG Guadeloupe.",
    initial: "S",
  },
];

const CONCOURS = [
  { concours: "Ingénieur Territorial", session: "Printemps 2025", inscription: "Janv. – Mars 2025", format: "Écrit + Oral" },
  { concours: "Technicien Territorial", session: "Automne 2025", inscription: "Avr. – Juin 2025", format: "Écrit + Oral" },
  { concours: "Rédacteur Territorial", session: "Printemps 2025", inscription: "Janv. – Fév. 2025", format: "Écrit + Oral" },
  { concours: "Agent de Maîtrise", session: "Été 2025", inscription: "Mars – Mai 2025", format: "Pratique + Oral" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      {/* ─── NAVBAR ─── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(27,58,107,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(75,173,212,0.2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{ width: 42, height: 42, background: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontWeight: 800, color: "#1B3A6B", fontSize: 20 }}>
              É
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 18, color: "white", lineHeight: 1.1 }}>ÉVOLUTIA</div>
              <div style={{ fontSize: 9, color: "#F5A623", letterSpacing: "0.15em", fontWeight: 600, textTransform: "uppercase" }}>Centre de Formation</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden-mobile">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 13, fontWeight: 500, padding: "8px 12px", borderRadius: 6, transition: "all 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "white"; (e.target as HTMLElement).style.background = "rgba(75,173,212,0.15)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)"; (e.target as HTMLElement).style.background = "transparent"; }}>
                {l.label}
              </a>
            ))}
            <a href="#contact" style={{ marginLeft: 8, background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 8, textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = "#D4901A"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = "#F5A623"; }}>
              Réserver un entretien
            </a>
          </nav>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }} className="show-mobile" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "#122852", padding: "12px 24px 20px" }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ display: "block", color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: 15, fontWeight: 500, padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", marginTop: 16, background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "14px 20px", borderRadius: 8, textDecoration: "none", textAlign: "center" }}>
              Réserver un entretien
            </a>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #122852 50%, #0d1e3d 100%)", padding: "96px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "rgba(75,173,212,0.08)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, background: "rgba(245,166,35,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, background: "#F5A623", borderRadius: "50%" }} />
              <span style={{ color: "#F5A623", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>Centre agréé — Guadeloupe</span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: 20, margin: "0 0 20px 0" }}>
              Décrochez votre concours<br />
              <span style={{ color: "#4BADD4" }}>territorial</span> en Guadeloupe
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 36, margin: "0 0 36px 0", maxWidth: 560 }}>
              Evolutia Formation vous prépare aux concours de la fonction publique territoriale avec une méthode éprouvée, des formateurs experts et un suivi personnalisé.
            </p>

            {/* Stats highlight */}
            <div style={{ display: "inline-flex", gap: 24, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 12, padding: "16px 24px", marginBottom: 40 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#F5A623", fontFamily: "monospace" }}>85%</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>de réussite 2023</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.15)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#4BADD4", fontFamily: "monospace" }}>8</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>formations</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.15)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "white", fontFamily: "monospace" }}>+500</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>lauréats</div>
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
            {[
              { icon: "📍", label: "Grand-Camp, Les Abymes" },
              { icon: "📞", label: "0690 44 73 60" },
              { icon: "✉️", label: "contact@evolutiaformation.fr" },
              { icon: "🕐", label: "Lun–Ven 15h30–18h30" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.4 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BANDEAU RÉASSURANCE ─── */}
      <section style={{ background: "white", borderBottom: "1px solid #D6E4F0", padding: "0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { val: "85%", label: "Taux de réussite 2023", color: "#F5A623" },
            { val: "8", label: "Formations disponibles", color: "#4BADD4" },
            { val: "10+", label: "Ans d'expérience", color: "#1B3A6B" },
            { val: "+500", label: "Lauréats formés", color: "#F5A623" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "32px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid #D6E4F0" : "none" }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: s.color, fontFamily: "monospace", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 13, color: "#5a6f8f", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FORMATIONS ─── */}
      <section id="formations" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Nos programmes</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 16px 0" }}>8 formations pour réussir votre concours</h2>
            <p style={{ color: "#5a6f8f", fontSize: 17, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>De catégorie A à C, Evolutia couvre l'ensemble des concours et examens de la fonction publique territoriale en Guadeloupe.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 20 }}>
            {FORMATIONS.map((f, i) => (
              <a key={i} href={`/formations/${f.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 14, padding: "24px 22px", height: "100%", transition: "all 0.2s", cursor: "pointer" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#4BADD4"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 8px 32px rgba(27,58,107,0.12)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#D6E4F0"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
                  <div style={{ display: "inline-block", background: "#EEF5FF", color: "#1B3A6B", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6, marginBottom: 14, letterSpacing: "0.04em" }}>{f.cat}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1B3A6B", margin: "0 0 10px 0", lineHeight: 1.3 }}>{f.titre}</h3>
                  <p style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.6, margin: "0 0 16px 0" }}>{f.desc}</p>
                  <span style={{ color: "#4BADD4", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                    En savoir plus
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTRE MÉTHODE ─── */}
      <section id="methode" style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "#F5A623", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Notre approche</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "white", margin: "0 0 16px 0" }}>La méthode Evolutia</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>Une préparation structurée, ancrée dans les réalités de la Guadeloupe et conçue pour maximiser vos chances.</p>
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

      {/* ─── TÉMOIGNAGES ─── */}
      <section id="temoignages" style={{ padding: "80px 24px", background: "#F8FAFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Ils ont réussi</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#1B3A6B", margin: 0 }}>Nos lauréats témoignent</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {TEMOIGNAGES.map((t, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, padding: "32px 28px" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                  ))}
                </div>
                <p style={{ fontSize: 15, color: "#3a4f6a", lineHeight: 1.75, margin: "0 0 24px 0", fontStyle: "italic" }}>&ldquo;{t.texte}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #1B3A6B, #4BADD4)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 16, flexShrink: 0 }}>{t.initial}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B" }}>{t.nom}</div>
                    <div style={{ fontSize: 12, color: "#5a6f8f" }}>{t.concours}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALENDRIER CONCOURS ─── */}
      <section id="calendrier" style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Prochaines sessions</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 16px 0" }}>Calendrier des concours 2025</h2>
            <p style={{ color: "#5a6f8f", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>Consultez les prochaines dates et inscrivez-vous avant la clôture des dossiers.</p>
          </div>

          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #D6E4F0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#1B3A6B" }}>
                  {["Concours", "Session", "Inscriptions", "Format"].map(h => (
                    <th key={h} style={{ padding: "16px 20px", textAlign: "left", color: "white", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CONCOURS.map((c, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#F8FAFF", borderBottom: "1px solid #D6E4F0" }}>
                    <td style={{ padding: "16px 20px", fontWeight: 600, color: "#1B3A6B", fontSize: 14 }}>{c.concours}</td>
                    <td style={{ padding: "16px 20px", color: "#3a4f6a", fontSize: 14 }}>{c.session}</td>
                    <td style={{ padding: "16px 20px" }}>
                      <span style={{ background: "#EEF5FF", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 6 }}>{c.inscription}</span>
                    </td>
                    <td style={{ padding: "16px 20px", color: "#5a6f8f", fontSize: 13 }}>{c.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a href="/calendrier-concours-guadeloupe" style={{ color: "#4BADD4", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              Voir le calendrier complet 2025–2027
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINANCEMENT CPF ─── */}
      <section id="financement" style={{ padding: "80px 24px", background: "linear-gradient(135deg, #EEF5FF 0%, #F8FAFF 100%)" }}>
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

          <div style={{ background: "white", borderRadius: 20, padding: "40px 36px", border: "1px solid #D6E4F0", boxShadow: "0 8px 40px rgba(27,58,107,0.08)" }}>
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

          {submitted ? (
            <div style={{ background: "rgba(75,173,212,0.15)", border: "1px solid rgba(75,173,212,0.4)", borderRadius: 12, padding: "32px 24px" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
              <p style={{ color: "white", fontSize: 18, fontWeight: 600, margin: 0 }}>Merci ! Nous vous contactons sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 480, margin: "0 auto" }}>
              <input type="text" placeholder="Votre nom" required style={{ padding: "16px 20px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: 15, outline: "none" }} />
              <input type="tel" placeholder="Votre téléphone" required style={{ padding: "16px 20px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: 15, outline: "none" }} />
              <input type="email" placeholder="Votre email" required value={email} onChange={e => setEmail(e.target.value)} style={{ padding: "16px 20px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: 15, outline: "none" }} />
              <select required style={{ padding: "16px 20px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(27,58,107,0.8)", color: "white", fontSize: 15, outline: "none", cursor: "pointer" }}>
                <option value="">Quel concours vous intéresse ?</option>
                {FORMATIONS.map(f => <option key={f.slug} value={f.slug}>{f.titre}</option>)}
              </select>
              <button type="submit" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 800, fontSize: 16, padding: "18px 32px", borderRadius: 10, border: "none", cursor: "pointer", marginTop: 8, transition: "all 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = "#D4901A"; (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = "#F5A623"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}>
                Réserver mon entretien gratuit
              </button>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0 }}>Réponse garantie sous 24h ouvrées. Aucun engagement.</p>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#08111E", padding: "48px 24px 24px", borderTop: "1px solid rgba(75,173,212,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, background: "#1B3A6B", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontWeight: 800, color: "white", fontSize: 18 }}>É</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 16, color: "white" }}>ÉVOLUTIA</div>
                  <div style={{ fontSize: 9, color: "#F5A623", letterSpacing: "0.12em" }}>CENTRE DE FORMATION</div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.7, maxWidth: 260, margin: "0 0 16px 0" }}>Centre de préparation aux concours de la fonction publique territoriale en Guadeloupe.</p>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, lineHeight: 1.8 }}>
                <div>Immeuble ASP, Grand-Camp</div>
                <div>Les Abymes 97139</div>
                <div>0690 44 73 60</div>
              </div>
            </div>

            {/* Formations */}
            <div>
              <div style={{ color: "#4BADD4", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Formations</div>
              {FORMATIONS.slice(0, 5).map(f => (
                <a key={f.slug} href={`/formations/${f.slug}`} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = "white"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}>
                  {f.titre}
                </a>
              ))}
            </div>

            {/* Liens */}
            <div>
              <div style={{ color: "#4BADD4", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Liens utiles</div>
              {[["Notre Méthode", "#methode"], ["Calendrier", "/calendrier-concours-guadeloupe"], ["Témoignages", "#temoignages"], ["Tarifs & CPF", "#financement"], ["Contact", "#contact"]].map(([label, href]) => (
                <a key={href} href={href} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = "white"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}>
                  {label}
                </a>
              ))}
            </div>

            {/* Horaires */}
            <div>
              <div style={{ color: "#4BADD4", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Horaires</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.9 }}>
                <div>Lundi – Vendredi</div>
                <div style={{ color: "white", fontWeight: 600 }}>15h30 – 18h30</div>
              </div>
              <div style={{ marginTop: 24, background: "rgba(245,166,35,0.12)", border: "1px solid rgba(245,166,35,0.25)", borderRadius: 10, padding: "14px 16px" }}>
                <div style={{ color: "#F5A623", fontSize: 22, fontWeight: 800, fontFamily: "monospace" }}>85%</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginTop: 2 }}>de réussite en 2023</div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, margin: 0 }}>© 2025 Evolutia Formation. Tous droits réservés.</p>
            <div style={{ display: "flex", gap: 20 }}>
              {[["Mentions légales", "/mentions-legales"], ["Politique de confidentialité", "/confidentialite"], ["CGV", "/cgv"]].map(([label, href]) => (
                <a key={href} href={href} style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, textDecoration: "none" }}>{label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

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
