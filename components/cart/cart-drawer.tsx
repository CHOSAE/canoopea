"use client";

import React from "react";
import { X, Trash2, ArrowRight, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  if (!isOpen) return null;

  const currentAmount = 20.38;
  const freeShippingThreshold = 69.0;
  const remainingForFreeShipping = Math.max(
    0,
    freeShippingThreshold - currentAmount
  ).toFixed(2);
  const progressPercent = Math.min(
    100,
    Math.round((currentAmount / freeShippingThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Panier</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Free shipping bar matching Canoopea */}
          <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
              <span className="text-base">📦</span>
              <span>
                Encore <strong className="text-emerald-700">{remainingForFreeShipping}€</strong> pour la livraison gratuite (-7kg)
              </span>
            </div>
            {/* Progress track */}
            <div className="w-full bg-gray-200 h-2.5 rounded-full mt-2.5 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-end items-center gap-1 mt-1.5 text-[11px] text-gray-500">
              <span>📦 69€</span>
              <span>Livraison offerte (-7kg)</span>
            </div>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-gray-100">
            <div className="py-4 first:pt-0 flex gap-4 items-start">
              <div className="w-16 h-20 relative bg-gray-50 rounded-lg flex-shrink-0 flex items-center justify-center p-2 border border-gray-100">
                <Image
                  src="/images/cart-artemia-liquid.png"
                  alt="Artemia Baby Liquid pour Alevins - Hobby"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  Artemia Baby Liquid pour Alevins - Hobby
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">ml: 125ml</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-gray-200 rounded-md">
                    <button className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100">
                      -
                    </button>
                    <span className="px-2 text-xs font-semibold text-gray-800">
                      1
                    </span>
                    <button className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                  <span className="text-sm font-bold text-orange-600">
                    16,90 €
                  </span>
                </div>
              </div>

              <button
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                aria-label="Supprimer"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Footer calculation & checkout */}
          <div className="border-t border-gray-100 p-6 bg-white space-y-4">
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>1 article</span>
                <span>16,90 €</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>3,48 €</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3 flex justify-between items-baseline">
              <div>
                <span className="text-base font-bold text-gray-900">Total TTC</span>
                <p className="text-[10px] text-gray-400">Taxes incluses</p>
              </div>
              <span className="text-2xl font-extrabold text-gray-900">
                20,38 €
              </span>
            </div>

            <div className="space-y-2 pt-2">
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center bg-[#249e3f] hover:bg-[#1f8c36] text-white font-bold h-12 rounded-full text-base shadow-sm gap-2 transition-colors"
              >
                <span>Commander</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/panier"
                className="w-full flex items-center justify-center border border-gray-300 text-gray-700 font-semibold h-11 rounded-full text-sm hover:bg-gray-50 transition-colors"
              >
                Voir le panier complet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
