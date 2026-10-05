"use client";
import { useState } from "react";
import { href } from "../lib/site";
export function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <div className="billing" role="group" aria-label="Abrechnung auswählen">
        <button aria-pressed={!annual} onClick={() => setAnnual(false)}>
          Monatlich
        </button>
        <button aria-pressed={annual} onClick={() => setAnnual(true)}>
          Jährlich <span>−15 %</span>
        </button>
      </div>
      <div className="pricing-grid">
        {[
          {
            name: "Start",
            price: 149,
            desc: "Ein Standort. Ein klarer Überblick.",
            features: [
              "1 Standort · 5 Teamzugänge",
              "Bis 500 Transporte pro Monat",
              "Zeitfenster & Klärfälle",
              "CSV-Export",
            ],
          },
          {
            name: "Betrieb",
            price: 349,
            desc: "Für Teams mit mehr Bewegung.",
            features: [
              "3 Standorte · 20 Teamzugänge",
              "Bis 2.500 Transporte pro Monat",
              "Rollen & Freigaben",
              "REST-API & Webhooks im Konzept",
            ],
          },
          {
            name: "Verbund",
            price: 749,
            desc: "Mehrere Standorte, ein Takt.",
            features: [
              "10 Standorte · 60 Teamzugänge",
              "Bis 10.000 Transporte pro Monat",
              "Standortübergreifende Auswertung",
              "Gemeinsame Pilotplanung",
            ],
          },
        ].map((p, i) => (
          <article
            className={`price-card ${i === 1 ? "featured" : ""}`}
            key={p.name}
          >
            {i === 1 && (
              <span className="price-label">FÜR WACHSENDE TEAMS</span>
            )}
            <h2>{p.name}</h2>
            <p>{p.desc}</p>
            <div className="price">
              {(annual ? p.price * 0.85 : p.price).toLocaleString("de-DE", {
                maximumFractionDigits: 2,
              })}{" "}
              €<span> / Monat</span>
            </div>
            <small>
              {annual
                ? `${(p.price * 0.85 * 12).toLocaleString("de-DE", { style: "currency", currency: "EUR" })} pro Jahr, jährlich abgerechnet`
                : "Monatlich abgerechnet, monatlich kündbar"}
            </small>
            <a
              className={`button ${i === 1 ? "" : "outline"}`}
              href={href("kontakt/")}
            >
              Pilotgespräch simulieren →
            </a>
            <ul>
              {p.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="pricing-note">
        Fiktive Nettopreise zzgl. USt. Keine Buchung, kein Vertrag. Alle Pakete
        sind Teil des Produktkonzepts.
      </p>
    </>
  );
}
