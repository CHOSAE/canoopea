import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, ShieldCheck, Heart } from "lucide-react";

export const metadata = {
  title: "Rongeurs & Petits Mammifères - Canoopea",
  description:
    "Foin de prairie, alimentation spécifique, litières dépoussiérées et habitats pour lapins, cochons d'Inde, hamsters et chinchillas.",
};

export default function RongeurPage() {
  const subcategories = [
    { name: "Alimentation & Foin", href: "/rongeur#alim" },
    { name: "Friandises saines", href: "/rongeur#friandises" },
    { name: "Cages & Enclos spacieux", href: "/rongeur#cages" },
    { name: "Litières naturelles", href: "/rongeur#litieres" },
    { name: "Tunnels & Maisonnettes", href: "/rongeur#accessoires" },
  ];

  const products = [
    {
      id: 1,
      name: "Foin de Prairie de Montagne – Séché au Soleil 1kg",
      brand: "Canoopea Bio",
      price: "6,90 €",
      badge: "Indispensable",
      image: "/images/category-plantes.png",
      href: "/rongeur#alim",
    },
    {
      id: 2,
      name: "Copeaux de Bois Dépoussiérés 14 L – Litière Confort",
      brand: "Comfy",
      price: "1,96 €",
      image: "/images/coeur-stone-1.png",
      href: "/rongeur#litieres",
    },
    {
      id: 3,
      name: "Sticks Rongeurs & Lapins aux Légumes Croquants 90g",
      brand: "Comfy",
      price: "2,12 €",
      image: "/images/dog-food-5.png",
      href: "/rongeur#friandises",
    },
    {
      id: 4,
      name: "Maisonnette d'Angle en Bois Brut non Traité",
      brand: "Comfy",
      price: "4,96 €",
      image: "/images/category-decorations.png",
      href: "/rongeur#accessoires",
    },
    {
      id: 5,
      name: "Litière Ultra-Absorbante Cornelius 25 L",
      brand: "Comfy",
      price: "20,54 €",
      image: "/images/coeur-stone-4.png",
      href: "/rongeur#litieres",
    },
    {
      id: 6,
      name: "Menu Équilibré Granulés Complets sans Céréales",
      brand: "Comfy",
      price: "2,01 €",
      image: "/images/dog-food-3.png",
      href: "/rongeur#alim",
    },
    {
      id: 7,
      name: "Tunnel Rongeurs en Osier Naturel Comestible",
      brand: "Comfy",
      price: "8,90 €",
      image: "/images/terra-item-4.png",
      href: "/rongeur#accessoires",
    },
    {
      id: 8,
      name: "Biberon d'Eau Inox Valve Antigoutte 500ml",
      brand: "Comfy",
      price: "5,50 €",
      image: "/images/deal-filter-3.png",
      href: "/rongeur#accessoires",
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
          <span className="font-semibold text-gray-900">Rongeur</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* En-tête textuel propre, strictement séparé du visuel */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
            Petits Mammifères & Lapins
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-1">
            Univers Rongeur
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-3xl">
            Du foin vert dépoussiéré indispensable au transit, des mélanges de graines et granulés
            sans sucre ajouté, et des abris sécurisés pour préserver le bien-être de vos animaux.
          </p>
        </div>

        {/* Bannière officielle issue de Images 2 — STRICTEMENT AUCUN TEXTE SUPERPOSÉ */}
        <div className="relative w-full aspect-[1879/783] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm mb-10">
          <Image
            src="/images/page-rongeur.png"
            alt="Bannière Univers Rongeur Canoopea"
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
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 hover:border-[#8b5cf6] hover:text-[#8b5cf6] hover:bg-purple-50/40 transition-all shadow-sm"
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
                Aliments bruts et habitats adaptés aux besoins naturels
              </p>
            </div>
            <Link
              href="/rongeur#tous-les-produits"
              className="text-sm font-semibold text-[#8b5cf6] hover:underline flex items-center gap-1"
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
                    <span className="absolute top-2.5 left-2.5 z-10 bg-[#8b5cf6] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
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
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#8b5cf6] transition-colors line-clamp-2 leading-snug">
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

        {/* Garanties Rongeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Heart className="h-6 w-6 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Fibres & Transit</h4>
              <p className="text-xs text-gray-500 mt-1">Foin riche en fibres longues pour l'usure dentaire et la digestion des herbivores.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <ShieldCheck className="h-6 w-6 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">0% Poussière Nocive</h4>
              <p className="text-xs text-gray-500 mt-1">Litières tamisées préservant les poumons fragiles des petits animaux.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Sparkles className="h-6 w-6 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Bois & Matériaux Bruts</h4>
              <p className="text-xs text-gray-500 mt-1">Abris et ponts sans colle toxique ni agrafe apparente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
