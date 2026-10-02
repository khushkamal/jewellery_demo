"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);
  const line4Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Horizontal scrubbed movement of lines
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      tl.to(line1Ref.current, { xPercent: -15, ease: "none" }, 0)
        .to(line2Ref.current, { xPercent: 12, ease: "none" }, 0)
        .to(line3Ref.current, { xPercent: -18, ease: "none" }, 0)
        .to(line4Ref.current, { xPercent: 14, ease: "none" }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[120vh] py-36 sm:py-48 flex flex-col justify-center overflow-hidden bg-[var(--color-bg)] transition-colors select-none border-t border-[var(--color-border)]"
    >
      <div className="w-full flex flex-col space-y-4 sm:space-y-6 md:space-y-8 will-change-transform">
        {/* Line 1 */}
        <div
          ref={line1Ref}
          className="whitespace-nowrap flex items-center space-x-6 sm:space-x-12 pl-6 sm:pl-20"
        >
          <span className="font-serif text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] tracking-[0.03em] uppercase font-light text-[var(--color-text)] leading-none">
            JEWELLERY
          </span>
          <span className="font-serif italic text-4xl sm:text-6xl md:text-8xl text-[var(--color-gold)]">
            —
          </span>
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.5em] uppercase text-[var(--color-text-secondary)]">
            01 / MANIFESTO
          </span>
        </div>

        {/* Line 2 */}
        <div
          ref={line2Ref}
          className="whitespace-nowrap flex items-center space-x-6 sm:space-x-12 pr-6 sm:pr-20 self-end"
        >
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.5em] uppercase text-[var(--color-text-secondary)]">
            INTIMACY & GRACE
          </span>
          <span className="font-serif text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] tracking-[0.03em] uppercase font-light italic text-[var(--color-gold)] leading-none">
            SHOULD FEEL
          </span>
        </div>

        {/* Line 3 */}
        <div
          ref={line3Ref}
          className="whitespace-nowrap flex items-center space-x-6 sm:space-x-12 pl-12 sm:pl-32"
        >
          <span className="font-serif text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] tracking-[0.03em] uppercase font-light text-[var(--color-text)] leading-none">
            LIKE A PART
          </span>
          <span className="w-24 sm:w-48 h-[1px] bg-[var(--color-border)]" />
        </div>

        {/* Line 4 */}
        <div
          ref={line4Ref}
          className="whitespace-nowrap flex items-center space-x-6 sm:space-x-12 pr-12 sm:pr-24 self-end"
        >
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.5em] uppercase text-[var(--color-text-secondary)]">
            HAUTE JOAILLERIE
          </span>
          <span className="font-serif text-5xl sm:text-7xl md:text-9xl lg:text-[10.5rem] tracking-[0.03em] uppercase font-light text-[var(--color-text)] leading-none">
            OF YOU.
          </span>
        </div>
      </div>

      {/* Editorial Footnote */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-20 sm:mt-28 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs tracking-[0.25em] font-cinzel text-[var(--color-text-secondary)] uppercase gap-4">
        <span>Aurelia Maison Philosophy</span>
        <span>A Quiet Sensation of Weight & Radiance</span>
      </div>
    </section>
  );
}
