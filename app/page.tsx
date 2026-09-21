import Image from "next/image";
import Link from "next/link";
import ColdReading from "./components/ColdReading";
import RedJohnMark from "./components/RedJohnMark";
import Splash from "./components/Splash";
import Palace from "./components/Palace";
import { around, moments, seven, unit, type Person } from "./data";
import { seasons } from "./seasons";

function Ledger({ people }: { people: Person[] }) {
  return (
    <ul className="ledger">
      {people.map((p) => (
        <li key={p.name} className={p.taken ? "taken" : undefined}>
          {p.photo ? <Image src={p.photo} alt={p.name} width={400} height={500} className="photo" /> : <span />}
          <div className="who">
            <h3>{p.name}</h3>
            <p className="role">{p.role}</p>
          </div>
          <div className="what">
            <p>{p.note}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <Splash />
      <header className="wall">
        <RedJohnMark ghost className="wall-mark" />
        <div className="wall-text">
          <h1>
            Cierra <em>los ojos.</em>
          </h1>
          <ColdReading />
          <p className="where">
            Sacramento, California. Oficina de Investigación Criminal. Un consultor sin placa, un sofá de
            cuero y un asesino que firma con una sonrisa.
          </p>
        </div>
        <a href="#palacio" className="cue" aria-label="Bajar">
          <span>Entra</span>
        </a>
      </header>

      <nav className="toc" aria-label="Secciones">
        <a href="#metodo">El método</a>
        <a href="#unidad">La unidad</a>
        <a href="#alrededor">Alrededor</a>
        <a href="#redjohn">Red John</a>
        <a href="#momentos">Momentos</a>
        <a href="#temporadas">Temporadas</a>
      </nav>

      <Palace />

      <section id="metodo" className="sec">
        <aside className="note">
          <p>Jane no tiene despacho. Tiene un sofá.</p>
        </aside>
        <div className="body">
          <h2>No hay psíquicos. Solo gente que presta atención.</h2>
          <ol className="moves">
            <li>
              <h3>Observa</h3>
              <p>
                Uñas mordidas, un anillo que se gira, la mirada que se va a la izquierda justo antes de
                mentir. Jane no adivina: recoge lo que todos dejan a la vista y nadie mira.
              </p>
            </li>
            <li>
              <h3>Deduce</h3>
              <p>
                Lo ordena en el palacio de la memoria, un edificio imaginario donde cada dato tiene su
                habitación. Cuando entra en una escena, ya sabe qué falta.
              </p>
            </li>
            <li>
              <h3>Provoca</h3>
              <p>
                Si el culpable no viene solo, se le construye un motivo: una trampa, un rumor plantado, una
                taza de té en la oficina equivocada. Decir «estás mintiendo» y esperar.
              </p>
            </li>
          </ol>
          <figure>
            <Image src="/img/sofa2.jpg" alt="Un sofá de cuero marrón junto a una ventana" width={1920} height={1280} />
            <figcaption>
              El sofá de la sala del CBI. Desde ahí se resuelven los casos y se duermen las siestas.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="unidad" className="sec">
        <aside className="note">
          <p>Unidad de Crímenes Graves, CBI, 2008–2013. Luego FBI, Austin, 2013–2015.</p>
        </aside>
        <div className="body">
          <h2>La unidad</h2>
          <Ledger people={unit} />
        </div>
      </section>

      <section id="alrededor" className="sec">
        <aside className="note">
          <p>
            <span className="key" /> En rojo, los que Red John se llevó.
          </p>
        </aside>
        <div className="body">
          <h2>Alrededor</h2>
          <Ledger people={around} />
        </div>
      </section>

      <section id="redjohn" className="room">
        <div className="room-wall">
          <RedJohnMark />
        </div>
        <div className="room-text">
          <h2>Red John</h2>
          <p className="blake">
            Tyger Tyger, burning bright,
            <br />
            In the forests of the night;
            <br />
            What immortal hand or eye,
            <br />
            Could frame thy fearful symmetry?
          </p>
          <p>
            Asesino en serie. Firma cada escena con una cara sonriente pintada con la sangre de la víctima,
            tres dedos de la mano derecha. Recluta discípulos. Tiene ojos dentro de la policía, del FBI y
            de los juzgados: la Asociación Blake, que lo protegió durante años.
          </p>

          <h3>Siete nombres</h3>
          <p>
            Lorelei le dijo a Jane que ya le había dado la mano a Red John. Jane recorrió su palacio de
            la memoria y salió con siete.
          </p>
          <ol className="seven">
            {seven.map((s) => (
              <li key={s.name} className={s.him ? "him" : undefined}>
                <span className="name">{s.name}</span>
                <span className="fate">{s.fate}</span>
              </li>
            ))}
          </ol>

          <h3>El final</h3>
          <p>
            Un hombre que temía a las palomas. Un teléfono con una lista de nombres. Una capilla, un parque,
            una llamada a Lisbon. Jane no lo entregó: lo estranguló con las manos, se sentó en un banco y
            lloró. Después desapareció dos años.
          </p>
        </div>
      </section>

      <section id="momentos" className="sec">
        <aside className="note">
          <p>Temporada · episodio. En rojo, cuando Red John está en la sala.</p>
        </aside>
        <div className="body">
          <h2>Momentos que lo cambiaron todo</h2>
          <ol className="timeline">
            {moments.map((m) => (
              <li key={m.code} className={m.red ? "red" : undefined}>
                <span className="code">{m.code}</span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="temporadas" className="sec">
        <aside className="note">
          <p>
            Siete temporadas, 151 episodios, un solo caso. <span className="key" /> La barra roja: cuánto de
            cada temporada es Red John.
          </p>
        </aside>
        <div className="body wide">
          <h2>Por temporadas</h2>
          <ul className="posters">
            {seasons.map((s) => (
              <li key={s.n}>
                <Link href={`/temporada/${s.n}`}>
                  <Image src={s.poster} alt="" width={300} height={450} />
                  <span
                    className="rj-bar"
                    title={`${s.episodesList.filter((e) => e.red).length} de ${s.episodesList.length} episodios clave con Red John`}
                    style={{ "--rj": s.episodesList.filter((e) => e.red).length / s.episodesList.length } as React.CSSProperties}
                  />
                  <span className="n">{s.n}</span>
                  <span className="t">{s.title}</span>
                  <span className="y">{s.years}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <p className="colophon">Hecho por un fan. Imágenes © Warner Bros. Television / CBS.</p>
    </>
  );
}
