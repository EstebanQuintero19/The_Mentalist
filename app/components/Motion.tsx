"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// «Cierra los ojos»: las palabras pasan de borrosas a enfocadas cuando se cruza la entrada.
export function Focus({ children }: { children: React.ReactNode }) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    let entered = false;
    try { entered = !!sessionStorage.getItem("entered"); } catch {}
    if (entered) return setGo(true);
    const on = () => setGo(true);
    addEventListener("entered", on);
    return () => removeEventListener("entered", on);
  }, []);
  return (
    <motion.h1 initial="off" animate={go ? "on" : "off"} transition={{ staggerChildren: 0.28, delayChildren: 0.2 }}>
      {children}
    </motion.h1>
  );
}
export function Word({ children, italic }: { children: React.ReactNode; italic?: boolean }) {
  const Tag = italic ? motion.em : motion.span;
  return (
    <Tag className="word"
      variants={{ off: { opacity: 0, filter: "blur(14px)" }, on: { opacity: 1, filter: "blur(0px)" } }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </Tag>
  );
}

// La firma de la pared sigue al cursor, despacio. Siempre te está mirando.
export function Watching({ children, className }: { children: React.ReactNode; className?: string }) {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 30, damping: 20 });
  const y = useSpring(my, { stiffness: 30, damping: 20 });
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const move = (e: PointerEvent) => {
      mx.set((e.clientX / innerWidth - 0.5) * 40);
      my.set((e.clientY / innerHeight - 0.5) * 30);
    };
    addEventListener("pointermove", move);
    return () => removeEventListener("pointermove", move);
  }, [mx, my]);
  return <motion.div className={className} style={{ x, y }}>{children}</motion.div>;
}

// Cronología que se tiñe de rojo al bajar.
export function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  return (
    <ol className="timeline" ref={ref}>
      <motion.span className="timeline-fill" style={{ scaleY: scrollYProgress }} aria-hidden />
      {children}
    </ol>
  );
}

// Cartel que se inclina hacia el cursor.
export function Tilt({ children }: { children: React.ReactNode }) {
  const px = useMotionValue(0.5), py = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 200, damping: 18 });
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 200, damping: 18 });
  return (
    <motion.li className="tilt" style={{ rotateX, rotateY, transformPerspective: 700 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => { px.set(0.5); py.set(0.5); }}>
      {children}
    </motion.li>
  );
}

// Subraya en la barra la sección que se está leyendo.
export function Toc({ items }: { items: [string, string][] }) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [items]);
  return (
    <nav className="toc" aria-label="Secciones">
      {items.map(([id, label]) => (
        <a key={id} href={`#${id}`} className={active === id ? "on" : undefined} aria-current={active === id ? "true" : undefined}>{label}</a>
      ))}
    </nav>
  );
}

// Linterna: la pared está a oscuras y el cursor ilumina un círculo; en él aparece la firma de verdad.
// Sin ratón (o hasta que se mueva), la luz vaga sola.
export function Flashlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const set = (x: number, y: number) => {
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
      el.querySelectorAll<HTMLElement>(".lit").forEach((l) => {
        const r = l.getBoundingClientRect(), o = el.getBoundingClientRect();
        l.style.setProperty("--lx", `${x - (r.left - o.left)}px`);
        l.style.setProperty("--ly", `${y - (r.top - o.top)}px`);
      });
    };
    let raf = 0, manual = false;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wander = (t: number) => {
      if (manual) return;
      const w = el.offsetWidth, h = el.offsetHeight;
      set(w * (0.62 + 0.22 * Math.sin(t / 2300)), h * (0.4 + 0.2 * Math.sin(t / 1700 + 1)));
      if (!still) raf = requestAnimationFrame(wander);
    };
    raf = requestAnimationFrame(wander);
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      manual = true; cancelAnimationFrame(raf);
      const o = el.getBoundingClientRect();
      set(e.clientX - o.left, e.clientY - o.top);
    };
    el.addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("pointermove", move); };
  }, []);
  return <header ref={ref} className="wall torch">{children}</header>;
}

// Siete nombres: al entrar en pantalla se tachan uno a uno; el último se enciende.
export function Seven({ items }: { items: { name: string; fate: string; him?: boolean }[] }) {
  const step = 0.55;
  return (
    <motion.ol className="seven" initial="off" whileInView="on" viewport={{ once: true, margin: "-25% 0px" }}>
      {items.map((s, i) => (
        <motion.li key={s.name} className={s.him ? "him" : undefined}
          variants={s.him
            ? { off: { opacity: 0.55 }, on: { opacity: 1, transition: { delay: 0.4 + i * step, duration: 0.8 } } }
            : { off: { opacity: 1 }, on: { opacity: 0.5, transition: { delay: 0.7 + i * step, duration: 0.4 } } }}>
          <motion.span className="name"
            variants={s.him ? { off: { color: "#8a8275" }, on: { color: "#b8282b", transition: { delay: 0.4 + i * step, duration: 0.8 } } } : undefined}>
            {s.name}
            {!s.him && <motion.i variants={{ off: { scaleX: 0 }, on: { scaleX: 1, transition: { delay: 0.4 + i * step, duration: 0.45, ease: [0.65, 0, 0.35, 1] } } }} />}
          </motion.span>
          <span className="fate">{s.fate}</span>
        </motion.li>
      ))}
    </motion.ol>
  );
}
