import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: "Comment préparer le concours Technicien Territorial en Guadeloupe (2026-2027) | Evolutia",
  description: "Guide complet pour réussir le concours de technicien territorial en Guadeloupe : épreuves, programme, dates CDG 971, méthodes de préparation et financement CPF.",
}

export default function ArticleTechnicienTerritorial() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      <NavBar activeHref="/ressources" />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 24px 0" }}>
        <nav style={{ fontSize: 13, color: "#5a6f8f" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <Link href="/ressources" style={{ color: "#5a6f8f", textDecoration: "none" }}>Ressources</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <span style={{ color: "#1a2740" }}>Concours Technicien Territorial</span>
        </nav>
      </div>

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>

        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Catégorie B</span>
            <span style={{ background: "rgba(75,173,212,0.1)", color: "#2e8ab0", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Concours Territorial</span>
            <span style={{ background: "rgba(245,166,35,0.12)", color: "#b37a00", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>Guide 2026-2027</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#1B3A6B", lineHeight: 1.25, margin: "0 0 20px" }}>
            Comment préparer le concours de Technicien Territorial en Guadeloupe (2026-2027)
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: "0 0 24px" }}>
            Le technicien territorial est le grade technique de catégorie B le plus recruté dans les collectivités
            guadeloupéennes. Voici le guide complet pour comprendre les épreuves, organiser votre préparation
            et maximiser vos chances avec le CDG 971.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid #D6E4F0", fontSize: 13, color: "#5a6f8f" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1B3A6B", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14 }}>E</div>
              <span>Équipe Evolutia Formation</span>
            </div>
            <span>·</span>
            <span>Mis à jour : juin 2026</span>
            <span>·</span>
            <span>Lecture : 8 min</span>
          </div>
        </header>

        <nav style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "24px 28px", marginBottom: 48 }}>
          <p style={{ fontWeight: 700, fontSize: 13, color: "#5a6f8f", letterSpacing: "0.05em", textTransform: "uppercase", margin: "0 0 16px" }}>Dans cet article</p>
          <ol style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["#quoi", "Qu'est-ce que le Technicien Territorial ?"],
              ["#specialites", "Les 9 spécialités du concours"],
              ["#epreuves", "Les épreuves en détail"],
              ["#conditions", "Conditions d'inscription"],
              ["#dates", "Dates clés 2026-2027 en Guadeloupe"],
              ["#preparation", "Comment préparer efficacement ?"],
              ["#erreurs", "Les erreurs les plus fréquentes"],
              ["#financement", "Financement CPF et OPCO"],
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
              Qu&apos;est-ce que le Technicien Territorial ?
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              Le technicien territorial est un agent de <strong>cadre B technique</strong> de la fonction publique territoriale.
              Il encadre et met en œuvre les activités techniques dans des domaines variés : bâtiment, voirie,
              espaces verts, réseaux, systèmes d&apos;information, mécanique ou restauration collective.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              En Guadeloupe, ces postes sont particulièrement recherchés dans les communes du Grand Sud Basse-Terre,
              les communautés d&apos;agglomération et le Département. Le concours est organisé par le <strong>CDG 971</strong> et le CNFPT,
              selon un calendrier propre aux Antilles-Guyane.
            </p>
            <div style={{ background: "rgba(75,173,212,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 10, padding: "16px 20px", fontSize: 15 }}>
              <strong style={{ color: "#1B3A6B" }}>À savoir :</strong> Le technicien territorial peut évoluer vers le grade de
              technicien principal de 1ère classe, puis accéder au cadre A par promotion interne (ingénieur territorial).
              C&apos;est une filière offrant de vraies perspectives de carrière.
            </div>
          </section>

          <section id="specialites">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Les 9 spécialités du concours
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Le concours de technicien territorial se passe obligatoirement dans une <strong>spécialité choisie à l&apos;inscription</strong>.
              Vous ne pouvez pas changer de spécialité après dépôt du dossier.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {[
                { sp: "Bâtiment et travaux", desc: "Construction, rénovation, maintenance" },
                { sp: "Voirie et réseaux divers", desc: "Routes, eau, assainissement, éclairage" },
                { sp: "Espaces verts et naturels", desc: "Parcs, jardins, aménagement paysager" },
                { sp: "Prévention et gestion des risques", desc: "Sécurité, hygiène, incendie" },
                { sp: "Ingénierie, informatique et systèmes", desc: "Réseaux, télécom, systèmes d&apos;info" },
                { sp: "Restauration", desc: "Production culinaire, diététique" },
                { sp: "Mécanique et électromécanique", desc: "Entretien véhicules, équipements" },
                { sp: "Électricité et électronique", desc: "Installations électriques, courant faible" },
                { sp: "Habillement et textile", desc: "Confection, entretien du linge" },
              ].map((item, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B", marginBottom: 4 }}>{item.sp}</div>
                  <div style={{ fontSize: 13, color: "#5a6f8f", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ lineHeight: 1.7, marginTop: 16, fontSize: 15, color: "#5a6f8f" }}>
              En Guadeloupe, les spécialités les plus ouvertes au concours sont <strong>Bâtiment et travaux</strong>,
              <strong> Voirie et réseaux</strong> et <strong>Espaces verts</strong>. Vérifiez sur le site du CDG 971
              quelles spécialités sont ouvertes lors de chaque session.
            </p>
          </section>

          <section id="epreuves">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Les épreuves du concours externe
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Le concours externe de technicien territorial comprend deux phases : admissibilité (écrit) puis admission (oral).
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  phase: "ADMISSIBILITÉ",
                  color: "#1B3A6B",
                  epreuves: [
                    { nom: "Note technique à partir d&apos;un dossier", detail: "Rédiger une note à partir d&apos;un dossier documentaire de 15 à 20 pages portant sur la spécialité choisie.", coeff: 4, duree: "3h" },
                    { nom: "Réponse à des questions techniques", detail: "Questions courtes portant sur la spécialité. Teste les connaissances pratiques et réglementaires.", coeff: 2, duree: "2h" },
                  ]
                },
                {
                  phase: "ADMISSION",
                  color: "#4BADD4",
                  epreuves: [
                    { nom: "Entretien avec le jury", detail: "Exposé d&apos;un projet professionnel (5 min) suivi d&apos;un entretien portant sur la spécialité et les motivations.", coeff: 5, duree: "20 min" },
                    { nom: "Épreuve optionnelle de langue", detail: "Épreuve facultative. Un point au-dessus de 10 est bonifiable.", coeff: 1, duree: "15 min" },
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
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Nationalité", val: "Être ressortissant UE ou d&apos;un État partie à l&apos;accord sur l&apos;EEE" },
                { label: "Diplôme (externe)", val: "Baccalauréat ou diplôme équivalent dans la spécialité concernée" },
                { label: "Ancienneté (interne)", val: "4 ans de services publics effectifs dans la FPT ou FPE" },
                { label: "Droits civiques", val: "Jouir de ses droits civiques, être en règle vis-à-vis du service national" },
                { label: "Aptitude physique", val: "Être médicalement apte à l&apos;exercice des fonctions" },
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
              <strong style={{ color: "#b37a00" }}>Important :</strong> les dates varient selon les sessions et les spécialités ouvertes.
              Consultez toujours le site officiel du <a href="https://www.cdg971.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#1B3A6B", fontWeight: 600 }}>CDG 971</a> pour
              les calendriers définitifs.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { etape: "Ouverture des inscriptions", periode: "Automne 2026 (selon session)" },
                { etape: "Clôture des inscriptions", periode: "2 à 3 mois avant les épreuves" },
                { etape: "Épreuves écrites d&apos;admissibilité", periode: "Hiver / Printemps 2027" },
                { etape: "Publication des résultats d&apos;admissibilité", periode: "4 à 8 semaines après les écrits" },
                { etape: "Épreuves orales d&apos;admission", periode: "3 à 5 mois après les écrits" },
                { etape: "Publication de la liste d&apos;aptitude", periode: "Été / Automne 2027" },
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
              Comment préparer efficacement le concours ?
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Le technicien territorial est un concours <strong>technique et spécialisé</strong>. La note technique
              représente 40% de la note finale — c&apos;est l&apos;épreuve décisive et souvent celle sur laquelle les candidats
              auto-préparés perdent le plus de points.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  titre: "Maîtriser la rédaction de note technique",
                  desc: "La note technique n&apos;est pas un résumé. Elle doit répondre à une commande précise, hiérarchiser les informations du dossier et aboutir à des préconisations opérationnelles. C&apos;est une compétence qui s&apos;acquiert par l&apos;entraînement, pas par la lecture."
                },
                {
                  titre: "Connaître les textes réglementaires de votre spécialité",
                  desc: "Chaque spécialité a ses textes clés : le Code de la Construction pour le bâtiment, le Code de la Voirie Routière, les normes NF pour les espaces verts... Le jury attend une maîtrise précise du cadre réglementaire applicable en Guadeloupe."
                },
                {
                  titre: "S&apos;entraîner sur des sujets officiels CDG 971",
                  desc: "Les sujets de la métropole et des Antilles-Guyane ne sont pas identiques. Les problématiques guadeloupéennes (cyclones, gestion de l&apos;eau, urbanisme en zone sismique) figurent régulièrement dans les dossiers documentaires."
                },
                {
                  titre: "Préparer un projet professionnel solide pour l&apos;oral",
                  desc: "L&apos;entretien d&apos;admission porte sur votre projet et vos motivations. Le jury valorise les candidats qui connaissent précisément le poste visé, les enjeux techniques de leur collectivité et qui ont une vision claire de leur développement professionnel."
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

          <section id="erreurs">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Les erreurs les plus fréquentes
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { erreur: "Choisir sa spécialité selon le poste disponible, pas ses compétences réelles", consequence: "Les épreuves testent des connaissances techniques pointues. Un candidat sans base solide dans la spécialité décroche rarement." },
                { erreur: "Confondre résumé et note technique", consequence: "La note technique a un destinataire, une commande, un plan hiérarchisé. Ce n&apos;est pas une synthèse neutre." },
                { erreur: "Négliger l&apos;actualité locale guadeloupéenne", consequence: "Les sujets intègrent souvent des problématiques propres à la Guadeloupe : gestion post-cyclone, eau, déchets, PLU intercommunal..." },
                { erreur: "Arriver à l&apos;oral sans avoir travaillé le projet professionnel", consequence: "L&apos;entretien dure 20 minutes. Sans préparation structurée, les 5 minutes d&apos;exposé initial sont bâclées et le jury ferme." },
              ].map((item, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, background: "#fee2e2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </div>
                    <div style={{ fontWeight: 600, color: "#1B3A6B", fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.erreur }} />
                  </div>
                  <div style={{ paddingLeft: 30, fontSize: 14, color: "#5a6f8f", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.consequence }} />
                </div>
              ))}
            </div>
          </section>

          <section id="financement">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px" }}>
              Financement CPF et OPCO
            </h2>
            <p style={{ lineHeight: 1.8, margin: "0 0 16px", fontSize: 16 }}>
              La préparation au concours de technicien territorial est <strong>éligible au CPF</strong> (Compte Personnel de Formation).
              Vous pouvez mobiliser vos droits directement depuis Mon Compte Formation, sans avance de frais dans la majorité des cas.
            </p>
            <p style={{ lineHeight: 1.8, margin: "0 0 20px", fontSize: 16 }}>
              Si vous êtes en poste dans une collectivité, renseignez-vous auprès de votre service RH pour une
              prise en charge par votre collectivité (droit à la formation) ou via le CNFPT.
            </p>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <Link href="/financement-tarifs" style={{ display: "inline-block", background: "#1B3A6B", color: "white", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 8, textDecoration: "none" }}>
                Voir toutes les options de financement
              </Link>
            </div>
          </section>

        </div>

        {/* CTA Formation */}
        <div style={{ background: "linear-gradient(135deg, #1B3A6B, #0d1e3d)", borderRadius: 16, padding: "40px 32px", marginTop: 64, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 12px" }}>
            Prêt(e) à préparer le concours de Technicien Territorial ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.7, margin: "0 0 28px" }}>
            Entretien gratuit de 30 minutes pour évaluer votre profil et définir votre plan de préparation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/formations/technicien-territorial-guadeloupe" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 8, textDecoration: "none" }}>
              Voir la formation Technicien Territorial
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
              { titre: "Comment s&apos;inscrire au concours territorial au CDG 971", href: "/ressources/inscription-concours-cdg971" },
              { titre: "Financer sa préparation aux concours territoriaux en Guadeloupe", href: "/ressources/financer-preparation-concours-guadeloupe" },
              { titre: "Travailler dans une mairie en Guadeloupe : les voies d&apos;accès", href: "/ressources/travailler-mairie-guadeloupe" },
              { titre: "Calendrier des concours territoriaux en Guadeloupe 2026-2027", href: "/calendrier-concours-guadeloupe" },
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
