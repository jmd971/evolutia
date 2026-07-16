import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { FORMATIONS_LIST, FILIERES_ORDER } from "./data";

export const metadata: Metadata = {
  title: "Formations Concours Territoriaux Guadeloupe | Evolutia",
  description: "22 préparations aux concours et examens de la fonction publique territoriale en Guadeloupe : filières administrative, animation, médico-sociale, technique. CPF.",
  alternates: { canonical: "/formations" },
};

export default function FormationsPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      {/* Navbar */}
      <NavBar activeHref="/formations" />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <div style={{ width: 8, height: 8, background: "#F5A623", borderRadius: "50%" }} />
            <span style={{ color: "#F5A623", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>{FORMATIONS_LIST.length} formations disponibles</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "white", margin: "0 0 16px 0", lineHeight: 1.15 }}>
            Toutes nos formations
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Evolutia prépare aux concours et examens professionnels de la fonction publique territoriale — passés en Guadeloupe (calendrier CDG 971) comme dans l'Hexagone. Quatre filières couvertes, de la catégorie C à la catégorie A+.
          </p>
          <div style={{ display: "inline-flex", gap: 32, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(75,173,212,0.2)", borderRadius: 16, padding: "20px 40px", flexWrap: "wrap", justifyContent: "center" }}>
            {([
              { val: "85%", label: "Taux de réussite 2023", c: "#F5A623" },
              { val: String(FORMATIONS_LIST.length), label: "Formations", c: "white" },
              { val: "4", label: "Filières couvertes", c: "white" },
              { val: "CPF", label: "Financement possible", c: "#4BADD4" },
            ] as {val:string;label:string;c:string}[]).map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: s.c, fontFamily: "monospace" }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: "white", borderBottom: "1px solid #D6E4F0", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 8, fontSize: 13, color: "#5a6f8f" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span>/</span>
          <span style={{ color: "#1B3A6B", fontWeight: 600 }}>Formations</span>
        </div>
      </div>

      {/* Grilles par filière */}
      <section style={{ padding: "56px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>Choisissez votre formation</h2>
              <p style={{ color: "#5a6f8f", fontSize: 15, margin: 0 }}>Cliquez sur une formation pour accéder au programme complet, aux épreuves officielles et aux modalités de financement.</p>
            </div>
            <Link href="/#contact" style={{ background: "#1B3A6B", color: "white", fontWeight: 700, fontSize: 14, padding: "14px 24px", borderRadius: 10, textDecoration: "none", whiteSpace: "nowrap" }}>
              Je ne sais pas quoi choisir →
            </Link>
          </div>

          {FILIERES_ORDER.map((filiere) => {
            const items = FORMATIONS_LIST.filter((f) => f.filiere === filiere);
            if (items.length === 0) return null;
            return (
              <div key={filiere} style={{ marginBottom: 48 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: "#1B3A6B", margin: "0 0 6px 0", display: "flex", alignItems: "center", gap: 10 }}>
                  {filiere}
                  {items.some((f) => f.nouveau) && (
                    <span style={{ background: "#F5A623", color: "#1B3A6B", fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.05em", textTransform: "uppercase" }}>Nouveau</span>
                  )}
                </h3>
                <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #F5A623, #4BADD4)", borderRadius: 2, marginBottom: 20 }} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
                  {items.map((f) => (
                    <Link key={f.slug} href={`/formations/${f.slug}`} style={{ textDecoration: "none", display: "block" }}>
                      <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column", transition: "all 0.2s", cursor: "pointer" }}>
                        <div style={{ height: 4, background: `linear-gradient(90deg, ${f.color}, ${f.accent})` }} />
                        <div style={{ padding: "22px 22px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, gap: 8 }}>
                            <div style={{ background: "#EEF5FF", color: "#1B3A6B", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6 }}>{f.categorie}</div>
                            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                              {f.nouveau && <div style={{ background: "#F5A623", color: "#1B3A6B", fontSize: 10, fontWeight: 800, padding: "4px 8px", borderRadius: 6, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>NOUVEAU</div>}
                              <div style={{ background: "#FFF7E6", color: "#d97706", fontSize: 10, fontWeight: 700, padding: "4px 8px", borderRadius: 6, whiteSpace: "nowrap" }}>{f.type}</div>
                            </div>
                          </div>
                          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1B3A6B", margin: "0 0 10px 0", lineHeight: 1.3 }}>{f.titre}</h4>
                          <p style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.6, margin: "0 0 20px 0", flex: 1 }}>{f.desc}</p>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid #EEF5FF" }}>
                            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5a6f8f" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                              <span style={{ fontSize: 12, color: "#5a6f8f" }}>{f.duree}</span>
                            </div>
                            <span style={{ color: "#4BADD4", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
                              Voir le programme
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bandeau CPF */}
      <section style={{ background: "linear-gradient(135deg, #EEF5FF 0%, #F0F8FF 100%)", padding: "56px 24px", borderTop: "1px solid #D6E4F0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div>
            <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Financement</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 12px 0" }}>Toutes nos formations sont éligibles CPF</h2>
            <p style={{ color: "#5a6f8f", fontSize: 16, lineHeight: 1.7, margin: 0 }}>Financement possible à 100% via votre Compte Personnel de Formation. Aucune avance de frais.</p>
          </div>
          <Link href="/#financement" style={{ background: "#1B3A6B", color: "white", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none", whiteSpace: "nowrap" }}>
            En savoir plus
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #122852 100%)", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: "white", margin: "0 0 14px 0" }}>Vous ne savez pas quelle formation choisir ?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.7, margin: "0 0 32px 0" }}>Notre équipe analyse votre profil et vous oriente vers le concours qui correspond à votre situation.</p>
          <Link href="/#contact" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 800, fontSize: 16, padding: "18px 40px", borderRadius: 10, textDecoration: "none", display: "inline-block" }}>
            Réserver un entretien d&apos;orientation gratuit
          </Link>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 12 }}>Réponse sous 24h. Aucun engagement.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        @media (max-width: 768px) { nav { display: none !important; } }
      `}</style>
    </div>
  );
}
