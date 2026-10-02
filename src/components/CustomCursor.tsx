"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse) and no touch
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Check for interactive cursor hover elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]");
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute("data-cursor-text") || "VIEW";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousemove", handleElementHover);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", handleElementHover);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-opacity duration-300 flex items-center justify-center mix-blend-difference ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "transform" }}
    >
      <div
        className={`rounded-full border flex items-center justify-center transition-all duration-300 ease-out ${
          isHovered
            ? "w-20 h-20 bg-[#F7F4EE] text-[#0D1914] border-transparent scale-100 shadow-2xl"
            : "w-3.5 h-3.5 bg-[#F7F4EE] border-[#F7F4EE]/60 scale-100"
        }`}
      >
        {isHovered && cursorText && (
          <span className="text-[10px] tracking-[0.25em] font-cinzel font-medium uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
