import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Mon Compte - Canoopea",
  description: "Espace client et gestion de profil Canoopea.",
};

export default function MonComptePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100 bg-gray-50/50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-black">
            Accueil
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-gray-900">Mon compte</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <h1 className="text-3xl font-extrabold text-gray-950 tracking-tight mb-8">
          Mon Espace Client
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visuel profil issu de Images 2 sans aucun texte superposé */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm p-4">
            <Image
              src="/images/profil.png"
              alt="Profil utilisateur"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Visuel profil 2 issu de Images 2 sans aucun texte superposé */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm p-4">
            <Image
              src="/images/profil2.png"
              alt="Paramètres du compte"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
