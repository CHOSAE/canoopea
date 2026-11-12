import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";

export default function NosNouveautes() {
  const items = [
    {
      id: 1,
      name: "Mousse expansive pour décor – SuperFish",
      brand: "SuperFish",
      price: "12,00 €",
      badge: "Nouveau",
      image: "/images/mousse-expansive-pour-aquarium.png",
      href: "/terrarium#mousse",
    },
    {
      id: 2,
      name: "Silicone Fix and Seal Noir 290ml – SuperFish",
      brand: "SuperFish",
      price: "14,00 €",
      badge: "Nouveau",
      image: "/images/silicone-fix-and-seal-noir.png",
      href: "/terrarium#silicone",
    },
    {
      id: 3,
      name: "Terrarium en verre 60 × 45 × 90 cm – Habistat",
      brand: "Habistat",
      price: "285,99 €",
      badge: "Nouveau",
      image: "/images/terrarium-en-verre.png",
      href: "/terrarium#habistat",
    },
    {
      id: 4,
      name: "Racine Corbo Wood Stump L 40-50cm",
      brand: "Aqua Biotope",
      price: "45,00 €",
      badge: "Nouveau",
      image: "/images/racine-corbo-wood-stump.png",
      href: "/aquarium/decoration#corbo",
    },
    {
      id: 5,
      name: "Lampe Chauffante Eco Halogen Blanc – Reptile Systems",
      brand: "Reptile Systems",
      price: "18,99 €",
      badge: "Nouveau",
      image: "/images/lampe-chauffante-eco.png",
      href: "/terrarium#lampe",
    },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              Nos nouveautés
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Les derniers arrivages pour vos aquariums, terrariums et animaux
            </p>
          </div>
          <Link
            href="/nouveautes"
            className="text-xs sm:text-sm font-semibold text-[#249e3f] hover:underline flex items-center gap-1"
          >
            <span>Voir tout</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grille de 5 cartes produits propres, sans doublon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Conteneur image strictement isolé en haut */}
              <div className="relative w-full h-44 bg-gray-50/70 flex items-center justify-center p-3 border-b border-gray-100 overflow-hidden">
                {item.badge && (
                  <span className="absolute top-2.5 left-2.5 z-10 bg-[#249e3f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}

                {/* Bouton d'ajout rapide au survol */}
                <div className="absolute inset-x-3 bottom-2.5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex justify-center">
                  <span className="w-full py-1.5 px-3 bg-[#249e3f] hover:bg-[#1a7a30] text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors pointer-events-none">
                    <Plus className="h-3.5 w-3.5" />
                    + Ajouter
                  </span>
                </div>

                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={140}
                  className="object-contain max-h-full w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Conteneur informations et prix strictement en dessous */}
              <div className="flex flex-col flex-1 p-3.5">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#249e3f] transition-colors line-clamp-2 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{item.brand}</p>

                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-[#e65100]">
                    {item.price}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-bold text-[#249e3f] flex items-center gap-0.5">
                    <Plus className="h-3.5 w-3.5" />
                    Ajouter
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
