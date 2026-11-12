import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";

export default function CoupsDeCoeur() {
  const items = [
    {
      id: 1,
      name: "Sable de Rivière PREMIUM 0.2/0.3mm – Aqua Biotope",
      brand: "Aqua Biotope",
      price: "15,50 €",
      image: "/images/sable-de-riviere-premium.png",
      href: "/aquarium/decoration?p=1",
    },
    {
      id: 2,
      name: "Seiryu Stone",
      brand: "Aqua Biotope",
      price: "2,50 €",
      image: "/images/seiryu-stone.png",
      href: "/aquarium/decoration?p=2",
    },
    {
      id: 3,
      name: "Black Lava Fusion",
      brand: "Aqua Biotope",
      price: "2,50 €",
      image: "/images/black-lava-fusion.png",
      href: "/aquarium/decoration?p=3",
    },
    {
      id: 4,
      name: "Okho Stone",
      brand: "Aqua Biotope",
      price: "2,38 €",
      oldPrice: "2,50 €",
      discount: "-5%",
      image: "/images/okho-stone.png",
      href: "/aquarium/decoration?p=4",
    },
    {
      id: 5,
      name: "Scenery Stone",
      brand: "Aqua Biotope",
      price: "1,90 €",
      image: "/images/scenery-stone.png",
      href: "/aquarium/decoration?p=5",
    },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              Nos coups de cœurs
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Roches naturelles, sables fins et hardscape sélectionnés pour vos biotopes
            </p>
          </div>
          <Link
            href="/aquarium/decoration"
            className="text-xs sm:text-sm font-semibold text-[#249e3f] hover:underline flex items-center gap-1"
          >
            <span>Voir tout</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grille de 5 cartes produits uniformisées */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Conteneur image avec fond uniformisé #F8F9FA et mix-blend-multiply */}
              <div className="relative w-full h-44 bg-[#F8F9FA] flex items-center justify-center p-3 border-b border-gray-100 overflow-hidden">
                {item.discount && (
                  <span className="absolute top-2.5 left-2.5 z-10 bg-[#249e3f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                    {item.discount}
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
                  className="object-contain max-h-full w-auto group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                />
              </div>

              {/* Conteneur informations et prix strictement en dessous */}
              <div className="flex flex-col flex-1 p-3.5">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#249e3f] transition-colors line-clamp-2 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{item.brand}</p>

                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-[#e65100]">
                      {item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {item.oldPrice}
                      </span>
                    )}
                  </div>
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
