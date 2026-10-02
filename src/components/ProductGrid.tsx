"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Plus, Eye, Sparkles } from "lucide-react";
import { FEATURED_GRID_PRODUCTS } from "@/data/jewellery";
import { useCart } from "@/context/CartContext";

export default function ProductGrid() {
  const { addToCart, toggleWishlist, wishlist, setActiveQuickViewProduct } =
    useCart();
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: "All Works" },
    { key: "necklaces", label: "Necklaces" },
    { key: "rings", label: "Rings" },
    { key: "earrings", label: "Earrings" },
    { key: "bracelets", label: "Bracelets" },
  ];

  const filteredProducts = FEATURED_GRID_PRODUCTS.filter((product) => {
    if (filter === "all") return true;
    if (filter === "necklaces")
      return (
        product.category.toLowerCase().includes("necklace") ||
        product.category.toLowerCase().includes("pendant")
      );
    if (filter === "rings") return product.category.toLowerCase().includes("ring");
    if (filter === "earrings") return product.category.toLowerCase().includes("earring");
    if (filter === "bracelets") return product.category.toLowerCase().includes("bracelet");
    return true;
  });

  return (
    <section
      id="featured"
      className="relative w-full bg-[var(--color-bg)] text-[var(--color-text)] py-28 sm:py-36 md:py-48 px-6 sm:px-12 border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[var(--color-border)] gap-8">
          <div>
            <div className="flex items-center space-x-2 text-[var(--color-gold)] mb-2 font-cinzel text-[10px] tracking-[0.4em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl tracking-[0.05em] uppercase font-light text-[var(--color-text)]">
              FEATURED CREATIONS
            </h2>
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`text-xs uppercase tracking-[0.25em] font-cinzel transition-colors ${
                  filter === cat.key
                    ? "text-[var(--color-text)] border-b border-[var(--color-gold)] pb-1 font-semibold"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Desktop, 1-Column Mobile Large Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-20 lg:gap-y-24">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="group relative flex flex-col select-none"
              >
                {/* Large Editorial Image Container */}
                <div
                  className="relative w-full h-[500px] sm:h-[620px] lg:h-[700px] bg-[var(--color-surface)] overflow-hidden cursor-pointer border border-[var(--color-border)] shadow-2xl"
                  data-cursor
                  data-cursor-text="VIEW"
                  onClick={() => setActiveQuickViewProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] brightness-[0.9]"
                  />

                  {/* Top Badges / Wishlist */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                    <span className="text-[9px] tracking-[0.3em] font-cinzel uppercase px-2.5 py-1 bg-[var(--color-bg-secondary)]/90 backdrop-blur-md text-[var(--color-text)] border border-[var(--color-border)]">
                      {product.tag || "Atelier"}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className="p-2 bg-[var(--color-bg-secondary)]/90 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors"
                      aria-label="Wishlist Item"
                    >
                      <Heart
                        className={`w-4 h-4 stroke-[1.4] ${
                          isWishlisted
                            ? "fill-[var(--color-gold)] text-[var(--color-gold)]"
                            : "text-[var(--color-text)]"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Subtle vignette on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Quick Add overlay at bottom */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="bg-[var(--color-gold)] text-[#0A0A09] font-medium px-5 py-3 text-[10px] tracking-[0.25em] font-cinzel uppercase flex items-center space-x-2 hover:bg-[#F5F2EB] transition-colors shadow-lg"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Acquire Piece</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveQuickViewProduct(product);
                      }}
                      className="bg-[var(--color-bg-secondary)]/90 text-[var(--color-text)] p-3 backdrop-blur-md hover:bg-[var(--color-bg-secondary)] transition-colors shadow-lg border border-[var(--color-border)]"
                      aria-label="View Details"
                    >
                      <Eye className="w-4 h-4 stroke-[1.4]" />
                    </button>
                  </div>
                </div>

                {/* Information sliding upward slightly on hover */}
                <div className="mt-6 flex items-baseline justify-between transition-transform duration-300 group-hover:-translate-y-1">
                  <div>
                    <h3
                      onClick={() => setActiveQuickViewProduct(product)}
                      className="font-serif text-2xl sm:text-3xl tracking-[0.04em] uppercase text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="font-serif italic text-sm text-[var(--color-text-secondary)] mt-1">
                      {product.category} — {product.material}
                    </p>
                  </div>
                  <span className="font-cinzel text-lg sm:text-xl font-medium text-[var(--color-gold)] tracking-wider">
                    {product.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
