"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
        if (onComplete) onComplete();
      },
    });

    // Initial states
    gsap.set(textRef.current, { opacity: 0, y: 15 });
    gsap.set(taglineRef.current, { opacity: 0, y: 10 });
    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "center center" });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    })
      .to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      .to(
        [textRef.current, taglineRef.current, lineRef.current],
        {
          opacity: 0,
          y: -15,
          duration: 0.5,
          ease: "power2.in",
          delay: 0.15,
        }
      )
      // Screen vertically reveals the hero
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99998] flex flex-col items-center justify-center bg-[#0D1914] text-[#F7F4EE] select-none"
    >
      <div className="flex flex-col items-center text-center px-6 max-w-md">
        {/* Monogram / Brand mark */}
        <div
          ref={textRef}
          className="mb-4 flex flex-col items-center space-y-1"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A355] font-cinzel">
            Haute Joaillerie
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] uppercase font-light text-[#F7F4EE]">
            AURELIA
          </h1>
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.5em] uppercase text-[#C8A355] font-light">
            JEWELS
          </span>
        </div>

        {/* Animated Progress Line */}
        <div className="w-24 sm:w-32 h-[1px] bg-[#C8A355]/25 overflow-hidden my-3 relative">
          <div
            ref={lineRef}
            className="absolute inset-0 bg-[#C8A355]"
          />
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="font-serif italic text-xs sm:text-sm tracking-[0.15em] text-[#A9B4AC]"
        >
          &ldquo;Crafted to be Remembered.&rdquo;
        </p>
      </div>
    </div>
  );
}
