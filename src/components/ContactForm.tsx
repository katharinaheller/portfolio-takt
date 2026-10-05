"use client";
import { useState } from "react";
export function ContactForm() {
  const [status, setStatus] = useState("");
  return (
    <form
      className="contact-form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const invalid = Array.from(
          form.querySelectorAll<HTMLInputElement>("input"),
        ).find((i) => !i.checkValidity());
        if (invalid) {
          setStatus(
            "Bitte geben Sie einen Namen und eine gültige geschäftliche E-Mail-Adresse ein.",
          );
          invalid.focus();
          return;
        }
        setStatus(
          "Ihr Demo-Terminwunsch wurde lokal geprüft. Es wurde kein Termin gebucht und keine Nachricht versendet.",
        );
        form.reset();
      }}
    >
      <p className="form-note">
        Bitte nur Beispieldaten verwenden. Keine Übermittlung, keine
        Speicherung.
      </p>
      <label htmlFor="contact-name">Ihr Name</label>
      <input id="contact-name" required minLength={2} autoComplete="off" />
      <label htmlFor="contact-email">Geschäftliche E-Mail-Adresse</label>
      <input id="contact-email" required type="email" autoComplete="off" />
      <label htmlFor="team">Ihr Team</label>
      <select id="team">
        <option>Disposition</option>
        <option>Lager & Rampe</option>
        <option>Operative Leitung</option>
      </select>
      <label htmlFor="topic">Was möchten Sie besprechen?</label>
      <textarea id="topic" rows={4} />
      <button className="button" type="submit">
        Demo-Terminwunsch prüfen →
      </button>
      <p role="status">{status}</p>
    </form>
  );
}
