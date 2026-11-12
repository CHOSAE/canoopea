import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Votre Panier - Canoopea",
  description: "Récapitulatif de votre panier d'achats sur Canoopea.",
};

export default function PanierPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100 bg-gray-50/50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-black">
            Accueil
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-gray-900">Panier</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <h1 className="text-3xl font-extrabold text-gray-950 tracking-tight mb-6">
          Votre Panier
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {/* Visuel panier issu de Images 2 sans aucun texte superposé */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm p-4">
              <Image
                src="/images/Panier.png"
                alt="Aperçu du panier"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-gray-200 bg-gray-50/50 h-fit space-y-4">
            <h2 className="text-lg font-bold text-gray-900">
              Résumé de la commande
            </h2>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Sous-total</span>
              <span className="font-bold text-gray-900">20,38 €</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Livraison (Mondial Relay)</span>
              <span className="font-semibold text-[#249e3f]">Offerte</span>
            </div>
            <div className="pt-4 border-t border-gray-200 flex justify-between items-baseline">
              <span className="text-base font-bold text-gray-900">Total TTC</span>
              <span className="text-2xl font-extrabold text-gray-950">20,38 €</span>
            </div>
            <Link
              href="/checkout"
              className="w-full flex items-center justify-center gap-2 bg-[#249e3f] hover:bg-[#1f8c36] text-white font-bold h-12 rounded-full text-base transition-colors shadow-sm"
            >
              <span>Valider la commande</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
