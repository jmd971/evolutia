import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import QualiopiBadge from "../components/QualiopiBadge"
import { FORMATIONS } from "../formations/data"
import { CONVENTIONS, formaterPrix } from "../formations/conventions"

export const metadata: Metadata = {
  title: "Tarifs et financement des préparations aux concours | Evolutia Formation",
  description: "Prix 2026-2027 des préparations aux concours territoriaux Evolutia, règlement échelonné, prise en charge employeur et CPF avec l'accord de l'employeur.",
  alternates: { canonical: "/financement-tarifs" },
};

// Prix fermes communiqués par Evolutia (app/formations/conventions.ts) : la même
// valeur figure sur la fiche formation et dans la convention.
const FORMATIONS_TARIFS = Object.entries(CONVENTIONS)
  .filter(([slug, c]) => c.prix !== undefined && FORMATIONS[slug])
  .map(([slug, c]) => ({
    slug,
    titre: FORMATIONS[slug].titre,
    cat: FORMATIONS[slug].categorie,
    duree: FORMATIONS[slug].duree,
    prix: formaterPrix(c.prix!),
    valeur: c.prix!,
  }))
  .sort((x, y) => x.valeur - y.valeur);

const FINANCEMENTS = [
  { titre: "Votre employeur", desc: "Votre collectivité ou votre établissement peut prendre en charge votre préparation au titre de la formation de ses agents. Nous établissons le devis, le programme et la convention à lui transmettre.", badge: "Agents publics", color: "#1B3A6B" },
  { titre: "Compte personnel de formation (CPF)", desc: "Votre CPF peut financer tout ou partie de votre préparation, avec l'accord de votre employeur. Nous vous fournissons les documents nécessaires à votre demande.", badge: "Accord de l'employeur", color: "#4BADD4" },
  { titre: "France Travail", desc: "Si vous êtes demandeur(se) d'emploi, renseignez-vous auprès de votre conseiller sur les aides possibles. Nous lui fournissons le devis et le programme de la préparation.", badge: "Sous conditions", color: "#F5A623" },
  { titre: "Financement personnel", desc: "Le règlement peut être échelonné : rien n'est demandé avant la fin du délai de rétractation de 10 jours, l'acompte ne dépasse pas 30 % du prix, puis le solde est réparti pendant la formation.", badge: "Règlement échelonné", color: "#1B3A6B" },
];

export default function FinancementTarifs() {
  return (
    <div style={{ fontFamily:"'Inter', system-ui, sans-serif", color:"#1a2740", background:"#F8FAFF" }}>

      {/* Navbar */}
      <NavBar activeHref="/financement-tarifs" />

      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#1B3A6B 0%,#0d1e3d 100%)", padding:"64px 24px 48px" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <div style={{ color:"#4BADD4", fontSize:12, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:16 }}>Tarifs & Financement</div>
          <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,4vw,48px)", fontWeight:800, color:"white", margin:"0 0 20px 0", lineHeight:1.15 }}>Tarifs et financement<br/>de votre préparation</h1>
          <p style={{ color:"rgba(255,255,255,0.75)", fontSize:17, lineHeight:1.75, margin:0 }}>Des prix fermes, un règlement échelonné et plusieurs solutions de prise en charge selon votre situation.</p>
        </div>
      </section>

      {/* Certification Qualiopi — condition d'accès aux fonds de la formation */}
      <section style={{ padding:"40px 24px 0" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <QualiopiBadge hauteurLogo={80} />
          <p style={{ fontSize:14, color:"#5a6f8f", lineHeight:1.7, margin:"14px 2px 0" }}>
            Cette certification conditionne l&apos;accès aux fonds publics et mutualisés de la formation
            professionnelle : c&apos;est l&apos;une des conditions d&apos;une prise en charge par un financeur.
          </p>
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
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(26px,3vw,38px)", fontWeight:800, color:"#1B3A6B", margin:"0 0 12px 0" }}>Prix des préparations 2026-2027</h2>
            <p style={{ color:"#5a6f8f", fontSize:15, margin:0 }}>Prix par participant, non assujettis à la TVA. Les autres préparations sont sur devis.</p>
          </div>
          <div style={{ background:"white", borderRadius:16, overflow:"hidden", border:"1px solid #D6E4F0" }}>
            <table style={{ width:"100%", borderCollapse:"collapse" }}>
              <thead>
                <tr style={{ background:"#1B3A6B" }}>
                  {["Formation","Catégorie","Durée","Prix"].map(h => (
                    <th key={h} style={{ padding:"16px 20px", textAlign:"left", color:"white", fontSize:12, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FORMATIONS_TARIFS.map((f,i) => (
                  <tr key={f.slug} style={{ background:i%2===0?"white":"#F8FAFF", borderBottom:"1px solid #D6E4F0" }}>
                    <td style={{ padding:"16px 20px", fontWeight:600, fontSize:14 }}><Link href={`/formations/${f.slug}`} style={{ color:"#1B3A6B", textDecoration:"none" }}>{f.titre}</Link></td>
                    <td style={{ padding:"16px 20px" }}><span style={{ background:"#EEF5FF", color:"#1B3A6B", fontSize:11, fontWeight:700, padding:"3px 8px", borderRadius:5 }}>{f.cat}</span></td>
                    <td style={{ padding:"16px 20px", color:"#5a6f8f", fontSize:13 }}>{f.duree}</td>
                    <td style={{ padding:"16px 20px", fontWeight:700, color:"#1a2740", fontSize:14 }}>{f.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize:13, color:"#5a6f8f", marginTop:16, textAlign:"center" }}>Préparation non listée ou demande d&apos;une collectivité pour un groupe : contactez-nous pour un devis.</p>
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
      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>
    </div>
  );
}
