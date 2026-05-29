import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ background: "#1B3A6B", color: "rgba(255,255,255,0.7)", padding: "40px 24px", fontSize: 13 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 16, color: "white", marginBottom: 8 }}>ÉVOLUTIA Formation</div>
          <p style={{ margin: "0 0 4px", lineHeight: 1.7 }}>Immeuble ASP, Grand-Camp<br />97139 Les Abymes, Guadeloupe</p>
          <p style={{ margin: 0 }}>0690 44 73 60 · contact@evolutiaformation.fr</p>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
          {([
            ["Formations", "/formations"],
            ["Notre Méthode", "/notre-methode"],
            ["Calendrier", "/calendrier-concours-guadeloupe"],
            ["Ressources", "/ressources"],
            ["Tarifs & CPF", "/financement-tarifs"],
            ["Contact", "/contact"],
            ["Mentions légales", "/mentions-legales"],
            ["Politique de confidentialité", "/politique-confidentialite"],
            ["CGV", "/cgv"],
          ] as [string, string][]).map(([l, h]) => (
            <Link key={h} href={h} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
