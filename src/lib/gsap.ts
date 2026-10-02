"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Reusable GSAP Animation Helpers
 */

export const fadeUp = (
  target: gsap.DOMTarget,
  vars?: gsap.TweenVars,
  triggerOptions?: ScrollTrigger.Vars
) => {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: triggerOptions
        ? {
            trigger: target as gsap.DOMTarget,
            start: "top 85%",
            once: true,
            ...triggerOptions,
          }
        : undefined,
      ...vars,
    }
  );
};

export const splitTextReveal = (
  elements: HTMLElement[] | string,
  trigger?: gsap.DOMTarget,
  stagger: number = 0.15
) => {
  return gsap.fromTo(
    elements,
    {
      yPercent: 110,
      opacity: 0,
      letterSpacing: "0.08em",
    },
    {
      yPercent: 0,
      opacity: 1,
      letterSpacing: "0.02em",
      duration: 1.4,
      stagger: stagger,
      ease: "power4.out",
      scrollTrigger: trigger
        ? {
            trigger: trigger,
            start: "top 80%",
            once: true,
          }
        : undefined,
    }
  );
};

export const imageReveal = (
  container: gsap.DOMTarget,
  image: gsap.DOMTarget,
  trigger?: gsap.DOMTarget
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger || container,
      start: "top 85%",
      once: true,
    },
  });

  tl.fromTo(
    container,
    { clipPath: "inset(100% 0 0 0)" },
    { clipPath: "inset(0% 0 0 0)", duration: 1.6, ease: "power4.inOut" }
  ).fromTo(
    image,
    { scale: 1.2 },
    { scale: 1.0, duration: 1.8, ease: "power3.out" },
    "-=1.4"
  );

  return tl;
};

export const parallaxImage = (
  image: gsap.DOMTarget,
  trigger: gsap.DOMTarget,
  speed: number = 15
) => {
  return gsap.fromTo(
    image,
    { yPercent: -speed },
    {
      yPercent: speed,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
};

export const goldLineGrow = (
  line: gsap.DOMTarget,
  trigger: gsap.DOMTarget
) => {
  return gsap.fromTo(
    line,
    { scaleX: 0, transformOrigin: "left center" },
    {
      scaleX: 1,
      duration: 1.4,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
        once: true,
      },
    }
  );
};
