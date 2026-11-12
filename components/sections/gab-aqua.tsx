import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";

export default function GabAqua() {
  const points = [
    "Depuis l’enfance, je suis passionné par les animaux. Très tôt, je me suis tourné vers les NACs, notamment l’aquariophilie, où recréer des écosystèmes et comprendre les besoins de chaque espèce est vite devenu bien plus qu’un simple loisir.",
    "Pour partager cette passion, j’ai lancé ma chaîne YouTube afin de promouvoir la bonne maintenance des animaux et faire découvrir cet univers au plus grand nombre, de manière accessible et responsable.",
    "Avec le soutien grandissant de la communauté, j’ai créé Canoopea : une plateforme pensée pour accompagner les passionnés, mieux s’informer, s’équiper et toujours placer le bien-être animal au centre de nos choix.",
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-[40px] bg-[#1a1a1a] text-white p-6 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
          {/* Magic UI Border Beam Animation */}
          <BorderBeam size={350} duration={12} colorFrom="#249e3f" colorTo="#10b981" borderWidth={2} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Photo of Gab with giant tortoise */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] h-[340px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-2 border-neutral-700/60">
                <Image
                  src="/images/gab-tortue.png"
                  alt="Gab Aqua avec une tortue géante"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Story & YouTube CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Gab Aqua sur YouTube
              </h2>

              <div className="space-y-4 pt-2">
                {points.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      {/* Leaf icon matching Canoopea logo */}
                      <svg
                        className="w-5 h-5 text-[#249e3f] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://www.youtube.com/@GabAqua"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#249e3f] hover:bg-[#1f8c36] text-white font-extrabold px-10 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-emerald-950/40"
                >
                  REJOINS-NOUS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
