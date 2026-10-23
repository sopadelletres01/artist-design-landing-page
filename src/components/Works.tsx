import { useMemo, useRef, useState } from "react";
import {
  copy,
  portraits,
  type Portrait,
  type PortraitKind,
} from "../content/artist";
import { gsap, ScrollTrigger, useGSAP } from "../motion/gsap";

type Filter = "todas" | PortraitKind;

export function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("todas");

  const items = useMemo(
    () => (filter === "todas" ? portraits : portraits.filter((portrait) => portrait.kind === filter)),
    [filter],
  );

  useGSAP(
    () => {
      const pin = pinRef.current;
      if (!pin) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".work-card");
        if (cards.length < 2) return;

        cards.forEach((card, index) => {
          gsap.set(card, {
            zIndex: index + 1,
            yPercent: index === 0 ? 0 : 100,
            scale: 1,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${(cards.length - 1) * window.innerHeight}`,
            pin: true,
            pinType: "transform",
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          if (index === 0) return;
          tl.to(card, { yPercent: 0, ease: "none" }).to(
            cards[index - 1],
            { scale: 0.94, ease: "none" },
            "<",
          );
        });

        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [filter] },
  );

  return (
    <section className="section" id="obra" ref={sectionRef}>
      <div className="works-head">
        <h2 className="section-title">{copy.worksTitle}</h2>
        <div className="filter" role="group">
          <button type="button" aria-pressed={filter === "todas"} onClick={() => setFilter("todas")}>
            {copy.filterAll}
          </button>
          <button
            type="button"
            aria-pressed={filter === "persona"}
            onClick={() => setFilter("persona")}
          >
            {copy.filterPersona}
          </button>
          <button
            type="button"
            aria-pressed={filter === "personaje"}
            onClick={() => setFilter("personaje")}
          >
            {copy.filterPersonaje}
          </button>
        </div>
      </div>
      <div className="works-pin" ref={pinRef}>
        {items.map((portrait) => (
          <WorkCard key={portrait.slug} portrait={portrait} />
        ))}
      </div>
    </section>
  );
}

function WorkCard({ portrait }: { portrait: Portrait }) {
  return (
    <article className="work-card">
      <div className="work-card-inner">
        <figure className="panel">
          <img src={portrait.image} alt={portrait.alt} />
        </figure>
        <div className="work-meta">
          <h3>{portrait.title}</h3>
          <p>{portrait.subject}</p>
          <p className="work-kind">{portrait.kind}</p>
          <p>
            {portrait.medium} · {portrait.year}
          </p>
        </div>
      </div>
    </article>
  );
}
