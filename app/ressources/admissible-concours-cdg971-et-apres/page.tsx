import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Admissible à un Concours du CDG 971 : Et Maintenant ? | Evolutia",
  description: "Admissible ou lauréat d'un concours territorial en Guadeloupe : préparer l'oral, comprendre la liste d'aptitude (4 ans max) et décrocher un poste en collectivité.",
  alternates: { canonical: "/ressources/admissible-concours-cdg971-et-apres" },
}

const FAQ = [
  { q: "Être admissible, est-ce avoir réussi le concours ?", a: "Non. L'admissibilité signifie que vous avez franchi les épreuves écrites : il reste l'épreuve d'admission (l'oral), souvent décisive et à fort coefficient. Seule l'admission fait de vous un lauréat inscrit sur liste d'aptitude." },
  { q: "Combien de temps la liste d'aptitude est-elle valable ?", a: "L'inscription initiale vaut 2 ans, renouvelable deux fois un an sur demande écrite — soit 4 ans maximum. Attention : le renouvellement n'est pas automatique, il faut le demander chaque année au CDG 971 avant l'échéance, sous peine de perdre le bénéfice du concours." },
  { q: "Le CDG 971 me propose-t-il un poste après le concours ?", a: "Non — c'est le point que beaucoup de lauréats découvrent trop tard. La réussite au concours ne vaut pas recrutement : c'est à vous de candidater auprès des collectivités (communes, EPCI, Département, Région, CCAS). Le CDG publie les offres, mais la démarche vous appartient." },
]

export default function ArticleApresConcours() {
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
          <span style={{ color: "#1a2740" }}>Admissible, et après ?</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <header style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guide pratique</span>
            <span style={{ background: "rgba(75,173,212,0.1)", color: "#2e8ab0", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Après le concours</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Admissible à un concours du CDG 971 : et maintenant ?
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            Les résultats d&apos;admissibilité viennent de tomber — bravo. Mais admissible ne veut pas dire admis, et admis ne veut pas dire recruté.
            Voici les trois étapes qui vous séparent encore du poste, et comment les franchir.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid #D6E4F0", fontSize: 13, color: "#5a6f8f" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1B3A6B", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14 }}>E</div>
              <span>Équipe Evolutia Formation</span>
            </div>
            <span>·</span>
            <span>Juillet 2026</span>
            <span>·</span>
            <span>Lecture : 5 min</span>
          </div>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>

          <section id="oral">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Étape 1 — L&apos;oral d&apos;admission : là où tout se joue</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              L&apos;admissibilité vous donne le droit de passer l&apos;épreuve d&apos;admission — l&apos;entretien avec le jury.
              Sur la plupart des concours territoriaux, cet oral est <strong>l&apos;épreuve au coefficient le plus élevé</strong> :
              coefficient 4 sur 5 à l&apos;entretien d&apos;agent de maîtrise, coefficient 2 contre 1 à l&apos;écrit pour l&apos;ATSEM,
              coefficient 5 pour l&apos;entretien d&apos;ingénieur. Entre deux candidats admissibles, c&apos;est presque toujours l&apos;oral qui départage.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Les jurys attendent un exposé de parcours calibré (souvent 5 minutes chrono), une vraie connaissance de l&apos;environnement
              territorial guadeloupéen et une posture professionnelle. Trois à cinq <strong>simulations filmées</strong> suffisent généralement
              à transformer une prestation — c&apos;est exactement l&apos;objet de notre <Link href="/formations/preparation-oraux-concours-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>préparation aux oraux</Link>.
            </p>
          </section>

          <section id="liste">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Étape 2 — Lauréat : comprendre la liste d&apos;aptitude</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Admis ? Vous êtes inscrit sur la <strong>liste d&apos;aptitude</strong> du CDG 971. Trois règles à connaître absolument :
            </p>
            <ul style={{ lineHeight: 1.9, fontSize: 16, margin: "0 0 16px", paddingLeft: 22 }}>
              <li><strong>Elle ne vaut pas recrutement</strong> : elle vous rend « recrutable » par n&apos;importe quelle collectivité de France, rien de plus.</li>
              <li><strong>Elle est limitée dans le temps</strong> : 2 ans, renouvelables deux fois un an <em>sur demande écrite de votre part</em> — 4 ans maximum. Sans renouvellement demandé à temps, le bénéfice du concours est perdu.</li>
              <li><strong>Elle est nationale</strong> : vous pouvez candidater en Martinique, en Guyane ou dans l&apos;Hexagone avec un concours passé au CDG 971 (et inversement).</li>
            </ul>
            <div style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#b37a00" }}>Le compte à rebours démarre tout de suite :</strong> chaque année, des lauréats perdent
              leur concours faute d&apos;avoir trouvé un poste (ou demandé leur renouvellement) dans les délais. La recherche de poste
              se traite comme un projet, dès la publication des résultats.
            </div>
          </section>

          <section id="poste">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Étape 3 — Décrocher son poste en Guadeloupe</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Votre marché : les <strong>32 communes</strong> de Guadeloupe, les intercommunalités (Cap Excellence, CANGT, Riviera du Levant,
              Grand Sud Caraïbe, CANBT, Marie-Galante), le <strong>Département</strong>, la <strong>Région</strong>, les CCAS et les syndicats mixtes.
              Concrètement :
            </p>
            <ol style={{ lineHeight: 1.9, fontSize: 16, margin: "0 0 16px", paddingLeft: 22 }}>
              <li>Surveillez les offres sur emploi-territorial.fr et le site du CDG 971 — activez les alertes sur votre grade.</li>
              <li>Envoyez des <strong>candidatures spontanées</strong> aux DRH des collectivités : beaucoup de postes se pourvoient sans annonce, surtout dans les petites communes.</li>
              <li>Mentionnez « lauréat du concours de [grade], inscrit sur liste d&apos;aptitude » dès l&apos;objet du courrier : c&apos;est votre meilleur argument — la collectivité peut vous titulariser directement.</li>
              <li>Acceptez éventuellement un premier poste de contractuel sur votre grade : il se transforme souvent en nomination.</li>
            </ol>
            <p style={{ lineHeight: 1.8, margin: 0, fontSize: 16 }}>
              Pour une vue d&apos;ensemble des employeurs et des métiers qui recrutent, consultez notre guide
              {" "}<Link href="/ressources/travailler-mairie-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>« Travailler en mairie en Guadeloupe »</Link>.
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "white", margin: "0 0 12px" }}>Admissible ? Préparez l&apos;oral maintenant</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              Simulations de jury filmées en conditions réelles, débriefing individuel, aux Abymes. Les places partent vite entre l&apos;admissibilité et l&apos;oral.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/formations/preparation-oraux-concours-guadeloupe" style={{ display: "inline-block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 10, textDecoration: "none" }}>
                Préparation aux oraux
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
