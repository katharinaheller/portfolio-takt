import { meta, href } from "../lib/site";
import { Dashboard } from "../components/Dashboard";
import { Faq } from "../components/Faq";
import { Roi } from "../components/Roi";
export const metadata = meta(
  "Ihre Transporte. Ein gemeinsamer Takt.",
  "Zeitfenster, Transportstatus und Klärfälle an einem Ort. Lernen Sie TAKT kennen: das fiktive Logistikprodukt mit einer direkt bedienbaren Demo.",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="release">
          <span /> FÜR DISPOSITION, LAGER & OPERATIVE TEAMS{" "}
          <span aria-hidden="true">↗</span>
        </p>
        <h1>
          Ihre Transporte.
          <br />
          <span>Ein gemeinsamer Takt.</span>
        </h1>
        <p className="hero-description">
          Schluss mit Statusfragen in fünf verschiedenen Kanälen.
          <br />
          TAKT bringt Zeitfenster, Transportstatus und Klärfälle an einen Ort.
        </p>
        <div className="hero-actions">
          <a className="button" href={href("demo/")}>
            Produkt live ausprobieren <span aria-hidden="true">→</span>
          </a>
          <a className="button outline" href={href("produkt/")}>
            So funktioniert TAKT ↗
          </a>
        </div>
        <p className="hero-micro">
          Ohne Anmeldung · Mit Beispieldaten · Direkt im Browser
        </p>
        <div className="dashboard-stage">
          <div className="stage-caption">
            <span className="status-dot" /> ALLES IM BLICK. BEVOR ES ENG WIRD.
          </div>
          <Dashboard compact />
        </div>
      </section>
      <section className="use-strip">
        <span>GEDACHT FÜR TEAMS, DIE WARE BEWEGEN</span>
        <div>
          Speditionen <i>✳</i> Produktionslogistik <i>✳</i> Zentrallager{" "}
          <i>✳</i> Handelsunternehmen
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">VON DER REAKTION ZUR ÜBERSICHT.</p>
          <h2>
            Der Alltag ist dynamisch.
            <br />
            Ihr Überblick bleibt.
          </h2>
          <p>
            TAKT macht sichtbar, was als Nächstes passiert – und wo Ihr Team
            gebraucht wird.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-large">
            <div>
              <span className="feature-number">01 / ZEITFENSTER</span>
              <h3>
                Eine Rampe.
                <br />
                Ein verlässlicher Plan.
              </h3>
              <p>
                Planen Sie Ankünfte passend zur Kapazität. Änderungen sind für
                alle Beteiligten nachvollziehbar.
              </p>
            </div>
            <div className="dock-board" aria-label="Beispiel eines Rampenplans">
              <div>
                <span>TOR 01</span>
                <b>08:30 · Entladung</b>
              </div>
              <div>
                <span>TOR 02</span>
                <b>09:15 · Wareneingang</b>
              </div>
              <div>
                <span>TOR 03</span>
                <b>10:00 · Frei</b>
              </div>
              <div className="dock-active">
                <span>TOR 04</span>
                <b>09:50 · Neu geplant ↗</b>
              </div>
            </div>
          </article>
          <article>
            <span className="feature-number">02 / KLÄRFÄLLE</span>
            <div className="exception-icon" aria-hidden="true">
              ↳
            </div>
            <h3>
              Aus einer Abweichung
              <br />
              wird eine Aufgabe.
            </h3>
            <p>
              Verspätung oder fehlendes Dokument: Zuständigkeit und nächster
              Schritt stehen direkt am Transport.
            </p>
          </article>
          <article>
            <span className="feature-number">03 / TRANSPARENZ</span>
            <div className="people-flow" aria-hidden="true">
              <span>D</span>
              <i>—</i>
              <span>L</span>
              <i>—</i>
              <span>O</span>
            </div>
            <h3>
              Ein Stand.
              <br />
              Für das ganze Team.
            </h3>
            <p>
              Disposition, Lager und Leitung arbeiten mit denselben
              Informationen. Ohne neue E-Mail-Ketten.
            </p>
          </article>
        </div>
      </section>
      <section className="section roi-section">
        <Roi />
      </section>
      <section className="section integration-section">
        <p className="eyebrow">PASST IN IHRE SYSTEMLANDSCHAFT.</p>
        <h2>
          Gut verbunden.
          <br />
          Ohne großen Umweg.
        </h2>
        <p>
          Das Schnittstellenkonzept setzt auf offene Formate. In der Demo können
          Sie die Datenstruktur direkt ansehen.
        </p>
        <div className="integration-row">
          <span>
            CSV <small>Import & Export</small>
          </span>
          <span>
            REST <small>Dokumentiertes API-Konzept</small>
          </span>
          <span>
            Webhooks <small>Ereignisbasiert gedacht</small>
          </span>
        </div>
        <a
          className="text-link"
          href={href("beispiel-transporte.csv")}
          download
        >
          Beispiel-CSV herunterladen ↓
        </a>
      </section>
      <section className="section faq-section">
        <div>
          <p className="eyebrow">NOCH EINE FRAGE?</p>
          <h2>Gut zu wissen.</h2>
          <p>Das Produktkonzept auf einen Blick.</p>
        </div>
        <Faq />
      </section>
      <section className="bottom-cta">
        <p className="eyebrow">ERST AUSPROBIEREN. DANN WEITERDENKEN.</p>
        <h2>
          Bringen Sie Ihren
          <br />
          Tag in den Takt.
        </h2>
        <a className="button" href={href("demo/")}>
          Interaktive Demo öffnen →
        </a>
      </section>
    </>
  );
}
