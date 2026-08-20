# Module inscriptions — GHL + convention PDF + Yousign

Ce document décrit le workflow d'inscription piloté par GoHighLevel (GHL,
sous-compte Evolutia, `locationId = O5XCNBuMjjvy7DPbGC6n`) : relances,
génération de la convention de formation, signature électronique.

Basé sur la spécification initiale (voir historique du projet) qui sépare :
- **Partie A** — ce qui est scriptable via l'API GHL (fait, voir ci-dessous).
- **Partie B** — les 3 workflows GHL (triggers/wait/if-else), à construire
  manuellement dans l'UI GHL (`Automations → Workflows`), non scriptables
  via l'API v2.

## État — Partie A (fait)

### Custom fields (contact-level)

| Champ (nom GHL) | fieldKey | Constante (`lib/ghl/fields.ts`) |
|---|---|---|
| Formation choisie | `contact.formation_choisie` | `GHL_FIELD_IDS.formationChoisie` |
| Session choisie | `contact.session_choisie` | `GHL_FIELD_IDS.sessionChoisie` |
| Mode de financement | `contact.mode_de_financement` | `GHL_FIELD_IDS.modeFinancement` |
| Étape du formulaire | `contact.etape_du_formulaire` | `GHL_FIELD_IDS.etapeFormulaire` |
| ID demande signature Yousign | `contact.id_demande_signature_yousign` | `GHL_FIELD_IDS.yousignSignatureRequestId` |
| URL convention PDF | `contact.url_convention_pdf` | `GHL_FIELD_IDS.conventionPdfUrl` |
| URL convention signée PDF | `contact.url_convention_signee_pdf` | `GHL_FIELD_IDS.conventionSigneePdfUrl` |
| Voie concours (inscription) | `contact.voie_concours_inscription` | `GHL_FIELD_IDS.voieConcours` |
| Montant formation | `contact.montant_formation` | `GHL_FIELD_IDS.montantFormation` |
| Acompte versé | `contact.acompte_verse` | `GHL_FIELD_IDS.acompteVerse` |
| Nombre d'échéances | `contact.nombre_echeances` | `GHL_FIELD_IDS.nombreEcheances` |
| Mode de paiement | `contact.mode_de_paiement` | `GHL_FIELD_IDS.modePaiement` |

Les IDs exacts sont dans `lib/ghl/fields.ts`.

⚠️ Le compte GHL avait déjà des champs proches (`Concours`, `Intitulé de la
formation`, `Type de concours`, `Date de la formation`), issus d'un ancien
formulaire de satisfaction post-formation. Ils n'ont pas été réutilisés
(picklist `Concours` incomplète — 7 valeurs sur 22 formations — et pour ne
pas mélanger deux workflows). À nettoyer/fusionner plus tard si besoin.

**Important pour le formulaire GHL (Partie B)** : la valeur du champ
« Formation choisie » doit être exactement l'un des slugs de
`app/formations/data.ts` (ex. `ingenieur-territorial-guadeloupe`), pas le
titre affiché — c'est ce que la route de génération de convention utilise
pour retrouver durée/programme/conditions.

### Tags

`formulaire_demarre`, `formulaire_complete`, `relance_1_envoyee`,
`relance_2_envoyee`, `abandonne`, `convention_signee` — noms dans
`GHL_TAG_NAMES` (`lib/ghl/fields.ts`), ids dans `GHL_TAG_IDS`. L'API contacts
GHL attend des **noms** de tags (`tags: string[]`), pas des ids.

### Pipeline

Le pipeline « Inscriptions » (8 stages : Nouveau lead → Formulaire en cours →
Relancé 1x → Relancé 2x → Formulaire complet → Convention envoyée →
Convention signée → Abandonné) **n'existe pas encore**. Seul « Marketing
Pipeline » (stages génériques) existe dans ce sous-compte. À créer
manuellement dans `Settings → Pipelines`, puis noter les `stageId` pour les
actions « Move to stage » des workflows.

## Générateur de convention PDF

`lib/pdf/convention.ts` — génère la convention pour n'importe laquelle des 22
formations de `app/formations/data.ts` (testé sur les 22).

- **Durée, programme, conditions d'accès (Article 4)** viennent de
  `data.ts` (`duree`, `programme`, `conditions`).
- **Prix, acompte, nombre d'échéances, mode de paiement/financement, voie**
  viennent des custom fields GHL saisis à l'inscription — **pas** d'un
  tarif catalogue dans `data.ts` (aucune grille tarifaire par formation
  n'existait au moment de l'écriture ; à revoir si une grille est formalisée).
- L'échéancier (Article 11) répartit `(montant - acompte) / nombre_echeances`
  à parts égales ; les **dates** de chaque échéance ne sont pas générées
  (à fixer avec le service administratif, comme dans le document source).
- Invariant PDFKit (même piège que sur `new_livret_transmiexpert`) :
  `PDFDocument` construit avec `margin: 0`, mise en page manuelle via
  `checkPageBreak()`. Ne pas ajouter de `doc.addPage()` supplémentaire au
  début — PDFKit crée déjà une première page automatiquement.
- ⚠️ Adresse du siège : le document source (docx reçu) indique « Immeuble
  La Coupole, Grand Camp » — utilisée ici. Le `CLAUDE.md` du repo indique
  « Immeuble ASP, Grand-Camp ». Whichever est correct, à corriger dans
  `EVOLUTIA_ADRESSE` (`lib/pdf/convention.ts`) si besoin.

## Routes API

- `POST /api/inscriptions/generer-convention` — appelée par le Workflow GHL
  2 (« Formulaire complet → génération convention »). Reçoit `{contactId}`
  (ou `contact_id`/`contact.id`), lit les custom fields du contact, génère
  le PDF, l'upload sur Vercel Blob, écrit l'URL dans
  `url_convention_pdf`. Envoie aussi à Yousign **si** `YOUSIGN_API_KEY` est
  configuré (sinon, s'arrête après le PDF non signé).
- `POST /api/webhooks/yousign` — reçoit l'événement `signature_request.done`
  (Workflow GHL 3), télécharge le document signé, l'upload sur Vercel Blob,
  tague le contact `convention_signee` et écrit
  `url_convention_signee_pdf`.

## Ce qui reste bloquant / à faire

1. **Compte Yousign** — pas encore créé (à faire par Jean-Marc, création de
   compte non automatisable). `lib/yousign/client.ts` est un squelette
   **jamais testé contre un vrai payload** — à vérifier/ajuster dès la
   première vraie requête (nom exact des champs, header de signature webhook
   `yousign-signature-256` à confirmer).
2. **Vercel Blob** — la route de génération utilise `@vercel/blob` (`put()`).
   Il faut activer un Blob store sur le projet Vercel `evolutia` pour que
   `BLOB_READ_WRITE_TOKEN` soit injecté automatiquement.
3. **Variables d'environnement à définir sur Vercel** :
   - `GHL_API_TOKEN` — Private Integration Token GHL (ne jamais committer).
   - `YOUSIGN_API_KEY` — une fois le compte créé.
   - `YOUSIGN_WEBHOOK_SECRET` — optionnel, pour vérifier la signature du
     webhook entrant (voir `isValidSignature` dans la route webhook).
4. **Pipeline « Inscriptions »** — à créer manuellement dans GHL.
5. **Les 3 workflows GHL (Partie B)** — à construire manuellement dans
   l'UI GHL (~15-20 min), voir la spec initiale du projet pour le détail
   trigger/wait/if-else de chaque workflow.
6. **Formulaire d'inscription GHL** — le champ « Formation choisie » doit
   poster un des 22 slugs de `data.ts` (voir plus haut).

## Liens d'inscription par session (août 2026)

Quatre sessions de préparation ont ouvert leurs inscriptions. Elles sont
décrites par le champ `session` de `app/formations/data.ts` :

| Formation (slug) | Session | Démarrage |
|---|---|---|
| `agent-de-maitrise-guadeloupe` | Examen professionnel Agent de maîtrise | vendredi 4 septembre 2026 |
| `technicien-territorial-guadeloupe` | Examen professionnel Technicien | mercredi 9 septembre 2026 |
| `ingenieur-territorial-guadeloupe` | Concours Ingénieur | mercredi 25 novembre 2026 |
| `redacteur-territorial-guadeloupe` | Concours Rédacteur | vendredi 27 novembre 2026 |

Le site construit le lien avec `inscriptionUrl(slug, demarrageISO)`
(`app/config.ts`), qui produit :

```
<INSCRIPTION_HOST>/widget/form/102GjFFxUq6b5VHVRUc8
  ?formation_choisie=<slug>&session_choisie=<AAAA-MM-JJ>
```

### Formulaire GHL

`102GjFFxUq6b5VHVRUc8` — « Inscription Evolutia — sessions 2026-2027 ».
Créé par duplication de « Formulaire d'inscription Evolutia_toutes_formations »
(il en hérite le style et les champs Prénom / Nom / Téléphone / Email /
Commentaires / consentement).

⚠️ **Trois réglages restent à faire à la main dans le form builder GHL** — le
canvas est une iframe cross-origin, non automatisable :

1. **Supprimer le champ « Formation souhaitée »**. Il pointe sur le custom field
   `personne_44dp`, dont la picklist est corrompue : « Rédacteur territorrial »,
   « Rédacteur principal » en double, « Adjoint administratif
   principRédacteur principalal de 2eme classe », « Option 7 ». Ce même champ
   sert le formulaire de la page d'accueil (`n4T5zoDr0V95hQloBneb`) : la
   corriger dans `Paramètres → Champs personnalisés` répare les deux.
2. **Ajouter deux champs cachés** (`Ajouter des champs d'objet` → Contact) :
   `Formation choisie` (`contact.formation_choisie`) et `Session choisie`
   (`contact.session_choisie`), tous deux en *hidden*. C'est ce qui rend le
   préremplissage par URL effectif et ce que relit
   `/api/inscriptions/generer-convention`. Tant qu'ils sont absents, les
   paramètres d'URL sont ignorés — le lien fonctionne, mais la formation n'est
   pas tracée.
3. **Ajouter les deux listes déroulantes existantes** `Voie concours
   (inscription)` et `Mode de financement`, et renommer le bouton en
   « Je m'inscris ».

### Domaine

`INSCRIPTION_HOST` sert aujourd'hui `https://api.leadconnectorhq.com`.
Cible : `https://inscription.evolutiaformation.fr`, à activer en trois temps :

1. GHL → `Paramètres → Domaines → Connecter un domaine`, saisir
   `inscription.evolutiaformation.fr` et relever le CNAME affiché.
2. Poser ce CNAME chez Hostinger (le DNS d'`evolutiaformation.fr` y est géré).
   Ne pas toucher aux enregistrements de `www`, qui pointent sur Vercel.
3. Basculer `INSCRIPTION_HOST` dans `app/config.ts`.

Ne jamais utiliser `link.siboard-consulting.fr` pour un lien visible par un
candidat (règle du `CLAUDE.md`).
