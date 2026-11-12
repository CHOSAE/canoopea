import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ShimmerButton from "@/components/ui/shimmer-button";

export default function HeroBanner() {
  return (
    <section className="w-full py-3 sm:py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Vidéo fixe avec dégradé sombre et titre accrocheur CRO */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/6] md:aspect-[16/5] min-h-[290px] rounded-2xl overflow-hidden shadow-md bg-black group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          >
            <source src="/videos/terrarium-hero.mp4" type="video/mp4" />
            <source src="/terrarium-hero.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>

          {/* Dégradé sombre pour lisibilité optimale */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/50 sm:to-transparent flex items-center" />

          {/* Contenu textuel et Call-To-Action Shimmer Button */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 max-w-2xl text-white z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold w-fit mb-3">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>Univers Vivant & Végétalisé</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight drop-shadow-md text-white mb-2 sm:mb-3">
              Créez votre écosystème naturel
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2 sm:line-clamp-none max-w-lg mb-5 drop-shadow leading-relaxed">
              Terrariums tropicaux d&apos;exception, biotopes vivants, brumisation et décors naturels sélectionnés par des passionnés.
            </p>

            <div>
              <Link href="/terrarium" className="inline-block">
                <ShimmerButton className="bg-[#249e3f] hover:bg-[#1d8234] text-white px-5 sm:px-7 py-3 text-xs sm:text-sm md:text-base font-bold shadow-2xl shadow-green-950/50 border border-green-300/30">
                  <span>Découvrir l&apos;univers Terrarium</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
