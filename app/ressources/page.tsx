import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Ressources — Guides et conseils concours territoriaux Guadeloupe | Evolutia",
  description: "Guides pratiques, conseils de préparation et actualités des concours de la fonction publique territoriale en Guadeloupe. Par Evolutia Formation.",
}

const ARTICLES = [
  {
    titre: "Comment préparer le concours de Rédacteur Territorial en Guadeloupe (2026-2027)",
    desc: "Épreuves, dates CDG 971, programme de révision et erreurs à éviter. Le guide complet pour les candidats en Guadeloupe.",
    href: "/ressources/preparer-concours-redacteur-territorial-guadeloupe",
    cat: "Catégorie B",
    temps: "7 min",
    date: "Mai 2026",
  },
]

export default function RessourcesPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

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
              <Link key={l.href} href={l.href} style={{ color: l.href === "/ressources" ? "white" : "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 13, fontWeight: l.href === "/ressources" ? 700 : 500, padding: "8px 12px", borderRadius: 6 }}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" style={{ marginLeft: 8, background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 8, textDecoration: "none" }}>
              Réserver un entretien
            </Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "52px 24px 80px" }}>
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 16px" }}>
            Ressources & Guides
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: 0, maxWidth: 600 }}>
            Guides pratiques, méthodes de préparation et actualités des concours territoriaux en Guadeloupe — rédigés par l'équipe Evolutia Formation.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {ARTICLES.map(a => (
            <Link key={a.href} href={a.href} style={{ textDecoration: "none", display: "block" }}>
              <article style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "28px 32px", transition: "box-shadow 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(27,58,107,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100 }}>{a.cat}</span>
                  <span style={{ color: "#5a6f8f", fontSize: 12 }}>{a.temps} de lecture · {a.date}</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1B3A6B", margin: "0 0 10px", lineHeight: 1.35 }}>{a.titre}</h2>
                <p style={{ margin: "0 0 16px", fontSize: 14, color: "#5a6f8f", lineHeight: 1.7 }}>{a.desc}</p>
                <span style={{ fontSize: 13, color: "#4BADD4", fontWeight: 600 }}>Lire l'article →</span>
              </article>
            </Link>
          ))}
        </div>
      </main>

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
