"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ChevronRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#121212] text-white pt-14 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Newsletter Subscription Box */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <form
            onSubmit={handleNewsletterSubmit}
            className="relative flex items-center justify-center max-w-2xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={isSubscribed ? "Merci pour votre inscription !" : "Votre adresse e-mail"}
              className="w-full bg-white text-gray-900 rounded-full px-6 py-4 pr-14 text-sm font-medium focus:outline-none shadow-lg placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="absolute right-4 text-gray-400 hover:text-[#249e3f] transition-colors p-2"
              aria-label="S'inscrire à la newsletter"
            >
              {isSubscribed ? (
                <Check className="h-5 w-5 text-[#249e3f]" />
              ) : (
                <Mail className="h-5 w-5" />
              )}
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-400 leading-relaxed max-w-xl mx-auto">
            Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d&apos;utilisation du site.
          </p>
        </div>

        {/* Footer 3 Columns matching Canoopea */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-800 pt-12">
          {/* Col 1: Informations */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white mb-2">
              Informations
            </h3>
            <div className="w-10 h-0.5 bg-white mb-6" />
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/mentions-legales"
                  className="flex items-center gap-1.5 hover:text-[#249e3f] transition-colors"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
                  <span>Mentions légales</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv"
                  className="flex items-center gap-1.5 hover:text-[#249e3f] transition-colors"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
                  <span>Conditions générales de vente et d’utilisation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/livraison-retour"
                  className="flex items-center gap-1.5 hover:text-[#249e3f] transition-colors"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
                  <span>Livraison et retour</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="flex items-center gap-1.5 hover:text-[#249e3f] transition-colors"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
                  <span>Politique de confidentialité</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Mon compte */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white mb-2">
              Mon compte
            </h3>
            <div className="w-10 h-0.5 bg-white mb-6" />
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/mon-compte/informations"
                  className="flex items-center gap-1.5 hover:text-[#249e3f] transition-colors"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
                  <span>Mes informations personnelles</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mon-compte/commandes"
                  className="flex items-center gap-1.5 hover:text-[#249e3f] transition-colors"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
                  <span>Mes commandes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mon-compte/fidelite"
                  className="flex items-center gap-1.5 hover:text-[#249e3f] transition-colors"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
                  <span>Mes points fidélités</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contactez-nous */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white mb-2">
              Contactez-nous
            </h3>
            <div className="w-10 h-0.5 bg-white mb-6" />
            <div className="space-y-4 text-sm text-gray-300">
              <p className="font-bold text-white text-base">Canoopea</p>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors border-t border-neutral-800 pt-3">
                <Mail className="h-4 w-4 text-[#249e3f]" />
                <a href="mailto:canoopea@gmail.com" className="hover:underline">
                  canoopea@gmail.com
                </a>
              </div>
              <p className="text-xs text-gray-500 pt-2">
                © {new Date().getFullYear()} canoopea.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
