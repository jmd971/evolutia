import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Evolutia Formation Guadeloupe",
  description: "Politique de confidentialité et traitement des données personnelles — Evolutia Formation, Les Abymes, Guadeloupe.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>
      <NavBar activeHref="/politique-confidentialite" />

      <section style={{ maxWidth: 860, margin: "0 auto", padding: "64px 24px 80px" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>Politique de confidentialité</h1>
        <p style={{ color: "#5a6f8f", fontSize: 14, margin: "0 0 48px 0" }}>Dernière mise à jour : mai 2025 — Conforme au RGPD (Règlement UE 2016/679)</p>

        {[
          {
            titre: "1. Responsable du traitement",
            contenu: `<strong>Evolutia Formation</strong><br/>
Immeuble ASP, Grand-Camp, Les Abymes 97139, Guadeloupe<br/>
Téléphone : 0690 44 73 60<br/>
E-mail : contact@evolutiaformation.fr`
          },
          {
            titre: "2. Données collectées",
            contenu: `Nous collectons les données suivantes lorsque vous utilisez notre site ou nos services :<br/><br/>
<strong>Via le formulaire de contact / demande d'entretien :</strong><br/>
— Prénom, nom, adresse e-mail, numéro de téléphone<br/>
— Concours visé et message libre<br/><br/>
<strong>Via la navigation sur le site :</strong><br/>
— Données de connexion (adresse IP, navigateur, pages visitées) à des fins statistiques anonymes<br/><br/>
Ces données sont collectées avec votre consentement explicite ou sur la base de notre intérêt légitime à vous répondre.`
          },
          {
            titre: "3. Finalités du traitement",
            contenu: `Vos données personnelles sont utilisées exclusivement pour :<br/><br/>
— Répondre à vos demandes d'information et organiser vos entretiens d'orientation<br/>
— Vous envoyer des informations sur nos formations et le calendrier des concours (si vous y avez consenti)<br/>
— Établir les devis et conventions de formation<br/>
— Satisfaire à nos obligations légales en tant qu'organisme de formation (déclaration d'activité, bilan pédagogique)<br/><br/>
Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins commerciales.`
          },
          {
            titre: "4. Durée de conservation",
            contenu: `— <strong>Données prospects</strong> (demandes d'entretien sans suite) : 3 ans à compter du dernier contact<br/>
— <strong>Données stagiaires</strong> (inscrits à une formation) : 5 ans à compter de la fin de la formation (obligation légale)<br/>
— <strong>Données comptables</strong> (conventions, factures) : 10 ans (obligation fiscale)<br/>
— <strong>Données de navigation</strong> : 13 mois maximum`
          },
          {
            titre: "5. Destinataires des données",
            contenu: `Vos données peuvent être partagées avec :<br/><br/>
— Notre prestataire d'hébergement (Vercel Inc., États-Unis) dans le cadre d'un accord de traitement conforme au RGPD<br/>
— Les organismes financeurs (OPCO, France Travail, Caisse des Dépôts pour le CPF) dans le cadre du financement de votre formation<br/>
— Les autorités administratives compétentes (DREETS Guadeloupe) dans le cadre de nos obligations légales d'organisme de formation<br/><br/>
Aucun transfert de données hors UE n'est effectué sans garanties appropriées.`
          },
          {
            titre: "6. Vos droits (RGPD)",
            contenu: `Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :<br/><br/>
— <strong>Droit d'accès</strong> : obtenir une copie des données vous concernant<br/>
— <strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes<br/>
— <strong>Droit à l'effacement</strong> : demander la suppression de vos données (dans les limites légales)<br/>
— <strong>Droit d'opposition</strong> : vous opposer au traitement de vos données à des fins de prospection<br/>
— <strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré<br/>
— <strong>Droit à la limitation</strong> : limiter temporairement le traitement de vos données<br/><br/>
Pour exercer ces droits, contactez-nous à <a href="mailto:contact@evolutiaformation.fr" style="color:#4BADD4">contact@evolutiaformation.fr</a>. Nous nous engageons à répondre dans un délai d'un mois.<br/><br/>
En cas de réclamation non résolue, vous pouvez saisir la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style="color:#4BADD4">cnil.fr</a>`
          },
          {
            titre: "7. Cookies",
            contenu: `Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site (pas de cookies publicitaires ni de tracking tiers).<br/><br/>
— <strong>Cookies techniques</strong> : essentiels au fonctionnement du site (session, préférences)<br/>
— <strong>Cookies analytiques anonymes</strong> : mesure d'audience sans identification personnelle<br/><br/>
Vous pouvez configurer votre navigateur pour refuser les cookies. Cela n'affectera pas l'accès aux contenus du site.`
          },
          {
            titre: "8. Sécurité",
            contenu: `Evolutia Formation met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou altération. Le site est servi exclusivement en HTTPS (connexion sécurisée).`
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px 0", paddingBottom: 10, borderBottom: "1px solid #D6E4F0" }}>{section.titre}</h2>
            <div style={{ fontSize: 15, color: "#3a4f6a", lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: section.contenu }} />
          </div>
        ))}

        <div style={{ background: "#EEF5FF", borderRadius: 12, padding: "20px 24px", marginTop: 48, fontSize: 14, color: "#5a6f8f" }}>
          Pour toute question : <a href="mailto:contact@evolutiaformation.fr" style={{ color: "#1B3A6B", fontWeight: 600 }}>contact@evolutiaformation.fr</a> — 0690 44 73 60
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>
    </div>
  );
}
