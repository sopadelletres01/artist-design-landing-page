import { copy, processSteps } from "../content/artist";

export function Process() {
  return (
    <section className="section" id="proceso">
      <h2 className="section-title">{copy.processTitle}</h2>
      <ol className="process-grid">
        {processSteps.map((step, index) => (
          <li className="process-step" key={step.label}>
            <p className="process-index">{String(index + 1).padStart(2, "0")}</p>
            <h3>{step.label}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
