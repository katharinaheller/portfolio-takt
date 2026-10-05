import {href} from '../lib/site';
export default function NotFound(){return <section className="page-intro"><p className="eyebrow">404</p><h1>Hier geht es<br/>nicht weiter.</h1><p>Die angefragte Seite wurde nicht gefunden.</p><a className="button" href={href()}>Zur Startseite →</a></section>;}
