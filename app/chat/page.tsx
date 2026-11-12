import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, ShieldCheck, Heart } from "lucide-react";

export const metadata = {
  title: "Chat - Alimentation, Litières & Accessoires - Canoopea",
  description:
    "Croquettes fraîches croustillantes MeatCrisp, litières végétales dépoussiérées, arbres à chat et jouets stimulants.",
};

export default function ChatPage() {
  const subcategories = [
    { name: "Alimentation féline", href: "/chat#chatalim" },
    { name: "Friandises naturelles", href: "/chat#friandises" },
    { name: "Arbres à chat & Griffoirs", href: "/chat#arbres" },
    { name: "Litières & Bacs", href: "/chat#litieres" },
    { name: "Jouets interactifs", href: "/chat#jouets" },
  ];

  const products = [
    {
      id: 1,
      name: "Platinum MeatCrisp Stérilisé Poulet – Séché à l'Air Frais",
      brand: "Platinum",
      price: "7,13 €",
      badge: "Coup de Cœur",
      image: "/images/dog-food-1.png",
      href: "/chat#chatalim",
    },
    {
      id: 2,
      name: "Bâtonnets de Friandises Filets Pur Poulet x5",
      brand: "Comfy",
      price: "2,40 €",
      image: "/images/dog-food-5.png",
      href: "/chat#friandises",
    },
    {
      id: 3,
      name: "Herbe à Chats Bio en pot 10,5cm – Fraîche",
      brand: "Canoopea Bio",
      price: "2,90 €",
      badge: "Bio",
      image: "/images/category-plantes.png",
      href: "/chat#chatalim",
    },
    {
      id: 4,
      name: "Gamelle Ergonomique Anti-Vomissement Chat",
      brand: "Comfy",
      price: "11,57 €",
      image: "/images/dog-food-2.png",
      href: "/chat#chatalim",
    },
    {
      id: 5,
      name: "Platinum MeatCrisp Poisson Frais Adulte 1.5kg",
      brand: "Platinum",
      price: "7,63 €",
      image: "/images/dog-food-3.png",
      href: "/chat#chatalim",
    },
    {
      id: 6,
      name: "Litière Végétale Ultra Agglomérante 100% Biodégradable",
      brand: "Comfy",
      price: "12,50 €",
      image: "/images/coeur-stone-1.png",
      href: "/chat#litieres",
    },
    {
      id: 7,
      name: "Griffoir Couchage en Carton Renforcé Durable",
      brand: "Comfy",
      price: "15,90 €",
      image: "/images/category-decorations.png",
      href: "/chat#arbres",
    },
    {
      id: 8,
      name: "Jouet Interactif Laser & Plumes Automatique",
      brand: "Comfy",
      price: "18,90 €",
      image: "/images/category-jouets.png",
      href: "/chat#jouets",
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
          <span className="font-semibold text-gray-900">Chat</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* En-tête textuel propre, strictement séparé du visuel */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b9d]">
            Éveil & Santé Féline
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mt-1">
            Univers Chat
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-3xl">
            Des recettes hautement digestibles sans farines animales, des litières naturelles
            dépoussiérées et des structures de griffage adaptées aux instincts de votre félin.
          </p>
        </div>

        {/* Bannière officielle issue de Images 2 — STRICTEMENT AUCUN TEXTE SUPERPOSÉ */}
        <div className="relative w-full aspect-[1881/763] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm mb-10">
          <Image
            src="/images/page-chat.png"
            alt="Bannière Univers Chat Canoopea"
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
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 hover:border-[#ff6b9d] hover:text-[#ff6b9d] hover:bg-pink-50/40 transition-all shadow-sm"
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
                Les favoris des chats pour une santé et un pelage resplendissants
              </p>
            </div>
            <Link
              href="/chat#tous-les-produits"
              className="text-sm font-semibold text-[#ff6b9d] hover:underline flex items-center gap-1"
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
                    <span className="absolute top-2.5 left-2.5 z-10 bg-[#ff6b9d] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
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
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#ff6b9d] transition-colors line-clamp-2 leading-snug">
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

        {/* Garanties Chats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Heart className="h-6 w-6 text-[#ff6b9d] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Protéines Fraîches</h4>
              <p className="text-xs text-gray-500 mt-1">Viande fraîche séchée doucement pour préserver les nutriments et les arômes.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <ShieldCheck className="h-6 w-6 text-[#ff6b9d] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Litières Confort & Hygiène</h4>
              <p className="text-xs text-gray-500 mt-1">Formules sans poussières, idéales pour les voies respiratoires sensibles.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/70 border border-gray-100">
            <Sparkles className="h-6 w-6 text-[#ff6b9d] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-gray-900">Stimulation Mentale</h4>
              <p className="text-xs text-gray-500 mt-1">Jouets conçus pour stimuler l'instinct de chasse et prévenir l'ennui en intérieur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
