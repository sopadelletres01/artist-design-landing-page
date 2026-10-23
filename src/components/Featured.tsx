import { featuredPortrait } from "../content/artist";

export function Featured() {
  return (
    <section className="featured">
      <img
        className="featured-image"
        src={featuredPortrait.image}
        alt={featuredPortrait.alt}
      />
      <div className="featured-caption">
        <h2>{featuredPortrait.title}</h2>
        <p>{featuredPortrait.subject}</p>
        <p className="featured-year">{featuredPortrait.year}</p>
      </div>
    </section>
  );
}
