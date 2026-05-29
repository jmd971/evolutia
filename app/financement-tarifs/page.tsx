import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs & Financement CPF | Evolutia Formation Guadeloupe",
  description: "Découvrez les tarifs des formations Evolutia et les options de financement CPF, OPCO, et aides Pôle Emploi. Formation éligible CPF en Guadeloupe.",
};

const FORMATIONS_TARIFS = [
  { titre: "Préparation Oraux", duree: "20–40h", prix: "À partir de 890 €", cat: "Toutes cat.", cpf: true },
  { titre: "Rédacteur Principal (RAEP)", duree: "40–60h", prix: "À partir de 1 490 €", cat: "Cat. B+", cpf: true },
  { titre: "Agent de Maîtrise", duree: "60–80h", prix: "À partir de 1 890 €", cat: "Cat. C+", cpf: true },
  { titre: "Ingénieur en Chef", duree: "60–80h", prix: "À partir de 2 190 €", cat: "Cat. A+", cpf: true },
  { titre: "Technicien Territorial", duree: "80–120h", prix: "À partir de 2 490 €", cat: "Cat. B", cpf: true },
  { titre: "Rédacteur Territorial", duree: "80–120h", prix: "À partir de 2 490 €", cat: "Cat. B", cpf: true },
  { titre: "Ingénieur Territorial", duree: "120–180h", prix: "À partir de 3 290 €", cat: "Cat. A", cpf: true },
  { titre: "Ingénieur Territorial Externe", duree: "100–140h", prix: "À partir de 2 890 €", cat: "Cat. A", cpf: true },
];

const FINANCEMENTS = [
  { titre: "Compte Personnel de Formation (CPF)", desc: "Toutes nos formations sont éligibles CPF. Utilisez votre solde sur moncompteformation.gouv.fr pour financer tout ou partie de votre préparation sans avance de frais.", badge: "Sans avance de frais", color: "#1B3A6B" },
  { titre: "OPCO (pour les salariés)", desc: "Si vous êtes salarié(e), votre employeur peut financer votre formation via votre OPCO (Opérateur de Compétences). Nous vous accompagnons dans les démarches.", badge: "Plan de formation", color: "#4BADD4" },
  { titre: "France Travail (ex Pôle Emploi)", desc: "Si vous êtes demandeur(se) d'emploi, France Travail peut financer votre formation. Des tarifs adaptés sont proposés sous conditions.", badge: "Sous conditions", color: "#F5A623" },
  { titre: "Prise en charge individuelle", desc: "Vous financez vous-même ? Des facilités de paiement sont disponibles. Contactez-nous pour un devis personnalisé et des modalités adaptées à votre situation.", badge: "Échelonnement possible", color: "#1B3A6B" },
];

export default function FinancementTarifs() {
  return (
    <div style={{ fontFamily:"'Inter', system-ui, sans-serif", color:"#1a2740", background:"#F8FAFF" }}>

      {/* Navbar */}
      <header style={{ position:"sticky", top:0, zIndex:50, background:"rgba(27,58,107,0.97)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(75,173,212,0.2)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between", height:68 }}>
          <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
            <Image src="/logo-evolutia.png" alt="Évolutia Formation" width={48} height={48} style={{ borderRadius:8, background:"white", padding:2 }} priority />
            <div>
              <div style={{ fontFamily:"'Playfair Display', serif", fontWeight:800, fontSize:18, color:"white", lineHeight:1.1 }}>ÉVOLUTIA</div>
              <div style={{ fontSize:9, color:"#F5A623", letterSpacing:"0.15em", fontWeight:600, textTransform:"uppercase" }}>Centre de Formation</div>
            </div>
          </Link>
          <nav style={{ display:"flex", gap:4, alignItems:"center" }}>
            {([["Formations","/formations"],["Notre Méthode","/notre-methode"],["Calendrier","/calendrier-concours-guadeloupe"],["Témoignages","/temoignages-laureats"],["Tarifs & CPF","/financement-tarifs"],["Contact","/contact"]] as [string,string][]).map(([label,href]) => (
              <Link key={href} href={href} style={{ color:href==="/financement-tarifs"?"white":"rgba(255,255,255,0.8)", fontSize:13, fontWeight:href==="/financement-tarifs"?700:500, padding:"6px 12px", borderRadius:6, textDecoration:"none", whiteSpace:"nowrap", borderBottom:href==="/financement-tarifs"?"2px solid #F5A623":"none" }}>{label}</Link>
            ))}
            <Link href="/contact" style={{ background:"#F5A623", color:"#1B3A6B", fontWeight:700, fontSize:13, padding:"10px 20px", borderRadius:8, textDecoration:"none", whiteSpace:"nowrap", marginLeft:8 }}>Réserver un entretien</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#1B3A6B 0%,#0d1e3d 100%)", padding:"64px 24px 48px" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <div style={{ color:"#4BADD4", fontSize:12, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:16 }}>Tarifs & Financement</div>
          <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,4vw,48px)", fontWeight:800, color:"white", margin:"0 0 20px 0", lineHeight:1.15 }}>Votre formation financée<br/>à 100% avec le CPF</h1>
          <p style={{ color:"rgba(255,255,255,0.75)", fontSize:17, lineHeight:1.75, margin:0 }}>Toutes nos formations sont éligibles au Compte Personnel de Formation. Investir dans votre réussite ne devrait pas peser sur votre budget.</p>
        </div>
      </section>

      {/* Options financement */}
      <section style={{ padding:"64px 24px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ color:"#4BADD4", fontSize:12, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>Options de financement</div>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(26px,3vw,38px)", fontWeight:800, color:"#1B3A6B", margin:0 }}>Plusieurs solutions pour financer votre préparation</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:24 }}>
            {FINANCEMENTS.map((f,i) => (
              <div key={i} style={{ background:"white", border:"1px solid #D6E4F0", borderLeft:`4px solid ${f.color}`, borderRadius:12, padding:"28px 26px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                  <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:18, fontWeight:700, color:"#1B3A6B", margin:0, flex:1, paddingRight:12 }}>{f.titre}</h3>
                  <span style={{ background:f.color+"15", color:f.color, fontSize:11, fontWeight:700, padding:"4px 10px", borderRadius:6, whiteSpace:"nowrap", flexShrink:0 }}>{f.badge}</span>
                </div>
                <p style={{ fontSize:14, color:"#5a6f8f", lineHeight:1.7, margin:0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau tarifs */}
      <section style={{ padding:"0 24px 64px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div style={{ color:"#4BADD4", fontSize:12, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>Nos tarifs</div>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(26px,3vw,38px)", fontWeight:800, color:"#1B3A6B", margin:"0 0 12px 0" }}>Tarifs indicatifs par formation</h2>
            <p style={{ color:"#5a6f8f", fontSize:15, margin:0 }}>Tarifs indicatifs — devis personnalisé sur demande. Financement CPF possible sur l&apos;ensemble des formations.</p>
          </div>
          <div style={{ background:"white", borderRadius:16, overflow:"hidden", border:"1px solid #D6E4F0" }}>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr style={{ background:"#1B3A6B" }}>
                  {["Formation","Catégorie","Durée","Tarif indicatif","CPF"].map(h => (
                    <th key={h} style={{ padding:"16px 20px", textAlign:"left", color:"white", fontSize:12, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FORMATIONS_TARIFS.map((f,i) => (
                  <tr key={i} style={{ background:i%2===0?"white":"#F8FAFF", borderBottom:"1px solid #D6E4F0" }}>
                    <td style={{ padding:"16px 20px", fontWeight:600, color:"#1B3A6B", fontSize:14 }}>{f.titre}</td>
                    <td style={{ padding:"16px 20px" }}><span style={{ background:"#EEF5FF", color:"#1B3A6B", fontSize:11, fontWeight:700, padding:"3px 8px", borderRadius:5 }}>{f.cat}</span></td>
                    <td style={{ padding:"16px 20px", color:"#5a6f8f", fontSize:13 }}>{f.duree}</td>
                    <td style={{ padding:"16px 20px", fontWeight:700, color:"#1a2740", fontSize:14 }}>{f.prix}</td>
                    <td style={{ padding:"16px 20px" }}>{f.cpf && <span style={{ background:"#F0FDF4", color:"#16a34a", fontSize:11, fontWeight:700, padding:"3px 8px", borderRadius:5 }}>✓ CPF</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize:13, color:"#5a6f8f", marginTop:16, textAlign:"center" }}>* Tarifs HT, variables selon le programme personnalisé. Contactez-nous pour un devis exact.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"linear-gradient(135deg,#1B3A6B 0%,#0d1e3d 100%)", padding:"64px 24px", textAlign:"center" }}>
        <div style={{ maxWidth:600, margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(24px,3vw,36px)", fontWeight:800, color:"white", margin:"0 0 16px 0" }}>Obtenez votre devis personnalisé</h2>
          <p style={{ color:"rgba(255,255,255,0.7)", fontSize:16, lineHeight:1.7, margin:"0 0 32px 0" }}>Un entretien gratuit de 30 minutes pour définir votre programme et votre plan de financement.</p>
          <Link href="/contact" style={{ display:"inline-block", background:"#F5A623", color:"#1B3A6B", fontWeight:700, fontSize:15, padding:"16px 36px", borderRadius:10, textDecoration:"none" }}>Réserver un entretien gratuit</Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background:"#08111E", padding:"40px 24px 24px", borderTop:"1px solid rgba(75,173,212,0.15)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Image src="/logo-evolutia.png" alt="Évolutia" width={36} height={36} style={{ borderRadius:6, background:"white", padding:2 }} />
            <div><div style={{ fontFamily:"'Playfair Display', serif", fontWeight:800, fontSize:15, color:"white" }}>ÉVOLUTIA</div><div style={{ fontSize:8, color:"#F5A623", letterSpacing:"0.12em" }}>CENTRE DE FORMATION</div></div>
          </div>
          <div style={{ color:"rgba(255,255,255,0.3)", fontSize:12 }}>© 2025 Evolutia Formation. Tous droits réservés.</div>
          <div style={{ display:"flex", gap:20 }}>
            {([["Accueil","/"],[" Formations","/formations"],["Contact","/contact"]] as [string,string][]).map(([label,href]) => (
              <Link key={href} href={href} style={{ color:"rgba(255,255,255,0.4)", fontSize:12, textDecoration:"none" }}>{label}</Link>
            ))}
          </div>
        </div>
      </footer>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>
    </div>
  );
}
