import { artist, copy, heroPortrait } from "../content/artist";

export function Hero() {
  const lines = artist.name.split(" ");

  return (
    <section className="hero" id="top">
      <div className="hero-halftone" aria-hidden="true" />
      <div className="hero-grid">
        <div>
          <h1 className="hero-name">
            <span className="sr-only">{artist.name}</span>
            <span className="hero-name-visual" aria-hidden="true" data-split-name>
              {lines.map((line) => (
                <span className="hero-name-line" key={line}>
                  {line}
                </span>
              ))}
            </span>
          </h1>
          <div className="hero-copy">
            <p className="hero-role">{artist.role}</p>
            <p className="hero-city">{artist.city}</p>
            <p className="stamp">{artist.availability}</p>
          </div>
        </div>
        <figure
          className="hero-portrait panel"
          data-scroll=""
          data-scroll-speed="0.35"
        >
          <img src={heroPortrait.image} alt={heroPortrait.alt} />
        </figure>
      </div>
      <a className="scroll-hint" href="#obra">
        {copy.scrollHint}
      </a>
    </section>
  );
}
