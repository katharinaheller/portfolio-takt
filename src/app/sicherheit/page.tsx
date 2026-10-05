import { meta, href } from "../../lib/site";
export const metadata = meta(
  "Sicherheit und Datenschutz im Produktkonzept",
  "Was die TAKT-Demo tatsächlich tut und welche Sicherheitsanforderungen für ein reales Produkt vorgesehen sind. Transparent und ohne unbelegte Zertifizierungsversprechen.",
  "sicherheit/",
);
export default function Security() {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">VERTRAUEN BRAUCHT KLARHEIT.</p>
        <h1>
          Ihre Daten verdienen
          <br />
          klare Antworten.
        </h1>
        <p>
          Wir unterscheiden die technische Demo ausdrücklich vom
          Sicherheitskonzept eines künftigen Produktivsystems.
        </p>
      </section>
      <section className="section security-grid">
        <article>
          <span className="security-badge">IN DIESER DEMO UMGESETZT</span>
          <h2>
            Datensparsam
            <br />
            von Anfang an.
          </h2>
          <ul>
            <li>Keine Registrierung und keine Passworteingabe</li>
            <li>Ausschließlich fiktive Transportdaten</li>
            <li>Keine Analyse- oder Werbetracker</li>
            <li>Lokale Schriften und Medien</li>
            <li>Alle Produktaktionen nur im Browser</li>
            <li>Keine Übermittlung von Formulareingaben</li>
          </ul>
        </article>
        <article>
          <span className="security-badge muted">
            ANFORDERUNGEN AN EIN REALES PRODUKT
          </span>
          <h2>
            Ein verbindlicher
            <br />
            Prüfrahmen.
          </h2>
          <ul>
            <li>Rollen- und Berechtigungskonzept</li>
            <li>Nachvollziehbare Änderungsprotokolle</li>
            <li>Dokumentierte Lösch- und Aufbewahrungsregeln</li>
            <li>Vertragliche Prüfung von Hosting und Verarbeitung</li>
            <li>Backup- und Wiederherstellungstests</li>
            <li>Externe Sicherheitsprüfung vor Produktivstart</li>
          </ul>
          <p>
            Diese Anforderungen sind kein Nachweis einer bestehenden
            Implementierung, Zertifizierung oder vertraglichen Zusicherung.
          </p>
        </article>
      </section>
      <div className="section">
        <a className="text-link" href={href("datenschutz/")}>
          Technische Datenschutzinformationen der Demo →
        </a>
      </div>
    </>
  );
}
