import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/motion";

const ScrollCtx = createContext({ scrollTo: () => {}, lock: () => {}, unlock: () => {} });

const NAV_OFFSET = -64;

export function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const api = useMemo(
    () => ({
      scrollTo(target, opts = {}) {
        const el = typeof target === "string" ? document.getElementById(target) : target;
        if (!el || target === "top") {
          if (lenisRef.current) lenisRef.current.scrollTo(0, opts);
          else window.scrollTo({ top: 0 });
          return;
        }
        if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: NAV_OFFSET, duration: 1.2, ...opts });
        else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET });
        el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
      },
      /** Single-screen pages (Projects carousel) take over wheel/touch input. */
      lock() {
        lenisRef.current?.stop();
        document.documentElement.style.overflow = "hidden";
      },
      unlock() {
        lenisRef.current?.start();
        document.documentElement.style.overflow = "";
      },
    }),
    [],
  );

  return <ScrollCtx.Provider value={api}>{children}</ScrollCtx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSmoothScroll = () => useContext(ScrollCtx);
