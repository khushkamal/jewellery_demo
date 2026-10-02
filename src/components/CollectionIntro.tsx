"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function CollectionIntro() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const goldLineRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { yPercent: 40, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          paragraphRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          goldLineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.4, ease: "power4.inOut" },
          "-=0.7"
        )
        .fromTo(
          linkRef.current,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="collection-intro"
      className="relative w-full bg-[#0B4745] text-[#FBF2E1] py-24 sm:py-36 md:py-44 px-5 sm:px-10 overflow-hidden border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Subtitle */}
        <div className="mb-10 sm:mb-12 flex items-center space-x-3">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] font-cinzel font-medium">
            Aurelia Monograph 2026
          </span>
          <span className="w-12 h-[1px] bg-[var(--color-gold)]/40" />
        </div>

        {/* Split Grid: Left Heading, Right Description & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Huge Editorial Heading */}
          <div className="lg:col-span-7">
            <h2
              ref={headingRef}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.04em] uppercase font-light leading-[1.02] text-[#FBF2E1]"
            >
              THE NEW <br />
              <span className="italic font-normal text-[var(--color-gold)]">COLLECTION</span>
            </h2>
          </div>

          {/* Right Column: Paragraph, View Collection, and Details */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-6 space-y-6 sm:space-y-8">
            <p
              ref={paragraphRef}
              className="font-serif text-xl sm:text-2xl md:text-3xl text-[#FBF2E1]/90 font-light leading-snug italic"
            >
              &ldquo;Jewels designed around light, proportion and quiet expression.&rdquo;
            </p>

            <div className="space-y-6">
              {/* Thin gold line growing horizontally */}
              <div className="w-full h-[1px] bg-[var(--color-border)] overflow-hidden">
                <div
                  ref={goldLineRef}
                  className="w-full h-full bg-[var(--color-gold)]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  ref={linkRef}
                  href="#signature"
                  className="group inline-flex items-center space-x-3 text-xs tracking-[0.25em] uppercase font-cinzel text-[#FBF2E1] hover:text-[var(--color-gold)] transition-colors"
                  data-cursor
                  data-cursor-text="DISCOVER"
                >
                  <span className="editorial-link">VIEW COLLECTION</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 stroke-[1.5]" />
                </a>

                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-cinzel text-[var(--color-text-secondary)] uppercase">
                  Curated Catalog / 04 Items
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
