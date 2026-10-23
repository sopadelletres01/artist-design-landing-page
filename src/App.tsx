import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { artist, copy } from "./content/artist";
import { Bio } from "./components/Bio";
import { Contact } from "./components/Contact";
import { Featured } from "./components/Featured";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Preloader } from "./components/Preloader";
import { Process } from "./components/Process";
import { Statement } from "./components/Statement";
import { Works } from "./components/Works";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "./motion/gsap";

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const [ready, setReady] = useState(false);

  function onScrollTo(target: number | HTMLElement) {
    const instance = scrollRef.current;
    if (instance) {
      instance.scrollTo(target, { offset: typeof target === "number" ? 0 : -72 });
      return;
    }
    if (typeof target === "number") {
      window.scrollTo({ top: target });
      return;
    }
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    document.title = artist.name;
    document.documentElement.lang = "es";
  }, []);

  useGSAP(
    () => {
      if (!ready) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let instance: LocomotiveScroll | null = null;

      if (!reduce) {
        instance = new LocomotiveScroll({
          autoStart: false,
          lenisOptions: { lerp: 0.08, wheelMultiplier: 0.9 },
          scrollCallback: () => ScrollTrigger.update(),
          initCustomTicker: (render) => {
            gsap.ticker.add(render);
            gsap.ticker.lagSmoothing(0);
          },
          destroyCustomTicker: (render) => {
            gsap.ticker.remove(render);
          },
        });
        instance.start();
        scrollRef.current = instance;
      }

      const name = document.querySelector("[data-split-name]");
      const statement = document.querySelector("[data-split-statement] [aria-hidden='true']");

      if (!reduce && name instanceof HTMLElement) {
        const splitName = SplitText.create(name, {
          type: "chars",
          aria: "hidden",
        });
        gsap.from(splitName.chars, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.035,
          ease: "power4.out",
        });
      }

      gsap.from(".hero-portrait, .hero-copy, .stamp, .scroll-hint", {
        y: reduce ? 0 : 28,
        autoAlpha: reduce ? 1 : 0,
        duration: reduce ? 0 : 0.9,
        stagger: 0.08,
        delay: reduce ? 0 : 0.15,
        ease: "power3.out",
      });

      if (!reduce && statement instanceof HTMLElement) {
        SplitText.create(statement, {
          type: "lines",
          mask: "lines",
          aria: "hidden",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 100,
              autoAlpha: 0,
              duration: 1,
              stagger: 0.11,
              ease: "power4.out",
              scrollTrigger: {
                trigger: "[data-statement]",
                start: "top 82%",
                once: true,
              },
            });
          },
        });
      }

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(refresh);
      window.setTimeout(refresh, 400);

      return () => {
        instance?.destroy();
        scrollRef.current = null;
      };
    },
    { scope: rootRef, dependencies: [ready] },
  );

  return (
    <div ref={rootRef}>
      <a className="skip-link" href="#obra">
        {copy.skip}
      </a>
      {!ready ? <Preloader onDone={() => setReady(true)} /> : null}
      <Nav onScrollTo={onScrollTo} />
      <main>
        <Hero />
        <Statement />
        <Works />
        <Featured />
        <Process />
        <Bio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
