"use client";

import Link from "next/link";
import { useEffect } from "react";
import RedJohnMark from "./RedJohnMark";

export default function Exit() {
  useEffect(() => {
    try {
      sessionStorage.removeItem("entered");
    } catch {}
  }, []);

  return (
    <div className="splash exit">
      <RedJohnMark erase className="splash-mark" />
      <p className="splash-kicker">The Mentalist, 2008–2015</p>
      <p className="exit-title">Ahora ábrelos.</p>
      <Link href="/" className="splash-enter">
        Volver al principio
      </Link>
    </div>
  );
}
