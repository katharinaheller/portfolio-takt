"use client";
import { useState } from "react";
export function Roi() {
  const [transports, setTransports] = useState(120);
  const [cost, setCost] = useState(38);
  const hours = (transports * 5) / 60;
  return (
    <div className="roi">
      <div>
        <p className="eyebrow">RECHNEN SIE MIT IHREM ALLTAG.</p>
        <h2>
          Was kosten fünf
          <br />
          Minuten pro Transport?
        </h2>
        <p>
          Beispielannahme: Der manuelle Abstimmungsaufwand sinkt von 8 auf 3
          Minuten. Passen Sie Volumen und internen Stundensatz an.
        </p>
        <label htmlFor="transports">
          Transporte pro Woche <strong>{transports}</strong>
        </label>
        <input
          id="transports"
          type="range"
          min="20"
          max="600"
          step="10"
          value={transports}
          onChange={(e) => setTransports(Number(e.target.value))}
        />
        <label htmlFor="cost">Interner Stundensatz in EUR</label>
        <input
          id="cost"
          type="number"
          min="10"
          max="250"
          value={cost}
          onChange={(e) =>
            setCost(Math.min(250, Math.max(0, Number(e.target.value))))
          }
        />
      </div>
      <div className="roi-result" aria-live="polite">
        <span>RECHNERISCHER ZEITGEWINN</span>
        <strong>
          {hours.toLocaleString("de-DE", { maximumFractionDigits: 1 })}
          <small>Std. / Woche</small>
        </strong>
        <p>
          Entspricht{" "}
          <b>
            {(hours * cost * 4.33).toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            })}
          </b>
          <br />
          Arbeitszeitwert pro Monat.
        </p>
        <small>
          Modellrechnung mit 4,33 Wochen/Monat, vor Softwarekosten. Kein
          nachgewiesenes Kundenergebnis und keine Einspargarantie.
        </small>
      </div>
    </div>
  );
}
