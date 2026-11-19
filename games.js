/**
 * ============================================================================
 * ENDPORT // GAME MANIFEST (Single Source of Truth)
 * ============================================================================
 * To add a new game later, simply append a new object to the `GAMES` array.
 *
 * Fields:
 *   id          : Unique slug (also selects custom SVG schematic if defined in schematics.js)
 *   serial      : Short index number displayed on the card ("01", "02", ...)
 *   code        : 6-char industrial classification code ("CTR-99", "GTA-03", ...)
 *   title       : Primary display title
 *   subtitle    : Short 1-line tagline
 *   url         : Live deployment URL (Cloudflare Workers / Pages / Vercel)
 *   status      : "live" | "coming-soon"
 *   category    : "versus" | "coop"  (used for filter tabs; coming-soon also appears in Coming Soon)
 *   year        : Original release year string
 *   players     : Player count badge (e.g. "2–8P ONLINE")
 *   modeLabel   : Multiplayer mode label (e.g. "VERSUS // RACING", "CO-OP // SANDBOX")
 *   engine      : Port runtime / compilation stack
 *   network     : Multiplayer transport architecture
 *   summary     : Technical briefing shown in the Spec Inspector
 *   highlights  : Array of 3–4 short technical bullet specs
 *   controls    : Array of { keys, action } objects rendered as tactile keycaps
 *   accent      : Optional micro-accent hex for subtle telemetry bars (defaults to #FFE600)
 * ============================================================================
 */

window.PORTAL_META = {
  brand: "GLADSTONEOG",
  altBrand: "JOHANSANS999",
  brandIcon: "GO",
  altBrandIcon: "J9",
  subBrand: "WEB ARCHIVE",
  version: "SYS.2.6",
  node: "WORKERS.DEV",
  tagline:
    "Classic & indie titles compiled to WebAssembly and engineered with zero-install browser multiplayer over WebRTC P2P & Cloudflare Durable Objects.",
};

window.GAMES = [
  {
    id: "ctr",
    serial: "01",
    code: "CTR-99",
    title: "CTR 1999",
    subtitle: "Crash Team Racing — Native WebAssembly Kart Port",
    url: "https://ctrweb.johansans999.workers.dev/",
    status: "live",
    category: "versus",
    year: "1999",
    players: "2–8P ONLINE",
    modeLabel: "VERSUS // RACING",
    engine: "Emscripten WASM · WebGL2 · SDL3 (ctr-native)",
    network: "WebRTC P2P DataChannels + CF Durable Objects",
    summary:
      "Full 59.82Hz VBlank-locked browser port of Crash Team Racing (1999) with 16:9 Hor+ widescreen, all 16 racers online (including bosses & duplicates), and progressive IndexedDB asset streaming.",
    highlights: [
      "Hybrid 0ms local physics + interpolated remote peers",
      "Synced weapons, turbo boosts & Time Trial ghost leaderboards",
      "Cloud Memory Card slots backed by SQLite Durable Objects",
    ],
    controls: [
      { keys: "WASD", action: "Drive & Steer" },
      { keys: "SPACE", action: "Hop / Powerslide" },
      { keys: "SHIFT", action: "Turbo Boost" },
      { keys: "F2", action: "Rooms & Hub" },
    ],
  },
  {
    id: "gta3",
    serial: "02",
    code: "GTA-03",
    title: "GTA III",
    subtitle: "Grand Theft Auto III — Liberty Net Co-op Edition",
    url: "https://gta3web.johansans999.workers.dev/",
    status: "live",
    category: "coop",
    year: "2001",
    players: "1–4P CO-OP",
    modeLabel: "CO-OP // OPEN WORLD",
    engine: "Emscripten WASM · WebGL2 (re3 + librw)",
    network: "WebRTC P2P Host/Peer + CF DO Relay Fallback",
    summary:
      "Browser-native Liberty City running full Story Co-op and Open Sandbox sessions. Synchronizes peds, custom skins, vehicles, traffic, NPCs, combat, Pay 'n' Spray, and passenger seat hopping.",
    highlights: [
      "Full Liberty City world, traffic & vehicle state sync",
      "Hop into friends' passenger seats mid-drive with G",
      "Cloud Safehouse Saves & built-in Liberty Net room browser",
    ],
    controls: [
      { keys: "WASD", action: "Move / Drive" },
      { keys: "F / G", action: "Driver / Passenger" },
      { keys: "MOUSE", action: "Aim & Fire" },
      { keys: "M", action: "Liberty Net Menu" },
    ],
  },
  {
    id: "emerald",
    serial: "03",
    code: "PKM-EM",
    title: "POKÉMON EMERALD",
    subtitle: "Hoenn Region — Browser GBA & Link Multiplayer",
    url: "https://emeraldweb.johansans999.workers.dev/",
    status: "live",
    category: "versus",
    year: "2004",
    players: "2–4P LINK",
    modeLabel: "VERSUS // RPG LINK",
    engine: "Browser GBA WebAssembly Core",
    network: "Online Virtual Link Cable Relay",
    summary:
      "Play Pokémon Emerald directly in the browser with online multiplayer link connectivity for battles and trading across the Hoenn region, paired with persistent browser-side save management.",
    highlights: [
      "Instant zero-install GBA WebAssembly execution",
      "Online virtual Link Cable support for trades & battles",
      "Persistent SRAM / save-state storage in your browser",
    ],
    controls: [
      { keys: "ARROWS", action: "D-Pad Move" },
      { keys: "Z / X", action: "A / B Buttons" },
      { keys: "ENTER", action: "Start Menu" },
      { keys: "SHIFT", action: "Select" },
    ],
  },
  {
    id: "metalslug",
    serial: "04",
    code: "MSL-13",
    title: "METAL SLUG 1–3",
    subtitle: "Neo Geo MVS Anthology — 60FPS Lockstep Co-op",
    url: "https://metalslugweb.johansans999.workers.dev/",
    status: "live",
    category: "coop",
    year: "1996–2000",
    players: "2P CO-OP",
    modeLabel: "CO-OP // ARCADE",
    engine: "Patched FinalBurn Neo Libretro WASM",
    network: "60FPS Lockstep WebRTC P2P + State Sync",
    summary:
      "Complete Metal Slug 1, 2, and 3 arcade anthology in one web app. Features hot-join live Neo Geo MVS hardware state compression & streaming so Player 2 drops straight into the exact CPU cycle.",
    highlights: [
      "Seamless switching between Metal Slug 1, 2 & 3",
      "14-byte dual-redundant 60FPS deterministic lockstep",
      "1-click invite links (?room=XXXX) & live room browser",
    ],
    controls: [
      { keys: "WASD", action: "Move & Aim" },
      { keys: "J / K / L", action: "Fire / Jump / Bomb" },
      { keys: "COIN", action: "Insert Coin" },
      { keys: "START", action: "Drop-in P1/P2" },
    ],
  },
  {
    id: "brotato",
    serial: "05",
    code: "BRT-23",
    title: "BROTATO",
    subtitle: "Arena Roguelite — Online 4-Player Squad Co-op",
    url: "https://brotatoweb.johansans999.workers.dev/",
    status: "live",
    category: "coop",
    year: "2023",
    players: "1–4P CO-OP",
    modeLabel: "CO-OP // ROGUELITE",
    engine: "WebAssembly + WebGL Browser Port",
    network: "Online Lobby Host & Shareable Invite Relay",
    summary:
      "Survive relentless alien waves with up to 4 friends online directly in the browser. Includes full keyboard + gamepad support, instant IndexedDB repeat loads, and vanilla Steam save import/export.",
    highlights: [
      "1–4 player online co-op with 1-click invite links",
      "Vanilla Steam save_v3_0.json export & import support",
      "Full controller & keyboard support with instant caching",
    ],
    controls: [
      { keys: "WASD", action: "Move Character" },
      { keys: "ESC", action: "Pause (Fullscreen)" },
      { keys: "F2", action: "Rooms & Saves Bar" },
      { keys: "F11", action: "Fullscreen Toggle" },
    ],
  },
  {
    id: "tetris",
    serial: "06",
    code: "TET-84",
    title: "TETRIS",
    subtitle: "Competitive Falling-Block Matrix — Online Versus",
    url: "https://tetrisweb.johansans999.workers.dev/",
    status: "live",
    category: "versus",
    year: "1984",
    players: "1–2P+ VS",
    modeLabel: "VERSUS // PUZZLE",
    engine: "Native Browser Canvas / Web Runtime",
    network: "Low-Latency Real-Time Online Multiplayer",
    summary:
      "Ultra-responsive browser Tetris built for crisp zero-latency input handling and real-time online head-to-head matches. Instant boot straight into solo marathon or multiplayer versus lobbies.",
    highlights: [
      "Sub-second cold load with zero external install",
      "Crisp keyboard input tuning for high-speed stacking",
      "Live online multiplayer rooms & competitive play",
    ],
    controls: [
      { keys: "← / →", action: "Shift Piece" },
      { keys: "↑ / Z", action: "Rotate CW / CCW" },
      { keys: "SPACE", action: "Hard Drop" },
      { keys: "C / SHIFT", action: "Hold Piece" },
    ],
  },
  {
    id: "nfsu2",
    serial: "07",
    code: "NFS-U2",
    title: "NFS UNDERGROUND 2",
    subtitle: "Bayview Street Racing — x86 → WASM + WebGPU Port",
    url: "https://nfsu2web.johansans999.workers.dev/",
    status: "live",
    category: "versus",
    year: "2004",
    players: "ONLINE MP",
    modeLabel: "VERSUS // STREET RACING",
    engine: "x86 → C → WASM (NFSU2Recomp) · D3D9 on WebGPU",
    network: "Cloudflare Workers Online Multiplayer Relay",
    summary:
      "Static x86-to-C recompiled Need for Speed: Underground 2 running natively in Chrome & Firefox with Direct3D 9 translated live onto WebGPU, Web Audio, and browser-native online multiplayer.",
    highlights: [
      "Ahead-of-time x86 → C → WebAssembly static recompile",
      "Direct3D 9 rendering pipeline bridged live to WebGPU",
      "Online street racing multiplayer & zero-install browser play",
    ],
    controls: [
      { keys: "WASD", action: "Throttle / Steer" },
      { keys: "SHIFT", action: "Nitrous Boost" },
      { keys: "SPACE", action: "Handbrake Drift" },
      { keys: "ENTER", action: "Menu / Lobby" },
    ],
  },
];
