# CLAUDE.md - Contexte du Projet Canoopea Web (Refonte Fidèle & Moderne)

Ce fichier fournit toutes les directives d'architecture, de design, de composants et de logique métier pour la refonte du site **Canoopea** ([canoopea.com](https://canoopea.com)).

---

## 1. Identité & Charte Graphique Canoopea

Le design réplique fidèlement la structure, la charte et l'ergonomie visuelle de `canoopea.com` :
- **Vert Officiel Canoopea** : `#249e3f` (utilisé pour la barre supérieure, les badges de réduction, les boutons d'action et les éléments actifs).
- **Orange Prix & Alertes** : `#e65100` / `#e67e00` (utilisé pour les prix de vente, les réductions et le stock).
- **Code couleur par Catégorie de navigation** :
  - **Aquarium** : Bleu roi (`#0066cc`)
  - **Terrarium** : Vert forêt (`#009a22`)
  - **Chien** : Orange vif (`#e67e00`)
  - **Chat** : Rose fuchsia (`#ff6b9d`)
  - **Rongeur** : Violet améthyste (`#9b30ff`)
  - **Oiseaux** : Jaune doré (`#cfa000`)
  - **Nos marques** : Orange chaud (`#e67e00`)
  - **Promo** : Rouge/Orange (`#e67e00`)

---

## 2. Structure de la Navigation (`Navbar.tsx`)

1. **Top Bar** (`#249e3f`) :
   - Réseaux sociaux (Facebook, Instagram, YouTube @GabAqua)
   - Lien « Contactez-nous »
   - Wishlist avec icône cœur (`Wishlist (0)`)
2. **En-tête Principal** :
   - Logo officiel avec feuille recourbée (`/logo.png`)
   - Barre de recherche arrondie en pilule (`bg-[#f4f4f4]`, placeholder : *"Plus de 5000 références pour vos animaux !"*)
   - Compte utilisateur et Panier avec badge vert de notification
3. **Barre de Navigation par Mascottes** :
   - 8 mascottes officielles : Aquarium, Terrarium, Chien, Chat, Rongeur, Oiseaux, Nos marques, Promo
   - Survol ouvrant un **Méga Menu** dynamique avec :
     - Liste latérale des sous-catégories (avec flèche `>`)
     - Coloration de l'onglet actif et des en-têtes selon la couleur de la catégorie
     - Grille de 4 colonnes de liens thématiques
     - Rangée de produits mis en avant en bas du menu
4. **Tiroir Panier latéral (`CartDrawer`)** :
   - Jauge animée pour la livraison offerte : *"Encore 48,62€ pour la livraison gratuite (-7kg) / Seuil 69€"*
   - Détail des articles, sous-total, frais de port, Total TTC et bouton "Commander".

---

## 3. Disposition de la Page d'Accueil (`app/page.tsx`)

La page d'accueil suit l'ordonnancement exact du site :
1. **Hero Banner** (`HeroBanner`) : Carrousel Mondial Relay avec livraison à partir de 3,49€.
2. **Barre de Réassurance** (`Reassurance`) :
   - Expédition en 24/48h (*vroum vroummm* avec le guépard)
   - Boutique Française (*cocoricooo* avec le coq tricolore)
   - Paiement 101% sécurisé (*comme les dalmatiens* avec le coffre)
   - Livraison offerte dès 69€ (*et ouais, rien que ça* avec le pigeon voyageur)
3. **Ruban Défilant Magic UI** (`BrandMarquee`) : Marquee fluide des marques sélectionnées (Oase, Chihiros, Aqua Biotope, Tropica, SuperFish, HabiStat, Platinum, etc.).
4. **Votre animalerie en ligne** (`StoreCategories`) : 3 cartes visuelles grand format (> Décorations, > Plantes, > Jouets).
5. **Nos offres du moment** (`FlashDeals`) : Compte à rebours temps réel (`⏱ 02 j. 08 : 26 : 22`), badges de réduction `-5%`, filtres externes Oase.
6. **Nos coups de cœurs** (`CoupsDeCoeur`) : Sélection Aqua Biotope (Sable de Rivière, Seiryu Stone, Black Lava, Okho Stone).
7. **Univers terrarium** (`TerrariumUniverse`) : Matériel Habistat, colles SuperFish, lampes UVB.
8. **Croquettes pour chiens** (`DogFood`) : Gammes Platinum, Meglium, Primordial et friandises naturelles.
9. **Gab Aqua sur YouTube** (`GabAqua`) : Carte noire aux coins organiques avec la photo de Gab tenant la tortue géante, l'histoire de la communauté et l'appel à l'action "REJOINS-NOUS", sublimée par l'effet **BorderBeam** de Magic UI.
10. **Ils nous ont fait confiance** (`TrustCommunity`) : Partenariats YouTubeurs (Noé La Feinte, Toopet, Dr Nozman) avec leurs biotopes créés sur mesure.
11. **Pied de page** (`Footer`) : Boîte d'inscription newsletter épurée, colonnes Informations, Mon compte, Contactez-nous (`canoopea@gmail.com`).

---

## 4. Composants & Animations Magic UI

- **`Marquee`** (`components/ui/marquee.tsx`) : Défilement infini ultra-fluide avec pause au survol.
- **`BorderBeam`** (`components/ui/border-beam.tsx`) : Rayon lumineux tournant le long de la bordure de la section Gab Aqua.
- **Méga-menus & Tiroir de panier** : Transitions fluides via Tailwind CSS et Framer Motion.

---

## 5. Commandes de Développement

```bash
# Installation des dépendances
npm install

# Démarrer le serveur local (http://localhost:3000)
npm run dev

# Compiler pour la production
npm run build
```

---

## 6. Règles Next.js App Router (Server vs Client Components)

- **Composants Client obligatoires (`"use client";`)** :
  - Tout composant contenant des formulaires interactifs (`<form onSubmit={...}>`), des écouteurs d'événements (`onClick`, `onChange`, `onMouseEnter`, `onMouseLeave`, etc.) ou des hooks React (`useState`, `useEffect`, `useRef`) **doit obligatoirement** comporter `"use client";` tout en haut du fichier.
  - Omettre `"use client";` sur un composant contenant des gestionnaires d'événements provoque l'erreur Next.js : *« Error: Event handlers cannot be passed to Client Component props »*.

