"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

export default function CraftSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const label1Ref = useRef<HTMLDivElement | null>(null);
  const label2Ref = useRef<HTMLDivElement | null>(null);
  const label3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.0 },
        {
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          once: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { yPercent: 40, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      ).fromTo(
        [label1Ref.current, label2Ref.current, label3Ref.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.25,
          ease: "power2.out",
        },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="craft"
      className="relative w-full min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] py-32 sm:py-44 px-6 sm:px-12 overflow-hidden flex items-center select-none border-t border-[var(--color-border)]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--color-gold)]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Craft Narrative */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] font-cinzel font-medium">
              The Artisan Atelier
            </span>

            <h2
              ref={headingRef}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.05em] uppercase font-light leading-[0.94] text-[var(--color-text)]"
            >
              CRAFTED <br />
              <span className="italic font-normal text-[var(--color-gold)]">BY HAND.</span>
            </h2>

            <p className="font-serif text-base sm:text-lg text-[var(--color-text-secondary)] italic leading-relaxed max-w-md">
              Generations of jewelers, goldsmiths and gemologists converging in
              one sacred space. We fuse ancient Indian metalwork with modern
              European precision setting.
            </p>

            <div className="pt-4 flex items-center space-x-6">
              <div>
                <span className="font-cinzel text-3xl font-light text-[var(--color-gold)] block">
                  60+
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-text-secondary)] font-cinzel">
                  Hours Benchwork
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[var(--color-border)]" />
              <div>
                <span className="font-cinzel text-3xl font-light text-[var(--color-gold)] block">
                  100%
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-text-secondary)] font-cinzel">
                  Conflict-Free
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Macro Jewellery Image with Simple Editorial Labels */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full h-[480px] sm:h-[600px] lg:h-[680px] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl">
              <div ref={imageRef} className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1800&q=88"
                  alt="Goldsmith workbench and hand gem-setting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center brightness-[0.92] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/40 via-transparent to-transparent" />
              </div>

              {/* Editorial Floating Label 1: Top Right */}
              <div
                ref={label1Ref}
                className="absolute top-8 right-8 z-20 bg-[var(--color-surface)]/95 backdrop-blur-md border border-[var(--color-border)] p-4 max-w-[200px] shadow-lg"
              >
                <span className="text-[10px] tracking-[0.35em] font-cinzel text-[var(--color-gold)] uppercase block font-semibold">
                  18K GOLD
                </span>
                <span className="text-[11px] font-sans text-[var(--color-text-secondary)] mt-1 block leading-snug">
                  Solid 750/1000 alloy formulated for eternal warmth.
                </span>
              </div>

              {/* Editorial Floating Label 2: Mid Left */}
              <div
                ref={label2Ref}
                className="absolute top-1/2 -translate-y-1/2 left-8 z-20 bg-[var(--color-surface)]/95 backdrop-blur-md border border-[var(--color-border)] p-4 max-w-[220px] shadow-lg"
              >
                <span className="text-[10px] tracking-[0.35em] font-cinzel text-[var(--color-gold)] uppercase block font-semibold">
                  HAND FINISHED
                </span>
                <span className="text-[11px] font-sans text-[var(--color-text-secondary)] mt-1 block leading-snug">
                  Every claw, bezel and link mirror-buffed by senior lapidaries.
                </span>
              </div>

              {/* Editorial Floating Label 3: Bottom Right */}
              <div
                ref={label3Ref}
                className="absolute bottom-8 right-8 z-20 bg-[var(--color-surface)]/95 backdrop-blur-md border border-[var(--color-border)] p-4 max-w-[220px] shadow-lg"
              >
                <span className="text-[10px] tracking-[0.35em] font-cinzel text-[var(--color-gold)] uppercase block font-semibold">
                  NATURAL DIAMONDS
                </span>
                <span className="text-[11px] font-sans text-[var(--color-text-secondary)] mt-1 block leading-snug">
                  Hand-selected for fluorescence and microscopic clarity.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
