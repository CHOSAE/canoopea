import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, ShieldCheck, Truck } from "lucide-react";

export const metadata = {
  title: "Aquarium & Aquascaping - Canoopea",
  description:
    "Matériel haut de gamme, hardscape naturel, plantes in vitro et filtration pour aquariums d'eau douce et d'eau de mer.",
};

export default function AquariumPage() {
  const subcategories = [
    { name: "Décoration", href: "/aquarium#decoration" },
    { name: "Matériel", href: "/aquarium#materiel" },
    { name: "Plantes", href: "/aquarium#plantes" },
    { name: "Aquariums", href: "/aquarium#aquariums" },
    { name: "Nourriture", href: "/aquarium#nourriture" },
    { name: "Analyse et traitements", href: "/aquarium#analyse" },
    { name: "Eau de mer", href: "/aquarium#eaudemer" },
    { name: "Bassins", href: "/aquarium#bassins" },
    { name: "Poissons et invertébrés", href: "/aquarium#poissons" },
  ];

  const products = [
    {
      id: 1,
      name: "Sable de Rivière PREMIUM 0.2/0.3mm – Aqua Biotope",
      brand: "Aqua Biotope",
      price: "15,50 €",
      image: "/images/sable-de-riviere-premium.png",
      href: "/aquarium#decoration",
    },
    {
      id: 2,
      name: "Master Soil Next 8L Black – Sol Technique",
      brand: "Master Soil",
      price: "27,92 €",
      oldPrice: "34,90 €",
      badge: "-20%",
      image: "/images/okho-stone.png",
      href: "/aquarium#decoration",
    },
    {
      id: 3,
      name: "Seiryu Stone – Roche Aquascaping",
      brand: "Aqua Biotope",
      price: "2,50 €",
      image: "/images/seiryu-stone.png",
      href: "/aquarium#decoration",
    },
    {
      id: 4,
      name: "Filtre Externe Eden FES 100 – Oase",
      brand: "Oase",
      price: "75,99 €",
      oldPrice: "79,99 €",
      badge: "-5%",
      image: "/images/filtre-externe-eden-fes-100.png",
      href: "/aquarium#materiel",
    },
    {
      id: 5,
      name: "Filtre Externe Eden FES 200 – Oase",
      brand: "Oase",
      price: "94,99 €",
      oldPrice: "99,99 €",
      badge: "-5%",
      image: "/images/filtre-externe-eden-fes-200.png",
      href: "/aquarium#materiel",
    },
    {
      id: 6,
      name: "Black Lava Fusion – Roches volcaniques",
      brand: "Aqua Biotope",
      price: "2,50 €",
      image: "/images/black-lava-fusion.png",
      href: "/aquarium#decoration",
    },
    {
      id: 7,
      name: "Filtre Externe Eden FET 100 – Oase",
      brand: "Oase",
      price: "104,49 €",
      oldPrice: "109,99 €",
      badge: "-5%",
      image: "/images/filtre-externe-eden-fet-100.png",
      href: "/aquarium#materiel",
    },
    {
      id: 8,
      name: "Scenery Stone – Roche naturelle texturée",
      brand: "Aqua Biotope",
      price: "1,90 €",
      image: "/images/scenery-stone.png",
      href: "/aquarium#decoration",
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
          <span className="font-semibold text-gray-900">Aquarium</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* En-tête textuel propre, strictement séparé du visuel */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0066cc]">
            Aquariophilie & Aquascaping
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-1">
            Univers Aquarium
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-3xl">
            Retrouvez notre sélection pointue pour concevoir et entretenir des écosystèmes
            aquatiques naturels : filtration silencieuse, fertilisation de pointe, roches d’exception et sables biotope.
          </p>
        </div>

        {/* Bannière officielle issue de Images 2 — STRICTEMENT AUCUN TEXTE SUPERPOSÉ */}
        <div className="relative w-full aspect-[1879/798] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm mb-10">
          <Image
            src="/images/page-aquarium.png"
            alt="Bannière Univers Aquarium Canoopea"
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
            <span className="text-xs text-gray-500 font-medium">9 rayons spécialisés</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {subcategories.map((sub, idx) => (
              <Link
                key={idx}
                href={sub.href}
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 hover:border-[#0066cc] hover:text-[#0066cc] hover:bg-blue-50/40 transition-all shadow-sm"
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
                Les meilleures références d'aquascaping plébiscitées par la communauté
              </p>
            </div>
            <Link
              href="/aquarium#tous-les-produits"
              className="text-sm font-semibold text-[#0066cc] hover:underline flex items-center gap-1"
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
                    <span className="absolute top-2.5 left-2.5 z-10 bg-[#249e3f] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
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
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#0066cc] transition-colors line-clamp-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{item.brand}</p>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-baseline justify-between">
                    <span className="text-lg font-extrabold text-[#e65100]">
                      {item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {item.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Garanties et engagements Canoopea */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Sparkles className="h-6 w-6 text-[#0066cc] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Conseil Aquariophile</h4>
              <p className="text-xs text-gray-500 mt-1">Sélections testées et approuvées par des passionnés expérimentés.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <ShieldCheck className="h-6 w-6 text-[#0066cc] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Produits Naturels & Sains</h4>
              <p className="text-xs text-gray-500 mt-1">Garantis sans danger pour vos crevettes, plantes et poissons fragiles.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Truck className="h-6 w-6 text-[#0066cc] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Emballage Sécurisé</h4>
              <p className="text-xs text-gray-500 mt-1">Colis ultra-protecteurs pour le matériel en verre et les plantes in vitro.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
