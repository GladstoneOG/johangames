# GLADSTONEOG // WebAssembly Multiplayer Game Portal

A zero-build, Swiss Print × Futuristic-Industrial (Arknights: Endfield–inspired) static portal for browser-ported multiplayer games by **GladstoneOG / Johansans999**.

## Live Games

1. **CTR 1999** — https://ctrweb.johansans999.workers.dev/
2. **GTA III** — https://gta3web.johansans999.workers.dev/
3. **Pokémon Emerald** — https://emeraldweb.johansans999.workers.dev/
4. **Metal Slug 1–3** — https://metalslugweb.johansans999.workers.dev/
5. **Brotato** — https://brotatoweb.johansans999.workers.dev/
6. **Tetris** — https://tetrisweb.johansans999.workers.dev/
7. **NFS Underground 2** — https://nfsu2web.johansans999.workers.dev/
8. **Mario Party 3 (N64)** — https://marioparty3web.johansans999.workers.dev/

## Under Construction (Staged)

9. **Capsa** — https://capsaweb.johansans999.workers.dev/
10. **Monopoly** — https://capsaweb.johansans999.workers.dev/

## Files

- `index.html` — Semantic layout shell, dynamic SVG favicon, and Swiss typography
- `styles.css` — Light Swiss Print design system (`#F0F0EC` paper, `#111214` ink, `#FFE600` industrial safety yellow, glitch identity transitions, chamfered CTAs)
- `games.js` — **Single source of truth** for all games, URLs, multiplayer specs, and controls
- `schematics.js` — Inline CAD/blueprint SVG schematics for each game + automatic fallback blueprint for future titles
- `audio.js` — Zero-dependency Web Audio API mechanical UI micro-sound synthesizer
- `app.js` — Category filtering, sticky Spec Inspector, periodic `GLADSTONEOG ↔ JOHANSANS999` glitch transition, keyboard navigation (`↑↓←→` + `Enter`), copy-link & mobile drawer

## Adding a New Game

Open `games.js` and append a new object to `window.GAMES`. Metrics, filter counts, cards, Spec Inspector, and a procedural Swiss schematic generate automatically. Set `status: "coming-soon"` for upcoming games to enable the hazard-stripe / classified redacted styling.

## Deploying (Zero Build Step)

### Cloudflare Pages
- Connect `https://github.com/GladstoneOG/johangames` with **Build command:** *(empty)* and **Output directory:** `/` (root), or run:
  ```bash
  npx wrangler pages deploy . --project-name johangames
  ```

### Vercel
- Import `https://github.com/GladstoneOG/johangames` (leave Build Command empty, Output Directory `.`), or run:
  ```bash
  npx vercel --prod
  ```
