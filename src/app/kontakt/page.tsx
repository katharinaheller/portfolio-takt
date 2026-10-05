import { meta } from "../../lib/site";
import { ContactForm } from "../../components/ContactForm";
export const metadata = meta(
  "Ein Pilotgespräch vorbereiten",
  "Demonstration eines strukturierten SaaS-Vertriebsgesprächs. Beschreiben Sie Ihre Rolle und Fragestellung, ohne Daten zu versenden.",
  "kontakt/",
);
export default function Contact() {
  return (
    <section className="section contact-page">
      <div>
        <p className="eyebrow">30 MINUTEN. EIN KLARES BILD.</p>
        <h1>
          Ihr Alltag.
          <br />
          Unser Ausgangspunkt.
        </h1>
        <p>
          Im gedachten Pilotgespräch gehen wir gemeinsam durch Ihre
          Transportkette und prüfen, wo eine gemeinsame Übersicht helfen würde.
        </p>
        <ol>
          <li>Ihre Prozesse und Engpässe verstehen</li>
          <li>Den relevanten Produktablauf zeigen</li>
          <li>Einen möglichen Pilotumfang eingrenzen</li>
        </ol>
        <p className="privacy-note">
          Portfolio-Demo: Es wird kein echtes Gespräch vereinbart.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
