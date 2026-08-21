import type { Metadata } from "next";
import { estAuthentifie } from "../../../lib/interne/auth";
import { FORMATIONS } from "../../formations/data";
import Connexion from "./Connexion";
import ConventionClient from "./ConventionClient";

export const metadata: Metadata = {
  title: "Préparer une convention — interne",
  robots: { index: false, follow: false },
};

// Cette page lit un cookie : elle ne doit jamais être mise en cache.
export const dynamic = "force-dynamic";

export default async function PageInterneConvention() {
  if (!(await estAuthentifie())) return <Connexion />;

  const formations = Object.entries(FORMATIONS).map(([slug, f]) => ({
    slug,
    titre: f.titre,
    session: f.session?.intitule ?? null,
    demarrage: f.session?.demarrage ?? null,
  }));

  return <ConventionClient formations={formations} />;
}
