import type { Metadata } from "next";
import RendezVousGestion from "../RendezVousGestion";

export const metadata: Metadata = {
  title: "Annuler mon rendez-vous | Evolutia Formation",
  description:
    "Annulez votre entretien d'orientation gratuit avec Evolutia Formation à Grand-Camp, Les Abymes. Vous pourrez reprendre un rendez-vous à tout moment.",
  alternates: { canonical: "/rendez-vous/annuler" },
  // Page transactionnelle, liée à un rendez-vous précis : jamais indexée.
  robots: { index: false, follow: false },
};

export default async function Page({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  return <RendezVousGestion action="annuler" id={id} />;
}
