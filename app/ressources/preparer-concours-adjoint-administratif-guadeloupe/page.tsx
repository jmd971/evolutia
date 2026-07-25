import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Comment préparer le concours Adjoint Administratif en Guadeloupe (2026-2027) | Evolutia",
  description: "Guide complet pour réussir le concours d'adjoint administratif territorial en Guadeloupe : épreuves, programme, dates CDG 971, méthodes de préparation et financement CPF.",
}

export default function ArticleAdjoIntAdministratif() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      <NavBar activeHref="/ressources" />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 24px 0" }}>
        <nav style={{ fontSize: 13, color: "#5a6f8f" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <Link href="/ressources" style={{ color: "#5a6f8f", textDecoration: "none" }}>Ressources</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <span style={{ color: "#1a2740" }}>Concours Adjoint Administratif</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>

        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Catégorie C</span>
            <span style={{ background: "rgba(75,173,212,0.1)", color: "#2e8ab0", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Concours Territorial</span>
            <span style={{ background: "rgba(245,166,35,0.12)", color: "#b37a00", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guide 2026-2027</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Comment préparer le concours d&apos;Adjoint Administratif Territorial en Guadeloupe (2026-2027)
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            L&apos;adjoint administratif territorial est le concours d&apos;entrée en catégorie C administrative le plus
            accessible de la fonction publique territoriale. En Guadeloupe, il ouvre la porte aux mairies,
            communautés de communes et au Département. Voici tout ce que vous devez savoir pour réussir.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid #D6E4F0", fontSize: 13, color: "#5a6f8f" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1B3A6B", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14 }}>E</div>
              <span>Équipe Evolutia Formation</span>
            </div>
            <span>·</span>
            <span>Mis à jour : juin 2026</span>
            <span>·</span>
            <span>Lecture : 7 min</span>
          </div>
        </header>

        <nav style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "24px 28px", marginBottom: 48 }}>
          <p style={{ fontWeight: 700, fontSize: 13, color: "#5a6f8f", letterSpacing: "0.05em", textTransform: "uppercase", margin: "0 0 16px" }}>Dans cet article</p>
          <ol style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["#quoi", "Qu'est-ce que l'Adjoint Administratif Territorial ?"],
              ["#epreuves", "Les épreuves du concours"],
              ["#conditions", "Conditions d'inscription"],
              ["#dates", "Dates clés 2026-2027 en Guadeloupe"],
              ["#preparation", "Préparer efficacement le concours"],
              ["#evolution", "Évolution de carrière après le concours"],
              ["#financement", "Financement CPF"],
            ].map(([href, label]) => (
              <li key={href as string}>
                <a href={href as string} style={{ color: "#4BADD4", textDecoration: "none", fontSize: 15, lineHeight: 1.5 }}>{label as string}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          <section id="quoi">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Qu&apos;est-ce que l&apos;Adjoint Administratif Territorial ?
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              L&apos;adjoint administratif territorial est un agent de <strong>catégorie C</strong>, premier échelon de la
              fonction publique territoriale. Il assure des missions d&apos;exécution administrative : accueil des usagers,
              saisie et traitement de données, gestion du courrier, instruction de dossiers simples, secrétariat.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              En Guadeloupe, c&apos;est le concours le plus ouvert aux candidats débutants. Il ne requiert aucun diplôme
              au-delà du brevet des collèges (diplôme national du brevet ou DNB). C&apos;est souvent la porte d&apos;entrée
              dans la carrière de nombreux fonctionnaires territoriaux guadeloupéens.
            </p>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#1B3A6B" }}>Perspectives :</strong> L&apos;adjoint administratif peut évoluer vers
              le grade d&apos;adjoint administratif principal de 2ème classe (par avancement), puis de 1ère classe.
              Une promotion interne permet d&apos;accéder au concours de <Link href="/formations/redacteur-territorial-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600 }}>rédacteur territorial (catégorie B)</Link>.
            </div>
          </section>

          <section id="epreuves">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Les épreuves du concours
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Le concours d&apos;adjoint administratif comprend une phase d&apos;admissibilité et une phase d&apos;admission.
              Les épreuves sont volontairement accessibles, mais exigent une préparation méthodique.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  phase: "ADMISSIBILITÉ",
                  color: "#1B3A6B",
                  epreuves: [
                    { nom: "Questionnaire à choix multiples (QCM)", detail: "Questions portant sur les notions élémentaires de la vie administrative, le fonctionnement des collectivités territoriales et les connaissances de l&apos;environnement professionnel.", coeff: 3, duree: "1h" },
                    { nom: "Mise en situation professionnelle écrite", detail: "À partir d&apos;un court dossier documentaire, rédiger une réponse à une commande simple (note, courrier, fiche de synthèse) en lien avec des missions d&apos;adjoint administratif.", coeff: 3, duree: "1h30" },
                  ]
                },
                {
                  phase: "ADMISSION",
                  color: "#4BADD4",
                  epreuves: [
                    { nom: "Entretien avec le jury", detail: "Échange portant sur la motivation, la connaissance du poste et des missions d&apos;un adjoint administratif. Le jury évalue les qualités relationnelles et la capacité à intégrer un service public.", coeff: 5, duree: "15 min" },
                  ]
                }
              ].map((phase, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ background: phase.color, padding: "12px 20px" }}>
                    <span style={{ color: "white", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em" }}>{phase.phase}</span>
                  </div>
                  {phase.epreuves.map((ep, j) => (
                    <div key={j} style={{ padding: "18px 20px", borderBottom: j < phase.epreuves.length - 1 ? "1px solid #EEF5FF" : "none" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                        <div style={{ fontWeight: 600, color: "#1B3A6B", fontSize: 15, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: ep.nom }} />
                        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                          <span style={{ background: "#EEF5FF", color: "#1B3A6B", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4 }}>Coeff. {ep.coeff}</span>
                          <span style={{ background: "rgba(75,173,212,0.1)", color: "#2e8ab0", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4 }}>{ep.duree}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: ep.detail }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section id="conditions">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Conditions d&apos;inscription
            </h2>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 10, padding: "16px 20px", marginBottom: 20, fontSize: 15 }}>
              <strong style={{ color: "#1B3A6B" }}>Bonne nouvelle :</strong> le concours externe d&apos;adjoint administratif
              est ouvert sans condition de diplôme particulière. Le brevet des collèges (ou diplôme équivalent) suffit.
              C&apos;est l&apos;un des concours les plus accessibles de la FPT.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Concours externe", val: "Être titulaire du Brevet des Collèges (DNB) ou d&apos;un titre ou diplôme homologué de niveau V minimum" },
                { label: "Concours interne", val: "Avoir accompli au moins 2 ans de services publics effectifs dans la FPT, FPE ou FPH" },
                { label: "3ème concours", val: "Justifier de 4 ans d&apos;expérience professionnelle dans le secteur privé ou associatif" },
                { label: "Conditions communes", val: "Nationalité UE/EEE, droits civiques, aptitude physique, casier judiciaire vierge" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "14px 18px", alignItems: "flex-start" }}>
                  <div style={{ width: 24, height: 24, background: "#1B3A6B", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.val }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="dates">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Dates clés 2026-2027 en Guadeloupe
            </h2>
            <div style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 10, padding: "16px 20px", marginBottom: 20, fontSize: 15 }}>
              <strong style={{ color: "#b37a00" }}>Important :</strong> les dates sont fixées par le CDG 971 et peuvent
              varier d&apos;une session à l&apos;autre. Consultez régulièrement le site <a href="https://www.cdg971.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1B3A6B", fontWeight: 600 }}>CDG 971</a>.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { etape: "Publication de l&apos;avis de concours", periode: "Selon session — surveillez le site CDG 971" },
                { etape: "Ouverture des inscriptions en ligne", periode: "Sur concours.cdg971.fr" },
                { etape: "Clôture des inscriptions", periode: "Généralement 6 semaines avant les épreuves" },
                { etape: "Épreuves écrites d&apos;admissibilité", periode: "Hiver 2026 ou Printemps 2027 (selon session)" },
                { etape: "Publication de la liste d&apos;admissibilité", periode: "3 à 6 semaines après les écrits" },
                { etape: "Entretien d&apos;admission", periode: "1 à 3 mois après la publication des admissibles" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "center", background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "14px 18px" }}>
                  <div style={{ width: 8, height: 8, background: "#4BADD4", borderRadius: "50%", flexShrink: 0 }} />
                  <div style={{ flex: 1, fontWeight: 600, fontSize: 14, color: "#1B3A6B" }} dangerouslySetInnerHTML={{ __html: item.etape }} />
                  <div style={{ fontSize: 13, color: "#5a6f8f", textAlign: "right" }}>{item.periode}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <Link href="/calendrier-concours-guadeloupe" style={{ color: "#4BADD4", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                → Voir le calendrier complet des concours en Guadeloupe
              </Link>
            </div>
          </section>

          <section id="preparation">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Préparer efficacement le concours
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Bien que catégorie C, le concours d&apos;adjoint administratif territorial n&apos;est pas sans difficulté.
              Le QCM de connaissances administratives et la mise en situation écrite éliminent la majorité
              des candidats non préparés. En Guadeloupe, la compétition est forte car le nombre de postes
              ouverts est souvent inférieur au nombre de candidats.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  titre: "Maîtriser l&apos;organisation des collectivités territoriales",
                  desc: "Le QCM porte sur le rôle des mairies, communautés de communes, départements et régions. En Guadeloupe, connaître les compétences du Département, de la Région et des EPCI (Grand Sud Basse-Terre, Cap Excellence, Nord Grande-Terre) est un vrai avantage."
                },
                {
                  titre: "S&apos;entraîner sur la mise en situation écrite",
                  desc: "L&apos;épreuve de mise en situation demande de rédiger une note ou un courrier court à partir d&apos;un dossier. La structure, l&apos;orthographe et la clarté sont évalués. Des entraînements réguliers sur des sujets types permettent de décrocher rapidement des points."
                },
                {
                  titre: "Préparer l&apos;entretien de motivation",
                  desc: "Le jury évalue votre connaissance du poste d&apos;adjoint administratif et vos motivations pour rejoindre la fonction publique territoriale. Savoir expliquer concrètement pourquoi vous souhaitez servir votre collectivité guadeloupéenne est un facteur de réussite souvent sous-estimé."
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, background: "#1B3A6B", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "white", fontWeight: 800, fontSize: 13 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#1B3A6B", fontSize: 15, marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: item.titre }} />
                    <p style={{ fontSize: 15, color: "#5a6f8f", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="evolution">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Évolution de carrière après le concours
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Réussir le concours d&apos;adjoint administratif n&apos;est pas une fin en soi : c&apos;est une porte d&apos;entrée
              dans une carrière longue. Voici les principaux paliers d&apos;évolution :
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { grade: "Adjoint administratif territorial", niveau: "C2", delai: "Entrée", desc: "Prise de poste. Missions d&apos;exécution administrative, accueil, secrétariat." },
                { grade: "Adjoint administratif principal 2ème cl.", niveau: "C3", delai: "Après 3 ans", desc: "Avancement au choix ou par ancienneté. Missions plus autonomes." },
                { grade: "Adjoint administratif principal 1ère cl.", niveau: "C4", delai: "Après 5-7 ans", desc: "Encadrement possible de petites équipes d&apos;agents de catégorie C." },
                { grade: "Rédacteur territorial (B)", niveau: "B1", delai: "Promotion interne", desc: "Accessible après 4 ans d&apos;ancienneté, par voie interne ou concours." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 0, background: "white", border: "1px solid #D6E4F0", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ width: 4, background: i === 3 ? "#F5A623" : "#1B3A6B", flexShrink: 0 }} />
                  <div style={{ padding: "14px 18px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 4 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B" }}>{item.grade}</div>
                      <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                        <span style={{ background: "#EEF5FF", color: "#1B3A6B", fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 4 }}>{item.niveau}</span>
                        <span style={{ background: "rgba(245,166,35,0.12)", color: "#b37a00", fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 4 }}>{item.delai}</span>
                      </div>
                    </div>
                    <div style={{ fontSize: 13, color: "#5a6f8f", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="financement">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Financement CPF
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              La préparation au concours d&apos;adjoint administratif territorial est <strong>éligible au CPF</strong>.
              Vous pouvez mobiliser vos droits depuis Mon Compte Formation, sans avance de frais dans la plupart des cas.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Demandeurs d&apos;emploi : la préparation peut également être financée par France Travail (Pôle Emploi)
              dans le cadre d&apos;un projet de reconversion vers la fonction publique territoriale.
            </p>
            <div style={{ textAlign: "center" }}>
              <Link href="/financement-tarifs" style={{ display: "inline-block", background: "#1B3A6B", color: "white", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 8, textDecoration: "none" }}>
                Voir toutes les options de financement
              </Link>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #1B3A6B, #0d1e3d)", borderRadius: 16, padding: "40px 32px", marginTop: 64, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 12px" }}>
            Prêt(e) à décrocher votre poste en mairie ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.7, margin: "0 0 28px" }}>
            Entretien gratuit de 30 minutes pour évaluer votre profil et définir votre plan de préparation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/formations/adjoint-administratif-principal-guadeloupe" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 8, textDecoration: "none" }}>
              Voir la formation Adjoint Administratif
            </Link>
            <Link href="/contact" style={{ background: "rgba(255,255,255,0.1)", color: "white", fontWeight: 600, fontSize: 14, padding: "14px 28px", borderRadius: 8, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              Réserver un entretien gratuit
            </Link>
          </div>
        </div>

        {/* Articles liés */}
        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1B3A6B", margin: "0 0 20px" }}>Articles liés</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { titre: "Travailler dans une mairie en Guadeloupe : les voies d&apos;accès", href: "/ressources/travailler-mairie-guadeloupe" },
              { titre: "Passer un concours territorial sans diplôme : est-ce possible ?", href: "/ressources/concours-territorial-sans-diplome" },
              { titre: "Comment s&apos;inscrire au concours territorial au CDG 971", href: "/ressources/inscription-concours-cdg971" },
              { titre: "Financer sa préparation aux concours territoriaux en Guadeloupe", href: "/ressources/financer-preparation-concours-guadeloupe" },
            ].map((a, i) => (
              <Link key={i} href={a.href} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "16px 20px", textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 15, color: "#1B3A6B", fontWeight: 500, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: a.titre }} />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>

      </article>

      <div style={{ background: "white", borderTop: "1px solid #D6E4F0", padding: "16px 24px", fontSize: 12, color: "#8a9ab5", textAlign: "center" }}>
        Source : <a href="https://www.cdg971.fr" style={{ color: "#4BADD4" }} target="_blank" rel="noopener noreferrer">CDG 971</a> et <a href="https://www.cnfpt.fr" style={{ color: "#4BADD4" }} target="_blank" rel="noopener noreferrer">CNFPT</a>.
        Vérifiez toujours les informations sur les sites officiels avant de vous inscrire.
      </div>

      <Footer />

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>
    </div>
  )
}
