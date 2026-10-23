import { useRef } from "react";
import { artist, portraits } from "../content/artist";
import { gsap, useGSAP } from "../motion/gsap";

type PreloaderProps = {
  onDone: () => void;
};

export function Preloader({ onDone }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    const bar = barRef.current;
    if (!root || !bar) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.set(bar, { scaleX: 0.08, transformOrigin: "left center" });

    const images = portraits.map(
      (portrait) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = portrait.image;
        }),
    );

    const assets = Promise.all([document.fonts.ready, ...images]);
    const cap = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 3500);
    });

    const load = Promise.race([assets, cap]);
    const grow = gsap.to(bar, { scaleX: 0.72, duration: 1.05, ease: "power3.out" });

    void load.then(() => {
      grow.kill();
      if (reduce) {
        gsap.set(root, { autoAlpha: 0 });
        onDone();
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: onDone,
      });
      tl.to(bar, { scaleX: 1, duration: 0.35 }).to(
        root,
        { yPercent: -100, duration: 0.85, ease: "power4.out" },
        "+=0.08",
      );
    });
  });

  return (
    <div className="preloader" ref={rootRef} role="status">
      <p className="preloader-name">{artist.name}</p>
      <div className="preloader-bar">
        <span className="preloader-bar-fill" ref={barRef} />
      </div>
    </div>
  );
}
