/**
 * ============================================================================
 * ENDPORT // TECHNICAL SCHEMATIC GENERATOR (Pure Inline SVG Blueprints)
 * ============================================================================
 * Each game receives a bespoke Swiss/CAD technical illustration.
 * Any future game added to games.js automatically falls back to a procedural
 * blueprint rendered from its serial + code.
 * ============================================================================
 */

window.GAME_SCHEMATICS = {
  ctr: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-ctr" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-ctr)"/>
      <!-- Circuit Track Loop -->
      <path d="M 46 106 C 32 74, 62 36, 122 36 C 176 36, 188 76, 232 76 C 274 76, 294 40, 318 54 C 338 66, 330 112, 286 116 C 234 120, 200 100, 152 108 C 102 116, 58 134, 46 106 Z"
            stroke="currentColor" stroke-width="1.4" stroke-opacity="0.32" stroke-dasharray="4 3"/>
      <path class="sch-draw" d="M 56 102 C 46 78, 70 46, 124 46 C 172 46, 184 86, 232 86 C 272 86, 290 54, 310 64 C 324 72, 318 104, 282 106 C 236 108, 198 90, 150 98 C 106 106, 66 122, 56 102 Z"
            stroke="currentColor" stroke-width="2.2"/>
      <!-- Turbo Boost Pad Accent -->
      <polygon points="154,60 170,60 180,72 164,72" fill="#FFE600" stroke="currentColor" stroke-width="1.2"/>
      <polygon points="174,60 188,60 198,72 184,72" fill="#FFE600" stroke="currentColor" stroke-width="1.2"/>
      <!-- Stylized Kart Top-Down Vector -->
      <g transform="translate(96, 46) rotate(-14)">
        <rect x="-14" y="-8" width="28" height="16" fill="#F8F8F5" stroke="currentColor" stroke-width="1.8"/>
        <rect x="-18" y="-12" width="8" height="5" fill="currentColor"/>
        <rect x="-18" y="7" width="8" height="5" fill="currentColor"/>
        <rect x="8" y="-12" width="8" height="5" fill="currentColor"/>
        <rect x="8" y="7" width="8" height="5" fill="currentColor"/>
        <circle cx="-1" cy="0" r="4.5" fill="#FFE600" stroke="currentColor" stroke-width="1.4"/>
        <line x1="-26" y1="-3" x2="-19" y2="-3" stroke="currentColor" stroke-width="1.5"/>
        <line x1="-32" y1="0" x2="-19" y2="0" stroke="currentColor" stroke-width="1.5"/>
        <line x1="-26" y1="3" x2="-19" y2="3" stroke="currentColor" stroke-width="1.5"/>
      </g>
      <!-- Checkered Finish Strip -->
      <g transform="translate(274, 96)">
        <rect x="0" y="0" width="6" height="6" fill="currentColor"/>
        <rect x="6" y="6" width="6" height="6" fill="currentColor"/>
        <rect x="12" y="0" width="6" height="6" fill="currentColor"/>
        <rect x="0" y="12" width="6" height="6" fill="currentColor"/>
        <rect x="12" y="12" width="6" height="6" fill="currentColor"/>
        <rect x="0" y="0" width="18" height="18" stroke="currentColor" stroke-width="1"/>
      </g>
      <!-- Technical Telemetry Callouts -->
      <line x1="16" y1="18" x2="72" y2="18" stroke="currentColor" stroke-width="1"/>
      <circle cx="16" cy="18" r="2.2" fill="currentColor"/>
      <text x="24" y="14" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">SYNC // 59.82HZ VBLANK</text>
      <text x="236" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">DRIFT.VEC [16:9 HOR+]</text>
      <!-- Registration Crosshairs -->
      <path d="M 336 16 V 26 M 331 21 H 341" stroke="currentColor" stroke-width="1.1"/>
      <path d="M 22 126 V 136 M 17 131 H 27" stroke="currentColor" stroke-width="1.1"/>
    </svg>
  `,

  gta3: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-gta" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-gta)"/>
      <!-- Liberty City Wireframe Skyline -->
      <g stroke="currentColor" stroke-width="1.4">
        <line x1="20" y1="120" x2="340" y2="120" stroke-width="1.8"/>
        <rect x="34" y="68" width="24" height="52" fill="#F8F8F5"/>
        <rect x="64" y="42" width="30" height="78" fill="#F8F8F5"/>
        <line x1="64" y1="54" x2="94" y2="54" stroke-opacity="0.35"/>
        <line x1="64" y1="66" x2="94" y2="66" stroke-opacity="0.35"/>
        <line x1="64" y1="78" x2="94" y2="78" stroke-opacity="0.35"/>
        <rect x="102" y="28" width="28" height="92" fill="#FFE600"/>
        <line x1="116" y1="12" x2="116" y2="28" stroke-width="1.8"/>
        <rect x="138" y="58" width="36" height="62" fill="#F8F8F5"/>
        <!-- Callahan Suspension Bridge Wireframe -->
        <path d="M 174 120 L 204 46 L 234 120" stroke-width="1.5"/>
        <path d="M 244 120 L 274 46 L 304 120" stroke-width="1.5"/>
        <path d="M 174 92 Q 239 50 304 92" stroke-width="1.5" stroke-dasharray="3 2"/>
        <line x1="174" y1="98" x2="328" y2="98" stroke-width="1.8"/>
        <line x1="204" y1="46" x2="274" y2="46" stroke-opacity="0.45"/>
      </g>
      <!-- Circular Radar Minimap Overlay -->
      <g transform="translate(292, 46)">
        <circle cx="0" cy="0" r="24" fill="#F8F8F5" stroke="currentColor" stroke-width="1.6"/>
        <circle cx="0" cy="0" r="14" stroke="currentColor" stroke-width="0.9" stroke-dasharray="2 2"/>
        <line x1="-28" y1="0" x2="28" y2="0" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.45"/>
        <line x1="0" y1="-28" x2="0" y2="28" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.45"/>
        <polygon points="0,-7 6,6 0,3 -6,6" fill="#FFE600" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="9" cy="-8" r="2.5" fill="currentColor"/>
        <circle cx="-10" cy="7" r="2.5" fill="currentColor"/>
      </g>
      <!-- Wanted Level Pips -->
      <g transform="translate(22, 16)">
        <rect x="0" y="0" width="8" height="8" fill="#FFE600" stroke="currentColor" stroke-width="1.1"/>
        <rect x="12" y="0" width="8" height="8" fill="#FFE600" stroke="currentColor" stroke-width="1.1"/>
        <rect x="24" y="0" width="8" height="8" fill="#FFE600" stroke="currentColor" stroke-width="1.1"/>
        <rect x="36" y="0" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.1"/>
        <rect x="48" y="0" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.1"/>
        <rect x="60" y="0" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.1"/>
      </g>
      <text x="22" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">LIBERTY.NET // 4P WORLD SYNC</text>
      <text x="236" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">RE3 + LIBRW [WASM]</text>
    </svg>
  `,

  emerald: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-pkm" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-pkm)"/>
      <!-- Exploded Technical Capsule Blueprint -->
      <g transform="translate(108, 76)">
        <circle cx="0" cy="0" r="44" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.45"/>
        <path d="M -34 0 A 34 34 0 0 1 34 0 Z" fill="#FFE600" stroke="currentColor" stroke-width="1.8"/>
        <path d="M -34 0 A 34 34 0 0 0 34 0 Z" fill="#F8F8F5" stroke="currentColor" stroke-width="1.8"/>
        <line x1="-34" y1="0" x2="34" y2="0" stroke="currentColor" stroke-width="2.4"/>
        <circle cx="0" cy="0" r="11" fill="#F8F8F5" stroke="currentColor" stroke-width="2.2"/>
        <circle cx="0" cy="0" r="4.5" fill="currentColor"/>
        <line x1="0" y1="-52" x2="0" y2="-40" stroke="currentColor" stroke-width="1"/>
        <line x1="0" y1="40" x2="0" y2="52" stroke="currentColor" stroke-width="1"/>
      </g>
      <!-- Virtual Link Cable Signal Wave -->
      <g transform="translate(160, 76)">
        <line x1="0" y1="0" x2="72" y2="0" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
        <polyline points="6,0 16,-14 26,14 36,-14 46,14 56,-6 66,0" stroke="currentColor" stroke-width="1.8" fill="none"/>
        <rect x="-4" y="-5" width="8" height="10" fill="currentColor"/>
        <rect x="68" y="-5" width="8" height="10" fill="currentColor"/>
      </g>
      <!-- Faceted Emerald Crystal Geometry -->
      <g transform="translate(274, 76)">
        <polygon points="0,-40 28,-16 28,16 0,40 -28,16 -28,-16" fill="#F8F8F5" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="0,-24 15,-10 15,10 0,24 -15,10 -15,-10" fill="#FFE600" stroke="currentColor" stroke-width="1.3"/>
        <line x1="0" y1="-40" x2="0" y2="-24" stroke="currentColor" stroke-width="1.2"/>
        <line x1="28" y1="-16" x2="15" y2="-10" stroke="currentColor" stroke-width="1.2"/>
        <line x1="28" y1="16" x2="15" y2="10" stroke="currentColor" stroke-width="1.2"/>
        <line x1="0" y1="40" x2="0" y2="24" stroke="currentColor" stroke-width="1.2"/>
        <line x1="-28" y1="16" x2="-15" y2="10" stroke="currentColor" stroke-width="1.2"/>
        <line x1="-28" y1="-16" x2="-15" y2="-10" stroke="currentColor" stroke-width="1.2"/>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">HOENN.GBA // LINK RELAY</text>
      <text x="234" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">TRADE / BATTLE [ONLINE]</text>
    </svg>
  `,

  metalslug: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-msl" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-msl)"/>
      <!-- SV-001 Tank Orthographic Blueprint -->
      <g transform="translate(52, 42)" stroke="currentColor" stroke-width="1.7">
        <!-- Main Cannon Barrel -->
        <rect x="86" y="16" width="54" height="10" fill="#FFE600"/>
        <rect x="136" y="13" width="10" height="16" fill="currentColor"/>
        <!-- Turret Dome -->
        <path d="M 32 34 C 32 10, 88 10, 92 34 Z" fill="#F8F8F5"/>
        <rect x="44" y="6" width="22" height="7" fill="currentColor"/>
        <!-- Armored Chassis -->
        <path d="M 16 34 L 106 34 L 116 54 L 10 54 Z" fill="#F8F8F5"/>
        <rect x="28" y="40" width="14" height="8" fill="#FFE600"/>
        <text x="48" y="47" font-family="JetBrains Mono, monospace" font-size="7.5" fill="currentColor" stroke="none" font-weight="700">SV-001</text>
        <!-- Caterpillar Track Assembly -->
        <rect x="6" y="54" width="114" height="24" rx="12" fill="#F8F8F5" stroke-width="2"/>
        <circle cx="22" cy="66" r="7" fill="none" stroke-width="1.5"/>
        <circle cx="44" cy="66" r="7" fill="none" stroke-width="1.5"/>
        <circle cx="66" cy="66" r="7" fill="none" stroke-width="1.5"/>
        <circle cx="88" cy="66" r="7" fill="none" stroke-width="1.5"/>
        <circle cx="106" cy="66" r="6" fill="currentColor"/>
      </g>
      <!-- Ballistic Shell Trajectory + Target Crosshair -->
      <path d="M 204 62 Q 254 28 302 74" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
      <g transform="translate(304, 76)">
        <circle cx="0" cy="0" r="20" stroke="currentColor" stroke-width="1.4"/>
        <circle cx="0" cy="0" r="9" fill="#FFE600" stroke="currentColor" stroke-width="1.3"/>
        <line x1="-26" y1="0" x2="26" y2="0" stroke="currentColor" stroke-width="1.1"/>
        <line x1="0" y1="-26" x2="0" y2="26" stroke="currentColor" stroke-width="1.1"/>
      </g>
      <!-- Anthology Indicators -->
      <g transform="translate(18, 12)">
        <rect x="0" y="0" width="22" height="14" fill="currentColor"/>
        <text x="4" y="10" font-family="JetBrains Mono, monospace" font-size="8" fill="#FFE600" font-weight="700">M1</text>
        <rect x="26" y="0" width="22" height="14" fill="currentColor"/>
        <text x="30" y="10" font-family="JetBrains Mono, monospace" font-size="8" fill="#FFE600" font-weight="700">M2</text>
        <rect x="52" y="0" width="22" height="14" fill="currentColor"/>
        <text x="56" y="10" font-family="JetBrains Mono, monospace" font-size="8" fill="#FFE600" font-weight="700">M3</text>
      </g>
      <text x="206" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">LOCKSTEP 60FPS // FBNEO</text>
    </svg>
  `,

  brotato: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-brt" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-brt)"/>
      <!-- Arena Tactical Wave Radar -->
      <g transform="translate(180, 76)">
        <circle cx="0" cy="0" r="56" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3" opacity="0.5"/>
        <circle cx="0" cy="0" r="38" stroke="currentColor" stroke-width="1.3"/>
        <circle cx="0" cy="0" r="22" stroke="currentColor" stroke-width="1" opacity="0.45"/>
        <!-- 6 Orbital Weapon Vectors -->
        <line x1="-56" y1="0" x2="-24" y2="0" stroke="currentColor" stroke-width="1.4"/>
        <line x1="24" y1="0" x2="56" y2="0" stroke="currentColor" stroke-width="1.4"/>
        <line x1="-40" y1="-40" x2="-18" y2="-18" stroke="currentColor" stroke-width="1.4"/>
        <line x1="18" y1="18" x2="40" y2="40" stroke="currentColor" stroke-width="1.4"/>
        <line x1="40" y1="-40" x2="18" y2="-18" stroke="currentColor" stroke-width="1.4"/>
        <line x1="-18" y1="18" x2="-40" y2="40" stroke="currentColor" stroke-width="1.4"/>
        <!-- 6 Floating Weapon Pods -->
        <rect x="-44" y="-4" width="12" height="8" fill="#F8F8F5" stroke="currentColor" stroke-width="1.4"/>
        <rect x="32" y="-4" width="12" height="8" fill="#F8F8F5" stroke="currentColor" stroke-width="1.4"/>
        <rect x="-32" y="-32" width="10" height="10" fill="#FFE600" stroke="currentColor" stroke-width="1.3"/>
        <rect x="22" y="-32" width="10" height="10" fill="#FFE600" stroke="currentColor" stroke-width="1.3"/>
        <rect x="-32" y="22" width="10" height="10" fill="#FFE600" stroke="currentColor" stroke-width="1.3"/>
        <rect x="22" y="22" width="10" height="10" fill="#FFE600" stroke="currentColor" stroke-width="1.3"/>
        <!-- Central Potato Geometric Core -->
        <ellipse cx="0" cy="0" rx="15" ry="18" fill="#FFE600" stroke="currentColor" stroke-width="2"/>
        <circle cx="-5" cy="-3" r="2.2" fill="currentColor"/>
        <circle cx="5" cy="-3" r="2.2" fill="currentColor"/>
        <line x1="-4" y1="5" x2="4" y2="5" stroke="currentColor" stroke-width="1.8"/>
      </g>
      <!-- Incoming Wave Swarm Blips -->
      <g fill="currentColor">
        <rect x="52" y="42" width="6" height="6"/>
        <rect x="66" y="54" width="5" height="5"/>
        <rect x="44" y="94" width="6" height="6"/>
        <rect x="294" y="38" width="6" height="6"/>
        <rect x="308" y="88" width="6" height="6"/>
        <rect x="284" y="106" width="5" height="5"/>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">WAVE.SECTOR // 6-SLOT ORBIT</text>
      <text x="238" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">SQUAD 1–4P // STEAM SAVE</text>
    </svg>
  `,

  tetris: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-tet" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-tet)"/>
      <!-- Precision Matrix Playfield Frame -->
      <g transform="translate(108, 16)">
        <rect x="0" y="0" width="144" height="118" fill="#F8F8F5" stroke="currentColor" stroke-width="1.8"/>
        <!-- Ghost Drop Projection Lines -->
        <line x1="54" y1="44" x2="54" y2="82" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.45"/>
        <line x1="90" y1="44" x2="90" y2="82" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.45"/>
        <!-- Active Falling T-Tetromino -->
        <g fill="#FFE600" stroke="currentColor" stroke-width="1.6">
          <rect x="54" y="12" width="18" height="18"/>
          <rect x="36" y="30" width="18" height="18"/>
          <rect x="54" y="30" width="18" height="18"/>
          <rect x="72" y="30" width="18" height="18"/>
        </g>
        <!-- Ghost Outline at Bottom -->
        <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2" opacity="0.6">
          <rect x="54" y="64" width="18" height="18"/>
          <rect x="36" y="82" width="18" height="18"/>
          <rect x="54" y="82" width="18" height="18"/>
          <rect x="72" y="82" width="18" height="18"/>
        </g>
        <!-- Stacked Foundation Blocks -->
        <g stroke="currentColor" stroke-width="1.5">
          <rect x="0" y="100" width="18" height="18" fill="currentColor"/>
          <rect x="18" y="100" width="18" height="18" fill="currentColor"/>
          <rect x="36" y="100" width="18" height="18" fill="#E6E6E0"/>
          <rect x="72" y="100" width="18" height="18" fill="#E6E6E0"/>
          <rect x="90" y="100" width="18" height="18" fill="currentColor"/>
          <rect x="108" y="100" width="18" height="18" fill="currentColor"/>
          <rect x="126" y="100" width="18" height="18" fill="#FFE600"/>
          <rect x="0" y="82" width="18" height="18" fill="#E6E6E0"/>
          <rect x="108" y="82" width="18" height="18" fill="#E6E6E0"/>
          <rect x="126" y="82" width="18" height="18" fill="#FFE600"/>
          <rect x="126" y="64" width="18" height="18" fill="#FFE600"/>
          <rect x="126" y="46" width="18" height="18" fill="#FFE600"/>
        </g>
      </g>
      <!-- Side Hold & Next Readout Boxes -->
      <g transform="translate(26, 26)">
        <rect x="0" y="0" width="58" height="44" stroke="currentColor" stroke-width="1.2" fill="#F8F8F5"/>
        <text x="6" y="12" font-family="JetBrains Mono, monospace" font-size="7" fill="currentColor">HOLD</text>
        <rect x="14" y="19" width="11" height="11" fill="#FFE600" stroke="currentColor" stroke-width="1.2"/>
        <rect x="25" y="19" width="11" height="11" fill="#FFE600" stroke="currentColor" stroke-width="1.2"/>
        <rect x="25" y="30" width="11" height="11" fill="#FFE600" stroke="currentColor" stroke-width="1.2"/>
        <rect x="36" y="30" width="11" height="11" fill="#FFE600" stroke="currentColor" stroke-width="1.2"/>
      </g>
      <g transform="translate(274, 26)">
        <rect x="0" y="0" width="60" height="58" stroke="currentColor" stroke-width="1.2" fill="#F8F8F5"/>
        <text x="6" y="12" font-family="JetBrains Mono, monospace" font-size="7" fill="currentColor">NEXT</text>
        <rect x="12" y="22" width="36" height="9" fill="currentColor"/>
        <rect x="18" y="38" width="12" height="12" fill="#FFE600" stroke="currentColor" stroke-width="1.1"/>
        <rect x="30" y="38" width="12" height="12" fill="#FFE600" stroke="currentColor" stroke-width="1.1"/>
      </g>
      <text x="26" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">MATRIX 10x20 // SRS</text>
      <text x="266" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">VS.ONLINE</text>
    </svg>
  `,

  nfsu2: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-nfs" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-nfs)"/>
      <!-- Street Tuner Coupe Wireframe Profile -->
      <g transform="translate(26, 46)" stroke="currentColor" stroke-width="1.8">
        <!-- Rear GT Wing -->
        <path d="M 14 26 L 22 10 L 34 10 L 30 26" fill="none"/>
        <line x1="10" y1="10" x2="38" y2="10" stroke-width="2.4"/>
        <!-- Body Silhouette -->
        <path d="M 22 50 L 18 32 L 42 26 L 78 10 L 138 10 L 178 28 L 224 34 L 234 48 L 226 54 L 22 54 Z" fill="#F8F8F5"/>
        <!-- Cabin Window -->
        <path d="M 60 26 L 84 14 L 134 14 L 160 26 Z" fill="#FFE600" stroke-width="1.4"/>
        <!-- Side Skirt & Nitrous Line -->
        <line x1="68" y1="48" x2="168" y2="48" stroke-width="1.4"/>
        <line x1="22" y1="38" x2="220" y2="38" stroke-dasharray="5 3" stroke-width="1" opacity="0.5"/>
        <!-- Front & Rear Wheels -->
        <circle cx="56" cy="54" r="16" fill="#F8F8F5" stroke-width="2.2"/>
        <circle cx="56" cy="54" r="9" stroke-width="1.3"/>
        <circle cx="56" cy="54" r="3" fill="currentColor"/>
        <circle cx="186" cy="54" r="16" fill="#F8F8F5" stroke-width="2.2"/>
        <circle cx="186" cy="54" r="9" stroke-width="1.3"/>
        <circle cx="186" cy="54" r="3" fill="currentColor"/>
        <!-- Underglow Reference Line -->
        <line x1="76" y1="68" x2="166" y2="68" stroke="#FFE600" stroke-width="3"/>
      </g>
      <!-- RPM Tachometer Blueprint -->
      <g transform="translate(306, 76)">
        <circle cx="0" cy="0" r="32" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 2"/>
        <path d="M -24 14 A 27 27 0 1 1 24 14" stroke="currentColor" stroke-width="2"/>
        <path d="M 16 -22 A 27 27 0 0 1 24 14" stroke="#FF3D00" stroke-width="3.2"/>
        <line x1="0" y1="0" x2="18" y2="-14" stroke="currentColor" stroke-width="2.2"/>
        <circle cx="0" cy="0" r="4" fill="#FFE600" stroke="currentColor" stroke-width="1.5"/>
        <text x="-16" y="22" font-family="JetBrains Mono, monospace" font-size="7" fill="currentColor">RPM x1K</text>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">RECOMP // X86 → C → WASM</text>
      <text x="18" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">PIPELINE: D3D9 → WEBGPU</text>
    </svg>
  `,

  marioparty3: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-mp3" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-mp3)"/>
      <!-- Board Space Path Spline & Nodes -->
      <path d="M 28 112 C 62 112, 74 96, 110 96 C 148 96, 166 116, 206 112 C 244 108, 258 84, 294 84 L 332 84"
            stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3" opacity="0.55"/>
      <g stroke="currentColor" stroke-width="1.5">
        <circle cx="42" cy="111" r="6" fill="#F8F8F5"/>
        <circle cx="78" cy="102" r="6" fill="#F8F8F5"/>
        <circle cx="116" cy="96" r="6" fill="#FFE600"/>
        <circle cx="158" cy="106" r="6" fill="#F8F8F5"/>
        <circle cx="204" cy="112" r="6" fill="#111214"/>
        <circle cx="250" cy="96" r="6" fill="#F8F8F5"/>
        <circle cx="294" cy="84" r="8" fill="#FFE600"/>
      </g>
      <!-- Isometric Dice Block CAD Wireframe -->
      <g transform="translate(106, 54)" stroke="currentColor" stroke-width="1.7">
        <!-- Outer isometric cube -->
        <polygon points="0,-28 28,-14 28,16 0,30 -28,16 -28,-14" fill="#F8F8F5"/>
        <polygon points="0,-28 28,-14 0,0 -28,-14" fill="#FFE600"/>
        <line x1="0" y1="0" x2="0" y2="30"/>
        <!-- Face Digits -->
        <text x="-6" y="-10" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="800" fill="currentColor" stroke="none">10</text>
        <text x="-18" y="14" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="700" fill="currentColor" stroke="none">6</text>
        <text x="10" y="14" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="700" fill="currentColor" stroke="none">3</text>
        <!-- Orbiting projection bracket -->
        <path d="M -38 -18 L -38 -26 L -30 -26" stroke-width="1.2" opacity="0.65"/>
        <path d="M 38 -18 L 38 -26 L 30 -26" stroke-width="1.2" opacity="0.65"/>
      </g>
      <!-- Millennium Star Technical Wireframe -->
      <g transform="translate(248, 52)">
        <circle cx="0" cy="0" r="32" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.45"/>
        <polygon points="0,-26 7,-8 26,-8 11,4 16,22 0,11 -16,22 -11,4 -26,-8 -7,-8"
                 fill="#FFE600" stroke="currentColor" stroke-width="1.8" stroke-linejoin="miter"/>
        <circle cx="-4" cy="-2" r="1.8" fill="currentColor"/>
        <circle cx="4" cy="-2" r="1.8" fill="currentColor"/>
        <!-- Star center registration lines -->
        <line x1="-40" y1="0" x2="-28" y2="0" stroke="currentColor" stroke-width="1"/>
        <line x1="28" y1="0" x2="40" y2="0" stroke="currentColor" stroke-width="1"/>
      </g>
      <!-- 4P Controller Slot Indicators -->
      <g transform="translate(18, 12)">
        <rect x="0" y="0" width="18" height="13" fill="currentColor"/>
        <text x="3.5" y="9.5" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#FFE600" font-weight="700">P1</text>
        <rect x="22" y="0" width="18" height="13" fill="currentColor"/>
        <text x="25.5" y="9.5" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#FFE600" font-weight="700">P2</text>
        <rect x="44" y="0" width="18" height="13" fill="currentColor"/>
        <text x="47.5" y="9.5" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#FFE600" font-weight="700">P3</text>
        <rect x="66" y="0" width="18" height="13" fill="currentColor"/>
        <text x="69.5" y="9.5" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#FFE600" font-weight="700">P4</text>
      </g>
      <text x="18" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">N64 // 4P STAR LOCKSTEP</text>
      <text x="226" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">MUPEN64 [WEBGL2]</text>
    </svg>
  `,

  capsa: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-cps" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-cps)"/>
      <!-- Fanned Precision Playing Cards CAD Blueprint -->
      <g transform="translate(132, 78)" stroke="currentColor" stroke-width="1.6">
        <g transform="rotate(-22) translate(-34, -44)">
          <rect x="0" y="0" width="54" height="78" fill="#F8F8F5"/>
          <text x="7" y="16" font-family="JetBrains Mono, monospace" font-size="11" font-weight="800" fill="currentColor" stroke="none">K</text>
          <polygon points="27,28 36,40 27,52 18,40" fill="none" stroke-width="1.5"/>
        </g>
        <g transform="rotate(-7) translate(-24, -48)">
          <rect x="0" y="0" width="54" height="78" fill="#F8F8F5"/>
          <text x="7" y="16" font-family="JetBrains Mono, monospace" font-size="11" font-weight="800" fill="currentColor" stroke="none">A</text>
          <polygon points="27,27 37,41 27,55 17,41" fill="#FFE600" stroke-width="1.5"/>
        </g>
        <g transform="rotate(10) translate(-12, -46)">
          <rect x="0" y="0" width="54" height="78" fill="#FFE600"/>
          <rect x="4" y="4" width="46" height="70" fill="none" stroke-dasharray="3 2" stroke-width="0.9"/>
          <text x="8" y="18" font-family="JetBrains Mono, monospace" font-size="12" font-weight="800" fill="currentColor" stroke="none">2♠</text>
          <path d="M 27 30 C 37 42, 39 50, 27 49 C 15 50, 17 42, 27 30 Z" fill="currentColor" stroke="none"/>
          <polygon points="27,46 31,56 23,56" fill="currentColor" stroke="none"/>
        </g>
      </g>
      <!-- Suit Priority Vector Diagram -->
      <g transform="translate(242, 30)" stroke="currentColor" stroke-width="1.3">
        <rect x="0" y="0" width="94" height="82" fill="#F8F8F5"/>
        <line x1="0" y1="20" x2="94" y2="20"/>
        <text x="8" y="13" font-family="JetBrains Mono, monospace" font-size="7.5" font-weight="700" fill="currentColor" stroke="none">RANK // BIG TWO</text>
        <text x="10" y="38" font-family="JetBrains Mono, monospace" font-size="9" font-weight="700" fill="currentColor" stroke="none">♠ &gt; ♥ &gt; ♣ &gt; ♦</text>
        <line x1="10" y1="48" x2="84" y2="48" stroke-dasharray="3 2" opacity="0.5"/>
        <text x="10" y="64" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" stroke="none">DECK: 52 / 4P</text>
        <text x="10" y="75" font-family="JetBrains Mono, monospace" font-size="7.5" fill="currentColor" stroke="none" opacity="0.72">HAND: 13 CARDS</text>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">TABLETOP // CAPSA BANTING</text>
      <text x="18" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">BUILD // UNDER CONSTRUCTION</text>
    </svg>
  `,

  monopoly: () => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-mnp" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-mnp)"/>
      <!-- Board Corner Perimeter Grid -->
      <g transform="translate(30, 26)" stroke="currentColor" stroke-width="1.5">
        <rect x="0" y="0" width="154" height="94" fill="#F8F8F5"/>
        <!-- Corner GO Cell -->
        <rect x="0" y="56" width="38" height="38" fill="#FFE600"/>
        <text x="7" y="79" font-family="JetBrains Mono, monospace" font-size="11" font-weight="800" fill="currentColor" stroke="none">GO↗</text>
        <!-- Property Spaces Along Bottom & Left -->
        <rect x="38" y="56" width="29" height="38" fill="#F8F8F5"/>
        <rect x="38" y="56" width="29" height="9" fill="currentColor"/>
        <rect x="67" y="56" width="29" height="38" fill="#F8F8F5"/>
        <rect x="67" y="56" width="29" height="9" fill="#FFE600"/>
        <rect x="96" y="56" width="29" height="38" fill="#F8F8F5"/>
        <rect x="96" y="56" width="29" height="9" fill="currentColor"/>
        <rect x="125" y="56" width="29" height="38" fill="#F8F8F5"/>
        <rect x="125" y="56" width="29" height="9" fill="#FFE600"/>
        <!-- Left Rail Spaces -->
        <rect x="0" y="28" width="38" height="28" fill="#F8F8F5"/>
        <rect x="30" y="28" width="8" height="28" fill="currentColor"/>
        <rect x="0" y="0" width="38" height="28" fill="#F8F8F5"/>
        <rect x="30" y="0" width="8" height="28" fill="#FFE600"/>
        <!-- Center Title Deed Blueprint Box -->
        <rect x="52" y="10" width="88" height="34" fill="none" stroke-dasharray="3 2" stroke-width="1.1"/>
        <text x="64" y="25" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="currentColor" stroke="none">TITLE DEED</text>
        <text x="64" y="37" font-family="JetBrains Mono, monospace" font-size="7.5" fill="currentColor" stroke="none" opacity="0.72">$200 PASS GO</text>
      </g>
      <!-- Geometric House / Hotel Wireframe + Twin Dice -->
      <g transform="translate(214, 34)" stroke="currentColor" stroke-width="1.6">
        <!-- Hotel Icon -->
        <polygon points="24,14 48,0 72,14 72,48 24,48" fill="#F8F8F5"/>
        <rect x="34" y="22" width="10" height="10" fill="#FFE600"/>
        <rect x="52" y="22" width="10" height="10" fill="#FFE600"/>
        <rect x="43" y="36" width="10" height="12" fill="currentColor"/>
        <!-- Twin Dice -->
        <rect x="8" y="60" width="24" height="24" fill="#FFE600"/>
        <circle cx="15" cy="67" r="2" fill="currentColor" stroke="none"/>
        <circle cx="25" cy="77" r="2" fill="currentColor" stroke="none"/>
        <rect x="42" y="60" width="24" height="24" fill="#F8F8F5"/>
        <circle cx="49" cy="67" r="2" fill="currentColor" stroke="none"/>
        <circle cx="54" cy="72" r="2" fill="currentColor" stroke="none"/>
        <circle cx="59" cy="77" r="2" fill="currentColor" stroke="none"/>
        <rect x="76" y="60" width="44" height="24" fill="#F8F8F5" stroke-width="1.2"/>
        <text x="82" y="75" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="currentColor" stroke="none">2D6</text>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">BOARD // PROPERTY TRADING</text>
      <text x="198" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">BUILD // UNDER CONSTRUCTION</text>
    </svg>
  `,

  fallback: (game) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-fb-${game.serial || "00"}" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-fb-${game.serial || "00"})"/>
      <g transform="translate(180, 75)">
        <circle cx="0" cy="0" r="46" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>
        <polygon points="0,-34 30,-17 30,17 0,34 -30,17 -30,-17" fill="#F8F8F5" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="0,-18 16,-9 16,9 0,18 -16,9 -16,-9" fill="#FFE600" stroke="currentColor" stroke-width="1.3"/>
        <line x1="-68" y1="0" x2="68" y2="0" stroke="currentColor" stroke-width="0.9" opacity="0.45"/>
        <line x1="0" y1="-56" x2="0" y2="56" stroke="currentColor" stroke-width="0.9" opacity="0.45"/>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">UNIT // ${game.code || "PORT"}</text>
      <text x="256" y="138" font-family="JetBrains Mono, monospace" font-size="8" fill="currentColor" opacity="0.72">WASM ARCHIVE #${game.serial || "00"}</text>
    </svg>
  `,
};

window.getGameSchematic = function (game) {
  const renderer = window.GAME_SCHEMATICS[game.id];
  return renderer ? renderer(game) : window.GAME_SCHEMATICS.fallback(game);
};
