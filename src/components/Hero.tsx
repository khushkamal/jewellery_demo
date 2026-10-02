"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgImage1Ref = useRef<HTMLDivElement | null>(null);
  const bgImage2Ref = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const initialTextGroupRef = useRef<HTMLDivElement | null>(null);
  const heading1Ref = useRef<HTMLHeadingElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLButtonElement | null>(null);

  const secondTextGroupRef = useRef<HTMLDivElement | null>(null);
  const formWordRef = useRef<HTMLSpanElement | null>(null);
  const lightWordRef = useRef<HTMLSpanElement | null>(null);
  const legacyWordRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Setup initial states
      gsap.set(bgImage2Ref.current, {
        xPercent: 60,
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(secondTextGroupRef.current, {
        opacity: 0,
        pointerEvents: "none",
      });

      gsap.set([formWordRef.current, lightWordRef.current, legacyWordRef.current], {
        yPercent: 120,
        opacity: 0,
        letterSpacing: "0.12em",
      });

      // Master Pinned Scrub Timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Phase 1: Background image 1 scales 1.0 -> 1.18, moves y 0 -> -8%
      masterTl
        .to(
          bgImage1Ref.current,
          {
            scale: 1.18,
            yPercent: -8,
            ease: "none",
          },
          0
        )
        .to(
          heading1Ref.current,
          {
            yPercent: -35,
            opacity: 0,
            ease: "power2.inOut",
          },
          0.1
        )
        .to(
          labelRef.current,
          {
            yPercent: -50,
            opacity: 0,
            ease: "power2.inOut",
          },
          0.05
        )
        .to(
          [ctaRef.current, scrollIndicatorRef.current],
          {
            opacity: 0,
            y: 20,
            ease: "power2.in",
          },
          0.05
        )
        .to(
          overlayRef.current,
          {
            opacity: 0.75,
            ease: "none",
          },
          0.2
        )
        // Phase 2: Second jewellery image enters from the side, scales 0.9 -> 1.0
        .to(
          bgImage2Ref.current,
          {
            xPercent: 0,
            opacity: 1,
            scale: 1.0,
            ease: "power2.out",
          },
          0.35
        )
        // Phase 3: Second Text Reveal "FORM. LIGHT. LEGACY."
        .set(
          secondTextGroupRef.current,
          {
            opacity: 1,
          },
          0.4
        )
        .to(
          formWordRef.current,
          {
            yPercent: 0,
            opacity: 1,
            letterSpacing: "0.04em",
            ease: "power3.out",
          },
          0.45
        )
        .to(
          lightWordRef.current,
          {
            yPercent: 0,
            opacity: 1,
            letterSpacing: "0.04em",
            ease: "power3.out",
          },
          0.55
        )
        .to(
          legacyWordRef.current,
          {
            yPercent: 0,
            opacity: 1,
            letterSpacing: "0.04em",
            ease: "power3.out",
          },
          0.65
        )
        .to(
          bgImage2Ref.current,
          {
            scale: 1.05,
            ease: "none",
          },
          0.7
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector("#collection-intro");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)] select-none"
    >
      {/* Background Image 1: Main Editorial Diamond Necklace */}
      <div
        ref={bgImage1Ref}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2400&q=88"
          alt="Aurelia High Jewellery Masterpiece"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.92] contrast-[1.06]"
        />
        {/* Soft editorial atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/20 to-[var(--color-bg)]/60" />
      </div>

      {/* Dynamic theme overlay for transition between scenes */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[var(--color-bg)] opacity-0 pointer-events-none transition-opacity duration-300"
      />

      {/* Background Image 2: Second piece entering from side */}
      <div
        ref={bgImage2Ref}
        className="absolute inset-y-0 right-0 w-full md:w-3/5 h-full will-change-transform z-10 pointer-events-none"
      >
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=2000&q=88"
            alt="Aurelia Atelier Solitaire"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-center brightness-[0.94] shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-transparent to-transparent md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/40" />
        </div>
      </div>

      {/* SCENE 1 CONTENT: "A JEWEL WITH A PRESENCE." */}
      <div
        ref={initialTextGroupRef}
        className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-between pt-32 pb-12 pointer-events-none"
      >
        {/* Collection Label */}
        <div
          ref={labelRef}
          className="flex items-center space-x-3 text-[var(--color-gold)] font-cinzel text-xs tracking-[0.35em] uppercase font-medium pointer-events-auto"
        >
          <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
          <span>AURELIA / 2026 COLLECTION</span>
        </div>

        {/* Center / Editorial Hero Typography */}
        <div className="max-w-3xl my-auto">
          <h1
            ref={heading1Ref}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.06em] uppercase font-light leading-[0.98] text-[var(--color-text)] drop-shadow-sm"
          >
            A JEWEL <br />
            WITH A <br />
            <span className="italic font-normal text-[var(--color-gold)]">PRESENCE.</span>
          </h1>
        </div>

        {/* Bottom CTA & Scroll Indicator */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pointer-events-auto">
          <div ref={ctaRef}>
            <a
              href="#collections"
              className="btn-editorial btn-editorial-light group"
              data-cursor
              data-cursor-text="EXPLORE"
            >
              <span className="tracking-[0.25em]">EXPLORE COLLECTION</span>
              <span className="w-4 h-[1px] bg-[var(--color-dark)] group-hover:w-7 transition-all duration-300" />
            </a>
          </div>

          <button
            ref={scrollIndicatorRef}
            onClick={scrollToNext}
            className="flex items-center space-x-3 text-xs tracking-[0.3em] font-cinzel uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce stroke-[1.2]" />
          </button>
        </div>
      </div>

      {/* SCENE 2 CONTENT: "FORM. LIGHT. LEGACY." */}
      <div
        ref={secondTextGroupRef}
        className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center pointer-events-none"
      >
        <div className="max-w-xl flex flex-col space-y-2 sm:space-y-4">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-gold)] font-cinzel mb-2 font-medium">
            The Philosophy of Form
          </span>

          <div className="overflow-hidden">
            <span
              ref={formWordRef}
              className="block font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.08em] uppercase font-light text-[var(--color-text)] leading-[0.95]"
            >
              FORM.
            </span>
          </div>

          <div className="overflow-hidden">
            <span
              ref={lightWordRef}
              className="block font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.08em] uppercase font-light italic text-[var(--color-gold)] leading-[0.95]"
            >
              LIGHT.
            </span>
          </div>

          <div className="overflow-hidden">
            <span
              ref={legacyWordRef}
              className="block font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.08em] uppercase font-light text-[var(--color-text)] leading-[0.95]"
            >
              LEGACY.
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm tracking-widest text-[var(--color-text-secondary)] uppercase max-w-md pt-4 font-light leading-relaxed">
            Every facet carved to immortalize emotion. Hand-faceted in pure
            solid gold and conflict-free natural diamonds.
          </p>
        </div>
      </div>
    </section>
  );
}
