"use client";
import { useState, useEffect } from "react";
import { href } from "../lib/site";
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        if(document.activeElement?.closest('#navigation')) document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);
  return (
    <header className="header">
      <a className="logo" href={href()} aria-label="TAKT Startseite">
        <span className="takt-symbol" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        takt<span className="logo-point">.</span>
      </a>
      <button
        className="menu-toggle"
        aria-label="Menü öffnen"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        Menü <span aria-hidden="true">☰</span>
      </button>
      <nav
        id="navigation"
        aria-label="Hauptnavigation"
        className={open ? "open" : ""}
      >
        <a href={href("produkt/")}>Produkt</a>
        <a href={href("loesungen/")}>Für Ihr Team</a>
        <a href={href("preise/")}>Preise</a>
        <a href={href("sicherheit/")}>Sicherheit</a>
        <a className="login-link" href={href("login/")}>
          Demo-Login ↗
        </a>
        <a className="button small" href={href("demo/")}>
          Live-Demo öffnen →
        </a>
      </nav>
    </header>
  );
}
