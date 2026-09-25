"use client";

import { useEffect, useState } from "react";
import RedJohnMark from "./RedJohnMark";

export default function Splash() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("entered")) setShow(false);
    } catch {}
  }, []);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape") enter();
    };
    addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      removeEventListener("keydown", onKey);
    };
  }, [show]);

  function enter() {
    try {
      sessionStorage.setItem("entered", "1");
    } catch {}
    dispatchEvent(new Event("entered"));
    setLeaving(true);
    setTimeout(() => setShow(false), 900);
  }

  if (!show) return null;

  return (
    <div className={`splash ${leaving ? "leaving" : ""}`} role="dialog" aria-modal="true" aria-label="Entrada">
      <RedJohnMark autoplay className="splash-mark" />
      <p className="splash-kicker">The Mentalist</p>
      <blockquote className="splash-poem">
        <p>
          <span>Tyger Tyger, burning bright,</span>
          <span>In the forests of the night;</span>
          <span>What immortal hand or eye,</span>
          <span>Could frame thy fearful symmetry?</span>
        </p>
        <cite>William Blake, 1794</cite>
      </blockquote>
      <button type="button" className="splash-enter" onClick={enter}>
        Entrar
      </button>
    </div>
  );
}
