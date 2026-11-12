import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function StoreCategories() {
  const featuredBanners = [
    {
      title: "Décorations",
      href: "/aquarium#decoration",
      image: "/images/category-decorations.png",
      alt: "Décorations pour aquascaping et biotopes",
    },
    {
      title: "Plantes",
      href: "/aquarium#plantes",
      image: "/images/category-plantes.png",
      alt: "Plantes in vitro et terrarium",
    },
    {
      title: "Jouets",
      href: "/chien#jouets",
      image: "/images/category-jouets.png",
      alt: "Jouets pour chiens et animaux",
    },
  ];

  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-950 mb-8 tracking-tight">
          Votre animalerie en ligne
        </h2>

        {/* 3 Bannières thématiques Décorations, Plantes, Jouets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBanners.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="group relative block w-full aspect-[565/235] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="sr-only">{cat.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
