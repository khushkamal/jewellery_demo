"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function BespokeSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.6,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsConsultOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <section
      ref={containerRef}
      id="bespoke"
      className="relative w-full bg-[#0B4745] text-[#FBF2E1] py-28 sm:py-40 md:py-44 px-5 sm:px-10 overflow-hidden border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated Thin Gold Line across the section */}
        <div className="w-full h-[1px] bg-[var(--color-border)] mb-16 sm:mb-20 overflow-hidden">
          <div ref={lineRef} className="w-full h-full bg-[var(--color-gold)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] font-cinzel block font-medium">
              Haute Joaillerie Sur Mesure
            </span>

            <h2
              ref={headingRef}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.05em] uppercase font-light leading-[0.95] text-[#FBF2E1]"
            >
              MADE <br />
              <span className="italic font-normal text-[var(--color-gold)]">FOR YOU.</span>
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[#FBF2E1]/90 font-light leading-relaxed max-w-lg italic">
              &ldquo;From first sketch to final polish, create a piece that is
              uniquely yours.&rdquo;
            </p>

            <p className="font-sans text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md">
              Whether resetting an ancestral heirloom diamond or conceiving an
              original commission from scratch, our Creative Director guides you
              through private watercolor sketches, stone selection, and 3D wax
              models.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="btn-editorial btn-editorial-dark group"
                data-cursor
                data-cursor-text="BESPOKE"
              >
                <span>EXPLORE BESPOKE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform stroke-[1.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: Atelier Still Life Photography */}
          <div className="lg:col-span-6">
            <div
              className="relative w-full h-[400px] sm:h-[540px] bg-[#0E5653] overflow-hidden shadow-2xl border border-[var(--color-border)]"
              data-cursor
              data-cursor-text="SKETCH"
            >
              <Image
                src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=1800&q=88"
                alt="Bespoke jewellery gouache painting and gemstones"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center brightness-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B4745]/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#083735]/90 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 border border-[var(--color-border)] text-right">
                <span className="text-[8px] sm:text-[9px] tracking-[0.3em] font-cinzel text-[var(--color-gold)] uppercase block font-medium">
                  Studio Archive
                </span>
                <span className="text-xs font-serif italic text-[#FBF2E1]">
                  Original Watercolor Gouache No. 248
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bespoke Private Consultation Modal */}
      {isConsultOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0B4745]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#083735] text-[#FBF2E1] p-6 sm:p-10 border border-[var(--color-border)] shadow-2xl">
            <button
              onClick={() => setIsConsultOpen(false)}
              className="absolute top-5 right-5 text-xs tracking-widest font-cinzel uppercase text-[var(--color-text-secondary)] hover:text-[#FBF2E1]"
            >
              Close [✕]
            </button>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold)] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl uppercase">Appointment Requested</h3>
                <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">
                  Our Head of Bespoke Client Relations will contact your private
                  line within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5">
                <div>
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)] font-cinzel block mb-1 font-medium">
                    Private Commission
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider text-[#FBF2E1]">
                    Reserve Bespoke Salon
                  </h3>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="text-[9px] tracking-[0.2em] uppercase font-cinzel block text-[var(--color-text-secondary)] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Katherine Roy"
                      className="w-full bg-[#0E5653] border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-gold)] font-serif text-[#FBF2E1]"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] tracking-[0.2em] uppercase font-cinzel block text-[var(--color-text-secondary)] mb-1">
                      Private Email / Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98200 00000 or email"
                      className="w-full bg-[#0E5653] border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-gold)] font-serif text-[#FBF2E1]"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] tracking-[0.2em] uppercase font-cinzel block text-[var(--color-text-secondary)] mb-1">
                      Jewellery Category
                    </label>
                    <select className="w-full bg-[#0E5653] border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-gold)] font-serif text-[#FBF2E1]">
                      <option>High Jewellery Emerald Necklace</option>
                      <option>Engagement / Solitaire Ring</option>
                      <option>Royal Bridal Parure</option>
                      <option>Heirloom Resetting</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 bg-[var(--color-gold)] text-[#0B4745] text-[10px] tracking-[0.3em] font-cinzel uppercase font-semibold hover:bg-[#FBF2E1] transition-colors shadow-lg"
                >
                  Submit Private Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
