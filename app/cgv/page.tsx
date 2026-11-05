import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Evolutia Formation Guadeloupe",
  description: "Conditions générales de vente des formations Evolutia — centre de préparation aux concours territoriaux en Guadeloupe. Inscriptions, paiements, annulations.",
};

export default function CGV() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>
      <NavBar activeHref="/cgv" />

      <section style={{ maxWidth: 860, margin: "0 auto", padding: "64px 24px 80px" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>Conditions Générales de Vente</h1>
        <p style={{ color: "#5a6f8f", fontSize: 14, margin: "0 0 48px 0" }}>Dernière mise à jour : mai 2025</p>

        {[
          {
            titre: "1. Objet et champ d'application",
            contenu: `Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong>Evolutia Formation</strong> (ci-après « le Prestataire ») et toute personne physique ou morale souhaitant s'inscrire à l'une de ses formations (ci-après « le Stagiaire » ou « le Client »).<br/><br/>
Evolutia Formation est un organisme de formation professionnelle déclaré auprès de la DREETS Guadeloupe. Toute inscription à une formation implique l'acceptation pleine et entière des présentes CGV.`
          },
          {
            titre: "2. Offre de formation",
            contenu: `Evolutia Formation propose des formations de préparation aux concours et examens professionnels de la fonction publique territoriale :<br/><br/>
— Préparation aux épreuves écrites (note de synthèse, composition, épreuves techniques)<br/>
— Préparation aux épreuves orales et entretiens jury<br/>
— Accompagnement à la constitution du dossier RAEP<br/>
— Coaching individuel et simulations en conditions réelles<br/><br/>
Les descriptions, durées et tarifs des formations sont disponibles sur le site <strong>evolutiaformation.fr</strong> et dans les devis personnalisés remis aux candidats. Evolutia Formation se réserve le droit de modifier son offre à tout moment, sans que cela affecte les conventions signées.`
          },
          {
            titre: "3. Inscription et convention de formation",
            contenu: `L'inscription est formalisée par la signature d'une <strong>convention de formation professionnelle</strong> (ou d'un contrat de formation dans le cadre du CPF), conformément aux articles L. 6353-1 et suivants du Code du travail.<br/><br/>
La convention précise :<br/>
— L'intitulé, le programme et la durée de la formation<br/>
— Les dates de début et de fin de formation<br/>
— Le prix HT/TTC de la formation<br/>
— Les modalités de règlement<br/><br/>
L'inscription n'est définitive qu'à réception du document signé et, le cas échéant, du règlement de l'acompte.`
          },
          {
            titre: "4. Tarifs et modalités de paiement",
            contenu: `<strong>4.1 Tarifs</strong><br/>
Les tarifs sont indiqués en euros TTC. En tant qu'organisme de formation, Evolutia Formation est exonéré de TVA sur ses prestations de formation professionnelle (article 261-4-4° du CGI), sous réserve d'obtention de l'attestation fiscale annuelle.<br/><br/>
<strong>4.2 Modalités de règlement</strong><br/>
Le règlement peut s'effectuer :<br/>
— Par virement bancaire (coordonnées communiquées sur la convention)<br/>
— Par chèque libellé à l'ordre d'Evolutia Formation<br/>
— Via le CPF (Compte Personnel de Formation), avec l'accord de l'employeur<br/>
— Par prise en charge OPCO (sur présentation de l'accord de prise en charge)<br/>
— Par facilités de paiement (échelonnement selon accord préalable)<br/><br/>
<strong>4.3 Acompte</strong><br/>
Aucune somme ne peut être exigée du Stagiaire avant l'expiration du délai de rétractation de dix jours suivant la signature de la convention. À cette date, un premier versement de 30 % du prix au plus peut être demandé ; le solde est échelonné au fur et à mesure du déroulement de la formation (articles L. 6353-5 et L. 6353-6 du Code du travail). Aucun chèque de garantie n'est demandé.`
          },
          {
            titre: "5. Financement CPF",
            contenu: `Le Compte Personnel de Formation (CPF) est mobilisé avec l'accord de l'employeur du Stagiaire. Evolutia Formation fournit le devis, le programme et la convention nécessaires à la demande de prise en charge.<br/><br/>
La part du prix non couverte par le CPF reste due par le Stagiaire, selon l'échéancier prévu à la convention.`
          },
          {
            titre: "6. Annulation et report",
            contenu: `<strong>6.1 Rupture ou abandon par le Stagiaire</strong><br/>
En cas de force majeure dûment reconnue, le Stagiaire peut rompre la convention : seules les prestations effectivement dispensées sont dues, à due proportion de leur valeur prévue à la convention (article L. 6353-7 du Code du travail).<br/><br/>
En cas d'abandon pour un autre motif, après l'expiration du délai de rétractation, seules les prestations effectivement dispensées sont dues, à due proportion de leur valeur. Evolutia Formation peut en outre demander une indemnité de dédit, qui ne peut excéder 10 % du prix des prestations non dispensées. Les sommes perçues au-delà sont remboursées au Stagiaire dans un délai de 30 jours.<br/><br/>
<strong>6.2 Report</strong><br/>
À la demande du Stagiaire, Evolutia Formation examine toute demande de report sur une session ultérieure.<br/><br/>
<strong>6.3 Annulation par le Prestataire</strong><br/>
Evolutia Formation se réserve le droit d'annuler ou de reporter une formation en cas de nombre insuffisant de participants ou de circonstances exceptionnelles. Dans ce cas, le Stagiaire sera remboursé intégralement ou se verra proposer un report sans frais.`
          },
          {
            titre: "7. Droit de rétractation",
            contenu: `Conformément à l'article L. 6353-5 du Code du travail, le Stagiaire dispose d'un <strong>délai de rétractation de 10 jours</strong> à compter de la signature de la convention. Il l'exerce par lettre recommandée avec avis de réception adressée à Evolutia Formation.<br/><br/>
Aucune somme ne peut être exigée du Stagiaire avant l'expiration de ce délai.`
          },
          {
            titre: "8. Obligations du stagiaire",
            contenu: `Le Stagiaire s'engage à :<br/><br/>
— Assister aux séances de formation aux horaires et lieux convenus<br/>
— Prévenir Evolutia Formation de toute absence dans les plus brefs délais<br/>
— Respecter le règlement intérieur du centre de formation<br/>
— Ne pas enregistrer, reproduire ni diffuser les contenus pédagogiques sans autorisation<br/>
— Adopter un comportement respectueux envers les formateurs et les autres stagiaires`
          },
          {
            titre: "9. Obligations d'Evolutia Formation",
            contenu: `Evolutia Formation s'engage à :<br/><br/>
— Dispenser la formation dans les conditions définies dans la convention<br/>
— Mettre à disposition des formateurs qualifiés et des supports pédagogiques adaptés<br/>
— Délivrer, à l'issue de la formation, une <strong>attestation de formation</strong> mentionnant les acquis<br/>
— Respecter la confidentialité des informations communiquées par les stagiaires<br/>
— Assurer le suivi pédagogique et administratif conformément à la réglementation en vigueur`
          },
          {
            titre: "10. Responsabilité",
            contenu: `Evolutia Formation est tenu à une obligation de moyens dans la délivrance de ses formations. Le taux de réussite indiqué sur notre site est un indicateur global et ne constitue pas une garantie de résultat pour chaque candidat individuel.<br/><br/>
La réussite à un concours de la fonction publique dépend de nombreux facteurs extérieurs à la formation (niveau du candidat à l'entrée, niveau de la session du concours, capacité de travail personnel du candidat, etc.).`
          },
          {
            titre: "11. Propriété intellectuelle des supports",
            contenu: `Tous les supports de formation (documents, exercices, corrigés, fiches méthodologiques) remis aux stagiaires sont la propriété exclusive d'Evolutia Formation. Leur reproduction, distribution ou utilisation commerciale est strictement interdite sans autorisation écrite préalable.`
          },
          {
            titre: "12. Règlement des litiges",
            contenu: `En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord, tout litige sera soumis aux tribunaux compétents du ressort du siège d'Evolutia Formation (Guadeloupe), conformément au droit français.<br/><br/>
Conformément à l'article L. 612-1 du Code de la consommation, le Stagiaire consommateur peut recourir gratuitement à un médiateur de la consommation en cas de litige non résolu.`
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1B3A6B", margin: "0 0 16px 0", paddingBottom: 10, borderBottom: "1px solid #D6E4F0" }}>{section.titre}</h2>
            <div style={{ fontSize: 15, color: "#3a4f6a", lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: section.contenu }} />
          </div>
        ))}

        <div style={{ background: "#EEF5FF", borderRadius: 12, padding: "20px 24px", marginTop: 48, fontSize: 14, color: "#5a6f8f" }}>
          Pour toute question relative aux présentes CGV : <a href="mailto:contact@evolutiaformation.fr" style={{ color: "#1B3A6B", fontWeight: 600 }}>contact@evolutiaformation.fr</a> — 0690 44 73 60
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>
    </div>
  );
}
