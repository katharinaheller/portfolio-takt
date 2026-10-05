import { meta, href } from "../../lib/site";
export const metadata = meta(
  "Demo-Login ohne Zugangsdaten",
  "Öffnen Sie den TAKT-Demo-Arbeitsbereich ohne Registrierung, E-Mail-Adresse oder Passwort. Alle angezeigten Geschäftsdaten sind fiktiv.",
  "login/",
);
export default function Login() {
  return (
    <section className="login-page">
      <div className="login-card">
        <span className="dash-logo">t.</span>
        <p className="eyebrow">WILLKOMMEN IM DEMO-ARBEITSBEREICH</p>
        <h1>
          Einloggen?
          <br />
          Einfach loslegen.
        </h1>
        <p>
          Für diese Demo brauchen Sie keine Zugangsdaten. Sie starten in der
          Rolle der Disponentin Julia mit vorbereiteten Beispieldaten.
        </p>
        <div className="demo-person">
          <span>JD</span>
          <div>
            <strong>Julia · Disposition</strong>
            <small>Arbeitsbereich Südwest · Fiktive Rolle</small>
          </div>
        </div>
        <a className="button" href={href("demo/")}>
          Als Demo-Disponentin starten →
        </a>
        <p className="privacy-note">
          Keine Authentifizierung. Keine echten Konten. Keine Passwörter.
        </p>
      </div>
    </section>
  );
}
