import { meta } from "../../lib/site";
import { Pricing } from "../../components/Pricing";
import { Roi } from "../../components/Roi";
export const metadata = meta(
  "Preise für Ihren Betrieb",
  "Transparente fiktive SaaS-Pakete ab 149 € netto pro Monat. Monatliche oder jährliche Abrechnung vergleichen und eine nachvollziehbare Modellrechnung ausprobieren.",
  "preise/",
);
export default function Prices() {
  return (
    <>
      <section className="page-intro centered">
        <p className="eyebrow">KLAR KALKULIERBAR.</p>
        <h1>
          Ein passender Takt.
          <br />
          Für jede Betriebsgröße.
        </h1>
        <p>
          Nach Standorten und Transportvolumen. Mit definiertem Umfang und
          transparenten Beispielpreisen.
        </p>
      </section>
      <section className="section pricing-section">
        <Pricing />
      </section>
      <section className="section roi-section">
        <Roi />
      </section>
    </>
  );
}
