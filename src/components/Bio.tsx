import { bioLines, copy, credits } from "../content/artist";

export function Bio() {
  return (
    <section className="section bio">
      <div>
        <h2 className="section-title">{copy.bioTitle}</h2>
        <div className="bio-lines">
          {bioLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
      <div>
        <h3 className="section-title">{copy.creditsTitle}</h3>
        <dl className="credits">
          {credits.map((credit) => (
            <div key={`${credit.title}-${credit.year}`}>
              <dt>{credit.title}</dt>
              <dd>
                {credit.place}, {credit.year}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
