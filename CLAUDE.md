# EVOLUTIA FORMATION — Projet Web

## Contexte
Centre de formation spécialisé préparation concours territoriaux, Guadeloupe.
Localisation : Immeuble ASP, Grand-Camp, Les Abymes 97139.
Contact : 0690 44 73 60 | contact@evolutiaformation.fr
Horaires : Lun-Ven 15h30-18h30.
Taux de réussite 2023 : 85%.

## Stack technique
- Framework : Next.js 16 App Router
- CSS : Tailwind CSS v4
- Déploiement : Vercel
- Langue : Français uniquement

## Architecture (voir /docs/architecture.md)
Site multi-pages : 26 pages. Migration depuis one-page GoHighLevel
vers site Next.js structuré. Voir /docs/architecture.md pour
le plan complet des URLs et contenus.

## Identité visuelle (couleurs du logo)
- Couleur primaire : #1B3A6B (bleu marine)
- Couleur sky : #4BADD4 (bleu ciel / Caraïbe)
- Couleur gold : #F5A623 (or — réussite, validation)
- Fond principal : #F8FAFF
- Texte : #1a2740
- Texte muted : #5a6f8f
- Bordures : #D6E4F0
- Police titre : Playfair Display (serif, autorité)
- Police corps : Inter (lisibilité)

## Règles obligatoires
- JAMAIS de liens vers siboard-consulting.fr dans le contenu
- TOUJOURS inclure les balises meta title + description sur chaque page
- TOUJOURS utiliser les URLs définies dans /docs/architecture.md
- Textes en français, orthographe vérifiée (ancienne faute : "terrotorial")
- Redirection 301 obligatoire pour les 6 URLs listées dans /docs/redirects.md
- Composant CTAButton réutilisable pour tous les CTA

## SEO — Règles de base
- H1 unique par page avec mot-clé principal
- Meta description 150-160 caractères
- Images : attribut alt obligatoire + format WebP
- Canonical tag sur chaque page
- Sitemap XML à générer automatiquement

## Ne jamais faire
- Créer des liens brisés
- Oublier les redirections 301
- Modifier l'architecture des URLs sans validation
- Ignorer la version mobile (mobile-first)
