import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { FORMATIONS } from "../../formations/data";
import { inscriptionEmbedUrl, INSCRIPTION_FORM_ID, GHL_FORM_EMBED_JS } from "../../config";

// Une page par session dont les inscriptions sont ouvertes.
export async function generateStaticParams() {
  return Object.entries(FORMATIONS)
    .filter(([, f]) => f.session?.inscription === "ouverte")
    .map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = FORMATIONS[slug];
  if (!f?.session) return {};
  return {
    title: `Inscription — ${f.titre} | Evolutia Formation`,
    description: `Inscrivez-vous à la préparation ${f.titre} en Guadeloupe. ${f.session.intitule}, démarrage le ${f.session.demarrage}. Places limitées, financement CPF possible.`,
    alternates: { canonical: `/inscription/${slug}` },
    // Page transactionnelle : c'est la fiche formation qui doit être indexée.
    robots: { index: false, follow: true },
  };
}

export default async function InscriptionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = FORMATIONS[slug];
  if (!f || f.session?.inscription !== "ouverte") notFound();
  const session = f.session;

  const recap: { label: string; val: string }[] = [
    { label: "Session", val: session.intitule },
    { label: "Démarrage", val: session.demarrage.charAt(0).toUpperCase() + session.demarrage.slice(1) },
    { label: "Durée", val: f.duree },
    { label: "Format", val: f.format },
    { label: "Financement", val: "CPF éligible" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF", minHeight: "100vh" }}>
      <NavBar />

      {/* Breadcrumb */}
      <div style={{ background: "white", borderBottom: "1px solid #D6E4F0", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#5a6f8f", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span>/</span>
          <Link href="/formations" style={{ color: "#5a6f8f", textDecoration: "none" }}>Formations</Link>
          <span>/</span>
          <Link href={`/formations/${slug}`} style={{ color: "#5a6f8f", textDecoration: "none" }}>{f.titre}</Link>
          <span>/</span>
          <span style={{ color: "#1B3A6B", fontWeight: 600 }}>Inscription</span>
        </div>
      </div>

      {/* En-tête */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(22,163,74,0.18)", border: "1px solid rgba(22,163,74,0.45)", borderRadius: 100, padding: "5px 15px", marginBottom: 18 }}>
            <span style={{ width: 8, height: 8, background: "#5ee08a", borderRadius: "50%" }} />
            <span style={{ color: "#5ee08a", fontSize: 12, fontWeight: 700 }}>Inscription ouverte</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.6vw, 40px)", fontWeight: 800, color: "white", margin: "0 0 12px 0", lineHeight: 1.2 }}>
            Inscription — {f.titre}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, margin: 0, lineHeight: 1.6 }}>
            {session.intitule} — démarrage le {session.demarrage}.
          </p>
        </div>
      </section>

      {/* Formulaire + récapitulatif */}
      <section style={{ padding: "40px 24px 72px" }}>
        <div className="inscription-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: 32, alignItems: "start" }}>

          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "22px 26px 4px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1B3A6B", margin: "0 0 6px 0" }}>Vos coordonnées</h2>
              <p style={{ color: "#5a6f8f", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Nous vous rappelons sous 24h ouvrées pour confirmer votre place et préciser les modalités de financement.
              </p>
            </div>
            <iframe
              src={inscriptionEmbedUrl(slug, session.demarrageISO)}
              id={`inline-${INSCRIPTION_FORM_ID}`}
              title={`Inscription — ${f.titre}`}
              style={{ width: "100%", border: "none", minHeight: 620, display: "block" }}
            />
          </div>

          <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 14, padding: "20px 22px" }}>
              <div style={{ color: "#5a6f8f", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Votre inscription</div>
              {recap.map((row, i) => (
                <div key={row.label} style={{ padding: "10px 0", borderBottom: i < recap.length - 1 ? "1px solid #EEF5FF" : "none" }}>
                  <div style={{ fontSize: 11, color: "#5a6f8f", marginBottom: 3 }}>{row.label}</div>
                  <div style={{ fontSize: 14, color: "#1B3A6B", fontWeight: 600, lineHeight: 1.4 }}>{row.val}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#FFF7E6", border: "1px solid #F5D9A3", borderRadius: 14, padding: "18px 20px" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B", marginBottom: 6 }}>Places limitées</div>
              <p style={{ fontSize: 13, color: "#7a6033", lineHeight: 1.6, margin: 0 }}>
                Les groupes sont volontairement réduits et les places attribuées dans l&apos;ordre d&apos;inscription.
              </p>
            </div>

            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 14, padding: "18px 20px" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B", marginBottom: 8 }}>Une question avant de vous inscrire ?</div>
              <p style={{ fontSize: 13, color: "#5a6f8f", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                Appelez-nous du lundi au vendredi, 15h30 – 18h30.
              </p>
              <a href="tel:+590690447360" style={{ display: "block", textAlign: "center", background: "#1B3A6B", color: "white", fontWeight: 700, fontSize: 14, padding: "12px", borderRadius: 8, textDecoration: "none" }}>
                0690 44 73 60
              </a>
              <Link href={`/formations/${slug}`} style={{ display: "block", marginTop: 10, textAlign: "center", fontSize: 13, color: "#4BADD4", textDecoration: "none", fontWeight: 600 }}>
                ← Revoir le programme
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Redimensionne l'iframe GHL selon la hauteur réelle du formulaire */}
      <script src={GHL_FORM_EMBED_JS} async />

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        @media (max-width: 900px) {
          .inscription-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  );
}
