import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, ShieldCheck, Thermometer } from "lucide-react";

export const metadata = {
  title: "Terrarium & Reptiles - Canoopea",
  description:
    "Équipements de terrariophilie, brumisation, éclairage UVB, substrats bioactifs et décors naturels pour reptiles et amphibiens.",
};

export default function TerrariumPage() {
  const subcategories = [
    { name: "Décoration et aménagement", href: "/terrarium#terradeco" },
    { name: "Matériel", href: "/terrarium#terramateriel" },
    { name: "Nourriture", href: "/terrarium#terranourriture" },
    { name: "Terrariums", href: "/terrarium#terrariums-sub" },
    { name: "Plantes tropicales", href: "/terrarium#terraplantes" },
  ];

  const products = [
    {
      id: 1,
      name: "Mousse expansive pour décor – SuperFish",
      brand: "SuperFish",
      price: "12,00 €",
      badge: "Indispensable",
      image: "/images/mousse-expansive-pour-aquarium.png",
      href: "/terrarium#terradeco",
    },
    {
      id: 2,
      name: "Silicone Fix and Seal Noir 290ml – SuperFish",
      brand: "SuperFish",
      price: "14,00 €",
      image: "/images/silicone-fix-and-seal-noir.png",
      href: "/terrarium#terradeco",
    },
    {
      id: 3,
      name: "Terrarium en verre 60 × 45 × 90 cm – Habistat",
      brand: "Habistat",
      price: "285,99 €",
      image: "/images/terrarium-en-verre.png",
      href: "/terrarium#terrariums-sub",
    },
    {
      id: 4,
      name: "Racine Corbo Wood Stump L 40-50cm",
      brand: "Aqua Biotope",
      price: "45,00 €",
      image: "/images/racine-corbo-wood-stump.png",
      href: "/terrarium#terradeco",
    },
    {
      id: 5,
      name: "Lampe Chauffante Eco Halogen Blanc – Reptile Systems",
      brand: "Reptile Systems",
      price: "18,99 €",
      image: "/images/lampe-chauffante-eco.png",
      href: "/terrarium#terramateriel",
    },
    {
      id: 6,
      name: "Substrat bioactif Jungle Bio 10L – HabiStat",
      brand: "HabiStat",
      price: "14,90 €",
      image: "/images/mousse-expansive-pour-aquarium.png",
      href: "/terrarium#terradeco",
    },
    {
      id: 7,
      name: "Sphaigne Naturelle Humide 100g – Repto",
      brand: "Repto",
      price: "6,90 €",
      image: "/images/silicone-fix-and-seal-noir.png",
      href: "/terrarium#terradeco",
    },
    {
      id: 8,
      name: "Tapis chauffant ultra-plat 20W – HabiStat",
      brand: "HabiStat",
      price: "18,99 €",
      image: "/images/lampe-chauffante-eco.png",
      href: "/terrarium#terramateriel",
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
          <span className="font-semibold text-gray-900">Terrarium</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* En-tête textuel propre, strictement séparé du visuel */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#009a22]">
            Terrariophilie & Paludarium
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-1">
            Univers Terrarium
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-3xl">
            Créez des biotopes tropicaux ou désertiques sur mesure : cuves adaptées, gestion
            thermique de précision, brumisation automatisée et décors naturels en liège et racines.
          </p>
        </div>

        {/* Bannière officielle issue de Images 2 — STRICTEMENT AUCUN TEXTE SUPERPOSÉ */}
        <div className="relative w-full aspect-[1882/802] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm mb-10">
          <Image
            src="/images/page-terrarium.png"
            alt="Bannière Univers Terrarium Canoopea"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>

        {/* Sous-catégories de navigation */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-950">
              Explorer par rayon
            </h2>
            <span className="text-xs text-gray-500 font-medium">5 rayons spécialisés</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {subcategories.map((sub, idx) => (
              <Link
                key={idx}
                href={sub.href}
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 hover:border-[#009a22] hover:text-[#009a22] hover:bg-green-50/40 transition-all shadow-sm"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Grille de produits phares */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight">
                Sélection recommandée
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Matériel certifié pour le bien-être de vos reptiles et amphibiens
              </p>
            </div>
            <Link
              href="/terrarium#tous-les-produits"
              className="text-sm font-semibold text-[#009a22] hover:underline flex items-center gap-1"
            >
              <span>Voir tout</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image strictement isolée en haut */}
                <div className="relative w-full h-44 bg-gray-50/70 flex items-center justify-center p-3 border-b border-gray-100 overflow-hidden">
                  {item.badge && (
                    <span className="absolute top-2.5 left-2.5 z-10 bg-[#009a22] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  )}
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
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#009a22] transition-colors line-clamp-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{item.brand}</p>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-baseline justify-between">
                    <span className="text-lg font-extrabold text-[#e65100]">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Garanties Terrariophilie */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Thermometer className="h-6 w-6 text-[#009a22] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Normes Reptiles & UVB</h4>
              <p className="text-xs text-gray-500 mt-1">Éclairages et chauffages contrôlés pour respecter le cycle naturel des espèces.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <ShieldCheck className="h-6 w-6 text-[#009a22] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Matériaux Inoffensifs</h4>
              <p className="text-xs text-gray-500 mt-1">Silicones sans solvants toxiques et mousses expansives neutres pour la faune.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Sparkles className="h-6 w-6 text-[#009a22] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Expertise Biotopes</h4>
              <p className="text-xs text-gray-500 mt-1">Kits complets prêts à poser pour dendrobates, geckos et caméléons.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
