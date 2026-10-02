"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Heart, Plus, Shield, Award } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function QuickViewModal() {
  const {
    activeQuickViewProduct,
    setActiveQuickViewProduct,
    addToCart,
    toggleWishlist,
    wishlist,
  } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState<0 | 1>(0);

  if (!activeQuickViewProduct) return null;

  const isWishlisted = wishlist.includes(activeQuickViewProduct.id);
  const currentImage =
    activeImageIndex === 0
      ? activeQuickViewProduct.image
      : activeQuickViewProduct.secondaryImage;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
      {/* Backdrop */}
      <div
        onClick={() => setActiveQuickViewProduct(null)}
        className="fixed inset-0 bg-[#0A0A09]/80 backdrop-blur-md animate-in fade-in duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[var(--color-bg-secondary)] text-[var(--color-text)] shadow-2xl border border-[var(--color-border)] overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={() => setActiveQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 bg-[var(--color-bg-secondary)]/80 backdrop-blur-sm text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors border border-[var(--color-border)]"
          aria-label="Close"
        >
          <X className="w-5 h-5 stroke-[1.4]" />
        </button>

        {/* Left Column: Image Viewer with Multiple Angles */}
        <div className="md:col-span-6 bg-[var(--color-surface)] relative h-[380px] sm:h-[460px] md:h-full min-h-[400px]">
          <Image
            src={currentImage}
            alt={activeQuickViewProduct.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center brightness-[0.9]"
          />

          {/* Alternate angle thumbnail triggers */}
          <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
            <button
              onClick={() => setActiveImageIndex(0)}
              className={`w-12 h-14 relative border transition-all ${
                activeImageIndex === 0
                  ? "border-[var(--color-gold)] scale-105 shadow-md"
                  : "border-white/30 opacity-70"
              }`}
            >
              <Image
                src={activeQuickViewProduct.image}
                alt="View 1"
                fill
                className="object-cover"
              />
            </button>
            <button
              onClick={() => setActiveImageIndex(1)}
              className={`w-12 h-14 relative border transition-all ${
                activeImageIndex === 1
                  ? "border-[var(--color-gold)] scale-105 shadow-md"
                  : "border-white/30 opacity-70"
              }`}
            >
              <Image
                src={activeQuickViewProduct.secondaryImage}
                alt="View 2"
                fill
                className="object-cover"
              />
            </button>
          </div>
        </div>

        {/* Right Column: Detailed Editorial Specifications */}
        <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.35em] uppercase font-cinzel text-[var(--color-gold)]">
                {activeQuickViewProduct.category}
              </span>
              <button
                onClick={() => toggleWishlist(activeQuickViewProduct.id)}
                className="p-1.5 text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors"
                aria-label="Wishlist"
              >
                <Heart
                  className={`w-4 h-4 stroke-[1.4] ${
                    isWishlisted ? "fill-[var(--color-gold)] text-[var(--color-gold)]" : ""
                  }`}
                />
              </button>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide leading-tight text-[var(--color-text)]">
              {activeQuickViewProduct.name}
            </h3>

            <p className="font-cinzel text-2xl font-light text-[var(--color-gold)]">
              {activeQuickViewProduct.price}
            </p>

            <p className="font-serif italic text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {activeQuickViewProduct.description}
            </p>

            {/* Specifications Matrix */}
            <div className="pt-4 border-t border-[var(--color-border)] space-y-2.5 text-xs font-sans">
              <div className="flex justify-between py-1 border-b border-[var(--color-border)]/50">
                <span className="text-[var(--color-text-secondary)] font-cinzel text-[10px] uppercase tracking-wider">
                  Metal & Purity
                </span>
                <span className="text-[var(--color-text)] font-medium">
                  {activeQuickViewProduct.specifications.metal}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--color-border)]/50">
                <span className="text-[var(--color-text-secondary)] font-cinzel text-[10px] uppercase tracking-wider">
                  Gemstone
                </span>
                <span className="text-[var(--color-text)] font-medium">
                  {activeQuickViewProduct.specifications.gemstone}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--color-border)]/50">
                <span className="text-[var(--color-text-secondary)] font-cinzel text-[10px] uppercase tracking-wider">
                  Cut & Symmetry
                </span>
                <span className="text-[var(--color-text)] font-medium">
                  {activeQuickViewProduct.specifications.cut}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--color-border)]/50">
                <span className="text-[var(--color-text-secondary)] font-cinzel text-[10px] uppercase tracking-wider">
                  Atelier Provenance
                </span>
                <span className="text-[var(--color-text)] font-medium">
                  {activeQuickViewProduct.specifications.origin}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                addToCart(activeQuickViewProduct);
                setActiveQuickViewProduct(null);
              }}
              className="w-full py-4 bg-[var(--color-gold)] text-[#0A0A09] text-[10px] tracking-[0.3em] font-cinzel uppercase font-semibold flex items-center justify-center space-x-2 hover:bg-[#F5F2EB] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Acquire This Piece</span>
            </button>

            <div className="flex items-center justify-center space-x-6 text-[9px] tracking-widest uppercase font-cinzel text-[var(--color-text-secondary)] pt-1">
              <span className="flex items-center space-x-1">
                <Shield className="w-3 h-3 text-[var(--color-gold)]" />
                <span>BIS Hallmarked</span>
              </span>
              <span className="flex items-center space-x-1">
                <Award className="w-3 h-3 text-[var(--color-gold)]" />
                <span>GIA Certified</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
