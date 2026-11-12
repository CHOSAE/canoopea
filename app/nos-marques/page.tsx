import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Nos Marques Partenaires - Canoopea",
  description:
    "Découvrez les plus grandes marques de l'aquariophilie, de la terrariophilie et de l'animalerie : Oase, HabiStat, Aqua Biotope, Platinum, SuperFish et bien d'autres.",
};

export default function NosMarquesPage() {
  const brands = [
    { name: "Oase", category: "Aquariophilie & Bassin", desc: "Leader mondial de la filtration et de la technologie d'eau douce." },
    { name: "Aqua Biotope", category: "Hardscape & Décors", desc: "Sables de rivière triés, roches d'exception et racines naturelles." },
    { name: "HabiStat", category: "Terrariophilie", desc: "Terrariums en verre haut de gamme, thermostats et gestion thermique." },
    { name: "Platinum", category: "Alimentation Chien & Chat", desc: "Cuisson douce à l'air frais avec 73% de viande fraîche minimum." },
    { name: "SuperFish", category: "Matériel Aquatique & Terra", desc: "Équipements ingénieux, colles, silicones et mousses de décor." },
    { name: "Meglium", category: "Nutrition Canines", desc: "Recettes équilibrées riches en poisson et riz pour chiens sportifs." },
    { name: "Primordial", category: "Sans Céréales", desc: "Recettes ancestrales respectant la nature carnivore des chiens." },
    { name: "Comfy", category: "Accessoires & Friandises", desc: "Friandises 100% naturelles, mastication et couchages confortables." },
    { name: "Tropica", category: "Plantes Aquatiques", desc: "Plantes in vitro et en pot d'une pureté biologique irréprochable." },
    { name: "Easy-Life", category: "Traitements d'Eau", desc: "Conditionneurs et fertilisants holistiques pour biotopes équilibrés." },
    { name: "Juwel", category: "Aquariums Tout Équipés", desc: "Qualité allemande de précision avec filtration et éclairage LED." },
    { name: "Bird Systems", category: "Éclairage Aviaire", desc: "Technologie UV dédiée au bien-être et à la vitalité des oiseaux." },
  ];

  const products = [
    {
      id: 1,
      name: "Sable de Rivière PREMIUM 0.2/0.3mm – Aqua Biotope",
      brand: "Aqua Biotope",
      price: "15,50 €",
      image: "/images/sable-de-riviere-premium.png",
      href: "/aquarium",
    },
    {
      id: 2,
      name: "Filtre Externe Eden FES 100 – Oase",
      brand: "Oase",
      price: "75,99 €",
      oldPrice: "79,99 €",
      badge: "-5%",
      image: "/images/filtre-externe-eden-fes-100.png",
      href: "/aquarium",
    },
    {
      id: 3,
      name: "Mousse expansive pour décor – SuperFish",
      brand: "SuperFish",
      price: "12,00 €",
      image: "/images/mousse-expansive-pour-aquarium.png",
      href: "/terrarium",
    },
    {
      id: 4,
      name: "Terrarium en verre 60 × 45 × 90 cm – Habistat",
      brand: "Habistat",
      price: "285,99 €",
      image: "/images/terrarium-en-verre.png",
      href: "/terrarium",
    },
    {
      id: 5,
      name: "Platinum Poulet – Croquettes Semi-Humides Chien",
      brand: "Platinum",
      price: "15,93 €",
      image: "/images/platinium-poulet.png",
      href: "/chien",
    },
    {
      id: 6,
      name: "Chien Adulte Truite et Riz – Meglium 14kg",
      brand: "Meglium",
      price: "35,90 €",
      image: "/images/chien-adulte-truite-et-riz.png",
      href: "/chien",
    },
    {
      id: 7,
      name: "Mini Adulte Sanglier et Agneau – Primordial",
      brand: "Primordial",
      price: "21,66 €",
      image: "/images/mini-adulte-sanglier-et-agneau.png",
      href: "/chien",
    },
    {
      id: 8,
      name: "Lampe Chauffante & UV – Reptile & Bird Systems",
      brand: "Bird Systems",
      price: "18,99 €",
      image: "/images/lampe-chauffante-eco.png",
      href: "/oiseaux",
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
          <span className="font-semibold text-gray-900">Nos marques</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* En-tête textuel propre, strictement séparé du visuel */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#10b981]">
            Partenaires & Fabricants Reconnus
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-1">
            Nos Marques Partenaires
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-3xl">
            Canoopea s'associe aux fabricants les plus exigeants pour vous garantir un matériel
            fiable, durable et testé par des éleveurs et aquascapers professionnels.
          </p>
        </div>

        {/* Bannière officielle issue de Images 2 — STRICTEMENT AUCUN TEXTE SUPERPOSÉ */}
        <div className="relative w-full aspect-[1884/916] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm mb-10">
          <Image
            src="/images/page-nos-marques.png"
            alt="Bannière Nos Marques Canoopea"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>

        {/* Grille des marques avec descriptions claires */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-950 mb-6">
            Fabricants de référence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {brands.map((b, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-gray-200 bg-white hover:border-[#10b981] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-extrabold text-lg text-gray-900">{b.name}</h3>
                    <span className="text-[11px] font-bold text-[#10b981] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      {b.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">{b.desc}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-gray-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#10b981]" />
                  <span>Distributeur officiel agréé</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Produits phares issus de nos marques */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight">
                Produits emblématiques
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Les best-sellers conçus par nos marques partenaires
              </p>
            </div>
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
                    <span className="absolute top-2.5 left-2.5 z-10 bg-[#10b981] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
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
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#10b981] transition-colors line-clamp-2 leading-snug">
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

        {/* Engagements Qualité Marques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-gray-100">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Award className="h-6 w-6 text-[#10b981] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Garantie Constructeur Préservée</h4>
              <p className="text-xs text-gray-500 mt-1">Tous nos produits bénéficient du service après-vente direct et des pièces détachées d'origine.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <ShieldCheck className="h-6 w-6 text-[#10b981] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Traçabilité & Authenticité</h4>
              <p className="text-xs text-gray-500 mt-1">Approvisionnement direct auprès des sièges européens, certifié 100% authentique.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
