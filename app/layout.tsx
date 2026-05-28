import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
