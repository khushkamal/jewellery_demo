"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function BridalSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const overlayTextRef = useRef<HTMLDivElement | null>(null);
  const forWordRef = useRef<HTMLSpanElement | null>(null);
  const theWordRef = useRef<HTMLSpanElement | null>(null);
  const momentWordRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.0, yPercent: -6 },
        {
          scale: 1.15,
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        overlayTextRef.current,
        { yPercent: 20 },
        {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="bridal"
      className="relative w-full h-[115vh] overflow-hidden bg-[#0A0A09] text-[var(--color-text)] flex items-center justify-center select-none"
    >
      {/* Background Indian Bridal Editorial Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=88"
          alt="Aurelia Haute Bridal Monograph"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.65] contrast-[1.12]"
        />
        {/* Editorial Magazine Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-transparent to-[#0A0A09]/65" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0A09]/20 to-[#0A0A09]/80" />
      </div>

      {/* Magazine Masthead Accent (Top) */}
      <div className="absolute top-12 left-0 right-0 z-20 max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center text-[10px] tracking-[0.4em] uppercase font-cinzel text-[var(--color-text)]/70">
        <span>HAUTE BRIDAL EDITION</span>
        <span>AURELIA ARCHIVES / 2026</span>
      </div>

      {/* Center Magazine Cover Typography */}
      <div
        ref={overlayTextRef}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center will-change-transform"
      >
        <span className="text-xs sm:text-sm tracking-[0.45em] uppercase text-[var(--color-gold)] font-cinzel mb-4 block">
          Bridal Collection
        </span>

        <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl tracking-[0.04em] uppercase font-light leading-[0.88] text-[var(--color-text)] drop-shadow-2xl">
          <span ref={forWordRef} className="block">
            FOR
          </span>
          <span ref={theWordRef} className="block italic text-[var(--color-gold)]">
            THE
          </span>
          <span ref={momentWordRef} className="block">
            MOMENT.
          </span>
        </h2>

        <p className="mt-8 font-serif text-base sm:text-xl text-[var(--color-text)]/85 italic max-w-lg leading-relaxed">
          Royal Polki choker sets, unheated Burmese rubies and certified Zambian
          emeralds crafted for sacred milestones.
        </p>

        <div className="mt-10">
          <a
            href="#bespoke"
            className="btn-editorial btn-editorial-dark group"
            data-cursor
            data-cursor-text="BRIDAL"
          >
            <span className="tracking-[0.25em]">DISCOVER BRIDAL</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform stroke-[1.5]" />
          </a>
        </div>
      </div>

      {/* Bottom Editorial Bar */}
      <div className="absolute bottom-8 left-0 right-0 z-20 max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center text-[9px] tracking-[0.3em] uppercase font-cinzel text-[var(--color-text-secondary)]">
        <span>Handcrafted in Jaipur & Mumbai</span>
        <span>Private Bridal Suite Appointments</span>
      </div>
    </section>
  );
}
