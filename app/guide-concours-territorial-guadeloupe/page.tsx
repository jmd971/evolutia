import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { FORMATIONS_LIST } from "../formations/data"

export const metadata: Metadata = {
  title: "Guide Complet des Concours Territoriaux en Guadeloupe 2026-2027 | Evolutia",
  description: "Tout savoir sur les concours de la fonction publique territoriale en Guadeloupe : catégories A, B, C, dates CDG 971, épreuves, conditions, financement CPF. Guide officiel Evolutia Formation.",
  keywords: "concours territorial Guadeloupe, fonction publique territoriale Guadeloupe, CDG 971, préparation concours territorial, ingénieur territorial Guadeloupe, rédacteur territorial Guadeloupe",
}


const ETAPES = [
  { n: "01", titre: "Choisir son concours", desc: "Identifier le grade et la catégorie qui correspondent à votre profil : diplôme, expérience, statut (externe / interne / 3e voie)." },
  { n: "02", titre: "Vérifier son éligibilité", desc: "Conditions de diplôme, d'ancienneté et de nationalité. Chaque concours a des exigences précises définies par le CNFPT." },
  { n: "03", titre: "S'inscrire au CDG 971", desc: "Les inscriptions sont ouvertes sur des périodes limitées. En Guadeloupe, c'est le CDG 971 qui gère les inscriptions et les calendriers." },
  { n: "04", titre: "Se préparer méthodiquement", desc: "Épreuves écrites et oraux se préparent sur plusieurs mois. Un accompagnement structuré multiplie par 3 les chances de succès." },
  { n: "05", titre: "Passer les épreuves", desc: "Admissibilité (épreuves écrites) puis admission (oral). Les deux phases sont éliminatoires." },
  { n: "06", titre: "Intégrer une collectivité", desc: "Une fois reçu au concours, vous êtes inscrit sur liste d'aptitude et recruté par une collectivité de Guadeloupe." },
]

const CATEGORIES = [
  {
    lettre: "A",
    titre: "Catégorie A — Cadres supérieurs",
    color: "#1B3A6B",
    desc: "Postes d'encadrement et de direction technique ou administrative. Bac+3 minimum (voie externe). Ingénieur territorial, attaché territorial, rédacteur principal de haut rang.",
    exemples: ["Ingénieur Territorial", "Ingénieur en Chef", "Attaché Territorial", "Directeur des Services Techniques"],
    diplome: "Bac+3 (Licence, Bachelor, école d'ingénieur)",
  },
  {
    lettre: "B",
    titre: "Catégorie B — Techniciens et rédacteurs",
    color: "#4BADD4",
    desc: "Postes de techniciens et d'agents administratifs qualifiés. Baccalauréat requis pour la voie externe. Rédacteur, technicien, animateur territorial.",
    exemples: ["Rédacteur Territorial", "Technicien Territorial", "Animateur Territorial", "Éducateur de Jeunes Enfants"],
    diplome: "Baccalauréat (voie externe) ou 2 ans de services en cat. C (interne)",
  },
  {
    lettre: "C",
    titre: "Catégorie C — Agents d'exécution",
    color: "#5a6f8f",
    desc: "Postes d'exécution technique et administrative. CAP/BEP pour les concours de catégorie C supérieure. Agents techniques, agents de maîtrise.",
    exemples: ["Agent de Maîtrise", "Agent Technique Principal", "Adjoint Technique", "Adjoint Administratif"],
    diplome: "CAP/BEP pour cat. C+ (agent de maîtrise) — sans diplôme pour cat. C de base",
  },
]

const DATES_CLES = [
  { concours: "Agent de Maîtrise", inscription: "1er sept. → 7 oct. 2026", epreuves: "28 jan. 2027", statut: "bientot" },
  { concours: "Ingénieur en Chef", inscription: "Clôturées 2026", epreuves: "7 sept. 2026", statut: "ferme" },
  { concours: "Rédacteur Principal (examen)", inscription: "Clôturées 2026", epreuves: "24 sept. 2026", statut: "ferme" },
  { concours: "Ingénieur Territorial", inscription: "8 déc. 2026 → 13 jan. 2027", epreuves: "16 juin 2027", statut: "bientot" },
  { concours: "Rédacteur Territorial", inscription: "2 fév. → 10 mars 2027", epreuves: "14 oct. 2027", statut: "bientot" },
  { concours: "Technicien Territorial", inscription: "À confirmer CDG 971", epreuves: "À confirmer", statut: "bientot" },
]

const ARTICLES = [
  { titre: "Comment travailler en mairie en Guadeloupe ? (avec ou sans concours)", href: "/ressources/travailler-mairie-guadeloupe", cat: "Guide pratique" },
  { titre: "Quel concours territorial passer sans diplôme ?", href: "/ressources/concours-territorial-sans-diplome", cat: "Catégorie C" },
  { titre: "Devenir ATSEM en Guadeloupe : le parcours complet", href: "/ressources/devenir-atsem-guadeloupe", cat: "Guide métier" },
  { titre: "Admissible à un concours du CDG 971 : et maintenant ?", href: "/ressources/admissible-concours-cdg971-et-apres", cat: "Après le concours" },
  { titre: "Comment préparer le concours de Rédacteur Territorial en Guadeloupe (2026-2027)", href: "/ressources/preparer-concours-redacteur-territorial-guadeloupe", cat: "Catégorie B" },
  { titre: "Comment préparer le concours d'Ingénieur Territorial en Guadeloupe (2026-2027)", href: "/ressources/preparer-concours-ingenieur-territorial-guadeloupe", cat: "Catégorie A" },
]

export default function GuideConcoursTerritorialGuadeloupe() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      {/* Navbar */}
      <NavBar activeHref="/guide-concours-territorial-guadeloupe" />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "72px 24px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, background: "rgba(75,173,212,0.07)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <nav style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Accueil</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Guide concours territoriaux Guadeloupe</span>
          </nav>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
            <div style={{ width: 7, height: 7, background: "#F5A623", borderRadius: "50%" }} />
            <span style={{ color: "#F5A623", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>Mis à jour : mai 2026 — Source CDG 971 / CNFPT</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 800, color: "white", lineHeight: 1.2, margin: "0 0 20px" }}>
            Guide complet des concours territoriaux<br />
            <span style={{ color: "#4BADD4" }}>en Guadeloupe</span> 2026-2027
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: "0 0 36px", maxWidth: 680 }}>
            Tout ce que vous devez savoir pour réussir un concours de la fonction publique territoriale en Guadeloupe :
            catégories A, B et C, dates CDG 971, épreuves, conditions d&apos;accès et financement.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="#formations" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 14, padding: "13px 26px", borderRadius: 8, textDecoration: "none" }}>
              Voir les 8 formations
            </Link>
            <Link href="#calendrier" style={{ background: "rgba(255,255,255,0.1)", color: "white", fontWeight: 600, fontSize: 14, padding: "13px 26px", borderRadius: 8, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              Dates 2026-2027
            </Link>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 0" }}>
        <nav style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "20px 28px" }}>
          <p style={{ fontWeight: 700, fontSize: 12, color: "#5a6f8f", letterSpacing: "0.05em", textTransform: "uppercase", margin: "0 0 14px" }}>Sommaire</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 32px" }}>
            {[
              ["#qu-est-ce-que", "Qu'est-ce que la FPT en Guadeloupe ?"],
              ["#categories", "Catégories A, B et C"],
              ["#formations", "Les 8 formations Evolutia"],
              ["#etapes", "Les 6 étapes du concours"],
              ["#calendrier", "Calendrier 2026-2027"],
              ["#preparer", "Comment bien se préparer ?"],
              ["#financement", "Financement CPF et aides"],
              ["#guides", "Guides par concours"],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ color: "#4BADD4", textDecoration: "none", fontSize: 14, lineHeight: 1.6 }}>{label}</a>
            ))}
          </div>
        </nav>
      </div>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

          {/* Section 1 */}
          <section id="qu-est-ce-que">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#1B3A6B", margin: "0 0 20px" }}>
              Qu&apos;est-ce que la fonction publique territoriale en Guadeloupe ?
            </h2>
            <p style={{ lineHeight: 1.8, fontSize: 16, margin: "0 0 16px" }}>
              La <strong>fonction publique territoriale (FPT)</strong> regroupe les agents qui travaillent pour les collectivités
              locales : communes, intercommunalités, Département de la Guadeloupe, Région Guadeloupe et leurs établissements publics.
              En Guadeloupe, on compte plus de <strong>20 000 agents territoriaux</strong> répartis entre les 32 communes,
              la CARL (Communauté d&apos;Agglomération de la Riviera du Levant), le Département et la Région.
            </p>
            <p style={{ lineHeight: 1.8, fontSize: 16, margin: "0 0 16px" }}>
              Pour intégrer la FPT en tant que fonctionnaire titulaire, il faut <strong>réussir un concours ou un examen professionnel</strong>.
              Ces concours sont organisés par le <strong>Centre de Gestion de la Guadeloupe (CDG 971)</strong> pour la quasi-totalité
              des concours de catégorie B et C, et par le <strong>CNFPT</strong> pour les concours de catégorie A.
            </p>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.2)", borderRadius: 12, padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {[
                { val: "32", label: "Communes en Guadeloupe" },
                { val: "CDG 971", label: "Organise la plupart des concours" },
                { val: "3 voies", label: "Externe, interne, 3e voie" },
              ].map(s => (
                <div key={s.val} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: "#1B3A6B" }}>{s.val}</div>
                  <div style={{ fontSize: 13, color: "#5a6f8f", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 — Catégories */}
          <section id="categories">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#1B3A6B", margin: "0 0 20px" }}>
              Catégories A, B et C : laquelle vous correspond ?
            </h2>
            <p style={{ lineHeight: 1.8, fontSize: 16, margin: "0 0 24px" }}>
              Les concours territoriaux sont organisés en trois catégories selon le niveau de qualification et de responsabilité.
              Choisir la bonne catégorie est la première étape — et la plus stratégique.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {CATEGORIES.map(c => (
                <div key={c.lettre} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 14, padding: "24px 28px", borderLeft: `5px solid ${c.color}` }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: 10, background: c.color, color: "white", fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center" }}>{c.lettre}</div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a2740", margin: "0 0 6px" }}>{c.titre}</h3>
                      <p style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 24, flexWrap: "wrap", paddingTop: 14, borderTop: "1px solid #EEF5FF" }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#5a6f8f", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Diplôme requis (externe)</div>
                      <div style={{ fontSize: 13, color: "#1a2740", fontWeight: 500 }}>{c.diplome}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#5a6f8f", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Exemples de postes</div>
                      <div style={{ fontSize: 13, color: "#1a2740" }}>{c.exemples.slice(0, 3).join(" · ")}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Formations */}
          <section id="formations">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px" }}>
              Les concours et examens préparés par Evolutia Formation
            </h2>
            <p style={{ fontSize: 16, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 28px" }}>
              Evolutia Formation prépare aux concours et examens professionnels les plus passés en Guadeloupe,
              du grade C supérieur jusqu&apos;à la catégorie A+.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {FORMATIONS_LIST.map(f => (
                <Link key={f.slug} href={`/formations/${f.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "20px", height: "100%", borderTop: `3px solid ${f.color}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: f.color, textTransform: "uppercase", letterSpacing: "0.04em" }}>{f.categorie}{f.nouveau && <span style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 800, padding: "2px 7px", borderRadius: 5, marginLeft: 6 }}>NOUVEAU</span>}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#F5A623" }}>{f.taux}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#1B3A6B", margin: "0 0 8px", lineHeight: 1.3 }}>{f.titre}</h3>
                    <p style={{ fontSize: 13, color: "#5a6f8f", lineHeight: 1.5, margin: "0 0 14px" }}>{f.desc}</p>
                    <span style={{ fontSize: 12, color: "#4BADD4", fontWeight: 600 }}>Voir la formation →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 4 — Étapes */}
          <section id="etapes">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px" }}>
              Les 6 étapes pour réussir votre concours territorial
            </h2>
            <p style={{ fontSize: 16, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 28px" }}>
              De la décision d&apos;y aller jusqu&apos;à la prise de poste, voici le parcours type d&apos;un candidat en Guadeloupe.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ETAPES.map((e, i) => (
                <div key={e.n} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "20px 24px" }}>
                  <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: "50%", background: i === 3 ? "#F5A623" : "#1B3A6B", color: "white", fontWeight: 800, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>{e.n}</div>
                  <div>
                    <strong style={{ fontSize: 15, color: "#1a2740", display: "block", marginBottom: 5 }}>{e.titre}</strong>
                    <p style={{ margin: 0, fontSize: 14, color: "#5a6f8f", lineHeight: 1.6 }}>{e.desc}</p>
                    {i === 3 && (
                      <Link href="/notre-methode" style={{ display: "inline-block", marginTop: 10, fontSize: 13, color: "#4BADD4", fontWeight: 600, textDecoration: "none" }}>
                        Découvrir la méthode Evolutia →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Calendrier */}
          <section id="calendrier">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px" }}>
              Calendrier des concours 2026-2027 en Guadeloupe
            </h2>
            <p style={{ fontSize: 16, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
              Dates officielles CDG 971 et CNFPT. Les inscriptions sont limitées dans le temps — ne les manquez pas.
            </p>
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#1B3A6B", color: "white" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Concours</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Inscriptions</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Épreuves</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {DATES_CLES.map((d, i) => (
                    <tr key={d.concours} style={{ background: i % 2 === 0 ? "white" : "#F8FAFF", borderBottom: "1px solid #D6E4F0" }}>
                      <td style={{ padding: "12px 16px", color: "#1a2740", fontWeight: 500 }}>{d.concours}</td>
                      <td style={{ padding: "12px 16px", color: "#5a6f8f" }}>{d.inscription}</td>
                      <td style={{ padding: "12px 16px", color: "#1B3A6B", fontWeight: 600 }}>{d.epreuves}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <span style={{ background: d.statut === "bientot" ? "rgba(75,173,212,0.1)" : "rgba(90,111,143,0.1)", color: d.statut === "bientot" ? "#2e8ab0" : "#5a6f8f", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100 }}>
                          {d.statut === "bientot" ? "À venir" : "Clôturé"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href="/calendrier-concours-guadeloupe" style={{ fontSize: 14, color: "#4BADD4", fontWeight: 600, textDecoration: "none" }}>
              → Voir le calendrier complet 2026-2027
            </Link>
          </section>

          {/* Section 6 — Comment se préparer */}
          <section id="preparer">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#1B3A6B", margin: "0 0 20px" }}>
              Comment bien se préparer à un concours territorial en Guadeloupe ?
            </h2>
            <p style={{ lineHeight: 1.8, fontSize: 16, margin: "0 0 20px" }}>
              Les concours territoriaux ont un taux de réussite faible pour les candidats non préparés.
              Une préparation sérieuse et structurée change radicalement les résultats.
              Voici ce que font différemment les candidats qui réussissent.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { icon: "📋", titre: "Analyser les épreuves en détail", desc: "Chaque concours a des épreuves spécifiques. Comprendre ce que le jury évalue vraiment est la première étape d'une préparation efficace." },
                { icon: "🗓", titre: "Commencer tôt", desc: "Les candidats qui réussissent commencent leur préparation 9 à 18 mois avant les épreuves. Commencer à J-2 mois est une erreur fréquente." },
                { icon: "✍️", titre: "S'entraîner sur des sujets réels", desc: "Les annales CNFPT et CDG 971 sont la référence. Chaque sujet traîné et corrigé vaut 10 heures de révision passive." },
                { icon: "🎯", titre: "Connaître le contexte guadeloupéen", desc: "Les jurys CDG 971 valorisent les candidats qui maîtrisent les enjeux locaux : institutions, politiques publiques, actualité de l'archipel." },
                { icon: "🎬", titre: "Simuler l'oral en conditions réelles", desc: "L'oral se prépare en s'y confrontant. Les simulations filmées avec débriefing sont le moyen le plus efficace de progresser rapidement." },
                { icon: "💰", titre: "Mobiliser les financements disponibles", desc: "CPF, ANFH, France Travail — les aides sont nombreuses. Ne pas les utiliser revient à financer seul une préparation qui peut être prise en charge." },
              ].map(s => (
                <div key={s.titre} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "20px" }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>{s.icon}</div>
                  <strong style={{ fontSize: 14, color: "#1a2740", display: "block", marginBottom: 6 }}>{s.titre}</strong>
                  <p style={{ margin: 0, fontSize: 13, color: "#5a6f8f", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <Link href="/notre-methode" style={{ fontSize: 14, color: "#4BADD4", fontWeight: 600, textDecoration: "none" }}>
                → Découvrir la méthode Evolutia en détail
              </Link>
            </div>
          </section>

          {/* Section 7 — Financement */}
          <section id="financement">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#1B3A6B", margin: "0 0 20px" }}>
              Financement : CPF, ANFH et autres aides
            </h2>
            <p style={{ lineHeight: 1.8, fontSize: 16, margin: "0 0 24px" }}>
              La préparation aux concours territoriaux est éligible à plusieurs dispositifs de financement.
              La plupart des candidats peuvent financer leur préparation sans avance de frais.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "CPF — Compte Personnel de Formation", who: "Tous les actifs", desc: "Droits acquis tout au long de votre carrière. Utilisables directement sur moncompteformation.gouv.fr. Evolutia est référencé sur la plateforme.", color: "#1B3A6B" },
                { label: "ANFH — Association Nationale pour la Formation du personnel Hospitalier et Territorial", who: "Agents de la FPT", desc: "Votre collectivité cotise à l'ANFH, qui peut financer tout ou partie de votre préparation. Renseignez-vous auprès de votre DRH ou de votre centre de gestion.", color: "#4BADD4" },
                { label: "France Travail Guadeloupe", who: "Demandeurs d'emploi", desc: "France Travail Guadeloupe peut cofinancer la préparation aux concours territoriaux dans le cadre d'un projet professionnel validé par votre conseiller.", color: "#5a6f8f" },
              ].map(f => (
                <div key={f.label} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 4, minWidth: 4, alignSelf: "stretch", borderRadius: 4, background: f.color }} />
                  <div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                      <strong style={{ fontSize: 14, color: "#1a2740" }}>{f.label}</strong>
                      <span style={{ background: f.color + "15", color: f.color, fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 100 }}>{f.who}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 13, color: "#5a6f8f", lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <Link href="/financement-tarifs" style={{ fontSize: 14, color: "#4BADD4", fontWeight: 600, textDecoration: "none" }}>
                → Voir tous les tarifs et modalités de financement
              </Link>
            </div>
          </section>

          {/* Section 8 — Guides */}
          <section id="guides">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px" }}>
              Guides détaillés par concours
            </h2>
            <p style={{ fontSize: 16, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
              Chaque concours a ses spécificités. Consultez nos guides complets pour connaître les épreuves, les dates et les stratégies de préparation concours par concours.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ARTICLES.map(a => (
                <Link key={a.href} href={a.href} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "22px 26px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                    <div>
                      <span style={{ background: "rgba(27,58,107,0.07)", color: "#1B3A6B", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100, display: "inline-block", marginBottom: 10 }}>{a.cat}</span>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#1B3A6B", margin: 0, lineHeight: 1.35 }}>{a.titre}</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </Link>
              ))}
              <div style={{ background: "#F8FAFF", border: "1px dashed #D6E4F0", borderRadius: 12, padding: "22px 26px", textAlign: "center" }}>
                <p style={{ fontSize: 14, color: "#5a6f8f", margin: "0 0 10px" }}>D&apos;autres guides par concours arrivent prochainement (Technicien Territorial, Agent de Maîtrise, Rédacteur Principal…)</p>
                <Link href="/ressources" style={{ fontSize: 13, color: "#4BADD4", fontWeight: 600, textDecoration: "none" }}>Voir toutes les ressources →</Link>
              </div>
            </div>
          </section>

          {/* CTA final */}
          <section style={{ background: "linear-gradient(135deg, #1B3A6B, #0d1e3d)", borderRadius: 16, padding: "48px 40px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "white", margin: "0 0 16px" }}>
              Prêt(e) à vous lancer ?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
              Un entretien gratuit avec notre équipe pour identifier le concours qui correspond à votre profil
              et construire votre plan de préparation personnalisé.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "15px 32px", borderRadius: 8, textDecoration: "none" }}>
                Réserver un entretien gratuit
              </Link>
              <Link href="/formations" style={{ background: "rgba(255,255,255,0.1)", color: "white", fontWeight: 600, fontSize: 15, padding: "15px 32px", borderRadius: 8, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                Voir toutes les formations
              </Link>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 16 }}>
              Evolutia Formation — Immeuble ASP, Grand-Camp, Les Abymes · 0690 44 73 60
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </div>
  )
}
