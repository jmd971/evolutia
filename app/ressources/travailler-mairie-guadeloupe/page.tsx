import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Travailler en Mairie en Guadeloupe : Concours, Contrats, Recrutement | Evolutia",
  description: "Les 3 voies pour travailler en mairie en Guadeloupe : concours territorial, recrutement direct sans concours, contrat. Métiers qui recrutent, démarches CDG 971.",
  alternates: { canonical: "/ressources/travailler-mairie-guadeloupe" },
}

const FAQ = [
  { q: "Peut-on travailler en mairie sans concours en Guadeloupe ?", a: "Oui, de deux façons : le recrutement direct sur les premiers grades de catégorie C (adjoint administratif, adjoint technique, adjoint d'animation — sans concours ni diplôme, à la discrétion de la commune) et le contrat (contractuel de droit public, de quelques mois à 3 ans renouvelables). Le concours reste toutefois la seule voie vers le statut de fonctionnaire titulaire et la sécurité de l'emploi." },
  { q: "Quelles communes de Guadeloupe recrutent le plus ?", a: "Les communes les plus peuplées (Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg, Sainte-Anne, Pointe-à-Pitre) et les intercommunalités (Cap Excellence, CANGT, Riviera du Levant, Grand Sud Caraïbe, CANBT) publient le plus d'offres. Le Département et la Région Guadeloupe recrutent aussi sur les mêmes cadres d'emplois." },
  { q: "Quel salaire en travaillant en mairie en Guadeloupe ?", a: "Le traitement suit les grilles indiciaires nationales de la fonction publique territoriale, majoré de 40 % en Guadeloupe (majoration de vie chère pour les fonctionnaires). Un agent de catégorie C débute autour de 1 800 € brut hors majoration ; un rédacteur (catégorie B) autour de 1 900 € brut hors majoration." },
]

export default function ArticleTravaillerMairie() {
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
          <span style={{ color: "#1a2740" }}>Travailler en mairie</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <header style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guide pratique</span>
            <span style={{ background: "rgba(245,166,35,0.12)", color: "#b37a00", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guadeloupe 2026</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Comment travailler en mairie en Guadeloupe ? Concours, contrats et recrutement direct
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            Les 32 communes de Guadeloupe, leurs intercommunalités, le Département et la Région emploient des milliers d&apos;agents territoriaux.
            Voici les trois voies d&apos;accès — avec ou sans concours, avec ou sans diplôme — et les démarches concrètes pour décrocher un poste.
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

          <section id="voies">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Les 3 voies d&apos;accès à un emploi en mairie</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              <strong>1. Le concours territorial</strong> — la voie royale. Réussir un concours du CDG 971 (ou du CNFPT pour les grades A+)
              vous inscrit sur une liste d&apos;aptitude et vous ouvre le statut de fonctionnaire titulaire : sécurité de l&apos;emploi,
              grille indiciaire, déroulement de carrière, retraite de la fonction publique. C&apos;est la seule voie vers la titularisation
              pour les catégories A et B, et pour les grades « principal » de la catégorie C.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              <strong>2. Le recrutement direct, sans concours</strong> — possible uniquement sur les premiers grades de la catégorie C :
              adjoint administratif, adjoint technique, adjoint d&apos;animation, agent social (échelle C1). La commune recrute librement,
              sans condition de diplôme. C&apos;est une vraie porte d&apos;entrée… mais les postes sont rares, très demandés,
              et l&apos;évolution passe ensuite par les concours et examens professionnels.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              <strong>3. Le contrat</strong> — les collectivités embauchent des contractuels de droit public pour des remplacements,
              des besoins saisonniers ou des postes non pourvus (contrats de 1 à 3 ans, renouvelables dans la limite de 6 ans avant CDI).
              Beaucoup d&apos;agents commencent contractuels puis passent le concours en interne — souvent la stratégie la plus efficace.
            </p>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#1B3A6B" }}>Le réflexe à avoir :</strong> après 4 ans de services publics (contractuel inclus),
              vous accédez aux <strong>concours internes</strong>, souvent moins concurrentiels que la voie externe et sans condition de diplôme.
            </div>
          </section>

          <section id="metiers">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Quels métiers recrutent dans les communes de Guadeloupe ?</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Les besoins les plus constants des collectivités guadeloupéennes se concentrent sur quelques familles de métiers,
              qui correspondent aux concours du <Link href="/calendrier-concours-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>calendrier CDG 971 2026-2027</Link> :
            </p>
            <ul style={{ lineHeight: 1.9, fontSize: 16, margin: "0 0 16px", paddingLeft: 22 }}>
              <li><strong>Administratif</strong> : accueil, état civil, urbanisme, finances — <Link href="/formations/redacteur-territorial-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>rédacteur</Link>, <Link href="/formations/adjoint-administratif-principal-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>adjoint administratif</Link>, <Link href="/formations/attache-territorial-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>attaché</Link>.</li>
              <li><strong>Technique</strong> : voirie, bâtiment, espaces verts, restauration scolaire — <Link href="/formations/adjoint-technique-principal-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>adjoint technique</Link>, <Link href="/formations/agent-de-maitrise-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>agent de maîtrise</Link>, <Link href="/formations/technicien-territorial-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>technicien</Link>, <Link href="/formations/ingenieur-territorial-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>ingénieur</Link>.</li>
              <li><strong>École et petite enfance</strong> : <Link href="/formations/atsem-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>ATSEM</Link>, <Link href="/formations/auxiliaire-puericulture-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>auxiliaire de puériculture</Link>, <Link href="/formations/puericultrice-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>puéricultrice</Link>.</li>
              <li><strong>Animation</strong> : périscolaire, centres de loisirs — <Link href="/formations/adjoint-animation-principal-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>adjoint d&apos;animation</Link>, <Link href="/formations/animateur-territorial-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>animateur</Link>.</li>
              <li><strong>Social et santé</strong> : CCAS, EHPAD, PMI — <Link href="/formations/agent-social-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>agent social</Link>, <Link href="/formations/aide-soignant-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>aide-soignant</Link>, <Link href="/formations/sage-femme-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>sage-femme</Link>.</li>
            </ul>
          </section>

          <section id="demarches">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Les démarches concrètes, étape par étape</h2>
            <ol style={{ lineHeight: 1.9, fontSize: 16, margin: "0 0 16px", paddingLeft: 22 }}>
              <li><strong>Choisir sa cible</strong> selon votre profil (diplôme, expérience, statut actuel) — notre <Link href="/guide-concours-territorial-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>guide des concours territoriaux</Link> vous oriente en 5 minutes.</li>
              <li><strong>Surveiller les inscriptions</strong> sur concours-territorial.fr et le site du CDG 971 — les fenêtres d&apos;inscription ne durent que 5 à 6 semaines. Toutes les dates sont dans notre <Link href="/calendrier-concours-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>calendrier 2026-2027</Link>.</li>
              <li><strong>Se préparer sérieusement</strong> : la majorité des candidats échouent faute de méthode, pas de niveau. Comptez 3 à 9 mois selon le concours.</li>
              <li><strong>Après la réussite</strong> : vous êtes inscrit sur liste d&apos;aptitude — il reste à candidater auprès des collectivités. Postulez large : communes, EPCI, Département, Région, CCAS.</li>
              <li><strong>En parallèle</strong> : déposez des candidatures spontanées pour des postes de contractuel — c&apos;est le meilleur moyen d&apos;entrer dans la place et de basculer ensuite sur les concours internes.</li>
            </ol>
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "white", margin: "0 0 12px" }}>Par où commencer ?</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              Un entretien d&apos;orientation gratuit pour identifier le concours adapté à votre profil et construire votre plan de préparation.
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 10, textDecoration: "none" }}>
              Réserver mon entretien gratuit
            </Link>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  )
}
