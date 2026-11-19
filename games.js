/**
 * ============================================================================
 * GLADSTONEOG // GAME MANIFEST (Single Source of Truth)
 * ============================================================================
 * To add a new game later, simply append a new object to the `GAMES` array.
 *
 * Fields:
 *   id          : Unique slug (also selects custom SVG schematic if defined in schematics.js)
 *   serial      : Short index number displayed on the card ("01", "02", ...)
 *   code        : 6-char industrial classification code ("CPS-13", "CTR-99", ...)
 *   title       : Primary display title
 *   subtitle    : Short 1-line tagline
 *   url         : Live deployment URL (Cloudflare Workers / Pages / Vercel)
 *   status      : "live" | "coming-soon"
 *   category    : "versus" | "coop"  (used for filter tabs)
 *   year        : Original release year string
 *   players     : Player count badge (e.g. "2–8P ONLINE")
 *   modeLabel   : Multiplayer mode label (e.g. "VERSUS // RACING", "CO-OP // SANDBOX")
 *   engine      : Port runtime / compilation stack
 *   network     : Multiplayer transport architecture
 *   summary     : Technical briefing shown in the Spec Inspector
 *   highlights  : Array of 3–4 short technical bullet specs
 *   controls    : Array of { keys, action } objects rendered as tactile keycaps
 *   theme       : { primary, secondary, ink, tint } color palette revealed on hover & inspector
 * ============================================================================
 */

window.PORTAL_META = {
  brand: "GLADSTONEOG",
  altBrand: "JOHANSANS999",
  brandIcon: "GO",
  altBrandIcon: "J9",
  subBrand: "WEB ARCHIVE",
  version: "SYS.2.7",
  node: "WORKERS.DEV",
  tagline:
    "Classic & indie titles compiled to WebAssembly and engineered with zero-install browser multiplayer over WebRTC P2P & Cloudflare Durable Objects.",
};

window.GAMES = [
  {
    id: "capsa",
    serial: "01",
    code: "CPS-13",
    title: "CAPSA",
    subtitle: "Big Two / Capsa Banting — 4-Player Online Card Table",
    url: "https://capsaweb.johansans999.workers.dev/",
    status: "live",
    category: "versus",
    year: "CLASSIC",
    players: "2–4P ONLINE",
    modeLabel: "VERSUS // CARD TABLE",
    engine: "Native Web UI · Deterministic Deck & Combo Engine",
    network: "Cloudflare Workers + Durable Objects Room Sync",
    summary:
      "Browser-native online Capsa (Big Two / Capsa Banting) tabletop engineered for fast 4-player rooms, crisp hand-sorting, automatic combo validation, and real-time turn synchronization.",
    highlights: [
      "Full 52-card ruleset with singles, pairs & 5-card poker combos",
      "Real-time multiplayer lobbies & invite links over Durable Objects",
      "Instant zero-install play with responsive tabletop controls",
    ],
    controls: [
      { keys: "CLICK", action: "Select Cards" },
      { keys: "SPACE", action: "Play Hand" },
      { keys: "P", action: "Pass Turn" },
      { keys: "S", action: "Sort Hand" },
    ],
    theme: {
      primary: "#D92626",
      secondary: "#059669",
      ink: "#FFFFFF",
      tint: "rgba(217, 38, 38, 0.08)",
    },
  },
  {
    id: "ctr",
    serial: "02",
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
    theme: {
      primary: "#FF5A00",
      secondary: "#0284C7",
      ink: "#111214",
      tint: "rgba(255, 90, 0, 0.09)",
    },
  },
  {
    id: "gta3",
    serial: "03",
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
    theme: {
      primary: "#E5A00D",
      secondary: "#0F766E",
      ink: "#111214",
      tint: "rgba(229, 160, 13, 0.10)",
    },
  },
  {
    id: "emerald",
    serial: "04",
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
    theme: {
      primary: "#059669",
      secondary: "#DC2626",
      ink: "#FFFFFF",
      tint: "rgba(5, 150, 105, 0.09)",
    },
  },
  {
    id: "metalslug",
    serial: "05",
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
    theme: {
      primary: "#D95D14",
      secondary: "#4D7C0F",
      ink: "#FFFFFF",
      tint: "rgba(217, 93, 20, 0.09)",
    },
  },
  {
    id: "brotato",
    serial: "06",
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
    theme: {
      primary: "#7C3AED",
      secondary: "#F59E0B",
      ink: "#FFFFFF",
      tint: "rgba(124, 58, 237, 0.09)",
    },
  },
  {
    id: "tetris",
    serial: "07",
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
    theme: {
      primary: "#0284C7",
      secondary: "#E11D48",
      ink: "#FFFFFF",
      tint: "rgba(2, 132, 199, 0.09)",
    },
  },
  {
    id: "nfsu2",
    serial: "08",
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
    theme: {
      primary: "#0891B2",
      secondary: "#9333EA",
      ink: "#FFFFFF",
      tint: "rgba(8, 145, 178, 0.10)",
    },
  },
  {
    id: "marioparty3",
    serial: "09",
    code: "MP3-64",
    title: "MARIO PARTY 3 (N64)",
    subtitle: "Millennium Star Board & Minigames — 4P Online N64",
    url: "https://marioparty3web.johansans999.workers.dev/",
    status: "live",
    category: "versus",
    year: "2000",
    players: "1–4P ONLINE",
    modeLabel: "VERSUS // N64 PARTY",
    engine: "Mupen64Plus-Next / ParaLLEl N64 WASM · WebGL2",
    network: "Star-Topology Lockstep WebRTC P2P + CF DO Relay",
    summary:
      "Zero-install Nintendo 64 browser port of Mario Party 3 (USA) with 1–4 player star-topology lockstep multiplayer, hot-join live N64 hardware savestate streaming, and plug-and-play controller support.",
    highlights: [
      "Direct WebRTC P2P + CGNAT-proof Durable Object fallback",
      "Hot-join N64 state sync & 1-click invite links (?room=)",
      "Plug-and-play gamepads, 360° Spin Assist (R) & EEPROM saves",
    ],
    controls: [
      { keys: "WASD", action: "Analog Stick" },
      { keys: "J / K / L", action: "A / B / Z Trigger" },
      { keys: "R / SHIFT", action: "360° Spin / Walk" },
      { keys: "F2", action: "Rooms & Core Bar" },
    ],
    theme: {
      primary: "#EAB308",
      secondary: "#DC2626",
      ink: "#111214",
      tint: "rgba(234, 179, 8, 0.11)",
    },
  },
  {
    id: "monopoly",
    serial: "10",
    code: "MNP-35",
    title: "MONOPOLY",
    subtitle: "Classic Property Trading Board — Online Multiplayer",
    url: "https://monopolyweb.johansans999.workers.dev/",
    status: "live",
    category: "versus",
    year: "1935",
    players: "2–6P ONLINE",
    modeLabel: "VERSUS // BOARD GAME",
    engine: "Native Browser Canvas / Interactive Tabletop Runtime",
    network: "Cloudflare Workers + Durable Objects State Relay",
    summary:
      "Online browser Monopoly featuring real-time turn sync, property auctions, player-to-player trading, Chance & Community Chest decks, and house/hotel upgrades directly in your browser.",
    highlights: [
      "Turn-synchronized multiplayer board, trades & live auctions",
      "Persistent room state powered by Cloudflare Durable Objects",
      "Zero-install instant tabletop lobbies with shareable links",
    ],
    controls: [
      { keys: "SPACE", action: "Roll Dice" },
      { keys: "B", action: "Buy / Auction" },
      { keys: "T", action: "Trade Proposal" },
      { keys: "E", action: "End Turn" },
    ],
    theme: {
      primary: "#0D9488",
      secondary: "#DC2626",
      ink: "#FFFFFF",
      tint: "rgba(13, 148, 136, 0.10)",
    },
  },
];
