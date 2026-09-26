import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { QUALIOPI } from "../qualiopi"
import { SITE_URL } from "../config"

export const metadata: Metadata = {
  title: "Certification Qualiopi — Evolutia Formation Guadeloupe",
  description:
    "Evolutia est certifié Qualiopi au titre des actions de formation. Consultez et téléchargez le certificat n° 984211-1 délivré par Certifopac, valable jusqu'au 20/09/2029.",
  alternates: { canonical: `${SITE_URL}${QUALIOPI.page}` },
}

// Délais de traitement des réclamations affichés publiquement (indicateur 31 du
// référentiel national qualité). ⚠️ Engagement pris envers les stagiaires et
// vérifié en audit de surveillance : à confirmer par Evolutia avant diffusion.
const RECLAMATION_ACCUSE = "5 jours ouvrés"
const RECLAMATION_REPONSE = "30 jours"

const LIGNES_CERTIFICAT: [string, string][] = [
  ["Organisme certifié", "EVOLUTIA"],
  ["SIREN", QUALIOPI.siren],
  ["Numéro de déclaration d'activité", QUALIOPI.nda],
  ["Organisme certificateur", `${QUALIOPI.certificateur} — ${QUALIOPI.accreditation}`],
  ["Numéro de certificat", QUALIOPI.numeroCertificat],
  ["Catégorie d'action certifiée", QUALIOPI.categorie],
  ["Date d'édition", QUALIOPI.edition],
  ["Début de validité", QUALIOPI.debutValidite],
  ["Fin de validité", `${QUALIOPI.finValidite} (sous réserve des audits de surveillance)`],
]

const ENGAGEMENTS = [
  {
    titre: "Une information complète avant l'inscription",
    texte:
      "Objectifs, prérequis, durée, contenu, modalités pédagogiques, tarifs et délais d'accès sont publiés sur la page de chaque formation, avant tout engagement.",
    lien: { href: "/formations", label: "Voir les formations" },
  },
  {
    titre: "Des résultats publiés",
    texte:
      "Les taux de réussite de nos préparations sont affichés formation par formation, et les retours des lauréats sont consultables publiquement.",
    lien: { href: "/temoignages-laureats", label: "Voir les résultats et témoignages" },
  },
  {
    titre: "Un accueil des personnes en situation de handicap",
    texte:
      "M. Tony Barbier, référent handicap, étudie avec chaque candidat concerné les adaptations de parcours, de rythme et de supports nécessaires.",
    lien: { href: "/contact", label: "Contacter le référent handicap" },
  },
  {
    titre: "Une amélioration continue",
    texte:
      "Chaque session est évaluée par les stagiaires et par les formateurs. Les retours alimentent la révision des contenus et des méthodes d'une session à l'autre.",
    lien: { href: "/notre-methode", label: "Découvrir notre méthode" },
  },
]

export default function CertificationQualiopi() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>
      <NavBar activeHref={QUALIOPI.page} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#1B3A6B 0%,#0d1e3d 100%)", padding: "64px 24px 48px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            Qualité
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, color: "white", margin: "0 0 20px 0", lineHeight: 1.15 }}>
            Evolutia est un organisme certifié Qualiopi
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 17, lineHeight: 1.75, margin: 0 }}>
            Depuis le {QUALIOPI.debutValidite}, nos processus sont certifiés conformes au référentiel national qualité.
            C&apos;est la condition pour que nos préparations soient finançables par le CPF, votre OPCO ou France Travail.
          </p>
        </div>
      </section>

      {/* Logo + mention obligatoire */}
      <section style={{ padding: "48px 24px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, padding: "32px 28px", display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap", justifyContent: "center", textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={QUALIOPI.logo}
              alt="Qualiopi — processus certifié — République Française"
              style={{ height: 120, width: "auto" }}
            />
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#1a2740", fontWeight: 600, maxWidth: 460 }}>
              {QUALIOPI.mentionLegale}
            </p>
          </div>
        </div>
      </section>

      {/* Le certificat */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>
            Le certificat
          </h2>
          <p style={{ color: "#5a6f8f", fontSize: 15, margin: "0 0 24px 0" }}>
            Certificat délivré à l&apos;issue de l&apos;audit initial conduit par {QUALIOPI.certificateur}.
          </p>

          <div style={{ background: "white", borderRadius: 16, border: "1px solid #D6E4F0", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {LIGNES_CERTIFICAT.map(([label, valeur], i) => (
                  <tr key={label} style={{ borderBottom: i < LIGNES_CERTIFICAT.length - 1 ? "1px solid #EEF5FF" : "none" }}>
                    <th
                      scope="row"
                      style={{ padding: "14px 20px", textAlign: "left", fontSize: 13, fontWeight: 500, color: "#5a6f8f", width: 260, verticalAlign: "top" }}
                    >
                      {label}
                    </th>
                    <td style={{ padding: "14px 20px", fontSize: 15, color: "#1a2740", fontWeight: 600 }}>{valeur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
            <a
              href={QUALIOPI.pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#1B3A6B", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 26px", borderRadius: 10, textDecoration: "none" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger le certificat (PDF)
            </a>
            <a
              href={QUALIOPI.accreditationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "white", color: "#1B3A6B", border: "1px solid #D6E4F0", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 10, textDecoration: "none" }}
            >
              Portée d&apos;accréditation Cofrac
            </a>
          </div>

          <p style={{ fontSize: 13, color: "#5a6f8f", lineHeight: 1.7, marginTop: 20 }}>
            Pour vérifier la validité de ce certificat, écrivez à{" "}
            <a href={`mailto:${QUALIOPI.certificateurEmail}`} style={{ color: "#1B3A6B", fontWeight: 600 }}>
              {QUALIOPI.certificateurEmail}
            </a>{" "}
            ou appelez {QUALIOPI.certificateur} au {QUALIOPI.certificateurTel} —{" "}
            <a href={QUALIOPI.certificateurUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#1B3A6B", fontWeight: 600 }}>
              certifopac.fr
            </a>
            .
          </p>
        </div>
      </section>

      {/* Ce que ça change pour vous */}
      <section style={{ padding: "0 24px 56px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ background: "white", border: "1px solid #D6E4F0", borderLeft: "4px solid #F5A623", borderRadius: 12, padding: "26px 28px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: "#1B3A6B", margin: "0 0 12px 0" }}>
              Ce que la certification change pour vous
            </h2>
            <p style={{ fontSize: 15, color: "#3a4f6a", lineHeight: 1.75, margin: "0 0 16px 0" }}>
              La certification Qualiopi atteste de la qualité du processus mis en œuvre par Evolutia. Elle conditionne
              l&apos;accès aux fonds publics et mutualisés de la formation professionnelle : sans elle, ni le CPF, ni un
              OPCO, ni France Travail ne peuvent financer une préparation.
            </p>
            <Link href="/financement-tarifs" style={{ color: "#1B3A6B", fontWeight: 700, fontSize: 15, textDecoration: "underline", textUnderlineOffset: 3 }}>
              Voir les solutions de financement
            </Link>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section style={{ padding: "0 24px 56px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>
            Nos engagements qualité
          </h2>
          <p style={{ color: "#5a6f8f", fontSize: 15, margin: "0 0 28px 0" }}>
            Les exigences du référentiel national qualité, telles qu&apos;elles s&apos;appliquent concrètement chez Evolutia.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="qualiopi-grid">
            {ENGAGEMENTS.map((e) => (
              <div key={e.titre} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "24px 26px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1B3A6B", margin: "0 0 10px 0" }}>{e.titre}</h3>
                <p style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 14px 0" }}>{e.texte}</p>
                <Link href={e.lien.href} style={{ color: "#1B3A6B", fontWeight: 600, fontSize: 14, textDecoration: "underline", textUnderlineOffset: 3 }}>
                  {e.lien.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réclamations */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "26px 28px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: "#1B3A6B", margin: "0 0 12px 0" }}>
              Une réclamation, un différend ?
            </h2>
            <p style={{ fontSize: 15, color: "#3a4f6a", lineHeight: 1.75, margin: "0 0 12px 0" }}>
              Toute réclamation peut être adressée par courriel à{" "}
              <a href="mailto:contact@evolutiaformation.fr" style={{ color: "#1B3A6B", fontWeight: 600 }}>
                contact@evolutiaformation.fr
              </a>{" "}
              ou par courrier à Evolutia, Immeuble La Coupole, Grand-Camp, 97139 Les Abymes. Chaque réclamation est
              enregistrée et fait l&apos;objet d&apos;un accusé de réception sous {RECLAMATION_ACCUSE}, puis d&apos;une
              réponse écrite sous {RECLAMATION_REPONSE}.
            </p>
            <p style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.7, margin: 0 }}>
              Si la réponse ne vous satisfait pas, vous pouvez saisir l&apos;organisme certificateur {QUALIOPI.certificateur} à{" "}
              <a href={`mailto:${QUALIOPI.certificateurEmail}`} style={{ color: "#1B3A6B", fontWeight: 600 }}>
                {QUALIOPI.certificateurEmail}
              </a>
              . Les modalités de médiation applicables aux contrats de formation figurent dans nos{" "}
              <Link href="/cgv" style={{ color: "#1B3A6B", fontWeight: 600 }}>
                conditions générales de vente
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1B3A6B 0%,#0d1e3d 100%)", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, color: "white", margin: "0 0 16px 0" }}>
            Faites financer votre préparation
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 16, lineHeight: 1.7, margin: "0 0 30px 0" }}>
            Un entretien gratuit de 30 minutes pour définir votre programme et monter votre dossier de financement.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "16px 36px", borderRadius: 10, textDecoration: "none" }}>
            Réserver un entretien gratuit
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        @media (max-width: 760px) {
          .qualiopi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
