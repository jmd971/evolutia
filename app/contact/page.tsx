import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar"
import { BOOKING_URL } from "../config"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Contact | Evolutia Formation Guadeloupe",
  description: "Contactez Evolutia Formation à Grand-Camp, Les Abymes. Entretien d'orientation gratuit. 0690 44 73 60 — contact@evolutiaformation.fr",
};

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      {/* Navbar */}
      <NavBar activeHref="/contact" />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "64px 24px 48px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#4BADD4", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Nous contacter</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "white", margin: "0 0 20px 0", lineHeight: 1.15 }}>
            Démarrez votre préparation
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, lineHeight: 1.75, margin: 0 }}>
            Réservez un entretien d&apos;orientation gratuit de 30 minutes. Nous évaluons votre profil et vous proposons un plan de préparation personnalisé.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }}>

          {/* Formulaire */}
          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 20, padding: "40px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>Réserver un entretien gratuit</h2>
            <p style={{ color: "#5a6f8f", fontSize: 14, margin: "0 0 24px 0" }}>Choisissez directement votre créneau ci-dessous — confirmation immédiate par e-mail.</p>

            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #EEF5FF" }}>
              <iframe
                src={BOOKING_URL}
                title="Réserver un entretien d'orientation gratuit — Evolutia Formation"
                style={{ width: "100%", border: "none", minHeight: 780 }}
              />
            </div>
            <script src="https://link.siboard-consulting.fr/js/form_embed.js" async />
            <p style={{ fontSize: 12, color: "#5a6f8f", textAlign: "center", margin: "16px 0 0" }}>
              Vous préférez le téléphone ? Appelez-nous directement : <a href="tel:+590690447360" style={{ color: "#1B3A6B", fontWeight: 700, textDecoration: "none" }}>0690 44 73 60</a>
              {" "}— ou écrivez à <a href="mailto:contact@evolutiaformation.fr" style={{ color: "#1B3A6B", fontWeight: 700, textDecoration: "none" }}>contact@evolutiaformation.fr</a>
            </p>
          </div>

          {/* Infos pratiques */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, padding: "24px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1B3A6B", margin: "0 0 20px 0" }}>Informations pratiques</h3>
              {([
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, titre: "Adresse", val: "Immeuble ASP, Grand-Camp\nLes Abymes 97139, Guadeloupe" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.39 2 2 0 0 1 3.57 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, titre: "Téléphone", val: "0690 44 73 60" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, titre: "E-mail", val: "contact@evolutiaformation.fr" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, titre: "Horaires", val: "Lundi – Vendredi\n15h30 – 18h30" },
              ] as {icon: React.ReactNode; titre: string; val: string}[]).map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingBottom: i < 3 ? 16 : 0, borderBottom: i < 3 ? "1px solid #EEF5FF" : "none", marginBottom: i < 3 ? 16 : 0 }}>
                  <div style={{ width: 36, height: 36, background: "#EEF5FF", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#5a6f8f", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>{item.titre}</div>
                    <div style={{ fontSize: 14, color: "#1a2740", lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg, #1B3A6B, #2a4f8f)", borderRadius: 16, padding: "24px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "white", margin: "0 0 12px 0" }}>Entretien gratuit</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.7, margin: "0 0 16px 0" }}>30 minutes pour faire le point sur votre profil, votre concours et votre plan de préparation. Sans engagement.</p>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4BADD4" }} />
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>Disponible en présentiel ou par téléphone</span>
              </div>
            </div>

            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, padding: "24px" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#1B3A6B", marginBottom: 12 }}>Accès Grand-Camp, Les Abymes</div>
              <div style={{ background: "#F8FAFF", borderRadius: 8, height: 160, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #D6E4F0" }}>
                <a href="https://maps.google.com/maps?q=Immeuble+ASP+Grand-Camp+Les+Abymes+97139+Guadeloupe" target="_blank" rel="noopener noreferrer" style={{ color: "#4BADD4", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                  Voir sur Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>
    </div>
  );
}
