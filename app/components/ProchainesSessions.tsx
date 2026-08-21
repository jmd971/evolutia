import Link from "next/link";
import { SESSIONS_OUVERTES } from "../formations/data";
import { inscriptionUrl } from "../config";

/**
 * Bandeau « Prochaines sessions » — affiche les formations dont les
 * inscriptions sont ouvertes (champ `session` dans app/formations/data.ts).
 * Ne rend rien si aucune session n'est ouverte.
 *
 * `fond` : "clair" sur fond blanc/#F8FAFF, "sombre" sur le bleu marine.
 */
export default function ProchainesSessions({ fond = "clair" }: { fond?: "clair" | "sombre" }) {
  if (SESSIONS_OUVERTES.length === 0) return null;

  const sombre = fond === "sombre";

  return (
    <section
      id="sessions"
      style={{
        padding: "64px 24px",
        background: sombre
          ? "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)"
          : "linear-gradient(135deg, #EEF5FF 0%, #F0F8FF 100%)",
        borderTop: sombre ? "none" : "1px solid #D6E4F0",
        borderBottom: sombre ? "none" : "1px solid #D6E4F0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 14 }}>
            <div style={{ width: 8, height: 8, background: "#16a34a", borderRadius: "50%" }} />
            <span style={{ color: "#16a34a", fontSize: 12, fontWeight: 700, letterSpacing: "0.05em" }}>Inscriptions ouvertes</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, color: sombre ? "white" : "#1B3A6B", margin: "0 0 10px 0" }}>
            Prochaines sessions de préparation
          </h2>
          <p style={{ color: sombre ? "rgba(255,255,255,0.7)" : "#5a6f8f", fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: 680 }}>
            Les places sont limitées et attribuées dans l&apos;ordre d&apos;inscription. Réservez la vôtre en quelques minutes.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 20 }}>
          {SESSIONS_OUVERTES.map((s) => (
            <div
              key={s.slug}
              style={{
                background: "white",
                border: "1px solid #D6E4F0",
                borderRadius: 16,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: 4, background: `linear-gradient(90deg, ${s.color}, ${s.accent})` }} />
              <div style={{ padding: "22px 22px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#5a6f8f", marginBottom: 8 }}>
                  {s.intitule}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: "#1B3A6B", margin: "0 0 14px 0", lineHeight: 1.3 }}>
                  {s.titre}
                </h3>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ flexShrink: 0 }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span style={{ fontSize: 14, color: "#3a4f6a" }}>
                    Démarrage le <strong style={{ color: "#1B3A6B" }}>{s.demarrage}</strong>
                  </span>
                </div>
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
                  <Link
                    href={inscriptionUrl(s.slug)}
                    style={{ display: "block", background: "#F5A623", color: "#1B3A6B", fontWeight: 800, fontSize: 14, padding: "13px", borderRadius: 8, textDecoration: "none", textAlign: "center" }}
                  >
                    Je m&apos;inscris
                  </Link>
                  <Link href={`/formations/${s.slug}`} style={{ fontSize: 13, color: "#4BADD4", textDecoration: "none", fontWeight: 600, textAlign: "center" }}>
                    Voir le programme →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
