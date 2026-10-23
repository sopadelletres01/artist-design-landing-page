import { artist, copy, instagramUrl } from "../content/artist";
import { CommissionForm } from "./CommissionForm";

export function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div>
        <h2 className="section-title">{copy.closeTitle}</h2>
        <p className="contact-lead">{copy.closeLead}</p>
        <div className="contact-links">
          <a className="mail-link" href={`mailto:${artist.email}`}>
            {artist.email}
          </a>
          <a href={instagramUrl} rel="noreferrer" target="_blank">
            {artist.instagram}
          </a>
        </div>
      </div>
      <CommissionForm />
    </section>
  );
}
