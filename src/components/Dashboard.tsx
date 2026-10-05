"use client";
import { useState } from "react";
const initial = [
  {
    id: "TF-2048",
    from: "Mannheim",
    to: "Stuttgart",
    gate: "Tor 04",
    time: "09:30",
    state: "Klärung nötig",
    type: "warning",
  },
  {
    id: "TF-2049",
    from: "Karlsruhe",
    to: "Ulm",
    gate: "Tor 02",
    time: "10:15",
    state: "Im Zeitfenster",
    type: "good",
  },
  {
    id: "TF-2050",
    from: "Heilbronn",
    to: "München",
    gate: "Tor 06",
    time: "10:45",
    state: "Im Zeitfenster",
    type: "good",
  },
  {
    id: "TF-2051",
    from: "Pforzheim",
    to: "Augsburg",
    gate: "Tor 01",
    time: "11:00",
    state: "Bestätigt",
    type: "neutral",
  },
];
export function Dashboard({ compact = false }: { compact?: boolean }) {
  const [rows, setRows] = useState(initial);
  const [tab, setTab] = useState("Alle Transporte");
  const [selected, setSelected] = useState<string | null>(null);
  const [notice, setNotice] = useState("");
  const shown =
    tab === "Klärfälle" ? rows.filter((r) => r.type === "warning") : rows;
  return (
    <div className={`dashboard ${compact ? "compact" : ""}`}>
      <aside className="dash-sidebar" aria-label="Bereiche der Produktdemo">
        <span className="dash-logo">t.</span>
        <button
          aria-label="Transportübersicht"
          title="Transportübersicht"
          onClick={() => setTab("Alle Transporte")}
        >
          ▦
        </button>
        <button
          aria-label="Klärfälle anzeigen"
          title="Klärfälle"
          onClick={() => setTab("Klärfälle")}
        >
          ⚑
        </button>
        <span className="sidebar-bottom">JD</span>
      </aside>
      <div className="dash-main">
        <div className="dash-top">
          <span>
            Arbeitsbereich <b> / Südwest</b>
          </span>
          <span className="demo-tag">INTERAKTIVE DEMO</span>
        </div>
        <div className="dash-heading">
          <div>
            <p>MONTAG, 05. OKTOBER · BEISPIELDATEN</p>
            <h2>
              Guten Morgen, Julia <span aria-hidden="true">↗</span>
            </h2>
          </div>
          <button
            className="dash-reset"
            onClick={() => {
              setRows(initial);
              setNotice("Beispieldaten zurückgesetzt.");
              setSelected(null);
              setTab("Alle Transporte");
            }}
          >
            Zurücksetzen
          </button>
        </div>
        <div className="dash-kpis">
          <div>
            <span>Transporte heute</span>
            <strong>
              24 <small>im Plan</small>
            </strong>
            <div className="mini-bars" aria-hidden="true">
              {[35, 60, 48, 72, 51, 86, 65, 100, 80, 93, 77, 100].map(
                (v, i) => (
                  <i key={i} style={{ height: `${v}%` }} />
                ),
              )}
            </div>
          </div>
          <div>
            <span>Pünktliche Ankünfte</span>
            <strong>
              92<span className="percent"> %</span>
            </strong>
            <small>22 von 24 · Beispielszenario</small>
            <div className="progress-track">
              <i />
            </div>
          </div>
          <div>
            <span>Offene Klärfälle</span>
            <strong>
              {rows.some((r) => r.type === "warning") ? "01" : "00"}{" "}
              <span className="warning-dot" />
            </strong>
            <small>
              {rows.some((r) => r.type === "warning")
                ? "Ein Zeitfenster braucht Aufmerksamkeit."
                : "Alle Zeitfenster sind geklärt."}
            </small>
          </div>
        </div>
        <div className="dash-content">
          <div className="transport-panel">
            <div
              className="table-tabs"
              role="group"
              aria-label="Transporte filtern"
            >
              {["Alle Transporte", "Klärfälle"].map((t) => (
                <button
                  key={t}
                  aria-pressed={tab === t}
                  onClick={() => setTab(t)}
                >
                  {t}
                  {t === "Klärfälle" && (
                    <span>
                      {rows.filter((r) => r.type === "warning").length}
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="transport-table">
              <div className="table-header">
                <span>TRANSPORT / STRECKE</span>
                <span>ANKUNFT</span>
                <span>STATUS</span>
              </div>
              {shown.map((row) => (
                <button
                  className={`transport-row ${selected === row.id ? "selected" : ""}`}
                  key={row.id}
                  onClick={() =>
                    setSelected(selected === row.id ? null : row.id)
                  }
                  aria-expanded={selected === row.id}
                >
                  <span>
                    <b>{row.id}</b>
                    <small>
                      {row.from} → {row.to}
                    </small>
                  </span>
                  <span>
                    {row.time}
                    <small>{row.gate}</small>
                  </span>
                  <span className={`state ${row.type}`}>{row.state}</span>
                </button>
              ))}
              {!shown.length && (
                <p className="empty">
                  Alles geklärt. Aktuell gibt es keine offenen Fälle.
                </p>
              )}
            </div>
            {selected && (
              <div className="transport-detail">
                <strong>{selected} · Transportdetails</strong>
                <p>
                  {rows.find((r) => r.id === selected)?.type === "warning"
                    ? "Verspätung gemeldet: 20 Minuten. Reservieren Sie ein neues Zeitfenster und informieren Sie die Rampe."
                    : "Ankunft bestätigt. Dokumente vollständig. Kein Handlungsbedarf im Beispielszenario."}
                </p>
                {rows.find((r) => r.id === selected)?.type === "warning" && (
                  <button
                    className="button small"
                    onClick={() => {
                      setRows(
                        rows.map((r) =>
                          r.id === selected
                            ? {
                                ...r,
                                state: "Neu geplant",
                                type: "good",
                                time: "09:50",
                              }
                            : r,
                        ),
                      );
                      setNotice(
                        "Zeitfenster für TF-2048 auf 09:50 Uhr verschoben. Der Klärfall ist gelöst.",
                      );
                    }}
                  >
                    Zeitfenster auf 09:50 verschieben →
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="activity-panel">
            <p className="eyebrow">IHR TAGESVERLAUF</p>
            <div className="timeline">
              <div>
                <time>09:15</time>
                <b>Rampe bereit</b>
                <small>Tor 04 · Team informiert</small>
              </div>
              <div>
                <time>09:30</time>
                <b>Nächste Ankunft</b>
                <small>Mannheim → Stuttgart</small>
              </div>
              <div>
                <time>10:15</time>
                <b>Entladung geplant</b>
                <small>Tor 02 · 30 Minuten</small>
              </div>
            </div>
            <p className="activity-note">
              Alle Beteiligten.
              <br />
              Ein gemeinsamer Stand.
            </p>
          </div>
        </div>
        <p className="dash-notice" role="status">
          {notice ||
            "Transport auswählen und Details öffnen. Alle Daten sind fiktiv."}
        </p>
      </div>
    </div>
  );
}
