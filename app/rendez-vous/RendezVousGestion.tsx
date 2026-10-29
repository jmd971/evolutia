import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { RDV_ID_PATTERN, rdvAnnulerEmbedUrl, rdvReporterEmbedUrl } from "../config";

type Action = "annuler" | "reporter";

const TEXTES: Record<Action, { titre: string; intro: string; frame: string; hauteur: number }> = {
  annuler: {
    titre: "Annuler mon rendez-vous",
    intro: "Confirmez l'annulation ci-dessous. Vous pourrez reprendre un rendez-vous quand vous le souhaitez.",
    frame: "Annulation du rendez-vous",
    hauteur: 520,
  },
  reporter: {
    titre: "Reporter mon rendez-vous",
    intro: "Choisissez un nouveau créneau pour votre entretien d'orientation gratuit.",
    frame: "Nouveau créneau pour le rendez-vous",
    hauteur: 780,
  },
};

// Page transactionnelle qui embarque un widget GHL pour un rendez-vous existant.
// `id` vient du lien envoyé par mail ({{appointment.id}}) ; il est validé avant usage.
export default function RendezVousGestion({ action, id }: { action: Action; id?: string }) {
  const t = TEXTES[action];
  const valide = typeof id === "string" && RDV_ID_PATTERN.test(id);
  const src = valide ? (action === "annuler" ? rdvAnnulerEmbedUrl(id) : rdvReporterEmbedUrl(id)) : null;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF", minHeight: "100vh" }}>
      <NavBar />

      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.6vw, 38px)", fontWeight: 800, color: "white", margin: "0 0 12px 0", lineHeight: 1.2 }}>
            {t.titre}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, margin: 0, lineHeight: 1.6 }}>{t.intro}</p>
        </div>
      </section>

      <section style={{ padding: "40px 24px 72px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {src ? (
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, overflow: "hidden" }}>
              <iframe
                src={src}
                title={t.frame}
                style={{ width: "100%", border: "none", minHeight: t.hauteur, display: "block" }}
              />
            </div>
          ) : (
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, padding: "28px 26px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1B3A6B", margin: "0 0 10px 0" }}>
                Lien incomplet
              </h2>
              <p style={{ color: "#5a6f8f", fontSize: 15, lineHeight: 1.7, margin: "0 0 18px 0" }}>
                Ce lien ne permet pas d&apos;identifier votre rendez-vous. Utilisez le lien « {action === "annuler" ? "Annuler" : "Reporter"} » du mail
                de confirmation ou de rappel que vous avez reçu, ou appelez-nous du lundi au vendredi, 15h30 – 18h30.
              </p>
              <a href="tel:+590690447360" style={{ display: "inline-block", background: "#1B3A6B", color: "white", fontWeight: 700, fontSize: 14, padding: "12px 22px", borderRadius: 8, textDecoration: "none" }}>
                0690 44 73 60
              </a>
            </div>
          )}

          <p style={{ marginTop: 22, fontSize: 14, color: "#5a6f8f" }}>
            <Link href="/contact" style={{ color: "#4BADD4", textDecoration: "none", fontWeight: 600 }}>
              ← Prendre un nouveau rendez-vous
            </Link>
          </p>
        </div>
      </section>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        @media (max-width: 900px) { .nav-links { display: none !important; } }
      `}</style>
    </div>
  );
}
