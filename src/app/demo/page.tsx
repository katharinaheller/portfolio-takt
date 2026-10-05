import { Dashboard } from "../../components/Dashboard";
import { meta } from "../../lib/site";
export const metadata = meta(
  "Interaktive Produktdemo",
  "Probieren Sie die Transportübersicht aus: Klärfälle filtern, Transportdetails öffnen und ein Zeitfenster neu planen. Ohne Konto und mit fiktiven Daten.",
  "demo/",
);
export default function Demo() {
  return (
    <section className="demo-page">
      <p className="eyebrow">IHR DEMO-ARBEITSBEREICH</p>
      <h1>Einmal selbst disponieren.</h1>
      <p>
        Öffnen Sie den Transport <strong>TF-2048</strong> und verschieben Sie
        das Zeitfenster. Der offene Klärfall wird direkt aktualisiert.
      </p>
      <Dashboard />
      <p className="privacy-note">
        Lokale Produktdemo. Keine Verbindung zu Speditionen, keine echten
        Transportdaten, keine Speicherung.
      </p>
    </section>
  );
}
