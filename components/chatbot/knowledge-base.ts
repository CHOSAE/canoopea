export interface ProductRecommendation {
  id: string | number;
  name: string;
  brand: string;
  price: string;
  image: string;
  href: string;
  badge?: string;
  category: "aquarium" | "terrarium" | "chien" | "chat" | "oiseaux" | "rongeur";
  description: string;
}

export const CATALOG: ProductRecommendation[] = [
  // AQUARIUM & HARDSCAPE
  {
    id: "sable-riviere",
    name: "Sable de Rivière PREMIUM 0.2/0.3mm",
    brand: "Aqua Biotope",
    price: "15,50 €",
    image: "/images/sable-de-riviere-premium.png",
    href: "/aquarium",
    badge: "Coup de cœur",
    category: "aquarium",
    description: "Sable naturel extra-fin non coupant, parfait pour poissons de fond et aquascaping biotope.",
  },
  {
    id: "seiryu-stone",
    name: "Seiryu Stone (Roche naturelle)",
    brand: "Aqua Biotope",
    price: "2,50 € / kg",
    image: "/images/seiryu-stone.png",
    href: "/aquarium",
    badge: "Aquascaping",
    category: "aquarium",
    description: "Roche calcaire bleutée texturée idéale pour le style Iwagumi et les paysages rocheux.",
  },
  {
    id: "okho-stone",
    name: "Okho Stone (Dragon Stone)",
    brand: "Aqua Biotope",
    price: "2,38 € / kg",
    image: "/images/okho-stone.png",
    href: "/aquarium",
    badge: "-5%",
    category: "aquarium",
    description: "Roche argileuse alvéolée neutre pour l'eau, parfaite pour fixer mousses et fougères aquatiques.",
  },
  {
    id: "black-lava",
    name: "Black Lava Fusion",
    brand: "Aqua Biotope",
    price: "2,50 € / kg",
    image: "/images/black-lava-fusion.png",
    href: "/aquarium",
    badge: "Poreuse",
    category: "aquarium",
    description: "Roche volcanique noire ultra-poreuse favorisant le développement des bactéries nitrifiantes.",
  },
  {
    id: "racine-corbo",
    name: "Racine Corbo Wood Stump L 40-50cm",
    brand: "Aqua Biotope",
    price: "45,00 €",
    image: "/images/racine-corbo-wood-stump.png",
    href: "/aquarium",
    badge: "Racine naturelle",
    category: "aquarium",
    description: "Bois dense et ramifié qui coule naturellement pour des décors de biotope asiatique ou amazonien.",
  },
  {
    id: "filtre-eden-100",
    name: "Filtre Externe Eden FES 100",
    brand: "Oase",
    price: "75,99 €",
    image: "/images/filtre-externe-eden-fes-100.png",
    href: "/aquarium",
    badge: "Best Seller",
    category: "aquarium",
    description: "Filtration externe silencieuse et performante pour cuves jusqu'à 100-120 litres.",
  },
  {
    id: "filtre-eden-200",
    name: "Filtre Externe Eden FES 200",
    brand: "Oase",
    price: "119,90 €",
    image: "/images/filtre-externe-eden-fes-200.png",
    href: "/aquarium",
    badge: "Grande capacité",
    category: "aquarium",
    description: "Débit puissant et grand volume de masses filtrantes pour aquariums de 100 à 200 litres.",
  },

  // TERRARIUM
  {
    id: "terrarium-habistat",
    name: "Terrarium en verre 60 × 45 × 90 cm",
    brand: "HabiStat",
    price: "285,99 €",
    image: "/images/terrarium-en-verre.png",
    href: "/terrarium",
    badge: "Recommandé",
    category: "terrarium",
    description: "Terrarium arboricole en verre étanche avec ventilation optimisée pour geckos et caméléons.",
  },
  {
    id: "mousse-expansive",
    name: "Mousse expansive pour décor 500ml",
    brand: "SuperFish",
    price: "12,00 €",
    image: "/images/mousse-expansive-pour-aquarium.png",
    href: "/terrarium",
    badge: "Nouveau",
    category: "terrarium",
    description: "Mousse sculptable non toxique idéale pour façonner des parois rocheuses et cascades vivantes.",
  },
  {
    id: "silicone-noir",
    name: "Silicone Fix and Seal Noir 290ml",
    brand: "SuperFish",
    price: "14,00 €",
    image: "/images/silicone-fix-and-seal-noir.png",
    href: "/terrarium",
    badge: "Étanche",
    category: "terrarium",
    description: "Colle silicone 100% sans solvant, totalement sans danger pour poissons, reptiles et amphibiens.",
  },
  {
    id: "lampe-chauffante",
    name: "Lampe Chauffante & UVB Eco 50W",
    brand: "Arcadia / Bird Systems",
    price: "18,99 €",
    image: "/images/lampe-chauffante-eco.png",
    href: "/terrarium",
    badge: "Essentiel",
    category: "terrarium",
    description: "Diffusion simultanée de chaleur infrarouge et rayons UVA/UVB indispensables au métabolisme.",
  },

  // CHIEN
  {
    id: "platinum-poulet",
    name: "Platinum Poulet – Croquettes Semi-Humides Chien",
    brand: "Platinum",
    price: "15,93 €",
    image: "/images/platinium-poulet.png",
    href: "/chien",
    badge: "73% Viande fraîche",
    category: "chien",
    description: "Cuites dans leur propre jus à 95°C sans ajout d'eau. Digestibilité record et haute appétence.",
  },
  {
    id: "meglium-truite",
    name: "Chien Adulte Truite et Riz 14kg",
    brand: "Meglium",
    price: "35,90 €",
    image: "/images/chien-adulte-truite-et-riz.png",
    href: "/chien",
    badge: "Éco Format",
    category: "chien",
    description: "Recette hypoallergénique riche en oméga 3 & 6 pour la santé du pelage et des articulations.",
  },
  {
    id: "primordial-sanglier",
    name: "Mini Adulte Sanglier et Agneau 2kg",
    brand: "Primordial",
    price: "21,66 €",
    image: "/images/mini-adulte-sanglier-et-agneau.png",
    href: "/chien",
    badge: "Sans Céréales",
    category: "chien",
    description: "Alimentation holistique 70% ingrédients animaux et 30% fruits, herbes et légumes sauvages.",
  },
  {
    id: "pattes-poulet",
    name: "Pattes de Poulet Déshydratées Nature x5",
    brand: "Comfy",
    price: "4,50 €",
    image: "/images/pattes-de-poulet-nature-x5.png",
    href: "/chien",
    badge: "100% Naturel",
    category: "chien",
    description: "Friandise de mastication naturelle riche en collagène, nettoyant la plaque dentaire naturellement.",
  },
];

export interface ChatReply {
  text: string;
  clarifications?: string[];
  recommendations?: ProductRecommendation[];
}

export function processUserQuery(query: string, historyLength: number): ChatReply {
  const q = query.toLowerCase().trim();

  // 1. LIVRAISON & FRAIS DE PORT
  if (
    q.includes("livraison") ||
    q.includes("frais de port") ||
    q.includes("mondial relay") ||
    q.includes("délais") ||
    q.includes("delai") ||
    q.includes("combien de temps")
  ) {
    return {
      text: "📦 **Infos Livraison Canoopea :**\n\n• **Frais de port offerts** en point relais Mondial Relay dès **49 €** d'achats !\n• **Expédition express** : vos colis sont préparés et expédiés sous **24 à 48h** depuis la France.\n• Suivi de colis en temps réel disponible dès l'envoi.",
      clarifications: [
        "Quels sont les modes de paiement ?",
        "Comment faire un retour ?",
        "Voir les nouveautés",
      ],
    };
  }

  // 2. RETOURS & GARANTIES
  if (q.includes("retour") || q.includes("remboursement") || q.includes("garantie") || q.includes("sav")) {
    return {
      text: "🛡️ **Garantie & Retours Sérénité :**\n\nVous bénéficiez d'un délai légal de **14 jours** pour nous retourner un article intact dans son emballage d'origine. Notre équipe SAV basée en France est disponible par e-mail pour vous accompagner avec soin.",
      clarifications: ["Contacter le service client", "Suivre ma commande", "Frais de livraison"],
    };
  }

  // 3. QUI EST CANOOPEA / GAB AQUA
  if (q.includes("qui") || q.includes("gab aqua") || q.includes("gabriel") || q.includes("boutique") || q.includes("magasin")) {
    return {
      text: "🌿 **À propos de Canoopea :**\n\nCanoopea est une animalerie en ligne française fondée par des passionnés, en étroite collaboration avec **Gabriel de la chaîne YouTube Gab Aqua** ! Notre mission : proposer les meilleurs équipements, aliments et décors naturels pour le bien-être animal et les biotopes vivants.",
      clarifications: [
        "Voir les produits recommandés par Gab Aqua",
        "Explorer l'univers Aquarium",
        "Explorer l'univers Terrarium",
      ],
    };
  }

  // 4. AQUARIUM & AQUASCAPING
  if (
    q.includes("aquarium") ||
    q.includes("poisson") ||
    q.includes("hardscape") ||
    q.includes("roche") ||
    q.includes("pierre") ||
    q.includes("sable") ||
    q.includes("filtre") ||
    q.includes("eau")
  ) {
    // Cas précis : Filtres
    if (q.includes("filtre") || q.includes("filtration") || q.includes("pompe")) {
      const filters = CATALOG.filter((p) => p.id.toString().includes("filtre"));
      return {
        text: "💧 Pour la filtration de votre aquarium, nous recommandons la gamme **Eden (Oase)** pour son silence absolu et sa fiabilité :",
        recommendations: filters,
        clarifications: [
          "Quel filtre pour un aquarium de 60L ?",
          "Quel filtre pour un aquarium de 120L ?",
          "Quels sables naturels utiliser ?",
        ],
      };
    }

    // Cas précis : Roches & sables (Hardscape)
    if (q.includes("sable") || q.includes("roche") || q.includes("stone") || q.includes("racine") || q.includes("hardscape")) {
      const hardscape = CATALOG.filter(
        (p) =>
          p.category === "aquarium" &&
          (p.id.toString().includes("stone") ||
            p.id.toString().includes("sable") ||
            p.id.toString().includes("racine"))
      );
      return {
        text: "🪨 Voici notre sélection de hardscape naturel **Aqua Biotope** : chaque pierre et racine est triée à la main pour sublimer vos aquascapes.",
        recommendations: hardscape,
        clarifications: [
          "Le sable est-il sans danger pour les poissons de fond ?",
          "Les roches modifient-elles les paramètres d'eau ?",
          "Comment fixer les plantes sur les roches ?",
        ],
      };
    }

    // Question d'orientation / besoin de précision
    return {
      text: "🌊 Vous souhaitez concevoir ou équiper un **aquarium** ! Pour vous conseiller avec exactitude, pouvez-vous me préciser votre projet ?",
      clarifications: [
        "Je cherche du hardscape (sables, roches, racines)",
        "Je cherche un filtre externe silencieux",
        "Je débute en aquariophilie et souhaite être guidé(e)",
      ],
      recommendations: CATALOG.filter((p) => p.category === "aquarium").slice(0, 3),
    };
  }

  // 5. TERRARIUM & PALUDARIUM
  if (
    q.includes("terrarium") ||
    q.includes("reptile") ||
    q.includes("gecko") ||
    q.includes("serpent") ||
    q.includes("tortue") ||
    q.includes("plante") ||
    q.includes("brumisation")
  ) {
    const terraProducts = CATALOG.filter((p) => p.category === "terrarium");
    return {
      text: "🦎 Pour l'univers **Terrariophilie & Paludarium**, nous privilégions la robustesse et la sécurité des animaux avec les marques de référence **HabiStat** et **SuperFish** :",
      recommendations: terraProducts,
      clarifications: [
        "Quel terrarium pour un gecko léopard ?",
        "Comment concevoir un décor avec de la mousse sculptable ?",
        "Quel éclairage UVB choisir ?",
      ],
    };
  }

  // 6. CHIEN & CROQUETTES
  if (
    q.includes("chien") ||
    q.includes("croquette") ||
    q.includes("chiot") ||
    q.includes("nourriture") ||
    q.includes("friandise") ||
    q.includes("mastication")
  ) {
    // Cas précis : Friandises de mastication
    if (q.includes("friandise") || q.includes("mastication") || q.includes("dents") || q.includes("dent")) {
      const treats = CATALOG.filter((p) => p.id === "pattes-poulet");
      return {
        text: "🦴 Pour l'enrichissement et l'hygiène bucco-dentaire, rien ne vaut les friandises naturelles déshydratées sans conservateurs :",
        recommendations: treats,
        clarifications: [
          "Quelles croquettes sans céréales recommandez-vous ?",
          "Croquettes pour chien à digestion sensible ?",
          "Conseils pour chiot en croissance",
        ],
      };
    }

    // Cas général chien : poser des questions de clarification
    const dogProducts = CATALOG.filter((p) => p.category === "chien");
    return {
      text: "🐕 Pour la santé de votre chien, nous sélectionnons des recettes haut de gamme riches en protéines fraîches et hautement digestibles. Quelle est la particularité de votre compagnon ?",
      recommendations: dogProducts,
      clarifications: [
        "Croquettes semi-humides très appétentes (Platinum)",
        "Croquettes sans céréales (Primordial)",
        "Alimentation hypoallergénique au poisson (Meglium)",
      ],
    };
  }

  // 7. CHAT, RONGEUR, OISEAUX
  if (q.includes("chat") || q.includes("felin")) {
    return {
      text: "🐱 Pour votre **chat**, nous proposons une sélection de pâtées et croquettes sans céréales, des litières minérales agglomérantes dépoussiérées et des arbres à chat solides.",
      clarifications: [
        "Voir les promotions du rayon Chat",
        "Délais et frais de livraison",
        "Parler de l'alimentation humide",
      ],
    };
  }

  if (q.includes("oiseau") || q.includes("oiseaux") || q.includes("perruche")) {
    return {
      text: "🦜 Pour vos **oiseaux**, découvrez notre sélection d'éclairage UVB Bird Systems pour synthétiser la vitamine D3, ainsi que nos mélanges de graines premium.",
      clarifications: [
        "Pourquoi un éclairage UVB pour oiseaux ?",
        "Voir le catalogue Oiseaux",
      ],
    };
  }

  if (q.includes("rongeur") || q.includes("lapin") || q.includes("hamster") || q.includes("cochon")) {
    return {
      text: "🐰 Pour vos **rongeurs et lapins**, retrouvez nos foins de montagne bien verts, litières de chanvre dépoussiérées et granulés sans sucres ajoutés.",
      clarifications: [
        "Foin et litières adaptées",
        "Voir le catalogue Rongeurs",
      ],
    };
  }

  // 8. PROMOTIONS & BONS PLANS
  if (q.includes("promo") || q.includes("offre") || q.includes("réduction") || q.includes("rabais") || q.includes("code")) {
    return {
      text: "🔥 **Nos offres du moment :**\n\nRetrouvez nos remises exclusives sur les filtres Eden, le hardscape d'aquariophilie et les croquettes premium sur notre page dédiée aux promotions !",
      recommendations: CATALOG.filter((p) => p.badge),
      clarifications: [
        "Voir toutes les promotions",
        "Livraison gratuite dès 49 €",
      ],
    };
  }

  // 9. REPONSE GENERIQUE BIENVENUE & DEMANDE DE PRECISION
  return {
    text: "Bonjour et bienvenue sur **Canoopea** ! 🌿\n\nJe suis votre conseiller virtuel expert en **aquariophilie, terrariums tropicaux et nutrition animale**. Comment puis-je vous aider aujourd'hui ?",
    clarifications: [
      "Aménager un aquarium naturel",
      "Créer un terrarium tropical",
      "Trouver les meilleures croquettes chien",
      "Modalités de livraison et retours",
    ],
    recommendations: CATALOG.slice(0, 3),
  };
}
