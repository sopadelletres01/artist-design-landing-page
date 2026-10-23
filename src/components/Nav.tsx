import { useState } from "react";
import { artist, copy } from "../content/artist";

type NavProps = {
  onScrollTo: (target: number | HTMLElement) => void;
};

export function Nav({ onScrollTo }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#top"
        onClick={(event) => {
          event.preventDefault();
          onScrollTo(0);
        }}
      >
        {artist.name}
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? copy.navClose : copy.navOpen}
      </button>
      <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`}>
        {copy.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => {
              event.preventDefault();
              setOpen(false);
              const target = document.querySelector(item.href);
              if (target instanceof HTMLElement) onScrollTo(target);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
