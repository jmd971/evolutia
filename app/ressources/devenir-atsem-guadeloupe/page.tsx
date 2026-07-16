import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Devenir ATSEM en Guadeloupe : Diplôme, Concours CDG 971, Salaire | Evolutia",
  description: "Le parcours complet pour devenir ATSEM en Guadeloupe : CAP AEPE, concours du CDG 971 (épreuves 29 sept. 2027), salaire majoré de 40%, candidature en mairie.",
  alternates: { canonical: "/ressources/devenir-atsem-guadeloupe" },
}

const FAQ = [
  { q: "Peut-on devenir ATSEM sans le CAP petite enfance ?", a: "Le CAP AEPE n'est exigé que pour le concours externe. Trois alternatives : la voie interne (agents publics justifiant de services auprès de jeunes enfants), la 3e voie (4 ans d'expérience auprès d'enfants, y compris comme assistante maternelle agréée) et la dispense de diplôme pour les parents d'au moins 3 enfants. Dans tous les cas, il faut réussir les épreuves du concours." },
  { q: "Quel est le salaire d'une ATSEM en Guadeloupe ?", a: "L'ATSEM principal de 2e classe débute autour de 1 800 € brut mensuel selon la grille nationale (échelle C2), montant auquel s'ajoute la majoration de traitement de 40 % applicable aux fonctionnaires en Guadeloupe — soit environ 2 500 € brut en début de carrière, hors primes." },
  { q: "Une fois le concours ATSEM réussi, ai-je automatiquement un poste ?", a: "Non. La réussite vous inscrit sur une liste d'aptitude valable jusqu'à 4 ans (avec réinscription annuelle à demander). C'est à vous de candidater auprès des communes de Guadeloupe. Les écoles maternelles recrutent à chaque rentrée : postulez tôt, largement, et soignez votre lettre — nous accompagnons aussi cette étape." },
]

export default function ArticleDevenirAtsem() {
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
          <span style={{ color: "#1a2740" }}>Devenir ATSEM</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <header style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guide métier</span>
            <span style={{ background: "rgba(75,173,212,0.1)", color: "#2e8ab0", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Catégorie C</span>
            <span style={{ background: "rgba(245,166,35,0.12)", color: "#b37a00", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Session 2027</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Devenir ATSEM en Guadeloupe : le parcours complet (2026-2027)
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            Du CAP Accompagnant Éducatif Petite Enfance au poste en école maternelle : diplôme, concours du CDG 971,
            salaire (majoré de 40 % en Guadeloupe) et candidature auprès des communes. Tout le parcours, étape par étape.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid #D6E4F0", fontSize: 13, color: "#5a6f8f" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1B3A6B", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14 }}>E</div>
              <span>Équipe Evolutia Formation</span>
            </div>
            <span>·</span>
            <span>Juillet 2026</span>
            <span>·</span>
            <span>Lecture : 7 min</span>
          </div>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>

          <section id="metier">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Le métier : au cœur de l&apos;école maternelle</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              L&apos;ATSEM (agent territorial spécialisé des écoles maternelles) assiste l&apos;enseignant tout au long de la journée :
              accueil des enfants, aide aux activités pédagogiques, hygiène, repas, sieste, préparation du matériel.
              Particularité souvent méconnue : l&apos;ATSEM est <strong>employée par la commune</strong>, pas par l&apos;Éducation nationale —
              c&apos;est donc un métier de la fonction publique territoriale, recruté par concours via le CDG 971 en Guadeloupe.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Avec ses écoles maternelles réparties dans les 32 communes, la Guadeloupe recrute des ATSEM à chaque rentrée.
              C&apos;est aussi l&apos;un des concours les plus demandés : la sélection se joue sur la préparation.
            </p>
          </section>

          <section id="etapes">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Les 4 étapes du parcours</h2>
            <ol style={{ lineHeight: 1.9, fontSize: 16, margin: "0 0 16px", paddingLeft: 22 }}>
              <li style={{ marginBottom: 10 }}><strong>Obtenir le CAP AEPE</strong> (Accompagnant Éducatif Petite Enfance, ex-CAP petite enfance) — requis pour le concours externe. Sans ce diplôme, la voie interne, la 3e voie (4 ans d&apos;expérience auprès d&apos;enfants) ou la dispense « parents de 3 enfants » restent possibles.</li>
              <li style={{ marginBottom: 10 }}><strong>S&apos;inscrire au concours du CDG 971</strong> : pour la session 2027, inscriptions du <strong>16 mars au 21 avril 2027</strong> sur concours-territorial.fr, épreuves le <strong>29 septembre 2027</strong>. Toutes les dates sur notre <Link href="/calendrier-concours-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>calendrier des concours</Link>.</li>
              <li style={{ marginBottom: 10 }}><strong>Réussir les épreuves</strong> : en externe, un QCM de 20 questions (45 min) sur des situations concrètes du métier, puis un entretien de 15 minutes (coefficient 2). Le détail des épreuves par voie est sur notre <Link href="/formations/atsem-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>fiche concours ATSEM</Link>.</li>
              <li><strong>Candidater auprès des communes</strong> : la réussite au concours vous inscrit sur liste d&apos;aptitude — c&apos;est ensuite à vous de postuler auprès des mairies. Voir notre guide <Link href="/ressources/admissible-concours-cdg971-et-apres" style={{ color: "#4BADD4", fontWeight: 600 }}>« Admissible, et maintenant ? »</Link>.</li>
            </ol>
            <div style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#b37a00" }}>Attention au piège :</strong> beaucoup de candidates révisent la petite enfance en général.
              Le QCM porte sur des <strong>situations professionnelles précises</strong> (hygiène, sécurité, posture face à l&apos;enseignant et aux parents)
              — c&apos;est un concours de mise en situation, pas de connaissances théoriques.
            </div>
          </section>

          <section id="salaire">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Salaire et évolution en Guadeloupe</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              L&apos;ATSEM principal de 2e classe est rémunérée sur l&apos;échelle C2 : environ <strong>1 800 € brut mensuel</strong> en début de carrière
              selon la grille nationale. En Guadeloupe s&apos;ajoute la <strong>majoration de traitement de 40 %</strong> des fonctionnaires d&apos;outre-mer,
              soit environ <strong>2 500 € brut</strong> en début de carrière, hors primes. L&apos;évolution passe par le grade d&apos;ATSEM principal
              de 1re classe, puis éventuellement les concours d&apos;<Link href="/formations/agent-de-maitrise-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>agent de maîtrise</Link> ou
              d&apos;<Link href="/formations/animateur-territorial-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>animateur territorial</Link> (voie interne spéciale réservée aux ATSEM avec 4 ans de services).
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "white", margin: "0 0 12px" }}>Préparez le concours ATSEM 2027 avec Evolutia</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              QCM chronométrés, simulations d&apos;entretien, préparation en présentiel aux Abymes. Formation éligible CPF.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/formations/atsem-guadeloupe" style={{ display: "inline-block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 10, textDecoration: "none" }}>
                Voir la formation ATSEM
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
