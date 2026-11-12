"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ChevronRight, Plus } from "lucide-react";

export default function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 8,
    minutes: 26,
    seconds: 22,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format2 = (n: number) => n.toString().padStart(2, "0");

  const deals = [
    {
      id: 1,
      name: "Filtre Externe Eden FES 100 – Oase",
      brand: "Oase",
      price: "75,99 €",
      oldPrice: "79,99 €",
      discount: "-5%",
      inStock: true,
      image: "/images/filtre-externe-eden-fes-100.png",
      href: "/produit/filtre-eden-100",
    },
    {
      id: 2,
      name: "Filtre Externe Eden FES 200 – Oase",
      brand: "Oase",
      price: "94,99 €",
      oldPrice: "99,99 €",
      discount: "-5%",
      inStock: true,
      image: "/images/filtre-externe-eden-fes-200.png",
      href: "/produit/filtre-eden-200",
    },
    {
      id: 3,
      name: "Filtre Externe Eden FES 60 – Oase",
      brand: "Oase",
      price: "47,49 €",
      oldPrice: "49,99 €",
      discount: "-5%",
      inStock: false,
      image: "/images/filtre-externe-eden-fes-60.png",
      href: "/produit/filtre-eden-60",
    },
    {
      id: 4,
      name: "Filtre Externe Eden FET 100 – Oase",
      brand: "Oase",
      price: "104,49 €",
      oldPrice: "109,99 €",
      discount: "-5%",
      inStock: true,
      image: "/images/filtre-externe-eden-fet-100.png",
      href: "/produit/filtre-fet-100",
    },
    {
      id: 5,
      name: "Filtre Externe Eden FET 200 – Oase",
      brand: "Oase",
      price: "123,49 €",
      oldPrice: "129,98 €",
      discount: "-5%",
      inStock: true,
      image: "/images/filtre-externe-eden-fet-200.png",
      href: "/produit/filtre-fet-200",
    },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              Nos offres du moment
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Des remises exclusives sur le matériel d'aquariophilie de pointe
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Compteur d'offres en direct */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#249e3f] bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200/60">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <span>
                Fin dans : {format2(timeLeft.days)} j. {format2(timeLeft.hours)} : {format2(timeLeft.minutes)} : {format2(timeLeft.seconds)}
              </span>
            </div>

            <Link
              href="/promotions"
              className="hidden md:flex text-xs sm:text-sm font-semibold text-[#249e3f] hover:underline items-center gap-1"
            >
              <span>Voir tout</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Grille de cartes produits isolées sans aucun doublon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {deals.map((deal) => (
            <Link
              key={deal.id}
              href={deal.href}
              className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Conteneur image strictement isolé en haut */}
              <div className="relative w-full h-44 bg-gray-50/70 flex items-center justify-center p-3 border-b border-gray-100 overflow-hidden">
                {deal.discount && (
                  <span className="absolute top-2.5 left-2.5 z-10 bg-[#249e3f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                    {deal.discount}
                  </span>
                )}
                {!deal.inStock && (
                  <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 bg-[#d84315] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
                    🚫 Rupture de stock
                  </span>
                )}
                {/* Bouton d'ajout rapide au survol si en stock */}
                {deal.inStock && (
                  <div className="absolute inset-x-3 bottom-2.5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex justify-center">
                    <span className="w-full py-1.5 px-3 bg-[#249e3f] hover:bg-[#1a7a30] text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors pointer-events-none">
                      <Plus className="h-3.5 w-3.5" />
                      + Ajouter
                    </span>
                  </div>
                )}
                <Image
                  src={deal.image}
                  alt={deal.name}
                  width={150}
                  height={140}
                  className="object-contain max-h-full w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Conteneur informations et prix strictement en dessous */}
              <div className="flex flex-col flex-1 p-3.5">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#249e3f] transition-colors line-clamp-2 leading-snug">
                  {deal.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{deal.brand}</p>

                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-[#e65100]">
                      {deal.price}
                    </span>
                    {deal.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {deal.oldPrice}
                      </span>
                    )}
                  </div>
                  {deal.inStock && (
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-bold text-[#249e3f] flex items-center gap-0.5">
                      <Plus className="h-3.5 w-3.5" />
                      Ajouter
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
