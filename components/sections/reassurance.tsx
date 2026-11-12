import React from "react";
import Image from "next/image";

export default function Reassurance() {
  const items = [
    {
      id: "expedition",
      img: "/icons/reassurance-expedition.png",
      alt: "Expédition en 24/48h - vroum vroummm",
    },
    {
      id: "boutique",
      img: "/icons/reassurance-boutique.png",
      alt: "Boutique Française - cocoricooo",
    },
    {
      id: "paiement",
      img: "/icons/reassurance-paiement.png",
      alt: "Paiement 101% sécurisé - comme les dalmatiens",
    },
    {
      id: "livraison",
      img: "/icons/reassurance-livraison.png",
      alt: "Livraison offerte à partir de 69€ - et ouais, rien que ça",
    },
  ];

  return (
    <section className="w-full bg-[#fcfcfc] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center p-2 pt-4 sm:pt-2 first:pt-2"
            >
              <div className="relative w-full h-16 sm:h-20">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
