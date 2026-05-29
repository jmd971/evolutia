import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notre Méthode | Evolutia Formation Guadeloupe",
  description: "Découvrez la méthode Evolutia : préparation personnalisée aux concours territoriaux en Guadeloupe. Formateurs experts, simulations réelles, suivi individuel.",
};

const PILIERS = [
  {
    num: "01",
    titre: "Diagnostic personnalisé",
    desc: "Dès le premier entretien, nous évaluons votre profil, votre niveau et votre objectif. Chaque candidat repart avec un plan de préparation sur-mesure, adapté à son emploi du temps et à la date de son concours.",
    points: ["Entretien d'orientation gratuit", "Bilan de compétences administratives", "Plan de préparation individualisé", "Calendrier de révision personnalisé"],
    color: "#1B3A6B",
  },
  {
    num: "02",
    titre: "Formation intensive et ciblée",
    desc: "Nos contenus sont calqués sur les programmes officiels CNFPT et les sujets réels des concours guadeloupéens. Pas de cours génériques — chaque séance cible précisément les épreuves de votre concours.",
    points: ["Contenus conformes au référentiel CNFPT", "Sujets réels des sessions CDG 971", "Focus sur les spécificités guadeloupéennes", "Format présentiel (Grand-Camp) + distanciel"],
    color: "#4BADD4",
  },
  {
    num: "03",
    titre: "Entraînement en conditions réelles",
    desc: "Réussir un concours territorial s'apprend en s'y confrontant. Nous organisons des simulations écrites et des jurys blancs filmés pour que le jour J ne soit plus une surprise mais une confirmation.",
    points: ["Compositions chronométrées sur sujets officiels", "Corrections détaillées et individualisées", "Jurys blancs filmés pour les épreuves orales", "Débriefing vidéo + coaching progression"],
    color: "#F5A623",
  },
  {
    num: "04",
    titre: "Suivi et accompagnement continu",
    desc: "La préparation ne s'arrête pas en salle de cours. Un formateur référent reste disponible pour répondre à vos questions, ajuster votre programme et vous soutenir jusqu'au résultat final.",
    points: ["Formateur référent dédié tout au long de la préparation", "Disponibilité par téléphone et e-mail", "Ajustement du programme en temps réel", "Suivi jusqu'aux résultats d'admission"],
    color: "#1B3A6B",
  },
];

const CHIFFRES = [
  { val: "85%", label: "Taux de réussite moyen 2023" },
  { val: "+500", label: "Lauréats depuis 2014" },
  { val: "10 ans", label: "D'expérience en Guadeloupe" },
  { val: "8", label: "Formations disponibles" },
];

export default function NotreMethode() {
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
            {([
              ["Formations", "/formations"],
              ["Notre Méthode", "/notre-methode"],
              ["Calendrier", "/calendrier-concours-guadeloupe"],
              ["Témoignages", "/temoignages-laureats"],
              ["Tarifs & CPF", "/financement-tarifs"],
              ["Contact", "/contact"],
            ] as [string, string][]).map(([label, href]) => (
              <Link key={href} href={href} style={{ color: href === "/notre-methode" ? "white" : "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: href === "/notre-methode" ? 700 : 500, padding: "6px 12px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap", borderBottom: href === "/notre-methode" ? "2px solid #F5A623" : "none" }}>
                {label}
              </Link>
            ))}
            <Link href="/contact" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap", marginLeft: 8 }}>
              Réserver un entretien
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Notre approche</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "white", margin: "0 0 24px 0", lineHeight: 1.15 }}>
            Une méthode construite<br />pour réussir en Guadeloupe
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, lineHeight: 1.8, margin: "0 0 48px 0", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            Depuis 10 ans, nous avons affiné une approche unique ancrée dans les réalités de la fonction publique territoriale guadeloupéenne. 85% de nos candidats réussissent leur concours.
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {CHIFFRES.map((c, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(75,173,212,0.2)", borderRadius: 12, padding: "20px 28px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: "#F5A623" }}>{c.val}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 4 piliers */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>La méthode en 4 étapes</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#1B3A6B", margin: 0 }}>De l&apos;inscription à l&apos;admission</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {PILIERS.map((p, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: 48, alignItems: "center", direction: i % 2 === 0 ? "ltr" : "rtl" }}>
                <div style={{ background: p.color, borderRadius: 20, padding: "48px 40px", direction: "ltr" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 800, color: "rgba(255,255,255,0.15)", lineHeight: 1, marginBottom: 8 }}>{p.num}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "white", margin: "0 0 16px 0" }}>{p.titre}</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
                </div>
                <div style={{ direction: "ltr" }}>
                  {p.points.map((pt, j) => (
                    <div key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: j < p.points.length - 1 ? 20 : 0 }}>
                      <div style={{ width: 28, height: 28, background: p.color + "20", border: `2px solid ${p.color}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      <span style={{ fontSize: 16, color: "#3a4f6a", lineHeight: 1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formateurs */}
      <section style={{ background: "white", padding: "80px 24px", borderTop: "1px solid #D6E4F0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Nos formateurs</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 24px 0" }}>Des professionnels de la FPT guadeloupéenne</h2>
          <p style={{ color: "#5a6f8f", fontSize: 17, lineHeight: 1.8, margin: "0 0 48px 0" }}>
            Tous nos formateurs sont d&apos;anciens ou actuels professionnels de la fonction publique territoriale. Ils connaissent les jurys locaux, les attentes du CDG 971 et les spécificités du contexte guadeloupéen. Ce n&apos;est pas une formation générique — c&apos;est une préparation ancrée dans votre réalité professionnelle.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "16px 36px", borderRadius: 10, textDecoration: "none" }}>
            Réserver mon entretien d&apos;orientation gratuit
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "white", margin: "0 0 16px 0" }}>Prêt(e) à commencer votre préparation ?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.7, margin: "0 0 32px 0" }}>Un entretien gratuit de 30 minutes pour évaluer votre profil et définir votre plan d&apos;action.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none" }}>Réserver un entretien gratuit</Link>
            <Link href="/formations" style={{ background: "transparent", color: "white", fontWeight: 600, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none", border: "2px solid rgba(255,255,255,0.3)" }}>Voir les formations</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#08111E", padding: "40px 24px 24px", borderTop: "1px solid rgba(75,173,212,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/logo-evolutia.png" alt="Évolutia" width={36} height={36} style={{ borderRadius: 6, background: "white", padding: 2 }} />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 15, color: "white" }}>ÉVOLUTIA</div>
              <div style={{ fontSize: 8, color: "#F5A623", letterSpacing: "0.12em" }}>CENTRE DE FORMATION</div>
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>© 2025 Evolutia Formation. Tous droits réservés.</div>
          <div style={{ display: "flex", gap: 20 }}>
            {([["Accueil", "/"], ["Formations", "/formations"], ["Contact", "/contact"]] as [string,string][]).map(([label, href]) => (
              <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
        </div>
      </footer>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>
    </div>
  );
}
