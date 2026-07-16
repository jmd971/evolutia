import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Concours Agent de Maîtrise 2027 : Inscriptions dès le 1er Septembre 2026 | Evolutia",
  description: "Les inscriptions au concours d'agent de maîtrise territorial ouvrent le 1er septembre 2026 (clôture 7 octobre), épreuves le 28 janvier 2027. Conditions et préparation.",
  alternates: { canonical: "/ressources/concours-agent-de-maitrise-2027-inscriptions" },
}

export default function ArticleAgentMaitrise2027() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>
      <NavBar activeHref="/ressources" />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 24px 0" }}>
        <nav style={{ fontSize: 13, color: "#5a6f8f" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <Link href="/ressources" style={{ color: "#5a6f8f", textDecoration: "none" }}>Ressources</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <span style={{ color: "#1a2740" }}>Agent de maîtrise 2027</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <header style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "#F5A623", color: "#1B3A6B", fontSize: 12, fontWeight: 800, padding: "4px 12px", borderRadius: 100 }}>Inscriptions imminentes</span>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Catégorie C · Technique</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Concours d&apos;agent de maîtrise 2027 : les inscriptions ouvrent le 1er septembre 2026
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            C&apos;est le prochain grand rendez-vous du calendrier territorial : inscriptions du 1er septembre au 7 octobre 2026,
            épreuves écrites le 28 janvier 2027. Si vous visez l&apos;encadrement des équipes techniques, c&apos;est maintenant que tout se joue.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid #D6E4F0", fontSize: 13, color: "#5a6f8f" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1B3A6B", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14 }}>E</div>
              <span>Équipe Evolutia Formation</span>
            </div>
            <span>·</span>
            <span>Juillet 2026</span>
            <span>·</span>
            <span>Lecture : 3 min</span>
          </div>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>

          <section id="dates">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Les dates à retenir</h2>
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
                <tbody>
                  {[
                    ["Ouverture des inscriptions", "1er septembre 2026"],
                    ["Clôture des inscriptions", "7 octobre 2026"],
                    ["Épreuves écrites", "28 janvier 2027"],
                  ].map(([k, v], i) => (
                    <tr key={i} style={{ borderTop: i ? "1px solid #EEF5FF" : "none" }}>
                      <td style={{ padding: "14px 20px", color: "#5a6f8f" }}>{k}</td>
                      <td style={{ padding: "14px 20px", fontWeight: 700, color: "#1B3A6B" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ lineHeight: 1.8, margin: 0, fontSize: 16 }}>
              L&apos;inscription se fait en ligne sur concours-territorial.fr — notre <Link href="/ressources/inscription-concours-cdg971" style={{ color: "#4BADD4", fontWeight: 600 }}>tutoriel d&apos;inscription pas à pas</Link> détaille
              la procédure et les pièces à préparer.
            </p>
          </section>

          <section id="pour-qui">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Pour qui, et avec quelles épreuves ?</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              L&apos;agent de maîtrise encadre les équipes techniques des collectivités (espaces verts, bâtiment, voirie, restauration).
              Trois voies d&apos;accès : externe (deux titres de niveau 3 — CAP/BEP), interne (agents publics) et 3e voie.
              Les épreuves : mathématiques (2 h) et cas pratique (2 h) en externe, connaissances techniques sans rédaction (2 h)
              et cas pratique en interne, puis un entretien de 15 minutes au <strong>coefficient 4</strong> — le plus élevé du concours.
              Tout le détail est sur la <Link href="/formations/agent-de-maitrise-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>fiche du concours</Link>.
            </p>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#1B3A6B" }}>Résultats Evolutia :</strong> 100 % de réussite de nos candidats agent de maîtrise
              aux derniers résultats. L&apos;épreuve de mathématiques, principal obstacle des candidats externes, se remet à niveau en 3 à 4 mois —
              en commençant en septembre, vous êtes prêt pour janvier.
            </div>
          </section>

          <section style={{ background: "linear-gradient(135deg, #1B3A6B, #2a4f8f)", borderRadius: 16, padding: "36px 32px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "white", margin: "0 0 12px" }}>4 mois pour être prêt : le compte est bon</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              Remise à niveau maths, cas pratiques corrigés, simulations d&apos;entretien. En présentiel aux Abymes, financement CPF possible.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/formations/agent-de-maitrise-guadeloupe" style={{ display: "inline-block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 10, textDecoration: "none" }}>
                Voir la préparation
              </Link>
              <Link href="/contact" style={{ display: "inline-block", background: "transparent", color: "white", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 10, textDecoration: "none", border: "2px solid rgba(255,255,255,0.35)" }}>
                Entretien gratuit
              </Link>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  )
}
