import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Quel Concours Territorial Sans Diplôme ? Guadeloupe 2026-2027 | Evolutia",
  description: "Concours de la fonction publique territoriale accessibles sans diplôme ou avec un CAP : voie interne, 3e voie, recrutement direct. Dates CDG 971 2026-2027.",
  alternates: { canonical: "/ressources/concours-territorial-sans-diplome" },
}

const FAQ = [
  { q: "Peut-on vraiment devenir fonctionnaire territorial sans aucun diplôme ?", a: "Oui. Trois portes existent : le recrutement direct sur les premiers grades de catégorie C (sans concours ni diplôme), les concours internes (ouverts aux agents publics justifiant de services, sans condition de diplôme) et la 3e voie (ouverte après 4 ans d'activité professionnelle, de mandat d'élu ou de responsabilité associative, sans condition de diplôme)." },
  { q: "La dispense de diplôme pour les parents de 3 enfants existe-t-elle toujours ?", a: "Oui : les pères et mères d'au moins trois enfants qu'ils élèvent ou ont élevés, ainsi que les sportifs de haut niveau, peuvent se présenter aux concours sans remplir la condition de diplôme. La condition de diplôme tombe, pas les épreuves : la préparation reste indispensable. Vérifiez votre situation auprès du CDG 971 avant l'inscription." },
  { q: "Quel est le concours sans diplôme le plus accessible en Guadeloupe en 2026-2027 ?", a: "Par la 3e voie ou la voie interne : l'adjoint d'animation principal de 2e classe (épreuves le 25 mars 2027) et l'agent social principal de 2e classe (5 octobre 2027) reposent sur un QCM de 45 minutes et un entretien — des épreuves courtes qui se préparent bien en quelques mois." },
]

export default function ArticleSansDiplome() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  }
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavBar activeHref="/ressources" />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 24px 0" }}>
        <nav style={{ fontSize: 13, color: "#5a6f8f" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <Link href="/ressources" style={{ color: "#5a6f8f", textDecoration: "none" }}>Ressources</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <span style={{ color: "#1a2740" }}>Concours sans diplôme</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <header style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guide pratique</span>
            <span style={{ background: "rgba(75,173,212,0.1)", color: "#2e8ab0", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Catégorie C</span>
            <span style={{ background: "rgba(245,166,35,0.12)", color: "#b37a00", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guadeloupe 2026-2027</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Quel concours de la fonction publique territoriale passer sans diplôme ?
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            Pas de bac, pas de CAP ? La fonction publique territoriale reste accessible — à condition de connaître les bonnes voies d&apos;accès.
            Voici, concours par concours, ce qui est réellement possible en Guadeloupe sur le calendrier 2026-2027 du CDG 971.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid #D6E4F0", fontSize: 13, color: "#5a6f8f" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1B3A6B", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14 }}>E</div>
              <span>Équipe Evolutia Formation</span>
            </div>
            <span>·</span>
            <span>Juillet 2026</span>
            <span>·</span>
            <span>Lecture : 6 min</span>
          </div>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>

          <section id="regle">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>La règle du jeu : seule la voie externe exige un diplôme</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Chaque concours territorial existe en plusieurs voies d&apos;accès, et la condition de diplôme ne concerne que la <strong>voie externe</strong>.
              Les deux autres voies s&apos;en affranchissent totalement :
            </p>
            <ul style={{ lineHeight: 1.9, fontSize: 16, margin: "0 0 16px", paddingLeft: 22 }}>
              <li>La <strong>voie interne</strong> : ouverte aux fonctionnaires et agents publics (contractuels inclus) justifiant en général de 4 ans de services publics — <em>aucune condition de diplôme</em>.</li>
              <li>La <strong>3e voie</strong> : ouverte à toute personne justifiant de 4 ans d&apos;activité professionnelle (privé, indépendant…), de mandat d&apos;élu local ou de responsabilité associative — <em>aucune condition de diplôme</em>.</li>
            </ul>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#1B3A6B" }}>Dispense légale :</strong> les parents d&apos;au moins 3 enfants et les sportifs de haut niveau
              sont dispensés de la condition de diplôme sur les concours externes. Une préparation reste nécessaire : la dispense supprime la condition, pas les épreuves.
            </div>
          </section>

          <section id="concours">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Les concours accessibles au calendrier 2026-2027</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Sur le <Link href="/calendrier-concours-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>calendrier CDG 971</Link>,
              voici les concours de catégorie C ouverts sans diplôme (voie interne / 3e voie) ou avec un simple CAP (voie externe) :
            </p>
            <div style={{ overflowX: "auto", border: "1px solid #D6E4F0", borderRadius: 12, background: "white", marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#1B3A6B" }}>
                    {["Concours", "Externe", "Sans diplôme via", "Épreuves"].map(h => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "white", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Adjoint d'animation principal 2e cl.", "CAP animation", "Interne / 3e voie", "25 mars 2027", "adjoint-animation-principal-guadeloupe"],
                    ["Agent social principal 2e cl.", "CAP / DEAES", "Interne / 3e voie", "5 octobre 2027", "agent-social-guadeloupe"],
                    ["ATSEM principal 2e cl.", "CAP AEPE", "Interne / 3e voie*", "29 sept. 2027", "atsem-guadeloupe"],
                    ["Adjoint technique principal 2e cl.", "CAP/BEP technique", "Interne / 3e voie", "25 nov. 2027", "adjoint-technique-principal-guadeloupe"],
                    ["Agent de maîtrise", "2 CAP/BEP", "Interne / 3e voie", "28 janvier 2027", "agent-de-maitrise-guadeloupe"],
                  ].map(([nom, ext, sans, date, slug], i) => (
                    <tr key={i} style={{ background: i % 2 ? "#F8FAFF" : "white", borderTop: "1px solid #D6E4F0" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600 }}>
                        <Link href={`/formations/${slug}`} style={{ color: "#1B3A6B", textDecoration: "none" }}>{nom} →</Link>
                      </td>
                      <td style={{ padding: "12px 16px", color: "#5a6f8f" }}>{ext}</td>
                      <td style={{ padding: "12px 16px", color: "#5a6f8f" }}>{sans}</td>
                      <td style={{ padding: "12px 16px", color: "#3a4f6a", fontWeight: 500 }}>{date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 13, color: "#5a6f8f", margin: "0 0 16px" }}>* Pour l&apos;ATSEM, la 3e voie exige 4 ans d&apos;expérience auprès de jeunes enfants.</p>
            <p style={{ lineHeight: 1.8, margin: 0, fontSize: 16 }}>
              Et si vous êtes déjà agent public sans diplôme, pensez aussi aux <strong>examens professionnels</strong> d&apos;avancement
              (<Link href="/formations/adjoint-administratif-principal-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>adjoint administratif principal</Link> notamment) :
              seule l&apos;ancienneté compte.
            </p>
          </section>

          <section id="direct">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Sans concours du tout : le recrutement direct</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Les tout premiers grades de catégorie C (adjoint administratif, adjoint technique, adjoint d&apos;animation, agent social — échelle C1)
              sont accessibles par <strong>recrutement direct</strong> : la commune embauche sans concours ni diplôme, et l&apos;agent est titularisé après un an de stage.
              Ces postes sont rares et très demandés en Guadeloupe — mais c&apos;est ensuite le tremplin idéal :
              après quelques années de services, les concours internes et examens professionnels vous ouvrent les grades supérieurs.
              Notre article <Link href="/ressources/travailler-mairie-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>« Travailler en mairie en Guadeloupe »</Link> détaille cette stratégie.
            </p>
          </section>

          <section id="faq">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 20px" }}>Questions fréquentes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQ.map((item, i) => (
                <details key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, overflow: "hidden" }}>
                  <summary style={{ padding: "18px 22px", fontWeight: 600, fontSize: 15, color: "#1B3A6B", cursor: "pointer" }}>{item.q}</summary>
                  <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#5a6f8f", lineHeight: 1.7 }}>{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section style={{ background: "linear-gradient(135deg, #1B3A6B, #2a4f8f)", borderRadius: 16, padding: "36px 32px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "white", margin: "0 0 12px" }}>Quelle voie pour votre profil ?</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              En 30 minutes d&apos;entretien gratuit, nous vérifions votre éligibilité (interne, 3e voie, dispense) et le concours le plus atteignable pour vous.
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 10, textDecoration: "none" }}>
              Vérifier mon éligibilité gratuitement
            </Link>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  )
}
