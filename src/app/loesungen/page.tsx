import { meta, href } from "../../lib/site";
export const metadata = meta(
  "Für Disposition, Lager und operative Leitung",
  "Drei Perspektiven, ein Informationsstand. So unterstützt das TAKT-Produktkonzept die operative Zusammenarbeit in der Logistik.",
  "loesungen/",
);
export default function Solutions() {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">FÜR IHR TEAM</p>
        <h1>
          Jede Rolle sieht,
          <br />
          was sie weiterbringt.
        </h1>
        <p>
          Die Disposition plant, das Lager bereitet vor, die Leitung erkennt
          Muster. TAKT verbindet die Perspektiven entlang desselben Transports.
        </p>
      </section>
      <section className="section solution-list">
        {[
          [
            "Disposition",
            "Weniger hinterhertelefonieren.",
            "Behalten Sie Ankünfte und offene Fragen im Blick. Ein Klärfall bündelt die Information, die Sie für den nächsten Anruf oder eine Umplanung brauchen.",
            "Transportstatus · Zeitfenster · Zuständigkeit",
          ],
          [
            "Lager & Rampe",
            "Vorbereitet sein, wenn die Ware kommt.",
            "Sehen Sie geplante Belegungen und Änderungen frühzeitig. So kann das Team die Entladung mit seinen tatsächlichen Kapazitäten abstimmen.",
            "Rampenplan · Ankunftsübersicht · Übergaben",
          ],
          [
            "Operative Leitung",
            "Muster erkennen, gezielt nachfragen.",
            "Ordnen Sie Abweichungen nach Standort und Ursache ein. Die Demo zeigt beispielhafte Kennzahlen; reale Aussagen erfordern eine belastbare Datengrundlage.",
            "Standortvergleich · Klärfälle · Auswertung",
          ],
        ].map(([role, title, copy, scope], i) => (
          <article key={role}>
            <span className="role-index">0{i + 1}</span>
            <div>
              <p className="eyebrow">{role}</p>
              <h2>{title}</h2>
              <p>{copy}</p>
              <small>{scope}</small>
            </div>
            <a className="text-link" href={href("demo/")}>
              Im Produkt ansehen ↗
            </a>
          </article>
        ))}
      </section>
    </>
  );
}
