import Link from "next/link"
import { QUALIOPI } from "../qualiopi"

// Bloc marque Qualiopi. Le logo officiel n'est jamais affiché seul : la mention
// de la catégorie d'action certifiée l'accompagne systématiquement (règlement
// d'usage de la marque — voir app/qualiopi.ts).
//
// - variante "footer" : version compacte, sur fond bleu marine (pied de page).
// - variante "bloc"   : encadré blanc, pour une section de page.
//
// Le logo est servi en <img> et non via next/image : le fichier vient du kit
// Certifopac et ses dimensions ne doivent pas être supposées ici, la hauteur
// seule est contrainte pour préserver les proportions d'origine.

const LOGO_ALT =
  "Qualiopi — processus certifié — République Française"

export default function QualiopiBadge({
  variante = "bloc",
  hauteurLogo = 72,
}: {
  variante?: "footer" | "bloc"
  hauteurLogo?: number
}) {
  const sombre = variante === "footer"

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "wrap",
        ...(sombre
          ? {}
          : {
              background: "white",
              border: "1px solid #D6E4F0",
              borderLeft: "4px solid #1B3A6B",
              borderRadius: 12,
              padding: "20px 24px",
            }),
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={QUALIOPI.logo}
        alt={LOGO_ALT}
        style={{
          height: hauteurLogo,
          width: "auto",
          flexShrink: 0,
          // Le logo est fourni sur fond blanc : il le garde sur fond sombre,
          // sa charte graphique interdit toute recolorisation.
          background: "white",
          borderRadius: 6,
          padding: sombre ? 8 : 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 220 }}>
        <p
          style={{
            margin: 0,
            fontSize: sombre ? 12 : 14,
            lineHeight: 1.6,
            color: sombre ? "rgba(255,255,255,0.75)" : "#3a4f6a",
          }}
        >
          {QUALIOPI.mentionLegale}
        </p>
        <p
          style={{
            margin: "8px 0 0",
            fontSize: sombre ? 12 : 13,
            lineHeight: 1.6,
            color: sombre ? "rgba(255,255,255,0.6)" : "#5a6f8f",
          }}
        >
          Certificat n° {QUALIOPI.numeroCertificat} délivré par {QUALIOPI.certificateur}, valable
          jusqu&apos;au {QUALIOPI.finValidite}.{" "}
          <Link
            href={QUALIOPI.page}
            style={{
              color: sombre ? "rgba(255,255,255,0.9)" : "#1B3A6B",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: 2,
            }}
          >
            Consulter le certificat
          </Link>
        </p>
      </div>
    </div>
  )
}
