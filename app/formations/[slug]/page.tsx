import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

type Epreuve = { type: string; label: string; desc: string };
type Condition = { voie: string; condition: string };
type DateCle = { label: string; date: string; statut: "ouvert" | "bientot" | "ferme" };
type Faq = { q: string; a: string };

type Formation = {
  titre: string;
  sousTitre: string;
  categorie: string;
  seoTitle: string;
  seoDesc: string;
  accroche: string;
  epreuves: Epreuve[];
  programme: string[];
  conditions: Condition[];
  duree: string;
  format: string;
  tauxReussite: string;
  color: string;
  datesCles: DateCle[];
  faq: Faq[];
  sourceOfficielle: string;
};

const FORMATIONS: Record<string, Formation> = {
  "ingenieur-territorial-guadeloupe": {
    titre: "Ingénieur Territorial",
    sousTitre: "Concours externe, interne et 3e voie",
    categorie: "Catégorie A",
    seoTitle: "Préparation Concours Ingénieur Territorial Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours d'ingénieur territorial en Guadeloupe avec Evolutia. Programme complet, formateurs experts, format hybride. Financement CPF disponible.",
    accroche: "Le concours d'ingénieur territorial est l'un des plus sélectifs de la fonction publique territoriale (Catégorie A). Il ouvre l'accès aux postes d'encadrement technique dans les collectivités. Notre programme intensif — calqué sur le référentiel CNFPT — vous donne les outils pour réussir dès la première tentative.",
    epreuves: [
      { type: "Écrit", label: "Note de synthèse (4h)", desc: "Rédaction d'une note à partir d'un dossier documentaire (20-25 pages). Évalue la capacité d'analyse, de synthèse et d'expression écrite." },
      { type: "Écrit", label: "Note technique (4h)", desc: "Résolution d'un problème technique dans la spécialité choisie (aménagement, réseaux, bâtiment…). Exige une maîtrise des réglementations en vigueur." },
      { type: "Oral", label: "Entretien devant le jury (30 min)", desc: "Présentation du parcours (5 min) puis échange avec le jury sur les motivations, les compétences techniques et la vision des enjeux territoriaux." },
    ],
    programme: [
      "Méthodologie de la note de synthèse — techniques CNFPT + entraînements corrigés",
      "Culture administrative : institutions, droit public des collectivités, actualité de la FPT",
      "Épreuves techniques par spécialité (voirie, réseaux, bâtiment, informatique…)",
      "Enjeux territoriaux de la Guadeloupe : intercommunalité, développement durable, aménagement",
      "Simulations d'entretien oral filmées + débriefing individuel",
      "Veille sur le calendrier CDG 971 Guadeloupe",
    ],
    conditions: [
      { voie: "Externe", condition: "Diplôme Bac+3 (licence) ou titre reconnu équivalent dans la spécialité" },
      { voie: "Interne", condition: "Agent de la FPT avec 4 ans de services effectifs dans un cadre d'emploi de cat. A ou B" },
      { voie: "3e voie", condition: "8 ans d'expérience professionnelle dans le secteur privé ou public hors FPT" },
    ],
    duree: "120 à 180 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel",
    tauxReussite: "82%",
    color: "#1B3A6B",
    datesCles: [
      { label: "Inscriptions concours", date: "8 déc. 2026 → 13 jan. 2027", statut: "bientot" },
      { label: "Épreuves écrites", date: "16 juin 2027", statut: "bientot" },
      { label: "Examen prof. interne", date: "18 juin 2026", statut: "ferme" },
    ],
    faq: [
      { q: "Combien de temps faut-il pour préparer le concours d'ingénieur territorial ?", a: "Une préparation sérieuse nécessite entre 9 et 18 mois. Le concours comporte deux épreuves écrites exigeantes (note de synthèse et note technique de 4h chacune) ainsi qu'un oral à fort coefficient. Nous recommandons de commencer au moins 12 mois avant les épreuves écrites." },
      { q: "Quelle spécialité choisir pour le concours d'ingénieur territorial en Guadeloupe ?", a: "En Guadeloupe, les spécialités les plus demandées dans les collectivités sont 'Infrastructure et réseaux', 'Bâtiment et construction' et 'Prévention des risques'. Choisissez la spécialité qui correspond à votre formation initiale — le jury évalue une maîtrise réelle, pas une spécialité de confort." },
      { q: "Le concours d'ingénieur territorial est-il accessible sans expérience en collectivité ?", a: "Oui, par la voie externe. Il suffit d'un diplôme Bac+3 dans la spécialité. En revanche, il faut avoir une bonne connaissance des enjeux des collectivités territoriales, que vous apportez lors de la préparation. Evolutia forme chaque année des candidats issus du secteur privé vers la voie externe." },
      { q: "Peut-on financer la préparation avec le CPF ?", a: "Oui. La préparation au concours d'ingénieur territorial est éligible au CPF. Vous pouvez mobiliser vos droits directement sur moncompteformation.gouv.fr. Si vous êtes déjà agent de la FPT, l'ANFH peut compléter ou prendre en charge intégralement le financement." },
      { q: "Quelle est la différence entre le concours externe et la 3e voie ?", a: "Le concours externe est ouvert aux diplômés (Bac+3 minimum). La 3e voie est accessible après 8 ans d'expérience professionnelle dans le privé ou hors FPT — sans condition de diplôme. Les épreuves sont identiques, mais le jury valorise davantage l'expérience terrain pour la 3e voie." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/calendrier.aspx",
  },
  "technicien-territorial-guadeloupe": {
    titre: "Technicien Territorial",
    sousTitre: "Concours externe et interne",
    categorie: "Catégorie B",
    seoTitle: "Préparation Concours Technicien Territorial Guadeloupe 2025 | Evolutia",
    seoDesc: "Formation préparation concours technicien territorial en Guadeloupe. Épreuves écrites et oraux. Financement CPF. Centre Evolutia, Les Abymes.",
    accroche: "Le technicien territorial (Catégorie B) joue un rôle clé dans les services techniques des collectivités locales. Le concours évalue à la fois vos connaissances techniques et votre maîtrise de l'expression écrite administrative. Notre formation vous prépare méthodiquement à toutes les épreuves.",
    epreuves: [
      { type: "Écrit", label: "Composition sur programme (3h)", desc: "Rédaction d'une composition sur un sujet portant sur les connaissances techniques de la spécialité choisie. Notation sur 20." },
      { type: "Écrit", label: "Analyse de document (3h)", desc: "Réponse à des questions à partir d'un dossier documentaire de 20 pages maximum portant sur la spécialité." },
      { type: "Oral", label: "Entretien avec le jury (20 min)", desc: "Échange sur le parcours professionnel, les motivations et un sujet tiré au sort parmi les thèmes de la spécialité." },
    ],
    programme: [
      "Actualité et fonctionnement des collectivités territoriales (CGCT, réforme territoriale)",
      "Méthodologie de la composition et de l'analyse documentaire",
      "Connaissances techniques par spécialité (bâtiment, voirie, espaces verts, informatique…)",
      "Entraînements intensifs sur sujets de concours réels — corrigés individuellement",
      "Préparation et simulation des oraux : prise de parole, posture, gestion du stress",
      "Planning personnalisé selon la date du concours CDG 971",
    ],
    conditions: [
      { voie: "Externe", condition: "Baccalauréat ou titre reconnu de niveau IV dans la spécialité concernée" },
      { voie: "Interne", condition: "Agent de la FPT avec 2 ans de services effectifs en catégorie C" },
    ],
    duree: "80 à 120 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel",
    tauxReussite: "87%",
    color: "#4BADD4",
    datesCles: [
      { label: "Épreuves concours (session 2026)", date: "9 avril 2026", statut: "ferme" },
      { label: "Inscriptions prochaine session", date: "À confirmer — CDG 971", statut: "bientot" },
      { label: "Examen prof. technicien principal", date: "15 avril 2027", statut: "bientot" },
    ],
    faq: [
      { q: "Quel diplôme faut-il pour passer le concours de technicien territorial ?", a: "Pour la voie externe, le baccalauréat (ou un titre de niveau IV équivalent) dans la spécialité est requis. Pour la voie interne, il faut être agent de la FPT avec 2 ans de services effectifs en catégorie C, sans condition de diplôme particulière." },
      { q: "Combien de temps dure la préparation au concours de technicien territorial ?", a: "Comptez 4 à 6 mois de préparation intensive. Le concours de technicien territorial (catégorie B) est accessible mais exige une bonne maîtrise des épreuves écrites — composition et analyse documentaire — qui ne s'improvisent pas sans entraînement régulier." },
      { q: "Quelles spécialités sont disponibles pour le concours de technicien territorial ?", a: "Il existe plusieurs spécialités : bâtiment et travaux publics, infrastructures et réseaux, espaces verts et naturels, ingénierie, informatique et systèmes, prévention des risques. En Guadeloupe, les spécialités 'bâtiment' et 'espaces verts' offrent le plus de débouchés dans les communes." },
      { q: "Peut-on travailler et se préparer en même temps ?", a: "Oui, et la majorité de nos candidats sont en activité. Notre format hybride (présentiel Grand-Camp 15h30-18h30 + distanciel) est conçu pour les agents en poste. Un programme personnalisé est établi dès le premier entretien pour adapter la charge de travail à votre emploi du temps." },
      { q: "Quels débouchés après le concours de technicien territorial en Guadeloupe ?", a: "Le technicien territorial travaille dans les services techniques des mairies, communautés de communes, Département et Région. En Guadeloupe, les postes sont nombreux dans les communes en pleine rénovation de leur patrimoine bâti et de leur voirie. Le grade ouvre également vers l'examen professionnel de technicien principal." },
    ],
    sourceOfficielle: "https://www.cdg971.com/fr/concours-examens/calendrier-et-inscription",
  },
  "redacteur-territorial-guadeloupe": {
    titre: "Rédacteur Territorial",
    sousTitre: "Concours externe et interne",
    categorie: "Catégorie B",
    seoTitle: "Préparation Concours Rédacteur Territorial Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours de rédacteur territorial en Guadeloupe. Culture générale, note de synthèse, entretien jury. Financement CPF. Evolutia Formation, Les Abymes.",
    accroche: "Le concours de rédacteur territorial (Catégorie B) est parmi les plus exigeants en matière d'expression écrite et de culture générale. Il exige une préparation sérieuse et régulière. Nos formateurs vous accompagnent de la méthodologie jusqu'aux simulations de jury.",
    epreuves: [
      { type: "Écrit", label: "Composition sur programme (4h)", desc: "Dissertation sur un sujet de culture générale à portée administrative. Évalue la structuration de la pensée, la maîtrise de la langue et la culture administrative." },
      { type: "Écrit", label: "Note de synthèse (3h)", desc: "Exploitation d'un dossier documentaire pour rédiger une note à l'intention d'un élu ou d'un supérieur hiérarchique." },
      { type: "Oral", label: "Entretien avec le jury (25 min)", desc: "Conversation sur le parcours, les motivations et un sujet d'actualité locale ou nationale tiré au sort 10 minutes avant l'entretien." },
    ],
    programme: [
      "Culture générale : actualité nationale, européenne et locale (Guadeloupe, Antilles-Guyane)",
      "Méthodologie de la dissertation et de la note de synthèse — approche CNFPT",
      "Institutions et droit public des collectivités territoriales",
      "Entraînements intensifs écrits sur sujets officiels — corrigés détaillés",
      "Coaching oral : présentation, posture, argumentation, gestion du stress",
      "Suivi personnalisé par formateur référent tout au long de la préparation",
    ],
    conditions: [
      { voie: "Externe", condition: "Baccalauréat ou diplôme de niveau IV reconnu équivalent" },
      { voie: "Interne", condition: "Agent de la FPT avec 2 ans de services effectifs en catégorie C" },
    ],
    duree: "80 à 120 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel",
    tauxReussite: "85%",
    color: "#1B3A6B",
    datesCles: [
      { label: "Inscriptions concours", date: "2 fév. 2027 → 10 mars 2027", statut: "bientot" },
      { label: "Épreuves écrites", date: "14 octobre 2027", statut: "bientot" },
      { label: "Préparez-vous dès maintenant", date: "Session 2027 — démarrage conseillé jan. 2027", statut: "ouvert" },
    ],
    faq: [
      { q: "Quelle est la différence entre le rédacteur territorial et le technicien territorial ?", a: "Le rédacteur territorial (catégorie B) exerce des missions administratives : instruction de dossiers, rédaction d'actes administratifs, accueil et gestion du public. Le technicien territorial exerce des missions techniques (bâtiment, voirie, réseaux). Le concours de rédacteur évalue la culture générale et l'expression écrite, pas les connaissances techniques." },
      { q: "Combien de temps faut-il pour préparer le concours de rédacteur territorial ?", a: "Entre 6 et 9 mois de préparation régulière. La composition (4h) et la note de synthèse (3h) sont des épreuves qui demandent de l'entraînement prolongé. Nous recommandons de commencer la préparation au moins 6 mois avant la date des épreuves écrites." },
      { q: "Comment se préparer à la composition sur programme du concours de rédacteur ?", a: "La composition évalue votre culture générale à portée administrative. Il faut lire régulièrement la presse nationale et locale (actualité des collectivités, réformes en cours), réviser les institutions territoriales et s'entraîner à la dissertation plan-en-deux-parties. Chez Evolutia, nous corrigeons individuellement chaque composition rédigée." },
      { q: "Les sujets de l'oral du concours de rédacteur portent-ils sur la Guadeloupe ?", a: "Oui, fréquemment. Les jurys CDG 971 posent souvent des sujets en lien avec l'actualité locale : gouvernance de la Région Guadeloupe, politique des communes, enjeux de la transition écologique en Guadeloupe. Notre préparation couvre spécifiquement ces thèmes locaux." },
      { q: "Peut-on passer le concours de rédacteur territorial sans diplôme ?", a: "Non pour la voie externe qui exige le baccalauréat. En revanche, la voie interne est ouverte aux agents de catégorie C avec 2 ans d'ancienneté — sans condition de diplôme. L'examen professionnel de rédacteur principal est lui aussi accessible en interne sur dossier RAEP." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/calendrier.aspx",
  },
  "redacteur-principal-guadeloupe": {
    titre: "Rédacteur Principal",
    sousTitre: "Examen professionnel de promotion interne",
    categorie: "Catégorie B+",
    seoTitle: "Préparation Examen Rédacteur Principal Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez l'examen professionnel de rédacteur principal en Guadeloupe. Dossier RAEP, entretien jury. Evolutia Formation, Les Abymes. Financement CPF.",
    accroche: "L'examen professionnel de rédacteur principal (1ère ou 2ème classe) permet d'évoluer vers un grade supérieur grâce à la valorisation de votre expérience. La qualité du dossier RAEP et la prestation à l'oral sont déterminantes. Notre accompagnement individuel maximise vos chances.",
    epreuves: [
      { type: "Dossier", label: "RAEP — Reconnaissance des Acquis de l'Expérience Professionnelle", desc: "Dossier de 6 pages maximum présentant votre parcours, vos compétences et vos réalisations professionnelles. Transmis avant l'oral." },
      { type: "Oral", label: "Entretien devant le jury (30 min)", desc: "Échange approfondi sur le dossier RAEP (20 min) puis questions du jury sur le projet professionnel et les enjeux du grade de rédacteur principal (10 min)." },
    ],
    programme: [
      "Méthodologie de construction du dossier RAEP : structure, contenu, mise en valeur",
      "Identification et formalisation des compétences professionnelles clés",
      "Rédaction administrative : argumentation, clarté, concision",
      "Simulation d'entretien sur le dossier RAEP — jury fictif avec débriefing",
      "Relecture et amélioration du dossier avec le formateur",
      "Préparation aux questions du jury sur les enjeux du cadre d'emploi",
    ],
    conditions: [
      { voie: "Interne (2e classe)", condition: "Rédacteur territorial avec au moins 1 an dans le grade" },
      { voie: "Interne (1ère classe)", condition: "Rédacteur principal 2e classe avec au moins 3 ans dans le grade" },
    ],
    duree: "40 à 60 heures",
    format: "Présentiel (Grand-Camp) + accompagnement individuel en distanciel",
    tauxReussite: "88%",
    color: "#F5A623",
    datesCles: [
      { label: "Examen prof. rédacteur principal", date: "24 septembre 2026", statut: "bientot" },
      { label: "Inscriptions (session 2026)", date: "Clôturées — CDG 971", statut: "ferme" },
      { label: "Prochaine session prévisionnelle", date: "Printemps 2027 (à confirmer)", statut: "bientot" },
    ],
    faq: [
      { q: "Qu'est-ce que le dossier RAEP et pourquoi est-il décisif ?", a: "Le RAEP (Reconnaissance des Acquis de l'Expérience Professionnelle) est un dossier de 6 pages maximum qui présente votre parcours, vos compétences clés et vos réalisations professionnelles. Il est transmis au jury avant l'oral et sert de base à tout l'entretien. Un dossier mal construit pénalise la totalité de l'épreuve — c'est pourquoi notre accompagnement commence par là." },
      { q: "Combien de temps faut-il pour préparer l'examen de rédacteur principal ?", a: "L'examen professionnel de rédacteur principal ne comporte pas d'épreuve écrite, uniquement un dossier RAEP et un oral. Comptez 4 à 8 semaines de préparation intensive : 2 à 3 semaines pour construire le dossier, puis 2 à 4 semaines de simulations d'entretien." },
      { q: "Quelle est la différence entre rédacteur principal 1ère et 2ème classe ?", a: "Il existe deux grades : rédacteur principal 2ème classe (accessible après 1 an en tant que rédacteur) et rédacteur principal 1ère classe (accessible après 3 ans en tant que rédacteur principal 2ème classe). Les épreuves sont identiques (RAEP + oral), mais le jury évalue un niveau de responsabilité et d'expérience différent selon le grade visé." },
      { q: "Comment Evolutia accompagne-t-il la construction du dossier RAEP ?", a: "Chaque candidat travaille avec un formateur référent qui l'aide à identifier les compétences pertinentes, à les formuler en langage administratif et à structurer le dossier pour le rendre convaincant. Nous réalisons plusieurs relectures et corrections avant la version finale. C'est notre point fort : 88% de nos candidats sont reçus." },
      { q: "Peut-on préparer l'examen de rédacteur principal en travaillant à plein temps ?", a: "Oui, c'est même le cas de la quasi-totalité de nos candidats. L'examen professionnel ne comporte pas d'épreuve écrite longue, ce qui permet une préparation intense sur une courte période. Nous proposons des sessions de soirée et de week-end adaptées aux agents en activité." },
    ],
    sourceOfficielle: "https://www.cdg971.com/fr/concours-examens/calendrier-et-inscription",
  },
  "agent-de-maitrise-guadeloupe": {
    titre: "Agent de Maîtrise",
    sousTitre: "Concours externe et interne",
    categorie: "Catégorie C+",
    seoTitle: "Préparation Concours Agent de Maîtrise Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours d'agent de maîtrise territorial en Guadeloupe. Épreuves pratiques et mises en situation. Evolutia Formation, Les Abymes.",
    accroche: "L'agent de maîtrise territorial (Catégorie C supérieure) supervise des équipes d'agents techniques dans les collectivités. Le concours évalue vos capacités pratiques et managériales. Notre formation vous prépare aux mises en situation réelles du terrain guadeloupéen.",
    epreuves: [
      { type: "Pratique", label: "Épreuve technique pratique (3h)", desc: "Réalisation d'une ou plusieurs tâches pratiques dans la spécialité, ou mise en situation professionnelle simulant le poste d'agent de maîtrise." },
      { type: "Oral", label: "Entretien avec le jury (20 min)", desc: "Échange sur les compétences techniques, l'expérience professionnelle et les capacités d'encadrement d'équipe." },
    ],
    programme: [
      "Connaissance des missions de l'agent de maîtrise dans les collectivités territoriales",
      "Management d'équipe, organisation du travail et transmission des consignes",
      "Sécurité au travail : réglementation, évaluation des risques, EPI",
      "Entraînements sur mises en situation pratiques (espaces verts, bâtiment, voirie…)",
      "Gestion de projet et compte-rendu d'activité",
      "Préparation à l'entretien oral : présentation, posture managériale",
    ],
    conditions: [
      { voie: "Externe", condition: "CAP, BEP ou brevet de compagnon dans la spécialité concernée" },
      { voie: "Interne", condition: "Agent territorial de catégorie C avec 2 ans de services effectifs" },
    ],
    duree: "60 à 80 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + ateliers pratiques",
    tauxReussite: "84%",
    color: "#4BADD4",
    datesCles: [
      { label: "Inscriptions concours", date: "1er sept. 2026 → 7 oct. 2026", statut: "bientot" },
      { label: "Épreuves", date: "28 janvier 2027", statut: "bientot" },
      { label: "Examen prof. agent maîtrise principal", date: "28 janvier 2027", statut: "bientot" },
    ],
    faq: [
      { q: "Quel est le rôle d'un agent de maîtrise territorial en Guadeloupe ?", a: "L'agent de maîtrise territorial supervise des équipes d'agents techniques dans les collectivités (mairies, intercommunalités, Département). Il organise le travail, contrôle la qualité des réalisations et assure la transmission des consignes de sécurité. En Guadeloupe, les postes sont nombreux dans les services espaces verts, bâtiment et voirie des communes." },
      { q: "Quelles spécialités sont disponibles pour le concours d'agent de maîtrise ?", a: "Les principales spécialités sont : bâtiment, espaces verts et naturels, voirie et réseaux, mécanique, électricité. En Guadeloupe, les spécialités 'espaces verts' et 'bâtiment' sont les plus demandées par les collectivités locales." },
      { q: "Les inscriptions pour le concours d'agent de maîtrise 2027 sont-elles ouvertes ?", a: "Les inscriptions pour la session 2027 ouvrent le 1er septembre 2026 et se clôturent le 7 octobre 2026. Les épreuves sont prévues le 28 janvier 2027. Nous vous recommandons de commencer la préparation dès maintenant pour être prêt avant la clôture des inscriptions." },
      { q: "Comment se déroule l'épreuve pratique du concours d'agent de maîtrise ?", a: "L'épreuve pratique (3h) consiste à réaliser une ou plusieurs tâches concrètes dans votre spécialité, ou à participer à une mise en situation professionnelle simulant le poste d'encadrement. Le jury évalue vos gestes techniques, votre organisation et votre capacité à coordonner un travail d'équipe." },
      { q: "Faut-il un CAP ou BEP pour passer le concours d'agent de maîtrise ?", a: "Pour la voie externe, un CAP, BEP ou brevet de compagnon dans la spécialité est requis. Pour la voie interne, il suffit d'être agent territorial de catégorie C avec 2 ans de services effectifs — sans condition de diplôme spécifique." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/calendrier.aspx",
  },
  "ingenieur-chef-guadeloupe": {
    titre: "Ingénieur en Chef",
    sousTitre: "Concours de promotion interne — Catégorie A+",
    categorie: "Catégorie A+",
    seoTitle: "Préparation Concours Ingénieur Chef Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours d'ingénieur en chef territorial en Guadeloupe. Leadership, stratégie, entretien jury. Evolutia Formation, Les Abymes.",
    accroche: "Accéder au grade d'ingénieur en chef territorial (Catégorie A+) exige une vision stratégique, des capacités de leadership éprouvées et une excellente maîtrise des politiques publiques. Notre préparation vous positionne comme un cadre dirigeant de haut niveau prêt pour les enjeux des collectivités de demain.",
    epreuves: [
      { type: "Écrit", label: "Note de synthèse (5h)", desc: "Analyse d'un dossier complexe de 40 à 50 pages avec proposition de solutions opérationnelles. Évalue la capacité à formuler des préconisations stratégiques." },
      { type: "Oral", label: "Grand oral devant le jury (45 min)", desc: "Présentation d'un projet professionnel (10 min) suivie d'un échange approfondi avec le jury sur la vision stratégique, le management et les politiques publiques territoriales." },
    ],
    programme: [
      "Gouvernance des collectivités territoriales et enjeux stratégiques (intercommunalité, métropolisation)",
      "Management public, conduite du changement et transformation des services",
      "Politiques publiques locales : développement durable, transition énergétique, focus Guadeloupe",
      "Préparation au grand oral : prise de parole en public, construction du discours cadre dirigeant",
      "Études de cas complexes — résolution de problèmes stratégiques",
      "Coaching individuel intensif sur le positionnement et la posture cadre A+",
    ],
    conditions: [
      { voie: "Interne", condition: "Ingénieur territorial avec au moins 5 ans d'ancienneté dans le grade" },
      { voie: "3e voie", condition: "Expérience de direction dans le secteur privé ou associatif (selon arrêté)" },
    ],
    duree: "60 à 80 heures",
    format: "Présentiel (Grand-Camp) + coaching individuel en distanciel",
    tauxReussite: "79%",
    color: "#1B3A6B",
    datesCles: [
      { label: "Concours ingénieur en chef", date: "7 septembre 2026", statut: "bientot" },
      { label: "Examen prof. ingénieur en chef", date: "1er juin 2026", statut: "bientot" },
      { label: "Inscriptions clôturées (session 2026)", date: "Passées — CDG 971", statut: "ferme" },
    ],
    faq: [
      { q: "Quelle est la différence entre ingénieur territorial et ingénieur en chef ?", a: "L'ingénieur territorial (catégorie A) est un cadre technique opérationnel. L'ingénieur en chef (catégorie A+) est un cadre dirigeant : il pilote des directions, coordonne plusieurs services et conseille les élus sur les orientations stratégiques. Le passage de l'un à l'autre nécessite un positionnement managérial fort, que notre formation développe spécifiquement." },
      { q: "Combien de temps faut-il pour préparer le concours d'ingénieur en chef ?", a: "La préparation idéale est de 6 à 12 mois. L'épreuve écrite (note de synthèse de 5h) et le grand oral (45 min, coefficient élevé) exigent un travail approfondi sur la posture de cadre dirigeant, la vision stratégique et la connaissance des politiques publiques locales." },
      { q: "Quelles sont les conditions pour passer en interne le concours d'ingénieur en chef ?", a: "Il faut être ingénieur territorial titulaire avec au moins 5 ans d'ancienneté dans le grade. La 3e voie est également accessible pour des profils avec une expérience de direction significative hors FPT. Contactez-nous pour une évaluation gratuite de votre éligibilité." },
      { q: "Comment préparer le grand oral du concours d'ingénieur en chef ?", a: "Le grand oral (45 min) est l'épreuve clé. Il évalue votre vision stratégique des politiques publiques, votre capacité managériale et votre aptitude à convaincre des élus. Notre préparation inclut des simulations filmées, un coaching individuel sur la posture de cadre dirigeant et un travail spécifique sur les enjeux guadeloupéens." },
      { q: "Quels postes sont accessibles après le concours d'ingénieur en chef en Guadeloupe ?", a: "L'ingénieur en chef peut accéder aux postes de directeur des services techniques, directeur général adjoint technique, directeur de projet stratégique dans les grandes collectivités de Guadeloupe (Région, Département, CARL, communes importantes). C'est le grade le plus élevé de la filière technique territoriale." },
    ],
    sourceOfficielle: "https://www.cnfpt.fr/s-informer/nos-actualites/le-fil-dactu/calendrier-concours-examens-2026/national",
  },
  "ingenieur-territorial-externe-guadeloupe": {
    titre: "Ingénieur Territorial — Voie Externe",
    sousTitre: "Concours externe pour diplômés Bac+3",
    categorie: "Catégorie A",
    seoTitle: "Concours Ingénieur Territorial Externe Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez le concours externe d'ingénieur territorial en Guadeloupe. Formation pour diplômés Bac+3. Financement CPF. Evolutia Formation, Les Abymes.",
    accroche: "Vous êtes diplômé(e) et souhaitez intégrer la fonction publique territoriale en Guadeloupe en Catégorie A ? La voie externe du concours d'ingénieur territorial est votre porte d'entrée. Notre formation est conçue pour les candidats sans expérience administrative, avec une pédagogie adaptée aux profils issus du privé.",
    epreuves: [
      { type: "Écrit", label: "Note de synthèse (4h)", desc: "Rédaction d'une note structurée à partir d'un dossier documentaire. Aucune expérience administrative préalable n'est exigée mais la méthodologie doit être maîtrisée." },
      { type: "Écrit", label: "Épreuve technique de spécialité (4h)", desc: "Résolution d'un cas pratique dans la spécialité choisie. Évalue les connaissances académiques et leur application concrète en contexte territorial." },
      { type: "Oral", label: "Entretien de recrutement (30 min)", desc: "Présentation du projet professionnel territorial, échange sur les motivations et les connaissances de base de la FPT. Premier contact avec un jury professionnel." },
    ],
    programme: [
      "Connaissance approfondie de la FPT et des collectivités de Guadeloupe (CDG 971, intercommunalités)",
      "Méthodologie note de synthèse adaptée aux profils sans expérience administrative",
      "Révision et approfondissement des fondamentaux techniques par spécialité",
      "Entraînements intensifs écrits sur sujets officiels — corrigés en groupe et individuellement",
      "Construction et présentation du projet professionnel territorial",
      "Simulations d'entretien — première approche de la relation avec un jury",
    ],
    conditions: [
      { voie: "Externe uniquement", condition: "Licence (Bac+3) ou titre reconnu équivalent dans la spécialité concernée" },
    ],
    duree: "100 à 140 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel",
    tauxReussite: "83%",
    color: "#4BADD4",
    datesCles: [
      { label: "Inscriptions concours externe", date: "8 déc. 2026 → 13 jan. 2027", statut: "bientot" },
      { label: "Épreuves écrites", date: "16 juin 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Janvier 2027", statut: "ouvert" },
    ],
    faq: [
      { q: "Quelle est la différence entre la voie externe et la 3e voie pour le concours d'ingénieur territorial ?", a: "La voie externe est ouverte aux diplômés (Bac+3 minimum) sans condition d'expérience. La 3e voie nécessite 8 ans d'expérience professionnelle, sans condition de diplôme. Les épreuves sont identiques, mais le jury attend un discours différent : technique pour l'externe, davantage axé sur l'expérience terrain pour la 3e voie." },
      { q: "Mon diplôme d'ingénieur privé est-il reconnu pour le concours territorial ?", a: "Oui, dans la grande majorité des cas. Les diplômes d'écoles d'ingénieurs et les licences professionnelles sont généralement reconnus équivalents au niveau requis. En cas de doute, une demande de reconnaissance de diplôme peut être soumise au CDG 971 avant l'inscription." },
      { q: "Peut-on passer directement du secteur privé à la fonction publique territoriale ?", a: "Oui, c'est précisément l'objet de la voie externe. De nombreux ingénieurs issus du BTP, de l'informatique ou de l'environnement intègrent la FPT guadeloupéenne chaque année via ce concours. Notre formation est spécialement adaptée à ces profils qui découvrent le fonctionnement des collectivités." },
      { q: "Comment se passe la note de synthèse pour un candidat sans expérience administrative ?", a: "La note de synthèse est technique mais s'apprend. Elle ne nécessite aucune expérience préalable en collectivité — uniquement une méthode rigoureuse que vous acquerrez lors de la préparation. Nous consacrons 40% du programme à cette épreuve, avec des entraînements progressifs corrigés individuellement." },
      { q: "Quels sont les débouchés d'un ingénieur territorial externe en Guadeloupe ?", a: "En intégrant la FPT guadeloupéenne, vous accédez à des postes stables et variés : chef de projet travaux, responsable d'études, chargé de mission technique dans les mairies, le Département ou la Région. La Guadeloupe investit massivement dans ses infrastructures (eau, énergie, routes), créant un besoin permanent en ingénieurs qualifiés." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/calendrier.aspx",
  },
  "preparation-oraux-concours-guadeloupe": {
    titre: "Préparation aux Oraux",
    sousTitre: "Toutes catégories — tous concours territoriaux",
    categorie: "Toutes catégories",
    seoTitle: "Préparation Oraux Concours Territoriaux Guadeloupe 2025 | Evolutia",
    seoDesc: "Préparez les épreuves orales des concours territoriaux en Guadeloupe. Simulations de jury, coaching posture et prise de parole. Evolutia Formation, Les Abymes.",
    accroche: "L'oral est souvent l'épreuve décisive qui fait la différence entre deux candidats de même niveau. Nos sessions intensives de simulation reproduisent les conditions réelles du jury territorial guadeloupéen. En 3 séances, vous transformez votre stress en confiance et votre discours en conviction.",
    epreuves: [
      { type: "Simulation", label: "Jury blanc en conditions réelles", desc: "Entretien filmé en salle reproduisant exactement les conditions du concours visé : durée, composition du jury, tirage au sort du sujet. Analyse vidéo post-entretien." },
      { type: "Débriefing", label: "Analyse détaillée fond + forme", desc: "Retour point par point sur le contenu (arguments, connaissances), la forme (posture, voix, regard), la gestion du temps et l'attitude face aux relances du jury." },
      { type: "Coaching", label: "Séances individuelles de progression", desc: "Travail ciblé sur les points faibles identifiés lors des simulations. Techniques de respiration, ancrage, reformulation, gestion des questions déstabilisantes." },
    ],
    programme: [
      "Techniques de prise de parole en public et gestion du stress avant l'épreuve",
      "Construction d'une présentation de parcours percutante en 3-5 minutes",
      "Réponses aux questions difficiles et déstabilisantes du jury territorial",
      "Langage corporel : posture, regard, gestuelle, voix — travail pratique",
      "Simulations filmées par concours visé (ingénieur, technicien, rédacteur, agent de maîtrise…)",
      "Séances de débriefing individuel avec progression mesurée entre chaque simulation",
    ],
    conditions: [
      { voie: "Tous profils", condition: "Candidat(e) admissible à un concours ou examen professionnel territorial (toutes catégories A, B, C)" },
    ],
    duree: "20 à 40 heures",
    format: "Présentiel exclusivement (Grand-Camp, Les Abymes)",
    tauxReussite: "91%",
    color: "#F5A623",
    datesCles: [
      { label: "Sessions oraux ingénieur en chef", date: "Automne 2026", statut: "bientot" },
      { label: "Sessions oraux technicien/rédacteur", date: "En continu selon admissibilité", statut: "ouvert" },
      { label: "Réservation entretien orientation", date: "Disponible maintenant", statut: "ouvert" },
    ],
    faq: [
      { q: "À quel moment commencer la préparation aux oraux ?", a: "Idéalement, dès le début de votre préparation globale — et non après les résultats d'admissibilité. L'oral se prépare sur plusieurs mois : prise de parole, présentation du parcours, connaissance des enjeux du territoire. Les candidats qui commencent l'oral après l'écrit ont en moyenne 3 à 4 semaines devant eux — ce n'est pas suffisant." },
      { q: "Combien de simulations sont nécessaires pour progresser significativement ?", a: "En général, 3 à 5 simulations suffisent pour transformer radicalement votre prestation, à condition qu'elles soient espacées et suivies d'un débriefing approfondi. La première simulation est souvent difficile — c'est normal et nécessaire. C'est là que nous identifions précisément ce qu'il faut travailler." },
      { q: "Les simulations sont-elles adaptées à mon concours spécifique ?", a: "Oui. Chaque simulation est calibrée sur le concours que vous préparez : durée, composition du jury fictif, type de questions posées. Un jury d'ingénieur en chef ne pose pas les mêmes questions qu'un jury d'agent de maîtrise. Nous reproduisons les conditions du CDG 971 Guadeloupe aussi fidèlement que possible." },
      { q: "Est-ce que la préparation aux oraux couvre aussi les examens professionnels (RAEP) ?", a: "Oui. La préparation inclut les entretiens sur dossier RAEP (rédacteur principal, technicien principal, etc.). La dynamique est différente d'un oral de concours classique : le jury a lu votre dossier et pose des questions précises sur votre parcours. Nous simulons cet entretien en ayant lu votre RAEP au préalable." },
      { q: "Peut-on suivre uniquement la préparation aux oraux sans avoir suivi la préparation écrite chez Evolutia ?", a: "Oui, tout à fait. La préparation aux oraux est une formation indépendante, ouverte aux candidats admissibles quel que soit leur parcours de préparation précédent. Nous accueillons chaque année des candidats qui ont préparé leurs écrits ailleurs et viennent spécifiquement pour les simulations jury." },
    ],
    sourceOfficielle: "https://www.cdg971.com/fr/concours-examens/calendrier-et-inscription",
  },
};

export async function generateStaticParams() {
  return Object.keys(FORMATIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = FORMATIONS[slug];
  if (!f) return {};
  return { title: f.seoTitle, description: f.seoDesc };
}

const OTHER_FORMATIONS = [
  { label: "Ingénieur Territorial", slug: "ingenieur-territorial-guadeloupe" },
  { label: "Technicien Territorial", slug: "technicien-territorial-guadeloupe" },
  { label: "Rédacteur Territorial", slug: "redacteur-territorial-guadeloupe" },
  { label: "Rédacteur Principal", slug: "redacteur-principal-guadeloupe" },
  { label: "Agent de Maîtrise", slug: "agent-de-maitrise-guadeloupe" },
  { label: "Ingénieur en Chef", slug: "ingenieur-chef-guadeloupe" },
  { label: "Ingénieur Externe", slug: "ingenieur-territorial-externe-guadeloupe" },
  { label: "Préparation Oraux", slug: "preparation-oraux-concours-guadeloupe" },
];

const statutColor: Record<string, string> = {
  ouvert: "#16a34a",
  bientot: "#d97706",
  ferme: "#6b7280",
};
const statutLabel: Record<string, string> = {
  ouvert: "Ouvert",
  bientot: "À venir",
  ferme: "Clôturé",
};

export default async function FormationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = FORMATIONS[slug];
  if (!f) notFound();

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1a2740", background: "#F8FAFF" }}>

      {/* Navbar */}
      <NavBar />

      {/* Breadcrumb */}
      <div style={{ background: "white", borderBottom: "1px solid #D6E4F0", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#5a6f8f" }}>
          <Link href="/" style={{ color: "#5a6f8f", textDecoration: "none" }}>Accueil</Link>
          <span>/</span>
          <Link href="/formations" style={{ color: "#5a6f8f", textDecoration: "none" }}>Formations</Link>
          <span>/</span>
          <span style={{ color: "#1B3A6B", fontWeight: 600 }}>{f.titre}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #0d1e3d 100%)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 260px", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.3)", color: "#F5A623", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 100, marginBottom: 20 }}>{f.categorie}</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "white", margin: "0 0 12px 0", lineHeight: 1.15 }}>{f.titre}</h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, margin: "0 0 28px 0" }}>{f.sousTitre}</p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.75, maxWidth: 580, margin: "0 0 36px 0" }}>{f.accroche}</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none" }}>
                Réserver un entretien gratuit
              </Link>
              <Link href="/formations" style={{ background: "transparent", color: "white", fontWeight: 600, fontSize: 15, padding: "16px 32px", borderRadius: 10, textDecoration: "none", border: "2px solid rgba(255,255,255,0.3)" }}>
                Toutes les formations
              </Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(75,173,212,0.25)", borderRadius: 16, padding: "28px 24px" }}>
            <div style={{ color: "#4BADD4", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>En un coup d&apos;œil</div>
            {([
              { label: "Taux de réussite", val: f.tauxReussite, highlight: true },
              { label: "Durée", val: f.duree, highlight: false },
              { label: "Format", val: f.format, highlight: false },
              { label: "Financement", val: "CPF éligible", highlight: false },
            ] as {label:string;val:string;highlight:boolean}[]).map((row, i) => (
              <div key={i} style={{ padding: "12px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 3 }}>{row.label}</div>
                <div style={{ color: row.highlight ? "#F5A623" : "white", fontSize: row.highlight ? 22 : 14, fontWeight: row.highlight ? 800 : 500 }}>{row.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 40, alignItems: "start" }}>
        <div>
          {/* Épreuves */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>Les épreuves du concours</h2>
            <p style={{ color: "#5a6f8f", fontSize: 14, marginBottom: 24 }}>Programme officiel — source : CNFPT / CDG 971 Guadeloupe</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {f.epreuves.map((e, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderLeft: "4px solid #4BADD4", borderRadius: 12, padding: "18px 22px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 16, alignItems: "start" }}>
                  <div style={{ background: "#EEF5FF", color: "#1B3A6B", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6, whiteSpace: "nowrap" }}>{e.type}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "#1B3A6B", marginBottom: 4 }}>{e.label}</div>
                    <div style={{ fontSize: 14, color: "#5a6f8f", lineHeight: 1.6 }}>{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Programme */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 24px 0" }}>Notre programme de préparation</h2>
            <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 16, padding: "28px 32px" }}>
              {f.programme.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < f.programme.length - 1 ? 14 : 0 }}>
                  <div style={{ width: 26, height: 26, background: "linear-gradient(135deg, #1B3A6B, #4BADD4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span style={{ fontSize: 15, color: "#3a4f6a", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Conditions */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 24px 0" }}>Conditions d&apos;accès au concours</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {f.conditions.map((c, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ background: "#F5A623", color: "white", fontWeight: 800, fontSize: 12, padding: "4px 12px", borderRadius: 6, whiteSpace: "nowrap", flexShrink: 0 }}>{c.voie}</div>
                  <span style={{ fontSize: 15, color: "#3a4f6a" }}>{c.condition}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1B3A6B", margin: "0 0 8px 0" }}>Questions fréquentes</h2>
            <p style={{ color: "#5a6f8f", fontSize: 14, marginBottom: 24 }}>Les réponses aux questions les plus posées sur cette formation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {f.faq.map((item, i) => (
                <details key={i} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, overflow: "hidden" }}>
                  <summary style={{ padding: "18px 22px", fontWeight: 600, fontSize: 15, color: "#1B3A6B", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    {item.q}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M6 9l6 6 6-6"/></svg>
                  </summary>
                  <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#5a6f8f", lineHeight: 1.7, borderTop: "1px solid #EEF5FF" }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Source officielle */}
          <div style={{ background: "#EEF5FF", border: "1px solid #D6E4F0", borderRadius: 10, padding: "14px 18px", display: "flex", gap: 12, alignItems: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span style={{ fontSize: 13, color: "#5a6f8f" }}>Informations officielles :{" "}
              <a href={f.sourceOfficielle} target="_blank" rel="noopener noreferrer" style={{ color: "#1B3A6B", fontWeight: 600 }}>CDG 971 Guadeloupe / CNFPT</a>
              {" "}— vérifiez toujours les dates sur le site officiel avant de vous inscrire.
            </span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="formation-sidebar" style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 20 }}>
          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, #1B3A6B, #2a4f8f)", borderRadius: 16, padding: "28px 22px" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white", margin: "0 0 12px 0" }}>Intéressé(e) par cette formation ?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, margin: "0 0 20px 0" }}>Entretien gratuit pour évaluer votre profil et construire votre plan de préparation personnalisé.</p>
            <Link href="/contact" style={{ display: "block", background: "#F5A623", color: "#1B3A6B", fontWeight: 700, fontSize: 14, padding: "14px", borderRadius: 8, textDecoration: "none", textAlign: "center" }}>
              Réserver un entretien gratuit
            </Link>
            <div style={{ marginTop: 12, textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: 12 }}>0690 44 73 60</div>
          </div>

          {/* Dates clés */}
          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "18px" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B" }}>Dates clés 2026-2027</div>
            </div>
            {f.datesCles.map((d, i) => (
              <div key={i} style={{ padding: "10px 0", borderBottom: i < f.datesCles.length - 1 ? "1px solid #EEF5FF" : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ fontSize: 13, color: "#3a4f6a", lineHeight: 1.4 }}>{d.label}</span>
                  <span style={{ background: statutColor[d.statut] + "20", color: statutColor[d.statut], fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4, whiteSpace: "nowrap", flexShrink: 0 }}>{statutLabel[d.statut]}</span>
                </div>
                <div style={{ fontSize: 12, color: "#5a6f8f", marginTop: 3 }}>{d.date}</div>
              </div>
            ))}
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #EEF5FF" }}>
              <a href={f.sourceOfficielle} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#4BADD4", textDecoration: "none", fontWeight: 600 }}>
                → Vérifier sur CDG 971 / CNFPT
              </a>
            </div>
          </div>

          {/* CPF */}
          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "18px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
              <div style={{ width: 34, height: 34, background: "#EEF5FF", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#1B3A6B" }}>Financement CPF</div>
            </div>
            <p style={{ fontSize: 13, color: "#5a6f8f", lineHeight: 1.6, margin: 0 }}>Formation éligible au Compte Personnel de Formation. Financement possible sans avance de frais.</p>
          </div>

          {/* Autres formations */}
          <div style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 12, padding: "18px" }}>
            <div style={{ color: "#5a6f8f", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Autres formations</div>
            {OTHER_FORMATIONS.filter(o => o.slug !== slug).slice(0, 5).map(o => (
              <Link key={o.slug} href={`/formations/${o.slug}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #EEF5FF", textDecoration: "none", color: "#1B3A6B", fontSize: 13, fontWeight: 500 }}>
                {o.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4BADD4" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </div>
  );
}
