"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function EditorialSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const innerImageRef = useRef<HTMLImageElement | null>(null);
  const textContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Image Clip-path Reveal
      gsap.fromTo(
        imageWrapperRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.6,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Subtle scale and parallax on scroll
      gsap.fromTo(
        innerImageRef.current,
        { scale: 1.15, yPercent: -5 },
        {
          scale: 1.0,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Right text translateY(80px) -> 0
      gsap.fromTo(
        textContentRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#071510] text-[#F5F7F2] py-24 sm:py-36 md:py-44 px-5 sm:px-10 overflow-hidden border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left: Huge Editorial Jewellery Photography with Clip Reveal */}
          <div className="lg:col-span-7">
            <div
              ref={imageWrapperRef}
              className="relative w-full h-[440px] sm:h-[600px] lg:h-[720px] overflow-hidden bg-[#132B23] shadow-2xl border border-[var(--color-border)]"
              data-cursor
              data-cursor-text="EDITORIAL"
            >
              <Image
                ref={innerImageRef}
                src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1800&q=88"
                alt="Editorial jewellery light and silhouette"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center will-change-transform brightness-[0.88] contrast-[1.05]"
              />
              {/* Editorial Caption Watermark */}
              <div className="absolute bottom-5 left-5 z-10 text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-cinzel text-[#F5F7F2] drop-shadow-md">
                Campaign Monograph / Light Series 01
              </div>
            </div>
          </div>

          {/* Right: Editorial Typography and Narrative */}
          <div
            ref={textContentRef}
            className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 lg:pl-6 will-change-transform"
          >
            <div>
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] font-cinzel block mb-3 sm:mb-4 font-medium">
                The Architecture of Radiance
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-[0.04em] uppercase font-light leading-[1.0] text-[#F5F7F2]">
                DESIGNED <br />
                AROUND <br />
                <span className="italic font-normal text-[var(--color-gold)]">LIGHT.</span>
              </h2>
            </div>

            <p className="font-serif text-lg sm:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed max-w-md">
              Every Aurelia piece is shaped to catch light differently. Balanced
              proportions, hand-finished details and a quiet sense of luxury.
            </p>

            <div className="w-16 h-[1px] bg-[var(--color-gold)]" />

            <div>
              <a
                href="#craft"
                className="group inline-flex items-center space-x-3 text-xs tracking-[0.25em] uppercase font-cinzel text-[#F5F7F2] hover:text-[var(--color-gold)] transition-colors"
                data-cursor
                data-cursor-text="CRAFT"
              >
                <span className="editorial-link">OUR CRAFT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform stroke-[1.5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
