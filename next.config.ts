import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Anciennes URLs GoHighLevel (voir docs/redirects.md)
      { source: "/preparation-concours-ingnieur-territorial-guadeloupe", destination: "/formations/ingenieur-territorial-guadeloupe", permanent: true },
      { source: "/preparation-examen-technicienr-territorial-guadeloupe", destination: "/formations/technicien-territorial-guadeloupe", permanent: true },
      { source: "/preparation-oral-ingenieur-territorial-guadeloupe", destination: "/formations/preparation-oraux-concours-guadeloupe", permanent: true },
      { source: "/contact-evolutia-formation-guadeloupe", destination: "/contact", permanent: true },
      { source: "/nous-contacter", destination: "/contact", permanent: true },
      { source: "/inscription-concours-examens-territoriaux-guadeloupe-2024-2025", destination: "/contact", permanent: true },
      // Page supprimée lors de l'alignement sur le calendrier CDG 971 (juillet 2026)
      { source: "/formations/ingenieur-territorial-externe-guadeloupe", destination: "/formations/ingenieur-territorial-guadeloupe", permanent: true },
    ];
  },
};

export default nextConfig;
