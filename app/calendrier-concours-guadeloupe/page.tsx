import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Calendrier Concours Territoriaux Guadeloupe 2025-2026-2027 | Evolutia",
  description: "Dates des concours et examens de la fonction publique territoriale en Guadeloupe. Périodes d'inscription, épreuves, calendrier officiel CDG 971.",
};

const CONCOURS_2026 = [
  { concours:"Technicien Territorial", cat:"B", type:"Concours", epreuves:"9 avril 2026", inscriptions:"Clôturées", statut:"ferme" },
  { concours:"Adjoint Administratif Principal", cat:"C", type:"Examen prof.", epreuves:"12 mars 2026", inscriptions:"Clôturées", statut:"ferme" },
  { concours:"Ingénieur en Chef (examen prof.)", cat:"A+", type:"Examen prof.", epreuves:"1er juin 2026", inscriptions:"Clôturées", statut:"ferme" },
  { concours:"Ingénieur Territorial (examen prof.)", cat:"A", type:"Examen prof.", epreuves:"18 juin 2026", inscriptions:"Clôturées", statut:"ferme" },
  { concours:"Ingénieur en Chef (concours)", cat:"A+", type:"Concours", epreuves:"7 septembre 2026", inscriptions:"Clôturées", statut:"ferme" },
  { concours:"Rédacteur Principal (examen prof.)", cat:"B+", type:"Examen prof.", epreuves:"24 septembre 2026", inscriptions:"Clôturées", statut:"ferme" },
  { concours:"Agent de Maîtrise", cat:"C+", type:"Concours", epreuves:"28 janvier 2027", inscriptions:"1er sept. → 7 oct. 2026", statut:"ouvert" },
  { concours:"Agent de Maîtrise Principal", cat:"C+", type:"Examen prof.", epreuves:"28 janvier 2027", inscriptions:"1er sept. → 7 oct. 2026", statut:"ouvert" },
];

const CONCOURS_2027 = [
  { concours:"Technicien Principal (examen prof.)", cat:"B", type:"Examen prof.", epreuves:"15 avril 2027", inscriptions:"13 oct. → 18 nov. 2026", statut:"ouvert" },
  { concours:"Rédacteur Territorial", cat:"B", type:"Concours", epreuves:"14 octobre 2027", inscriptions:"2 fév. → 10 mars 2027", statut:"bientot" },
  { concours:"Ingénieur Territorial", cat:"A", type:"Concours", epreuves:"16 juin 2027", inscriptions:"8 déc. 2026 → 13 jan. 2027", statut:"bientot" },
];

const statutStyle: Record<string,{bg:string,text:string,label:string}> = {
  ouvert:  {bg:"#FFF7E6", text:"#d97706", label:"Inscriptions ouvertes"},
  bientot: {bg:"#EEF5FF", text:"#1B3A6B", label:"À venir"},
  ferme:   {bg:"#F3F4F6", text:"#6b7280",  label:"Clôturé"},
};

export default function Calendrier() {
  return (
    <div style={{ fontFamily:"'Inter', system-ui, sans-serif", color:"#1a2740", background:"#F8FAFF" }}>

      {/* Navbar */}
      <NavBar activeHref="/calendrier-concours-guadeloupe" />

      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#1B3A6B 0%,#0d1e3d 100%)", padding:"64px 24px 48px" }}>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <div style={{ color:"#4BADD4", fontSize:12, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:16 }}>CDG 971 Guadeloupe</div>
          <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,4vw,50px)", fontWeight:800, color:"white", margin:"0 0 20px 0", lineHeight:1.15 }}>Calendrier des concours<br/>territoriaux 2026–2027</h1>
          <p style={{ color:"rgba(255,255,255,0.75)", fontSize:17, lineHeight:1.75, margin:"0 0 32px 0" }}>Dates officielles des concours et examens professionnels de la fonction publique territoriale en Guadeloupe. Source : CDG 971 / CNFPT.</p>
          <div style={{ display:"inline-flex", gap:8, background:"rgba(245,166,35,0.15)", border:"1px solid rgba(245,166,35,0.3)", borderRadius:10, padding:"10px 18px", color:"#F5A623", fontSize:13, fontWeight:600 }}>
            ⚠ Vérifiez toujours les dates sur <a href="https://www.cdg971.com/fr/concours-examens/calendrier-et-inscription" target="_blank" rel="noopener noreferrer" style={{ color:"#F5A623" }}>cdg971.com</a> avant de vous inscrire
          </div>
        </div>
      </section>

      {/* Tableau 2026 */}
      <section style={{ padding:"64px 24px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:28, fontWeight:800, color:"#1B3A6B", margin:"0 0 24px 0" }}>Session 2026</h2>
          <div style={{ borderRadius:16, overflow:"hidden", border:"1px solid #D6E4F0" }}>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr style={{ background:"#1B3A6B" }}>
                  {["Concours / Examen","Cat.","Type","Épreuves","Inscriptions","Statut"].map(h => (
                    <th key={h} style={{ padding:"14px 18px", textAlign:"left", color:"white", fontSize:11, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CONCOURS_2026.map((c,i) => {
                  const s = statutStyle[c.statut];
                  return (
                    <tr key={i} style={{ background:i%2===0?"white":"#F8FAFF", borderBottom:"1px solid #D6E4F0" }}>
                      <td style={{ padding:"14px 18px", fontWeight:600, color:"#1B3A6B", fontSize:14 }}>{c.concours}</td>
                      <td style={{ padding:"14px 18px" }}><span style={{ background:"#EEF5FF", color:"#1B3A6B", fontSize:11, fontWeight:700, padding:"3px 8px", borderRadius:5 }}>{c.cat}</span></td>
                      <td style={{ padding:"14px 18px", color:"#5a6f8f", fontSize:12 }}>{c.type}</td>
                      <td style={{ padding:"14px 18px", color:"#3a4f6a", fontSize:13, fontWeight:500 }}>{c.epreuves}</td>
                      <td style={{ padding:"14px 18px", color:"#5a6f8f", fontSize:12 }}>{c.inscriptions}</td>
                      <td style={{ padding:"14px 18px" }}><span style={{ background:s.bg, color:s.text, fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:5, whiteSpace:"nowrap" }}>{s.label}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tableau 2027 */}
      <section style={{ padding:"0 24px 64px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:28, fontWeight:800, color:"#1B3A6B", margin:"0 0 24px 0" }}>Session 2027</h2>
          <div style={{ borderRadius:16, overflow:"hidden", border:"1px solid #D6E4F0" }}>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr style={{ background:"#1B3A6B" }}>
                  {["Concours / Examen","Cat.","Type","Épreuves","Inscriptions","Statut"].map(h => (
                    <th key={h} style={{ padding:"14px 18px", textAlign:"left", color:"white", fontSize:11, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CONCOURS_2027.map((c,i) => {
                  const s = statutStyle[c.statut];
                  return (
                    <tr key={i} style={{ background:i%2===0?"white":"#F8FAFF", borderBottom:"1px solid #D6E4F0" }}>
                      <td style={{ padding:"14px 18px", fontWeight:600, color:"#1B3A6B", fontSize:14 }}>{c.concours}</td>
                      <td style={{ padding:"14px 18px" }}><span style={{ background:"#EEF5FF", color:"#1B3A6B", fontSize:11, fontWeight:700, padding:"3px 8px", borderRadius:5 }}>{c.cat}</span></td>
                      <td style={{ padding:"14px 18px", color:"#5a6f8f", fontSize:12 }}>{c.type}</td>
                      <td style={{ padding:"14px 18px", color:"#3a4f6a", fontSize:13, fontWeight:500 }}>{c.epreuves}</td>
                      <td style={{ padding:"14px 18px", color:"#5a6f8f", fontSize:12 }}>{c.inscriptions}</td>
                      <td style={{ padding:"14px 18px" }}><span style={{ background:s.bg, color:s.text, fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:5, whiteSpace:"nowrap" }}>{s.label}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop:20, padding:"16px 20px", background:"#EEF5FF", borderRadius:10, fontSize:13, color:"#5a6f8f" }}>
            Source : <a href="https://www.cdg971.com/fr/concours-examens/calendrier-et-inscription" target="_blank" rel="noopener noreferrer" style={{ color:"#1B3A6B", fontWeight:600 }}>CDG 971 Guadeloupe</a> et <a href="https://www.concours-territorial.fr/calendrier.aspx" target="_blank" rel="noopener noreferrer" style={{ color:"#1B3A6B", fontWeight:600 }}>concours-territorial.fr</a>. Dates prévisionnelles susceptibles de modification — vérifiez toujours sur les sites officiels.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"linear-gradient(135deg,#1B3A6B 0%,#0d1e3d 100%)", padding:"64px 24px", textAlign:"center" }}>
        <div style={{ maxWidth:600, margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(24px,3vw,36px)", fontWeight:800, color:"white", margin:"0 0 16px 0" }}>Ne manquez pas votre session</h2>
          <p style={{ color:"rgba(255,255,255,0.7)", fontSize:16, lineHeight:1.7, margin:"0 0 32px 0" }}>Commencez votre préparation 4 à 6 mois avant les épreuves. Un entretien gratuit pour planifier votre préparation.</p>
          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" style={{ background:"#F5A623", color:"#1B3A6B", fontWeight:700, fontSize:15, padding:"16px 32px", borderRadius:10, textDecoration:"none" }}>Réserver un entretien gratuit</Link>
            <Link href="/formations" style={{ background:"transparent", color:"white", fontWeight:600, fontSize:15, padding:"16px 32px", borderRadius:10, textDecoration:"none", border:"2px solid rgba(255,255,255,0.3)" }}>Voir les formations</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>
    </div>
  );
}
