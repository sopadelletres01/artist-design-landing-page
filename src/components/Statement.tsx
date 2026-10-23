import { artist, copy, personaCount, personajeCount, statementAccent } from "../content/artist";

export function Statement() {
  const parts = artist.statement.split(statementAccent);

  return (
    <section className="section statement" data-statement>
      <p className="statement-text" data-split-statement>
        <span className="sr-only">{artist.statement}</span>
        <span aria-hidden="true">
          {parts[0]}
          <span className="statement-mark">{statementAccent}</span>
          {parts.slice(1).join(statementAccent)}
        </span>
      </p>
      <dl className="counts">
        <div>
          <dt>{personaCount}</dt>
          <dd>{copy.countPersona}</dd>
        </div>
        <div>
          <dt>{personajeCount}</dt>
          <dd>{copy.countPersonaje}</dd>
        </div>
      </dl>
    </section>
  );
}
