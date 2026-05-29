import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Témoignages Lauréats | Evolutia Formation Guadeloupe",
  description: "Découvrez les témoignages de nos lauréats qui ont réussi leurs concours territoriaux en Guadeloupe grâce à la préparation Evolutia. 85% de réussite.",
};

const TEMOIGNAGES = [
  { nom: "Dada 971", concours: "Décembre 2025", annee: "2025", cat: "Avis Google ★★★★★", texte: "Une équipe de grande qualité, toujours présente et à l'écoute, avec un suivi adapté à chaque parcours. Tout est mis en œuvre pour nous accompagner efficacement vers la réussite des concours.", etoiles: 5 },
  { nom: "Leandre Mauline", concours: "Septembre 2025", annee: "2025", cat: "Avis Google ★★★★★", texte: "Accueil, partage, accompagnement, conseil, travail, formation — tout est réuni chez Evolutia pour réussir ses concours territoriaux.", etoiles: 5 },
  { nom: "William GERMAIN", concours: "Juillet 2025", annee: "2025", cat: "Avis Google ★★★★★", texte: "Des cours interactifs, évolutifs, adaptés aux objectifs de chacun.", etoiles: 5 },
  { nom: "manuela AIME", concours: "Décembre 2024", annee: "2024", cat: "Avis Google ★★★★★", texte: "Un regard expérimenté. Une méthode pointue efficace adaptée à chacun. La bienveillance et les encouragements à chaque étape. Un combo gagnant pour aborder les concours.", etoiles: 5 },
  { nom: "Isabelle Gabriel", concours: "Décembre 2024", annee: "2024", cat: "Avis Google ★★★★★", texte: "Très bel espace de formation. Formation de niveau et efficace pour ceux ou celles qui souhaitent passer un concours de la fonction publique. Vives recommandations.", etoiles: 5 },
  { nom: "Anael Ssosse", concours: "Octobre 2024", annee: "2024", cat: "Avis Google ★★★★★", texte: "Formation bien faite pour mener à la réussite aux concours de la territoriale. Je l'ai faite pour deux concours différents, couronnés de succès à chaque fois. Merci Tony !", etoiles: 5 },
  { nom: "To B", concours: "Octobre 2024", annee: "2024", cat: "Avis Google ★★★★★", texte: "Une assistance et un accompagnement sans pareil. Avec Évolutia c'est à coup sûr, la réussite qui sera au bout (même si ils vous bousculent un peu et c'est tant mieux).", etoiles: 5 },
  { nom: "jeannie kacy", concours: "Janvier 2025", annee: "2025", cat: "Avis Google ★★★★★", texte: "Lieu agréable, ambiance correcte. La présentation des parcours mériterait d'être faite en individuel. Dans l'ensemble une bonne expérience.", etoiles: 4 },
];

export default function Temoignages() {
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
            {([["Formations","/formations"],["Notre Méthode","/notre-methode"],["Calendrier","/calendrier-concours-guadeloupe"],["Témoignages","/temoignages-laureats"],["Tarifs & CPF","/financement-tarifs"],["Contact","/contact"]] as [string,string][]).map(([label,href]) => (
              <Link key={href} href={href} style={{ color: href==="/temoignages-laureats"?"white":"rgba(255,255,255,0.8)", fontSize:13, fontWeight:href==="/temoignages-laureats"?700:500, padding:"6px 12px", borderRadius:6, textDecoration:"none", whiteSpace:"nowrap", borderBottom:href==="/temoignages-laureats"?"2px solid #F5A623":"none" }}>{label}</Link>
            ))}
            <Link href="/contact" style={{ background:"#F5A623", color:"#1B3A6B", fontWeight:700, fontSize:13, padding:"10px 20px", borderRadius:8, textDecoration:"none", whiteSpace:"nowrap", marginLeft:8 }}>Réserver un entretien</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#1B3A6B 0%,#0d1e3d 100%)", padding:"64px 24px 48px" }}>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <div style={{ color:"#4BADD4", fontSize:12, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:16 }}>Ils ont réussi</div>
          <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(32px,5vw,52px)", fontWeight:800, color:"white", margin:"0 0 20px 0", lineHeight:1.15 }}>Nos lauréats témoignent</h1>
          <p style={{ color:"rgba(255,255,255,0.75)", fontSize:17, lineHeight:1.75, margin:"0 0 32px 0" }}>+500 candidats ont réussi leur concours territorial en Guadeloupe avec Evolutia. Voici leurs témoignages.</p>
          <a href="https://search.google.com/local/reviews?placeid=ChIJX83z1iJHE4wRXyQgrNUeR60" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"white", border:"1px solid #D6E4F0", borderRadius:10, padding:"12px 22px", textDecoration:"none", color:"#1B3A6B", fontWeight:700, fontSize:14 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.73l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.77 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            4,7 ★★★★★ — Voir tous nos avis Google
          </a>
        </div>
      </section>

      {/* Grille témoignages */}
      <section style={{ padding:"64px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {TEMOIGNAGES.map((t,i) => (
            <div key={i} style={{ background:"white", border:"1px solid #D6E4F0", borderRadius:16, padding:"28px 26px", display:"flex", flexDirection:"column", gap:16 }}>
              <div style={{ display:"flex", gap:3 }}>
                {[...Array(t.etoiles)].map((_,s) => <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
              </div>
              <p style={{ fontSize:15, color:"#3a4f6a", lineHeight:1.75, margin:0, flex:1 }}>&ldquo;{t.texte}&rdquo;</p>
              <div style={{ borderTop:"1px solid #EEF5FF", paddingTop:16, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ fontWeight:700, fontSize:14, color:"#1B3A6B" }}>{t.nom}</div>
                  <div style={{ fontSize:12, color:"#5a6f8f", marginTop:2 }}>{t.concours}</div>
                </div>
                <div style={{ background:"#EEF5FF", color:"#1B3A6B", fontSize:11, fontWeight:700, padding:"4px 10px", borderRadius:6 }}>{t.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background:"linear-gradient(135deg,#1B3A6B 0%,#0d1e3d 100%)", padding:"64px 24px" }}>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,4vw,40px)", fontWeight:800, color:"white", margin:"0 0 48px 0" }}>Rejoignez nos lauréats</h2>
          <div style={{ display:"flex", gap:32, justifyContent:"center", flexWrap:"wrap", marginBottom:40 }}>
            {[{val:"85%",label:"Taux de réussite 2023"},{val:"+500",label:"Lauréats depuis 2014"},{val:"10 ans",label:"D'expérience"},{val:"4,7★",label:"Note Google"}].map((s,i) => (
              <div key={i} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Playfair Display', serif", fontSize:36, fontWeight:800, color:"#F5A623" }}>{s.val}</div>
                <div style={{ fontSize:13, color:"rgba(255,255,255,0.55)", marginTop:4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" style={{ display:"inline-block", background:"#F5A623", color:"#1B3A6B", fontWeight:700, fontSize:15, padding:"16px 36px", borderRadius:10, textDecoration:"none" }}>Réserver mon entretien gratuit</Link>
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
