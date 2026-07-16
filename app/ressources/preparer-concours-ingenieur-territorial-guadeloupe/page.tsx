import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Comment préparer le concours Ingénieur Territorial en Guadeloupe (2026-2027) | Evolutia",
  description: "Guide complet concours ingénieur territorial Guadeloupe : épreuves, conditions, dates CNFPT 2026-2027, programme de préparation et financement CPF. Par Evolutia Formation.",
}

export default function ArticleIngenieurTerritorial() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      {/* Navbar */}
      <NavBar activeHref="/ressources" />

      {/* Breadcrumb */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 24px 0" }}>
        <nav style={{ fontSize: 13, color: "#5a6f8f" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <Link href="/ressources" style={{ color: "#5a6f8f", textDecoration: "none" }}>Ressources</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <span style={{ color: "#1a2740" }}>Concours Ingénieur Territorial</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Catégorie A</span>
            <span style={{ background: "rgba(75,173,212,0.1)", color: "#2e8ab0", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Concours Territorial</span>
            <span style={{ background: "rgba(245,166,35,0.12)", color: "#b37a00", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guide 2026-2027</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Comment préparer le concours d&apos;Ingénieur Territorial en Guadeloupe (2026-2027)
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            L&apos;ingénieur territorial est le concours de catégorie A le plus exigeant de la fonction publique territoriale.
            Il ouvre l&apos;accès aux postes de direction technique dans les collectivités de Guadeloupe.
            Voici le guide complet pour réussir dès la première tentative.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid #D6E4F0", fontSize: 13, color: "#5a6f8f" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1B3A6B", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14 }}>E</div>
              <span>Équipe Evolutia Formation</span>
            </div>
            <span>·</span>
            <span>Mis à jour : mai 2026</span>
            <span>·</span>
            <span>Lecture : 8 min</span>
          </div>
        </header>

        {/* Sommaire */}
        <nav style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "24px 28px", marginBottom: 48 }}>
          <p style={{ fontWeight: 700, fontSize: 13, color: "#5a6f8f", letterSpacing: "0.05em", textTransform: "uppercase", margin: "0 0 16px" }}>Dans cet article</p>
          <ol style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["#quoi", "Qu'est-ce que le concours d'Ingénieur Territorial ?"],
              ["#specialites", "Les 7 spécialités disponibles"],
              ["#epreuves", "Les épreuves en détail"],
              ["#conditions", "Conditions d'inscription"],
              ["#dates", "Dates clés 2026-2027 en Guadeloupe"],
              ["#preparation", "Comment préparer efficacement ?"],
              ["#erreurs", "Les 5 erreurs qui font échouer"],
              ["#financement", "Financement CPF et aides"],
              ["#accompagnement", "Se préparer avec Evolutia"],
            ].map(([href, label]) => (
              <li key={href as string}>
                <a href={href as string} style={{ color: "#4BADD4", textDecoration: "none", fontSize: 15, lineHeight: 1.5 }}>{label as string}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          {/* Section 1 */}
          <section id="quoi">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Qu&apos;est-ce que le concours d&apos;Ingénieur Territorial ?
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              L&apos;ingénieur territorial est un cadre d&apos;emploi de <strong>catégorie A</strong> de la filière technique de la fonction publique territoriale.
              Ces agents pilotent des projets techniques d&apos;envergure au sein des collectivités : construction de bâtiments publics,
              gestion des réseaux d&apos;eau, aménagement du territoire, transformation numérique, gestion des risques naturels.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              En Guadeloupe, les postes d&apos;ingénieur territorial sont particulièrement recherchés dans les grandes collectivités
              (Région Guadeloupe, Département, communes des Abymes, Pointe-à-Pitre, Baie-Mahault), notamment sur les spécialités
              <strong> infrastructure et réseaux</strong>, <strong>bâtiment</strong> et <strong>prévention des risques naturels</strong>.
            </p>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#1B3A6B" }}>À savoir :</strong> Le concours d&apos;ingénieur territorial est l&apos;un des plus sélectifs
              de la FPT. Le taux de réussite national ne dépasse pas 10-15% sans préparation sérieuse.
              Avec un accompagnement structuré chez Evolutia, notre taux atteint <strong style={{ color: "#F5A623" }}>82%</strong>.
            </div>
          </section>

          {/* Section 2 */}
          <section id="specialites">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Les 7 spécialités disponibles
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Vous choisissez une spécialité lors de l&apos;inscription. Les épreuves techniques varient selon celle-ci.
              En Guadeloupe, certaines spécialités sont particulièrement adaptées au contexte insulaire.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { spec: "Infrastructure et réseaux", note: "Très demandée en Guadeloupe (eau, assainissement, voirie)", star: true },
                { spec: "Bâtiment et construction", note: "Forte demande dans les communes", star: true },
                { spec: "Ingénierie, informatique et systèmes", note: "Secteur en forte croissance", star: false },
                { spec: "Prévention et gestion des risques", note: "Spécialité stratégique en contexte insulaire", star: true },
                { spec: "Urbanisme et aménagement", note: "Projets d'aménagement régionaux", star: false },
                { spec: "Mécanique", note: "Maintenance des parcs de véhicules", star: false },
                { spec: "Électricité et électronique", note: "Transition énergétique", star: false },
              ].map(s => (
                <div key={s.spec} style={{ background: "white", border: `1px solid ${s.star ? "rgba(75,173,212,0.4)" : "#D6E4F0"}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <strong style={{ fontSize: 13, color: "#1a2740", lineHeight: 1.4 }}>{s.spec}</strong>
                    {s.star && <span style={{ background: "#4BADD4", color: "white", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100, whiteSpace: "nowrap" }}>Prioritaire</span>}
                  </div>
                  <p style={{ margin: "6px 0 0", fontSize: 12, color: "#5a6f8f", lineHeight: 1.5 }}>{s.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="epreuves">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 20px" }}>
              Les épreuves en détail
            </h2>

            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1B3A6B", margin: "0 0 12px" }}>Épreuves d&apos;admissibilité (écrites)</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {[
                {
                  label: "Externe — Note sur dossier de spécialité — 5 heures",
                  coeff: "Coeff. 5",
                  color: "#1B3A6B",
                  desc: "Unique épreuve écrite de la voie externe : rédaction d'une note à partir de l'analyse d'un dossier, tenant compte du contexte technique, économique ou juridique. Le dossier porte sur la spécialité choisie à l'inscription. Capacité d'analyse rapide, hiérarchisation de l'information et expression irréprochable exigées — c'est l'épreuve la plus discriminante.",
                },
                {
                  label: "Interne — 3 épreuves écrites",
                  coeff: "Coeff. 3+3+7",
                  color: "#4BADD4",
                  desc: "La voie interne comporte trois écrits : mathématiques et physique appliquées (4 h, coeff. 3), note à partir d'un dossier de spécialité (4 h, coeff. 3) et établissement d'un projet ou étude dans l'option choisie (8 h, coeff. 7).",
                },
              ].map(e => (
                <div key={e.label} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "20px 24px", borderLeft: `4px solid ${e.color}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                    <strong style={{ fontSize: 15, color: "#1a2740" }}>{e.label}</strong>
                    <span style={{ background: e.color, color: "white", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100, whiteSpace: "nowrap" }}>{e.coeff}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 14, color: "#5a6f8f", lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1B3A6B", margin: "0 0 12px" }}>Épreuve d&apos;admission (orale)</h3>
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "20px 24px", borderLeft: "4px solid #F5A623" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                <strong style={{ fontSize: 15, color: "#1a2740" }}>Entretien avec le jury — 40 minutes</strong>
                <span style={{ background: "#F5A623", color: "#1B3A6B", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100, whiteSpace: "nowrap" }}>Coeff. 5</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#5a6f8f", lineHeight: 1.7 }}>
                Entretien en deux parties de 15 à 20 minutes chacune : d&apos;abord des questions sur l&apos;option choisie au sein
                de votre spécialité, puis l&apos;évaluation de votre aptitude à vous intégrer dans l&apos;environnement professionnel
                et à résoudre les problèmes techniques ou d&apos;encadrement d&apos;un ingénieur. Les jurys CDG 971 sont attentifs aux spécificités insulaires de la Guadeloupe : gestion des risques
                cycloniques, contraintes des îles, enjeux de la transition énergétique dans les DOM.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="conditions">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Conditions d&apos;inscription
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  voie: "Concours externe",
                  color: "#1B3A6B",
                  conditions: [
                    "Diplôme Bac+3 minimum (licence, bachelor) dans la spécialité",
                    "Ou titre reconnu équivalent par la commission de reconnaissance",
                    "Pas de condition d'âge ni de nationalité (UE)",
                  ],
                },
                {
                  voie: "Concours interne",
                  color: "#4BADD4",
                  conditions: [
                    "Être fonctionnaire ou agent territorial titulaire",
                    "4 ans de services effectifs dans un cadre d'emploi de catégorie A ou B",
                    "Être en activité, en détachement ou en disponibilité",
                  ],
                },
                {
                  voie: "3e voie",
                  color: "#F5A623",
                  conditions: [
                    "8 ans d'expérience professionnelle dans le secteur public ou privé",
                    "Expérience dans un domaine correspondant à la spécialité choisie",
                    "Mandat électif ou activité associative pouvant être prise en compte",
                  ],
                },
              ].map(v => (
                <div key={v.voie} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "20px 24px" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "white", background: v.color, borderRadius: 6, padding: "5px 14px", marginBottom: 14, display: "inline-block" }}>{v.voie}</div>
                  <ul style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 8 }}>
                    {v.conditions.map(c => <li key={c} style={{ fontSize: 14, color: "#1a2740", lineHeight: 1.6 }}>{c}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section id="dates">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Dates clés 2026-2027 en Guadeloupe
            </h2>
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#1B3A6B", color: "white" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Étape</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Date</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ouverture des inscriptions", "8 décembre 2026", "À venir", "venir"],
                    ["Clôture des inscriptions", "13 janvier 2027", "À venir", "venir"],
                    ["Épreuves écrites (admissibilité)", "16 juin 2027", "À venir", "venir"],
                    ["Résultats d'admissibilité", "Septembre 2027 (estimé)", "À confirmer", "confirmer"],
                    ["Épreuves orales (admission)", "Octobre-novembre 2027 (estimé)", "À confirmer", "confirmer"],
                    ["Examen professionnel interne", "18 juin 2026", "Clôturé", "cloture"],
                  ].map(([etape, date, statut, type], i) => (
                    <tr key={etape} style={{ background: i % 2 === 0 ? "white" : "#F8FAFF", borderBottom: "1px solid #D6E4F0" }}>
                      <td style={{ padding: "12px 16px", color: "#1a2740", fontWeight: 500 }}>{etape}</td>
                      <td style={{ padding: "12px 16px", color: "#1B3A6B", fontWeight: 600 }}>{date}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <span style={{
                          background: type === "venir" ? "rgba(75,173,212,0.1)" : type === "cloture" ? "rgba(90,111,143,0.1)" : "rgba(245,166,35,0.12)",
                          color: type === "venir" ? "#2e8ab0" : type === "cloture" ? "#5a6f8f" : "#b37a00",
                          fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 100
                        }}>{statut}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 13, color: "#5a6f8f", margin: "12px 0 0", lineHeight: 1.6 }}>
              Source : <a href="https://www.cnfpt.fr" style={{ color: "#4BADD4" }} target="_blank" rel="noopener noreferrer">CNFPT</a> et <a href="https://www.cdg971.fr" style={{ color: "#4BADD4" }} target="_blank" rel="noopener noreferrer">CDG 971</a>.
              Vérifiez toujours les dates officielles avant toute inscription.
            </p>
            <div style={{ background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 10, padding: "14px 18px", marginTop: 16, fontSize: 14 }}>
              <strong style={{ color: "#b37a00" }}>Conseil :</strong> Les inscriptions ouvrent le <strong>8 décembre 2026</strong>.
              Pour être prêt le jour J, commencez votre préparation <strong>dès maintenant</strong> — soit 18 mois avant les épreuves écrites.
              C&apos;est le délai optimal pour une préparation sérieuse sur ce concours.
            </div>
          </section>

          {/* Section 6 */}
          <section id="preparation">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Comment préparer efficacement ?
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Le concours d&apos;ingénieur territorial exige une préparation de <strong>9 à 18 mois</strong>.
              C&apos;est le concours territorial qui demande le plus de travail — et celui où l&apos;accompagnement fait la plus grande différence.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  step: "1",
                  titre: "Choisissez votre spécialité avec soin",
                  desc: "La spécialité doit correspondre à votre formation ET aux postes disponibles dans votre territoire. En Guadeloupe, « Infrastructure et réseaux » et « Bâtiment » offrent le plus d'opportunités. Ne choisissez pas une spécialité uniquement parce qu'elle vous semble plus facile — le jury détecte immédiatement les candidats mal positionnés.",
                },
                {
                  step: "2",
                  titre: "Maîtrisez la note de synthèse avant tout",
                  desc: "La note sur dossier (5 heures, coeff. 5) est l'épreuve qui élimine le plus de candidats. Elle se travaille sur des mois, pas des semaines. Objectif : produire une note structurée tenant compte du contexte technique, économique et juridique du dossier. Les 10 premières notes que vous rédigerez seront mauvaises — c'est normal et nécessaire.",
                },
                {
                  step: "3",
                  titre: "Approfondissez votre veille technique et réglementaire",
                  desc: "La note technique évalue votre maîtrise des normes, des réglementations et des pratiques professionnelles actuelles de votre spécialité. En Guadeloupe, vous devez connaître les spécificités locales : normes parasismiques, réglementation thermique DOM, schéma directeur d'eau potable, PLU des principales communes.",
                },
                {
                  step: "4",
                  titre: "Préparez l'oral comme une présentation managériale",
                  desc: "Le jury d'ingénieur territorial attend un futur cadre, pas un technicien. Travaillez votre posture de décideur : comment présenteriez-vous un projet complexe à un élu ? Comment gérez-vous les priorités en contexte insulaire avec des contraintes budgétaires ? Les simulations filmées sont indispensables à ce niveau.",
                },
                {
                  step: "5",
                  titre: "Ancrez votre préparation dans le contexte guadeloupéen",
                  desc: "Les enjeux territoriaux de la Guadeloupe sont spécifiques : lutte contre l'érosion littorale, gestion des eaux pluviales, résilience face aux cyclones, transition vers les énergies renouvelables (objectif 100% ENR de la Région), retard d'entretien du patrimoine bâti. Un candidat qui connaît ces enjeux se distingue immédiatement.",
                },
              ].map(s => (
                <div key={s.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, minWidth: 40, borderRadius: "50%", background: "#1B3A6B", color: "white", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.step}</div>
                  <div>
                    <strong style={{ fontSize: 15, color: "#1a2740", display: "block", marginBottom: 6 }}>{s.titre}</strong>
                    <p style={{ margin: 0, fontSize: 14, color: "#5a6f8f", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section id="erreurs">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Les 5 erreurs qui font échouer
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { n: "01", titre: "Sous-estimer la note de synthèse", desc: "Beaucoup de candidats ingénieurs pensent que leur culture technique compensera une note de synthèse faible. Non : c'est une compétence distincte, académique, qui s'apprend. Une note de synthèse à 8/20 élimine même le meilleur technicien." },
                { n: "02", titre: "Choisir la mauvaise spécialité", desc: "Certains candidats choisissent la spécialité « Informatique » car elle leur semble moins technique que « Réseaux ». Erreur : le jury évalue la maîtrise réelle du domaine, pas la facilité perçue. Choisissez votre spécialité principale." },
                { n: "03", titre: "Négliger les réglementations DOM", desc: "En Guadeloupe, les normes parasismiques (zone 4-5), les règles thermiques DOM-TOM et les contraintes insulaires créent un cadre réglementaire distinct de la métropole. Un candidat qui ignore ces spécificités perd des points sur la note technique." },
                { n: "04", titre: "Préparer l'oral après l'admissibilité", desc: "L'entretien avec le jury (40 minutes, coeff. 5 — autant que l'écrit) nécessite des mois de travail sur les questions d'option, la posture et la connaissance des enjeux managériaux. Le commencer à J-30 des résultats d'admissibilité est une erreur fatale." },
                { n: "05", titre: "Se préparer sans correction externe", desc: "À ce niveau de concours, l'autoévaluation est insuffisante. La note technique exige une relecture par un expert de la spécialité ; la note de synthèse doit être corrigée par quelqu'un qui connaît les attentes réelles des jurys territoriaux." },
              ].map(e => (
                <div key={e.n} style={{ display: "flex", gap: 16, background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "20px", borderLeft: "4px solid #F5A623" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#F5A623", fontFamily: "monospace", minWidth: 36 }}>{e.n}</div>
                  <div>
                    <strong style={{ fontSize: 15, color: "#1a2740", display: "block", marginBottom: 6 }}>{e.titre}</strong>
                    <p style={{ margin: 0, fontSize: 14, color: "#5a6f8f", lineHeight: 1.7 }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 */}
          <section id="financement">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Financement CPF et aides disponibles
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              La préparation au concours d&apos;ingénieur territorial est éligible au <strong>CPF</strong>.
              En tant qu&apos;agent de la FPT, votre collectivité peut également cofinancer votre préparation via l&apos;<strong>ANFH</strong>.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { label: "CPF (Mon Compte Formation)", desc: "Droits acquis sur votre activité. Mobilisables directement sur moncompteformation.gouv.fr." },
                { label: "ANFH (agents FPT)", desc: "L'ANFH finance la formation des agents territoriaux. Renseignez-vous auprès de votre DRH." },
                { label: "France Travail", desc: "Pour les demandeurs d'emploi : aide à la formation disponible via France Travail Guadeloupe." },
              ].map(f => (
                <div key={f.label} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "16px 18px" }}>
                  <strong style={{ fontSize: 13, color: "#1B3A6B", display: "block", marginBottom: 6 }}>{f.label}</strong>
                  <p style={{ margin: 0, fontSize: 13, color: "#5a6f8f", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14, color: "#5a6f8f", margin: "12px 0 0" }}>
              → <Link href="/financement-tarifs" style={{ color: "#4BADD4" }}>Voir tous les modes de financement</Link>
            </p>
          </section>

          {/* CTA */}
          <section id="accompagnement" style={{ background: "linear-gradient(135deg, #1B3A6B, #122852)", borderRadius: 16, padding: "40px 36px", color: "white" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "white", margin: "0 0 16px" }}>
              Se préparer avec Evolutia Formation
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 24px", color: "rgba(255,255,255,0.8)", fontSize: 16 }}>
              Notre programme Ingénieur Territorial est conçu pour les candidats sérieux : contenus calés sur le référentiel CNFPT,
              formateurs issus de la FPT guadeloupéenne, simulations jury filmées. En 2023, <strong style={{ color: "#F5A623" }}>82% de nos candidats</strong> préparés sur ce concours ont été reçus.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
              {["Note de synthèse — méthode CNFPT", "Note technique par spécialité", "Jurys blancs filmés", "Financement CPF / ANFH"].map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 14px", fontSize: 13 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {p}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/formations/ingenieur-territorial-guadeloupe" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 8, textDecoration: "none" }}>
                Voir la formation Ingénieur Territorial
              </Link>
              <Link href="/contact" style={{ background: "rgba(255,255,255,0.1)", color: "white", fontWeight: 600, fontSize: 14, padding: "14px 28px", borderRadius: 8, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                Demander un entretien gratuit
              </Link>
            </div>
          </section>

        </div>

        {/* Articles liés */}
        <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid #D6E4F0" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1B3A6B", margin: "0 0 20px" }}>À lire aussi</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { titre: "Comment préparer le concours de Rédacteur Territorial en Guadeloupe", href: "/ressources/preparer-concours-redacteur-territorial-guadeloupe" },
              { titre: "Calendrier des concours territoriaux en Guadeloupe 2026-2027", href: "/calendrier-concours-guadeloupe" },
              { titre: "Toutes nos formations aux concours territoriaux", href: "/formations" },
            ].map(a => (
              <Link key={a.href} href={a.href} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "18px 20px", textDecoration: "none", display: "block" }}>
                <p style={{ margin: 0, fontSize: 14, color: "#1B3A6B", fontWeight: 600, lineHeight: 1.5 }}>{a.titre}</p>
                <span style={{ fontSize: 12, color: "#4BADD4", marginTop: 8, display: "block" }}>Lire →</span>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
