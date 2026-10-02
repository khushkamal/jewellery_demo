"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SIGNATURE_PRODUCTS } from "@/data/jewellery";
import { useCart } from "@/context/CartContext";
import { gsap } from "@/lib/gsap";

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const goldLineRef = useRef<HTMLDivElement | null>(null);
  const { setActiveQuickViewProduct, addToCart } = useCart();

  const celesteProduct = SIGNATURE_PRODUCTS[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Product Showcase Scrubbed Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 30%",
          scrub: 1.1,
        },
      });

      tl.fromTo(
        imageWrapperRef.current,
        {
          scale: 0.65,
          rotation: -3,
          x: 80,
          opacity: 0,
        },
        {
          scale: 1.05,
          rotation: 0,
          x: 0,
          opacity: 1,
          ease: "power2.out",
        },
        0
      )
        .fromTo(
          headingRef.current,
          { yPercent: 40, opacity: 0.2 },
          { yPercent: -15, opacity: 1, ease: "power1.out" },
          0
        )
        .fromTo(
          detailsRef.current,
          { yPercent: 25, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: "power2.out" },
          0.15
        )
        .fromTo(
          goldLineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, ease: "power3.inOut" },
          0.2
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="collections"
      className="relative w-full min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] py-28 sm:py-36 px-6 sm:px-12 overflow-hidden flex items-center select-none border-t border-[var(--color-border)]"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--color-gold)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-12 sm:mb-16">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] font-cinzel">
            Immersive Showcase / Master Creation
          </span>
        </div>

        {/* 3-Column Luxury Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Giant Editorial Typography */}
          <div className="lg:col-span-4 z-20">
            <h2
              ref={headingRef}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.06em] uppercase font-light leading-[0.92] text-[var(--color-text)]"
            >
              THE <br />
              <span className="italic font-normal text-[var(--color-gold)]">CELESTE</span>
            </h2>
            <p className="mt-8 font-serif text-base sm:text-lg text-[var(--color-text-secondary)] italic max-w-sm leading-relaxed">
              &ldquo;An ode to the rare symmetry of starlight. Every single diamond hand-calibrated to capture luminescence.&rdquo;
            </p>
          </div>

          {/* Center: Off-center Large Floating Jewellery Image */}
          <div className="lg:col-span-5 flex justify-center z-10">
            <div
              ref={imageWrapperRef}
              className="relative w-[320px] sm:w-[420px] md:w-[480px] h-[440px] sm:h-[540px] md:h-[620px] will-change-transform cursor-pointer group"
              data-cursor
              data-cursor-text="DISCOVER"
              onClick={() => setActiveQuickViewProduct(celesteProduct)}
            >
              <div className="relative w-full h-full overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <Image
                  src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1800&q=88"
                  alt="The Celeste High Jewellery Diamond Necklace"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Specification Label */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[var(--color-bg-secondary)] border border-[var(--color-gold)]/40 px-5 py-3 shadow-2xl backdrop-blur-md">
                <span className="text-[9px] tracking-[0.3em] font-cinzel text-[var(--color-gold)] uppercase block">
                  Grade VVS1
                </span>
                <span className="text-xs font-serif italic text-[var(--color-text)] tracking-wider">
                  2.45 Carats Total Weight
                </span>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs, Price, and Discover CTA */}
          <div
            ref={detailsRef}
            className="lg:col-span-3 lg:pl-4 flex flex-col space-y-8 z-20"
          >
            <div className="space-y-3 border-b border-[var(--color-border)] pb-6">
              <span className="text-xs font-cinzel tracking-[0.3em] uppercase text-[var(--color-text-secondary)] block">
                Category
              </span>
              <p className="font-serif text-2xl text-[var(--color-text)] uppercase tracking-wide">
                Diamond Necklace
              </p>
            </div>

            <div className="space-y-3 border-b border-[var(--color-border)] pb-6">
              <span className="text-xs font-cinzel tracking-[0.3em] uppercase text-[var(--color-text-secondary)] block">
                Material Composition
              </span>
              <p className="font-serif text-xl text-[var(--color-text)] italic">
                18K Solid Royal Gold
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-cinzel tracking-[0.3em] uppercase text-[var(--color-text-secondary)] block">
                Acquisition Value
              </span>
              <p className="font-cinzel text-3xl font-light text-[var(--color-gold)] tracking-wider">
                ₹1,85,000
              </p>
            </div>

            {/* Expanding Gold Line */}
            <div className="w-full h-[1px] bg-[var(--color-border)] overflow-hidden">
              <div ref={goldLineRef} className="w-full h-full bg-[var(--color-gold)]" />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={() => setActiveQuickViewProduct(celesteProduct)}
                className="btn-editorial btn-editorial-dark w-full justify-between group"
                data-cursor
                data-cursor-text="VIEW"
              >
                <span>DISCOVER PIECE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => addToCart(celesteProduct)}
                className="w-full py-3.5 bg-[var(--color-gold)] hover:bg-[#F5F2EB] text-[#0A0A09] text-[10px] tracking-[0.25em] font-cinzel uppercase font-semibold transition-colors duration-300 text-center"
              >
                Acquire For Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
