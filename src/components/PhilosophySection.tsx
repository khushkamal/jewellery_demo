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
          scrub: 1.1,
        },
      });

      tl.to(line1Ref.current, { xPercent: -12, ease: "none" }, 0)
        .to(line2Ref.current, { xPercent: 10, ease: "none" }, 0)
        .to(line3Ref.current, { xPercent: -14, ease: "none" }, 0)
        .to(line4Ref.current, { xPercent: 12, ease: "none" }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[110vh] py-28 sm:py-40 md:py-48 flex flex-col justify-center overflow-hidden bg-[#0B4745] transition-colors select-none border-t border-[var(--color-border)]"
    >
      <div className="w-full max-w-full overflow-hidden flex flex-col space-y-3 sm:space-y-6 md:space-y-8 will-change-transform">
        {/* Line 1 */}
        <div
          ref={line1Ref}
          className="whitespace-nowrap flex items-center space-x-4 sm:space-x-10 pl-4 sm:pl-16"
        >
          <span className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] tracking-[0.03em] uppercase font-light text-[#FBF2E1] leading-none">
            JEWELLERY
          </span>
          <span className="font-serif italic text-3xl sm:text-5xl md:text-7xl text-[var(--color-gold)]">
            —
          </span>
          <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[var(--color-text-secondary)]">
            01 / MANIFESTO
          </span>
        </div>

        {/* Line 2 */}
        <div
          ref={line2Ref}
          className="whitespace-nowrap flex items-center space-x-4 sm:space-x-10 pr-4 sm:pr-16 self-end"
        >
          <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[var(--color-text-secondary)]">
            INTIMACY & GRACE
          </span>
          <span className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] tracking-[0.03em] uppercase font-light italic text-[var(--color-gold)] leading-none">
            SHOULD FEEL
          </span>
        </div>

        {/* Line 3 */}
        <div
          ref={line3Ref}
          className="whitespace-nowrap flex items-center space-x-4 sm:space-x-10 pl-6 sm:pl-28"
        >
          <span className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] tracking-[0.03em] uppercase font-light text-[#FBF2E1] leading-none">
            LIKE A PART
          </span>
          <span className="w-16 sm:w-40 h-[1px] bg-[var(--color-border)]" />
        </div>

        {/* Line 4 */}
        <div
          ref={line4Ref}
          className="whitespace-nowrap flex items-center space-x-4 sm:space-x-10 pr-6 sm:pr-20 self-end"
        >
          <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[var(--color-text-secondary)]">
            HAUTE JOAILLERIE
          </span>
          <span className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] tracking-[0.03em] uppercase font-light text-[#FBF2E1] leading-none">
            OF YOU.
          </span>
        </div>
      </div>

      {/* Editorial Footnote */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 mt-16 sm:mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs tracking-[0.25em] font-cinzel text-[var(--color-text-secondary)] uppercase gap-3">
        <span>Aurelia Maison Philosophy</span>
        <span>A Quiet Sensation of Weight & Radiance</span>
      </div>
    </section>
  );
}
