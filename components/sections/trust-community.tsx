import React from "react";
import Image from "next/image";

export default function TrustCommunity() {
  const testimonials = [
    {
      id: "noe-la-feinte",
      name: "Noé La Feinte",
      description:
        "Noé recherchait à faire un aquarium type biotope Asiatique, mais planté, on a donc réalisé ce coin de tranquillité dans son salon (vidéo)",
      image: "/images/trust-noe-la-feinte.png",
    },
    {
      id: "toopet",
      name: "Toopet",
      description:
        "Création d'un aquarium de 2200 Litres type Amazonien (Vidéo)",
      image: "/images/trust-toopet.png",
    },
    {
      id: "dr-nozman",
      name: "Dr Nozman",
      description:
        "Aquarium dédié à Néo et Ténie, les deux axolotl de DrNozman, une réalisation sur mesure d'un vrai paradis pour ses animaux (vidéo)",
      image: "/images/trust-dr-nozman.png",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-950 mb-12 tracking-tight">
          Ils nous ont fait confiance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              {/* Carte témoignage avec avatar rond préservé sans rognage */}
              <div className="relative w-full aspect-[860/500] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button className="h-2 w-2 rounded-full bg-gray-900" aria-label="Page 1" />
          <button className="h-2 w-2 rounded-full bg-gray-300" aria-label="Page 2" />
        </div>
      </div>
    </section>
  );
}
