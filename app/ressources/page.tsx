import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Ressources — Guides concours territoriaux Guadeloupe | Evolutia",
  description: "Guides pratiques, conseils de préparation et actualités des concours de la fonction publique territoriale en Guadeloupe. Par Evolutia Formation.",
}

const ARTICLES = [
  {
    titre: "Comment préparer le concours d'Ingénieur Territorial en Guadeloupe (2026-2027)",
    desc: "Spécialités, épreuves, dates CNFPT, 5 erreurs à éviter et programme de préparation. Le guide complet pour le concours Cat. A le plus sélectif.",
    href: "/ressources/preparer-concours-ingenieur-territorial-guadeloupe",
    cat: "Catégorie A",
    temps: "8 min",
    date: "Mai 2026",
  },
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

      <NavBar activeHref="/ressources" />

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "52px 24px 80px" }}>
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 16px" }}>
            Ressources & Guides
          </h1>
          <p style={{ fontSize: 18, color: "#5a6f8f", lineHeight: 1.7, margin: 0, maxWidth: 600 }}>
            Guides pratiques, méthodes de préparation et actualités des concours territoriaux en Guadeloupe — rédigés par l&apos;équipe Evolutia Formation.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {ARTICLES.map(a => (
            <Link key={a.href} href={a.href} style={{ textDecoration: "none", display: "block" }}>
              <article style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "28px 32px" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <span style={{ background: "rgba(27,58,107,0.08)", color: "#1B3A6B", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100 }}>{a.cat}</span>
                  <span style={{ color: "#5a6f8f", fontSize: 12 }}>{a.temps} de lecture · {a.date}</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1B3A6B", margin: "0 0 10px", lineHeight: 1.35 }}>{a.titre}</h2>
                <p style={{ margin: "0 0 16px", fontSize: 14, color: "#5a6f8f", lineHeight: 1.7 }}>{a.desc}</p>
                <span style={{ fontSize: 13, color: "#4BADD4", fontWeight: 600 }}>Lire l&apos;article →</span>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
