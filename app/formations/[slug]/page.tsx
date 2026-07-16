import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { FORMATIONS, FORMATIONS_LIST, NOUVELLES_FILIERES } from "../data";

export async function generateStaticParams() {
  return Object.keys(FORMATIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = FORMATIONS[slug];
  if (!f) return {};
  return { title: f.seoTitle, description: f.seoDesc, alternates: { canonical: `/formations/${slug}` } };
}

const OTHER_FORMATIONS = FORMATIONS_LIST.map((f) => ({ label: f.titre, slug: f.slug }));

const statutColor: Record<string, string> = {
  ouvert: "#16a34a",
  bientot: "#d97706",
  ferme: "#6b7280",
};
const statutLabel: Record<string, string> = {
  ouvert: "Ouvert",
  bientot: "À venir",
  ferme: "Clôturé",
};

export default async function FormationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = FORMATIONS[slug];
  if (!f) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: `Préparation ${f.titre} — Guadeloupe`,
        description: f.seoDesc,
        provider: {
          "@type": "Organization",
          name: "Evolutia Formation",
          address: "Immeuble ASP, Grand-Camp, 97139 Les Abymes, Guadeloupe",
          telephone: "+590 690 44 73 60",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: f.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navbar */}
      <NavBar />

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
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              <div style={{ display: "inline-block", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.3)", color: "#F5A623", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 100 }}>{f.categorie}</div>
              {NOUVELLES_FILIERES.includes(f.filiere) && (
                <div style={{ display: "inline-block", background: "#F5A623", color: "#1B3A6B", fontSize: 12, fontWeight: 800, padding: "4px 14px", borderRadius: 100, letterSpacing: "0.04em" }}>NOUVEAU — 2026</div>
              )}
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "white", margin: "0 0 12px 0", lineHeight: 1.15 }}>{f.titre}</h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, margin: "0 0 28px 0" }}>{f.sousTitre}</p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.75, maxWidth: 580, margin: "0 0 36px 0" }}>{f.accroche}</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none" }}>
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
              { label: f.resultats2026 ? `Résultats 2026 — ${f.resultats2026}` : "Taux de réussite", val: f.tauxReussite, highlight: true },
              { label: "Durée", val: f.duree, highlight: false },
              { label: "Format", val: f.format, highlight: false },
              { label: "Financement", val: "CPF éligible", highlight: false },
            ] as {label:string;val:string;highlight:boolean}[]).map((row, i) => (
              <div key={i} style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 3 }}>{row.label}</div>
                <div style={{ color: row.highlight ? "#F5A623" : "white", fontSize: row.highlight ? 22 : 14, fontWeight: row.highlight ? 800 : 500 }}>{row.val}</div>
              </div>
            ))}
            <div style={{ paddingTop: 12, fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
              Concours national : préparation valable pour les sessions passées en Guadeloupe, aux Antilles-Guyane ou dans l&apos;Hexagone.
            </div>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 40, alignItems: "start" }} className="formation-grid">
        <div>
          {/* Épreuves */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>Les épreuves du concours</h2>
            <p style={{ color: "#5a6f8f", fontSize: 14, marginBottom: 24 }}>Programme officiel — source : CNFPT / CDG 971 Guadeloupe</p>
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
          <section style={{ marginBottom: 48 }}>
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

          {/* FAQ */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>Questions fréquentes</h2>
            <p style={{ color: "#5a6f8f", fontSize: 14, marginBottom: 24 }}>Les réponses aux questions les plus posées sur cette formation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {f.faq.map((item, i) => (
                <details key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, overflow: "hidden" }}>
                  <summary style={{ padding: "18px 22px", fontWeight: 600, fontSize: 15, color: "#1B3A6B", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    {item.q}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M6 9l6 6 6-6"/></svg>
                  </summary>
                  <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#5a6f8f", lineHeight: 1.7, borderTop: "1px solid #EEF5FF" }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Source officielle */}
          <div style={{ background: "#EEF5FF", border: "1px solid #D6E4F0", borderRadius: 10, padding: "14px 18px", display: "flex", gap: 12, alignItems: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span style={{ fontSize: 13, color: "#5a6f8f" }}>Informations officielles :{" "}
              <a href={f.sourceOfficielle} target="_blank" rel="noopener noreferrer" style={{ color: "#1B3A6B", fontWeight: 600 }}>CDG 971 Guadeloupe / CNFPT</a>
              {" "}— vérifiez toujours les dates sur le site officiel avant de vous inscrire.
            </span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="formation-sidebar" style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 20 }}>
          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, #1B3A6B, #2a4f8f)", borderRadius: 16, padding: "28px 22px" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white", margin: "0 0 12px 0" }}>Intéressé(e) par cette formation ?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, margin: "0 0 20px 0" }}>Entretien gratuit pour évaluer votre profil et construire votre plan de préparation personnalisé.</p>
            <Link href="/contact" style={{ display: "block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 14, padding: "14px", borderRadius: 8, textDecoration: "none", textAlign: "center" }}>
              Réserver un entretien gratuit
            </Link>
            <div style={{ marginTop: 12, textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: 12 }}>0690 44 73 60</div>
          </div>

          {/* Dates clés */}
          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "18px" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B" }}>Dates clés 2026-2027</div>
            </div>
            {f.datesCles.map((d, i) => (
              <div key={i} style={{ padding: "10px 0", borderBottom: i < f.datesCles.length - 1 ? "1px solid #EEF5FF" : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ fontSize: 13, color: "#3a4f6a", lineHeight: 1.4 }}>{d.label}</span>
                  <span style={{ background: statutColor[d.statut] + "20", color: statutColor[d.statut], fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4, whiteSpace: "nowrap", flexShrink: 0 }}>{statutLabel[d.statut]}</span>
                </div>
                <div style={{ fontSize: 12, color: "#5a6f8f", marginTop: 3 }}>{d.date}</div>
              </div>
            ))}
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #EEF5FF", display: "flex", flexDirection: "column", gap: 6 }}>
              <Link href="/calendrier-concours-guadeloupe" style={{ fontSize: 12, color: "#1B3A6B", textDecoration: "none", fontWeight: 700 }}>
                → Calendrier complet des concours 2026-2027
              </Link>
              <a href={f.sourceOfficielle} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#4BADD4", textDecoration: "none", fontWeight: 600 }}>
                → Vérifier sur CDG 971 / CNFPT
              </a>
            </div>
          </div>

          {/* CPF */}
          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "18px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
              <div style={{ width: 34, height: 34, background: "#EEF5FF", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B" }}>Financement CPF</div>
            </div>
            <p style={{ fontSize: 13, color: "#5a6f8f", lineHeight: 1.6, margin: 0 }}>Formation éligible au Compte Personnel de Formation. Financement possible sans avance de frais.</p>
          </div>

          {/* Autres formations */}
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
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  );
}
