import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Header } from "../components/Header";
import { href } from "../lib/site";
import "./globals.css";
const sans = localFont({
  src: "../../public/fonts/sans.woff2",
  display: "swap",
  variable: "--font-sans",
});
export const metadata = { icons: { icon: href("favicon.svg") } };
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={sans.variable}>
      <body>
        <a className="skip" href="#inhalt">
          Zum Inhalt
        </a>
        <Header />
        <main id="inhalt">{children}</main>
        <footer>
          <div className="footer-main">
            <a className="logo" href={href()}>
              takt.
            </a>
            <p>
              Weniger nachfragen.
              <br />
              Mehr im Fluss.
            </p>
            <div>
              <a href={href("produkt/")}>Produkt</a>
              <a href={href("preise/")}>Preise</a>
              <a href={href("sicherheit/")}>Sicherheitskonzept</a>
              <a href={href("kontakt/")}>Kontakt-Demo</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Portfolio-Demoprojekt – Unternehmen und Geschäftsdaten sind
              fiktiv.
            </p>
            <a href={href("impressum/")}>Impressum-Demo</a>
            <a href={href("datenschutz/")}>Datenschutz-Demo</a>
            <span>© 2026 TAKT</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
