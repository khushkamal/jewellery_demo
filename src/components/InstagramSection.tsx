"use client";

import Image from "next/image";
import { CAMPAIGN_GALLERY } from "@/data/jewellery";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <section className="relative w-full bg-[var(--color-bg-secondary)] text-[var(--color-text)] py-24 sm:py-36 px-6 sm:px-12 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold)] font-cinzel block mb-2">
              Visual Archives
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[0.05em] uppercase font-light text-[var(--color-text)]">
              FOLLOW THE LIGHT
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.25em] uppercase font-cinzel text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors editorial-link self-start sm:self-auto"
          >
            @AURELIAJEWELS
          </a>
        </div>

        {/* Minimal Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CAMPAIGN_GALLERY.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] cursor-pointer"
              data-cursor
              data-cursor-text="EXP"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.9]"
              />

              {/* Minimal Dark Hover Overlay with Subtle Instagram Icon */}
              <div className="absolute inset-0 bg-[#0A0A09]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-[var(--color-text)]">
                <div className="self-end">
                  <InstagramIcon className="w-4 h-4 text-[var(--color-gold)]" />
                </div>
                <div>
                  <span className="text-[9px] tracking-widest uppercase font-cinzel text-[var(--color-gold)] block">
                    {item.caption}
                  </span>
                  <span className="text-xs font-serif italic text-[var(--color-text)]">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
