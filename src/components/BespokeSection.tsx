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
      className="relative w-full bg-[var(--color-bg)] text-[var(--color-text)] py-32 sm:py-44 px-6 sm:px-12 overflow-hidden border-t border-[var(--color-border)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated Thin Gold Line across the section */}
        <div className="w-full h-[1px] bg-[var(--color-border)] mb-20 overflow-hidden">
          <div ref={lineRef} className="w-full h-full bg-[var(--color-gold)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] font-cinzel block">
              Haute Joaillerie Sur Mesure
            </span>

            <h2
              ref={headingRef}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.05em] uppercase font-light leading-[0.95] text-[var(--color-text)]"
            >
              MADE <br />
              <span className="italic font-normal text-[var(--color-gold)]">FOR YOU.</span>
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[var(--color-text)]/90 font-light leading-relaxed max-w-lg italic">
              &ldquo;From first sketch to final polish, create a piece that is
              uniquely yours.&rdquo;
            </p>

            <p className="font-sans text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md">
              Whether resetting an ancestral heirloom diamond or conceiving an
              original commission from scratch, our Creative Director guides you
              through private watercolor sketches, stone selection, and 3D wax
              models.
            </p>

            <div className="pt-4">
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
              className="relative w-full h-[450px] sm:h-[580px] bg-[var(--color-surface)] overflow-hidden shadow-2xl border border-[var(--color-border)]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 right-6 bg-[var(--color-bg-secondary)]/90 backdrop-blur-md px-5 py-3 border border-[var(--color-border)] text-right">
                <span className="text-[9px] tracking-[0.3em] font-cinzel text-[var(--color-gold)] uppercase block">
                  Studio Archive
                </span>
                <span className="text-xs font-serif italic text-[var(--color-text)]">
                  Original Watercolor Gouache No. 248
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bespoke Private Consultation Modal */}
      {isConsultOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A09]/80 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[var(--color-bg-secondary)] text-[var(--color-text)] p-8 sm:p-12 border border-[var(--color-border)] shadow-2xl">
            <button
              onClick={() => setIsConsultOpen(false)}
              className="absolute top-6 right-6 text-xs tracking-widest font-cinzel uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            >
              Close [✕]
            </button>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
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
              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)] font-cinzel block mb-1">
                    Private Commission
                  </span>
                  <h3 className="font-serif text-3xl uppercase tracking-wider text-[var(--color-text)]">
                    Reserve Bespoke Salon
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase font-cinzel block text-[var(--color-text-secondary)] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Katherine Roy"
                      className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-gold)] font-serif text-[var(--color-text)]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase font-cinzel block text-[var(--color-text-secondary)] mb-1">
                      Private Email / Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98200 00000 or email"
                      className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-gold)] font-serif text-[var(--color-text)]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase font-cinzel block text-[var(--color-text-secondary)] mb-1">
                      Jewellery Category
                    </label>
                    <select className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-gold)] font-serif text-[var(--color-text)]">
                      <option>High Jewellery Necklace</option>
                      <option>Engagement / Solitaire Ring</option>
                      <option>Bridal Parure</option>
                      <option>Heirloom Resetting</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-gold)] text-[#0A0A09] text-[10px] tracking-[0.3em] font-cinzel uppercase font-semibold hover:bg-[#F5F2EB] transition-colors"
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
