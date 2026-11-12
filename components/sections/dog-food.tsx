import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";

export default function DogFood() {
  const items = [
    {
      id: 1,
      name: "Platinum Poulet – Adulte Chien",
      brand: "Platinum",
      price: "15,93 €",
      image: "/images/platinium-poulet.png",
      href: "/chien/alimentation/platinum-poulet",
    },
    {
      id: 2,
      name: "Chien Adulte Truite et Riz – Meglium 14kg",
      brand: "Meglium",
      price: "35,90 €",
      image: "/images/chien-adulte-truite-et-riz.png",
      href: "/chien/alimentation/meglium-truite",
    },
    {
      id: 3,
      name: "Mini Adulte Sanglier et Agneau – Sans",
      brand: "Primordial",
      price: "21,66 €",
      image: "/images/mini-adulte-sanglier-et-agneau.png",
      href: "/chien/alimentation/primordial-sanglier",
    },
    {
      id: 4,
      name: "Platinum Agneau – Adulte Chien",
      brand: "Platinum",
      price: "19,39 €",
      image: "/images/platinum-agneau.png",
      href: "/chien/alimentation/platinum-agneau",
    },
    {
      id: 5,
      name: "Pattes de poulet nature x5 – Comfy",
      brand: "Comfy",
      price: "2,90 €",
      image: "/images/pattes-de-poulet-nature-x5.png",
      href: "/chien/alimentation/comfy-poulet",
    },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              Croquettes pour chiens
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Alimentation naturelle, recettes sans céréales et friandises saines pour votre compagnon
            </p>
          </div>
          <Link
            href="/chien/alimentation"
            className="text-xs sm:text-sm font-semibold text-[#249e3f] hover:underline flex items-center gap-1"
          >
            <span>Voir tout</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grille de 5 cartes produits propres sans aucun doublon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Conteneur image strictement isolé en haut */}
              <div className="relative w-full h-44 bg-gray-50/70 flex items-center justify-center p-3 border-b border-gray-100 overflow-hidden">
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
