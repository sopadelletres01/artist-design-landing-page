import { artist, copy, instagramUrl } from "../content/artist";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {artist.name} · {artist.city}
      </p>
      <p>
        <a href={`mailto:${artist.email}`}>{artist.email}</a>
        {" · "}
        <a href={instagramUrl} rel="noreferrer" target="_blank">
          {copy.instagramLabel}
        </a>
      </p>
      <p>{copy.footerRights}</p>
    </footer>
  );
}
