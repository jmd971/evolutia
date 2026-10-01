// Données des formations Evolutia — alignées sur le calendrier CDG 971 (MAJ 15/07/2026).
// Épreuves et conditions : source officielle concours-territorial.fr et décrets (Légifrance).

export type Epreuve = { type: string; label: string; desc: string };
export type Condition = { voie: string; condition: string };
export type DateCle = { label: string; date: string; statut: "ouvert" | "bientot" | "ferme" };
export type Faq = { q: string; a: string };

// Fiche programme complète (format Qualiopi : objectifs, prérequis, moyens,
// contenu, suivi, accessibilité). Affichée en section « Programme détaillé »
// sur la page de la formation quand elle est renseignée.
export type ProgrammeModule = { titre: string; desc: string };
export type ProgrammeSession = { titre: string; intro?: string; modules: ProgrammeModule[] };
export type ProgrammeDetaille = {
  // Propre à la formation : c'est ce qu'un auditeur vérifie en premier.
  objectifs: string[];
  prerequis: string[];
  contenuIntro: string;
  contenu: ProgrammeSession[];
  // Tarif et équipe pédagogique : omis tant qu'Evolutia ne les a pas communiqués
  // pour la préparation concernée — mieux vaut l'absence qu'une valeur inventée.
  tarif?: string;
  equipe?: string;
  // Repris du socle commun (app/formations/socle-qualiopi.ts) quand la fiche ne
  // les précise pas : ne renseigner ici que ce qui diffère réellement.
  publics?: string;
  delaiAcces?: string;
  moyens?: string[];
  suivi?: string[];
  // Ajoutés au socle, pour ce qui est propre à la préparation sans avoir à
  // recopier le contenu commun.
  moyensEnPlus?: string[];
  suiviEnPlus?: string[];
  // Oraux blancs filmés : ajoute la modalité aux moyens et le prérequis de
  // droit à l'image, tous deux définis une seule fois dans socle-qualiopi.ts.
  simulationsFilmees?: boolean;
};

// Session de préparation dont les inscriptions sont ouvertes. `demarrageISO`
// sert de valeur au champ GHL « Session choisie » dans le lien d'inscription
// (voir app/config.ts → inscriptionUrl).
export type Session = {
  intitule: string;
  demarrage: string;
  demarrageISO: string;
  inscription: "ouverte" | "bientot" | "close";
};

export type Formation = {
  titre: string;
  sousTitre: string;
  categorie: string;
  filiere: string;
  type: string;
  descCourte: string;
  seoTitle: string;
  seoDesc: string;
  accroche: string;
  epreuves: Epreuve[];
  programme: string[];
  conditions: Condition[];
  duree: string;
  format: string;
  tauxReussite?: string;
  resultats2026?: string;
  color: string;
  accent: string;
  datesCles: DateCle[];
  session?: Session;
  // Objectifs pédagogiques (section « Objectifs de la formation »), pour les
  // formations sans fiche programme complète.
  objectifs?: string[];
  programmeDetaille?: ProgrammeDetaille;
  faq: Faq[];
  sourceOfficielle: string;
};

export const FILIERES_ORDER = [
  "Filière administrative",
  "Filière animation",
  "Filière médico-sociale",
  "Filière technique",
  "Toutes filières",
];

export const FORMATIONS: Record<string, Formation> = {

  /* ─────────────────────── FILIÈRE ADMINISTRATIVE ─────────────────────── */

  "attache-territorial-guadeloupe": {
    titre: "Attaché Territorial",
    sousTitre: "Concours externe, interne et 3e voie",
    categorie: "Catégorie A",
    filiere: "Filière administrative",
    type: "Concours",
    descCourte: "Le concours administratif de référence en catégorie A : composition, note de spécialité et entretien.",
    seoTitle: "Préparation Concours Attaché Territorial Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez le concours d'attaché territorial en Guadeloupe : composition, note, entretien jury. Formateurs experts, financement CPF. Evolutia, Les Abymes.",
    accroche: "Le concours d'attaché territorial ouvre l'accès aux fonctions de direction administrative des collectivités : direction de services, gestion RH, finances, urbanisme. C'est le concours le plus prestigieux de la filière administrative. Notre préparation couvre les cinq spécialités et les trois voies d'accès.",
    epreuves: [
      { type: "Écrit", label: "Composition sur un sujet d'ordre général (4h, coef. 3)", desc: "Sujet relatif à la place et au rôle des collectivités territoriales dans les problématiques locales (société, économie, éducation, santé, aménagement…). Voie externe uniquement." },
      { type: "Écrit", label: "Note ou rapport de spécialité (4h, coef. 4)", desc: "Rédaction à partir d'un dossier dans la spécialité choisie à l'inscription : administration générale, gestion du secteur sanitaire et social, analyste, animation, urbanisme et développement des territoires. En interne et 3e voie, le rapport doit dégager des solutions opérationnelles." },
      { type: "Oral", label: "Entretien avec le jury (25 min, coef. 4 à 5)", desc: "Présentation du parcours puis échange, le cas échéant sous forme de mise en situation professionnelle, sur les connaissances administratives, la motivation et l'aptitude à exercer. Épreuve facultative de langue vivante possible (15 min, coef. 1)." },
    ],
    programme: [
      "146 h de préparation écrite : méthodologie et entraînement au rapport / note sur dossier, conformes aux notes de cadrage nationales",
      "Module « Composition » réservé à la voie externe : sujets d'ordre général liés aux collectivités territoriales",
      "Culture territoriale : institutions, droit public, finances publiques, actualité et enjeux contemporains",
      "Cadre d'emplois d'attaché territorial : statut, missions, positionnement dans la collectivité (spécialité administration générale)",
      "20 h de préparation orale : exposé du parcours, techniques face au jury, oraux blancs filmés avec bilan individuel",
      "Devoirs corrigés individuellement, concours blancs et évaluation formative continue",
    ],
    conditions: [
      { voie: "Externe", condition: "Diplôme de niveau 6 (Bac+3, licence) ou qualification reconnue équivalente" },
      { voie: "Interne", condition: "Fonctionnaires et agents publics comptant au moins 4 ans de services publics au 1er janvier de l'année du concours" },
      { voie: "3e voie", condition: "4 ans au moins d'activités professionnelles, de mandats d'élu local ou de responsabilités associatives" },
    ],
    duree: "166 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel — 146 h d'écrit, 20 h d'oral",
    tauxReussite: "80%",
    resultats2026: "80% d'admis",
    color: "#1B3A6B",
    accent: "#4BADD4",
    datesCles: [
      { label: "Épreuves écrites (session 2026)", date: "19 novembre 2026", statut: "bientot" },
      { label: "Inscriptions (session 2026)", date: "Clôturées le 15 avril 2026", statut: "ferme" },
      { label: "Préparation à l'oral d'admission", date: "Dès les résultats d'admissibilité", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Fonctionnaires, agents publics et adultes motivés hors fonction publique (salariés du privé, demandeurs d'emploi) : tout public remplissant les conditions d'accès au concours.",
      objectifs: [
        "Comprendre les attendus de l'épreuve écrite (rapport / note sur dossier, et composition pour la voie externe) et de l'épreuve orale du concours d'attaché territorial.",
        "Maîtriser les notions clés liées à la place et au rôle des collectivités territoriales dans les problématiques locales.",
        "Analyser un dossier professionnel dans la spécialité administration générale et rédiger un rapport avec propositions opérationnelles, structuré et argumenté.",
        "Pour la voie externe : analyser un sujet d'ordre général et rédiger une composition structurée.",
        "Présenter et valoriser son parcours professionnel de manière pertinente pour l'épreuve orale, selon le format propre à sa voie d'accès.",
        "Gérer le temps et le stress lors des épreuves.",
      ],
      prerequis: [
        "Connaissance du programme du concours (notes de cadrage)",
        "Niveau de motivation suffisant",
        "Implication personnelle hors temps de formation",
        "Remplir les conditions d'accès au concours",
      ],
      equipe: "2 formateurs pour la session d'admissibilité (écrit), 2 formateurs pour la session d'admission (oral).",
      delaiAcces: "15 jours après inscription",
      tarif: "1 900 €",
      moyens: [
        "Alternance d'apports théoriques et méthodologiques et de travaux pratiques à partir de dossiers types, conformes aux exigences des notes de cadrage nationales du rapport / note sur dossier et de la composition (cadrage actualisé du 28/08/2023).",
        "Études de cas et mises en situation proches des conditions réelles du concours, à partir des thématiques des annales nationales (spécialité administration générale et sujets de culture territoriale).",
        "Exercices individuels et collectifs avec corrections personnalisées, différenciés selon la voie d'accès (interne / externe) lorsque les épreuves diffèrent.",
        "Outils interactifs : quiz, questionnaires à choix multiples, mises en situation.",
        "Devoirs corrigés individuellement avec conseils personnalisés.",
        "Simulations d'oraux filmés et analysés dans les conditions réelles du concours (avec attestation de droit à l'image signée par le stagiaire).",
        "Évaluation formative continue, avec bref rappel de la séance précédente à chaque début de cours.",
      ],
      contenuIntro: "La formation comprend 146 heures de préparation écrite (tronc commun aux deux voies et module complémentaire pour la voie externe) et 20 heures de préparation orale commune.",
      contenu: [
        {
          titre: "Session écrite — épreuve d'admissibilité",
          modules: [
            { titre: "Tronc commun (interne et externe) — Méthodologie et entraînement au rapport / note sur dossier", desc: "Analyse du dossier documentaire, élaboration d'un plan et entraînement à la rédaction (introduction avec annonce de plan, parties et sous-parties numérotées, style neutre et concis), conformément aux notes de cadrage nationales. Évaluations corrigées et commentées sur sujets et dossiers types représentatifs des annales du concours." },
            { titre: "Module complémentaire « Composition » — réservé à la voie externe", desc: "Méthodologie de la composition sur un sujet d'ordre général lié aux collectivités territoriales (introduction de 20 à 30 lignes, problématisation, plan, conclusion), à partir de sujets types des annales nationales : démocratie, société, économie, emploi, éducation, santé, culture, urbanisme, relations extérieures. En parallèle, les stagiaires de la voie interne poursuivent l'entraînement au rapport sur dossier et des études de cas complémentaires." },
          ],
        },
        {
          titre: "Session orale — épreuve d'admission",
          modules: [
            { titre: "Méthodologie de l'épreuve orale et techniques de communication face à un jury", desc: "Adaptée au format propre à chaque voie : 20 minutes, coefficient 4, pour la voie externe ; 25 minutes dont 10 minutes d'exposé, coefficient 5, pour la voie interne." },
            { titre: "Tronc commun — Connaissances liées au cadre d'emplois d'attaché territorial", desc: "Statut, missions et responsabilités de l'attaché territorial (décret n° 87-1099 du 30 décembre 1987) ; positionnement au sein des services de la collectivité (spécialité administration générale) ; études de cas et mises en situation liées au cadre d'emplois visé." },
            { titre: "Tronc commun — Environnement territorial, droit public, finances publiques, culture générale et enjeux contemporains", desc: "Missions et compétences des collectivités territoriales et organisation administrative locale ; notions essentielles de droit public et de finances publiques ; culture générale et actualité territoriale utiles au rapport, à la note et, pour la voie externe, à la composition." },
            { titre: "Mises en situation devant jury", desc: "Oraux blancs filmés et analysés en conditions réelles, à partir d'un exposé du parcours professionnel du candidat, avec bilan individuel personnalisé et conseils de progression." },
          ],
        },
      ],
      suivi: [
        "Un bref rappel de la séance précédente à chaque début de cours",
        "Des sujets d'entraînement aux épreuves écrites, corrigés et commentés",
        "Des concours blancs",
        "Des entretiens avec un jury professionnel",
      ],
    },
    faq: [
      { q: "Quelles sont les spécialités du concours d'attaché territorial ?", a: "Cinq spécialités au choix à l'inscription : administration générale, gestion du secteur sanitaire et social, analyste, animation, urbanisme et développement des territoires. En Guadeloupe, l'administration générale offre le plus de débouchés, mais la spécialité sanitaire et sociale est très recherchée par le Département." },
      { q: "Peut-on encore se préparer pour la session 2026 ?", a: "Les inscriptions 2026 sont closes, mais les candidats inscrits passent les écrits le 19 novembre 2026 : c'est le moment d'intensifier la préparation aux épreuves écrites, puis de préparer l'oral d'admission. Pour les autres candidats, nous préparons dès maintenant la prochaine session." },
      { q: "Quelle différence entre le concours d'attaché et l'examen d'attaché principal ?", a: "Le concours d'attaché permet d'entrer dans le cadre d'emplois (recrutement). L'examen professionnel d'attaché principal est un avancement de grade réservé aux attachés déjà en poste. Evolutia prépare les deux — voir notre formation dédiée à l'examen d'attaché principal." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=275",
  },

  "attache-principal-guadeloupe": {
    titre: "Attaché Principal",
    sousTitre: "Examen professionnel d'avancement de grade",
    categorie: "Catégorie A",
    filiere: "Filière administrative",
    type: "Examen pro.",
    descCourte: "Avancement de grade des attachés : note de mise en situation professionnelle (4h) et entretien jury.",
    seoTitle: "Examen Professionnel Attaché Principal Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez l'examen professionnel d'attaché principal en Guadeloupe : note de 4h, entretien jury. Inscriptions nov.-déc. 2026, épreuves avril 2027. CPF.",
    accroche: "L'examen professionnel d'attaché principal permet aux attachés territoriaux d'accéder au grade supérieur et aux fonctions d'encadrement renforcé. L'écrit de mise en situation professionnelle et l'entretien exigent une préparation ciblée sur la posture de cadre confirmé.",
    epreuves: [
      { type: "Écrit", label: "Note à partir d'un dossier de mise en situation professionnelle (4h, coef. 1)", desc: "Vérifie les capacités d'analyse et l'aptitude à proposer des solutions opérationnelles argumentées. Toute note inférieure à 5/20 est éliminatoire." },
      { type: "Oral", label: "Entretien avec le jury (20 min dont 5 min d'exposé, coef. 1)", desc: "Exposé sur l'expérience professionnelle puis questions sur les aptitudes, notamment en matière d'encadrement, les connaissances administratives générales et la motivation à exercer les fonctions d'attaché principal." },
    ],
    programme: [
      "Méthodologie de la note de mise en situation professionnelle — sujets d'annales corrigés",
      "Actualité des collectivités : finances locales, commande publique, RH, transition écologique",
      "Construction de l'exposé d'expérience professionnelle (5 minutes percutantes)",
      "Posture managériale : encadrement, conduite de projet, relations aux élus",
      "Simulations d'entretien filmées avec débriefing individuel",
      "Planning de révision personnalisé jusqu'aux épreuves d'avril 2027",
    ],
    conditions: [
      { voie: "Avancement de grade", condition: "Attachés justifiant de 3 ans de services effectifs en catégorie A et ayant atteint le 5e échelon du grade d'attaché (possibilité de se présenter 1 an avant de remplir les conditions)" },
    ],
    duree: "50 à 70 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel",
    color: "#F5A623",
    accent: "#1B3A6B",
    datesCles: [
      { label: "Inscriptions", date: "2 nov. → 15 déc. 2026", statut: "bientot" },
      { label: "Épreuve écrite", date: "8 avril 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Dès septembre 2026", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Attachés territoriaux en poste remplissant les conditions d'inscription à l'examen professionnel d'avancement au grade d'attaché principal.",
      simulationsFilmees: true,
      objectifs: [
        "Traiter en quatre heures un dossier de mise en situation professionnelle et produire une note d'analyse assortie de solutions opérationnelles argumentées.",
        "Se placer dans la position du cadre à qui la note est commandée : identifier le commanditaire, l'enjeu de la décision et les contraintes de la collectivité.",
        "Mobiliser l'actualité des collectivités — finances locales, commande publique, ressources humaines, transition écologique — au service des propositions formulées.",
        "Construire un exposé de cinq minutes sur son expérience professionnelle, centré sur les responsabilités réellement exercées.",
        "Démontrer devant le jury une posture d'encadrement : conduite de projet, animation d'équipe, relations aux élus et arbitrages.",
        "Sécuriser l'écrit, dont toute note inférieure à 5/20 est éliminatoire.",
      ],
      prerequis: [
        "Être attaché territorial, justifier de trois ans de services effectifs en catégorie A et avoir atteint le 5e échelon du grade — il est possible de se présenter un an avant de remplir ces conditions",
        "Exercer ou avoir exercé des responsabilités sur lesquelles appuyer l'exposé et l'entretien",
        "Pouvoir consacrer du temps de travail personnel entre les séances",
      ],
      contenuIntro: "La préparation représente 50 à 70 heures, réparties entre l'écrit de mise en situation professionnelle et l'entretien, chacun de coefficient 1. L'examen étant un avancement de grade, les attendus portent moins sur les connaissances académiques que sur la capacité à se comporter en cadre confirmé — c'est l'axe de toute la préparation.",
      contenu: [
        {
          titre: "Note de mise en situation professionnelle — écrit (4h, coef. 1)",
          modules: [
            { titre: "Méthodologie de la note de mise en situation", desc: "Lecture du dossier sous l'angle de la commande, identification de la problématique de gestion, construction d'un plan orienté vers la décision, puis rédaction dans un style de cadre territorial. Travail sur sujets d'annales corrigés." },
            { titre: "Formuler des propositions opérationnelles", desc: "Passer du constat à la solution : hiérarchiser les scénarios, en mesurer le coût et les conditions de mise en œuvre, assumer une recommandation. C'est ce que le jury attend d'un futur attaché principal, et ce qui distingue la copie moyenne de la copie admise." },
            { titre: "Actualité des collectivités", desc: "Finances locales et contraintes budgétaires, commande publique, gestion des ressources humaines, transition écologique et adaptation aux risques en Guadeloupe. Veille structurée, réinvestie dans les propositions." },
            { titre: "Entraînements corrigés", desc: "Devoirs sur dossiers types corrigés individuellement, puis épreuve blanche en temps réel, avec un point de vigilance sur la note éliminatoire de 5/20." },
          ],
        },
        {
          titre: "Entretien avec le jury — oral (20 min dont 5 min d'exposé, coef. 1)",
          modules: [
            { titre: "Construction de l'exposé de cinq minutes", desc: "Sélection des réalisations marquantes du parcours, mise en évidence du niveau de responsabilité, structuration et conduite de l'exposé dans un temps court." },
            { titre: "Posture managériale", desc: "Encadrement d'une équipe, conduite de projet transversal, gestion d'un conflit, relation avec les élus et la direction générale : les situations sur lesquelles le jury interroge pour apprécier l'aptitude au grade supérieur." },
            { titre: "Connaissances administratives générales", desc: "Organisation territoriale, cadre juridique de l'action des collectivités et grands équilibres financiers, au niveau attendu d'un attaché principal." },
            { titre: "Simulations d'entretien", desc: "Oraux blancs filmés devant un jury professionnel, avec débriefing individuel sur le fond, la posture et la gestion des questions déstabilisantes." },
          ],
        },
      ],
      moyensEnPlus: [
        "Planning de révision personnalisé jusqu'aux épreuves d'avril 2027.",
      ],
    },
    faq: [
      { q: "Qui peut se présenter à l'examen d'attaché principal ?", a: "Les attachés territoriaux justifiant de 3 ans de services effectifs dans un cadre d'emplois de catégorie A et ayant atteint le 5e échelon du grade d'attaché. Vous pouvez vous présenter au plus tôt un an avant de remplir ces conditions — vérifiez votre situation avec votre service RH ou avec nous." },
      { q: "La réussite à l'examen garantit-elle la promotion ?", a: "Non. La réussite vous rend inscriptible au tableau d'avancement, mais la nomination reste une décision de votre collectivité. Un bon dossier et un entretien réussi renforcent toutefois nettement votre position." },
      { q: "Combien de temps de préparation prévoir ?", a: "Comptez 3 à 5 mois. L'écrit de 4h exige un entraînement méthodologique régulier, et l'exposé d'expérience de 5 minutes doit être construit et répété. Nos candidats commencent idéalement en septembre pour des épreuves en avril." },
    ],
    sourceOfficielle: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000844123/",
  },

  "redacteur-territorial-guadeloupe": {
    titre: "Rédacteur Territorial",
    sousTitre: "Concours externe, interne et 3e voie — Rédacteur et Rédacteur principal de 2e classe",
    categorie: "Catégorie B",
    filiere: "Filière administrative",
    type: "Concours",
    descCourte: "Questions et note sur dossier (3h chacune), entretien jury. Prochaine session Evolutia : démarrage le 27 novembre 2026.",
    seoTitle: "Préparation Concours Rédacteur Territorial Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez le concours de rédacteur territorial en Guadeloupe : questions, note sur dossier, entretien. Session 2027, financement CPF. Evolutia, Les Abymes.",
    accroche: "Le concours de rédacteur territorial (catégorie B) est la porte d'entrée des missions administratives qualifiées : instruction de dossiers, rédaction d'actes, comptabilité, gestion. Les concours de rédacteur et de rédacteur principal de 2e classe sont organisés aux mêmes dates en 2027 — notre préparation couvre les deux.",
    epreuves: [
      { type: "Écrit", label: "Réponses à une série de questions (3h, coef. 1)", desc: "Voie externe rédacteur : questions portant sur le domaine choisi à l'inscription. Pour le concours de rédacteur principal de 2e classe : questions de droit public et de finances publiques portant sur le fonctionnement des collectivités." },
      { type: "Écrit", label: "Note ou rapport à partir d'un dossier (3h, coef. 1)", desc: "Rédaction d'une note sur les missions, compétences et moyens d'action des collectivités territoriales. En voie interne et 3e voie, c'est l'épreuve écrite unique. Pour rédacteur principal : rapport assorti de propositions opérationnelles." },
      { type: "Oral", label: "Entretien avec le jury (20 min, coef. 1)", desc: "Exposé du candidat sur sa formation et son projet professionnel (externe) ou sur les acquis de son expérience (interne, 3e voie), puis échange sur la motivation et l'aptitude à exercer les missions du cadre d'emplois." },
    ],
    programme: [
      "Droit public, finances publiques et fonctionnement des collectivités territoriales",
      "Méthodologie de la note sur dossier et des réponses à questions — approche note de cadrage",
      "Actualité territoriale nationale et locale (Guadeloupe, Antilles-Guyane)",
      "Entraînements intensifs sur sujets officiels — corrigés détaillés individuels",
      "Coaching oral : exposé, posture, argumentation, gestion du stress",
      "Suivi personnalisé par formateur référent jusqu'aux épreuves d'octobre 2027",
    ],
    conditions: [
      { voie: "Externe", condition: "Baccalauréat (niveau 4) pour rédacteur ; Bac+2 (niveau 5) pour rédacteur principal de 2e classe" },
      { voie: "Interne", condition: "Fonctionnaires et agents publics comptant au moins 4 ans de services publics au 1er janvier de l'année du concours" },
      { voie: "3e voie", condition: "4 ans au moins d'activités professionnelles, de mandats d'élu local ou de responsabilités associatives" },
    ],
    duree: "80 à 120 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel",
    tauxReussite: "64%",
    resultats2026: "7 admis sur 11 candidats",
    color: "#1B3A6B",
    accent: "#4BADD4",
    datesCles: [
      { label: "Démarrage de la préparation Evolutia", date: "Vendredi 27 novembre 2026", statut: "ouvert" },
      { label: "Inscriptions au concours (session 2027)", date: "2 fév. → 10 mars 2027", statut: "bientot" },
      { label: "Épreuves écrites", date: "14 octobre 2027", statut: "bientot" },
    ],
    session: {
      intitule: "Concours Rédacteur",
      demarrage: "vendredi 27 novembre 2026",
      demarrageISO: "2026-11-27",
      inscription: "ouverte",
    },
    programmeDetaille: {
      objectifs: [
        "Identifier les attendus des deux épreuves écrites du concours — la série de questions et la note ou le rapport à partir d'un dossier — et la forme de rédaction que chacune appelle.",
        "Mobiliser les connaissances de droit public, de finances publiques et de fonctionnement des collectivités territoriales nécessaires aux réponses à questions.",
        "Analyser un dossier documentaire en temps limité, en extraire les éléments utiles et rédiger une note structurée dans les trois heures imparties.",
        "Pour le concours de rédacteur principal de 2e classe : assortir le rapport de propositions opérationnelles argumentées, adressées à un destinataire identifié.",
        "Construire et présenter à l'oral un exposé de sa formation et de son projet professionnel (voie externe) ou des acquis de son expérience (voies interne et 3e voie).",
        "Suivre et exploiter l'actualité territoriale nationale et guadeloupéenne au service des épreuves.",
        "Gérer le temps et le stress le jour des épreuves.",
      ],
      prerequis: [
        "Remplir les conditions d'accès à la voie visée : baccalauréat en externe pour rédacteur, Bac+2 pour rédacteur principal de 2e classe, quatre ans de services publics en interne, quatre ans d'activité professionnelle, de mandat électif ou de responsabilité associative en 3e voie",
        "Avoir pris connaissance des notes de cadrage nationales des épreuves",
        "Pouvoir consacrer du temps de travail personnel entre les séances",
        "Maîtriser l'expression écrite en français",
      ],
      tarif: "À partir de 2 490 €",
      contenuIntro: "La préparation représente 80 à 120 heures, réparties entre les deux épreuves écrites d'admissibilité et l'entretien d'admission. Les concours de rédacteur et de rédacteur principal de 2e classe étant organisés aux mêmes dates en 2027, les deux sont préparés dans la même session, avec des travaux différenciés là où les épreuves divergent.",
      contenu: [
        {
          titre: "Épreuves écrites — admissibilité",
          intro: "En voie externe, les deux épreuves écrites comptent ; en voie interne et en 3e voie, la note sur dossier est l'unique épreuve écrite.",
          modules: [
            { titre: "Droit public, finances publiques et fonctionnement des collectivités", desc: "Organisation administrative locale, compétences et moyens d'action des collectivités, notions essentielles de droit public et de finances publiques. Ce module est approfondi pour les candidats au concours de rédacteur principal de 2e classe, dont la série de questions porte spécifiquement sur ces deux domaines." },
            { titre: "Méthodologie de la série de questions (3h, coef. 1)", desc: "Lecture et cadrage de la question posée, construction d'une réponse courte et hiérarchisée, gestion du temps entre les questions. Entraînements sur les domaines proposés à l'inscription en voie externe." },
            { titre: "Méthodologie de la note ou du rapport sur dossier (3h, coef. 1)", desc: "Analyse du dossier documentaire, sélection des éléments pertinents, élaboration d'un plan, rédaction d'une note sur les missions, compétences et moyens d'action des collectivités territoriales. Pour le rapport de rédacteur principal, formulation de propositions opérationnelles. Conforme aux notes de cadrage nationales." },
            { titre: "Actualité territoriale nationale et guadeloupéenne", desc: "Veille structurée sur les réformes, les finances locales et les enjeux propres aux Antilles-Guyane, réinvestie dans les réponses à questions comme dans la note." },
            { titre: "Entraînements sur sujets officiels", desc: "Devoirs sur annales, corrigés individuellement et commentés, puis concours blancs en conditions et en temps réels." },
          ],
        },
        {
          titre: "Entretien avec le jury — admission",
          modules: [
            { titre: "Construction de l'exposé", desc: "Voie externe : présentation de la formation et du projet professionnel. Voies interne et 3e voie : mise en valeur des acquis de l'expérience. Choix des éléments à retenir, articulation et conduite de l'exposé dans le temps imparti." },
            { titre: "Connaissance du cadre d'emplois et de l'environnement professionnel", desc: "Missions du rédacteur territorial — instruction de dossiers, rédaction d'actes, comptabilité, gestion — positionnement dans les services et attentes d'un employeur territorial guadeloupéen." },
            { titre: "Simulations d'entretien (20 min, coef. 1)", desc: "Entretiens blancs devant un jury professionnel, portant sur la motivation et l'aptitude à exercer les missions, suivis d'un bilan individuel et de conseils de progression." },
          ],
        },
      ],
      moyensEnPlus: [
        "Suivi personnalisé par un formateur référent jusqu'aux épreuves écrites d'octobre 2027.",
      ],
    },
    faq: [
      { q: "Quelles sont exactement les épreuves écrites du concours de rédacteur ?", a: "En voie externe : une série de questions (3h) et la rédaction d'une note à partir d'un dossier (3h). En voie interne et 3e voie : uniquement la note sur dossier (3h). Contrairement à une idée répandue, il n'y a ni dissertation de culture générale ni note de synthèse classique — la méthodologie attendue est précisée dans les notes de cadrage officielles, sur lesquelles nous nous appuyons." },
      { q: "Rédacteur ou rédacteur principal de 2e classe : quel concours choisir ?", a: "Les deux concours sont organisés aux mêmes dates en 2027. Le concours de rédacteur principal de 2e classe exige un Bac+2 et des épreuves plus techniques (droit public et finances publiques), mais offre un grade et une rémunération supérieurs dès l'entrée. Si vous avez le diplôme requis, il est souvent pertinent de viser le principal." },
      { q: "Combien de temps faut-il pour se préparer ?", a: "Entre 6 et 9 mois de préparation régulière. Les épreuves écrites de 3h demandent un entraînement méthodologique prolongé, et l'actualité territoriale se travaille dans la durée. Pour des épreuves en octobre 2027, commencez idéalement en début d'année 2027." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=324",
  },

  "redacteur-principal-guadeloupe": {
    titre: "Rédacteur Principal",
    sousTitre: "Examens professionnels d'avancement de grade (1re et 2e classe)",
    categorie: "Catégorie B",
    filiere: "Filière administrative",
    type: "Examen pro.",
    descCourte: "Avancement de grade : rapport avec propositions (3h) et entretien jury. Épreuves le 24 septembre 2026.",
    seoTitle: "Examen Professionnel Rédacteur Principal Guadeloupe 2026 | Evolutia",
    seoDesc: "Préparez l'examen professionnel de rédacteur principal 1re ou 2e classe en Guadeloupe : rapport écrit 3h + entretien. Épreuves sept. 2026. CPF possible.",
    accroche: "Les examens professionnels de rédacteur principal (2e classe et 1re classe) permettent aux rédacteurs en poste d'accéder aux grades supérieurs. Contrairement à une idée reçue, l'examen comporte une véritable épreuve écrite : un rapport avec propositions opérationnelles, en plus de l'entretien avec le jury.",
    epreuves: [
      { type: "Écrit", label: "Rapport à partir d'un dossier, assorti de propositions (3h, coef. 1)", desc: "Dossier portant sur les missions, compétences et moyens d'action des collectivités territoriales. Une note inférieure à 5/20 interdit l'accès à l'oral. Épreuve identique pour la 1re et la 2e classe." },
      { type: "Oral", label: "Entretien avec le jury (20 min dont 5 min d'exposé, coef. 1)", desc: "Exposé sur les acquis de l'expérience professionnelle, puis questions permettant d'apprécier les facultés d'analyse, l'aptitude et la motivation à exercer les missions du grade, y compris l'encadrement d'équipe." },
    ],
    programme: [
      "Méthodologie du rapport avec propositions opérationnelles — annales corrigées",
      "Missions, compétences et moyens d'action des collectivités : les fondamentaux à maîtriser",
      "Construction de l'exposé d'expérience professionnelle (5 minutes)",
      "Posture d'encadrement : animer une équipe, organiser un service",
      "Simulations d'entretien jury filmées avec débriefing individuel",
      "Relecture et correction individuelles de vos écrits d'entraînement",
    ],
    conditions: [
      { voie: "2e classe", condition: "Rédacteurs ayant atteint le 6e échelon du grade et justifiant d'au moins 3 ans de services effectifs en catégorie B (conditions applicables aux tableaux d'avancement à compter de 2026)" },
      { voie: "1re classe", condition: "Rédacteurs principaux de 2e classe justifiant d'au moins 1 an dans le 6e échelon et de 3 ans de services effectifs en catégorie B" },
    ],
    duree: "40 à 60 heures",
    format: "Présentiel (Grand-Camp) + accompagnement individuel en distanciel",
    tauxReussite: "88%",
    color: "#F5A623",
    accent: "#1B3A6B",
    datesCles: [
      { label: "Épreuve écrite (session 2026)", date: "24 septembre 2026", statut: "bientot" },
      { label: "Inscriptions (session 2026)", date: "Clôturées — CDG 971", statut: "ferme" },
      { label: "Préparation intensive à l'écrit et à l'oral", date: "Disponible dès maintenant", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Rédacteurs territoriaux et rédacteurs principaux de 2e classe en poste, remplissant les conditions d'inscription à l'examen professionnel d'avancement au grade visé.",
      simulationsFilmees: true,
      objectifs: [
        "Rédiger en trois heures un rapport à partir d'un dossier portant sur les missions, compétences et moyens d'action des collectivités territoriales.",
        "Assortir ce rapport de propositions opérationnelles réalistes, adressées à un destinataire identifié.",
        "Maîtriser les fondamentaux attendus sur le fonctionnement des collectivités, support des propositions comme des questions du jury.",
        "Construire un exposé de cinq minutes sur les acquis de son expérience professionnelle.",
        "Démontrer son aptitude à encadrer une équipe et à organiser un service.",
        "Sécuriser l'écrit, dont une note inférieure à 5/20 interdit l'accès à l'oral.",
      ],
      prerequis: [
        "Avancement en 2e classe : être rédacteur, avoir atteint le 6e échelon du grade et justifier d'au moins trois ans de services effectifs en catégorie B",
        "Avancement en 1re classe : être rédacteur principal de 2e classe, justifier d'au moins un an dans le 6e échelon et de trois ans de services effectifs en catégorie B",
        "Disposer d'une expérience professionnelle sur laquelle appuyer l'exposé oral",
      ],
      tarif: "À partir de 1 490 €",
      contenuIntro: "La préparation représente 40 à 60 heures. L'épreuve écrite étant identique pour la 1re et la 2e classe, les deux examens sont préparés dans la même session ; seules les attentes du jury à l'oral se renforcent pour la 1re classe. Contrairement à une idée répandue, cet examen comporte bien un écrit exigeant : c'est là que se joue l'admissibilité.",
      contenu: [
        {
          titre: "Rapport avec propositions — écrit (3h, coef. 1)",
          modules: [
            { titre: "Méthodologie du rapport", desc: "Analyse du dossier, identification de la commande, plan en deux parties — constat puis propositions — et rédaction dans la forme administrative attendue : en-tête, destinataire, objet, références. Entraînement sur annales corrigées." },
            { titre: "Formuler des propositions opérationnelles", desc: "Transformer l'analyse en décisions applicables : moyens, calendrier, acteurs à mobiliser, points de vigilance. C'est le critère qui différencie le rapport du simple résumé de dossier." },
            { titre: "Missions, compétences et moyens d'action des collectivités", desc: "Organisation administrative locale, répartition des compétences, moyens budgétaires et humains : les fondamentaux sur lesquels reposent les dossiers proposés à l'examen." },
            { titre: "Relecture et correction individuelles", desc: "Chaque écrit d'entraînement est corrigé et commenté personnellement, avec un axe de progression défini pour le devoir suivant." },
          ],
        },
        {
          titre: "Entretien avec le jury — oral (20 min dont 5 min d'exposé, coef. 1)",
          modules: [
            { titre: "Construction de l'exposé d'expérience", desc: "Mise en valeur des acquis de l'expérience professionnelle : dossiers conduits, responsabilités prises, résultats obtenus, en cinq minutes tenues." },
            { titre: "Posture d'encadrement", desc: "Animer une équipe, organiser un service, répartir la charge de travail, traiter une difficulté relationnelle : les mises en situation que le jury utilise pour apprécier l'aptitude au grade." },
            { titre: "Simulations d'entretien", desc: "Entretiens blancs filmés devant un jury professionnel, avec débriefing individuel." },
          ],
        },
      ],
      moyensEnPlus: [
        "Accompagnement individuel en distanciel entre les séances présentielles.",
      ],
    },
    faq: [
      { q: "L'examen de rédacteur principal comporte-t-il un écrit ?", a: "Oui. L'examen d'avancement de grade comporte une épreuve écrite de 3h — un rapport à partir d'un dossier, assorti de propositions opérationnelles — puis un entretien de 20 minutes. Une note inférieure à 5/20 à l'écrit est éliminatoire : ne négligez pas cette épreuve." },
      { q: "Quelle est la différence entre la 1re et la 2e classe ?", a: "Les épreuves sont identiques, mais les conditions d'accès diffèrent : la 2e classe est ouverte aux rédacteurs ayant atteint le 6e échelon avec 3 ans de services en catégorie B ; la 1re classe aux rédacteurs principaux de 2e classe avec 1 an dans le 6e échelon. Le jury attend un niveau de recul et de responsabilité supérieur pour la 1re classe." },
      { q: "Comment se préparer efficacement en travaillant à plein temps ?", a: "L'examen se prépare en 2 à 4 mois avec 3 à 4 heures de travail hebdomadaire : entraînements au rapport corrigés individuellement, construction de l'exposé de 5 minutes et simulations d'entretien. Notre format soirée (15h30-18h30) est conçu pour les agents en poste." },
    ],
    sourceOfficielle: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000026251677",
  },

  "adjoint-administratif-principal-guadeloupe": {
    titre: "Adjoint Administratif Principal de 2e Classe",
    sousTitre: "Examen professionnel d'avancement de grade",
    categorie: "Catégorie C",
    filiere: "Filière administrative",
    type: "Examen pro.",
    descCourte: "Avancement de grade : épreuve écrite professionnelle (1h30) et entretien. Épreuves en mars 2027.",
    seoTitle: "Examen Adjoint Administratif Principal Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez l'examen professionnel d'adjoint administratif principal 2e classe en Guadeloupe : écrit 1h30 + entretien. Inscriptions oct.-nov. 2026. CPF.",
    accroche: "L'examen professionnel d'adjoint administratif principal de 2e classe permet aux adjoints administratifs d'accéder au grade supérieur. Les épreuves sont accessibles mais ne s'improvisent pas : l'écrit teste la compréhension et la retranscription rapides, l'entretien valorise votre parcours.",
    epreuves: [
      { type: "Écrit", label: "Épreuve écrite à caractère professionnel (1h30, coef. 2)", desc: "À partir de documents succincts, trois à cinq questions appelant des réponses brèves ou sous forme de tableaux, vérifiant les capacités de compréhension et l'aptitude à retranscrire les idées principales. Note minimale de 5/20 pour accéder à l'oral." },
      { type: "Oral", label: "Entretien avec le jury (15 min dont 5 min de présentation, coef. 3)", desc: "Présentation de l'expérience professionnelle sur la base d'un document retraçant le parcours, puis conversation avec le jury sur la motivation et l'aptitude à exercer les missions confiées." },
    ],
    programme: [
      "Entraînement à l'épreuve écrite : lecture rapide, réponses brèves, tableaux",
      "Vocabulaire administratif et fonctionnement des collectivités territoriales",
      "Rédaction du document de parcours professionnel",
      "Construction de la présentation orale de 5 minutes",
      "Simulations d'entretien avec jury fictif et débriefing",
      "Séances adaptées aux agents en poste (fin de journée)",
    ],
    conditions: [
      { voie: "Avancement de grade", condition: "Adjoints administratifs ayant atteint le 4e échelon et comptant au moins 3 ans de services effectifs dans le grade ou un grade équivalent (échelle C1)" },
    ],
    duree: "30 à 50 heures",
    format: "Présentiel (Grand-Camp, Les Abymes)",
    color: "#4BADD4",
    accent: "#1B3A6B",
    datesCles: [
      { label: "Inscriptions", date: "20 oct. → 25 nov. 2026", statut: "bientot" },
      { label: "Épreuve écrite", date: "18 mars 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Novembre 2026", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Adjoints administratifs territoriaux en poste remplissant les conditions d'inscription à l'examen professionnel d'avancement au grade d'adjoint administratif principal de 2e classe.",
      objectifs: [
        "Lire rapidement des documents administratifs succincts et en retranscrire les idées principales.",
        "Répondre de façon brève et exacte à trois à cinq questions, y compris sous forme de tableaux, dans un temps limité à une heure trente.",
        "Employer à bon escient le vocabulaire administratif et situer son service dans le fonctionnement de la collectivité.",
        "Rédiger le document retraçant son parcours professionnel, support de l'entretien.",
        "Présenter son expérience en cinq minutes, puis répondre aux questions du jury sur sa motivation et son aptitude aux missions confiées.",
        "Sécuriser l'écrit, dont la note minimale de 5/20 conditionne l'accès à l'oral.",
      ],
      prerequis: [
        "Être adjoint administratif territorial, avoir atteint le 4e échelon et compter au moins trois ans de services effectifs dans le grade ou un grade équivalent (échelle C1)",
        "Maîtriser l'expression écrite en français",
        "Aucune connaissance académique préalable n'est exigée au-delà de la pratique du poste",
      ],
      contenuIntro: "La préparation représente 30 à 50 heures, en séances de fin de journée adaptées aux agents en poste. L'oral pèse davantage que l'écrit — coefficient 3 contre 2 — mais l'écrit reste éliminatoire sous 5/20 : la préparation sécurise d'abord l'admissibilité, puis travaille l'entretien, qui fait la différence au classement.",
      contenu: [
        {
          titre: "Épreuve écrite à caractère professionnel (1h30, coef. 2)",
          modules: [
            { titre: "Lecture rapide et repérage de l'essentiel", desc: "Méthode de lecture de documents administratifs courts, repérage des informations utiles et reformulation fidèle : l'épreuve vérifie la compréhension, pas la culture générale." },
            { titre: "Réponses brèves et présentation en tableaux", desc: "Formuler une réponse complète en peu de lignes, construire un tableau lisible, gérer le temps entre trois et cinq questions. Entraînements chronométrés sur sujets types." },
            { titre: "Vocabulaire administratif et fonctionnement des collectivités", desc: "Termes et formules du quotidien administratif, organisation de la commune et de l'intercommunalité, circuit d'un dossier et d'un acte." },
          ],
        },
        {
          titre: "Entretien avec le jury (15 min dont 5 min de présentation, coef. 3)",
          modules: [
            { titre: "Rédaction du document de parcours professionnel", desc: "Mise en forme du document qui sert de base à l'entretien : postes occupés, missions, compétences acquises, formations suivies, rédigés de façon claire et valorisante." },
            { titre: "Construction de la présentation orale", desc: "Cinq minutes structurées sur le parcours et les motivations, travaillées jusqu'à être tenues sans notes." },
            { titre: "Simulations d'entretien", desc: "Entretiens blancs devant un jury fictif, suivis d'un débriefing individuel sur le fond, l'expression et la posture." },
          ],
        },
      ],
      moyensEnPlus: [
        "Séances programmées en fin de journée, pour permettre aux agents de suivre la préparation sans interrompre leur service.",
      ],
    },
    faq: [
      { q: "Qui peut passer l'examen d'adjoint administratif principal de 2e classe ?", a: "Les adjoints administratifs territoriaux ayant atteint le 4e échelon et comptant au moins 3 ans de services effectifs dans le grade. Vous pouvez vous présenter au plus tôt un an avant de remplir ces conditions." },
      { q: "En quoi consiste l'épreuve écrite ?", a: "C'est une épreuve courte (1h30) mais exigeante : à partir de documents succincts, vous répondez à 3 à 5 questions par des réponses brèves ou des tableaux. Elle teste la rapidité de compréhension et la capacité à retranscrire les idées essentielles — cela s'entraîne avec des sujets types." },
      { q: "L'oral compte-t-il plus que l'écrit ?", a: "Oui : l'entretien est affecté du coefficient 3 contre 2 pour l'écrit. Une présentation de parcours bien construite et des réponses posées font souvent la différence. Nous consacrons la moitié de la préparation aux simulations d'entretien." },
    ],
    sourceOfficielle: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000466090",
  },

  /* ─────────────────────── FILIÈRE ANIMATION ─────────────────────── */

  "animateur-territorial-guadeloupe": {
    titre: "Animateur Territorial",
    sousTitre: "Concours — Animateur et Animateur principal de 2e classe",
    categorie: "Catégorie B",
    filiere: "Filière animation",
    type: "Concours",
    descCourte: "Questions ou rapport sur dossier animation (3h) et entretien. Session 2027 : épreuves en septembre.",
    seoTitle: "Préparation Concours Animateur Territorial Guadeloupe 2027 | Evolutia",
    seoDesc: "Préparez le concours d'animateur territorial en Guadeloupe : épreuves sur dossier animation, entretien jury. Inscriptions mars-avril 2027. CPF possible.",
    accroche: "L'animateur territorial (catégorie B) coordonne les activités d'animation sociale, socio-éducative ou culturelle des collectivités : centres de loisirs, politique jeunesse, animation périscolaire. Les concours d'animateur et d'animateur principal de 2e classe sont organisés aux mêmes dates en 2027.",
    epreuves: [
      { type: "Écrit", label: "Animateur — Questions à partir d'un dossier (3h, coef. 1)", desc: "3 à 5 questions à partir d'un dossier portant sur l'animation sociale, socio-éducative ou culturelle dans les collectivités (voie externe). En interne et 3e voie : rédaction d'une note à partir d'un dossier (3h)." },
      { type: "Écrit", label: "Animateur principal 2e cl. — Rapport avec propositions (3h, coef. 1)", desc: "Rédaction d'un rapport à partir d'un dossier sur l'animation, assorti de propositions opérationnelles. En interne et 3e voie s'y ajoutent des questions sur l'animation (3h)." },
      { type: "Oral", label: "Entretien avec le jury (20 min dont 5 min d'exposé, coef. 1)", desc: "Exposé sur la formation et le projet professionnel (externe) ou sur les acquis de l'expérience (interne, 3e voie), puis échange sur la motivation, l'aptitude aux missions et, pour le grade principal, l'aptitude à l'encadrement." },
    ],
    programme: [
      "Politiques d'animation des collectivités : jeunesse, périscolaire, vie sociale et culturelle",
      "Méthodologie des questions sur dossier, de la note et du rapport avec propositions",
      "Cadre réglementaire : accueils collectifs de mineurs, sécurité, responsabilité",
      "Entraînements écrits corrigés individuellement sur sujets officiels",
      "Simulations d'entretien jury adaptées au grade visé",
      "Focus Guadeloupe : dispositifs locaux, acteurs, enjeux du territoire",
    ],
    conditions: [
      { voie: "Externe", condition: "Diplôme professionnel de niveau 4 du domaine de l'animation (animateur) ou de niveau 5 (animateur principal de 2e classe)" },
      { voie: "Interne", condition: "Fonctionnaires et agents publics comptant au moins 4 ans de services publics ; voie interne spéciale pour les ATSEM justifiant de 4 ans de services (animateur)" },
      { voie: "3e voie", condition: "4 ans au moins d'activités professionnelles, de mandats d'élu local ou de responsabilités associatives" },
    ],
    duree: "80 à 120 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel",
    color: "#4BADD4",
    accent: "#F5A623",
    datesCles: [
      { label: "Inscriptions (session 2027)", date: "2 mars → 7 avril 2027", statut: "bientot" },
      { label: "Épreuves écrites", date: "23 septembre 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Début 2027", statut: "ouvert" },
    ],
    programmeDetaille: {
      objectifs: [
        "Identifier les attendus de l'épreuve écrite propre à son grade et à sa voie : questions sur dossier, note, ou rapport assorti de propositions.",
        "Connaître les politiques d'animation des collectivités — jeunesse, périscolaire, vie sociale et culturelle — et les acteurs qui les mettent en œuvre.",
        "Maîtriser le cadre réglementaire des accueils collectifs de mineurs, les règles de sécurité et les responsabilités engagées.",
        "Analyser un dossier portant sur l'animation sociale, socio-éducative ou culturelle et en restituer l'essentiel en trois heures.",
        "Pour le grade principal : formuler des propositions opérationnelles adaptées aux moyens d'une collectivité.",
        "Construire un exposé de cinq minutes sur son projet professionnel ou les acquis de son expérience, et soutenir l'échange avec le jury.",
      ],
      prerequis: [
        "Voie externe : diplôme professionnel de niveau 4 du domaine de l'animation pour animateur, de niveau 5 pour animateur principal de 2e classe",
        "Voie interne : quatre ans de services publics — une voie interne spéciale est ouverte aux ATSEM justifiant de quatre ans de services pour le grade d'animateur",
        "3e voie : quatre ans au moins d'activités professionnelles, de mandats d'élu local ou de responsabilités associatives",
        "Une expérience de terrain en animation facilite l'ancrage des contenus, sans être exigée en voie externe",
      ],
      contenuIntro: "La préparation représente 80 à 120 heures et couvre dans une même session les concours d'animateur et d'animateur principal de 2e classe, organisés aux mêmes dates en 2027. Les contenus de fond sont communs ; les travaux écrits sont différenciés selon le grade et la voie, dont les épreuves diffèrent sensiblement.",
      contenu: [
        {
          titre: "Épreuve écrite — admissibilité",
          intro: "Trois formats d'épreuve coexistent selon le grade et la voie : questions sur dossier, note, ou rapport avec propositions. Les séances communes portent sur le fond, les entraînements sont différenciés.",
          modules: [
            { titre: "Politiques d'animation des collectivités", desc: "Politique jeunesse, animation périscolaire et extrascolaire, vie sociale et culturelle, animation de quartier : compétences des communes et des intercommunalités, financements et partenaires." },
            { titre: "Cadre réglementaire des accueils collectifs de mineurs", desc: "Déclaration des accueils, taux et qualifications d'encadrement, règles d'hygiène et de sécurité, responsabilité de l'organisateur et de l'animateur." },
            { titre: "Méthodologie des questions sur dossier et de la note", desc: "Pour le grade d'animateur : réponses à trois à cinq questions en voie externe, note sur dossier en interne et 3e voie. Analyse du dossier, hiérarchisation des informations, rédaction dans le temps imparti." },
            { titre: "Méthodologie du rapport avec propositions — grade principal", desc: "Rapport sur dossier assorti de propositions opérationnelles, auquel s'ajoutent des questions sur l'animation en interne et en 3e voie. Travail sur la faisabilité des propositions au regard des moyens d'une collectivité." },
            { titre: "Entraînements corrigés", desc: "Devoirs sur sujets officiels, corrigés individuellement, puis épreuves blanches en temps réel dans le format correspondant à la voie du candidat." },
          ],
        },
        {
          titre: "Entretien avec le jury (20 min dont 5 min d'exposé, coef. 1)",
          modules: [
            { titre: "Construction de l'exposé", desc: "Voie externe : formation et projet professionnel. Voies interne et 3e voie : acquis de l'expérience. Pour le grade principal, mise en évidence de l'aptitude à encadrer une équipe d'animation." },
            { titre: "Simulations d'entretien", desc: "Entretiens blancs devant un jury professionnel, adaptés au grade visé, avec débriefing individuel." },
          ],
        },
        {
          titre: "Ancrage guadeloupéen",
          modules: [
            { titre: "Dispositifs, acteurs et enjeux du territoire", desc: "Dispositifs d'animation déployés en Guadeloupe, collectivités et associations qui les portent, enjeux propres au territoire — jeunesse, lien social, accès aux activités. De quoi nourrir les écrits et répondre concrètement au jury." },
          ],
        },
      ],
    },
    faq: [
      { q: "Quel diplôme faut-il pour le concours d'animateur territorial ?", a: "En voie externe, un diplôme professionnel de l'animation de niveau 4 (BPJEPS notamment) pour le concours d'animateur, ou de niveau 5 (DEJEPS…) pour animateur principal de 2e classe. La voie interne est ouverte sans condition de diplôme aux agents publics avec 4 ans de services, dont une voie spéciale pour les ATSEM." },
      { q: "Le BAFA suffit-il pour se présenter ?", a: "Non, le BAFA n'est pas un diplôme professionnel : il ne permet pas l'accès au concours externe. Il faut un BPJEPS ou équivalent (niveau 4). En revanche, une expérience d'animation avec BAFA peut ouvrir la 3e voie si vous justifiez de 4 ans d'activité." },
      { q: "Quels débouchés en Guadeloupe ?", a: "Les communes et intercommunalités recrutent des animateurs pour les accueils périscolaires, les centres de loisirs, les projets éducatifs de territoire et l'animation sociale. Le grade d'animateur principal ouvre vers la coordination d'équipes et la direction de structures." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=367",
  },

  "adjoint-animation-principal-guadeloupe": {
    titre: "Adjoint d'Animation Principal de 2e Classe",
    sousTitre: "Concours externe, interne et 3e voie",
    categorie: "Catégorie C",
    filiere: "Filière animation",
    type: "Concours",
    descCourte: "QCM et entretien (externe), note et cas pratique selon la voie. Épreuves le 25 mars 2027.",
    seoTitle: "Concours Adjoint d'Animation Principal Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez le concours d'adjoint d'animation principal 2e classe en Guadeloupe : QCM, note, entretien. Inscriptions sept.-nov. 2026, épreuves mars 2027.",
    accroche: "Le concours d'adjoint d'animation principal de 2e classe (catégorie C) est la première marche des métiers de l'animation territoriale : activités périscolaires, centres de loisirs, animation de quartier. Les épreuves varient fortement selon la voie d'accès — notre préparation est ciblée sur la vôtre.",
    epreuves: [
      { type: "Écrit", label: "Externe — QCM (45 min, coef. 1)", desc: "Questionnaire à choix multiples sur des notions élémentaires d'organisation des collectivités locales et de consignes d'hygiène et de sécurité." },
      { type: "Écrit", label: "Interne — QCM (45 min, coef. 3) + note (2h, coef. 2)", desc: "QCM sur l'accueil, la compréhension du public, la protection et les droits de l'enfant, puis rédaction d'une note à partir d'un texte ou article de presse relatif à l'animation. En 3e voie : questions sur les collectivités (45 min) et cas pratique (1h30)." },
      { type: "Oral", label: "Entretien avec le jury (15 à 20 min, coef. 2 à 4)", desc: "En externe : entretien de motivation de 15 minutes. En interne : entretien de 20 minutes après 20 minutes de préparation à partir d'une question, d'un texte ou d'un document. En 3e voie : exposé sur l'expérience puis échange." },
    ],
    programme: [
      "Organisation et fonctionnement des collectivités locales — l'essentiel pour le QCM",
      "Hygiène, sécurité, protection et droits de l'enfant",
      "Méthodologie de la note et du cas pratique selon la voie d'accès",
      "Entraînements QCM chronométrés en conditions réelles",
      "Simulations d'entretien de motivation avec débriefing",
      "Connaissance du secteur de l'animation en Guadeloupe",
    ],
    conditions: [
      { voie: "Externe", condition: "Diplôme professionnel de niveau 3 (CAP/BEP) du domaine de l'animation ou qualification équivalente" },
      { voie: "Interne", condition: "Fonctionnaires et agents publics — conditions de services précisées par l'organisateur" },
      { voie: "3e voie", condition: "4 ans au moins d'activités professionnelles, de mandats d'élu local ou de responsabilités associatives" },
    ],
    duree: "50 à 70 heures",
    format: "Présentiel (Grand-Camp, Les Abymes)",
    color: "#F5A623",
    accent: "#4BADD4",
    datesCles: [
      { label: "Inscriptions", date: "29 sept. → 4 nov. 2026", statut: "bientot" },
      { label: "Épreuves", date: "25 mars 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Octobre 2026", statut: "ouvert" },
    ],
    programmeDetaille: {
      objectifs: [
        "Maîtriser les notions élémentaires d'organisation et de fonctionnement des collectivités locales évaluées au questionnaire à choix multiples.",
        "Connaître les consignes d'hygiène et de sécurité, la protection et les droits de l'enfant applicables aux activités d'animation.",
        "Répondre à un questionnaire à choix multiples en 45 minutes, en gérant le temps et les formulations trompeuses.",
        "Pour la voie interne : rédiger une note à partir d'un texte ou d'un article de presse relatif à l'animation ; pour la 3e voie : traiter un cas pratique en une heure trente.",
        "Présenter sa motivation et son parcours devant un jury, dans le format propre à sa voie d'accès.",
        "Pour la voie interne : exploiter les vingt minutes de préparation précédant l'entretien à partir d'une question, d'un texte ou d'un document.",
      ],
      prerequis: [
        "Voie externe : diplôme professionnel de niveau 3 (CAP/BEP) du domaine de l'animation ou qualification reconnue équivalente",
        "Voie interne : être fonctionnaire ou agent public, conditions de services précisées par l'organisateur du concours",
        "3e voie : quatre ans au moins d'activités professionnelles, de mandats d'élu local ou de responsabilités associatives",
      ],
      contenuIntro: "La préparation représente 50 à 70 heures en présentiel à Grand-Camp. Les épreuves varient fortement d'une voie à l'autre — un seul questionnaire à choix multiples en externe, un questionnaire doublé d'une note en interne, des questions et un cas pratique en 3e voie : chaque candidat suit le parcours correspondant à la voie qu'il présente, sur un socle de connaissances commun.",
      contenu: [
        {
          titre: "Socle de connaissances — commun aux trois voies",
          modules: [
            { titre: "Organisation et fonctionnement des collectivités locales", desc: "Commune, intercommunalité, département et région : compétences, élus, services. Le niveau attendu est celui de notions élémentaires, telles qu'elles sont interrogées au questionnaire à choix multiples." },
            { titre: "Hygiène, sécurité, protection et droits de l'enfant", desc: "Consignes d'hygiène applicables aux activités et aux locaux, règles de sécurité, repères sur la protection de l'enfance et les droits de l'enfant, accueil et compréhension du public accueilli." },
          ],
        },
        {
          titre: "Épreuves écrites — selon la voie d'accès",
          modules: [
            { titre: "Questionnaire à choix multiples (45 min)", desc: "Coefficient 1 en voie externe, coefficient 3 en voie interne. Entraînements chronométrés en conditions réelles : lecture des énoncés, repérage des formulations trompeuses, stratégie de réponse et gestion du temps." },
            { titre: "Note à partir d'un texte — voie interne (2h, coef. 2)", desc: "Rédaction d'une note à partir d'un texte ou d'un article de presse relatif à l'animation : compréhension du propos, structuration de la restitution, expression écrite." },
            { titre: "Questions et cas pratique — 3e voie", desc: "Questions sur les collectivités en 45 minutes, puis cas pratique en une heure trente : analyse d'une situation d'animation et formulation d'une réponse adaptée." },
          ],
        },
        {
          titre: "Entretien avec le jury (15 à 20 min, coef. 2 à 4)",
          modules: [
            { titre: "Préparation à l'entretien selon la voie", desc: "Externe : entretien de motivation de quinze minutes. Interne : vingt minutes de préparation à partir d'une question, d'un texte ou d'un document, puis vingt minutes d'échange — l'exploitation de ce temps de préparation est travaillée spécifiquement. 3e voie : exposé sur l'expérience puis échange." },
            { titre: "Simulations d'entretien", desc: "Entretiens blancs devant un jury professionnel, dans le format de la voie présentée, avec débriefing individuel." },
          ],
        },
        {
          titre: "Ancrage guadeloupéen",
          modules: [
            { titre: "Le secteur de l'animation en Guadeloupe", desc: "Structures et collectivités qui recrutent, activités périscolaires et centres de loisirs du territoire, animation de quartier : repères utiles à l'entretien comme à la recherche de poste après la réussite." },
          ],
        },
      ],
    },
    faq: [
      { q: "Le CAP AEPE ou le CPJEPS permettent-ils de se présenter ?", a: "Oui, le concours externe est ouvert aux titulaires d'un diplôme professionnel de niveau 3 délivré dans les domaines correspondant aux missions du cadre d'emplois — le CPJEPS ou le CAP AEPE en font partie. Une qualification reconnue équivalente peut aussi être acceptée." },
      { q: "Comment se préparer au QCM ?", a: "Le QCM de 45 minutes porte sur des notions précises : organisation des collectivités, hygiène et sécurité, et en interne les droits de l'enfant. La clé est l'entraînement répété sur des QCM types chronométrés — c'est le cœur de notre préparation écrite." },
      { q: "Quelle voie choisir si je travaille déjà dans l'animation ?", a: "Si vous êtes déjà agent public, la voie interne valorise vos connaissances professionnelles. Si vous travaillez dans l'animation associative ou privée depuis 4 ans ou plus, la 3e voie est adaptée. Nous validons votre éligibilité lors de l'entretien d'orientation gratuit." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=369",
  },

  /* ─────────────────────── FILIÈRE MÉDICO-SOCIALE ─────────────────────── */

  "sage-femme-guadeloupe": {
    titre: "Sage-Femme Territoriale",
    sousTitre: "Concours sur titres avec épreuve",
    categorie: "Catégorie A",
    filiere: "Filière médico-sociale",
    type: "Concours",
    descCourte: "Concours sur titres : entretien de 25 minutes avec le jury. Épreuve le 22 mars 2027.",
    seoTitle: "Concours Sage-Femme Territoriale Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez le concours de sage-femme territoriale en Guadeloupe : entretien jury de 25 min. Inscriptions sept.-nov. 2026, épreuve mars 2027. PMI, CDG 971.",
    accroche: "Le concours de sage-femme territoriale ouvre les portes des services de PMI (protection maternelle et infantile) du Département et des centres de santé des collectivités. C'est un concours sur titres : tout se joue sur un entretien de 25 minutes, qui se prépare sérieusement.",
    epreuves: [
      { type: "Oral", label: "Entretien avec le jury (25 min dont 10 min d'exposé, coef. 1)", desc: "Exposé du candidat sur sa formation et son projet professionnel, puis échange permettant d'apprécier la capacité à s'intégrer dans l'environnement territorial, la motivation et l'aptitude à exercer les missions du cadre d'emplois. Une fiche individuelle de renseignement est transmise à l'inscription (non notée)." },
    ],
    programme: [
      "Environnement territorial : Département, PMI, politiques de santé publique locales",
      "Construction de l'exposé de 10 minutes : parcours, projet, motivation",
      "Enjeux de santé maternelle et infantile en Guadeloupe",
      "Questions types du jury et posture professionnelle",
      "Simulations d'entretien filmées avec débriefing individuel",
      "Préparation de la fiche individuelle de renseignement",
    ],
    conditions: [
      { voie: "Sur titres", condition: "Diplôme d'État de sage-femme (ou autorisation d'exercice de la profession en France)" },
    ],
    duree: "20 à 30 heures",
    format: "Présentiel (Grand-Camp) + distanciel",
    color: "#1B3A6B",
    accent: "#F5A623",
    datesCles: [
      { label: "Inscriptions", date: "29 sept. → 4 nov. 2026", statut: "bientot" },
      { label: "Épreuve d'entretien", date: "22 mars 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Janvier 2027", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Sages-femmes titulaires du diplôme d'État ou autorisées à exercer en France, candidates et candidats au concours sur titres de sage-femme territoriale.",
      simulationsFilmees: true,
      objectifs: [
        "Construire un exposé de dix minutes sur sa formation et son projet professionnel, et le tenir devant un jury.",
        "Situer l'exercice de la sage-femme dans l'environnement territorial : service de protection maternelle et infantile du Département, centres de santé des collectivités, articulation avec l'hôpital et la médecine de ville.",
        "Connaître les politiques de santé publique conduites localement et la place de la prévention dans les missions du Département.",
        "Mobiliser les enjeux de santé maternelle et infantile propres à la Guadeloupe dans ses réponses au jury.",
        "Répondre aux questions portant sur la capacité à s'intégrer dans un service territorial, la motivation et l'aptitude aux missions du cadre d'emplois.",
        "Renseigner la fiche individuelle de renseignement transmise à l'inscription, qui n'est pas notée mais sert de support au jury.",
      ],
      prerequis: [
        "Diplôme d'État de sage-femme, ou autorisation d'exercice de la profession en France",
        "Aucune épreuve écrite : la préparation suppose seulement d'accepter de travailler sa prise de parole",
      ],
      contenuIntro: "La préparation représente 20 à 30 heures. Le concours est un concours sur titres : le diplôme ouvre l'accès, et tout se joue sur un entretien unique de vingt-cinq minutes dont dix minutes d'exposé. La préparation porte donc entièrement sur cet oral et sur la connaissance de l'environnement territorial, que les sages-femmes issues du secteur hospitalier ou libéral connaissent rarement.",
      contenu: [
        {
          titre: "L'environnement territorial de la sage-femme",
          modules: [
            { titre: "Le Département et la protection maternelle et infantile", desc: "Compétences du Département en matière de PMI, organisation du service, missions de consultation, de prévention et de visite à domicile, place de la sage-femme dans l'équipe pluriprofessionnelle." },
            { titre: "Politiques de santé publique locales", desc: "Prévention et promotion de la santé, suivi des grossesses à risque, planification familiale, articulation entre collectivités, agence régionale de santé et établissements de santé." },
            { titre: "Santé maternelle et infantile en Guadeloupe", desc: "Indicateurs et enjeux du territoire, difficultés d'accès aux soins sur certaines communes, prévention auprès des publics éloignés : des éléments concrets que le jury attend d'une candidate exerçant sur l'archipel." },
          ],
        },
        {
          titre: "L'entretien avec le jury (25 min dont 10 min d'exposé, coef. 1)",
          modules: [
            { titre: "Construction de l'exposé de dix minutes", desc: "Formation, parcours, projet professionnel et motivation pour la fonction publique territoriale : sélection des éléments, fil conducteur et conduite de l'exposé sur une durée longue, qui ne s'improvise pas." },
            { titre: "Préparation de la fiche individuelle de renseignement", desc: "Rédaction de la fiche transmise à l'inscription : non notée, elle oriente les questions du jury, et chaque élément qui y figure doit pouvoir être défendu." },
            { titre: "Questions types et posture professionnelle", desc: "Motivation du passage au territorial, positionnement dans une équipe de PMI, secret professionnel, relation aux familles : banque de questions et entraînement aux réponses." },
            { titre: "Simulations d'entretien", desc: "Oraux blancs filmés dans la durée officielle, devant un jury professionnel, avec débriefing individuel sur le fond et la forme." },
          ],
        },
      ],
    },
    faq: [
      { q: "Pourquoi préparer un simple entretien de 25 minutes ?", a: "Parce que tout le concours repose dessus. Le jury évalue en 25 minutes votre connaissance de l'environnement territorial (PMI, Département, politiques de santé), votre projet professionnel et votre posture. Les candidates non préparées échouent souvent sur les questions institutionnelles, pas sur le cœur de métier." },
      { q: "Où exerce une sage-femme territoriale en Guadeloupe ?", a: "Principalement en PMI au sein du Conseil départemental : consultations prénatales et postnatales, planification familiale, visites à domicile, actions de prévention. Des postes existent aussi dans les centres de santé municipaux." },
      { q: "Quelle est la différence avec l'exercice hospitalier ?", a: "La sage-femme territoriale relève de la fonction publique territoriale (et non hospitalière) : missions de prévention et de suivi ambulatoire plutôt que d'accouchement, horaires réguliers, ancrage dans les politiques sociales du territoire." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=352",
  },

  "puericultrice-guadeloupe": {
    titre: "Puéricultrice Territoriale",
    sousTitre: "Concours sur titres avec épreuve — classe normale",
    categorie: "Catégorie A",
    filiere: "Filière médico-sociale",
    type: "Concours",
    descCourte: "Concours sur titres : entretien de 25 minutes avec le jury. Épreuve le 15 février 2027.",
    seoTitle: "Concours Puéricultrice Territoriale Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez le concours de puéricultrice territoriale en Guadeloupe : entretien jury 25 min. Inscriptions sept.-nov. 2026, épreuve février 2027. PMI, crèches.",
    accroche: "La puéricultrice territoriale exerce en PMI, en crèche municipale ou dans les services petite enfance des collectivités. Le concours sur titres repose sur un entretien unique de 25 minutes : votre diplôme vous rend éligible, votre préparation fait la différence.",
    epreuves: [
      { type: "Oral", label: "Entretien avec le jury (25 min dont 5 min d'exposé, coef. 1)", desc: "Exposé sur la formation et le projet professionnel, puis échange permettant d'apprécier la capacité à s'intégrer dans l'environnement professionnel territorial, la motivation et l'aptitude à exercer les missions du cadre d'emplois." },
    ],
    programme: [
      "Environnement territorial : PMI, modes d'accueil, politiques petite enfance",
      "Construction de l'exposé de 5 minutes : parcours, projet, motivation",
      "Enjeux de la petite enfance en Guadeloupe : offre d'accueil, prévention, parentalité",
      "Questions types du jury : direction de crèche, agrément des assistantes maternelles…",
      "Simulations d'entretien filmées avec débriefing individuel",
      "Posture de cadre de catégorie A en collectivité",
    ],
    conditions: [
      { voie: "Sur titres", condition: "Diplôme d'État de puéricultrice (ou autorisation d'exercice pour les ressortissants de l'UE/EEE)" },
    ],
    duree: "20 à 30 heures",
    format: "Présentiel (Grand-Camp) + distanciel",
    color: "#4BADD4",
    accent: "#1B3A6B",
    datesCles: [
      { label: "Inscriptions", date: "29 sept. → 4 nov. 2026", statut: "bientot" },
      { label: "Épreuve d'entretien", date: "15 février 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Décembre 2026", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Puéricultrices titulaires du diplôme d'État, ou autorisées à exercer pour les ressortissants de l'Union européenne et de l'Espace économique européen, candidates et candidats au concours sur titres de puéricultrice territoriale.",
      simulationsFilmees: true,
      objectifs: [
        "Construire un exposé de cinq minutes sur sa formation et son projet professionnel, et le tenir devant un jury.",
        "Situer l'exercice de la puéricultrice dans les collectivités : service de protection maternelle et infantile, crèche municipale, services petite enfance.",
        "Connaître les politiques petite enfance des collectivités et l'organisation des modes d'accueil sur un territoire.",
        "Répondre aux questions relevant des responsabilités d'une puéricultrice territoriale : direction d'un établissement d'accueil du jeune enfant, agrément et suivi des assistantes maternelles, actions de prévention.",
        "Adopter la posture attendue d'un cadre de catégorie A en collectivité.",
        "Mobiliser les enjeux de la petite enfance en Guadeloupe — offre d'accueil, prévention, soutien à la parentalité — dans ses réponses.",
      ],
      prerequis: [
        "Diplôme d'État de puéricultrice, ou autorisation d'exercice pour les ressortissants de l'Union européenne et de l'Espace économique européen",
        "Aucune épreuve écrite : la préparation suppose seulement d'accepter de travailler sa prise de parole",
      ],
      contenuIntro: "La préparation représente 20 à 30 heures. Le concours est un concours sur titres : le diplôme d'État ouvre l'accès, et l'admission se joue sur un entretien unique de vingt-cinq minutes dont cinq minutes d'exposé. L'exposé étant court, l'essentiel du temps est consacré aux questions du jury : c'est là que se mesure la connaissance de l'environnement territorial.",
      contenu: [
        {
          titre: "L'environnement territorial de la puéricultrice",
          modules: [
            { titre: "Protection maternelle et infantile et modes d'accueil", desc: "Compétences du Département en PMI, consultations et bilans de santé en école maternelle, agrément et accompagnement des assistantes maternelles, contrôle des établissements d'accueil du jeune enfant." },
            { titre: "Politiques petite enfance des collectivités", desc: "Crèches municipales, multi-accueils, relais petite enfance, financement et conventionnement, projet d'établissement et projet pédagogique." },
            { titre: "Enjeux de la petite enfance en Guadeloupe", desc: "Offre d'accueil sur le territoire, prévention précoce, soutien à la parentalité et accompagnement des familles en difficulté." },
          ],
        },
        {
          titre: "L'entretien avec le jury (25 min dont 5 min d'exposé, coef. 1)",
          modules: [
            { titre: "Construction de l'exposé de cinq minutes", desc: "Formation, parcours et projet professionnel resserrés sur l'essentiel : en cinq minutes, chaque phrase compte." },
            { titre: "Questions types du jury", desc: "Direction d'une crèche, encadrement d'une équipe d'auxiliaires, agrément des assistantes maternelles, situation d'enfant en danger, relation avec les familles : banque de questions et entraînement aux réponses." },
            { titre: "Posture de cadre de catégorie A", desc: "Positionnement vis-à-vis de l'équipe, de la direction et des élus, capacité à décider et à rendre compte : ce que le jury cherche derrière les compétences soignantes." },
            { titre: "Simulations d'entretien", desc: "Oraux blancs filmés dans la durée officielle, devant un jury professionnel, avec débriefing individuel." },
          ],
        },
      ],
    },
    faq: [
      { q: "Quels postes pour une puéricultrice territoriale en Guadeloupe ?", a: "Les débouchés principaux : PMI du Conseil départemental (consultations infantiles, agrément et suivi des assistantes maternelles), direction ou direction adjointe de crèche municipale, coordination petite enfance en intercommunalité." },
      { q: "Que demande le jury lors de l'entretien ?", a: "Au-delà de votre parcours, le jury teste votre connaissance du cadre territorial : missions de la PMI, rôle du Département, réglementation des établissements d'accueil du jeune enfant, management d'équipe. C'est là que la préparation est déterminante." },
      { q: "Je suis infirmière puéricultrice à l'hôpital, puis-je candidater ?", a: "Oui, le diplôme d'État de puéricultrice suffit pour vous inscrire au concours sur titres. Le passage du milieu hospitalier vers la territoriale est fréquent — le jury attendra que vous démontriez votre compréhension des missions territoriales (prévention, accueil, protection de l'enfance)." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=354",
  },

  "assistant-socio-educatif-guadeloupe": {
    titre: "Assistant Socio-Éducatif — Classe Exceptionnelle",
    sousTitre: "Examen professionnel d'avancement de grade",
    categorie: "Catégorie A",
    filiere: "Filière médico-sociale",
    type: "Examen pro.",
    descCourte: "Avancement de grade : dossier de parcours professionnel puis entretien de 35 minutes. Épreuves sept. 2027.",
    seoTitle: "Examen Assistant Socio-Éducatif Classe Except. Guadeloupe 2027 | Evolutia",
    seoDesc: "Préparez l'examen d'assistant socio-éducatif de classe exceptionnelle en Guadeloupe : dossier + entretien 35 min. Inscriptions mars-avril 2027. CPF.",
    accroche: "L'examen professionnel d'accès à la classe exceptionnelle permet aux assistants socio-éducatifs (assistants de service social, éducateurs spécialisés, CESF) d'accéder au grade sommital de leur cadre d'emplois. La sélection repose sur un dossier écrit et un entretien approfondi de 35 minutes.",
    epreuves: [
      { type: "Dossier", label: "Examen du dossier du candidat (admissibilité, coef. 1)", desc: "Dossier établi selon le modèle réglementaire : formation et niveau de qualification, parcours professionnel, acquis de l'expérience et motivations, description d'une réalisation professionnelle. Pas d'épreuve en présentiel à ce stade." },
      { type: "Oral", label: "Entretien avec le jury (35 min : 10 min d'exposé + 25 min d'échange, coef. 2)", desc: "Exposé sur les acquis de l'expérience puis échange sur l'expertise technique, l'aptitude à concevoir et mettre en œuvre des politiques sociales, à diriger un service ou coordonner des équipes, et la connaissance de l'action sociale des collectivités." },
    ],
    programme: [
      "Construction du dossier réglementaire : valorisation du parcours et de la réalisation professionnelle",
      "Relectures et corrections individuelles du dossier avant dépôt",
      "Politiques sociales et médico-sociales des collectivités : les fondamentaux à jour",
      "Construction de l'exposé de 10 minutes sur les acquis de l'expérience",
      "Simulations d'entretien de 35 minutes avec jury fictif et débriefing",
      "Posture de cadre expert : coordination, conception de dispositifs, partenariats",
    ],
    conditions: [
      { voie: "Avancement de grade", condition: "Assistants socio-éducatifs justifiant d'au moins 3 ans de services effectifs en catégorie A et d'1 an d'ancienneté dans le 3e échelon du grade (au 31 décembre de l'année du tableau d'avancement)" },
    ],
    duree: "30 à 50 heures",
    format: "Présentiel (Grand-Camp) + accompagnement individuel en distanciel",
    color: "#1B3A6B",
    accent: "#4BADD4",
    datesCles: [
      { label: "Inscriptions", date: "16 mars → 21 avril 2027", statut: "bientot" },
      { label: "Épreuve d'entretien", date: "16 septembre 2027", statut: "bientot" },
      { label: "Accompagnement dossier", date: "Dès l'ouverture des inscriptions", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Assistants socio-éducatifs territoriaux — assistants de service social, éducateurs spécialisés, conseillers en économie sociale et familiale — remplissant les conditions d'inscription à l'examen professionnel d'accès à la classe exceptionnelle.",
      objectifs: [
        "Construire le dossier réglementaire d'admissibilité : formation et niveau de qualification, parcours professionnel, acquis de l'expérience et motivations, description d'une réalisation professionnelle.",
        "Choisir et décrire une réalisation professionnelle qui démontre un niveau d'expertise et de responsabilité correspondant au grade sommital.",
        "Construire un exposé de dix minutes sur les acquis de son expérience.",
        "Démontrer son expertise technique en travail social et sa connaissance de l'action sociale des collectivités.",
        "Démontrer son aptitude à concevoir et mettre en œuvre des politiques sociales, à diriger un service ou à coordonner des équipes.",
        "Soutenir vingt-cinq minutes d'échange avec un jury après l'exposé, sans s'épuiser ni se répéter.",
      ],
      prerequis: [
        "Être assistant socio-éducatif territorial, justifier d'au moins trois ans de services effectifs en catégorie A et d'un an d'ancienneté dans le 3e échelon du grade, appréciés au 31 décembre de l'année du tableau d'avancement",
        "Disposer d'une réalisation professionnelle significative à décrire dans le dossier",
        "Pouvoir consacrer du temps à la rédaction du dossier, qui conditionne l'admissibilité",
      ],
      contenuIntro: "La préparation représente 30 à 50 heures. L'examen se joue en deux temps bien distincts : un dossier écrit, seul élément de l'admissibilité, puis un entretien de trente-cinq minutes au coefficient 2. Le dossier n'est pas une formalité administrative — c'est lui qui fait passer ou non à l'oral, et il oriente ensuite toutes les questions du jury.",
      contenu: [
        {
          titre: "Le dossier d'admissibilité (coef. 1)",
          modules: [
            { titre: "Construction du dossier réglementaire", desc: "Renseignement de chaque rubrique du modèle officiel : formation et qualification, parcours professionnel, acquis de l'expérience et motivations. Travail sur la formulation, qui doit donner à lire un niveau d'expertise, pas une liste de postes." },
            { titre: "Description de la réalisation professionnelle", desc: "Choix de l'action à décrire — ouverture ou réorganisation d'un dispositif, projet social innovant, démarche partenariale — puis rédaction mettant en évidence le rôle tenu, les arbitrages opérés et les résultats obtenus." },
            { titre: "Relectures et corrections individuelles", desc: "Plusieurs relectures du dossier avant dépôt, avec corrections personnalisées : c'est le livrable qui décide de l'admissibilité." },
          ],
        },
        {
          titre: "L'entretien avec le jury (35 min, coef. 2)",
          intro: "Dix minutes d'exposé puis vingt-cinq minutes d'échange : un oral long, qui suppose de la matière et de l'endurance.",
          modules: [
            { titre: "Construction de l'exposé de dix minutes", desc: "Mise en récit des acquis de l'expérience, articulée au dossier déposé, et conduite de l'exposé sans notes sur une durée longue." },
            { titre: "Politiques sociales et médico-sociales des collectivités", desc: "Compétences sociales du Département et des communes, protection de l'enfance, insertion et accompagnement du RSA, autonomie et grand âge, logement et hébergement, coordination avec les partenaires associatifs — mis à jour des évolutions récentes." },
            { titre: "Posture de cadre expert", desc: "Conception de dispositifs, coordination d'équipes pluriprofessionnelles, animation de partenariats, positionnement entre le terrain et la direction : les aptitudes que le jury vérifie pour le grade sommital." },
            { titre: "Simulations d'entretien", desc: "Oraux blancs de trente-cinq minutes devant un jury fictif, avec débriefing individuel." },
          ],
        },
      ],
      moyensEnPlus: [
        "Accompagnement individuel en distanciel sur la rédaction du dossier, entre les séances présentielles.",
      ],
      suiviEnPlus: [
        "Des relectures successives du dossier jusqu'à sa version déposée",
      ],
    },
    faq: [
      { q: "Le dossier est-il vraiment déterminant ?", a: "Oui : c'est l'épreuve d'admissibilité. Le jury sélectionne sur dossier avant même de vous rencontrer. La description de votre réalisation professionnelle doit démontrer un niveau d'expertise et de responsabilité correspondant à la classe exceptionnelle — nous le construisons ensemble, avec plusieurs relectures." },
      { q: "Qui est concerné par cet examen ?", a: "Les assistants socio-éducatifs territoriaux (assistants de service social, éducateurs spécialisés, conseillers en économie sociale et familiale) avec au moins 3 ans de services en catégorie A et 1 an dans le 3e échelon de leur grade." },
      { q: "Comment se déroule l'entretien de 35 minutes ?", a: "Il débute par votre exposé de 10 minutes maximum sur les acquis de votre expérience, suivi de 25 minutes d'échange : expertise technique, capacité à concevoir des dispositifs, à encadrer ou coordonner, connaissance de l'action sociale territoriale. C'est un oral dense qui se prépare par des simulations répétées." },
    ],
    sourceOfficielle: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000041751784",
  },

  "educateur-jeunes-enfants-guadeloupe": {
    titre: "Éducateur de Jeunes Enfants — Classe Exceptionnelle",
    sousTitre: "Examen professionnel d'avancement de grade",
    categorie: "Catégorie A",
    filiere: "Filière médico-sociale",
    type: "Examen pro.",
    descCourte: "Avancement de grade : dossier de parcours professionnel puis entretien de 35 minutes. Épreuves fév. 2027.",
    seoTitle: "Examen Éducateur Jeunes Enfants Classe Except. Guadeloupe 2027 | Evolutia",
    seoDesc: "Préparez l'examen d'éducateur de jeunes enfants de classe exceptionnelle en Guadeloupe : dossier + entretien 35 min. Épreuves février 2027. CPF possible.",
    accroche: "L'examen professionnel d'accès à la classe exceptionnelle permet aux éducateurs de jeunes enfants territoriaux d'accéder au grade sommital, tourné vers la direction de structures d'accueil et la coordination d'équipes. Dossier écrit puis entretien de 35 minutes : chaque étape se travaille.",
    epreuves: [
      { type: "Dossier", label: "Examen du dossier du candidat (admissibilité, coef. 1)", desc: "Dossier établi selon le modèle réglementaire : formation et niveau de qualification, parcours professionnel, acquis de l'expérience et motivations, description d'une réalisation professionnelle. Pas d'épreuve en présentiel à ce stade." },
      { type: "Oral", label: "Entretien avec le jury (35 min : 10 min d'exposé + 25 min d'échange, coef. 2)", desc: "Exposé sur les acquis de l'expérience puis échange sur l'expertise technique, l'aptitude à concevoir des politiques liées à l'enfance, à diriger un établissement d'accueil du jeune enfant ou coordonner des équipes, et la connaissance de l'action des collectivités." },
    ],
    programme: [
      "Construction du dossier réglementaire : valorisation du parcours et de la réalisation professionnelle",
      "Relectures et corrections individuelles du dossier avant dépôt",
      "Politiques petite enfance des collectivités : accueil du jeune enfant, parentalité, inclusion",
      "Construction de l'exposé de 10 minutes sur les acquis de l'expérience",
      "Simulations d'entretien de 35 minutes avec jury fictif et débriefing",
      "Posture de direction : gestion d'équipe et pilotage d'une structure d'accueil",
    ],
    conditions: [
      { voie: "Avancement de grade", condition: "Éducateurs de jeunes enfants justifiant d'au moins 3 ans de services effectifs en catégorie A et d'1 an d'ancienneté dans le 3e échelon du grade (au 31 décembre de l'année du tableau d'avancement)" },
    ],
    duree: "30 à 50 heures",
    format: "Présentiel (Grand-Camp) + accompagnement individuel en distanciel",
    color: "#4BADD4",
    accent: "#F5A623",
    datesCles: [
      { label: "Inscriptions", date: "13 oct. → 18 nov. 2026 (à confirmer CDG 971)", statut: "bientot" },
      { label: "Épreuve d'entretien", date: "11 février 2027", statut: "bientot" },
      { label: "Accompagnement dossier", date: "Dès maintenant", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Éducateurs de jeunes enfants territoriaux remplissant les conditions d'inscription à l'examen professionnel d'accès à la classe exceptionnelle.",
      objectifs: [
        "Construire le dossier réglementaire d'admissibilité : formation et niveau de qualification, parcours professionnel, acquis de l'expérience et motivations, description d'une réalisation professionnelle.",
        "Choisir et décrire une réalisation professionnelle démontrant un niveau de responsabilité correspondant au grade sommital — projet pédagogique, ouverture ou réorganisation d'une structure, démarche d'inclusion.",
        "Construire un exposé de dix minutes sur les acquis de son expérience.",
        "Démontrer son expertise dans l'accueil du jeune enfant et sa connaissance de l'action des collectivités en matière de petite enfance.",
        "Démontrer son aptitude à diriger un établissement d'accueil du jeune enfant et à coordonner des équipes.",
        "Soutenir vingt-cinq minutes d'échange avec le jury après l'exposé.",
      ],
      prerequis: [
        "Être éducateur de jeunes enfants territorial, justifier d'au moins trois ans de services effectifs en catégorie A et d'un an d'ancienneté dans le 3e échelon du grade, appréciés au 31 décembre de l'année du tableau d'avancement",
        "Disposer d'une réalisation professionnelle significative à décrire dans le dossier",
        "Pouvoir consacrer du temps à la rédaction du dossier, qui conditionne l'admissibilité",
      ],
      contenuIntro: "La préparation représente 30 à 50 heures. L'examen se joue en deux temps : un dossier écrit, seul élément de l'admissibilité, puis un entretien de trente-cinq minutes au coefficient 2, tourné vers la direction de structures et la coordination d'équipes. Le dossier décide du passage à l'oral et oriente ensuite les questions du jury.",
      contenu: [
        {
          titre: "Le dossier d'admissibilité (coef. 1)",
          modules: [
            { titre: "Construction du dossier réglementaire", desc: "Renseignement de chaque rubrique du modèle officiel : formation et qualification, parcours, acquis de l'expérience et motivations. L'enjeu est de faire apparaître une trajectoire professionnelle, non une succession de postes." },
            { titre: "Description de la réalisation professionnelle", desc: "Choix de l'action à décrire — conception et mise en œuvre d'un projet pédagogique, ouverture ou réorganisation d'un établissement d'accueil, démarche d'inclusion d'enfants en situation de handicap — et rédaction mettant en évidence le rôle tenu et les résultats obtenus." },
            { titre: "Relectures et corrections individuelles", desc: "Plusieurs relectures avant dépôt, avec corrections personnalisées." },
          ],
        },
        {
          titre: "L'entretien avec le jury (35 min, coef. 2)",
          intro: "Dix minutes d'exposé puis vingt-cinq minutes d'échange.",
          modules: [
            { titre: "Construction de l'exposé de dix minutes", desc: "Mise en récit des acquis de l'expérience, articulée au dossier déposé, tenue sans notes." },
            { titre: "Politiques petite enfance des collectivités", desc: "Accueil du jeune enfant et pilotage de l'offre sur un territoire, soutien à la parentalité, inclusion des enfants en situation de handicap, articulation avec la protection maternelle et infantile et les partenaires, financement et conventionnement des structures." },
            { titre: "Posture de direction", desc: "Pilotage d'un établissement d'accueil : projet d'établissement, gestion d'équipe, taux d'encadrement, sécurité, relation aux familles et aux élus. Les aptitudes attendues au grade sommital." },
            { titre: "Simulations d'entretien", desc: "Oraux blancs de trente-cinq minutes devant un jury fictif, avec débriefing individuel." },
          ],
        },
      ],
      moyensEnPlus: [
        "Accompagnement individuel en distanciel sur la rédaction du dossier, entre les séances présentielles.",
      ],
      suiviEnPlus: [
        "Des relectures successives du dossier jusqu'à sa version déposée",
      ],
    },
    faq: [
      { q: "Quelle différence entre cet examen et le concours d'EJE ?", a: "Le concours d'éducateur de jeunes enfants permet d'entrer dans la fonction publique territoriale. L'examen de classe exceptionnelle est un avancement de grade réservé aux EJE territoriaux déjà titulaires, avec 3 ans de services en catégorie A et 1 an dans le 3e échelon." },
      { q: "Que doit contenir la description de la réalisation professionnelle ?", a: "Une action significative que vous avez conçue ou pilotée : ouverture ou réorganisation d'une structure, projet pédagogique innovant, démarche d'inclusion… Le jury y cherche la preuve d'un niveau de responsabilité correspondant à la classe exceptionnelle. Nous vous aidons à choisir et à rédiger cette réalisation." },
      { q: "Vers quels postes mène la classe exceptionnelle ?", a: "Principalement la direction de crèches et multi-accueils, la coordination petite enfance à l'échelle d'une commune ou d'une intercommunalité, et le pilotage de projets éducatifs de territoire." },
    ],
    sourceOfficielle: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000041751766",
  },

  "aide-soignant-guadeloupe": {
    titre: "Aide-Soignant Territorial",
    sousTitre: "Concours sur titres avec épreuve — classe normale",
    categorie: "Catégorie B",
    filiere: "Filière médico-sociale",
    type: "Concours",
    descCourte: "Concours sur titres : entretien de 20 minutes avec le jury. Session 2027 (dates à confirmer CDG 971).",
    seoTitle: "Concours Aide-Soignant Territorial Guadeloupe 2027 | Evolutia",
    seoDesc: "Préparez le concours d'aide-soignant territorial en Guadeloupe : entretien jury de 20 min. Session 2027, diplôme d'État requis. Evolutia, Les Abymes.",
    accroche: "L'aide-soignant territorial exerce dans les EHPAD publics territoriaux, les services de soins à domicile et les structures médico-sociales des collectivités. Le concours sur titres repose sur un entretien unique de 20 minutes avec le jury.",
    epreuves: [
      { type: "Oral", label: "Entretien avec le jury (20 min dont 5 min d'exposé, coef. 1)", desc: "Exposé sur la formation, le parcours et le projet professionnels, puis échange permettant d'apprécier la capacité à s'intégrer dans l'environnement professionnel territorial, la motivation et l'aptitude à exercer les missions du cadre d'emplois." },
    ],
    programme: [
      "Environnement territorial : CCAS, EHPAD publics, maintien à domicile",
      "Construction de l'exposé de 5 minutes : parcours, projet, motivation",
      "Questions types du jury : bientraitance, travail en équipe, secret professionnel",
      "Enjeux du grand âge et de l'autonomie en Guadeloupe",
      "Simulations d'entretien filmées avec débriefing individuel",
      "Préparation du dossier d'inscription",
    ],
    conditions: [
      { voie: "Sur titres", condition: "Diplôme d'État d'aide-soignant (ou certificat d'aptitude / diplôme professionnel d'aide-soignant)" },
    ],
    duree: "15 à 25 heures",
    format: "Présentiel (Grand-Camp, Les Abymes)",
    color: "#F5A623",
    accent: "#4BADD4",
    datesCles: [
      { label: "Inscriptions (session 2027)", date: "16 mars → 21 avril 2027", statut: "bientot" },
      { label: "Épreuve d'entretien", date: "Automne 2027 (à confirmer)", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Fin 2026", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Aides-soignants titulaires du diplôme d'État, du certificat d'aptitude ou du diplôme professionnel d'aide-soignant, candidates et candidats au concours sur titres d'aide-soignant territorial de classe normale.",
      simulationsFilmees: true,
      objectifs: [
        "Construire un exposé de cinq minutes sur sa formation, son parcours et son projet professionnel.",
        "Situer l'exercice de l'aide-soignant dans les structures des collectivités : établissements d'hébergement pour personnes âgées dépendantes publics territoriaux, services de soins et d'aide à domicile, centres communaux d'action sociale.",
        "Distinguer l'exercice territorial de l'exercice hospitalier : rythme, publics accompagnés, place dans l'équipe, relation avec les familles et les élus.",
        "Répondre aux questions récurrentes du jury : bientraitance, travail en équipe pluriprofessionnelle, secret professionnel, signalement d'une situation préoccupante.",
        "Mobiliser les enjeux du grand âge et de la perte d'autonomie en Guadeloupe dans ses réponses.",
        "Constituer un dossier d'inscription complet et conforme.",
      ],
      prerequis: [
        "Diplôme d'État d'aide-soignant, certificat d'aptitude ou diplôme professionnel d'aide-soignant",
        "Aucune épreuve écrite : la préparation suppose seulement d'accepter de travailler sa prise de parole",
      ],
      contenuIntro: "La préparation représente 15 à 25 heures en présentiel. Le concours est un concours sur titres : le diplôme ouvre l'accès et l'admission se joue sur un entretien unique de vingt minutes dont cinq minutes d'exposé. Court, cet oral ne laisse aucune place à l'approximation — d'où une préparation entièrement centrée sur lui.",
      contenu: [
        {
          titre: "L'environnement territorial de l'aide-soignant",
          modules: [
            { titre: "Les structures employeuses", desc: "Établissements d'hébergement pour personnes âgées dépendantes publics territoriaux, services de soins infirmiers et d'aide à domicile, centres communaux d'action sociale : statuts, organisation, financement et fonctionnement au quotidien." },
            { titre: "Maintien à domicile et accompagnement de la perte d'autonomie", desc: "Évaluation du besoin, coordination entre intervenants, allocation personnalisée d'autonomie, articulation entre la commune, le Département et les services de soins." },
            { titre: "Le grand âge et l'autonomie en Guadeloupe", desc: "Vieillissement de la population, isolement sur certaines communes, place des aidants familiaux, offre d'hébergement et de maintien à domicile sur l'archipel." },
          ],
        },
        {
          titre: "L'entretien avec le jury (20 min dont 5 min d'exposé, coef. 1)",
          modules: [
            { titre: "Construction de l'exposé de cinq minutes", desc: "Formation, parcours et projet professionnel resserrés sur l'essentiel, avec une motivation argumentée pour la fonction publique territoriale." },
            { titre: "Questions types du jury", desc: "Bientraitance et maltraitance, refus de soin, fin de vie, travail en équipe pluriprofessionnelle, secret professionnel, relation aux familles : banque de questions et entraînement aux réponses." },
            { titre: "Simulations d'entretien", desc: "Oraux blancs filmés dans la durée officielle, devant un jury professionnel, avec débriefing individuel." },
            { titre: "Préparation du dossier d'inscription", desc: "Vérification des pièces, respect des délais et formulation des rubriques du dossier de candidature." },
          ],
        },
      ],
    },
    faq: [
      { q: "Où travaille un aide-soignant territorial en Guadeloupe ?", a: "Dans les EHPAD et résidences autonomie gérés par les CCAS ou les communes, les services de soins infirmiers à domicile (SSIAD) territoriaux et certaines structures médico-sociales du Département." },
      { q: "Pourquoi passer le concours si j'ai déjà mon diplôme d'État ?", a: "Le diplôme permet d'exercer, mais le concours donne accès au statut de fonctionnaire territorial : sécurité de l'emploi, grille indiciaire, déroulement de carrière (aide-soignant de classe supérieure, puis auxiliaire de soins principal). Beaucoup de contractuels passent le concours pour être titularisés." },
      { q: "Comment se démarquer sur un entretien de 20 minutes ?", a: "En maîtrisant ce que les autres candidats négligent : le fonctionnement des collectivités, le rôle du CCAS, les enjeux territoriaux du vieillissement. Votre expérience de soin parle pour vous ; nous préparons le reste — exposé structuré et réponses aux questions institutionnelles." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=360",
  },

  "auxiliaire-puericulture-guadeloupe": {
    titre: "Auxiliaire de Puériculture",
    sousTitre: "Concours sur titres avec épreuve — classe normale",
    categorie: "Catégorie B",
    filiere: "Filière médico-sociale",
    type: "Concours",
    descCourte: "Concours sur titres : entretien de 20 minutes avec le jury. Épreuve le 1er mars 2027.",
    seoTitle: "Concours Auxiliaire de Puériculture Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez le concours d'auxiliaire de puériculture territorial en Guadeloupe : entretien de 20 min. Inscriptions sept.-oct. 2026, épreuve mars 2027.",
    accroche: "L'auxiliaire de puériculture territorial exerce en crèche municipale, en halte-garderie et en PMI. Le concours sur titres repose sur un entretien unique de 20 minutes : votre diplôme d'État vous rend éligible, la préparation de l'oral fait la différence.",
    epreuves: [
      { type: "Oral", label: "Entretien avec le jury (20 min dont 5 min d'exposé, coef. 1)", desc: "Exposé sur la formation, le parcours et le projet professionnels, puis échange permettant d'apprécier la capacité à s'intégrer dans l'environnement professionnel territorial, la motivation et l'aptitude à exercer les missions du cadre d'emplois." },
    ],
    programme: [
      "Environnement territorial : crèches municipales, PMI, politiques petite enfance",
      "Construction de l'exposé de 5 minutes : parcours, projet, motivation",
      "Questions types du jury : sécurité affective, hygiène, relation aux familles",
      "Enjeux de l'accueil du jeune enfant en Guadeloupe",
      "Simulations d'entretien filmées avec débriefing individuel",
      "Préparation du dossier d'inscription",
    ],
    conditions: [
      { voie: "Sur titres", condition: "Diplôme d'État d'auxiliaire de puériculture (ou autorisation d'exercice pour les ressortissants UE/EEE)" },
    ],
    duree: "15 à 25 heures",
    format: "Présentiel (Grand-Camp, Les Abymes)",
    color: "#4BADD4",
    accent: "#F5A623",
    datesCles: [
      { label: "Inscriptions", date: "15 sept. → 21 oct. 2026", statut: "bientot" },
      { label: "Épreuve d'entretien", date: "1er mars 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Novembre 2026", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Auxiliaires de puériculture titulaires du diplôme d'État, ou autorisées à exercer pour les ressortissants de l'Union européenne et de l'Espace économique européen, candidates et candidats au concours sur titres de classe normale.",
      simulationsFilmees: true,
      objectifs: [
        "Construire un exposé de cinq minutes sur sa formation, son parcours et son projet professionnel.",
        "Situer l'exercice de l'auxiliaire de puériculture dans les collectivités : crèche municipale, multi-accueil, halte-garderie, service de protection maternelle et infantile.",
        "Connaître les politiques petite enfance d'une commune et l'organisation d'un établissement d'accueil du jeune enfant.",
        "Répondre aux questions récurrentes du jury : sécurité affective de l'enfant, hygiène, rythmes et besoins du jeune enfant, relation aux familles.",
        "Mobiliser les enjeux de l'accueil du jeune enfant en Guadeloupe dans ses réponses.",
        "Constituer un dossier d'inscription complet et conforme.",
      ],
      prerequis: [
        "Diplôme d'État d'auxiliaire de puériculture, ou autorisation d'exercice pour les ressortissants de l'Union européenne et de l'Espace économique européen",
        "Aucune épreuve écrite : la préparation suppose seulement d'accepter de travailler sa prise de parole",
      ],
      contenuIntro: "La préparation représente 15 à 25 heures en présentiel. Le diplôme d'État rend éligible au concours sur titres ; l'admission se joue sur un entretien unique de vingt minutes dont cinq minutes d'exposé. La préparation porte donc entièrement sur cet oral et sur la connaissance du cadre territorial, distinct du cadre hospitalier où beaucoup de candidates ont exercé.",
      contenu: [
        {
          titre: "L'environnement territorial de l'auxiliaire de puériculture",
          modules: [
            { titre: "Les structures d'accueil municipales", desc: "Crèche collective, multi-accueil, halte-garderie et micro-crèche : organisation, projet d'établissement, projet pédagogique, taux d'encadrement et place de l'auxiliaire dans l'équipe." },
            { titre: "Protection maternelle et infantile et politiques petite enfance", desc: "Rôle du Département en PMI, rôle de la commune dans l'offre d'accueil, relais petite enfance, articulation avec les assistantes maternelles." },
            { titre: "L'accueil du jeune enfant en Guadeloupe", desc: "Offre d'accueil sur le territoire, attentes des familles, enjeux de prévention et de soutien à la parentalité." },
          ],
        },
        {
          titre: "L'entretien avec le jury (20 min dont 5 min d'exposé, coef. 1)",
          modules: [
            { titre: "Construction de l'exposé de cinq minutes", desc: "Formation, parcours et projet professionnel, avec une motivation argumentée pour l'exercice en collectivité." },
            { titre: "Questions types du jury", desc: "Sécurité affective et adaptation de l'enfant, hygiène et sécurité, rythmes et besoins, accueil d'un enfant en situation de handicap, relation aux familles et transmission : banque de questions et entraînement aux réponses." },
            { titre: "Simulations d'entretien", desc: "Oraux blancs filmés dans la durée officielle, devant un jury professionnel, avec débriefing individuel." },
            { titre: "Préparation du dossier d'inscription", desc: "Vérification des pièces, respect des délais et formulation des rubriques du dossier de candidature." },
          ],
        },
      ],
    },
    faq: [
      { q: "Je travaille déjà en crèche comme contractuelle, le concours m'apporte quoi ?", a: "La titularisation : statut de fonctionnaire, sécurité de l'emploi, grille indiciaire et perspectives d'évolution (auxiliaire de puériculture de classe supérieure). Les collectivités privilégient les lauréates du concours pour les postes permanents." },
      { q: "Que demande le jury à l'entretien ?", a: "Au-delà de votre pratique professionnelle : votre connaissance du fonctionnement d'une commune, du rôle de la PMI, des normes d'accueil du jeune enfant, et votre projet professionnel en collectivité. L'exposé initial de 5 minutes doit être construit et répété." },
      { q: "Quand faut-il s'inscrire ?", a: "Les inscriptions sont ouvertes du 15 septembre au 21 octobre 2026 sur concours-territorial.fr, pour une épreuve le 1er mars 2027. Attention : aucune inscription tardive n'est acceptée. Nous conseillons de préparer l'entretien à partir de novembre 2026." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=361",
  },

  "agent-social-guadeloupe": {
    titre: "Agent Social Principal de 2e Classe",
    sousTitre: "Concours externe, interne et 3e voie",
    categorie: "Catégorie C",
    filiere: "Filière médico-sociale",
    type: "Concours",
    descCourte: "QCM de 45 minutes puis entretien de motivation. Épreuves le 5 octobre 2027.",
    seoTitle: "Concours Agent Social Principal Guadeloupe 2027 | Evolutia",
    seoDesc: "Préparez le concours d'agent social principal 2e classe en Guadeloupe : QCM + entretien. Inscriptions mars-avril 2027, épreuves octobre 2027. CPF.",
    accroche: "L'agent social territorial intervient auprès des personnes âgées, des familles et des publics fragiles : aide à domicile, accompagnement social, structures d'accueil. Le concours de principal de 2e classe (catégorie C) combine un QCM et un entretien de motivation.",
    epreuves: [
      { type: "Écrit", label: "QCM (45 min, coef. 1)", desc: "Questionnaire à choix multiples portant sur des notions élémentaires d'organisation et de fonctionnement des collectivités locales, et sur la compréhension de consignes élémentaires d'hygiène et de sécurité (voie externe)." },
      { type: "Oral", label: "Entretien avec le jury (15 min, coef. 2)", desc: "Entretien permettant d'apprécier la motivation du candidat et son aptitude à exercer les missions incombant aux membres du cadre d'emplois. En interne et 3e voie, l'entretien s'appuie sur l'expérience professionnelle." },
    ],
    programme: [
      "Organisation et fonctionnement des collectivités locales — l'essentiel pour le QCM",
      "Hygiène et sécurité : consignes élémentaires et situations types",
      "Missions de l'agent social : publics, structures, déontologie",
      "Entraînements QCM chronométrés en conditions réelles",
      "Simulations d'entretien de motivation avec débriefing",
      "Connaissance de l'action sociale en Guadeloupe (CCAS, Département)",
    ],
    conditions: [
      { voie: "Externe", condition: "Diplôme de niveau 3 (CAP/BEP, DEAES…) ou qualification reconnue équivalente" },
      { voie: "Interne", condition: "Fonctionnaires et agents publics — conditions de services précisées par l'organisateur" },
      { voie: "3e voie", condition: "4 ans au moins d'activités professionnelles, de mandats d'élu local ou de responsabilités associatives" },
    ],
    duree: "40 à 60 heures",
    format: "Présentiel (Grand-Camp, Les Abymes)",
    color: "#1B3A6B",
    accent: "#4BADD4",
    datesCles: [
      { label: "Inscriptions", date: "16 mars → 21 avril 2027", statut: "bientot" },
      { label: "Épreuves", date: "5 octobre 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Printemps 2027", statut: "ouvert" },
    ],
    programmeDetaille: {
      objectifs: [
        "Maîtriser les notions élémentaires d'organisation et de fonctionnement des collectivités locales évaluées au questionnaire à choix multiples.",
        "Comprendre et appliquer les consignes élémentaires d'hygiène et de sécurité propres à l'intervention auprès de publics fragiles.",
        "Répondre à un questionnaire à choix multiples en 45 minutes, en gérant le temps et les formulations trompeuses.",
        "Connaître les missions de l'agent social : publics accompagnés, structures d'intervention, déontologie et limites de son rôle.",
        "Présenter sa motivation et son aptitude aux missions devant le jury — en interne et en 3e voie, en s'appuyant sur son expérience professionnelle.",
        "Situer l'action sociale conduite en Guadeloupe par les centres communaux d'action sociale et le Département.",
      ],
      prerequis: [
        "Voie externe : diplôme de niveau 3 (CAP, BEP, diplôme d'État d'accompagnant éducatif et social) ou qualification reconnue équivalente",
        "Voie interne : être fonctionnaire ou agent public, conditions de services précisées par l'organisateur",
        "3e voie : quatre ans au moins d'activités professionnelles, de mandats d'élu local ou de responsabilités associatives",
      ],
      contenuIntro: "La préparation représente 40 à 60 heures en présentiel. Le concours combine un questionnaire à choix multiples de 45 minutes et un entretien de quinze minutes affecté du coefficient 2 : l'écrit sécurise l'admissibilité, l'oral fait le classement. En interne et en 3e voie, l'entretien s'appuie sur l'expérience professionnelle du candidat.",
      contenu: [
        {
          titre: "Épreuve écrite — questionnaire à choix multiples (45 min, coef. 1)",
          modules: [
            { titre: "Organisation et fonctionnement des collectivités locales", desc: "Commune, centre communal d'action sociale, intercommunalité, Département : compétences, élus, services. Le niveau attendu est celui de notions élémentaires, telles qu'elles sont interrogées au questionnaire." },
            { titre: "Consignes d'hygiène et de sécurité", desc: "Règles élémentaires applicables à l'intervention au domicile et en structure, prévention des risques, gestes et postures, conduite à tenir en cas d'incident." },
            { titre: "Entraînements chronométrés", desc: "Séries de questionnaires en conditions réelles de durée, avec correction commentée : lecture des énoncés, repérage des formulations trompeuses, gestion du temps." },
          ],
        },
        {
          titre: "Le métier d'agent social",
          modules: [
            { titre: "Publics, structures et missions", desc: "Aide à domicile auprès des personnes âgées et des personnes en situation de handicap, accompagnement des familles et des publics fragiles, intervention en structure d'accueil : ce que recouvre concrètement le cadre d'emplois." },
            { titre: "Déontologie et posture", desc: "Discrétion et secret professionnel, juste distance, repérage et transmission d'une situation préoccupante, limites de son rôle et relais vers les travailleurs sociaux." },
            { titre: "L'action sociale en Guadeloupe", desc: "Rôle des centres communaux d'action sociale et du Département, dispositifs d'aide, partenaires associatifs du territoire." },
          ],
        },
        {
          titre: "Entretien avec le jury (15 min, coef. 2)",
          modules: [
            { titre: "Préparation de l'entretien de motivation", desc: "Formuler sa motivation et son aptitude aux missions en quinze minutes, en s'appuyant sur son expérience professionnelle pour les voies interne et 3e voie." },
            { titre: "Simulations d'entretien", desc: "Entretiens blancs devant un jury professionnel, avec débriefing individuel sur le fond, l'expression et la posture." },
          ],
        },
      ],
    },
    faq: [
      { q: "Quel diplôme faut-il pour le concours d'agent social principal ?", a: "En voie externe, un diplôme de niveau 3 : CAP, BEP, ou le DEAES (diplôme d'État d'accompagnant éducatif et social). Une qualification reconnue équivalente est également acceptée. Les voies interne et 3e voie sont ouvertes sans condition de diplôme." },
      { q: "Où exerce un agent social territorial ?", a: "Principalement dans les CCAS (aide à domicile, portage de repas, accompagnement des personnes âgées), les EHPAD territoriaux, les résidences autonomie et les services sociaux des communes." },
      { q: "Le QCM est-il difficile ?", a: "Il est accessible mais piégeux sans préparation : les questions portent sur l'organisation des collectivités (maire, conseil municipal, intercommunalité…) et l'hygiène et la sécurité, des sujets rarement maîtrisés spontanément. Nos entraînements chronométrés couvrent tout le programme." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=364",
  },

  "atsem-guadeloupe": {
    titre: "ATSEM Principal de 2e Classe",
    sousTitre: "Concours externe, interne et 3e voie",
    categorie: "Catégorie C",
    filiere: "Filière médico-sociale",
    type: "Concours",
    descCourte: "QCM de 20 questions puis entretien. CAP AEPE requis en externe. Épreuves le 29 septembre 2027.",
    seoTitle: "Concours ATSEM Guadeloupe 2027 : Préparation Complète | Evolutia",
    seoDesc: "Préparez le concours d'ATSEM principal 2e classe en Guadeloupe : QCM 45 min + entretien 15 min. CAP AEPE requis. Inscriptions mars-avril 2027. CPF.",
    accroche: "L'ATSEM (agent territorial spécialisé des écoles maternelles) assiste les enseignants de maternelle et accompagne les enfants tout au long de la journée scolaire. Un concours très demandé en Guadeloupe : le QCM et l'entretien se préparent sérieusement pour se démarquer.",
    epreuves: [
      { type: "Écrit", label: "Externe — QCM de 20 questions (45 min, coef. 1)", desc: "Questions à choix multiples portant sur des situations concrètes habituellement rencontrées par les ATSEM dans l'exercice de leurs fonctions." },
      { type: "Écrit", label: "Interne / 3e voie — Questions à réponses courtes (2h, coef. 1)", desc: "Série de 3 à 5 questions à partir d'un dossier succinct portant sur les situations rencontrées par un ATSEM en exercice." },
      { type: "Oral", label: "Entretien avec le jury (15 à 20 min, coef. 2)", desc: "En externe : entretien de 15 minutes sur l'aptitude, la motivation et la connaissance de l'environnement professionnel. En interne et 3e voie : présentation de l'expérience (5 min) puis conversation, le cas échéant sous forme de mise en situation (20 min)." },
    ],
    programme: [
      "Le métier d'ATSEM : rôle auprès des enfants, de l'enseignant, de la collectivité",
      "Situations professionnelles types : hygiène, sécurité, activités, cantine, sieste",
      "Entraînements QCM chronométrés sur les 20 questions types",
      "Environnement professionnel : école maternelle, commune, communauté éducative",
      "Simulations d'entretien avec mises en situation",
      "Focus Guadeloupe : recrutements des communes, réalités du terrain",
    ],
    conditions: [
      { voie: "Externe", condition: "CAP Accompagnant éducatif petite enfance (ex-CAP petite enfance) ou qualification reconnue équivalente" },
      { voie: "Interne", condition: "Fonctionnaires et agents publics justifiant de services effectifs auprès de jeunes enfants — conditions précisées par l'organisateur" },
      { voie: "3e voie", condition: "4 ans au moins d'activités professionnelles auprès de jeunes enfants, de mandats d'élu local ou de responsabilités associatives" },
    ],
    duree: "40 à 60 heures",
    format: "Présentiel (Grand-Camp, Les Abymes)",
    color: "#F5A623",
    accent: "#1B3A6B",
    datesCles: [
      { label: "Inscriptions", date: "16 mars → 21 avril 2027", statut: "bientot" },
      { label: "Épreuves", date: "29 septembre 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Printemps 2027", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Titulaires du CAP Accompagnant éducatif petite enfance ou d'une qualification équivalente pour la voie externe ; agents publics justifiant de services auprès de jeunes enfants pour la voie interne ; personnes justifiant de quatre ans d'activité auprès de jeunes enfants, de mandat électif ou de responsabilité associative pour la 3e voie.",
      objectifs: [
        "Décrire le rôle de l'ATSEM auprès des enfants, de l'enseignant et de la collectivité employeuse, et situer ce rôle dans la communauté éducative.",
        "Traiter les situations professionnelles types rencontrées en école maternelle : hygiène, sécurité, accompagnement des activités, restauration, sieste.",
        "Répondre à un questionnaire à choix multiples de 20 questions en 45 minutes, en gérant le temps et les pièges de formulation (voie externe).",
        "Répondre de façon courte et précise à une série de questions posées à partir d'un dossier succinct (voies interne et 3e voie).",
        "Présenter son expérience et ses motivations devant un jury, et traiter une mise en situation professionnelle.",
        "Connaître le fonctionnement des recrutements communaux en Guadeloupe et les démarches qui suivent l'inscription sur liste d'aptitude.",
      ],
      prerequis: [
        "Voie externe : CAP Accompagnant éducatif petite enfance (ex-CAP petite enfance) ou qualification reconnue équivalente",
        "Voie interne : être fonctionnaire ou agent public justifiant de services effectifs auprès de jeunes enfants",
        "3e voie : quatre ans au moins d'activités professionnelles auprès de jeunes enfants, de mandats d'élu local ou de responsabilités associatives",
        "Aucun prérequis scolaire au-delà du diplôme exigé par la voie choisie",
      ],
      contenuIntro: "La préparation représente 40 à 60 heures en présentiel à Grand-Camp. Elle couvre l'épreuve écrite dans la forme propre à chaque voie — QCM de 20 questions en 45 minutes en externe, questions à réponses courtes sur dossier en 2 heures en interne et 3e voie — puis l'entretien avec le jury, dont le coefficient 2 départage les admissibles sur ce concours très demandé.",
      contenu: [
        {
          titre: "Épreuve écrite — admissibilité",
          intro: "Le fond est commun aux trois voies : ce sont les situations professionnelles de l'ATSEM. Seule la forme de l'épreuve change.",
          modules: [
            { titre: "Le métier d'ATSEM", desc: "Missions auprès des enfants, assistance à l'enseignant, place dans l'équipe de l'école et rattachement à la commune. Cadre d'emplois, droits et obligations de l'agent territorial." },
            { titre: "Situations professionnelles types", desc: "Hygiène des locaux et des enfants, sécurité et conduite à tenir en cas d'incident, préparation et accompagnement des activités pédagogiques, restauration scolaire, sieste, accueil et départ des enfants. Ce sont les situations sur lesquelles portent les questions de l'épreuve." },
            { titre: "Entraînement au QCM — voie externe (45 min, coef. 1)", desc: "Séries chronométrées de 20 questions à choix multiples sur les situations concrètes du métier, avec correction commentée : lecture des énoncés, repérage des formulations trompeuses, gestion du temps, stratégie de réponse." },
            { titre: "Entraînement aux questions à réponses courtes — voies interne et 3e voie (2h, coef. 1)", desc: "Traitement d'un dossier succinct et rédaction de trois à cinq réponses courtes : précision du propos, appui sur l'expérience professionnelle, respect du temps imparti." },
            { titre: "Environnement professionnel", desc: "Organisation de l'école maternelle, rôle de la commune, relations avec les familles et la communauté éducative." },
          ],
        },
        {
          titre: "Entretien avec le jury — admission",
          intro: "Épreuve de coefficient 2 : elle pèse davantage que l'écrit et départage les candidates admissibles.",
          modules: [
            { titre: "Construction de la présentation", desc: "Voie externe : aptitude, motivation et connaissance de l'environnement professionnel, sur un entretien de 15 minutes. Voies interne et 3e voie : présentation de l'expérience en 5 minutes, suivie d'une conversation de 20 minutes." },
            { titre: "Mises en situation", desc: "Traitement à l'oral de situations professionnelles — un enfant en difficulté, un désaccord avec l'enseignant, un incident de sécurité, une demande d'un parent — avec les réponses attendues d'une ATSEM." },
            { titre: "Simulations d'entretien", desc: "Entretiens blancs devant un jury professionnel, avec bilan individuel portant sur le fond, la posture et l'expression." },
          ],
        },
        {
          titre: "Après le concours",
          modules: [
            { titre: "Liste d'aptitude et recrutement en Guadeloupe", desc: "Inscription sur liste d'aptitude pour quatre ans au maximum, qui ne vaut pas recrutement : méthode de candidature auprès des communes de l'archipel, calendrier des recrutements et réalités du terrain local." },
          ],
        },
      ],
      moyensEnPlus: [
        "Banque de questionnaires à choix multiples reprenant les 20 questions types de l'épreuve externe.",
      ],
    },
    faq: [
      { q: "Le CAP AEPE est-il obligatoire pour devenir ATSEM ?", a: "Pour le concours externe, oui : le CAP Accompagnant éducatif petite enfance (ou une qualification équivalente) est exigé. Si vous êtes déjà agent public ou si vous justifiez de 4 ans d'expérience auprès de jeunes enfants, les voies interne et 3e voie sont possibles sans ce diplôme." },
      { q: "Le concours d'ATSEM est-il très sélectif en Guadeloupe ?", a: "Oui, c'est l'un des concours de catégorie C les plus demandés : le nombre de candidates dépasse largement le nombre de postes. Le QCM élimine beaucoup de candidates non préparées, et l'entretien (coefficient 2) départage les admissibles — la préparation fait clairement la différence." },
      { q: "Que faire après la réussite au concours ?", a: "Vous êtes inscrite sur liste d'aptitude pendant 4 ans maximum et devez candidater auprès des communes de Guadeloupe pour être recrutée. Nous conseillons de postuler rapidement et largement — la liste d'aptitude ne vaut pas recrutement automatique." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=363",
  },

  "auxiliaire-soins-guadeloupe": {
    titre: "Auxiliaire de Soins Principal de 2e Classe",
    sousTitre: "Concours sur titres avec épreuve",
    categorie: "Catégorie C",
    filiere: "Filière médico-sociale",
    type: "Concours",
    descCourte: "Concours sur titres : entretien de 15 minutes avec le jury. Épreuve le 4 octobre 2027.",
    seoTitle: "Concours Auxiliaire de Soins Principal Guadeloupe 2027 | Evolutia",
    seoDesc: "Préparez le concours d'auxiliaire de soins principal 2e classe en Guadeloupe : entretien 15 min. Spécialités AMP, assistant dentaire. Épreuves oct. 2027.",
    accroche: "L'auxiliaire de soins territorial exerce notamment comme aide médico-psychologique ou assistant dentaire dans les structures des collectivités. Le concours sur titres repose sur un entretien unique de 15 minutes — court, donc décisif.",
    epreuves: [
      { type: "Oral", label: "Entretien avec le jury (15 min, coef. 1)", desc: "Entretien permettant d'apprécier les capacités professionnelles du candidat, ses motivations et son aptitude à exercer les missions incombant aux membres du cadre d'emplois." },
    ],
    programme: [
      "Environnement territorial : CCAS, EHPAD, centres de santé municipaux",
      "Présentation du parcours et du projet professionnel en quelques minutes",
      "Questions types du jury selon la spécialité (AMP / assistant dentaire)",
      "Déontologie, bientraitance, travail en équipe pluridisciplinaire",
      "Simulations d'entretien filmées avec débriefing individuel",
      "Préparation du dossier d'inscription",
    ],
    conditions: [
      { voie: "Sur titres — spécialité aide médico-psychologique", condition: "DEAES (accompagnement de la vie en structure collective), DEAMP, CAFAMP ou DEAVS" },
      { voie: "Sur titres — spécialité assistant dentaire", condition: "Titre ou diplôme de niveau 3 du domaine dentaire inscrit au RNCP" },
    ],
    duree: "15 à 25 heures",
    format: "Présentiel (Grand-Camp, Les Abymes)",
    color: "#4BADD4",
    accent: "#1B3A6B",
    datesCles: [
      { label: "Inscriptions", date: "16 mars → 21 avril 2027", statut: "bientot" },
      { label: "Épreuve d'entretien", date: "4 octobre 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Été 2027", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Candidates et candidats titulaires des diplômes requis dans l'une des deux spécialités du cadre d'emplois : aide médico-psychologique ou assistant dentaire.",
      simulationsFilmees: true,
      objectifs: [
        "Présenter son parcours et son projet professionnel en quelques minutes, l'entretien n'étant que de quinze minutes au total.",
        "Situer l'exercice de l'auxiliaire de soins dans les structures des collectivités : centres communaux d'action sociale, établissements d'hébergement pour personnes âgées dépendantes, centres de santé municipaux.",
        "Démontrer ses capacités professionnelles dans sa spécialité — accompagnement de la vie quotidienne pour l'aide médico-psychologique, assistance au praticien pour l'assistant dentaire.",
        "Répondre aux questions du jury sur la déontologie, la bientraitance et le travail en équipe pluridisciplinaire.",
        "Argumenter sa motivation pour l'exercice en collectivité territoriale.",
        "Constituer un dossier d'inscription complet et conforme à la spécialité présentée.",
      ],
      prerequis: [
        "Spécialité aide médico-psychologique : diplôme d'État d'accompagnant éducatif et social (accompagnement de la vie en structure collective), diplôme d'État ou certificat d'aptitude aux fonctions d'aide médico-psychologique, ou diplôme d'État d'auxiliaire de vie sociale",
        "Spécialité assistant dentaire : titre ou diplôme de niveau 3 du domaine dentaire inscrit au répertoire national des certifications professionnelles",
      ],
      contenuIntro: "La préparation représente 15 à 25 heures en présentiel. Le concours est un concours sur titres : le diplôme ouvre l'accès et tout se décide sur un entretien de quinze minutes, sans exposé formellement distinct. C'est le format le plus court de nos préparations à l'oral, et le plus exigeant en concision — chaque réponse doit porter.",
      contenu: [
        {
          titre: "L'environnement territorial de l'auxiliaire de soins",
          modules: [
            { titre: "Les structures employeuses", desc: "Centres communaux d'action sociale, établissements d'hébergement pour personnes âgées dépendantes, centres de santé et centres dentaires municipaux : organisation, publics accueillis, place de l'auxiliaire de soins dans l'équipe." },
            { titre: "Travail en équipe pluridisciplinaire", desc: "Articulation avec les soignants, les travailleurs sociaux et le praticien, transmission des informations, limites de son champ d'intervention." },
          ],
        },
        {
          titre: "L'entretien avec le jury (15 min, coef. 1)",
          modules: [
            { titre: "Présentation du parcours et du projet", desc: "Formuler l'essentiel en quelques minutes : formation, expérience, motivation pour la fonction publique territoriale. Entraînement à la concision, le format n'autorisant aucun développement superflu." },
            { titre: "Questions types selon la spécialité", desc: "Spécialité aide médico-psychologique : accompagnement de la vie quotidienne, bientraitance, refus d'aide, relation aux familles. Spécialité assistant dentaire : assistance au fauteuil, stérilisation et asepsie, gestion du dossier patient, accueil et relation au patient." },
            { titre: "Déontologie et bientraitance", desc: "Secret professionnel, discrétion, respect de la personne accompagnée, repérage et signalement d'une situation préoccupante." },
            { titre: "Simulations d'entretien", desc: "Oraux blancs filmés dans la durée officielle de quinze minutes, devant un jury professionnel, avec débriefing individuel." },
            { titre: "Préparation du dossier d'inscription", desc: "Vérification des pièces et des diplômes exigés dans la spécialité présentée, respect des délais." },
          ],
        },
      ],
    },
    faq: [
      { q: "Quelles spécialités sont ouvertes au concours d'auxiliaire de soins ?", a: "Les principales spécialités sont l'aide médico-psychologique (accessible avec le DEAES, le DEAMP ou le DEAVS) et l'assistant dentaire (titre de niveau 3 du domaine dentaire). Vérifiez les spécialités effectivement ouvertes lors de la session auprès de l'organisateur." },
      { q: "Comment réussir un entretien de seulement 15 minutes ?", a: "En allant à l'essentiel : une présentation de parcours calibrée, des exemples concrets de situations professionnelles, et une vraie connaissance de l'environnement territorial (CCAS, EHPAD publics). 15 minutes ne pardonnent pas l'improvisation — chaque minute se prépare." },
      { q: "Quelle évolution de carrière ensuite ?", a: "Le grade de principal de 2e classe permet ensuite d'évoluer vers le grade de principal de 1re classe par avancement. Certains agents poursuivent vers le concours d'aide-soignant territorial (catégorie B) après obtention du diplôme d'État correspondant." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=362",
  },

  /* ─────────────────────── FILIÈRE TECHNIQUE ─────────────────────── */

  "ingenieur-territorial-guadeloupe": {
    titre: "Ingénieur Territorial",
    sousTitre: "Concours externe et interne",
    categorie: "Catégorie A",
    filiere: "Filière technique",
    type: "Concours",
    descCourte: "Note de spécialité (5h, coef. 5) et entretien de 40 minutes. Prochaine session Evolutia : démarrage le 25 novembre 2026.",
    seoTitle: "Préparation Concours Ingénieur Territorial Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez le concours d'ingénieur territorial en Guadeloupe : note de spécialité 5h, entretien 40 min. Session 2027, financement CPF. Evolutia, Les Abymes.",
    accroche: "Le concours d'ingénieur territorial ouvre l'accès aux postes d'encadrement technique des collectivités : infrastructures, bâtiment, réseaux, informatique, prévention des risques. En voie externe, tout repose sur deux épreuves à fort coefficient — une note de 5 heures et un entretien de 40 minutes.",
    epreuves: [
      { type: "Écrit", label: "Externe — Note à partir d'un dossier de spécialité (5h, coef. 5)", desc: "Rédaction d'une note à partir de l'analyse d'un dossier, tenant compte du contexte technique, économique ou juridique. Le dossier porte sur la spécialité choisie à l'inscription (infrastructures, bâtiment, réseaux, informatique, prévention des risques…)." },
      { type: "Écrit", label: "Interne — 3 épreuves écrites", desc: "Mathématiques et physique appliquées (4h, coef. 3), note sur dossier de spécialité (4h, coef. 3) et établissement d'un projet ou étude dans l'option choisie (8h, coef. 7)." },
      { type: "Oral", label: "Entretien avec le jury (40 min, coef. 5)", desc: "Première partie : questions sur l'option choisie au sein de la spécialité. Seconde partie : aptitude à s'intégrer dans l'environnement professionnel et à résoudre les problèmes techniques ou d'encadrement d'un ingénieur. Fiche individuelle de renseignement transmise à l'inscription (non notée). Épreuve facultative de langue possible." },
    ],
    programme: [
      "Méthodologie de la note sur dossier de spécialité — la seule épreuve écrite externe, coef. 5",
      "Approfondissement technique par spécialité (infrastructures, bâtiment, informatique…)",
      "Culture territoriale : commande publique, finances, conduite de projet en collectivité",
      "Enjeux techniques de la Guadeloupe : eau, énergie, risques naturels, aménagement",
      "Préparation de l'entretien de 40 minutes : questions d'option + posture professionnelle",
      "Simulations d'oral filmées avec débriefing individuel",
    ],
    conditions: [
      { voie: "Externe", condition: "Diplôme d'ingénieur, d'architecte ou diplôme scientifique/technique de niveau Bac+5 correspondant à l'une des spécialités" },
      { voie: "Externe — dispense de diplôme", condition: "Sont dispensés de la condition de diplôme : les mères et pères d'au moins 3 enfants qu'ils élèvent ou ont élevés effectivement, et les sportifs de haut niveau figurant sur la liste publiée l'année du concours par le ministre chargé des Sports" },
      { voie: "Interne", condition: "Fonctionnaires et agents publics comptant au moins 4 ans de services publics" },
    ],
    duree: "120 à 180 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel",
    tauxReussite: "64%",
    resultats2026: "9 admissibles sur 14 candidats, dont 6 admis",
    color: "#1B3A6B",
    accent: "#4BADD4",
    datesCles: [
      { label: "Démarrage de la préparation Evolutia", date: "Mercredi 25 novembre 2026", statut: "ouvert" },
      { label: "Inscriptions au concours (session 2027)", date: "8 déc. 2026 → 13 jan. 2027", statut: "bientot" },
      { label: "Épreuves écrites", date: "16 juin 2027", statut: "bientot" },
    ],
    session: {
      intitule: "Concours Ingénieur",
      demarrage: "mercredi 25 novembre 2026",
      demarrageISO: "2026-11-25",
      inscription: "ouverte",
    },
    programmeDetaille: {
      simulationsFilmees: true,
      objectifs: [
        "Analyser en cinq heures un dossier technique de spécialité et rédiger une note tenant compte du contexte technique, économique et juridique de la collectivité.",
        "Approfondir la spécialité choisie à l'inscription — infrastructures, bâtiment, réseaux, informatique, prévention des risques — au niveau attendu d'un ingénieur territorial.",
        "Situer un projet technique dans son cadre territorial : commande publique, financement, conduite de projet, relations avec les élus et les usagers.",
        "Pour la voie interne : traiter les épreuves de mathématiques et physique appliquées, et conduire l'établissement d'un projet ou d'une étude dans l'option choisie.",
        "Répondre aux questions d'option de l'entretien et démontrer son aptitude à résoudre les problèmes techniques et d'encadrement d'un ingénieur.",
        "Mobiliser les enjeux techniques propres à la Guadeloupe — eau, énergie, risques naturels, aménagement — dans les écrits comme à l'oral.",
      ],
      prerequis: [
        "Voie externe : diplôme d'ingénieur, d'architecte ou diplôme scientifique ou technique de niveau Bac+5 correspondant à l'une des spécialités",
        "Dispense de diplôme en voie externe : mères et pères d'au moins trois enfants élevés effectivement, et sportifs de haut niveau inscrits sur la liste publiée l'année du concours",
        "Voie interne : être fonctionnaire ou agent public et compter au moins quatre ans de services publics",
        "Avoir choisi sa spécialité et son option avant l'entrée en préparation : tout le travail technique en découle",
      ],
      tarif: "À partir de 3 290 €",
      contenuIntro: "La préparation représente 120 à 180 heures. Les deux voies n'ont rien de comparable : en externe, tout se joue sur une note de cinq heures (coefficient 5) et un entretien de quarante minutes (coefficient 5) ; en interne s'ajoutent trois écrits, dont l'établissement d'un projet en huit heures au coefficient 7. Le parcours est donc différencié dès les premières séances.",
      contenu: [
        {
          titre: "Note sur dossier de spécialité — voie externe (5h, coef. 5)",
          intro: "Unique épreuve écrite de la voie externe : elle décide à elle seule de l'admissibilité.",
          modules: [
            { titre: "Méthodologie de la note technique", desc: "Analyse d'un dossier volumineux en temps contraint, identification de la commande, construction d'un plan technique lisible et rédaction destinée à un décideur non spécialiste. Entraînements sur dossiers de la spécialité choisie." },
            { titre: "Intégrer le contexte économique et juridique", desc: "Coût d'investissement et de fonctionnement, contraintes réglementaires, procédures de commande publique, calendrier de réalisation : ce que le jury attend en plus de la solution technique." },
            { titre: "Gestion des cinq heures d'épreuve", desc: "Répartition du temps entre lecture, plan et rédaction, et entraînements en conditions réelles de durée." },
          ],
        },
        {
          titre: "Épreuves écrites complémentaires — voie interne",
          modules: [
            { titre: "Mathématiques et physique appliquées (4h, coef. 3)", desc: "Remise à niveau et entraînement sur le programme de l'épreuve, appliqué à des situations techniques de collectivité." },
            { titre: "Note sur dossier de spécialité (4h, coef. 3)", desc: "Même méthodologie que la voie externe, sur un format resserré à quatre heures." },
            { titre: "Établissement d'un projet ou d'une étude (8h, coef. 7)", desc: "Épreuve au coefficient le plus élevé du concours : conduite d'une étude complète dans l'option choisie, du diagnostic au chiffrage. Entraînement progressif, puis épreuve blanche en durée réelle." },
          ],
        },
        {
          titre: "Approfondissement technique et territorial",
          modules: [
            { titre: "Spécialité et option", desc: "Approfondissement ciblé selon le choix du candidat : infrastructures et réseaux, bâtiment et constructions publiques, informatique et systèmes d'information, prévention et gestion des risques." },
            { titre: "Culture territoriale de l'ingénieur", desc: "Commande publique, finances locales, maîtrise d'ouvrage publique, conduite de projet en collectivité et positionnement de l'ingénieur face aux élus." },
            { titre: "Enjeux techniques de la Guadeloupe", desc: "Gestion de l'eau et de l'assainissement, énergie et transition, risques naturels majeurs, aménagement en milieu insulaire : des cas concrets qui alimentent la note comme l'entretien." },
          ],
        },
        {
          titre: "Entretien avec le jury (40 min, coef. 5)",
          modules: [
            { titre: "Questions d'option", desc: "Première partie de l'entretien : interrogation technique sur l'option choisie au sein de la spécialité. Entraînement par questions-réponses sur les attendus du niveau ingénieur." },
            { titre: "Aptitude professionnelle et encadrement", desc: "Seconde partie : intégration dans l'environnement professionnel, résolution de problèmes techniques et d'encadrement. La fiche individuelle de renseignement transmise à l'inscription n'est pas notée mais sert de support aux questions." },
            { titre: "Simulations d'oral", desc: "Oraux blancs filmés dans la durée officielle de quarante minutes, avec débriefing individuel." },
          ],
        },
      ],
    },
    faq: [
      { q: "Quelles sont exactement les épreuves du concours externe d'ingénieur ?", a: "Deux épreuves seulement, mais à très fort coefficient : une note à partir d'un dossier de spécialité (5 heures, coefficient 5) et un entretien de 40 minutes (coefficient 5) portant d'abord sur l'option choisie, puis sur votre aptitude professionnelle. Une épreuve facultative de langue peut s'y ajouter. Il n'y a pas d'épreuve de culture générale." },
      { q: "Le concours externe exige-t-il Bac+5 ?", a: "Oui : diplôme d'ingénieur, d'architecte ou autre diplôme scientifique ou technique sanctionnant au moins 5 années d'études supérieures dans l'une des spécialités du concours. Deux dispenses existent toutefois : les mères et pères d'au moins 3 enfants qu'ils élèvent ou ont élevés effectivement, et les sportifs de haut niveau inscrits sur la liste ministérielle de l'année du concours." },
      { q: "Quelle spécialité choisir en Guadeloupe ?", a: "Les collectivités guadeloupéennes recrutent surtout en infrastructures et réseaux (eau, assainissement, voirie), bâtiment et construction, et prévention des risques (sismique, cyclonique). Choisissez la spécialité de votre formation initiale : le jury évalue une expertise réelle." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=327",
  },

  "ingenieur-chef-guadeloupe": {
    titre: "Ingénieur en Chef",
    sousTitre: "Concours externe et interne — Catégorie A+",
    categorie: "Catégorie A+",
    filiere: "Filière technique",
    type: "Concours",
    descCourte: "Trois écrits de 5h, entretien sur dossier, mise en situation collective. Le concours technique le plus exigeant.",
    seoTitle: "Préparation Concours Ingénieur en Chef Guadeloupe 2026 | Evolutia",
    seoDesc: "Préparez le concours d'ingénieur en chef territorial : 3 écrits de 5h, grand oral, mise en situation collective. Organisé par le CNFPT. Evolutia Formation.",
    accroche: "Le concours d'ingénieur en chef territorial (A+), organisé par le CNFPT, mène aux plus hautes fonctions techniques : direction générale des services techniques, pilotage de grandes directions. Trois épreuves écrites de 5 heures et des oraux exigeants — une préparation d'excellence s'impose.",
    epreuves: [
      { type: "Écrit", label: "Note de synthèse et de propositions technique (5h, coef. 5)", desc: "Analyse d'un dossier portant sur un sujet technique dans l'une des cinq options : ingénierie environnementale ; constructions publiques, gestion immobilière, énergie ; aménagement, déplacements et urbanisme ; réseaux techniques urbains et infrastructures ; systèmes d'information et de communication." },
      { type: "Écrit", label: "Note de synthèse et de propositions — conduite de projet (5h, coef. 4)", desc: "Dossier portant sur une conduite de projet soulevant un problème d'organisation ou de gestion rencontré par une collectivité territoriale (coef. 5 en voie interne)." },
      { type: "Écrit", label: "Composition sur une question de société contemporaine (5h, coef. 3)", desc: "Apprécier l'aptitude du candidat à exprimer une analyse des faits et une interprétation personnelle et argumentée sur le sujet proposé." },
      { type: "Oral", label: "Entretien avec le jury à partir d'un dossier (30 min, coef. 5)", desc: "À partir d'un dossier fourni par le candidat : parcours, réalisations, capacités d'analyse et de synthèse, motivation et capacité à exercer les fonctions d'ingénieur en chef. Seul l'entretien est noté." },
      { type: "Oral", label: "Mise en situation professionnelle collective (45 min, coef. 2)", desc: "30 minutes de mise en situation collective puis 15 minutes de compte-rendu et d'échanges individuels avec le jury. S'y ajoute une épreuve orale de langue vivante (30 min, coef. 1)." },
    ],
    programme: [
      "Méthodologie des notes de synthèse et de propositions — entraînements 5h en conditions réelles",
      "Composition sur les questions de société : culture générale contemporaine et argumentation",
      "Constitution du dossier candidat et préparation de l'entretien de 30 minutes",
      "Entraînement aux mises en situation collectives (leadership, écoute, synthèse)",
      "Gouvernance territoriale et politiques publiques : le niveau A+ attendu",
      "Coaching individuel intensif sur la posture de cadre dirigeant",
    ],
    conditions: [
      { voie: "Externe", condition: "Titres et diplômes spécifiques (écoles d'ingénieurs, architectes…) ou qualification reconnue équivalente" },
      { voie: "Interne", condition: "Fonctionnaires et agents publics remplissant les conditions de services fixées par le statut particulier" },
    ],
    duree: "80 à 120 heures",
    format: "Présentiel (Grand-Camp) + coaching individuel en distanciel",
    tauxReussite: "79%",
    color: "#1B3A6B",
    accent: "#F5A623",
    datesCles: [
      { label: "Épreuves écrites (session 2026)", date: "7 septembre 2026", statut: "bientot" },
      { label: "Inscriptions (session 2026)", date: "Clôturées — CNFPT", statut: "ferme" },
      { label: "Préparation aux oraux d'admission", date: "Dès les résultats d'admissibilité", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Cadres techniques visant les plus hautes fonctions territoriales — direction générale des services techniques, pilotage de grandes directions — remplissant les conditions d'accès au concours d'ingénieur en chef organisé par le CNFPT.",
      objectifs: [
        "Produire en cinq heures une note de synthèse et de propositions sur un sujet technique relevant de l'une des cinq options du concours.",
        "Traiter une conduite de projet soulevant un problème d'organisation ou de gestion rencontré par une collectivité, et formuler des propositions de niveau direction générale.",
        "Composer sur une question de société contemporaine en développant une analyse des faits et une interprétation personnelle argumentée.",
        "Constituer le dossier remis au jury et préparer l'entretien de trente minutes qui s'appuie dessus — seul l'entretien est noté.",
        "Tenir son rôle dans une mise en situation professionnelle collective : écoute, apport, synthèse, puis compte rendu individuel au jury.",
        "Adopter la posture d'un cadre dirigeant territorial : gouvernance, arbitrages, pilotage de politiques publiques.",
      ],
      prerequis: [
        "Voie externe : titres et diplômes spécifiques (écoles d'ingénieurs, architectes) ou qualification reconnue équivalente",
        "Voie interne : être fonctionnaire ou agent public et remplir les conditions de services fixées par le statut particulier",
        "Disposer d'une expérience de pilotage technique ou de direction sur laquelle appuyer le dossier et l'entretien",
        "Pouvoir consacrer un temps de travail personnel soutenu : trois écrits de cinq heures se préparent dans la durée",
      ],
      tarif: "À partir de 2 190 €",
      contenuIntro: "La préparation représente 80 à 120 heures. Le concours d'ingénieur en chef est un concours de catégorie A+ : trois épreuves écrites de cinq heures à l'admissibilité, puis un entretien sur dossier et une mise en situation collective à l'admission, complétés d'une épreuve orale de langue vivante. Le niveau attendu est celui d'un futur directeur général des services techniques.",
      contenu: [
        {
          titre: "Épreuves écrites — admissibilité",
          modules: [
            { titre: "Note de synthèse et de propositions technique (5h, coef. 5)", desc: "Dossier portant sur l'option choisie parmi les cinq du concours : ingénierie environnementale ; constructions publiques, gestion immobilière et énergie ; aménagement, déplacements et urbanisme ; réseaux techniques urbains et infrastructures ; systèmes d'information et de communication. Méthodologie, puis entraînements en conditions réelles de durée." },
            { titre: "Note de synthèse et de propositions — conduite de projet (5h, coef. 4, coef. 5 en interne)", desc: "Dossier portant sur une conduite de projet soulevant un problème d'organisation ou de gestion. L'attendu dépasse la technique : organisation des services, pilotage des moyens, conduite du changement." },
            { titre: "Composition sur une question de société contemporaine (5h, coef. 3)", desc: "Culture générale contemporaine et construction d'une argumentation personnelle. Travail sur les grands débats de société et entraînement à la prise de position argumentée, exercice inhabituel pour des profils techniques." },
            { titre: "Entraînements en conditions réelles", desc: "Épreuves blanches de cinq heures, corrigées individuellement, avec un calendrier de montée en charge jusqu'aux écrits." },
          ],
        },
        {
          titre: "Épreuves orales — admission",
          modules: [
            { titre: "Constitution du dossier candidat", desc: "Rédaction du dossier remis au jury : parcours, réalisations marquantes, responsabilités exercées. Le dossier n'est pas noté, mais il oriente tout l'entretien : sa construction est un exercice stratégique." },
            { titre: "Entretien avec le jury (30 min, coef. 5)", desc: "Capacités d'analyse et de synthèse, motivation et aptitude à exercer les fonctions d'ingénieur en chef. Simulations devant jury professionnel, avec débriefing individuel." },
            { titre: "Mise en situation professionnelle collective (45 min, coef. 2)", desc: "Trente minutes de travail collectif puis quinze minutes de compte rendu et d'échanges individuels. Entraînement au positionnement en groupe : apporter sans écraser, écouter, faire émerger une synthèse." },
            { titre: "Épreuve orale de langue vivante (30 min, coef. 1)", desc: "Préparation à l'échange en langue vivante, sur des sujets professionnels." },
          ],
        },
        {
          titre: "Posture de cadre dirigeant",
          modules: [
            { titre: "Gouvernance territoriale et politiques publiques", desc: "Relations entre direction générale et exécutif, construction et pilotage d'une politique publique, dialogue de gestion, maîtrise des grands équilibres budgétaires : le niveau A+ attendu dans toutes les épreuves." },
          ],
        },
      ],
      moyensEnPlus: [
        "Coaching individuel intensif sur la posture de cadre dirigeant, en distanciel entre les séances présentielles.",
      ],
    },
    faq: [
      { q: "Quelles sont les épreuves écrites du concours d'ingénieur en chef ?", a: "Trois épreuves de 5 heures chacune : une note de synthèse et de propositions sur un sujet technique dans l'option choisie (coef. 5), une note sur une conduite de projet (coef. 4 en externe), et une composition sur une question de société contemporaine (coef. 3). L'admissibilité exige donc autant de culture générale que d'expertise technique." },
      { q: "En quoi consiste la mise en situation professionnelle collective ?", a: "C'est une épreuve d'admission originale : 30 minutes de travail collectif avec d'autres candidats sur un cas donné, puis 15 minutes de compte-rendu individuel devant le jury. Elle évalue le leadership, l'écoute et la capacité de synthèse — des compétences qui s'entraînent en conditions réelles." },
      { q: "Qui organise ce concours et où se passent les épreuves ?", a: "Le concours d'ingénieur en chef est organisé nationalement par le CNFPT (et non par le CDG 971). Les épreuves écrites de la session 2026 ont lieu le 7 septembre 2026. Notre préparation à distance et en présentiel s'adapte à cette organisation nationale." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=409",
  },

  "technicien-territorial-guadeloupe": {
    titre: "Technicien Territorial & Technicien Principal",
    sousTitre: "Concours et examens professionnels d'avancement de grade",
    categorie: "Catégorie B",
    filiere: "Filière technique",
    type: "Concours + Examen pro.",
    descCourte: "Examens pro. technicien principal : rapport technique (3h) + entretien. Préparation à partir du 9 septembre 2026.",
    seoTitle: "Concours et Examens Technicien Territorial Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez le concours de technicien territorial et les examens de technicien principal en Guadeloupe : rapport technique, entretien. Épreuves avril 2027.",
    accroche: "Le technicien territorial est le pivot des services techniques des collectivités. Au calendrier 2026-2027 : les examens professionnels de technicien principal (1re et 2e classe, avancement de grade et promotion interne), avec inscriptions à l'automne 2026. La prochaine session du concours de technicien sera annoncée par le CDG 971.",
    epreuves: [
      { type: "Écrit", label: "Examens pro. — Rapport technique avec propositions (3h, coef. 1)", desc: "Rédaction d'un rapport technique portant sur la spécialité choisie, assorti de propositions opérationnelles. Épreuve commune aux examens de technicien principal de 1re et de 2e classe. Note minimale de 5/20 pour accéder à l'oral." },
      { type: "Oral", label: "Examens pro. — Entretien (20 min dont 5 min d'exposé, coef. 1 à 2)", desc: "Exposé sur l'expérience professionnelle puis questions techniques et d'aptitude. Coefficient 2 pour la 1re classe (accent sur l'encadrement) et la promotion interne, coefficient 1 pour la 2e classe en avancement de grade." },
      { type: "Écrit", label: "Concours technicien — Épreuves écrites (3h, coef. 1)", desc: "En externe : réponses à des questions techniques à partir d'un dossier de spécialité. En interne et 3e voie : élaboration d'un rapport technique à partir d'un dossier. Prochaine session : dates à confirmer par le CDG 971." },
    ],
    programme: [
      "Méthodologie du rapport technique avec propositions opérationnelles",
      "Connaissances techniques par spécialité (bâtiment, voirie, réseaux, informatique…)",
      "Entraînements écrits corrigés individuellement sur sujets d'annales",
      "Construction de l'exposé d'expérience professionnelle (5 minutes)",
      "Simulations d'entretien adaptées à l'examen visé (2e classe, 1re classe, promotion interne)",
      "Veille sur le calendrier CDG 971 pour la prochaine session du concours",
    ],
    conditions: [
      { voie: "Examen pro. 2e classe (avancement)", condition: "Techniciens ayant atteint le 6e échelon du grade et justifiant de 3 ans de services effectifs en catégorie B" },
      { voie: "Examen pro. 1re classe (avancement)", condition: "Techniciens principaux de 2e classe avec 1 an dans le 6e échelon et 3 ans de services effectifs en catégorie B" },
      { voie: "Examen pro. 2e classe (promotion interne)", condition: "Agents de maîtrise justifiant de 8 ans de services effectifs, ou adjoints techniques principaux justifiant de 10 ans, dont 5 ans en cadre d'emplois technique territorial" },
      { voie: "Concours (externe)", condition: "Baccalauréat technologique ou professionnel, ou diplôme de niveau 4 technico-professionnel correspondant à une spécialité" },
    ],
    duree: "60 à 120 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + distanciel",
    tauxReussite: "60%",
    resultats2026: "6 admis sur 10 candidats",
    color: "#4BADD4",
    accent: "#1B3A6B",
    datesCles: [
      { label: "Démarrage de la préparation Evolutia", date: "Mercredi 9 septembre 2026", statut: "ouvert" },
      { label: "Inscriptions examens pro. technicien principal", date: "13 oct. → 18 nov. 2026", statut: "bientot" },
      { label: "Épreuves écrites examens pro.", date: "15 avril 2027", statut: "bientot" },
      { label: "Prochain concours de technicien", date: "À confirmer — CDG 971", statut: "bientot" },
    ],
    session: {
      intitule: "Examen professionnel Technicien",
      demarrage: "mercredi 9 septembre 2026",
      demarrageISO: "2026-09-09",
      inscription: "ouverte",
    },
    programmeDetaille: {
      objectifs: [
        "Rédiger en trois heures un rapport technique portant sur la spécialité choisie, assorti de propositions opérationnelles.",
        "Consolider les connaissances techniques de sa spécialité — bâtiment, voirie, réseaux, informatique — au niveau attendu d'un technicien territorial.",
        "Construire un exposé de cinq minutes sur son expérience professionnelle et répondre aux questions techniques du jury.",
        "Pour la 1re classe et la promotion interne : démontrer son aptitude à encadrer une équipe technique, l'entretien y étant affecté du coefficient 2.",
        "Pour le concours en voie externe : répondre à des questions techniques à partir d'un dossier de spécialité ; en interne et 3e voie : élaborer un rapport technique sur dossier.",
        "Sécuriser l'écrit des examens professionnels, dont une note inférieure à 5/20 interdit l'accès à l'oral.",
      ],
      prerequis: [
        "Examen professionnel de 2e classe par avancement : être technicien, avoir atteint le 6e échelon et justifier de trois ans de services effectifs en catégorie B",
        "Examen professionnel de 1re classe par avancement : être technicien principal de 2e classe, justifier d'un an dans le 6e échelon et de trois ans de services effectifs en catégorie B",
        "Examen professionnel de 2e classe par promotion interne : être agent de maîtrise avec huit ans de services effectifs, ou adjoint technique principal avec dix ans dont cinq dans un cadre d'emplois technique territorial",
        "Concours en voie externe : baccalauréat technologique ou professionnel, ou diplôme de niveau 4 technico-professionnel correspondant à une spécialité",
      ],
      tarif: "À partir de 2 490 €",
      contenuIntro: "La préparation représente 60 à 120 heures selon la voie présentée. Au calendrier 2026-2027 figurent les examens professionnels de technicien principal de 1re et de 2e classe, par avancement de grade comme par promotion interne, dont l'épreuve écrite est commune ; la prochaine session du concours de technicien sera annoncée par le CDG 971. Les séances de fond sont mutualisées, les entraînements et les simulations d'oral sont calés sur l'examen de chacun.",
      contenu: [
        {
          titre: "Rapport technique avec propositions — écrit (3h, coef. 1)",
          intro: "Épreuve commune aux examens professionnels de 1re et de 2e classe.",
          modules: [
            { titre: "Méthodologie du rapport technique", desc: "Analyse du dossier de spécialité, identification du problème posé, structuration du rapport et rédaction destinée à un responsable de service. Entraînement sur sujets d'annales." },
            { titre: "Formuler des propositions opérationnelles", desc: "Passer du diagnostic technique à des solutions applicables : moyens, délais, coût, organisation du chantier ou du service. C'est ce qui est attendu d'un technicien principal." },
            { titre: "Connaissances techniques par spécialité", desc: "Révisions ciblées selon la spécialité du candidat : bâtiment, voirie et réseaux divers, espaces verts, informatique et systèmes d'information, prévention et sécurité." },
            { titre: "Entraînements corrigés individuellement", desc: "Devoirs sur annales corrigés et commentés, puis épreuve blanche en temps réel, avec vigilance sur la note éliminatoire de 5/20." },
          ],
        },
        {
          titre: "Épreuves écrites du concours de technicien",
          intro: "Session à confirmer par le CDG 971 ; la préparation est assurée dès l'annonce du calendrier.",
          modules: [
            { titre: "Questions techniques sur dossier — voie externe (3h, coef. 1)", desc: "Réponses à des questions techniques à partir d'un dossier de spécialité : précision, exactitude, gestion du temps." },
            { titre: "Rapport technique sur dossier — voies interne et 3e voie (3h, coef. 1)", desc: "Même méthodologie que l'examen professionnel, appliquée au format du concours." },
          ],
        },
        {
          titre: "Entretien avec le jury (20 min dont 5 min d'exposé)",
          modules: [
            { titre: "Construction de l'exposé d'expérience", desc: "Cinq minutes sur le parcours technique, les chantiers conduits et les responsabilités exercées, tenues sans notes." },
            { titre: "Questions techniques et d'aptitude", desc: "Préparation aux questions du jury sur la spécialité, l'organisation du travail et la sécurité." },
            { titre: "Encadrement — 1re classe et promotion interne", desc: "L'entretien y est affecté du coefficient 2, avec un accent sur l'encadrement : conduite d'équipe, répartition du travail, gestion des tensions, rendu compte à la hiérarchie." },
            { titre: "Simulations d'entretien", desc: "Entretiens blancs devant un jury professionnel, adaptés à l'examen visé — 2e classe, 1re classe ou promotion interne — avec débriefing individuel." },
          ],
        },
      ],
      suiviEnPlus: [
        "Une veille sur le calendrier du CDG 971, les stagiaires étant informés dès l'ouverture de la prochaine session du concours de technicien",
      ],
    },
    faq: [
      { q: "Quelle différence entre avancement de grade et promotion interne pour technicien principal de 2e classe ?", a: "L'avancement de grade s'adresse aux techniciens (catégorie B) qui montent en grade dans leur cadre d'emplois. La promotion interne s'adresse aux agents de catégorie C (agents de maîtrise avec 8 ans de services, adjoints techniques principaux avec 10 ans) qui accèdent à la catégorie B. Les épreuves sont proches — rapport technique de 3h puis entretien — mais les jurys n'attendent pas la même chose." },
      { q: "Quand aura lieu le prochain concours de technicien territorial ?", a: "La dernière session s'est tenue le 9 avril 2026. La prochaine session n'est pas encore annoncée : les concours de technicien sont généralement organisés tous les deux ans. Inscrivez-vous à notre veille pour être alerté dès la publication des dates par le CDG 971." },
      { q: "Le rapport technique est-il difficile ?", a: "C'est une épreuve exigeante en 3 heures : analyser un dossier technique de spécialité, en tirer un diagnostic et formuler des propositions opérationnelles chiffrées et réalistes. Une note sous 5/20 est éliminatoire. La méthodologie s'acquiert par des entraînements corrigés — c'est le cœur de notre préparation." },
    ],
    sourceOfficielle: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000023036811",
  },

  "adjoint-technique-principal-guadeloupe": {
    titre: "Adjoint Technique Principal de 2e Classe",
    sousTitre: "Concours externe, interne et 3e voie",
    categorie: "Catégorie C",
    filiere: "Filière technique",
    type: "Concours",
    descCourte: "Questions techniques à réponses courtes puis épreuves d'admission par spécialité. Session 2027.",
    seoTitle: "Concours Adjoint Technique Principal Guadeloupe 2027 | Evolutia",
    seoDesc: "Préparez le concours d'adjoint technique principal 2e classe en Guadeloupe : écrit technique + entretien. Inscriptions mai-juin 2027, épreuves nov. 2027.",
    accroche: "Le concours d'adjoint technique principal de 2e classe (catégorie C) recrute les agents qualifiés des services techniques : bâtiment, espaces verts, voirie, restauration, mécanique. Les épreuves privilégient les connaissances techniques concrètes de la spécialité choisie.",
    objectifs: [
      "Permettre aux agents de maîtriser les épreuves écrites et orales de l'examen professionnel.",
      "Renforcer leurs acquis méthodologiques et leurs connaissances administratives et techniques en lien avec leurs missions : méthodologie, rédaction, analyse et expression orale.",
      "Permettre aux agents de comprendre la nature et les attendus des épreuves de l'examen professionnel d'Adjoint Technique Principal de 2e classe.",
      "Développer des compétences rédactionnelles, d'analyse et d'organisation adaptées aux épreuves.",
      "Mettre en situation les participants afin de les préparer efficacement aux conditions réelles de l'examen.",
      "Favoriser la réussite individuelle et collective en créant une dynamique de préparation.",
    ],
    epreuves: [
      { type: "Écrit", label: "Questions techniques à réponses courtes (1h à 2h, coef. 2 à 3)", desc: "Vérification des connaissances techniques de la spécialité, notamment en matière d'hygiène et de sécurité, au moyen de questions à réponses courtes, tableaux ou graphiques à compléter. Selon les sessions, un cas pratique de spécialité peut s'y ajouter (2h, coef. 3)." },
      { type: "Oral", label: "Entretien dans l'option choisie (15 min, coef. 3 à 4)", desc: "Entretien permettant d'apprécier les connaissances, les aptitudes et la motivation. En externe s'ajoute une interrogation orale sur l'hygiène, la sécurité et l'environnement professionnel (15 min, coef. 2)." },
      { type: "Pratique", label: "Épreuve pratique dans l'option (interne et 3e voie, coef. 3)", desc: "Accomplissement d'une ou plusieurs tâches se rapportant à la maîtrise des techniques et instruments de l'option choisie (durée de 1h à 4h selon l'option)." },
    ],
    programme: [
      "Connaissances techniques de la spécialité : révisions ciblées et fiches pratiques",
      "Hygiène et sécurité au travail : réglementation, EPI, gestes et postures",
      "Entraînements aux questions à réponses courtes et aux tableaux à compléter",
      "Préparation de l'épreuve pratique selon l'option (interne / 3e voie)",
      "Simulations d'entretien avec questions techniques types",
      "Environnement professionnel : la collectivité, le service technique, la chaîne hiérarchique",
    ],
    conditions: [
      { voie: "Externe", condition: "Titre ou diplôme de niveau 3 (CAP/BEP) sanctionnant une formation technique et professionnelle dans la spécialité" },
      { voie: "Interne", condition: "Fonctionnaires et agents publics — conditions de services précisées par l'organisateur" },
      { voie: "3e voie", condition: "4 ans au moins d'activités professionnelles dans le domaine, de mandats d'élu local ou de responsabilités associatives" },
    ],
    duree: "50 à 70 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + ateliers pratiques",
    tauxReussite: "100%",
    resultats2026: "16 admis sur 16 candidats",
    color: "#F5A623",
    accent: "#4BADD4",
    datesCles: [
      { label: "Inscriptions (session 2027)", date: "4 mai → 9 juin 2027", statut: "bientot" },
      { label: "Épreuves", date: "25 novembre 2027", statut: "bientot" },
      { label: "Démarrage préparation conseillé", date: "Printemps 2027", statut: "ouvert" },
    ],
    programmeDetaille: {
      objectifs: [
        "Permettre aux agents de maîtriser les épreuves écrites et orales de l'examen professionnel.",
        "Renforcer leurs acquis méthodologiques et leurs connaissances administratives et techniques en lien avec leurs missions : méthodologie, rédaction, analyse et expression orale.",
        "Permettre aux agents de comprendre la nature et les attendus des épreuves de l'examen professionnel d'Adjoint Technique Principal de 2e classe.",
        "Développer des compétences rédactionnelles, d'analyse et d'organisation adaptées aux épreuves.",
        "Mettre en situation les participants afin de les préparer efficacement aux conditions réelles de l'examen.",
        "Favoriser la réussite individuelle et collective en créant une dynamique de préparation.",
      ],
      prerequis: [
        "Voie externe : titre ou diplôme de niveau 3 (CAP/BEP) sanctionnant une formation technique et professionnelle dans la spécialité présentée",
        "Voie interne : être fonctionnaire ou agent public, conditions de services précisées par l'organisateur",
        "3e voie : quatre ans au moins d'activités professionnelles dans le domaine, de mandats d'élu local ou de responsabilités associatives",
        "Pratiquer un métier technique — bâtiment, espaces verts, voirie, restauration, mécanique — support de l'épreuve pratique et de l'entretien",
      ],
      contenuIntro: "La préparation représente 50 à 70 heures, en présentiel avec ateliers pratiques. Les épreuves privilégient les connaissances techniques concrètes de la spécialité choisie plutôt que la rédaction : questions à réponses courtes, tableaux à compléter, épreuve pratique en interne et en 3e voie, entretien d'option.",
      contenu: [
        {
          titre: "Épreuve écrite — questions techniques (1h à 2h, coef. 2 à 3)",
          modules: [
            { titre: "Connaissances techniques de la spécialité", desc: "Révisions ciblées et fiches pratiques sur la spécialité présentée : bâtiment, espaces verts, voirie, restauration, mécanique. Matériels, matériaux, techniques d'intervention et vocabulaire professionnel." },
            { titre: "Hygiène et sécurité au travail", desc: "Réglementation applicable, équipements de protection individuelle, gestes et postures, signalisation de chantier, conduite à tenir en cas d'incident — un axe explicitement évalué." },
            { titre: "Entraînement aux réponses courtes et aux tableaux", desc: "Répondre avec exactitude en peu de mots, compléter un tableau ou un graphique, gérer le temps. Selon les sessions, un cas pratique de spécialité peut s'ajouter (2h, coef. 3) : il est préparé de la même façon." },
          ],
        },
        {
          titre: "Épreuve pratique — voies interne et 3e voie (coef. 3)",
          modules: [
            { titre: "Préparation à l'épreuve pratique selon l'option", desc: "Accomplissement d'une ou plusieurs tâches se rapportant à la maîtrise des techniques et des instruments de l'option, d'une durée d'une à quatre heures selon le cas. Ateliers pratiques en conditions proches de l'épreuve, centrés sur le geste, la méthode et la sécurité." },
          ],
        },
        {
          titre: "Épreuves orales",
          modules: [
            { titre: "Entretien dans l'option choisie (15 min, coef. 3 à 4)", desc: "Connaissances techniques, aptitudes et motivation. Entraînement par questions types de la spécialité, puis simulations devant jury avec débriefing." },
            { titre: "Interrogation orale sur l'hygiène et la sécurité — voie externe (15 min, coef. 2)", desc: "Épreuve supplémentaire pour les candidats externes, portant sur l'hygiène, la sécurité et l'environnement professionnel." },
            { titre: "Environnement professionnel", desc: "La collectivité, l'organisation d'un service technique, la chaîne hiérarchique et la relation aux usagers : les repères que le jury attend d'un agent qualifié." },
          ],
        },
      ],
      moyensEnPlus: [
        "Ateliers pratiques en petit groupe, sur les gestes et les matériels de la spécialité.",
      ],
      suiviEnPlus: [
        "Une dynamique de groupe entretenue d'une séance à l'autre, la préparation collective faisant partie des leviers de réussite",
      ],
    },
    faq: [
      { q: "Quelles spécialités sont proposées au concours ?", a: "Les spécialités classiques : bâtiment et travaux publics, espaces naturels et espaces verts, voirie et réseaux divers, restauration, environnement et hygiène, mécanique et électromécanique, conduite de véhicules… Les spécialités effectivement ouvertes pour la session 2027 seront précisées par l'organisateur à l'ouverture des inscriptions." },
      { q: "Je n'ai pas de CAP, puis-je me présenter ?", a: "En voie externe, un titre de niveau 3 est requis. Mais si vous êtes déjà agent public, la voie interne est ouverte sans condition de diplôme ; et si vous justifiez de 4 ans d'activité professionnelle dans le domaine, la 3e voie est possible." },
      { q: "En quoi consiste l'épreuve pratique ?", a: "Pour les voies interne et 3e voie, l'admission comporte une épreuve pratique dans l'option choisie : réaliser une ou plusieurs tâches concrètes du métier (durée de 1 à 4 heures selon l'option). Le jury évalue les gestes techniques, le respect des consignes de sécurité et l'organisation du travail." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=333",
  },

  "agent-de-maitrise-guadeloupe": {
    titre: "Agent de Maîtrise",
    sousTitre: "Examen professionnel de promotion interne + concours externe, interne et 3e voie",
    categorie: "Catégorie C",
    filiere: "Filière technique",
    type: "Concours + Examen pro.",
    descCourte: "Examen professionnel de promotion interne : cas pratique (2h) + entretien (15 min). Préparation à partir du 4 septembre 2026.",
    seoTitle: "Examen Professionnel et Concours Agent de Maîtrise Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez l'examen professionnel de promotion interne et le concours d'agent de maîtrise territorial en Guadeloupe : cas pratique, entretien, maths. Evolutia, Les Abymes.",
    accroche: "L'agent de maîtrise territorial encadre les équipes techniques des collectivités : espaces verts, bâtiment, voirie. Deux portes y mènent — l'examen professionnel de promotion interne, réservé aux adjoints techniques et aux ATSEM justifiant de sept ans de services effectifs, et le concours, ouvert aux candidats externes comme aux agents publics. Notre préparation couvre les deux voies, dans une session qui démarre le vendredi 4 septembre 2026.",
    epreuves: [
      { type: "Examen pro.", label: "Écrit — Résolution d'un cas pratique (2h, coef. 1)", desc: "À partir d'un dossier comprenant différentes pièces, résolution d'un cas pratique portant sur les missions incombant aux agents de maîtrise territoriaux et notamment sur les missions d'encadrement. L'épreuve est anonyme et fait l'objet d'une double correction. Toute note inférieure à 5/20 est éliminatoire." },
      { type: "Examen pro.", label: "Oral — Entretien avec le jury (15 min, coef. 1)", desc: "Présentation par le candidat de son expérience professionnelle et de ses motivations, suivie d'une conversation avec le jury destinée à apprécier sa personnalité et ses capacités à exercer les missions du cadre d'emplois. Un candidat ne peut être admis si la moyenne de ses deux notes est inférieure à 10/20." },
      { type: "Concours", label: "Externe — Mathématiques (2h, coef. 2) + cas pratique (2h, coef. 3)", desc: "Problèmes d'application sur le programme de mathématiques, puis résolution d'un cas pratique exposé dans un dossier portant sur les problèmes rencontrés par un agent de maîtrise dans la spécialité choisie." },
      { type: "Concours", label: "Interne / 3e voie — Connaissances techniques (2h, coef. 2) + cas pratique (2h, coef. 3)", desc: "Vérification des connaissances techniques, notamment en hygiène et sécurité, au moyen de questionnaires, tableaux ou graphiques (aucune épreuve rédactionnelle), puis résolution d'un cas pratique de spécialité." },
      { type: "Concours", label: "Oral — Entretien avec le jury (15 min, coef. 4)", desc: "Aptitude à s'intégrer dans l'environnement professionnel, motivation, connaissances en hygiène et sécurité, et capacité d'encadrement d'agents de catégorie C. En interne et 3e voie, l'entretien débute par un exposé de 5 minutes sur l'expérience." },
    ],
    programme: [
      "Méthodologie du cas pratique sur dossier : diagnostic, organisation du chantier, propositions opérationnelles",
      "Missions d'encadrement : consignes, planning, contrôle qualité, gestion des situations difficiles",
      "Hygiène et sécurité : réglementation, évaluation des risques, EPI",
      "Construction de l'exposé d'expérience professionnelle et des motivations pour l'entretien",
      "Remise à niveau en mathématiques appliquées pour les candidats au concours externe — programme officiel",
      "Entraînements chronométrés sur annales corrigées et simulations d'entretien avec mise en situation d'encadrement",
    ],
    conditions: [
      { voie: "Examen pro. (promotion interne)", condition: "Adjoints techniques territoriaux ou adjoints techniques des établissements d'enseignement comptant au moins 7 ans de services effectifs dans un ou plusieurs cadres d'emplois techniques" },
      { voie: "Examen pro. — ATSEM", condition: "Agents territoriaux spécialisés des écoles maternelles comptant au moins 7 ans de services effectifs dans leur cadre d'emplois" },
      { voie: "Concours externe", condition: "Deux titres ou diplômes de niveau 3 (CAP/BEP) sanctionnant une formation technique et professionnelle, ou qualifications équivalentes" },
      { voie: "Concours interne", condition: "Fonctionnaires et agents publics — conditions de services précisées par l'organisateur" },
      { voie: "Concours 3e voie", condition: "4 ans au moins d'activités professionnelles, de mandats d'élu local ou de responsabilités associatives" },
    ],
    duree: "60 à 80 heures",
    format: "Présentiel (Grand-Camp, Les Abymes) + ateliers pratiques",
    tauxReussite: "100%",
    resultats2026: "100% de réussite",
    color: "#4BADD4",
    accent: "#1B3A6B",
    datesCles: [
      { label: "Démarrage de la préparation Evolutia", date: "Vendredi 4 septembre 2026", statut: "ouvert" },
      { label: "Inscriptions au concours", date: "1er sept. → 7 oct. 2026", statut: "ouvert" },
      { label: "Épreuves du concours", date: "28 janvier 2027", statut: "bientot" },
    ],
    session: {
      intitule: "Examen professionnel Agent de maîtrise",
      demarrage: "vendredi 4 septembre 2026",
      demarrageISO: "2026-09-04",
      inscription: "ouverte",
    },
    programmeDetaille: {
      publics: "Adjoints techniques territoriaux et ATSEM justifiant d'au moins sept ans de services effectifs, pour l'examen professionnel de promotion interne ; candidats externes titulaires de deux diplômes de niveau CAP/BEP, agents publics et candidats de 3e voie, pour le concours.",
      objectifs: [
        "Analyser un dossier technique en deux heures, en dégager un diagnostic et formuler des propositions concrètes, sous l'angle de l'encadrement d'équipe.",
        "Mobiliser les savoirs professionnels attendus d'un agent de maîtrise : organisation de chantier, planification, contrôle de la qualité du travail réalisé.",
        "Maîtriser la réglementation en hygiène et sécurité, l'évaluation des risques et l'usage des équipements de protection individuelle.",
        "Conduire une équipe : donner des consignes, répartir le travail, traiter les situations difficiles et rendre compte à sa hiérarchie.",
        "Construire un exposé de son expérience professionnelle et de ses motivations, et le soutenir devant un jury.",
        "Pour le concours externe : traiter les problèmes d'application du programme officiel de mathématiques.",
        "Gérer le temps et le stress le jour des épreuves, en tenant compte des notes éliminatoires.",
      ],
      prerequis: [
        "Examen professionnel : être adjoint technique territorial, adjoint technique des établissements d'enseignement ou ATSEM, et justifier d'au moins sept ans de services effectifs — les épreuves peuvent être passées au plus tôt un an avant de remplir cette condition, en étant en activité à la clôture des inscriptions",
        "Concours externe : deux titres ou diplômes de niveau 3 (CAP/BEP) sanctionnant une formation technique et professionnelle, ou qualifications équivalentes",
        "Concours interne et 3e voie : conditions de services publics ou quatre ans d'activité professionnelle, de mandat électif ou de responsabilité associative",
        "Expérience de terrain dans un métier technique, sur laquelle appuyer le cas pratique et l'exposé",
      ],
      tarif: "À partir de 1 890 €",
      contenuIntro: "La préparation représente 60 à 80 heures et couvre les deux voies d'accès dans une même session : l'examen professionnel de promotion interne — cas pratique de 2 heures et entretien de 15 minutes, chacun de coefficient 1 — et le concours, qui ajoute une épreuve de mathématiques en externe, une épreuve de connaissances techniques en interne et 3e voie, et un entretien de coefficient 4. Le cas pratique, commun aux deux voies, occupe la place centrale : c'est l'épreuve la plus éliminatoire.",
      contenu: [
        {
          titre: "Cas pratique sur dossier — tronc commun aux deux voies",
          modules: [
            { titre: "Méthodologie du cas pratique (2h)", desc: "Lecture rapide d'un dossier composé de pièces hétérogènes, identification du problème posé, diagnostic, puis rédaction de propositions opérationnelles. L'épreuve étant anonyme et doublement corrigée, l'entraînement porte aussi sur la lisibilité et la structure de la copie. Toute note inférieure à 5/20 est éliminatoire." },
            { titre: "Missions d'encadrement", desc: "Transmission des consignes, établissement d'un planning, répartition des tâches, contrôle de la qualité, gestion des situations difficiles au sein d'une équipe technique — l'angle attendu par le jury dans le traitement du cas." },
            { titre: "Organisation de chantier", desc: "Préparation et suivi d'une intervention en espaces verts, bâtiment ou voirie : moyens, matériels, délais, coordination avec les autres services de la collectivité." },
          ],
        },
        {
          titre: "Connaissances techniques et mathématiques — concours",
          intro: "Modules suivis selon la voie d'accès : mathématiques pour le concours externe, connaissances techniques pour les voies interne et 3e voie.",
          modules: [
            { titre: "Hygiène et sécurité", desc: "Réglementation applicable aux agents des collectivités, évaluation des risques professionnels, équipements de protection individuelle, conduite à tenir en cas d'accident. Ces connaissances sont vérifiées à l'écrit en interne et en 3e voie, par questionnaires, tableaux ou graphiques, et reviennent à l'entretien." },
            { titre: "Remise à niveau en mathématiques appliquées — voie externe (2h, coef. 2)", desc: "Programme officiel de l'épreuve : arithmétique, géométrie, unités, pourcentages et proportions appliqués à des situations techniques. Module progressif destiné aux candidats externes, pour qui cette épreuve constitue l'obstacle principal." },
          ],
        },
        {
          titre: "Entretien avec le jury",
          modules: [
            { titre: "Construction de l'exposé d'expérience", desc: "Sélection des réalisations à mettre en avant, formulation des motivations, conduite de l'exposé — cinq minutes en interne et 3e voie au concours, présentation libre à l'examen professionnel." },
            { titre: "Simulations d'entretien", desc: "Entretiens blancs de 15 minutes devant un jury professionnel, incluant des mises en situation d'encadrement d'agents de catégorie C, avec bilan individuel. À l'examen professionnel, un candidat ne peut être admis si la moyenne de ses deux notes est inférieure à 10/20 : l'oral rattrape ou condamne l'écrit." },
          ],
        },
      ],
      moyensEnPlus: [
        "Ateliers pratiques en petit groupe, adossés à des situations de chantier réelles.",
        "Entraînements chronométrés sur annales, dans les conditions de durée des épreuves.",
      ],
      suiviEnPlus: [
        "Un point d'étape individuel sur la progression au cas pratique, épreuve la plus éliminatoire",
      ],
    },
    faq: [
      { q: "Quelle différence entre l'examen professionnel et le concours d'agent de maîtrise ?", a: "L'examen professionnel est une voie de promotion interne : il est réservé aux adjoints techniques territoriaux et aux ATSEM justifiant d'au moins 7 ans de services effectifs, et se compose de deux épreuves seulement — un cas pratique de 2 heures et un entretien de 15 minutes, chacun de coefficient 1. Le concours, lui, est ouvert à des candidats extérieurs (avec deux diplômes de niveau CAP/BEP), aux agents publics en interne et à la 3e voie ; il ajoute une épreuve de mathématiques en externe et un entretien de coefficient 4. Réussir l'examen professionnel n'entraîne pas la nomination automatique : il faut ensuite être inscrit sur la liste d'aptitude par votre employeur." },
      { q: "Comment se calculent les 7 ans de services effectifs ?", a: "Ce sont les services accomplis dans un grade ou cadre d'emplois, comptabilisés à partir de la nomination comme stagiaire ou titulaire. Les périodes travaillées en qualité de contractuel ne sont pas prises en compte. Vous pouvez toutefois passer les épreuves au plus tôt un an avant de remplir la condition, et vous devez être en activité à la date de clôture des inscriptions." },
      { q: "Le cas pratique de l'examen professionnel est-il difficile ?", a: "C'est l'épreuve qui élimine le plus : deux heures pour analyser un dossier technique, en tirer un diagnostic et formuler des propositions concrètes, en gardant l'angle de l'encadrement d'équipe. Une note sous 5/20 est éliminatoire. La méthode s'acquiert par des entraînements corrigés — c'est le cœur de notre préparation." },
      { q: "L'épreuve de mathématiques du concours externe est-elle difficile ?", a: "Elle porte sur un programme défini (arithmétique, géométrie, unités, pourcentages appliqués aux situations techniques) et représente le principal obstacle des candidats externes. Une remise à niveau structurée sur 2 à 3 mois suffit généralement — elle est intégrée à notre préparation." },
    ],
    sourceOfficielle: "https://www.concours-territorial.fr/session.aspx?id=331",
  },

  /* ─────────────────────── TOUTES FILIÈRES ─────────────────────── */

  "preparation-oraux-concours-guadeloupe": {
    titre: "Préparation aux Oraux",
    sousTitre: "Toutes catégories — tous concours et examens territoriaux",
    categorie: "Toutes catégories",
    filiere: "Toutes filières",
    type: "Coaching",
    descCourte: "Simulations de jury filmées, débriefing et coaching individuel — pour tout concours ou examen territorial.",
    seoTitle: "Préparation Oraux Concours Territoriaux Guadeloupe 2026-2027 | Evolutia",
    seoDesc: "Préparez les épreuves orales des concours territoriaux en Guadeloupe : simulations de jury filmées, coaching posture et prise de parole. Evolutia, Les Abymes.",
    accroche: "L'oral est souvent l'épreuve décisive qui fait la différence entre deux candidats de même niveau — et pour de nombreux concours médico-sociaux, c'est l'épreuve unique. Nos sessions intensives reproduisent les conditions réelles du jury. En quelques séances, vous transformez votre stress en confiance et votre discours en conviction.",
    epreuves: [
      { type: "Simulation", label: "Jury blanc en conditions réelles", desc: "Entretien filmé reproduisant exactement les conditions du concours visé : durée officielle, composition du jury, exposé initial chronométré. Analyse vidéo post-entretien." },
      { type: "Débriefing", label: "Analyse détaillée fond + forme", desc: "Retour point par point sur le contenu (arguments, connaissances territoriales), la forme (posture, voix, regard), la gestion du temps et l'attitude face aux relances du jury." },
      { type: "Coaching", label: "Séances individuelles de progression", desc: "Travail ciblé sur les points faibles identifiés lors des simulations. Techniques de respiration, ancrage, reformulation, gestion des questions déstabilisantes." },
    ],
    programme: [
      "Techniques de prise de parole en public et gestion du stress avant l'épreuve",
      "Construction d'un exposé de parcours percutant, calibré sur la durée officielle (5 à 10 min)",
      "Réponses aux questions difficiles et déstabilisantes du jury territorial",
      "Langage corporel : posture, regard, gestuelle, voix — travail pratique",
      "Simulations filmées par concours visé (toutes filières, toutes catégories)",
      "Séances de débriefing individuel avec progression mesurée entre chaque simulation",
    ],
    conditions: [
      { voie: "Tous profils", condition: "Candidat(e) à un concours ou examen professionnel territorial, toutes catégories (A, B, C) et toutes filières" },
    ],
    duree: "20 à 40 heures",
    format: "Présentiel exclusivement (Grand-Camp, Les Abymes)",
    tauxReussite: "91%",
    color: "#F5A623",
    accent: "#1B3A6B",
    datesCles: [
      { label: "Concours sur titres (entretien unique)", date: "Sessions en continu toute l'année", statut: "ouvert" },
      { label: "Oraux d'admission après écrits", date: "Dès les résultats d'admissibilité", statut: "ouvert" },
      { label: "Réservation entretien d'orientation", date: "Disponible maintenant", statut: "ouvert" },
    ],
    programmeDetaille: {
      publics: "Candidates et candidats admissibles ou se préparant à l'oral d'un concours ou d'un examen professionnel territorial, toutes catégories (A, B, C) et toutes filières — y compris les concours médico-sociaux dont l'entretien est l'épreuve unique.",
      simulationsFilmees: true,
      objectifs: [
        "Construire un exposé de parcours calibré sur la durée officielle de l'épreuve visée, de cinq à dix minutes, et le tenir sans notes.",
        "Répondre aux questions difficiles et déstabilisantes d'un jury territorial sans perdre le fil ni la posture.",
        "Maîtriser sa communication non verbale : posture, regard, gestuelle, voix, débit.",
        "Gérer le stress avant et pendant l'épreuve, par des techniques de respiration et d'ancrage.",
        "Situer son discours dans l'environnement territorial attendu par le jury du concours présenté.",
        "Mesurer sa progression d'une simulation à l'autre et corriger les points faibles identifiés.",
      ],
      prerequis: [
        "Être candidate ou candidat à un concours ou à un examen professionnel territorial, toutes catégories et toutes filières",
        "Connaître le format officiel de l'épreuve orale visée : durée, composition du jury, temps d'exposé",
      ],
      tarif: "À partir de 890 €",
      contenuIntro: "La préparation représente 20 à 40 heures, exclusivement en présentiel : l'oral ne se travaille pas à distance. Chaque participant est préparé au format exact de son propre concours — durée, composition du jury, temps d'exposé — et alterne simulations filmées et séances de correction individuelle.",
      contenu: [
        {
          titre: "Construire son discours",
          modules: [
            { titre: "Exposé de parcours", desc: "Sélection des éléments à retenir, fil conducteur, articulation et conclusion. L'exposé est calibré sur la durée officielle du concours présenté, de cinq à dix minutes, puis répété jusqu'à être tenu sans notes." },
            { titre: "Ancrage territorial du propos", desc: "Rattacher son parcours aux missions du cadre d'emplois visé et à l'environnement des collectivités : ce que le jury cherche à entendre derrière la présentation." },
            { titre: "Réponses aux questions difficiles", desc: "Questions de mise en difficulté, relances, objections, silences : banque de questions par filière et entraînement à la réponse construite, y compris quand on ne sait pas." },
          ],
        },
        {
          titre: "Travailler sa présence",
          modules: [
            { titre: "Prise de parole en public", desc: "Voix, débit, articulation, silences et respiration : travail pratique individuel et en groupe." },
            { titre: "Langage corporel", desc: "Posture assise, regard vers l'ensemble du jury, gestuelle, entrée et sortie de salle — travaillés en situation, pas en théorie." },
            { titre: "Gestion du stress", desc: "Techniques de respiration et d'ancrage avant l'épreuve, reprise après une question qui déstabilise, gestion du trou de mémoire." },
          ],
        },
        {
          titre: "Simulations et progression",
          modules: [
            { titre: "Jury blanc en conditions réelles", desc: "Entretien filmé reproduisant les conditions du concours visé : durée officielle, composition du jury, exposé initial chronométré." },
            { titre: "Débriefing fond et forme", desc: "Analyse vidéo point par point : contenu et arguments, connaissances territoriales, posture, voix, regard, gestion du temps, attitude face aux relances." },
            { titre: "Séances individuelles de progression", desc: "Travail ciblé sur les points faibles identifiés en simulation, avec une progression mesurée d'une séance à la suivante." },
          ],
        },
      ],
      moyensEnPlus: [
        "Jurys blancs composés de professionnels, dans la configuration du concours présenté.",
      ],
      suivi: [
        "Un bilan individuel après chaque simulation, portant sur le fond et sur la forme",
        "Une progression mesurée d'une simulation à l'autre, sur les points faibles identifiés",
        "Des séances de coaching individuel intercalées entre les jurys blancs",
        "Un dernier point de préparation à l'approche de la date d'oral du candidat",
      ],
    },
    faq: [
      { q: "À quel moment commencer la préparation aux oraux ?", a: "Idéalement dès le début de votre préparation globale — et non après les résultats d'admissibilité. Pour les concours sur titres (sage-femme, puéricultrice, aide-soignant, auxiliaire de puériculture…), l'entretien est l'épreuve unique : la préparation de l'oral EST la préparation du concours." },
      { q: "Combien de simulations sont nécessaires pour progresser ?", a: "En général, 3 à 5 simulations espacées et suivies d'un débriefing approfondi transforment radicalement une prestation. La première simulation est souvent difficile — c'est normal et nécessaire : c'est là que nous identifions précisément ce qu'il faut travailler." },
      { q: "Les simulations sont-elles adaptées à mon concours spécifique ?", a: "Oui. Chaque simulation est calibrée sur votre épreuve : durée officielle, exposé initial (5 ou 10 minutes selon les concours), type de questions. Un jury d'ATSEM ne pose pas les mêmes questions qu'un jury d'ingénieur en chef — nous reproduisons les conditions réelles aussi fidèlement que possible." },
      { q: "La préparation couvre-t-elle les examens professionnels ?", a: "Oui, y compris les entretiens sur dossier (attaché principal, rédacteur principal, classe exceptionnelle des filières sociales…). Le jury ayant lu votre dossier, les questions sont précises et personnelles : nous simulons cet entretien après avoir étudié votre dossier, comme le fera le vrai jury." },
    ],
    sourceOfficielle: "https://www.cdg971.com/fr/concours-examens/calendrier-et-inscription",
  },
};

// Filières lancées en 2026 — affichent un badge « Nouveau » sur tout le site
export const NOUVELLES_FILIERES = ["Filière animation", "Filière médico-sociale"];

export const FORMATIONS_LIST = Object.entries(FORMATIONS).map(([slug, f]) => ({
  slug,
  titre: f.titre,
  categorie: f.categorie,
  filiere: f.filiere,
  type: f.type,
  desc: f.descCourte,
  duree: f.duree,
  taux: f.tauxReussite,
  color: f.color,
  accent: f.accent,
  nouveau: NOUVELLES_FILIERES.includes(f.filiere),
  session: f.session,
}));

// Sessions dont les inscriptions sont ouvertes, de la plus proche à la plus
// lointaine. Alimente le bandeau « Prochaines sessions » (accueil + /formations).
export const SESSIONS_OUVERTES = Object.entries(FORMATIONS)
  .filter(([, f]) => f.session?.inscription === "ouverte")
  .map(([slug, f]) => ({ slug, titre: f.titre, color: f.color, accent: f.accent, ...f.session! }))
  .sort((a, b) => a.demarrageISO.localeCompare(b.demarrageISO));
