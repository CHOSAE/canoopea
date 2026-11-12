"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  User,
  ShoppingCart,
  Heart,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { NAVIGATION_CATEGORIES, Category, SubCategory } from "./nav-data";
import CartDrawer from "@/components/cart/cart-drawer";

export default function Navbar() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeCategory = NAVIGATION_CATEGORIES.find(
    (c) => c.id === activeCategoryId
  );

  // Set default active subcategory when category changes
  useEffect(() => {
    if (activeCategory?.subcategories && activeCategory.subcategories.length > 0) {
      setActiveSubCategoryId(activeCategory.subcategories[0].id);
    } else {
      setActiveSubCategoryId(null);
    }
  }, [activeCategoryId, activeCategory]);

  const handleMouseEnterCategory = (categoryId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const cat = NAVIGATION_CATEGORIES.find((c) => c.id === categoryId);
    if (cat?.subcategories && cat.subcategories.length > 0) {
      setActiveCategoryId(categoryId);
    } else {
      setActiveCategoryId(null);
    }
  };

  const handleMouseLeaveNav = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategoryId(null);
    }, 200);
  };

  const handleMouseEnterSubCategory = (subCatId: string) => {
    setActiveSubCategoryId(subCatId);
  };

  const currentSubCategory: SubCategory | undefined =
    activeCategory?.subcategories?.find((s) => s.id === activeSubCategoryId) ||
    activeCategory?.subcategories?.[0];

  return (
    <>
      <header
        className="w-full bg-white border-b border-gray-100 z-40 relative"
        ref={navContainerRef}
        onMouseLeave={handleMouseLeaveNav}
      >
        {/* TOP BAR CANOOPEA (Exact Green #249e3f) */}
        <div className="w-full bg-[#249e3f] text-white text-xs py-2 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Social Icons & Contact */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="h-3.5 w-3.5 fill-current" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://youtube.com/@GabAqua"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <Youtube className="h-3.5 w-3.5 fill-current" />
                </a>
              </div>
              <span className="text-white/40">|</span>
              <Link
                href="/contact"
                className="hover:underline font-medium transition-all"
              >
                Contactez-nous
              </Link>
            </div>

            {/* Wishlist */}
            <div className="flex items-center gap-1.5 font-medium hover:underline cursor-pointer">
              <Heart className="h-3.5 w-3.5" />
              <span>Wishlist (0)</span>
            </div>
          </div>
        </div>

        {/* MIDDLE HEADER: LOGO, SEARCH BAR, USER, CART */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between gap-6">
          {/* Logo Canoopea animé */}
          <Link href="/" className="flex-shrink-0 block" aria-label="Accueil Canoopea">
            <div className="relative h-14 w-44 sm:h-16 sm:w-52 flex items-center overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-contain object-left pointer-events-none"
              >
                <source src="/videos/logo-anime.mp4" type="video/mp4" />
                <source src="/images/logo-anime.mp4" type="video/mp4" />
                <source src="/logo-anime.mp4" type="video/mp4" />
              </video>
              <span className="sr-only">Canoopea - Animalerie en ligne</span>
            </div>
          </Link>

          {/* Search bar corrected */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Plus de 5000 références pour vos animaux !"
                className="w-full bg-[#f4f4f4] hover:bg-[#eaeaea] focus:bg-white text-gray-800 text-sm rounded-full pl-6 pr-12 py-3 border border-transparent focus:border-gray-300 focus:outline-none transition-colors placeholder:text-gray-500"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 pointer-events-none">
                <Search className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* User Account & Cart Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/mon-compte"
              className="text-gray-800 hover:text-black transition-colors"
              aria-label="Mon compte"
            >
              <User className="h-7 w-7 stroke-[1.8]" />
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-800 hover:text-black transition-colors"
              aria-label="Panier"
            >
              <ShoppingCart className="h-7 w-7 stroke-[1.8]" />
              <span className="absolute -top-1.5 -right-2 bg-[#249e3f] text-white text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-sm">
                1
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-800 hover:text-black p-1"
              aria-label="Menu mobile"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        <div className="md:hidden px-4 pb-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Plus de 5000 références..."
              className="w-full bg-[#f4f4f4] text-gray-800 text-sm rounded-full pl-5 pr-10 py-2.5 border border-transparent focus:outline-none"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* CATEGORIES NAVIGATION BAR WITH AUTHENTIC MASCOTS */}
        <nav className="border-t border-gray-100 hidden md:block bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <ul className="flex items-center justify-between py-1">
              {NAVIGATION_CATEGORIES.map((category) => {
                const isActive = activeCategoryId === category.id;
                return (
                  <li
                    key={category.id}
                    onMouseEnter={() => handleMouseEnterCategory(category.id)}
                    className="relative"
                  >
                    <Link
                      href={category.href}
                      className="group/item flex flex-col items-center justify-center px-3 py-2 text-center transition-all duration-200 rounded-lg hover:bg-gray-50/80"
                    >
                      {/* Mascot Icon Container (Fixed clear bounds without overlapping text) */}
                      <div className="relative h-9 w-12 flex items-center justify-center transition-transform duration-200 group-hover/item:scale-110">
                        <Image
                          src={category.mascot}
                          alt=""
                          fill
                          sizes="48px"
                          className="object-contain"
                        />
                      </div>

                      {/* Category Label (clean standalone typography, no overlap) */}
                      <span
                        className={`mt-1.5 block text-xs font-bold tracking-tight whitespace-nowrap leading-tight transition-colors ${
                          isActive
                            ? category.accentText
                            : "text-gray-900 group-hover/item:text-black"
                        }`}
                      >
                        {category.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* MEGA MENU DROPDOWN PANEL */}
        {activeCategory && activeCategory.subcategories && (
          <div
            className="absolute top-full left-0 w-full bg-white border-t border-b border-gray-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-200"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
          >
            <div className="max-w-7xl mx-auto flex min-h-[460px]">
              {/* Left Subcategories Sidebar */}
              <div className="w-64 border-r border-gray-100 py-4 flex-shrink-0 bg-white">
                <ul className="space-y-1 px-3">
                  {activeCategory.subcategories.map((subCat) => {
                    const isSubActive =
                      subCat.id === (currentSubCategory?.id || "");
                    return (
                      <li key={subCat.id}>
                        <button
                          type="button"
                          onMouseEnter={() =>
                            handleMouseEnterSubCategory(subCat.id)
                          }
                          onClick={() => handleMouseEnterSubCategory(subCat.id)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-left text-sm font-semibold transition-all ${
                            isSubActive
                              ? `${activeCategory.accentBg} text-white shadow-sm`
                              : "text-gray-800 hover:bg-gray-50 hover:text-black"
                          }`}
                        >
                          <span>{subCat.name}</span>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform ${
                              isSubActive ? "text-white" : "text-gray-400"
                            }`}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Right Content Area: Sections Columns & Featured Products */}
              <div className="flex-1 p-8 flex flex-col justify-between bg-white">
                {/* Columns Grid */}
                {currentSubCategory && (
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {currentSubCategory.sections.map((section, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4
                            className={`text-xs font-bold uppercase tracking-wider ${activeCategory.accentText}`}
                          >
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <Link
                                  href={`/catalogue?search=${encodeURIComponent(
                                    link
                                  )}`}
                                  className="text-xs text-gray-700 hover:text-black hover:font-semibold transition-colors block py-0.5"
                                >
                                  {link}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Featured Products in Mega Menu */}
                    {currentSubCategory.featuredProducts &&
                      currentSubCategory.featuredProducts.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-gray-100">
                          <div className="grid grid-cols-5 gap-4">
                            {currentSubCategory.featuredProducts.map(
                              (prod, pIdx) => (
                                <Link
                                  key={pIdx}
                                  href="/produit"
                                  className="group/prod flex flex-col justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all bg-white"
                                >
                                  <div>
                                    {prod.badge && (
                                      <div className="mb-2">
                                        <span
                                          className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                            prod.badgeColor === "green"
                                              ? "bg-emerald-600 text-white"
                                              : "bg-red-500 text-white"
                                          }`}
                                        >
                                          {prod.badge}
                                        </span>
                                      </div>
                                    )}
                                    <h5 className="text-xs font-semibold text-gray-800 line-clamp-2 group-hover/prod:text-[#249e3f] transition-colors">
                                      {prod.name}
                                    </h5>
                                  </div>
                                  <div className="mt-3 flex items-baseline gap-2">
                                    <span className="text-sm font-bold text-orange-600">
                                      {prod.price}
                                    </span>
                                    {prod.oldPrice && (
                                      <span className="text-[11px] text-gray-400 line-through">
                                        {prod.oldPrice}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* MOBILE DRAWER NAVIGATION */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {NAVIGATION_CATEGORIES.map((category) => (
              <div key={category.id} className="border-b border-gray-100 pb-3">
                <Link
                  href={category.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 font-bold text-gray-900"
                >
                  <div className="relative h-8 w-10">
                    <Image
                      src={category.mascot}
                      alt={category.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{category.name}</span>
                </Link>

                {category.subcategories && (
                  <div className="pl-12 pt-1 space-y-1">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/${category.id}#${sub.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-xs font-medium text-gray-600 hover:text-[#249e3f] py-1"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Cart Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}