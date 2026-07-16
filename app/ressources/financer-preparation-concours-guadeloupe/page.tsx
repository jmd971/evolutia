import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Financer sa Préparation Concours en Guadeloupe : CPF, France Travail | Evolutia",
  description: "CPF, France Travail, employeur, CNFPT, Région Guadeloupe : toutes les solutions pour financer sa préparation aux concours territoriaux, souvent sans avance de frais.",
  alternates: { canonical: "/ressources/financer-preparation-concours-guadeloupe" },
}

const FAQ = [
  { q: "Ma préparation concours est-elle éligible au CPF ?", a: "Oui : les préparations aux concours de la fonction publique sont éligibles au Compte Personnel de Formation. Vous mobilisez vos droits directement sur moncompteformation.gouv.fr, sans avance de frais. Si votre solde CPF ne couvre pas tout, un abondement personnel ou de France Travail peut compléter." },
  { q: "Je suis agent public : mon employeur peut-il financer ma préparation ?", a: "Oui, deux leviers existent : le plan de formation de votre collectivité (demande à faire auprès de votre service RH) et les préparations concours du CNFPT accessibles aux agents territoriaux. Un refus de l'employeur n'empêche pas d'utiliser votre CPF, qui vous appartient." },
  { q: "Je suis demandeur d'emploi en Guadeloupe : quelles aides ?", a: "France Travail peut mobiliser l'Aide Individuelle à la Formation (AIF), seule ou en complément de votre CPF, si la préparation s'inscrit dans votre projet professionnel validé par votre conseiller. La Région Guadeloupe propose également des dispositifs d'aide à la formation — renseignez-vous en amont, les commissions ont leurs calendriers." },
]

export default function ArticleFinancement() {
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
          <span style={{ color: "#1a2740" }}>Financer sa préparation</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <header style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guide pratique</span>
            <span style={{ background: "rgba(245,166,35,0.12)", color: "#b37a00", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Financement</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Financer sa préparation aux concours territoriaux en Guadeloupe : CPF, France Travail, employeur
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            Le coût ne doit jamais être ce qui vous empêche de préparer un concours : selon votre situation — salarié, agent public,
            demandeur d&apos;emploi — il existe presque toujours une solution de financement, souvent sans aucune avance de frais.
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

          <section id="cpf">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Le CPF : la solution la plus directe</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Toute personne ayant travaillé en France cumule des droits sur son <strong>Compte Personnel de Formation</strong>
              (500 € par an pour un temps plein, plafonnés à 5 000 €). Les préparations aux concours de la fonction publique
              sont éligibles : vous choisissez votre formation sur <strong>moncompteformation.gouv.fr</strong> et vos droits
              paient directement l&apos;organisme — <strong>zéro avance de frais</strong>.
            </p>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#1B3A6B" }}>Bon réflexe :</strong> consultez votre solde CPF avant l&apos;entretien d&apos;orientation —
              nous construisons le programme en fonction de votre budget mobilisable, et un abondement personnel ou France Travail peut compléter si besoin.
            </div>
          </section>

          <section id="situations">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Selon votre situation</h2>
            <ul style={{ lineHeight: 1.9, fontSize: 16, margin: "0 0 16px", paddingLeft: 22 }}>
              <li style={{ marginBottom: 10 }}><strong>Agent public (titulaire ou contractuel)</strong> : en plus du CPF, demandez le <strong>plan de formation</strong> de votre collectivité auprès de votre service RH — la préparation d&apos;un concours ou d&apos;un <Link href="/formations/redacteur-principal-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>examen professionnel</Link> entre dans le développement des compétences. Le CNFPT propose aussi des préparations aux agents territoriaux.</li>
              <li style={{ marginBottom: 10 }}><strong>Salarié du privé</strong> : CPF en autonomie (aucune autorisation de l&apos;employeur nécessaire hors temps de travail), ou plan de développement des compétences de l&apos;entreprise si votre projet l&apos;intéresse.</li>
              <li style={{ marginBottom: 10 }}><strong>Demandeur d&apos;emploi</strong> : CPF + <strong>Aide Individuelle à la Formation (AIF)</strong> de France Travail en complément, si la préparation s&apos;inscrit dans votre projet validé. Parlez-en à votre conseiller avant de vous inscrire.</li>
              <li><strong>Sans droits mobilisables</strong> : la <strong>Région Guadeloupe</strong> porte des dispositifs d&apos;aide à la formation professionnelle, et nous proposons des facilités de paiement échelonné — le sujet se règle presque toujours lors de l&apos;entretien d&apos;orientation.</li>
            </ul>
          </section>

          <section id="conseils">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Trois conseils avant de vous lancer</h2>
            <ol style={{ lineHeight: 1.9, fontSize: 16, margin: 0, paddingLeft: 22 }}>
              <li style={{ marginBottom: 10 }}><strong>Anticipez</strong> : entre la validation d&apos;un dossier CPF (11 jours ouvrés minimum) ou d&apos;une AIF et le début de la préparation, comptez plusieurs semaines. Regardez les <Link href="/calendrier-concours-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>dates de votre concours</Link> et remontez le calendrier.</li>
              <li style={{ marginBottom: 10 }}><strong>Ne payez jamais pour « débloquer » votre CPF</strong> : les arnaques au CPF sévissent aussi en Guadeloupe. Vos droits ne se « débloquent » pas par téléphone — tout se passe sur moncompteformation.gouv.fr.</li>
              <li><strong>Comparez ce que couvre le financement</strong> : heures de formation, corrections individuelles, simulations d&apos;oral… Nos <Link href="/financement-tarifs" style={{ color: "#4BADD4", fontWeight: 600 }}>tarifs et modalités de financement</Link> sont détaillés en toute transparence.</li>
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "white", margin: "0 0 12px" }}>On monte votre dossier de financement ensemble</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              Lors de l&apos;entretien d&apos;orientation gratuit, nous identifions la solution adaptée à votre situation — CPF, AIF, employeur — et nous vous guidons dans les démarches.
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
