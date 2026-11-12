import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sun, ShieldCheck, Feather } from "lucide-react";

export const metadata = {
  title: "Oiseaux - Graines, Éclairage UV & Accessoires - Canoopea",
  description:
    "Mélanges de graines nettoyées, millet bio de France, éclairage aviaire UV et cages spacieuses pour perruches, perroquets et exotiques.",
};

export default function OiseauxPage() {
  const subcategories = [
    { name: "Alimentation & Graines", href: "/oiseaux#alim" },
    { name: "Millet & Friandises bio", href: "/oiseaux#friandises" },
    { name: "Cages & Volières", href: "/oiseaux#cages" },
    { name: "Éclairage UV aviaire", href: "/oiseaux#eclairage" },
    { name: "Perchoirs & Jouets", href: "/oiseaux#accessoires" },
  ];

  const products = [
    {
      id: 1,
      name: "Menu Complet pour Perruches Ondulées 500g",
      brand: "Comfy",
      price: "2,58 €",
      image: "/images/dog-food-3.png",
      href: "/oiseaux#alim",
    },
    {
      id: 2,
      name: "MILLET Rouge BIO en Grappes (10 Brins) – Origine France",
      brand: "Canoopea Bio",
      price: "5,99 €",
      badge: "Bio France",
      image: "/images/category-plantes.png",
      href: "/oiseaux#friandises",
    },
    {
      id: 3,
      name: "Sticks Friandises aux Fruits pour Perruches 90g",
      brand: "Comfy",
      price: "2,01 €",
      image: "/images/dog-food-5.png",
      href: "/oiseaux#friandises",
    },
    {
      id: 4,
      name: "Kit Rampe Lampe UV Compacte pour Cage d'Oiseaux",
      brand: "Bird Systems",
      price: "69,99 €",
      badge: "Santé UV",
      image: "/images/terra-item-5.png",
      href: "/oiseaux#eclairage",
    },
    {
      id: 5,
      name: "Ampoule UV Aviaire 2.4% UVB Zone 1 – Spectre Naturel",
      brand: "Bird Systems",
      price: "39,99 €",
      image: "/images/deal-filter-1.png",
      href: "/oiseaux#eclairage",
    },
    {
      id: 6,
      name: "Perchoir Ergonomique en Bois Sablé Pédicure",
      brand: "Comfy",
      price: "6,50 €",
      image: "/images/terra-item-4.png",
      href: "/oiseaux#accessoires",
    },
    {
      id: 7,
      name: "Baignoire Suspendue Transparente pour Cage",
      brand: "Comfy",
      price: "7,90 €",
      image: "/images/deal-filter-3.png",
      href: "/oiseaux#accessoires",
    },
    {
      id: 8,
      name: "Jouet d'Occupation Suspendu Corde de Coton & Blocs",
      brand: "Comfy",
      price: "8,99 €",
      image: "/images/category-jouets.png",
      href: "/oiseaux#accessoires",
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
          <span className="font-semibold text-gray-900">Oiseaux</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* En-tête textuel propre, strictement séparé du visuel */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
            Aviculture & Oiseaux de Compagnie
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-1">
            Univers Oiseaux
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-3xl">
            Favorisez le chant, la vivacité et la beauté du plumage : graines rigoureusement dépoussiérées,
            millet français, éclairage UVB essentiel à la vision tétrachromatique et accessoires d'enrichissement.
          </p>
        </div>

        {/* Bannière officielle issue de Images 2 — STRICTEMENT AUCUN TEXTE SUPERPOSÉ */}
        <div className="relative w-full aspect-[1876/775] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm mb-10">
          <Image
            src="/images/page-oiseaux.png"
            alt="Bannière Univers Oiseaux Canoopea"
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
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 hover:border-[#0284c7] hover:text-[#0284c7] hover:bg-sky-50/40 transition-all shadow-sm"
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
                Graines fraîches, technologie UV aviaire et équipements sûrs
              </p>
            </div>
            <Link
              href="/oiseaux#tous-les-produits"
              className="text-sm font-semibold text-[#0284c7] hover:underline flex items-center gap-1"
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
                    <span className="absolute top-2.5 left-2.5 z-10 bg-[#0284c7] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
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
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#0284c7] transition-colors line-clamp-2 leading-snug">
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

        {/* Garanties Oiseaux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Sun className="h-6 w-6 text-[#0284c7] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Spectre UV Aviaire</h4>
              <p className="text-xs text-gray-500 mt-1">Essentiel à la synthèse de vitamine D3 et à la perception des couleurs du plumage.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <ShieldCheck className="h-6 w-6 text-[#0284c7] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Graines Dépoussiérées</h4>
              <p className="text-xs text-gray-500 mt-1">Grains ventilés et calibrés pour écarter tout risque fongique ou respiratoire.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Feather className="h-6 w-6 text-[#0284c7] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Matériaux Sûrs & Naturels</h4>
              <p className="text-xs text-gray-500 mt-1">Colorants alimentaires sans plomb et attaches en inox sécurisées.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
