import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Calendrier Concours Territoriaux Guadeloupe 2026-2027 | Evolutia",
  description: "Dates des concours et examens de la fonction publique territoriale en Guadeloupe par filière. Périodes d'inscription, épreuves, calendrier officiel CDG 971.",
  alternates: { canonical: "/calendrier-concours-guadeloupe" },
};

type Concours = { concours:string; cat:string; type:string; inscriptions:string; epreuves:string; statut:string; slug?:string };

const FILIERES: { titre:string; lignes:Concours[] }[] = [
  {
    titre: "Filière administrative",
    lignes: [
      { slug:"attache-principal-guadeloupe", concours:"Attaché principal (examen prof.)", cat:"A", type:"Examen prof.", inscriptions:"2 nov. → 15 déc. 2026", epreuves:"8 avril 2027", statut:"bientot" },
      { slug:"attache-territorial-guadeloupe", concours:"Attaché (externe, interne et 3ème voie)", cat:"A", type:"Concours", inscriptions:"Clôturées", epreuves:"19 novembre 2026", statut:"ferme" },
      { slug:"redacteur-principal-guadeloupe", concours:"Rédacteur principal de 1ère classe (avancement de grade)", cat:"B", type:"Examen prof.", inscriptions:"Clôturées", epreuves:"24 septembre 2026", statut:"ferme" },
      { slug:"redacteur-principal-guadeloupe", concours:"Rédacteur principal de 2ème classe (avancement de grade)", cat:"B", type:"Examen prof.", inscriptions:"Clôturées", epreuves:"24 septembre 2026", statut:"ferme" },
      { slug:"redacteur-territorial-guadeloupe", concours:"Rédacteur principal de 2ème classe", cat:"B", type:"Concours", inscriptions:"2 fév. → 10 mars 2027", epreuves:"14 octobre 2027", statut:"bientot" },
      { slug:"redacteur-territorial-guadeloupe", concours:"Rédacteur", cat:"B", type:"Concours", inscriptions:"2 fév. → 10 mars 2027", epreuves:"14 octobre 2027", statut:"bientot" },
      { slug:"adjoint-administratif-principal-guadeloupe", concours:"Adjoint administratif principal de 2ème classe", cat:"C", type:"Examen prof.", inscriptions:"20 oct. → 25 nov. 2026", epreuves:"18 mars 2027", statut:"bientot" },
    ],
  },
  {
    titre: "Filière animation",
    lignes: [
      { slug:"animateur-territorial-guadeloupe", concours:"Animateur", cat:"B", type:"Concours", inscriptions:"2 mars → 7 avril 2027", epreuves:"23 septembre 2027", statut:"bientot" },
      { slug:"animateur-territorial-guadeloupe", concours:"Animateur principal de 2ème classe", cat:"B", type:"Concours", inscriptions:"2 mars → 7 avril 2027", epreuves:"23 septembre 2027", statut:"bientot" },
      { slug:"adjoint-animation-principal-guadeloupe", concours:"Adjoint d'animation principal de 2ème classe", cat:"C", type:"Concours", inscriptions:"29 sept. → 4 nov. 2026", epreuves:"25 mars 2027", statut:"bientot" },
    ],
  },
  {
    titre: "Filière médico-sociale",
    lignes: [
      { slug:"sage-femme-guadeloupe", concours:"Sage-femme", cat:"A", type:"Concours", inscriptions:"29 sept. → 4 nov. 2026", epreuves:"22 mars 2027", statut:"bientot" },
      { slug:"puericultrice-guadeloupe", concours:"Puéricultrice territoriale de classe normale", cat:"A", type:"Concours", inscriptions:"29 sept. → 4 nov. 2026", epreuves:"15 février 2027", statut:"bientot" },
      { slug:"assistant-socio-educatif-guadeloupe", concours:"Assistant socio-éducatif de classe exceptionnelle", cat:"A", type:"Examen prof.", inscriptions:"16 mars → 21 avril 2027", epreuves:"16 septembre 2027", statut:"bientot" },
      { slug:"educateur-jeunes-enfants-guadeloupe", concours:"Éducateur de jeunes enfants de classe exceptionnelle", cat:"A", type:"Examen prof.", inscriptions:"13 oct. → 18 nov. 2026", epreuves:"11 février 2027", statut:"bientot" },
      { slug:"aide-soignant-guadeloupe", concours:"Aide-soignant de classe normale", cat:"B", type:"Concours", inscriptions:"8 déc. 2026 → 13 jan. 2027", epreuves:"16 juin 2027", statut:"bientot" },
      { slug:"auxiliaire-puericulture-guadeloupe", concours:"Auxiliaire de puériculture de classe normale", cat:"B", type:"Concours", inscriptions:"15 sept. → 21 oct. 2026", epreuves:"1er mars 2027", statut:"bientot" },
      { slug:"agent-social-guadeloupe", concours:"Agent social principal de 2ème classe", cat:"C", type:"Concours", inscriptions:"16 mars → 21 avril 2027", epreuves:"5 octobre 2027", statut:"bientot" },
      { slug:"atsem-guadeloupe", concours:"ATSEM principal de 2ème classe", cat:"C", type:"Concours", inscriptions:"16 mars → 21 avril 2027", epreuves:"29 septembre 2027", statut:"bientot" },
      { slug:"auxiliaire-soins-guadeloupe", concours:"Auxiliaire de soins principal de 2ème classe", cat:"C", type:"Concours", inscriptions:"16 mars → 21 avril 2027", epreuves:"4 octobre 2027", statut:"bientot" },
    ],
  },
  {
    titre: "Filière technique",
    lignes: [
      { slug:"ingenieur-chef-guadeloupe", concours:"Ingénieur en chef", cat:"A", type:"Concours", inscriptions:"Dates à confirmer", epreuves:"À confirmer", statut:"bientot" },
      { slug:"ingenieur-territorial-guadeloupe", concours:"Ingénieur", cat:"A", type:"Concours", inscriptions:"8 déc. 2026 → 13 jan. 2027", epreuves:"16 juin 2027", statut:"bientot" },
      { slug:"ingenieur-territorial-guadeloupe", concours:"Ingénieur (examen prof.)", cat:"A", type:"Examen prof.", inscriptions:"Clôturées", epreuves:"18 juin 2026", statut:"ferme" },
      { slug:"technicien-territorial-guadeloupe", concours:"Technicien principal de 1ère classe (avancement de grade)", cat:"B", type:"Examen prof.", inscriptions:"13 oct. → 18 nov. 2026", epreuves:"15 avril 2027", statut:"bientot" },
      { slug:"technicien-territorial-guadeloupe", concours:"Technicien principal de 2ème classe (avancement de grade)", cat:"B", type:"Examen prof.", inscriptions:"13 oct. → 18 nov. 2026", epreuves:"15 avril 2027", statut:"bientot" },
      { slug:"technicien-territorial-guadeloupe", concours:"Technicien principal de 2ème classe (promotion interne)", cat:"B", type:"Examen prof.", inscriptions:"13 oct. → 18 nov. 2026", epreuves:"15 avril 2027", statut:"bientot" },
      { slug:"adjoint-technique-principal-guadeloupe", concours:"Adjoint technique principal de 2ème classe (externe, interne, 3ème voie)", cat:"C", type:"Concours", inscriptions:"4 mai → 9 juin 2027", epreuves:"25 novembre 2027", statut:"bientot" },
      { slug:"agent-de-maitrise-guadeloupe", concours:"Agent de maîtrise", cat:"C", type:"Examen prof.", inscriptions:"1er sept. → 7 oct. 2026", epreuves:"28 janvier 2027", statut:"ouvert" },
    ],
  },
];

const statutStyle: Record<string,{bg:string,text:string,label:string}> = {
  ouvert:  {bg:"#FFF7E6", text:"#d97706", label:"Ouverture imminente"},
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
          <div style={{ color:"#4BADD4", fontSize:12, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:16 }}>CDG 971 Guadeloupe — Mis à jour le 15 juillet 2026</div>
          <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,4vw,50px)", fontWeight:800, color:"white", margin:"0 0 20px 0", lineHeight:1.15 }}>Calendrier des concours<br/>territoriaux 2026–2027</h1>
          <p style={{ color:"rgba(255,255,255,0.75)", fontSize:17, lineHeight:1.75, margin:"0 0 32px 0" }}>Dates officielles des concours et examens professionnels de la fonction publique territoriale en Guadeloupe, filière par filière. Source : CDG 971 / CNFPT.</p>
          <div style={{ display:"inline-flex", gap:8, background:"rgba(245,166,35,0.15)", border:"1px solid rgba(245,166,35,0.3)", borderRadius:10, padding:"10px 18px", color:"#F5A623", fontSize:13, fontWeight:600 }}>
            ⚠ Vérifiez toujours les dates sur <a href="https://www.cdg971.com/fr/concours-examens/calendrier-et-inscription" target="_blank" rel="noopener noreferrer" style={{ color:"#F5A623" }}>cdg971.com</a> avant de vous inscrire
          </div>
        </div>
      </section>

      {/* Tableaux par filière */}
      {FILIERES.map((f, fi) => (
        <section key={f.titre} style={{ padding: fi === 0 ? "64px 24px 32px" : "0 24px 32px" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:28, fontWeight:800, color:"#1B3A6B", margin:"0 0 24px 0" }}>{f.titre}</h2>
            <div style={{ borderRadius:16, overflow:"hidden", border:"1px solid #D6E4F0" }}>
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead>
                  <tr style={{ background:"#1B3A6B" }}>
                    {["Concours / Examen","Cat.","Type","Inscriptions","Épreuves","Statut"].map(h => (
                      <th key={h} style={{ padding:"14px 18px", textAlign:"left", color:"white", fontSize:11, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {f.lignes.map((c,i) => {
                    const s = statutStyle[c.statut];
                    return (
                      <tr key={i} style={{ background:i%2===0?"white":"#F8FAFF", borderBottom:"1px solid #D6E4F0" }}>
                        <td style={{ padding:"14px 18px", fontWeight:600, color:"#1B3A6B", fontSize:14 }}>
                          {c.slug ? (
                            <Link href={`/formations/${c.slug}`} style={{ color:"#1B3A6B", textDecoration:"none" }}>
                              {c.concours}
                              <span style={{ display:"block", color:"#4BADD4", fontSize:11, fontWeight:600, marginTop:2 }}>Se préparer avec Evolutia →</span>
                            </Link>
                          ) : c.concours}
                        </td>
                        <td style={{ padding:"14px 18px" }}><span style={{ background:"#EEF5FF", color:"#1B3A6B", fontSize:11, fontWeight:700, padding:"3px 8px", borderRadius:5 }}>{c.cat}</span></td>
                        <td style={{ padding:"14px 18px", color:"#5a6f8f", fontSize:12 }}>{c.type}</td>
                        <td style={{ padding:"14px 18px", color:"#5a6f8f", fontSize:12 }}>{c.inscriptions}</td>
                        <td style={{ padding:"14px 18px", color:"#3a4f6a", fontSize:13, fontWeight:500 }}>{c.epreuves}</td>
                        <td style={{ padding:"14px 18px" }}><span style={{ background:s.bg, color:s.text, fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:5, whiteSpace:"nowrap" }}>{s.label}</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* Note source */}
      <section style={{ padding:"0 24px 64px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ padding:"16px 20px", background:"#EEF5FF", borderRadius:10, fontSize:13, color:"#5a6f8f" }}>
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
