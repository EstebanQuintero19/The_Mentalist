"use client";

import { useEffect, useState } from "react";

export default function ColdReading() {
  const [line, setLine] = useState("Cierra los ojos. Respira. Cuéntame qué recuerdas.");

  useEffect(() => {
    const h = new Date().getHours();
    const mobile = matchMedia("(pointer:coarse)").matches;
    const dark = matchMedia("(prefers-color-scheme:dark)").matches;
    const t = setTimeout(() => {
      setLine(
        h >= 23 || h < 5
          ? "Es tarde y sigues despierto. Estás evitando algo, y no es el sueño."
          : mobile
            ? "Lees esto en el teléfono, seguramente de pie. Tienes cinco minutos y quieres que valgan la pena."
            : dark
              ? "Pantalla grande, modo oscuro. Trabajas de noche más de lo que admites."
              : "Luz de día, pantalla grande, tiempo de sobra. Deberías estar haciendo otra cosa. No lo harás."
      );
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <p className="reading" key={line}>
      {line}
    </p>
  );
}
