"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus, Eye } from "lucide-react";
import { SIGNATURE_PRODUCTS } from "@/data/jewellery";
import { useCart } from "@/context/CartContext";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function HorizontalCollection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { addToCart, setActiveQuickViewProduct } = useCart();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || prefersReducedMotion || !containerRef.current || !trackRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      // Pinned Horizontal Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1.1,
          start: "top top",
          end: () => `+=${totalScrollWidth + 300}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      tl.to(track, {
        x: () => -totalScrollWidth,
        ease: "none",
      });

      // Subtle product scaling and opacity changes as cards scroll
      const cards = gsap.utils.toArray<HTMLElement>(".signature-card");
      cards.forEach((card) => {
        const img = card.querySelector(".signature-img");
        const num = card.querySelector(".signature-num");

        gsap.fromTo(
          img,
          { scale: 0.94 },
          {
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 85%",
              end: "center 50%",
              scrub: true,
            },
          }
        );

        if (num) {
          gsap.fromTo(
            num,
            { opacity: 0.35 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tl,
                start: "left 85%",
                end: "center 50%",
                scrub: true,
              },
            }
          );
        }
      });
    }, containerRef);

    // Refresh scroll triggers when images load
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      id="signature"
      className="relative w-full bg-[#083735] text-[#FBF2E1] overflow-hidden"
    >
      {/* Header bar across section */}
      <div className="pt-16 sm:pt-20 pb-8 px-5 sm:px-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--color-border)]">
        <div>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] font-cinzel block mb-2 font-medium">
            Selection No. 01 / Haute Joaillerie
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[0.05em] uppercase font-light text-[#FBF2E1]">
            SIGNATURE COLLECTION
          </h2>
        </div>
        <p className="mt-4 md:mt-0 font-serif italic text-sm sm:text-base text-[var(--color-text-secondary)] max-w-xs">
          Sculpted in pure 18 karat gold and rare natural diamonds.
        </p>
      </div>

      {/* Desktop: Pinned Horizontal Scroll Gallery */}
      {!isMobile ? (
        <div className="h-[80vh] flex items-center">
          <div
            ref={trackRef}
            className="flex items-center space-x-12 sm:space-x-16 px-10 sm:px-20 will-change-transform"
          >
            {SIGNATURE_PRODUCTS.map((product, idx) => (
              <div
                key={product.id}
                className="signature-card relative flex-shrink-0 w-[420px] xl:w-[480px] group select-none"
              >
                {/* Product Number */}
                <div className="flex items-center justify-between mb-3 text-xs font-cinzel tracking-[0.3em] text-[var(--color-text-secondary)]">
                  <span className="signature-num font-medium text-[var(--color-gold)]">
                    0{idx + 1}
                  </span>
                  <span className="uppercase tracking-[0.2em] text-[10px]">
                    {product.tag || "Atelier Masterpiece"}
                  </span>
                </div>

                {/* Editorial Image Container */}
                <div
                  className="relative h-[480px] xl:h-[520px] w-full overflow-hidden bg-[#0E5653] cursor-pointer shadow-2xl border border-[var(--color-border)]"
                  data-cursor
                  data-cursor-text="VIEW"
                  onClick={() => setActiveQuickViewProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="480px"
                    className="signature-img object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.88] contrast-[1.05]"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4745]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="bg-[var(--color-gold)] text-[#0B4745] font-semibold px-4 py-2.5 text-[10px] tracking-[0.2em] font-cinzel uppercase flex items-center space-x-2 hover:bg-[#FBF2E1] transition-colors shadow-lg"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Acquire Piece</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveQuickViewProduct(product);
                      }}
                      className="bg-[#0B4745]/85 text-[#FBF2E1] p-2.5 backdrop-blur-sm hover:bg-[#0B4745] transition-colors border border-[var(--color-border)]"
                      aria-label="View Details"
                    >
                      <Eye className="w-4 h-4 stroke-[1.4]" />
                    </button>
                  </div>
                </div>

                {/* Details under image */}
                <div className="mt-5 flex items-baseline justify-between border-b border-[var(--color-border)] pb-4">
                  <div>
                    <h3
                      onClick={() => setActiveQuickViewProduct(product)}
                      className="font-serif text-2xl tracking-[0.04em] uppercase text-[#FBF2E1] group-hover:text-[var(--color-gold)] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs font-sans tracking-[0.1em] text-[var(--color-text-secondary)] mt-0.5">
                      {product.category}
                    </p>
                  </div>
                  <span className="font-cinzel text-sm sm:text-base font-semibold text-[var(--color-gold)] tracking-wider">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}

            {/* Ending Editorial Card */}
            <div className="flex-shrink-0 w-[360px] h-[520px] border border-[var(--color-border)] p-8 flex flex-col justify-between bg-[#0E5653]/70 shadow-2xl backdrop-blur-md">
              <div>
                <span className="text-[10px] tracking-[0.4em] font-cinzel text-[var(--color-gold)] uppercase font-medium">
                  Private Salon
                </span>
                <h4 className="font-serif text-3xl uppercase tracking-wider mt-4 leading-tight text-[#FBF2E1]">
                  BESPOKE <br />
                  COMMISSIONS
                </h4>
                <p className="font-serif text-sm italic text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                  Every singular vision deserves tailored mastery. Schedule an
                  exclusive salon viewing with our senior master jewelers.
                </p>
              </div>

              <a
                href="#bespoke"
                className="btn-editorial btn-editorial-dark"
                data-cursor
                data-cursor-text="INQUIRE"
              >
                <span>RESERVE SALON</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* Mobile: Graceful Vertical Editorial Cards */
        <div className="py-10 px-5 space-y-12">
          {SIGNATURE_PRODUCTS.map((product, idx) => (
            <div
              key={product.id}
              className="border-b border-[var(--color-border)] pb-8 select-none"
            >
              <div className="flex items-center justify-between mb-2 text-xs font-cinzel text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-gold)] font-semibold">0{idx + 1}</span>
                <span className="text-[10px] tracking-widest uppercase">
                  {product.tag}
                </span>
              </div>
              <div
                className="relative h-[380px] w-full bg-[#0E5653] overflow-hidden border border-[var(--color-border)]"
                onClick={() => setActiveQuickViewProduct(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.88]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-2xl uppercase tracking-wider text-[#FBF2E1]">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">{product.category}</p>
                </div>
                <span className="font-cinzel text-base font-semibold text-[var(--color-gold)]">
                  {product.price}
                </span>
              </div>
              <div className="mt-4 flex space-x-3">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-[var(--color-gold)] text-[#0B4745] font-semibold py-3 text-xs tracking-[0.2em] font-cinzel uppercase flex items-center justify-center space-x-2"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Acquire Piece</span>
                </button>
                <button
                  onClick={() => setActiveQuickViewProduct(product)}
                  className="px-4 border border-[var(--color-border)] text-[#FBF2E1] text-xs font-cinzel tracking-widest uppercase"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
