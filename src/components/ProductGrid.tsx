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
      className="relative w-full bg-[#071510] text-[#F5F7F2] py-24 sm:py-36 md:py-44 px-5 sm:px-10 border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[var(--color-border)] gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[var(--color-gold)] mb-2 font-cinzel text-[10px] tracking-[0.4em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[0.05em] uppercase font-light text-[#F5F7F2]">
              FEATURED CREATIONS
            </h2>
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="flex flex-wrap gap-3 sm:gap-6">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`text-xs uppercase tracking-[0.22em] font-cinzel transition-colors ${
                  filter === cat.key
                    ? "text-[#F5F7F2] border-b border-[var(--color-gold)] pb-1 font-semibold"
                    : "text-[var(--color-text-secondary)] hover:text-[#F5F7F2]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Desktop, 1-Column Mobile Large Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-16 lg:gap-y-24">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="group relative flex flex-col select-none"
              >
                {/* Large Editorial Image Container */}
                <div
                  className="relative w-full h-[420px] sm:h-[580px] lg:h-[680px] bg-[#132B23] overflow-hidden cursor-pointer border border-[var(--color-border)] shadow-2xl"
                  data-cursor
                  data-cursor-text="VIEW"
                  onClick={() => setActiveQuickViewProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] brightness-[0.88] contrast-[1.05]"
                  />

                  {/* Top Badges / Wishlist */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="text-[9px] tracking-[0.3em] font-cinzel uppercase px-2.5 py-1 bg-[#071510]/85 backdrop-blur-md text-[var(--color-gold)] border border-[var(--color-border)]">
                      {product.tag || "Atelier"}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className="p-2 bg-[#071510]/85 backdrop-blur-md border border-[var(--color-border)] text-[#F5F7F2] hover:text-[var(--color-gold)] transition-colors"
                      aria-label="Wishlist Item"
                    >
                      <Heart
                        className={`w-4 h-4 stroke-[1.4] ${
                          isWishlisted
                            ? "fill-[var(--color-gold)] text-[var(--color-gold)]"
                            : "text-[#F5F7F2]"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Subtle vignette on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071510]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Quick Add overlay at bottom */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="bg-[var(--color-gold)] text-[#071510] font-semibold px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] tracking-[0.25em] font-cinzel uppercase flex items-center space-x-2 hover:bg-[#F5F7F2] transition-colors shadow-xl"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Acquire Piece</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveQuickViewProduct(product);
                      }}
                      className="bg-[#071510]/85 text-[#F5F7F2] p-2.5 sm:p-3 backdrop-blur-md hover:bg-[#071510] transition-colors shadow-lg border border-[var(--color-border)]"
                      aria-label="View Details"
                    >
                      <Eye className="w-4 h-4 stroke-[1.4]" />
                    </button>
                  </div>
                </div>

                {/* Information sliding upward slightly on hover */}
                <div className="mt-5 flex items-baseline justify-between transition-transform duration-300 group-hover:-translate-y-1">
                  <div>
                    <h3
                      onClick={() => setActiveQuickViewProduct(product)}
                      className="font-serif text-2xl sm:text-3xl tracking-[0.04em] uppercase text-[#F5F7F2] group-hover:text-[var(--color-gold)] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="font-serif italic text-sm text-[var(--color-text-secondary)] mt-1">
                      {product.category} — {product.material}
                    </p>
                  </div>
                  <span className="font-cinzel text-base sm:text-xl font-medium text-[var(--color-gold)] tracking-wider">
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
