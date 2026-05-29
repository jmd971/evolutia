"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const NAV_LINKS = [
  { label: "Formations", href: "/formations" },
  { label: "Notre Méthode", href: "/notre-methode" },
  { label: "Calendrier", href: "/calendrier-concours-guadeloupe" },
  { label: "Ressources", href: "/ressources" },
  { label: "Contact", href: "/contact" },
]

export default function NavBar({ activeHref }: { activeHref?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(27,58,107,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(75,173,212,0.2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/logo-evolutia.png" alt="Évolutia Formation" width={44} height={44} style={{ borderRadius: 8, background: "white", padding: 2 }} priority />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 17, color: "white", lineHeight: 1.1 }}>ÉVOLUTIA</div>
            <div style={{ fontSize: 9, color: "#F5A623", letterSpacing: "0.15em", fontWeight: 600, textTransform: "uppercase" }}>Centre de Formation</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{ color: activeHref === l.href ? "white" : "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 13, fontWeight: activeHref === l.href ? 700 : 500, padding: "8px 12px", borderRadius: 6, borderBottom: activeHref === l.href ? "2px solid #F5A623" : "2px solid transparent" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{ marginLeft: 8, background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 13, padding: "10px 18px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap" }}>
            Réserver un entretien
          </Link>
        </nav>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }} aria-label="Menu">
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu" style={{ background: "rgba(27,58,107,0.99)", borderTop: "1px solid rgba(75,173,212,0.2)", padding: "12px 20px 20px" }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", color: activeHref === l.href ? "white" : "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: 16, fontWeight: activeHref === l.href ? 700 : 500, padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{ display: "block", marginTop: 16, background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 8, textDecoration: "none", textAlign: "center" }}>
            Réserver un entretien gratuit
          </Link>
        </div>
      )}
    </header>
  )
}
