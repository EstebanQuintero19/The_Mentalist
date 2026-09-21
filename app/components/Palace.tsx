type Room = {
  id: string;
  name: string;
  hint: string;
  x: number;
  y: number;
  w: number;
  h: number;
  red?: boolean;
};

const rooms: Room[] = [
  { id: "metodo", name: "El vestíbulo", hint: "El método", x: 40, y: 40, w: 320, h: 260 },
  { id: "unidad", name: "La sala", hint: "La unidad", x: 360, y: 40, w: 400, h: 260 },
  { id: "alrededor", name: "El despacho", hint: "Alrededor", x: 760, y: 40, w: 400, h: 260 },
  { id: "momentos", name: "El pasillo", hint: "Momentos", x: 40, y: 300, w: 820, h: 100 },
  { id: "temporadas", name: "La biblioteca", hint: "Temporadas", x: 40, y: 400, w: 820, h: 180 },
  { id: "redjohn", name: "El dormitorio", hint: "Red John", x: 860, y: 300, w: 300, h: 280, red: true },
];

export default function Palace() {
  return (
    <section id="palacio" className="palace">
      <div className="palace-intro">
        <h2>El palacio de la memoria</h2>
        <p>
          Un edificio imaginario donde cada dato tiene su habitación. Así guarda Jane lo que ve. Entra por
          donde quieras. La última puerta está cerrada.
        </p>
      </div>

      <svg viewBox="0 0 1200 620" className="plan" role="navigation" aria-label="Plano del sitio">
        <defs>
          <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>

        {rooms.map((r) => (
          <a key={r.id} href={`#${r.id}`} className={`room ${r.red ? "red" : ""}`}>
            <rect x={r.x} y={r.y} width={r.w} height={r.h} className="floor" />
            <rect x={r.x} y={r.y} width={r.w} height={r.h} className="wall" />
            <text x={r.x + 22} y={r.y + 44} className="room-name">
              {r.name}
            </text>
            <text x={r.x + 22} y={r.y + 66} className="room-hint">
              {r.hint}
            </text>
          </a>
        ))}

        <g className="furniture">
          <circle cx="280" cy="220" r="14" />
          <path d="M294 214 q14 4 0 14" />
          <path d="M270 198 q3 -6 0 -12 M280 198 q3 -6 0 -12" className="steam" />
          <rect x="460" y="190" width="200" height="56" rx="10" />
          <line x1="527" y1="190" x2="527" y2="246" />
          <line x1="593" y1="190" x2="593" y2="246" />
          <rect x="450" y="180" width="12" height="76" rx="4" />
          <rect x="658" y="180" width="12" height="76" rx="4" />
          <rect x="880" y="180" width="160" height="60" />
          <circle cx="960" cy="268" r="12" />
          <rect x="1080" y="150" width="50" height="8" />
          <rect x="1080" y="164" width="50" height="8" />
          <rect x="1080" y="178" width="50" height="8" />
          <line x1="120" y1="350" x2="800" y2="350" strokeDasharray="2 10" />
          {[220, 330, 440, 550, 660].map((x) => (
            <circle key={x} cx={x} cy="350" r="3" className="dot-red" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <g key={i}>
              <rect x={120 + i * 100} y="470" width="40" height="70" />
              <text x={140 + i * 100} y="514" className="shelf-n">
                {i + 1}
              </text>
            </g>
          ))}
          <rect x="920" y="430" width="180" height="110" />
          <rect x="930" y="440" width="50" height="30" rx="4" />
          <image href="/img/redjohn.webp" x="1050" y="330" width="60" height="80" className="wall-stain" />
        </g>

        <g className="doors">
          <line x1="150" y1="40" x2="210" y2="40" className="gap" />
          <path d="M150 40 a60 60 0 0 1 60 60" />
          <line x1="360" y1="200" x2="360" y2="260" className="gap" />
          <path d="M360 260 a60 60 0 0 1 60 -60" />
          <line x1="760" y1="200" x2="760" y2="260" className="gap" />
          <path d="M760 260 a60 60 0 0 1 60 -60" />
          <line x1="200" y1="300" x2="260" y2="300" className="gap" />
          <path d="M200 300 a60 60 0 0 1 60 60" />
          <line x1="440" y1="400" x2="500" y2="400" className="gap" />
          <path d="M440 400 a60 60 0 0 1 60 60" />
          <line x1="860" y1="320" x2="860" y2="380" className="shut" />
          <circle cx="866" cy="350" r="2.5" className="knob" />
        </g>
      </svg>

      <ul className="palace-list">
        {rooms.map((r) => (
          <li key={r.id} className={r.red ? "red" : undefined}>
            <a href={`#${r.id}`}>
              <span>{r.name}</span>
              <small>{r.hint}</small>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
