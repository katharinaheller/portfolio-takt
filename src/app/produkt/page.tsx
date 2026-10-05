import { meta, href } from "../../lib/site";
import { Dashboard } from "../../components/Dashboard";
export const metadata = meta(
  "Zeitfenster und Klärfälle gemeinsam steuern",
  "TAKT bündelt operative Informationen entlang des Transports. Lernen Sie den Ablauf vom geplanten Zeitfenster bis zur geklärten Abweichung kennen.",
  "produkt/",
);
export default function Product() {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">DAS PRODUKTKONZEPT</p>
        <h1>
          Vom Status zur
          <br />
          nächsten Handlung.
        </h1>
        <p>
          Eine verspätete Ankunft soll nicht fünf Rückfragen auslösen. TAKT
          zeigt die Abweichung dort, wo die Entscheidung fällt.
        </p>
      </section>
      <section className="section">
        <div className="process-grid">
          {[
            [
              "01",
              "Planen",
              "Legen Sie Zeitfenster an und ordnen Sie Ankünfte einer Rampe zu. Kapazitäten werden im gemeinsamen Plan sichtbar.",
            ],
            [
              "02",
              "Erkennen",
              "Abweichungen erscheinen als Klärfall am Transport. Relevante Informationen bleiben zusammen.",
            ],
            [
              "03",
              "Handeln",
              "Öffnen Sie die Details, passen Sie das Zeitfenster an und schließen Sie die Aufgabe. Der Überblick aktualisiert sich.",
            ],
          ].map(([n, title, copy]) => (
            <article key={n}>
              <span>{n}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <Dashboard />
        <div className="inline-cta">
          <p>Den kompletten Arbeitsbereich selbst erkunden.</p>
          <a className="button" href={href("demo/")}>
            Demo öffnen →
          </a>
        </div>
      </section>
    </>
  );
}
