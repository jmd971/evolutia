import type { Metadata } from "next";
import { SITE_URL } from "./config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Evolutia Formation | Préparation Concours Territoriaux en Guadeloupe",
  description: "Centre de formation à Grand-Camp, Les Abymes. Préparez les concours d'ingénieur, technicien et rédacteur territorial. 85% de réussite en 2023. Financement CPF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
