"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Percent, Sparkles, Tag } from "lucide-react";

export default function PromotionsPage() {
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

  const promoCategories = [
    { name: "Promotions Aquarium", badge: "Jusqu'à -20%", href: "/promotions#aquarium" },
    { name: "Promotions Terrarium", badge: "Jusqu'à -15%", href: "/promotions#terrarium" },
    { name: "Offres Chien & Chat", badge: "Jusqu'à -25%", href: "/promotions#chiens-chats" },
    { name: "Déstockage & Fins de séries", badge: "-30%", href: "/promotions#destockage" },
  ];

  const deals = [
    {
      id: 1,
      name: "Master Soil Next 8L Black – Sol Technique",
      brand: "Master Soil",
      price: "27,92 €",
      oldPrice: "34,90 €",
      discount: "-20%",
      image: "/images/okho-stone.png",
      href: "/aquarium",
    },
    {
      id: 2,
      name: "Filtre Externe Eden FES 100 – Oase",
      brand: "Oase",
      price: "75,99 €",
      oldPrice: "79,99 €",
      discount: "-5%",
      image: "/images/filtre-externe-eden-fes-100.png",
      href: "/aquarium",
    },
    {
      id: 3,
      name: "Filtre Externe Eden FES 200 – Oase",
      brand: "Oase",
      price: "94,99 €",
      oldPrice: "99,99 €",
      discount: "-5%",
      image: "/images/filtre-externe-eden-fes-200.png",
      href: "/aquarium",
    },
    {
      id: 4,
      name: "Filtre Externe Eden FET 100 – Oase",
      brand: "Oase",
      price: "104,49 €",
      oldPrice: "109,99 €",
      discount: "-5%",
      image: "/images/filtre-externe-eden-fet-100.png",
      href: "/aquarium",
    },
    {
      id: 5,
      name: "Filtre Externe Eden FET 200 – Oase",
      brand: "Oase",
      price: "123,49 €",
      oldPrice: "129,98 €",
      discount: "-5%",
      image: "/images/filtre-externe-eden-fet-200.png",
      href: "/aquarium",
    },
    {
      id: 6,
      name: "Okho Stone Dragon Stone – Hardscape Naturel",
      brand: "Aqua Biotope",
      price: "2,38 €",
      oldPrice: "2,50 €",
      discount: "-5%",
      image: "/images/okho-stone.png",
      href: "/aquarium",
    },
    {
      id: 7,
      name: "Mini Adulte Sanglier et Agneau – Primordial",
      brand: "Primordial",
      price: "21,66 €",
      oldPrice: "25,90 €",
      discount: "-16%",
      image: "/images/mini-adulte-sanglier-et-agneau.png",
      href: "/chien",
    },
    {
      id: 8,
      name: "Lampe Chauffante Eco Halogen Blanc – Reptile Systems",
      brand: "Reptile Systems",
      price: "18,99 €",
      oldPrice: "22,50 €",
      discount: "-15%",
      image: "/images/lampe-chauffante-eco.png",
      href: "/terrarium",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <div className="border-b border-gray-100 bg-gray-50/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">
            Accueil
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-gray-900">Promotions</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* En-tête textuel propre, strictement séparé du visuel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#ef4444] flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" />
              Bons Plans & Réductions Flash
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-1">
              Promotions du Moment
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Profitez des remises exclusives sur l'aquariophilie, les terrariums et la nourriture
              pour animaux. Offres limitées dans la limite des stocks disponibles.
            </p>
          </div>

          {/* Compteur temps réel */}
          <div className="flex items-center gap-2 bg-red-50 border border-red-200/70 text-[#ef4444] px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm h-fit">
            <Clock className="h-4 w-4 flex-shrink-0 animate-pulse" />
            <span>
              Fin des offres : {format2(timeLeft.days)} j. {format2(timeLeft.hours)} : {format2(timeLeft.minutes)} : {format2(timeLeft.seconds)}
            </span>
          </div>
        </div>

        {/* Bannière officielle issue de Images 2 — STRICTEMENT AUCUN TEXTE SUPERPOSÉ */}
        <div className="relative w-full aspect-[1882/784] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm mb-10">
          <Image
            src="/images/page-promotions.png"
            alt="Bannière Promotions Canoopea"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>

        {/* Rayons en promotion */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-950 mb-4">
            Catégories en réduction
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {promoCategories.map((p, idx) => (
              <Link
                key={idx}
                href={p.href}
                className="p-4 rounded-2xl border border-gray-200 bg-white hover:border-[#ef4444] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <span className="font-bold text-sm text-gray-900">{p.name}</span>
                <span className="mt-2 inline-block text-xs font-extrabold text-[#ef4444] bg-red-50 px-2 py-0.5 rounded-full w-fit">
                  {p.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Grille de produits en promotion */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight">
                Offres vedettes
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Remises appliquées automatiquement au panier
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {deals.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image strictement isolée en haut */}
                <div className="relative w-full h-44 bg-gray-50/70 flex items-center justify-center p-3 border-b border-gray-100 overflow-hidden">
                  <span className="absolute top-2.5 left-2.5 z-10 bg-[#ef4444] text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                    {item.discount}
                  </span>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={140}
                    className="object-contain max-h-full w-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Textes et prix strictement en dessous */}
                <div className="flex flex-col flex-1 p-3.5">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#ef4444] transition-colors line-clamp-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{item.brand}</p>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-baseline justify-between">
                    <span className="text-lg font-extrabold text-[#e65100]">
                      {item.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {item.oldPrice}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Reassurance Promo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Percent className="h-6 w-6 text-[#ef4444] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Prix Transparents</h4>
              <p className="text-xs text-gray-500 mt-1">Réductions réelles calculées sur le tarif public conseillé le plus récent.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Clock className="h-6 w-6 text-[#ef4444] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Stocks en Temps Réel</h4>
              <p className="text-xs text-gray-500 mt-1">Les produits remisés sont immédiatement disponibles pour expédition rapide 24/48h.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Sparkles className="h-6 w-6 text-[#ef4444] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Garantie & Retours Identiques</h4>
              <p className="text-xs text-gray-500 mt-1">Mêmes garanties constructeurs et droit de retour de 14 jours qu'en période normale.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
