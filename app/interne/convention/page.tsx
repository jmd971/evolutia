import type { Metadata } from "next";
import { estAuthentifie, estConfigure } from "../../../lib/interne/auth";
import { FORMATIONS } from "../../formations/data";
import Connexion from "./Connexion";
import ConventionClient from "./ConventionClient";

export const metadata: Metadata = {
  title: "Préparer une convention — interne",
  robots: { index: false, follow: false },
};

// Cette page lit un cookie : elle ne doit jamais être mise en cache.
export const dynamic = "force-dynamic";

function ConfigurationManquante() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeContent: "center", background: "#F8FAFF", fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <div style={{ background: "white", border: "1px solid #FCA5A5", borderRadius: 14, padding: 32, maxWidth: 460 }}>
        <h1 style={{ fontSize: 19, color: "#b91c1c", margin: "0 0 10px 0" }}>Page non configurée</h1>
        <p style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.65, margin: 0 }}>
          La variable d&apos;environnement <code style={{ background: "#F8FAFF", padding: "2px 6px", borderRadius: 4 }}>INTERNE_PASSWORD</code> n&apos;est pas
          définie sur le serveur. Ajoutez-la dans les réglages Vercel du projet, puis redéployez.
        </p>
      </div>
    </div>
  );
}

export default async function PageInterneConvention() {
  if (!estConfigure()) return <ConfigurationManquante />;
  if (!(await estAuthentifie())) return <Connexion />;

  const formations = Object.entries(FORMATIONS).map(([slug, f]) => ({
    slug,
    titre: f.titre,
    session: f.session?.intitule ?? null,
    demarrage: f.session?.demarrage ?? null,
  }));

  return <ConventionClient formations={formations} />;
}
