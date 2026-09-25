import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RedJohnMark from "../../components/RedJohnMark";
import { seasons } from "../../seasons";
import { Timeline } from "../../components/Motion";

export function generateStaticParams() {
  return seasons.map((s) => ({ n: String(s.n) }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const s = seasons.find((x) => String(x.n) === n);
  return { title: s ? `Temporada ${s.n}: ${s.title} — The Mentalist` : "The Mentalist" };
}

export default async function Temporada({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const s = seasons.find((x) => String(x.n) === n);
  if (!s) notFound();
  const prev = seasons.find((x) => x.n === s.n - 1);
  const next = seasons.find((x) => x.n === s.n + 1);
  const red = s.episodesList.filter((e) => e.red).length;

  return (
    <>
      <header className="season-head">
        <RedJohnMark ghost className="wall-mark" />
        <Link href="/#temporadas" className="back">
          ← Todas las temporadas
        </Link>
        <div className="season-grid">
          <Image src={s.poster} alt={`Cartel de la temporada ${s.n}`} width={600} height={900} className="poster" priority />
          <div>
            <p className="season-n">Temporada {s.n}</p>
            <h1>{s.title}</h1>
            <p className="where">
              {s.years}. {s.episodes} episodios
              {red > 0 && (
                <>
                  , <span className="redword">{red} con Red John en la sala</span>
                </>
              )}
              .
            </p>
            <p className="summary">{s.summary}</p>
          </div>
        </div>
      </header>

      <section className="sec">
        <aside className="note">
          <p>Quién entra, quién sale.</p>
        </aside>
        <div className="body">
          <p>{s.people}</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <aside className="note">
          <p>Episodios que importan. En rojo, cuando Red John está en la sala.</p>
        </aside>
        <div className="body">
          <Timeline>
            {s.episodesList.map((e) => (
              <li key={e.code} className={e.red ? "red" : undefined}>
                <span className="code">{e.code}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
          </Timeline>
        </div>
      </section>

      <nav className="season-nav" aria-label="Otras temporadas">
        {prev ? (
          <Link href={`/temporada/${prev.n}`}>
            ← Temporada {prev.n}
            <small>{prev.title}</small>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/temporada/${next.n}`} className="next">
            Temporada {next.n} →<small>{next.title}</small>
          </Link>
        ) : (
          <Link href="/salida" className="next">
            Caso cerrado →<small>Salir</small>
          </Link>
        )}
      </nav>
    </>
  );
}
