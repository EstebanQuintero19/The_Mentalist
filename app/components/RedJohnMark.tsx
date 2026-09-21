"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  ghost?: boolean;
  autoplay?: boolean;
  erase?: boolean;
  className?: string;
};

export default function RedJohnMark({ ghost, autoplay, erase, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(!!ghost || !!autoplay || !!erase);

  useEffect(() => {
    if (drawn || !ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [drawn]);

  return (
    <div ref={ref} className={`mark ${ghost ? "ghost" : ""} ${erase ? "erase" : ""} ${drawn ? "drawn" : ""} ${className ?? ""}`}>
      <Image
        src="/img/redjohn.webp"
        alt={ghost ? "" : "La firma de Red John: una cara sonriente pintada con sangre"}
        width={522}
        height={704}
        priority={!!autoplay || !!erase}
      />
    </div>
  );
}
