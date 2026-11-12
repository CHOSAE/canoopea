"use client";

import HeroBanner from "@/components/sections/hero-banner";
import Reassurance from "@/components/sections/reassurance";
import BrandMarquee from "@/components/sections/brand-marquee";
import StoreCategories from "@/components/sections/store-categories";
import NosNouveautes from "@/components/sections/nos-nouveautes";
import FlashDeals from "@/components/sections/flash-deals";
import CoupsDeCoeur from "@/components/sections/coups-de-coeur";
import TerrariumUniverse from "@/components/sections/terrarium-universe";
import DogFood from "@/components/sections/dog-food";
import GabAqua from "@/components/sections/gab-aqua";
import TrustCommunity from "@/components/sections/trust-community";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Mondial Relay Hero Carousel Banner */}
      <HeroBanner />

      {/* 2. Reassurance Bar (Expédition 24/48h, Boutique Française, etc.) */}
      <Reassurance />

      {/* 3. Magic UI Infinite Brand Ribbon */}
      <BrandMarquee />

      {/* 4. Votre animalerie en ligne (Catégories) */}
      <StoreCategories />

      {/* 5. Nos nouveautés */}
      <NosNouveautes />

      {/* 6. Nos offres du moment (Flash Deals with Live Timer) */}
      <FlashDeals />

      {/* 7. Nos coups de cœurs (Hardscape & Aqua Biotope) */}
      <CoupsDeCoeur />

      {/* 8. Univers terrarium */}
      <TerrariumUniverse />

      {/* 9. Croquettes pour chiens */}
      <DogFood />

      {/* 10. Gab Aqua sur YouTube (Founder Story & Tortoise) */}
      <GabAqua />

      {/* 11. Ils nous ont fait confiance (Toopet, Dr Nozman, Noé La Feinte) */}
      <TrustCommunity />
    </div>
  );
}
