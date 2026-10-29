# Assistant virtuel (chat)

Agent GHL **Léa - Conseillère Evolutia** (Conversation AI, sous-compte Evolutia), branché sur le widget
« Chat Evolutia » (`CHAT_WIDGET_ID` dans `app/config.ts`). Base de connaissances « Evolutia - Base 2026 »
(site indexé + FAQ + guide d'orientation généré depuis `app/formations/data.ts`).

## Mise en ligne (dans cet ordre)
1. GHL → Agents IA → Conversation AI → Léa → **Mode : Pilote automatique** (sinon la bulle s'affiche sans réponse).
2. Faire une vraie réservation de test via la bulle (le panneau « Tester votre agent » ne réserve pas).
3. Vercel → projet `evolutia` → Environment Variables → `NEXT_PUBLIC_CHAT_WIDGET` = `on` (Production), puis redéployer.

## Retour arrière
- Rapide : retirer `NEXT_PUBLIC_CHAT_WIDGET` (ou la passer à `off`) et redéployer : la bulle disparaît.
- Immédiat côté GHL : repasser le mode de Léa à « Désactivé ».

## Règles que Léa suit (à ne pas contredire dans la base de connaissances)
- Aucun prix, aucune promesse de financement ou de CPF, aucun taux global. Résultats : uniquement ceux publiés sur la fiche.
- Ces règles existent parce que `/financement-tarifs` n'est pas encore fiable (éligibilité CPF affirmée pour toutes les
  formations, prix « à partir de » différents des fiches). Les lever une fois la page corrigée.

## Entretien
- Le guide d'orientation est généré depuis `app/formations/data.ts` : le régénérer et le recoller dans la base GHL
  quand une formation, une condition d'accès ou une session ouverte change.
- Le widget n'est pas chargé sur `/interne` ni `/inscription` (voir `CHAT_WIDGET_EXCLUDED_PREFIXES`).
