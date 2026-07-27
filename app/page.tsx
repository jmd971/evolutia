import type { Metadata } from "next";
import HomeClient from "./HomeClient";

// La page d'accueil est interactive (client component -> HomeClient).
// Ce wrapper serveur permet d'exposer les métadonnées, dont le canonical.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomeClient />;
}
