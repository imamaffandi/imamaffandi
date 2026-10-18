import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

// Fades [data-reveal] children of root up into place as they enter the viewport
export const revealOnScroll = (root) => {
  const targets = gsap.utils.toArray("[data-reveal]", root);
  if (!targets.length) return;
  gsap.set(targets, { autoAlpha: 0, y: 28 });
  ScrollTrigger.batch(targets, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      }),
  });
};

export { gsap, ScrollTrigger, useGSAP };
