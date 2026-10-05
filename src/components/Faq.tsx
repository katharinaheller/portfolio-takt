"use client";
// Adapted from nobruf/shadcn-landing-page components/ui/accordion.tsx (MIT).
import * as Accordion from "@radix-ui/react-accordion";
const items = [
  [
    "Ersetzt TAKT unser Transportmanagementsystem?",
    "Nein. Das Produktkonzept ergänzt vorhandene Systeme um Zeitfenster, operative Ausnahmen und gemeinsame Statusinformationen. Die gezeigte Demo arbeitet ausschließlich mit Beispieldaten.",
  ],
  [
    "Wie kommen Daten in die Plattform?",
    "Das Konzept sieht CSV-Import, eine REST-Schnittstelle und Webhooks vor. In dieser Portfolio-Demo können Sie eine Beispiel-CSV herunterladen; es wird keine Verbindung zu externen Systemen hergestellt.",
  ],
  [
    "Wie lange dauert die Einführung?",
    "Für einen ersten Standort ist im fiktiven Angebot eine zweiwöchige Pilotphase vorgesehen: Prozesse abbilden, Beispieldaten prüfen und die Disposition einbeziehen. Ein echter Zeitplan hängt von den Schnittstellen ab.",
  ],
  [
    "Kann ich die Demo ohne Konto ausprobieren?",
    "Ja. Öffnen Sie den Demo-Arbeitsbereich. Sie benötigen weder E-Mail-Adresse noch Passwort. Alle Aktionen bleiben in Ihrem Browser.",
  ],
];
export function Faq() {
  return (
    <Accordion.Root type="single" collapsible className="faq">
      {items.map(([q, a], i) => (
        <Accordion.Item value={String(i)} key={q} className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger>
              {q}
              <span aria-hidden="true">+</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <p>{a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
