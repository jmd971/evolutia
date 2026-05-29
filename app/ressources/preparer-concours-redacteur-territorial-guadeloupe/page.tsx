import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Comment préparer le concours Rédacteur Territorial en Guadeloupe (2026-2027) | Evolutia",
  description: "Guide complet pour réussir le concours de rédacteur territorial en Guadeloupe : épreuves, programme, dates CDG 971, méthodes de préparation et financement CPF.",
}

export default function ArticleRedacteurTerritorial() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      {/* Navbar */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(27,58,107,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(75,173,212,0.2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/logo-evolutia.png" alt="Évolutia Formation" width={48} height={48} style={{ borderRadius: 8, background: "white", padding: 2 }} priority />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 18, color: "white", lineHeight: 1.1 }}>ÉVOLUTIA</div>
              <div style={{ fontSize: 9, color: "#F5A623", letterSpacing: "0.15em", fontWeight: 600, textTransform: "uppercase" }}>Centre de Formation</div>
            </div>
          </Link>
          <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {[
              { label: "Formations", href: "/formations" },
              { label: "Notre Méthode", href: "/notre-methode" },
              { label: "Calendrier", href: "/calendrier-concours-guadeloupe" },
              { label: "Ressources", href: "/ressources" },
              { label: "Contact", href: "/contact" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 13, fontWeight: 500, padding: "8px 12px", borderRadius: 6 }}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" style={{ marginLeft: 8, background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 8, textDecoration: "none" }}>
              Réserver un entretien
            </Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 24px 0" }}>
        <nav style={{ fontSize: 13, color: "#5a6f8f" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <Link href="/ressources" style={{ color: "#5a6f8f", textDecoration: "none" }}>Ressources</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <span style={{ color: "#1a2740" }}>Concours Rédacteur Territorial</span>
        </nav>
      </div>

      {/* Article */}
      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Catégorie B</span>
            <span style={{ background: "rgba(75,173,212,0.1)", color: "#2e8ab0", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Concours Territorial</span>
            <span style={{ background: "rgba(245,166,35,0.12)", color: "#b37a00", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guide 2026-2027</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Comment préparer le concours de Rédacteur Territorial en Guadeloupe (2026-2027)
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            Le rédacteur territorial est l'un des concours les plus passés de la fonction publique territoriale en Guadeloupe. 
            Voici le guide complet pour comprendre les épreuves, organiser votre préparation et maximiser vos chances de réussite.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid #D6E4F0", fontSize: 13, color: "#5a6f8f" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1B3A6B", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14 }}>E</div>
              <span>Équipe Evolutia Formation</span>
            </div>
            <span>·</span>
            <span>Mis à jour : mai 2026</span>
            <span>·</span>
            <span>Lecture : 7 min</span>
          </div>
        </header>

        {/* Sommaire */}
        <nav style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "24px 28px", marginBottom: 48 }}>
          <p style={{ fontWeight: 700, fontSize: 13, color: "#5a6f8f", letterSpacing: "0.05em", textTransform: "uppercase", margin: "0 0 16px" }}>Dans cet article</p>
          <ol style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["#quoi", "Qu'est-ce que le concours de Rédacteur Territorial ?"],
              ["#epreuves", "Les épreuves en détail"],
              ["#conditions", "Conditions d'inscription"],
              ["#dates", "Dates clés 2026-2027 en Guadeloupe"],
              ["#preparation", "Comment préparer efficacement ?"],
              ["#erreurs", "Les 4 erreurs qui font échouer"],
              ["#financement", "Financement CPF et OPCO"],
              ["#accompagnement", "Se faire accompagner à Evolutia"],
            ].map(([href, label]) => (
              <li key={href as string}>
                <a href={href as string} style={{ color: "#4BADD4", textDecoration: "none", fontSize: 15, lineHeight: 1.5 }}>{label as string}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          <section id="quoi">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Qu'est-ce que le concours de Rédacteur Territorial ?
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Le rédacteur territorial est un grade de <strong>catégorie B</strong> de la fonction publique territoriale. 
              Ces agents exercent des missions administratives polyvalentes au sein des mairies, communautés de communes, 
              départements et régions : instruction de dossiers, rédaction d'actes, accueil du public, gestion budgétaire de proximité.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              En Guadeloupe, le concours est organisé par le <strong>Centre de Gestion de la Guadeloupe (CDG 971)</strong> 
              en lien avec le CNFPT. Il est ouvert à deux voies principales : le concours externe (sur diplôme) 
              et le concours interne (sur ancienneté de service).
            </p>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#1B3A6B" }}>À savoir :</strong> Le rédacteur territorial est l'un des concours 
              de catégorie B les plus accessibles, mais son taux de réussite reste faible faute de préparation adaptée. 
              Avec Evolutia, notre taux de réussite sur ce concours atteint <strong style={{ color: "#F5A623" }}>85%</strong>.
            </div>
          </section>

          <section id="epreuves">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 20px" }}>
              Les épreuves en détail
            </h2>

            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1B3A6B", margin: "0 0 12px" }}>Épreuves d'admissibilité (écrites)</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {[
                {
                  label: "Composition sur programme — 4 heures",
                  coeff: "Coeff. 4",
                  desc: "Rédaction d'une dissertation sur un sujet de culture générale à portée administrative. Le jury évalue votre structuration de la pensée, la maîtrise de la langue française et votre culture des institutions territoriales. C'est l'épreuve reine du concours — elle se prépare sur plusieurs mois.",
                  color: "#1B3A6B",
                },
                {
                  label: "Note de synthèse — 3 heures",
                  coeff: "Coeff. 3",
                  desc: "À partir d'un dossier documentaire de 15-20 pages, vous devez rédiger une note à l'intention d'un élu ou d'un responsable hiérarchique. L'enjeu : extraire l'essentiel, hiérarchiser l'information, rédiger clairement — sans opinion personnelle.",
                  color: "#4BADD4",
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

            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1B3A6B", margin: "0 0 12px" }}>Épreuve d'admission (orale)</h3>
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "20px 24px", borderLeft: "4px solid #F5A623" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                <strong style={{ fontSize: 15, color: "#1a2740" }}>Entretien avec le jury — 25 minutes</strong>
                <span style={{ background: "#F5A623", color: "#1B3A6B", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100, whiteSpace: "nowrap" }}>Coeff. 5</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: "#5a6f8f", lineHeight: 1.7 }}>
                Conversation sur votre parcours, vos motivations et un sujet d'actualité locale ou nationale 
                tiré au sort 10 minutes avant l'entretien. Le jury apprécie la spontanéité, la clarté d'expression 
                et la connaissance des enjeux du territoire guadeloupéen. Cette épreuve est souvent sous-préparée — c'est là que se font la différence.
              </p>
            </div>
          </section>

          <section id="conditions">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Conditions d'inscription
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                {
                  voie: "Concours externe",
                  color: "#1B3A6B",
                  conditions: [
                    "Être âgé d'au moins 16 ans",
                    "Être titulaire du baccalauréat ou d'un titre de niveau IV reconnu équivalent",
                    "Nationalité française ou ressortissant UE",
                  ],
                },
                {
                  voie: "Concours interne",
                  color: "#4BADD4",
                  conditions: [
                    "Être fonctionnaire ou agent public territorial",
                    "Justifier de 2 ans de services effectifs en catégorie C",
                    "Être en activité ou en disponibilité",
                  ],
                },
              ].map(v => (
                <div key={v.voie} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "20px" }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "white", background: v.color, borderRadius: 6, padding: "6px 14px", marginBottom: 16, display: "inline-block" }}>{v.voie}</div>
                  <ul style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 8 }}>
                    {v.conditions.map(c => (
                      <li key={c} style={{ fontSize: 14, color: "#1a2740", lineHeight: 1.6 }}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

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
                    ["Ouverture des inscriptions", "2 février 2027", "À venir"],
                    ["Clôture des inscriptions", "10 mars 2027", "À venir"],
                    ["Épreuves écrites (admissibilité)", "14 octobre 2027", "À venir"],
                    ["Résultats d'admissibilité", "Décembre 2027 (estimé)", "À confirmer"],
                    ["Épreuves orales (admission)", "Janvier-février 2028 (estimé)", "À confirmer"],
                  ].map(([etape, date, statut], i) => (
                    <tr key={etape} style={{ background: i % 2 === 0 ? "white" : "#F8FAFF", borderBottom: "1px solid #D6E4F0" }}>
                      <td style={{ padding: "12px 16px", color: "#1a2740", fontWeight: 500 }}>{etape}</td>
                      <td style={{ padding: "12px 16px", color: "#1B3A6B", fontWeight: 600 }}>{date}</td>
                      <td style={{ padding: "12px 16px" }}>
                        <span style={{ background: statut === "À venir" ? "rgba(75,173,212,0.1)" : "rgba(245,166,35,0.12)", color: statut === "À venir" ? "#2e8ab0" : "#b37a00", fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 100 }}>{statut}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 13, color: "#5a6f8f", margin: "12px 0 0", lineHeight: 1.6 }}>
              Source : <a href="https://www.cdg971.fr" style={{ color: "#4BADD4" }} target="_blank" rel="noopener noreferrer">CDG 971</a> et <a href="https://www.concours-territorial.fr" style={{ color: "#4BADD4" }} target="_blank" rel="noopener noreferrer">concours-territorial.fr</a>. 
              Dates indicatives — vérifiez toujours sur le site officiel avant toute inscription.
            </p>
          </section>

          <section id="preparation">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Comment préparer efficacement ?
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              La préparation d'un concours de rédacteur territorial demande en moyenne <strong>6 à 9 mois de travail régulier</strong>. 
              Voici les étapes clés d'une préparation réussie.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  step: "1",
                  titre: "Analysez les annales (minimum 3 ans)",
                  desc: "Commencez par lire 5 à 10 sujets de composition et de note de synthèse des sessions précédentes. Vous comprendrez la tonalité attendue, le niveau de langue requis et les thèmes récurrents (démocratie locale, transition écologique, numérique dans les collectivités).",
                },
                {
                  step: "2",
                  titre: "Structurez votre culture générale",
                  desc: "Le jury du rédacteur territorial teste votre connaissance des institutions (CGCT, loi NOTRe, loi 3DS), des politiques publiques locales et de l'actualité guadeloupéenne. Lisez la presse quotidiennement, avec un focus sur France-Antilles et les actualités des collectivités.",
                },
                {
                  step: "3",
                  titre: "Entraînez-vous sur des sujets complets en temps limité",
                  desc: "Écrire une composition en 4 heures s'apprend. Les 6 premiers essais sont difficiles — c'est normal. L'objectif est d'automatiser la méthode (introduction, plan en 2 ou 3 parties, transitions, conclusion) pour libérer votre énergie mentale sur le fond.",
                },
                {
                  step: "4",
                  titre: "Préparez l'oral dès le début, pas à la fin",
                  desc: "Beaucoup de candidats négligent l'oral jusqu'à l'admissibilité. Erreur : l'oral se prépare en continu. Entraînez-vous à parler de votre parcours, à structurer une réponse de 2 minutes, et à vous exprimer sur des sujets d'actualité locale en 10 minutes de préparation.",
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

          <section id="erreurs">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Les 4 erreurs qui font échouer
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { n: "01", titre: "Commencer trop tard", desc: "Beaucoup de candidats s'inscrivent sans préparation structurée, en pensant que leur expérience professionnelle suffira. Le concours évalue des compétences académiques précises — elles s'acquièrent par l'entraînement." },
                { n: "02", titre: "Préparer sans correcteur extérieur", desc: "Travailler seul sur ses compositions est trompeur : vous ne voyez pas vos propres habitudes d'écriture et vos plans répétitifs. Une correction par un formateur extérieur est indispensable pour progresser." },
                { n: "03", titre: "Ignorer les spécificités guadeloupéennes", desc: "Le jury du CDG 971 attend des candidats qu'ils connaissent le contexte territorial local : les politiques de la Région Guadeloupe, du Département, des intercommunalités majeures. Un candidat qui cite uniquement des exemples métropolitains est pénalisé." },
                { n: "04", titre: "Négliger la forme au profit du fond", desc: "Une composition brillante sur le fond mais mal rédigée, sans paragraphes clairs ni transitions, ne dépassera pas 10/20. Le jury évalue autant la forme que le fond. Soignez votre expression écrite et votre présentation." },
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

          <section id="financement">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Financement CPF et aides disponibles
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              La préparation aux concours territoriaux est une formation éligible au <strong>Compte Personnel de Formation (CPF)</strong>. 
              Evolutia est référencé sur Mon Compte Formation — vous pouvez mobiliser vos droits pour financer tout ou partie de votre préparation.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { label: "CPF (Mon Compte Formation)", desc: "Droits acquis sur votre activité professionnelle. Utilisables directement en ligne." },
                { label: "OPCO / ANFH", desc: "Si vous êtes agent de la FPT, votre collectivité peut prendre en charge la formation via l'ANFH." },
                { label: "France Travail", desc: "Les demandeurs d'emploi peuvent bénéficier d'un accompagnement de France Travail Guadeloupe." },
              ].map(f => (
                <div key={f.label} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "16px 18px" }}>
                  <strong style={{ fontSize: 13, color: "#1B3A6B", display: "block", marginBottom: 6 }}>{f.label}</strong>
                  <p style={{ margin: 0, fontSize: 13, color: "#5a6f8f", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14, color: "#5a6f8f", margin: "12px 0 0", lineHeight: 1.6 }}>
              → <Link href="/financement-tarifs" style={{ color: "#4BADD4" }}>Voir tous les modes de financement disponibles</Link>
            </p>
          </section>

          <section id="accompagnement" style={{ background: "linear-gradient(135deg, #1B3A6B, #122852)", borderRadius: 16, padding: "40px 36px", color: "white" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "white", margin: "0 0 16px" }}>
              Se préparer avec Evolutia Formation
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 24px", color: "rgba(255,255,255,0.8)", fontSize: 16 }}>
              Notre programme Rédacteur Territorial couvre l'intégralité des épreuves, avec des formateurs qui connaissent 
              les spécificités des jury CDG 971. En 2023, <strong style={{ color: "#F5A623" }}>85% de nos candidats préparés</strong> sur ce concours ont été reçus.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
              {["Programme calé sur les épreuves CDG 971", "Corrections individualisées", "Simulations jury filmées", "Financement CPF disponible"].map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 14px", fontSize: 13 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {p}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/formations/redacteur-territorial-guadeloupe" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 8, textDecoration: "none" }}>
                Voir la formation Rédacteur Territorial
              </Link>
              <Link href="/contact" style={{ background: "rgba(255,255,255,0.1)", color: "white", fontWeight: 600, fontSize: 14, padding: "14px 28px", borderRadius: 8, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                Demander un entretien gratuit
              </Link>
            </div>
          </section>

        </div>

        {/* Articles liés */}
        <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid #D6E4F0" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1B3A6B", margin: "0 0 20px" }}>
            À lire aussi
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { titre: "Calendrier des concours territoriaux en Guadeloupe 2026-2027", href: "/calendrier-concours-guadeloupe" },
              { titre: "Comment financer sa préparation aux concours territoriaux avec le CPF", href: "/financement-tarifs" },
              { titre: "Toutes nos formations aux concours territoriaux en Guadeloupe", href: "/formations" },
            ].map(a => (
              <Link key={a.href} href={a.href} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "18px 20px", textDecoration: "none", display: "block" }}>
                <p style={{ margin: 0, fontSize: 14, color: "#1B3A6B", fontWeight: 600, lineHeight: 1.5 }}>{a.titre}</p>
                <span style={{ fontSize: 12, color: "#4BADD4", marginTop: 8, display: "block" }}>Lire →</span>
              </Link>
            ))}
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer style={{ background: "#1B3A6B", color: "rgba(255,255,255,0.7)", padding: "40px 24px", fontSize: 13 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 16, color: "white", marginBottom: 8 }}>ÉVOLUTIA Formation</div>
            <p style={{ margin: 0, lineHeight: 1.7 }}>Immeuble ASP, Grand-Camp<br />97139 Les Abymes, Guadeloupe</p>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start", fontSize: 13 }}>
            {[["Formations", "/formations"], ["Notre Méthode", "/notre-methode"], ["Calendrier", "/calendrier-concours-guadeloupe"], ["Contact", "/contact"], ["Mentions légales", "/mentions-legales"]].map(([l, h]) => (
              <Link key={h} href={h} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
