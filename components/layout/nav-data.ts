export interface MegaMenuItem {
  title: string;
  links: string[];
}

export interface MegaMenuFeaturedProduct {
  name: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  badgeColor?: "red" | "green" | "orange";
  image?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  sections: MegaMenuItem[];
  featuredProducts?: MegaMenuFeaturedProduct[];
}

export interface Category {
  id: string;
  name: string;
  mascot: string;
  themeColor: string;
  accentBg: string;
  accentText: string;
  href: string;
  subcategories?: SubCategory[];
}

export const NAVIGATION_CATEGORIES: Category[] = [
  {
    id: "aquarium",
    name: "Aquarium",
    mascot: "/icons/mascot-aquarium.png",
    themeColor: "#0066cc",
    accentBg: "bg-[#0066cc]",
    accentText: "text-[#0066cc]",
    href: "/aquarium",
    subcategories: [
      {
        id: "decoration",
        name: "Décoration",
        sections: [
          {
            title: "RACINES",
            links: [
              "Moyennes et grandes racines",
              "Racines nano",
              "Box de racines",
              "Racines sur sélection photo",
            ],
          },
          {
            title: "ROCHES",
            links: [
              "Galets et pierres",
              "Roches d'aquascaping",
              "Box de roches",
            ],
          },
          {
            title: "SABLES ET SUBSTRATS",
            links: [
              "Sables et graviers",
              "Sables fins",
              "Sols techniques",
              "Sols pour crevettes",
              "Sols nutritifs",
            ],
          },
          {
            title: "PRODUITS NATURELS",
            links: [
              "Kits biotope",
              "Gousses naturelles",
              "Feuilles naturelles et litières",
              "Coquilles pour poissons",
            ],
          },
          {
            title: "DÉCORS PAR BIOTOPES",
            links: [
              "Biotope asiatique",
              "Biotope amazonien",
              "Biotope africain",
              "Biotope australo-guinéen",
            ],
          },
          {
            title: "CAVES ET CACHETTES",
            links: [
              "Caves pour Loricariidae",
              "Cachettes pour crevettes",
            ],
          },
        ],
        featuredProducts: [
          { name: "Sable de Rivière PREMIUM 0.2/0.3mm", price: "15,50 €" },
          { name: "Master Soil Next 8L Black", price: "27,92 €", oldPrice: "34,90 €", badge: "-20%", badgeColor: "green" },
          { name: "Kit Biotope Amazonien", price: "19,90 €" },
          { name: "Seiryu Stone", price: "2,50 €" },
          { name: "SpiderWood 26-30cm", price: "12,90 €", badge: "Rupture de stock", badgeColor: "orange" },
        ],
      },
      {
        id: "materiel",
        name: "Matériel",
        sections: [
          {
            title: "FILTRATION",
            links: [
              "Filtres externes",
              "Filtres internes",
              "Accessoires de filtration",
              "Filtres UV",
              "Pompes à eau",
            ],
          },
          {
            title: "ÉCLAIRAGE",
            links: [
              "0 à 30 cm",
              "30 à 60 cm",
              "60 à 90 cm",
              "90 à 120 cm",
              "120 cm et plus",
              "Accessoires d'éclairage",
              "Marques",
            ],
          },
          {
            title: "CHAUFFAGE",
            links: [
              "Chauffages",
              "Chauffages externes",
              "Thermomètres",
              "Protections pour chauffage",
            ],
          },
          {
            title: "CO2",
            links: [
              "Kits CO2",
              "Bouteilles CO2",
              "Diffuseurs CO2",
              "Accessoires CO2",
            ],
          },
          {
            title: "OSMOSEUR",
            links: [
              "Osmoseurs",
              "Cartouches et membranes",
              "Accessoires pour osmoseurs",
            ],
          },
          {
            title: "AÉRATION",
            links: [
              "Pompes à air",
              "Diffuseurs à air",
              "Compresseurs",
              "Accessoires pompes à air",
            ],
          },
          {
            title: "ACCESSOIRES",
            links: [
              "Pinces et ciseaux",
              "Épuisettes",
              "Tapis pour aquarium",
              "Sacs à poissons",
              "Colles et silicones",
              "Posters de fond",
              "Accessoires de reproduction",
              "Accessoires divers",
            ],
          },
          {
            title: "ENTRETIEN",
            links: ["Raclettes et aimants", "Aspirateurs de gravier", "Tuyaux"],
          },
        ],
      },
      {
        id: "plantes",
        name: "Plantes",
        sections: [
          {
            title: "POSITIONNEMENT",
            links: [
              "Plantes de premier plan",
              "Plantes de second plan",
              "Plantes d'arrière plan",
              "Plantes flottantes",
              "Plantes épiphytes",
              "Plantes faciles",
              "Tapis de plantes",
            ],
          },
          {
            title: "CONDITIONNEMENT",
            links: [
              "Plantes en pot",
              "Plantes in vitro",
              "Plantes en bulbe",
              "Plantes XL et XXL (pieds mères)",
              "Plantes sur racines et support",
            ],
          },
          {
            title: "ORIGINE",
            links: [
              "Plantes amazoniennes",
              "Plantes asiatiques",
              "Plantes africaines",
              "Plantes australo-guinéennes",
            ],
          },
          {
            title: "ENGRAIS",
            links: ["Engrais liquides", "Engrais solides"],
          },
        ],
        featuredProducts: [
          { name: "Anubias barteri 'Mini Coin' - In Vitro Tropica", price: "9,10 €" },
          { name: "Bucephalandra sp. 'Kedagang' - Tropica", price: "9,10 €", badge: "Rupture de stock", badgeColor: "orange" },
          { name: "Hygrophila pinnatifida - In Vitro Tropica", price: "6,45 €", badge: "Rupture de stock", badgeColor: "orange" },
          { name: "Anubias barteri var. barteri", price: "6,60 €" },
          { name: "ProFito Fertilisant - Easy-Life", price: "5,79 €" },
        ],
      },
      {
        id: "aquariums",
        name: "Aquariums",
        sections: [
          {
            title: "AQUARIUMS PAR TYPE",
            links: [
              "Cuves nues",
              "Aquariums tout équipés",
              "Aquariums pour crevettes",
              "Nano aquariums",
              "Aquariums d'eau de mer",
              "Meubles pour aquarium",
            ],
          },
          {
            title: "AQUARIUMS PAR VOLUME",
            links: ["Moins de 60 litres", "60 à 100 litres", "Plus de 100 litres"],
          },
          {
            title: "AQUARIUMS PAR MARQUE",
            links: [
              "Aquariums SuperFish",
              "Aquariums Aquael",
              "Aquariums Blue Marine",
              "Aquariums Juwel",
              "Aquariums Me",
            ],
          },
        ],
        featuredProducts: [
          { name: "Aquael OptiBent Set 30 Noir", price: "139,00 €", badge: "Rupture de stock", badgeColor: "orange" },
          { name: "Kit Aquarium Start 30L - Me My Tank", price: "129,99 €" },
          { name: "Aquael AQUARIUM SET - OPTI SET 240 2.0", price: "399,00 €" },
          { name: "Aquael CABINET UltraScape 60 Snow et Forest", price: "245,00 €" },
          { name: "Aquarium Trigon 350 Litres Led - Juwel", price: "1050,00 €" },
        ],
      },
      {
        id: "nourriture",
        name: "Nourriture",
        sections: [
          {
            title: "NOURRITURE PAR ESPÈCE",
            links: [
              "Nourriture crevettes",
              "Nourriture poissons combattants",
              "Nourriture poissons rouges",
              "Nourriture cichlidés",
              "Nourriture poissons de fond",
              "Nourriture discus",
              "Nourriture alevins",
              "Nourriture axolotls",
              "Nourriture poissons prédateurs",
              "Nourriture poissons marins",
            ],
          },
          {
            title: "NOURRITURE PAR MARQUE",
            links: [
              "Biofish Food",
              "Hikari",
              "Colombo",
              "StreamBiz",
              "Aquarium Systems",
              "Hobby",
              "GlasGarten",
              "Repashy",
            ],
          },
          {
            title: "ACCESSOIRES DE NOURRISSAGE",
            links: ["Distributeurs de nourriture", "Élevage d'artémias"],
          },
        ],
      },
      {
        id: "analyse",
        name: "Analyse et traitements",
        sections: [
          {
            title: "TESTS D'EAU",
            links: ["Tests en gouttes", "Tests en bandelettes", "Tests électroniques"],
          },
          {
            title: "DÉMARRER UN AQUARIUM",
            links: ["Bactéries vivantes", "Conditionneurs d'eau"],
          },
          {
            title: "ENGRAIS",
            links: ["Engrais liquides", "Engrais solides"],
          },
          {
            title: "TRAITEMENTS DE L'EAU",
            links: [
              "Produits anti-algues",
              "Produits anti-escargots",
              "Coloration d'eau (Black Water)",
              "Sels reminéralisants",
              "Baisse du pH",
              "Produits anti-nitrates",
              "Compléments de l'eau",
            ],
          },
          {
            title: "TRAITEMENTS DES POISSONS",
            links: [
              "Médicaments pour poissons",
              "Traitements des points blancs",
              "Traitements antibactériens",
            ],
          },
        ],
      },
      {
        id: "eaudemer",
        name: "Eau de mer",
        sections: [
          {
            title: "MATÉRIEL",
            links: [
              "Pompes de remontée",
              "Pompes de brassage",
              "Écumeurs",
              "Éclairages récifaux",
              "Pompes doseuses",
              "Accessoires pompes doseuses",
              "Osmolateurs",
              "Accessoires de filtration",
              "Accessoires pour coraux",
            ],
          },
          {
            title: "SUBSTRATS ET SELS",
            links: ["Substrats eau de mer", "Sels marins"],
          },
          {
            title: "DÉCORATIONS",
            links: ["Roches récifales"],
          },
          {
            title: "TRAITEMENTS DE L'EAU",
            links: ["Tests d'eau", "Traitements de l'eau", "Additifs eau de mer"],
          },
        ],
      },
      {
        id: "bassins",
        name: "Bassins",
        sections: [
          {
            title: "FILTRATION",
            links: [
              "Kits de filtration",
              "Filtres sous pression (pompage)",
              "Filtres gravitaires",
              "Filtres immergés",
              "Skimmers",
              "Masses filtrantes biologiques",
              "Masses filtrantes mécaniques",
              "Filtres UV",
            ],
          },
          {
            title: "MATÉRIEL",
            links: [
              "Pompes de remontée",
              "Compresseurs et aérateurs",
              "Distributeurs de nourriture",
              "Pompes fontaines",
              "Aspirateurs de bassin",
              "Accessoires",
            ],
          },
          {
            title: "CONSTRUCTION",
            links: [
              "Bâches et feutrines",
              "Colles et mousses expansives",
              "Bassins préformés",
              "Tuyaux PVC",
              "Accessoires PVC",
            ],
          },
          {
            title: "PLANTES",
            links: [
              "Plantes oxygénantes",
              "Plantes immergées",
              "Plantes de rive et de berge",
              "Plantes flottantes",
              "Substrats et engrais",
              "Accessoires de plantation",
            ],
          },
        ],
      },
      {
        id: "poissons",
        name: "Poissons et invertébrés",
        sections: [
          {
            title: "POISSONS D'EAU DOUCE",
            links: [
              "Cichlidés",
              "Poissons combattants (Betta)",
              "Characidés",
              "Silures et poissons de fond",
              "Vivipares (Guppy, Platy)",
            ],
          },
          {
            title: "INVERTÉBRÉS",
            links: ["Crevettes Neocaridina", "Crevettes Caridina", "Escargots néritina & clithon"],
          },
        ],
      },
    ],
  },
  {
    id: "terrarium",
    name: "Terrarium",
    mascot: "/icons/mascot-terrarium.png",
    themeColor: "#009a22",
    accentBg: "bg-[#009a22]",
    accentText: "text-[#009a22]",
    href: "/terrarium",
    subcategories: [
      {
        id: "terradeco",
        name: "Décoration et aménagement",
        sections: [
          {
            title: "SUBSTRATS",
            links: [
              "Substrats tropicaux",
              "Substrats désertiques",
              "Substrats en copeaux de bois",
              "Autres substrats",
            ],
          },
          {
            title: "PRODUITS NATURELS",
            links: [
              "Sphaignes et mousses",
              "Litières de feuilles",
              "Gousses",
              "Kits biotope",
            ],
          },
          {
            title: "RACINES",
            links: [
              "Moyennes et grandes racines",
              "Box de racines",
              "Racines nano",
              "Racines sur sélection photo",
              "Liège branches et tubes",
            ],
          },
          {
            title: "CACHETTES",
            links: ["Cachettes artificielles", "Cachettes naturelles"],
          },
          {
            title: "ROCHES",
            links: ["Roches", "Galets", "Box de roches"],
          },
          {
            title: "TERRASCAPING",
            links: [
              "Colles et silicones",
              "Mousses expansives",
              "Fonds pour terrarium",
              "Plantes artificielles",
            ],
          },
        ],
        featuredProducts: [
          { name: "Substrat bioactif Jungle Bio - HabiStat", price: "14,90 €" },
          { name: "Mousse expansive pour décor SuperFish", price: "12,00 €" },
          { name: "Sphaigne Moss 100G - Repto", price: "6,90 €" },
          { name: "Racine Corbo Wood", price: "45,00 €" },
          { name: "Kit Grenouilles Dendrobates Biotope", price: "24,90 €" },
        ],
      },
      {
        id: "terramateriel",
        name: "Matériel",
        sections: [
          {
            title: "CHAUFFAGE",
            links: [
              "Tapis chauffants",
              "Thermostats",
              "Ampoules chauffantes",
              "Dômes et suspensions",
              "Câbles chauffants",
              "Plafonds chauffants",
              "Thermomètres et hygromètres",
            ],
          },
          {
            title: "ÉCLAIRAGE",
            links: [
              "Rampes LED",
              "Lampes UVA-UVB",
              "Spots LED",
              "Accessoires d'éclairage",
            ],
          },
          {
            title: "HUMIDIFICATION",
            links: [
              "Humidification automatique",
              "Arrosage manuel",
              "Ventilation",
            ],
          },
          {
            title: "ACCESSOIRES",
            links: [
              "Crochets à serpent",
              "Pinces",
              "Incubation",
              "Transport",
              "Soins des reptiles",
              "Accessoires divers",
            ],
          },
        ],
        featuredProducts: [
          { name: "Lampe Chauffante Eco Halogen Blanc", price: "18,99 €" },
          { name: "Tapis chauffant carbone - HabiStat", price: "18,99 €" },
          { name: "Rainmaker 8500 - Repto", price: "149,99 €" },
          { name: "Tweezer Bamboo 28Cm - Repto", price: "3,49 €" },
          { name: "Pro T5 Uvb Kit Forest 6% - Arcadia", price: "96,99 €" },
        ],
      },
      {
        id: "terranourriture",
        name: "Nourriture",
        sections: [
          {
            title: "NOURRITURE PAR ESPÈCE",
            links: [
              "Nourriture geckos",
              "Nourriture pogonas",
              "Nourriture amphibiens",
              "Nourriture iguanes",
              "Nourriture tortues",
            ],
          },
          {
            title: "INSECTES",
            links: ["Insectes vivants", "Nourriture pour insectes"],
          },
          {
            title: "COMPLÉMENTS ALIMENTAIRES",
            links: ["Vitamines", "Calcium"],
          },
          {
            title: "GAMELLES",
            links: ["Gamelles pour terrarium", "Distributeurs pour terrarium"],
          },
          {
            title: "NOURRITURE PAR MARQUE",
            links: [
              "Repashy",
              "Hikari",
              "Repto",
              "HabiStat",
              "Arcadia",
              "Reptile Systems",
            ],
          },
        ],
      },
      {
        id: "terrariums-sub",
        name: "Terrariums",
        sections: [
          {
            title: "TERRARIUMS PAR TAILLE",
            links: ["Moins de 60 cm", "60 à 100 cm", "Plus de 100 cm"],
          },
          {
            title: "TERRARIUMS PAR TYPE",
            links: [
              "Terrariums en kit",
              "Terrariums montés",
              "Habitats pour tortues",
              "Terrariums pour invertébrés",
            ],
          },
          {
            title: "TERRARIUMS PAR MARQUE",
            links: ["HabiStat", "Repto"],
          },
          {
            title: "ACCESSOIRES DE TERRARIUM",
            links: [
              "Cadenas",
              "Meubles pour terrarium",
              "Réhausses pour terrarium",
              "Accessoires divers",
            ],
          },
        ],
      },
      {
        id: "terraplantes",
        name: "Plantes",
        sections: [
          {
            title: "PLANTES TROPICALES",
            links: [
              "Plantes épiphytes",
              "Plantes carnivores",
              "Plantes grimpantes",
            ],
          },
          {
            title: "MOUSSES",
            links: ["Mousse de Java", "Autres mousses"],
          },
        ],
      },
    ],
  },
  {
    id: "chien",
    name: "Chien",
    mascot: "/icons/mascot-chien.png",
    themeColor: "#e67e00",
    accentBg: "bg-[#e67e00]",
    accentText: "text-[#e67e00]",
    href: "/chien",
    subcategories: [
      {
        id: "chienalim",
        name: "Alimentation",
        sections: [
          {
            title: "CROQUETTES",
            links: [
              "Chiots",
              "Petits chiens",
              "Moyens et grands chiens",
              "Sans céréales",
              "Chiens stérilisés",
            ],
          },
          {
            title: "PAR MARQUE",
            links: ["Platinum", "Primordial", "Meglium", "Comfy"],
          },
          {
            title: "FRIANDISES",
            links: [
              "Mastication",
              "Biscuits",
              "Friandises dentaires",
              "Friandise Naturelle",
              "Toute les Friandises",
            ],
          },
          {
            title: "ACCESSOIRES DE NOURRISSAGE",
            links: ["Gamelles", "Gamelles de voyage", "Distributeurs"],
          },
        ],
        featuredProducts: [
          { name: "Platinum Poulet - Adulte Chien", price: "15,93 €" },
          { name: "Pattes de poulet nature x5 - Comfy", price: "2,90 €" },
          { name: "Chien Adulte Truite et Riz - Meglium 14kg", price: "35,90 €" },
          { name: "Gourde à Bol Intégré - Kurgo", price: "13,90 €" },
          { name: "Os à Mâcher Goût Bacon 'Wishbone' - Benebone", price: "16,49 €" },
        ],
      },
      {
        id: "chienequip",
        name: "Équipement",
        sections: [
          {
            title: "JOUETS",
            links: [
              "Peluches",
              "Jouets à lancer",
              "Jouets à mâcher",
              "Jouets de réflexion",
              "Jouets à tirer",
            ],
          },
          {
            title: "PROMENADE",
            links: [
              "Colliers",
              "Harnais",
              "Laisses",
              "Vêtements",
              "Sacs à crottes",
              "Sacs à friandises",
            ],
          },
          {
            title: "NICHES ET PANIERS",
            links: ["Coussins", "Paniers", "Niches d'extérieur"],
          },
          {
            title: "TRANSPORT",
            links: [
              "Accessoires voiture",
              "Cages de transport",
              "Sacs de transport",
            ],
          },
          {
            title: "SPORTS CANINS",
            links: ["Canicross", "CaniVTT", "Agility"],
          },
          {
            title: "ÉDUCATION",
            links: [
              "Clickers et sifflets",
              "Laisses et harnais d'éducation",
              "Muselières",
            ],
          },
          {
            title: "CHATIÈRES POUR CHIENS",
            links: ["Chatières manuelles", "Chatières automatiques"],
          },
        ],
      },
      {
        id: "chiensoins",
        name: "Soins du chien",
        sections: [
          {
            title: "TOILETTAGE",
            links: [
              "Ciseaux",
              "Tondeuses",
              "Brosses",
              "Shampoings",
              "Coupe-griffes",
              "Accessoires de toilettage",
            ],
          },
          {
            title: "HYGIÈNE",
            links: ["Sacs à crottes", "Alèses et tapis", "Accessoires d'hygiène divers"],
          },
        ],
      },
    ],
  },
  {
    id: "chat",
    name: "Chat",
    mascot: "/icons/mascot-chat.png",
    themeColor: "#ff6b9d",
    accentBg: "bg-[#ff6b9d]",
    accentText: "text-[#ff6b9d]",
    href: "/chat",
    subcategories: [
      {
        id: "chatalim",
        name: "Alimentation",
        sections: [
          {
            title: "CROQUETTES",
            links: [
              "Chatons",
              "Chats adultes",
              "Chats stérilisés",
              "Sans céréales",
              "Chats sensibles",
            ],
          },
          {
            title: "PAR MARQUE",
            links: ["Primordial", "Platinum", "Comfy"],
          },
          {
            title: "FRIANDISES",
            links: [
              "Herbes à chat",
              "Bâtonnets",
              "Friandises naturelles",
              "Topping",
            ],
          },
          {
            title: "ACCESSOIRES DE NOURRISSAGE",
            links: ["Gamelles", "Fontaines à eau", "Distributeurs"],
          },
        ],
        featuredProducts: [
          { name: "Platinum MeatCrisp stérilisé Poulet - Adulte Chat", price: "7,13 €" },
          { name: "Bâtonnets de Friandises Filets Poulet - Comfy", price: "2,40 €" },
          { name: "Herbe à Chats Bio pot 10,5cm", price: "2,90 €" },
          { name: "Gamelle Plate Chat 16Cm Orange", price: "11,57 €" },
          { name: "Platinum MeatCrisp Poisson Adulte", price: "7,63 €" },
        ],
      },
      {
        id: "chatequip",
        name: "Équipement",
        sections: [
          {
            title: "JOUETS",
            links: ["Cannes à pêche", "Balles", "Jouets de réflexion"],
          },
          {
            title: "NICHES ET PANIERS",
            links: ["Paniers", "Coussins", "Niches"],
          },
          {
            title: "LITIÈRES",
            links: [
              "Litières",
              "Bacs à litière",
              "Litières automatiques",
              "Entretien de la litière",
            ],
          },
          {
            title: "ARBRES À CHAT",
            links: [
              "Arbres à chat mini",
              "Arbres à chat medium",
              "Arbres à chat XXL",
              "Griffoirs",
            ],
          },
          {
            title: "CHATIÈRES",
            links: ["Chatières manuelles", "Chatières automatiques"],
          },
          {
            title: "TRANSPORT",
            links: [
              "Colliers",
              "Harnais",
              "Laisses",
              "Cages de transport",
              "Sacs de transport",
            ],
          },
        ],
      },
      {
        id: "chatsoins",
        name: "Soins du chat",
        sections: [
          {
            title: "TOILETTAGE",
            links: [
              "Ciseaux",
              "Tondeuses",
              "Brosses",
              "Shampoings",
              "Coupe-griffes",
              "Accessoires de toilettage",
              "Soins divers",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "rongeur",
    name: "Rongeur",
    mascot: "/icons/mascot-rongeur.png",
    themeColor: "#9b30ff",
    accentBg: "bg-[#9b30ff]",
    accentText: "text-[#9b30ff]",
    href: "/rongeur",
    subcategories: [
      {
        id: "rongeurequip",
        name: "Équipement",
        sections: [
          {
            title: "ALIMENTATION",
            links: ["Nourriture", "Friandises", "Foin et paille"],
          },
          {
            title: "ACCESSOIRES",
            links: ["Cages", "Litières"],
          },
        ],
        featuredProducts: [
          { name: "Copeaux de Bois 14 L - Comfy", price: "1,96 €" },
          { name: "Menu Med Parr Nuts 90g - Comfy", price: "2,01 €" },
          { name: "Sticks Rongeurs & Lapins Légumes 90g", price: "2,12 €" },
          { name: "Maison D'Angle 1 - Comfy", price: "4,96 €" },
          { name: "Litière Cornelius Myrtille 25 L - Comfy", price: "20,54 €" },
        ],
      },
    ],
  },
  {
    id: "oiseaux",
    name: "Oiseaux",
    mascot: "/icons/mascot-oiseaux.png",
    themeColor: "#cfa000",
    accentBg: "bg-[#cfa000]",
    accentText: "text-[#cfa000]",
    href: "/oiseaux",
    subcategories: [
      {
        id: "oiseauxequip",
        name: "Équipement",
        sections: [
          {
            title: "ALIMENTATION",
            links: ["Friandises", "Millets"],
          },
          {
            title: "ACCESSOIRES DE CAGE",
            links: ["Lampes UV", "Chauffage"],
          },
        ],
        featuredProducts: [
          { name: "Menu Budg. Comp. Food 500G - Comfy", price: "2,58 €" },
          { name: "Menu Budgerigar Sticks Fruit 90G - Comfy", price: "2,01 €" },
          { name: "MILLET Rouge BIO 10 Brins - Origine France", price: "5,99 €" },
          { name: "Compact Lamp Unit Single - Reptile Systems", price: "69,99 €" },
          { name: "Lampe UV Compact 3U Zone 1 - Bird Systems", price: "39,99 €" },
        ],
      },
    ],
  },
  {
    id: "nos-marques",
    name: "Nos marques",
    mascot: "/icons/mascot-nos-marques.png",
    themeColor: "#e67e00",
    accentBg: "bg-[#e67e00]",
    accentText: "text-[#e67e00]",
    href: "/nos-marques",
    subcategories: [
      {
        id: "aquabiotope",
        name: "Aqua Biotope",
        sections: [
          {
            title: "PRODUITS NATURELS",
            links: [
              "Kits biotope",
              "Gousses naturelles",
              "Feuilles naturelles et litières",
              "Coquilles pour poissons",
            ],
          },
          {
            title: "SABLES ET SUBSTRATS",
            links: ["Sable premium déjà lavé", "Sables naturels"],
          },
          {
            title: "RACINES",
            links: [
              "Racines sur sélection photo",
              "Racines nano",
              "Moyennes et grandes racines",
              "Box de racines",
              "Liège branches et tubes",
              "Toutes les Racines",
            ],
          },
          {
            title: "ROCHES",
            links: ["Galets et pierres", "Roches d'aquascaping", "Box de roches"],
          },
          {
            title: "CACHETTES ET CAVES ARTISANALES",
            links: ["Caves pour Loricariidae", "Cachettes pour crevettes"],
          },
        ],
        featuredProducts: [
          { name: "Sable de Rivière PREMIUM", price: "15,50 €" },
          { name: "Kit Naturel Crevette - Aqua Biotope", price: "12,90 €" },
          { name: "Cave Nature 5-6cm", price: "9,90 €" },
          { name: "Racine de Théier 30-40cm", price: "24,00 €" },
          { name: "Box river stone 19kg", price: "49,90 €" },
        ],
      },
      {
        id: "flow",
        name: "Flow",
        sections: [
          {
            title: "SYSTÈMES FLOW",
            links: ["Kits complets", "Accessoires et raccords", "Entretien"],
          },
        ],
      },
    ],
  },
  {
    id: "promo",
    name: "Promo",
    mascot: "/icons/mascot-promo.png",
    themeColor: "#e67e00",
    accentBg: "bg-[#e67e00]",
    accentText: "text-[#e67e00]",
    href: "/promo",
  },
];
