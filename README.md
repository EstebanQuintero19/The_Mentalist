# Cierra los ojos — The Mentalist

Página de fans en Next.js. Sin Tailwind ni dependencias extra.

```
npm install
npm run dev     # http://localhost:3000
npm run build
```

- `app/page.tsx` — inicio: palacio, método, unidad, alrededor, Red John, momentos, temporadas. `app/salida` — pantalla final.
- `app/temporada/[n]/page.tsx` — una ruta por temporada (1–7), estática.
- `app/data.ts` — personajes y momentos. `app/seasons.ts` — temporadas y episodios.
- `app/components/RedJohnMark.tsx` — la marca; `Splash.tsx` y `Exit.tsx`, entrada y salida; `Palace.tsx`, el plano.
- `public/img/CREDITS.md` — origen y licencia de cada imagen.
