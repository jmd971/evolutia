import type { MetadataRoute } from "next";
import { FORMATIONS } from "./formations/data";
import { SITE_URL } from "./config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/formations", priority: 0.9, freq: "weekly" },
    { path: "/calendrier-concours-guadeloupe", priority: 0.9, freq: "weekly" },
    { path: "/guide-concours-territorial-guadeloupe", priority: 0.8, freq: "monthly" },
    { path: "/notre-methode", priority: 0.6, freq: "monthly" },
    { path: "/temoignages-laureats", priority: 0.6, freq: "monthly" },
    { path: "/financement-tarifs", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
    { path: "/ressources", priority: 0.6, freq: "monthly" },
    { path: "/ressources/preparer-concours-redacteur-territorial-guadeloupe", priority: 0.6, freq: "monthly" },
    { path: "/ressources/preparer-concours-ingenieur-territorial-guadeloupe", priority: 0.6, freq: "monthly" },
    { path: "/ressources/travailler-mairie-guadeloupe", priority: 0.7, freq: "monthly" },
    { path: "/ressources/concours-territorial-sans-diplome", priority: 0.7, freq: "monthly" },
    { path: "/ressources/devenir-atsem-guadeloupe", priority: 0.7, freq: "monthly" },
    { path: "/ressources/admissible-concours-cdg971-et-apres", priority: 0.7, freq: "monthly" },
    { path: "/ressources/financer-preparation-concours-guadeloupe", priority: 0.7, freq: "monthly" },
    { path: "/ressources/inscription-concours-cdg971", priority: 0.7, freq: "monthly" },
    { path: "/ressources/concours-agent-de-maitrise-2027-inscriptions", priority: 0.6, freq: "weekly" },
    { path: "/mentions-legales", priority: 0.2, freq: "monthly" },
    { path: "/politique-confidentialite", priority: 0.2, freq: "monthly" },
    { path: "/cgv", priority: 0.2, freq: "monthly" },
  ];
  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: new Date(),
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...Object.keys(FORMATIONS).map((slug) => ({
      url: `${SITE_URL}/formations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
