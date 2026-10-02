"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#052625] text-[#FBF2E1] pt-20 sm:pt-28 pb-10 sm:pb-12 px-5 sm:px-10 select-none border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        {/* Top: Massive Editorial Brandmark */}
        <div className="border-b border-[var(--color-border)] pb-14 sm:pb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--color-gold)] font-cinzel block mb-2 font-medium">
                Fine Jewellery Maison
              </span>
              <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.16em] uppercase font-light leading-none text-[#FBF2E1]">
                AURELIA
              </h2>
            </div>

            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <p className="font-serif italic text-base sm:text-xl text-[#FBF2E1]/80">
                &ldquo;Crafted to be Remembered.&rdquo;
              </p>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-cinzel text-[var(--color-text-secondary)] uppercase mt-2">
                Atelier Mumbai • Jaipur • Geneva
              </span>
            </div>
          </div>
        </div>

        {/* 4 Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 py-14 sm:py-16 border-b border-[var(--color-border)]">
          {/* Column 1: Collections */}
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase font-cinzel text-[var(--color-gold)] block font-medium">
              Collections
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider text-[var(--color-text-secondary)] font-sans">
              <li>
                <a href="#signature" className="hover:text-[var(--color-gold)] transition-colors">
                  Signature Masterpieces
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[var(--color-gold)] transition-colors">
                  Solitaire Diamonds
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-[var(--color-gold)] transition-colors">
                  Haute Bridal Parures
                </a>
              </li>
              <li>
                <a href="#bespoke" className="hover:text-[var(--color-gold)] transition-colors">
                  Bespoke Commissions
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[var(--color-gold)] transition-colors">
                  High Jewellery 2026
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase font-cinzel text-[var(--color-gold)] block font-medium">
              Company
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider text-[var(--color-text-secondary)] font-sans">
              <li>
                <a href="#craft" className="hover:text-[var(--color-gold)] transition-colors">
                  The Maison Heritage
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[var(--color-gold)] transition-colors">
                  Artisan Benchwork
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[var(--color-gold)] transition-colors">
                  Kimberley Process Ethics
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-[var(--color-gold)] transition-colors">
                  Press & Monograph
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Care */}
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase font-cinzel text-[var(--color-gold)] block font-medium">
              Client Care
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider text-[var(--color-text-secondary)] font-sans">
              <li>
                <a href="#bespoke" className="hover:text-[var(--color-gold)] transition-colors">
                  Private Salon Booking
                </a>
              </li>
              <li>
                <span className="text-[var(--color-text-secondary)]">
                  Concierge: +91 (0) 22 8900 1200
                </span>
              </li>
              <li>
                <span className="text-[var(--color-text-secondary)]">
                  concierge@aureliajewels.com
                </span>
              </li>
              <li>
                <span className="text-[var(--color-text-secondary)]">
                  Complimentary Insured Courier
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase font-cinzel text-[var(--color-gold)] block font-medium">
              Legal
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider text-[var(--color-text-secondary)] font-sans">
              <li>
                <span className="text-[var(--color-text-secondary)]">Privacy & Confidentiality</span>
              </li>
              <li>
                <span className="text-[var(--color-text-secondary)]">Terms of Acquisition</span>
              </li>
              <li>
                <span className="text-[var(--color-text-secondary)]">Gemstone Authenticity</span>
              </li>
              <li>
                <span className="text-[var(--color-text-secondary)]">Hallmark 750 Certification</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] tracking-[0.25em] font-cinzel uppercase text-[var(--color-text-secondary)] gap-5">
          <div className="flex space-x-6 sm:space-x-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-gold)] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-gold)] transition-colors"
            >
              Pinterest
            </a>
            <a
              href="mailto:concierge@aureliajewels.com"
              className="hover:text-[var(--color-gold)] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-center">
            Copyright 2026 Aurelia Jewels. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:text-[var(--color-gold)] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 stroke-[1.4]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
