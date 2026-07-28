import type { Metadata } from "next";
import { SITE_URL } from "./config";
import "./globals.css";

const TITLE = "Evolutia Formation | Préparation Concours Territoriaux en Guadeloupe";
const DESCRIPTION =
  "Centre de formation à Grand-Camp, Les Abymes. Préparez les concours territoriaux en Guadeloupe. Résultats 2026 : jusqu'à 100% de réussite. Financement CPF.";

// Données structurées communes à tout le site (identité de l'organisme + site web).
// Coordonnées et note reprises du contenu affiché (Footer + section avis).
const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Évolutia Formation",
      url: SITE_URL,
      description:
        "Centre de formation à la préparation des concours de la fonction publique territoriale en Guadeloupe (calendrier CDG 971) et en France.",
      telephone: "+590690447360",
      email: "contact@evolutiaformation.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Immeuble ASP, Grand-Camp",
        postalCode: "97139",
        addressLocality: "Les Abymes",
        addressRegion: "Guadeloupe",
        addressCountry: "GP",
      },
      areaServed: { "@type": "Place", name: "Guadeloupe" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "15:30",
          closes: "18:30",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "15",
      },
      sameAs: [
        "https://www.google.com/maps/place/?q=place_id:ChIJX83z1iJHE4wRXyQgrNUeR60",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Évolutia Formation",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Évolutia Formation",
    locale: "fr_FR",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Évolutia Formation — préparation aux concours territoriaux en Guadeloupe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
        {children}
      </body>
    </html>
  );
}
