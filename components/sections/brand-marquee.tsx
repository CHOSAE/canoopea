import React from "react";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";

export default function BrandMarquee() {
  const brandLogos = [
    {
      id: "oase",
      name: "OASE",
      tagline: "LIVING WATER",
      accent: "group-hover:text-[#0080c8]",
      badge: "Aquariophilie",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          <path d="M8 14c1.5 2 4.5 2 6 0" />
        </svg>
      ),
    },
    {
      id: "tropica",
      name: "Tropica",
      tagline: "AQUARIUM PLANTS",
      accent: "group-hover:text-[#22c55e]",
      badge: "Plantes In Vitro",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
    },
    {
      id: "chihiros",
      name: "Chihiros",
      tagline: "AQUATIC STUDIO",
      accent: "group-hover:text-[#0d9488]",
      badge: "Éclairage LED & CO2",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="3" fill="currentColor" fillOpacity="0.15" />
          <line x1="6" y1="12" x2="18" y2="12" />
          <line x1="12" y1="6" x2="12" y2="18" />
        </svg>
      ),
    },
    {
      id: "aqua-biotope",
      name: "Aqua Biotope",
      tagline: "HARDSCAPE & STONES",
      accent: "group-hover:text-[#d97706]",
      badge: "Roches & Sables",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 22 22 22" fill="currentColor" fillOpacity="0.15" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="7" y1="12" x2="17" y2="12" />
        </svg>
      ),
    },
    {
      id: "habistat",
      name: "HabiStat",
      tagline: "TERRARIUM CARE",
      accent: "group-hover:text-[#ea580c]",
      badge: "Terrariophilie",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 7v5l3 3" />
          <path d="M7 12h2" />
          <path d="M15 12h2" />
        </svg>
      ),
    },
    {
      id: "superfish",
      name: "SuperFish",
      tagline: "PASSION FOR AQUARIA",
      accent: "group-hover:text-[#2563eb]",
      badge: "Matériel & Pompes",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6s-7.56-2.54-8.5-6Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M2 16l4.5-4L2 8" />
          <circle cx="16" cy="11" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "platinum",
      name: "PLATINUM",
      tagline: "NATURAL PET FOOD",
      accent: "group-hover:text-[#b45309]",
      badge: "Alimentation Chien",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" fill="currentColor" fillOpacity="0.15" />
        </svg>
      ),
    },
    {
      id: "juwel",
      name: "JUWEL",
      tagline: "AQUARIUM GERMANY",
      accent: "group-hover:text-[#1e40af]",
      badge: "Cuves & Meubles",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="14" rx="2" fill="currentColor" fillOpacity="0.15" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="8" y1="18" x2="8" y2="21" />
          <line x1="16" y1="18" x2="16" y2="21" />
        </svg>
      ),
    },
    {
      id: "aquael",
      name: "AQUAEL",
      tagline: "ADVANCED AQUATICS",
      accent: "group-hover:text-[#0284c7]",
      badge: "Filtration & Chauffage",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <path d="M2 12h20M2 12a10 10 0 0 1 10-10M2 12a10 10 0 0 0 10 10" fill="currentColor" fillOpacity="0.15" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: "arcadia",
      name: "ARCADIA",
      tagline: "LIGHTING TECHNOLOGY",
      accent: "group-hover:text-[#e11d48]",
      badge: "UVB Reptiles",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ),
    },
    {
      id: "easy-life",
      name: "EASY-LIFE",
      tagline: "WATERCARE PRODUCT",
      accent: "group-hover:text-[#059669]",
      badge: "Soin de l'eau",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <path d="M10 2v7.31a5 5 0 0 1-1.32 3.44L4 18.5A2.5 2.5 0 0 0 6 22h12a2.5 2.5 0 0 0 2-3.5l-4.68-5.75A5 5 0 0 1 14 9.31V2" fill="currentColor" fillOpacity="0.15" />
          <line x1="8.5" y1="2" x2="15.5" y2="2" />
        </svg>
      ),
    },
    {
      id: "primordial",
      name: "PRIMORDIAL",
      tagline: "GRAIN FREE DIET",
      accent: "group-hover:text-[#78350f]",
      badge: "Alimentation Sauvage",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 21l7.03-3.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 8v8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 bg-gray-50/70 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-extrabold">
          Les plus grandes marques sélectionnées pour vous
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:36s]">
        {brandLogos.map((brand) => (
          <Link
            key={brand.id}
            href={`/nos-marques#${brand.id}`}
            className="flex items-center gap-3 px-5 py-2.5 mx-2 bg-white rounded-xl border border-gray-200/90 shadow-xs hover:border-[#249e3f] hover:shadow-md transition-all duration-300 filter grayscale opacity-65 hover:grayscale-0 hover:opacity-100 hover:scale-105 group select-none"
          >
            <div className={`transition-colors duration-300 text-gray-700 ${brand.accent}`}>
              {brand.icon}
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`text-xs sm:text-sm font-black tracking-wide text-gray-900 ${brand.accent} transition-colors duration-300`}>
                {brand.name}
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-gray-400 uppercase">
                {brand.tagline}
              </span>
            </div>
          </Link>
        ))}
      </Marquee>
    </section>
  );
}
