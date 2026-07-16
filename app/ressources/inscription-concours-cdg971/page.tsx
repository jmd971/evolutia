import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "S'inscrire à un Concours du CDG 971 : le Tutoriel Pas à Pas | Evolutia",
  description: "Préinscription sur concours-territorial.fr, dossier, pièces justificatives, délais : comment s'inscrire à un concours territorial en Guadeloupe sans erreur.",
  alternates: { canonical: "/ressources/inscription-concours-cdg971" },
}

const FAQ = [
  { q: "Puis-je m'inscrire après la date de clôture ?", a: "Non, jamais. Les périodes d'inscription des concours territoriaux sont strictes (généralement 5 à 6 semaines) et aucune inscription tardive n'est acceptée, quel que soit le motif. Si vous ratez la fenêtre, il faut attendre la session suivante — parfois deux ans plus tard. D'où l'importance de surveiller le calendrier en amont." },
  { q: "Puis-je m'inscrire à un concours organisé par un autre centre de gestion que le CDG 971 ?", a: "Oui. Les concours territoriaux sont nationaux : vous pouvez vous inscrire auprès de n'importe quel centre de gestion (Martinique, Hexagone…), passer les épreuves là-bas, et la liste d'aptitude vaut ensuite partout en France — y compris pour candidater en Guadeloupe. Certains candidats guadeloupéens passent un concours dans l'Hexagone quand la session locale est éloignée. Evolutia prépare aux deux." },
  { q: "Que se passe-t-il si mon dossier est incomplet ?", a: "Un dossier incomplet à la date de clôture entraîne le rejet de la candidature. Les pièces les plus souvent oubliées : le justificatif de diplôme (ou la demande d'équivalence, à anticiper), les états de services pour la voie interne, et la signature. Relisez la notice du concours point par point avant l'envoi." },
]

export default function ArticleInscriptionCDG() {
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
          <span style={{ color: "#1a2740" }}>S&apos;inscrire au CDG 971</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>
        <header style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Tutoriel</span>
            <span style={{ background: "rgba(75,173,212,0.1)", color: "#2e8ab0", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Inscription</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            S&apos;inscrire à un concours du CDG 971 : le tutoriel pas à pas
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            Chaque session, des candidats préparés sont éliminés avant même les épreuves : inscription hors délai, dossier incomplet,
            mauvaise voie d&apos;accès. Voici la procédure complète pour vous inscrire sans erreur à un concours territorial en Guadeloupe.
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

          <section id="etapes">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>La procédure en 5 étapes</h2>
            <ol style={{ lineHeight: 1.9, fontSize: 16, margin: "0 0 16px", paddingLeft: 22 }}>
              <li style={{ marginBottom: 12 }}><strong>Vérifiez vos conditions d&apos;accès</strong> — diplôme (externe), années de services publics (interne), expérience (3e voie). Chaque fiche de nos <Link href="/formations" style={{ color: "#4BADD4", fontWeight: 600 }}>formations</Link> les détaille. En cas de doute (équivalence de diplôme, dispense parents de 3 enfants), contactez le CDG 971 <em>avant</em> l&apos;ouverture des inscriptions.</li>
              <li style={{ marginBottom: 12 }}><strong>Notez la fenêtre d&apos;inscription</strong> — 5 à 6 semaines, pas une de plus. Toutes les dates 2026-2027 sont sur notre <Link href="/calendrier-concours-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>calendrier des concours</Link>. Mettez un rappel dès maintenant.</li>
              <li style={{ marginBottom: 12 }}><strong>Préinscrivez-vous en ligne</strong> sur <strong>concours-territorial.fr</strong>, le portail national des concours territoriaux : choisissez la session du CDG 971, la voie d&apos;accès et, selon les concours, votre spécialité — <span style={{ fontWeight: 600 }}>ce choix est définitif</span>, il conditionne vos épreuves.</li>
              <li style={{ marginBottom: 12 }}><strong>Constituez et transmettez votre dossier</strong> dans les délais indiqués par le CDG 971 : pièce d&apos;identité, justificatif de diplôme ou d&apos;équivalence (externe), états de services (interne), justificatifs d&apos;activité (3e voie), et pour certains concours la fiche individuelle de renseignement qui servira au jury d&apos;oral. La date limite fait foi — n&apos;attendez pas les derniers jours.</li>
              <li><strong>Attendez la convocation</strong> — elle arrive quelques semaines avant les épreuves avec le lieu et l&apos;heure. Pendant ce temps : <Link href="/formations" style={{ color: "#4BADD4", fontWeight: 600 }}>préparez</Link>. Le délai entre la clôture des inscriptions et les épreuves (4 à 6 mois en général) est exactement le temps d&apos;une préparation sérieuse.</li>
            </ol>
            <div style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#b37a00" }}>L&apos;erreur classique :</strong> confondre préinscription en ligne et inscription définitive.
              Tant que le dossier complet n&apos;est pas transmis et validé, vous n&apos;êtes <em>pas</em> inscrit. Vérifiez toujours la confirmation du CDG 971.
            </div>
          </section>

          <section id="national">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>Guadeloupe, Antilles ou Hexagone : vous avez le choix</h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Les concours territoriaux sont <strong>nationaux</strong> : le grade obtenu est le même partout, et la liste d&apos;aptitude
              vous permet de candidater dans toute la France. Si le concours que vous visez n&apos;est pas programmé prochainement au CDG 971,
              vous pouvez vous inscrire à la session d&apos;un autre centre de gestion — en Martinique ou dans l&apos;Hexagone — puis revenir
              candidater dans les collectivités de Guadeloupe. <strong>Evolutia prépare aux concours passés en Guadeloupe comme dans
              l&apos;Hexagone</strong> : les épreuves sont identiques, seuls le lieu et les dates changent.
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "white", margin: "0 0 12px" }}>Inscrit ? La préparation commence maintenant</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              4 à 6 mois entre l&apos;inscription et les épreuves : c&apos;est exactement le temps d&apos;une préparation efficace. Entretien d&apos;orientation gratuit, en présentiel aux Abymes ou à distance.
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
