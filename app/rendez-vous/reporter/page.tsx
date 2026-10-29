import type { Metadata } from "next";
import RendezVousGestion from "../RendezVousGestion";

export const metadata: Metadata = {
  title: "Reporter mon rendez-vous | Evolutia Formation",
  description:
    "Choisissez un nouveau créneau pour votre entretien d'orientation gratuit avec Evolutia Formation à Grand-Camp, Les Abymes. Reprogrammation en quelques clics.",
  alternates: { canonical: "/rendez-vous/reporter" },
  // Page transactionnelle, liée à un rendez-vous précis : jamais indexée.
  robots: { index: false, follow: false },
};

export default async function Page({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  return <RendezVousGestion action="reporter" id={id} />;
}
