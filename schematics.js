/**
 * ============================================================================
 * GLADSTONEOG // TECHNICAL SCHEMATIC GENERATOR (Full-Color CAD Blueprints)
 * ============================================================================
 * Each game renders a richly colored Swiss/CAD technical illustration.
 * At rest in the card grid, CSS applies a crisp semi-monochrome filter;
 * on hover, selection, and inside the Spec Inspector, full signature color
 * blooms alive seamlessly.
 * ============================================================================
 */

window.GAME_SCHEMATICS = {
  capsa: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-cps-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ECFDF5"/>
          <stop offset="65%" stop-color="#D1FAE5"/>
          <stop offset="100%" stop-color="#FEE2E2"/>
        </linearGradient>
        <pattern id="grid-cps-${s}" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="#064E3B" stroke-opacity="0.10" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-cps-${s})"/>
      <rect width="360" height="150" fill="url(#grid-cps-${s})"/>
      <!-- Fanned Precision Playing Cards -->
      <g transform="translate(132, 78)" stroke="#111214" stroke-width="1.6">
        <!-- King of Hearts (Red) -->
        <g transform="rotate(-22) translate(-34, -44)">
          <rect x="0" y="0" width="54" height="78" fill="#FFFFFF"/>
          <text x="7" y="16" font-family="JetBrains Mono, monospace" font-size="11" font-weight="800" fill="#DC2626" stroke="none">K♥</text>
          <path d="M 27 48 C 14 38, 16 28, 23 28 C 26 28, 27 31, 27 31 C 27 31, 28 28, 31 28 C 38 28, 40 38, 27 48 Z" fill="#DC2626" stroke="none"/>
        </g>
        <!-- Ace of Diamonds (Crimson) -->
        <g transform="rotate(-7) translate(-24, -48)">
          <rect x="0" y="0" width="54" height="78" fill="#FFFFFF"/>
          <text x="7" y="16" font-family="JetBrains Mono, monospace" font-size="11" font-weight="800" fill="#D92626" stroke="none">A♦</text>
          <polygon points="27,26 38,41 27,56 16,41" fill="#EF4444" stroke="#111214" stroke-width="1.4"/>
        </g>
        <!-- 2 of Spades (Highest Card - Crisp White & Obsidian) -->
        <g transform="rotate(10) translate(-12, -46)">
          <rect x="0" y="0" width="54" height="78" fill="#FFFFFF"/>
          <rect x="4" y="4" width="46" height="70" fill="none" stroke="#111214" stroke-opacity="0.35" stroke-dasharray="3 2" stroke-width="0.9"/>
          <text x="8" y="18" font-family="JetBrains Mono, monospace" font-size="12" font-weight="800" fill="#111214" stroke="none">2♠</text>
          <path d="M 27 30 C 37 42, 39 50, 27 49 C 15 50, 17 42, 27 30 Z" fill="#111214" stroke="none"/>
          <polygon points="27,46 31,56 23,56" fill="#111214" stroke="none"/>
        </g>
      </g>
      <!-- Suit Priority Vector Diagram -->
      <g transform="translate(240, 28)" stroke="#111214" stroke-width="1.3">
        <rect x="0" y="0" width="98" height="84" fill="#FFFFFF"/>
        <rect x="0" y="0" width="98" height="20" fill="#059669"/>
        <text x="8" y="13" font-family="JetBrains Mono, monospace" font-size="7.5" font-weight="700" fill="#FFFFFF" stroke="none">RANK // BIG TWO</text>
        <text x="10" y="39" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="800" fill="#111214" stroke="none">♠ &gt; <tspan fill="#DC2626">♥</tspan> &gt; ♣ &gt; <tspan fill="#DC2626">♦</tspan></text>
        <line x1="10" y1="49" x2="88" y2="49" stroke="#059669" stroke-dasharray="3 2" opacity="0.6"/>
        <text x="10" y="64" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#111214" stroke="none">DECK: 52 / 4P</text>
        <text x="10" y="76" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#059669" font-weight="700" stroke="none">HAND: 13 CARDS</text>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#065F46">TABLETOP // CAPSA BANTING</text>
      <text x="18" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#991B1B">LIVE // 52-CARD ROOM SYNC</text>
    </svg>
  `,

  ctr: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-ctr-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFF7ED"/>
          <stop offset="55%" stop-color="#FFEDD5"/>
          <stop offset="100%" stop-color="#E0F2FE"/>
        </linearGradient>
        <pattern id="grid-ctr-${s}" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="#9A3412" stroke-opacity="0.10" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-ctr-${s})"/>
      <rect width="360" height="150" fill="url(#grid-ctr-${s})"/>
      <!-- Circuit Track Loop -->
      <path d="M 46 106 C 32 74, 62 36, 122 36 C 176 36, 188 76, 232 76 C 274 76, 294 40, 318 54 C 338 66, 330 112, 286 116 C 234 120, 200 100, 152 108 C 102 116, 58 134, 46 106 Z"
            stroke="#0284C7" stroke-width="1.6" stroke-opacity="0.45" stroke-dasharray="4 3"/>
      <path class="sch-draw" d="M 56 102 C 46 78, 70 46, 124 46 C 172 46, 184 86, 232 86 C 272 86, 290 54, 310 64 C 324 72, 318 104, 282 106 C 236 108, 198 90, 150 98 C 106 106, 66 122, 56 102 Z"
            stroke="#111214" stroke-width="2.4"/>
      <!-- Turbo Boost Pad Accent (Cyan + Gold) -->
      <polygon points="154,60 170,60 180,72 164,72" fill="#0EA5E9" stroke="#111214" stroke-width="1.2"/>
      <polygon points="174,60 188,60 198,72 184,72" fill="#FACC15" stroke="#111214" stroke-width="1.2"/>
      <!-- Crash Kart Top-Down Vector -->
      <g transform="translate(96, 46) rotate(-14)">
        <rect x="-14" y="-8" width="28" height="16" fill="#0284C7" stroke="#111214" stroke-width="1.8"/>
        <rect x="-18" y="-12" width="8" height="5" fill="#111214"/>
        <rect x="-18" y="7" width="8" height="5" fill="#111214"/>
        <rect x="8" y="-12" width="8" height="5" fill="#111214"/>
        <rect x="8" y="7" width="8" height="5" fill="#111214"/>
        <circle cx="-1" cy="0" r="5" fill="#FF5A00" stroke="#111214" stroke-width="1.4"/>
        <line x1="-27" y1="-3" x2="-19" y2="-3" stroke="#FF5A00" stroke-width="2"/>
        <line x1="-34" y1="0" x2="-19" y2="0" stroke="#FACC15" stroke-width="2.2"/>
        <line x1="-27" y1="3" x2="-19" y2="3" stroke="#FF5A00" stroke-width="2"/>
      </g>
      <!-- Checkered Finish Strip -->
      <g transform="translate(274, 96)">
        <rect x="0" y="0" width="18" height="18" fill="#FFFFFF" stroke="#111214" stroke-width="1.2"/>
        <rect x="0" y="0" width="6" height="6" fill="#111214"/>
        <rect x="6" y="6" width="6" height="6" fill="#111214"/>
        <rect x="12" y="0" width="6" height="6" fill="#111214"/>
        <rect x="0" y="12" width="6" height="6" fill="#111214"/>
        <rect x="12" y="12" width="6" height="6" fill="#111214"/>
      </g>
      <line x1="16" y1="18" x2="72" y2="18" stroke="#FF5A00" stroke-width="1.4"/>
      <circle cx="16" cy="18" r="2.5" fill="#FF5A00"/>
      <text x="24" y="14" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#9A3412">SYNC // 59.82HZ VBLANK</text>
      <text x="234" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#0369A1">DRIFT.VEC [16:9 HOR+]</text>
      <path d="M 336 16 V 26 M 331 21 H 341" stroke="#0284C7" stroke-width="1.3"/>
      <path d="M 22 126 V 136 M 17 131 H 27" stroke="#FF5A00" stroke-width="1.3"/>
    </svg>
  `,

  gta3: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-gta-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FEF3C7"/>
          <stop offset="60%" stop-color="#E2E8F0"/>
          <stop offset="100%" stop-color="#CCFBF1"/>
        </linearGradient>
        <pattern id="grid-gta-${s}" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="#1E293B" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-gta-${s})"/>
      <rect width="360" height="150" fill="url(#grid-gta-${s})"/>
      <!-- Liberty City Skyline -->
      <g stroke="#111214" stroke-width="1.4">
        <line x1="20" y1="120" x2="340" y2="120" stroke-width="2"/>
        <rect x="34" y="68" width="24" height="52" fill="#CBD5E1"/>
        <rect x="64" y="42" width="30" height="78" fill="#94A3B8"/>
        <line x1="64" y1="54" x2="94" y2="54" stroke="#FEF08A" stroke-width="1.2"/>
        <line x1="64" y1="66" x2="94" y2="66" stroke="#FEF08A" stroke-width="1.2"/>
        <line x1="64" y1="78" x2="94" y2="78" stroke="#FEF08A" stroke-width="1.2"/>
        <rect x="102" y="28" width="28" height="92" fill="#F59E0B"/>
        <line x1="116" y1="12" x2="116" y2="28" stroke="#DC2626" stroke-width="2"/>
        <rect x="138" y="58" width="36" height="62" fill="#64748B"/>
        <!-- Callahan Suspension Bridge -->
        <path d="M 174 120 L 204 46 L 234 120" stroke="#0F766E" stroke-width="1.8"/>
        <path d="M 244 120 L 274 46 L 304 120" stroke="#0F766E" stroke-width="1.8"/>
        <path d="M 174 92 Q 239 50 304 92" stroke="#DC2626" stroke-width="1.6" stroke-dasharray="3 2"/>
        <line x1="174" y1="98" x2="328" y2="98" stroke="#111214" stroke-width="2"/>
        <line x1="204" y1="46" x2="274" y2="46" stroke="#0F766E" stroke-opacity="0.6"/>
      </g>
      <!-- Circular Radar Minimap -->
      <g transform="translate(292, 46)">
        <circle cx="0" cy="0" r="24" fill="#0F172A" stroke="#111214" stroke-width="2"/>
        <circle cx="0" cy="0" r="14" stroke="#14B8A6" stroke-width="1" stroke-dasharray="2 2"/>
        <line x1="-22" y1="0" x2="22" y2="0" stroke="#14B8A6" stroke-width="0.8" stroke-opacity="0.5"/>
        <line x1="0" y1="-22" x2="0" y2="22" stroke="#14B8A6" stroke-width="0.8" stroke-opacity="0.5"/>
        <polygon points="0,-7 6,6 0,3 -6,6" fill="#FACC15" stroke="#111214" stroke-width="1"/>
        <circle cx="9" cy="-8" r="2.8" fill="#EF4444"/>
        <circle cx="-10" cy="7" r="2.8" fill="#10B981"/>
      </g>
      <!-- Wanted Level Stars -->
      <g transform="translate(22, 16)">
        <rect x="0" y="0" width="8" height="8" fill="#F59E0B" stroke="#111214" stroke-width="1.1"/>
        <rect x="12" y="0" width="8" height="8" fill="#F59E0B" stroke="#111214" stroke-width="1.1"/>
        <rect x="24" y="0" width="8" height="8" fill="#F59E0B" stroke="#111214" stroke-width="1.1"/>
        <rect x="36" y="0" width="8" height="8" fill="#EF4444" stroke="#111214" stroke-width="1.1"/>
        <rect x="48" y="0" width="8" height="8" fill="none" stroke="#111214" stroke-width="1.1"/>
        <rect x="60" y="0" width="8" height="8" fill="none" stroke="#111214" stroke-width="1.1"/>
      </g>
      <text x="22" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#92400E">LIBERTY.NET // 4P WORLD SYNC</text>
      <text x="236" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="600" fill="#0F766E">RE3 + LIBRW [WASM]</text>
    </svg>
  `,

  emerald: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-pkm-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FEF2F2"/>
          <stop offset="48%" stop-color="#ECFDF5"/>
          <stop offset="100%" stop-color="#A7F3D0"/>
        </linearGradient>
        <pattern id="grid-pkm-${s}" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="#065F46" stroke-opacity="0.10" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-pkm-${s})"/>
      <rect width="360" height="150" fill="url(#grid-pkm-${s})"/>
      <!-- Classic Crimson/White Pokéball Blueprint -->
      <g transform="translate(108, 76)">
        <circle cx="0" cy="0" r="44" stroke="#059669" stroke-width="1.1" stroke-dasharray="4 3" opacity="0.6"/>
        <path d="M -34 0 A 34 34 0 0 1 34 0 Z" fill="#DC2626" stroke="#111214" stroke-width="1.8"/>
        <path d="M -34 0 A 34 34 0 0 0 34 0 Z" fill="#FFFFFF" stroke="#111214" stroke-width="1.8"/>
        <line x1="-34" y1="0" x2="34" y2="0" stroke="#111214" stroke-width="2.6"/>
        <circle cx="0" cy="0" r="11" fill="#FFFFFF" stroke="#111214" stroke-width="2.2"/>
        <circle cx="0" cy="0" r="4.8" fill="#10B981" stroke="#111214" stroke-width="1"/>
        <line x1="0" y1="-52" x2="0" y2="-40" stroke="#DC2626" stroke-width="1.3"/>
        <line x1="0" y1="40" x2="0" y2="52" stroke="#059669" stroke-width="1.3"/>
      </g>
      <!-- Virtual Link Cable Signal Wave -->
      <g transform="translate(160, 76)">
        <line x1="0" y1="0" x2="72" y2="0" stroke="#065F46" stroke-width="1.2" stroke-dasharray="3 2"/>
        <polyline points="6,0 16,-14 26,14 36,-14 46,14 56,-6 66,0" stroke="#059669" stroke-width="2.2" fill="none"/>
        <rect x="-4" y="-5" width="8" height="10" fill="#111214"/>
        <rect x="68" y="-5" width="8" height="10" fill="#111214"/>
      </g>
      <!-- Faceted Emerald Crystal Geometry -->
      <g transform="translate(274, 76)">
        <polygon points="0,-40 28,-16 28,16 0,40 -28,16 -28,-16" fill="#10B981" stroke="#111214" stroke-width="1.8"/>
        <polygon points="0,-40 28,-16 15,-10 0,-24" fill="#34D399"/>
        <polygon points="0,40 -28,16 -15,10 0,24" fill="#047857"/>
        <polygon points="0,-24 15,-10 15,10 0,24 -15,10 -15,-10" fill="#6EE7B7" stroke="#111214" stroke-width="1.4"/>
        <line x1="0" y1="-40" x2="0" y2="-24" stroke="#111214" stroke-width="1.2"/>
        <line x1="28" y1="-16" x2="15" y2="-10" stroke="#111214" stroke-width="1.2"/>
        <line x1="28" y1="16" x2="15" y2="10" stroke="#111214" stroke-width="1.2"/>
        <line x1="0" y1="40" x2="0" y2="24" stroke="#111214" stroke-width="1.2"/>
        <line x1="-28" y1="16" x2="-15" y2="10" stroke="#111214" stroke-width="1.2"/>
        <line x1="-28" y1="-16" x2="-15" y2="-10" stroke="#111214" stroke-width="1.2"/>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#991B1B">HOENN.GBA // LINK RELAY</text>
      <text x="230" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#065F46">TRADE / BATTLE [ONLINE]</text>
    </svg>
  `,

  metalslug: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-msl-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FEF3C7"/>
          <stop offset="55%" stop-color="#ECFCCB"/>
          <stop offset="100%" stop-color="#FFEDD5"/>
        </linearGradient>
        <pattern id="grid-msl-${s}" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="#3F6212" stroke-opacity="0.10" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-msl-${s})"/>
      <rect width="360" height="150" fill="url(#grid-msl-${s})"/>
      <!-- SV-001 Tank Orthographic Blueprint -->
      <g transform="translate(52, 42)" stroke="#111214" stroke-width="1.7">
        <!-- Main Cannon Barrel (seated solidly into turret dome) -->
        <rect x="76" y="19" width="62" height="9" fill="#EA580C"/>
        <rect x="135" y="16" width="11" height="15" fill="#111214"/>
        <!-- Commander Hatch (seated flush onto turret dome) -->
        <rect x="47" y="10" width="22" height="9" fill="#3F6212"/>
        <!-- Turret Dome -->
        <path d="M 32 34 C 32 10, 88 10, 92 34 Z" fill="#A3B18A"/>
        <!-- Gun Mantlet Collar -->
        <rect x="83" y="17" width="8" height="13" rx="2" fill="#3F6212"/>
        <!-- Armored Chassis -->
        <path d="M 16 34 L 106 34 L 116 54 L 10 54 Z" fill="#C7D1B3"/>
        <rect x="28" y="40" width="14" height="8" fill="#FACC15"/>
        <text x="48" y="47" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#111214" stroke="none" font-weight="800">SV-001</text>
        <!-- Caterpillar Track Assembly -->
        <rect x="6" y="54" width="114" height="24" rx="12" fill="#475569" stroke-width="2"/>
        <circle cx="22" cy="66" r="7" fill="#CBD5E1" stroke-width="1.5"/>
        <circle cx="44" cy="66" r="7" fill="#CBD5E1" stroke-width="1.5"/>
        <circle cx="66" cy="66" r="7" fill="#CBD5E1" stroke-width="1.5"/>
        <circle cx="88" cy="66" r="7" fill="#CBD5E1" stroke-width="1.5"/>
        <circle cx="106" cy="66" r="6" fill="#EA580C"/>
      </g>
      <!-- Ballistic Shell Trajectory + Crimson Crosshair -->
      <path d="M 202 65 Q 254 28 302 74" stroke="#EA580C" stroke-width="1.8" stroke-dasharray="4 3"/>
      <g transform="translate(304, 76)">
        <circle cx="0" cy="0" r="20" stroke="#DC2626" stroke-width="1.6"/>
        <circle cx="0" cy="0" r="9" fill="#F97316" stroke="#111214" stroke-width="1.3"/>
        <line x1="-26" y1="0" x2="26" y2="0" stroke="#DC2626" stroke-width="1.2"/>
        <line x1="0" y1="-26" x2="0" y2="26" stroke="#DC2626" stroke-width="1.2"/>
      </g>
      <!-- Anthology Indicators -->
      <g transform="translate(18, 12)">
        <rect x="0" y="0" width="22" height="14" fill="#3F6212"/>
        <text x="4" y="10" font-family="JetBrains Mono, monospace" font-size="8" fill="#FEF08A" font-weight="700">M1</text>
        <rect x="26" y="0" width="22" height="14" fill="#EA580C"/>
        <text x="30" y="10" font-family="JetBrains Mono, monospace" font-size="8" fill="#FFFFFF" font-weight="700">M2</text>
        <rect x="52" y="0" width="22" height="14" fill="#DC2626"/>
        <text x="56" y="10" font-family="JetBrains Mono, monospace" font-size="8" fill="#FFFFFF" font-weight="700">M3</text>
      </g>
      <text x="206" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#9A3412">LOCKSTEP 60FPS // FBNEO</text>
    </svg>
  `,

  brotato: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-brt-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#F5F3FF"/>
          <stop offset="55%" stop-color="#EDE9FE"/>
          <stop offset="100%" stop-color="#FEF3C7"/>
        </linearGradient>
        <pattern id="grid-brt-${s}" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="#5B21B6" stroke-opacity="0.10" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-brt-${s})"/>
      <rect width="360" height="150" fill="url(#grid-brt-${s})"/>
      <!-- Arena Tactical Wave Radar -->
      <g transform="translate(180, 76)">
        <circle cx="0" cy="0" r="56" stroke="#7C3AED" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.65"/>
        <circle cx="0" cy="0" r="38" stroke="#6D28D9" stroke-width="1.4"/>
        <circle cx="0" cy="0" r="22" stroke="#8B5CF6" stroke-width="1" opacity="0.55"/>
        <!-- 6 Orbital Weapon Vectors -->
        <line x1="-56" y1="0" x2="-24" y2="0" stroke="#7C3AED" stroke-width="1.4"/>
        <line x1="24" y1="0" x2="56" y2="0" stroke="#7C3AED" stroke-width="1.4"/>
        <line x1="-40" y1="-40" x2="-18" y2="-18" stroke="#7C3AED" stroke-width="1.4"/>
        <line x1="18" y1="18" x2="40" y2="40" stroke="#7C3AED" stroke-width="1.4"/>
        <line x1="40" y1="-40" x2="18" y2="-18" stroke="#7C3AED" stroke-width="1.4"/>
        <line x1="-18" y1="18" x2="-40" y2="40" stroke="#7C3AED" stroke-width="1.4"/>
        <!-- 6 Floating Weapon Pods -->
        <rect x="-44" y="-4" width="12" height="8" fill="#0EA5E9" stroke="#111214" stroke-width="1.4"/>
        <rect x="32" y="-4" width="12" height="8" fill="#0EA5E9" stroke="#111214" stroke-width="1.4"/>
        <rect x="-32" y="-32" width="10" height="10" fill="#F97316" stroke="#111214" stroke-width="1.3"/>
        <rect x="22" y="-32" width="10" height="10" fill="#10B981" stroke="#111214" stroke-width="1.3"/>
        <rect x="-32" y="22" width="10" height="10" fill="#10B981" stroke="#111214" stroke-width="1.3"/>
        <rect x="22" y="22" width="10" height="10" fill="#F97316" stroke="#111214" stroke-width="1.3"/>
        <!-- Central Potato Geometric Core -->
        <ellipse cx="0" cy="0" rx="15" ry="18" fill="#F59E0B" stroke="#111214" stroke-width="2"/>
        <ellipse cx="-4" cy="-6" rx="5" ry="6" fill="#FDE68A" opacity="0.55"/>
        <circle cx="-5" cy="-3" r="2.2" fill="#111214"/>
        <circle cx="5" cy="-3" r="2.2" fill="#111214"/>
        <line x1="-4" y1="5" x2="4" y2="5" stroke="#111214" stroke-width="1.8"/>
      </g>
      <!-- Incoming Alien Swarm Blips -->
      <g>
        <rect x="52" y="42" width="7" height="7" fill="#DB2777" stroke="#111214" stroke-width="1"/>
        <rect x="66" y="54" width="6" height="6" fill="#7C3AED" stroke="#111214" stroke-width="1"/>
        <rect x="44" y="94" width="7" height="7" fill="#DB2777" stroke="#111214" stroke-width="1"/>
        <rect x="294" y="38" width="7" height="7" fill="#7C3AED" stroke="#111214" stroke-width="1"/>
        <rect x="308" y="88" width="7" height="7" fill="#DB2777" stroke="#111214" stroke-width="1"/>
        <rect x="284" y="106" width="6" height="6" fill="#7C3AED" stroke="#111214" stroke-width="1"/>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#5B21B6">WAVE.SECTOR // 6-SLOT ORBIT</text>
      <text x="234" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#92400E">SQUAD 1–4P // STEAM SAVE</text>
    </svg>
  `,

  tetris: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-tet-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#E0F2FE"/>
          <stop offset="55%" stop-color="#F0F9FF"/>
          <stop offset="100%" stop-color="#FCE7F3"/>
        </linearGradient>
        <pattern id="grid-tet-${s}" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="#0369A1" stroke-opacity="0.10" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-tet-${s})"/>
      <rect width="360" height="150" fill="url(#grid-tet-${s})"/>
      <!-- Precision Matrix Playfield Frame -->
      <g transform="translate(108, 16)">
        <rect x="0" y="0" width="144" height="118" fill="#FFFFFF" stroke="#111214" stroke-width="1.8"/>
        <!-- Ghost Drop Projection Lines -->
        <line x1="54" y1="44" x2="54" y2="82" stroke="#9333EA" stroke-width="1.1" stroke-dasharray="3 3" opacity="0.55"/>
        <line x1="90" y1="44" x2="90" y2="82" stroke="#9333EA" stroke-width="1.1" stroke-dasharray="3 3" opacity="0.55"/>
        <!-- Active Falling Purple T-Tetromino -->
        <g fill="#9333EA" stroke="#111214" stroke-width="1.6">
          <rect x="54" y="12" width="18" height="18"/>
          <rect x="36" y="30" width="18" height="18"/>
          <rect x="54" y="30" width="18" height="18"/>
          <rect x="72" y="30" width="18" height="18"/>
        </g>
        <!-- Ghost Outline at Bottom -->
        <g fill="rgba(147,51,234,0.12)" stroke="#9333EA" stroke-width="1.2" stroke-dasharray="3 2">
          <rect x="54" y="64" width="18" height="18"/>
          <rect x="36" y="82" width="18" height="18"/>
          <rect x="54" y="82" width="18" height="18"/>
          <rect x="72" y="82" width="18" height="18"/>
        </g>
        <!-- Stacked Classic Multi-Color Blocks -->
        <g stroke="#111214" stroke-width="1.5">
          <!-- Orange L -->
          <rect x="0" y="100" width="18" height="18" fill="#F97316"/>
          <rect x="18" y="100" width="18" height="18" fill="#F97316"/>
          <rect x="0" y="82" width="18" height="18" fill="#F97316"/>
          <!-- Green S / Blue J -->
          <rect x="36" y="100" width="18" height="18" fill="#2563EB"/>
          <rect x="72" y="100" width="18" height="18" fill="#16A34A"/>
          <rect x="90" y="100" width="18" height="18" fill="#16A34A"/>
          <rect x="108" y="100" width="18" height="18" fill="#E11D48"/>
          <rect x="108" y="82" width="18" height="18" fill="#E11D48"/>
          <!-- Cyan I-Piece -->
          <rect x="126" y="100" width="18" height="18" fill="#06B6D4"/>
          <rect x="126" y="82" width="18" height="18" fill="#06B6D4"/>
          <rect x="126" y="64" width="18" height="18" fill="#06B6D4"/>
          <rect x="126" y="46" width="18" height="18" fill="#06B6D4"/>
        </g>
      </g>
      <!-- Side Hold & Next Readout Boxes -->
      <g transform="translate(26, 26)">
        <rect x="0" y="0" width="58" height="44" stroke="#111214" stroke-width="1.2" fill="#FFFFFF"/>
        <text x="6" y="12" font-family="JetBrains Mono, monospace" font-size="7" font-weight="700" fill="#0369A1">HOLD</text>
        <rect x="14" y="19" width="11" height="11" fill="#E11D48" stroke="#111214" stroke-width="1.2"/>
        <rect x="25" y="19" width="11" height="11" fill="#E11D48" stroke="#111214" stroke-width="1.2"/>
        <rect x="25" y="30" width="11" height="11" fill="#E11D48" stroke="#111214" stroke-width="1.2"/>
        <rect x="36" y="30" width="11" height="11" fill="#E11D48" stroke="#111214" stroke-width="1.2"/>
      </g>
      <g transform="translate(274, 26)">
        <rect x="0" y="0" width="60" height="58" stroke="#111214" stroke-width="1.2" fill="#FFFFFF"/>
        <text x="6" y="12" font-family="JetBrains Mono, monospace" font-size="7" font-weight="700" fill="#0369A1">NEXT</text>
        <rect x="12" y="22" width="36" height="9" fill="#06B6D4" stroke="#111214" stroke-width="1.1"/>
        <rect x="18" y="38" width="12" height="12" fill="#EAB308" stroke="#111214" stroke-width="1.1"/>
        <rect x="30" y="38" width="12" height="12" fill="#EAB308" stroke="#111214" stroke-width="1.1"/>
      </g>
      <text x="26" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#0369A1">MATRIX 10x20 // SRS</text>
      <text x="266" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#BE123C">VS.ONLINE</text>
    </svg>
  `,

  nfsu2: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-nfs-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ECFEFF"/>
          <stop offset="55%" stop-color="#CFFAFE"/>
          <stop offset="100%" stop-color="#F3E8FF"/>
        </linearGradient>
        <pattern id="grid-nfs-${s}" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="#155E75" stroke-opacity="0.11" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-nfs-${s})"/>
      <rect width="360" height="150" fill="url(#grid-nfs-${s})"/>
      <!-- Bayview Street Tuner Coupe -->
      <g transform="translate(26, 46)" stroke="#111214" stroke-width="1.8">
        <!-- Rear-Swept GT Wing (angled back & mounted flush to rear deck) -->
        <line x1="25" y1="31" x2="18" y2="12" stroke="#111214" stroke-width="2"/>
        <line x1="36" y1="29" x2="29" y2="13" stroke="#111214" stroke-width="2"/>
        <polygon points="10,9 35,13 34,16 11,13" fill="#9333EA" stroke="#111214" stroke-width="1.3"/>
        <line x1="10" y1="7" x2="12" y2="16" stroke="#9333EA" stroke-width="2.2"/>
        <!-- Body Silhouette (Nitrous Cyan) -->
        <path d="M 22 50 L 18 32 L 42 26 L 78 10 L 138 10 L 178 28 L 224 34 L 234 48 L 226 54 L 22 54 Z" fill="#06B6D4"/>
        <!-- Tinted Cabin Window -->
        <path d="M 60 26 L 84 14 L 134 14 L 160 26 Z" fill="#3B0764" stroke="#111214" stroke-width="1.4"/>
        <!-- Racing Stripe & Vinyl -->
        <line x1="68" y1="48" x2="168" y2="48" stroke="#FACC15" stroke-width="2.2"/>
        <line x1="22" y1="38" x2="220" y2="38" stroke="#FFFFFF" stroke-dasharray="6 3" stroke-width="1.4" opacity="0.8"/>
        <!-- Front & Rear Alloy Wheels + Red Brake Calipers -->
        <circle cx="56" cy="54" r="16" fill="#1E293B" stroke-width="2.2"/>
        <circle cx="56" cy="54" r="9" fill="#E2E8F0" stroke-width="1.3"/>
        <circle cx="56" cy="54" r="3.5" fill="#EF4444" stroke="none"/>
        <circle cx="186" cy="54" r="16" fill="#1E293B" stroke-width="2.2"/>
        <circle cx="186" cy="54" r="9" fill="#E2E8F0" stroke-width="1.3"/>
        <circle cx="186" cy="54" r="3.5" fill="#EF4444" stroke="none"/>
        <!-- Neon Underglow Strip -->
        <line x1="74" y1="68" x2="168" y2="68" stroke="#EC4899" stroke-width="3.6"/>
      </g>
      <!-- RPM Tachometer Blueprint -->
      <g transform="translate(306, 76)">
        <circle cx="0" cy="0" r="32" fill="#FFFFFF" stroke="#0891B2" stroke-width="1.4" stroke-dasharray="3 2"/>
        <path d="M -24 14 A 27 27 0 1 1 24 14" stroke="#111214" stroke-width="2"/>
        <path d="M 16 -22 A 27 27 0 0 1 24 14" stroke="#EF4444" stroke-width="3.6"/>
        <line x1="0" y1="0" x2="18" y2="-14" stroke="#9333EA" stroke-width="2.4"/>
        <circle cx="0" cy="0" r="4" fill="#06B6D4" stroke="#111214" stroke-width="1.5"/>
        <text x="-16" y="22" font-family="JetBrains Mono, monospace" font-size="7" font-weight="700" fill="#155E75">RPM x1K</text>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#155E75">RECOMP // X86 → C → WASM</text>
      <text x="18" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#7E22CE">PIPELINE: D3D9 → WEBGPU</text>
    </svg>
  `,

  marioparty3: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-mp3-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#DBEAFE"/>
          <stop offset="55%" stop-color="#FEF9C3"/>
          <stop offset="100%" stop-color="#FEE2E2"/>
        </linearGradient>
        <pattern id="grid-mp3-${s}" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="#1D4ED8" stroke-opacity="0.10" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-mp3-${s})"/>
      <rect width="360" height="150" fill="url(#grid-mp3-${s})"/>
      <!-- Board Space Path Spline & Authentic Colored Spaces -->
      <path d="M 28 112 C 62 112, 74 96, 110 96 C 148 96, 166 116, 206 112 C 244 108, 258 84, 294 84 L 332 84"
            stroke="#1D4ED8" stroke-width="1.6" stroke-dasharray="4 3" opacity="0.65"/>
      <g stroke="#111214" stroke-width="1.5">
        <circle cx="42" cy="111" r="6" fill="#2563EB"/>
        <circle cx="78" cy="102" r="6" fill="#2563EB"/>
        <circle cx="116" cy="96" r="6" fill="#16A34A"/>
        <circle cx="158" cy="106" r="6" fill="#2563EB"/>
        <circle cx="204" cy="112" r="6" fill="#DC2626"/>
        <circle cx="250" cy="96" r="6" fill="#2563EB"/>
        <circle cx="294" cy="84" r="8" fill="#FACC15"/>
      </g>
      <!-- Isometric Dice Block -->
      <g transform="translate(106, 54)" stroke="#111214" stroke-width="1.7">
        <polygon points="0,-28 28,-14 28,16 0,30 -28,16 -28,-14" fill="#FFFFFF"/>
        <polygon points="0,-28 28,-14 0,0 -28,-14" fill="#FACC15"/>
        <polygon points="-28,-14 0,0 0,30 -28,16" fill="#EFF6FF"/>
        <polygon points="28,-14 0,0 0,30 28,16" fill="#FEE2E2"/>
        <text x="-6" y="-10" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="800" fill="#111214" stroke="none">10</text>
        <text x="-18" y="14" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="800" fill="#1D4ED8" stroke="none">6</text>
        <text x="10" y="14" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="800" fill="#DC2626" stroke="none">3</text>
        <path d="M -38 -18 L -38 -26 L -30 -26" stroke="#2563EB" stroke-width="1.4"/>
        <path d="M 38 -18 L 38 -26 L 30 -26" stroke="#DC2626" stroke-width="1.4"/>
      </g>
      <!-- Millennium Star -->
      <g transform="translate(248, 52)">
        <circle cx="0" cy="0" r="32" stroke="#EAB308" stroke-width="1.3" stroke-dasharray="3 3"/>
        <polygon points="0,-26 7,-8 26,-8 11,4 16,22 0,11 -16,22 -11,4 -26,-8 -7,-8"
                 fill="#FACC15" stroke="#111214" stroke-width="1.8" stroke-linejoin="miter"/>
        <circle cx="-4" cy="-2" r="1.9" fill="#111214"/>
        <circle cx="4" cy="-2" r="1.9" fill="#111214"/>
        <line x1="-40" y1="0" x2="-28" y2="0" stroke="#DC2626" stroke-width="1.3"/>
        <line x1="28" y1="0" x2="40" y2="0" stroke="#2563EB" stroke-width="1.3"/>
      </g>
      <!-- 4P Classic N64 Color Slot Indicators -->
      <g transform="translate(18, 12)">
        <rect x="0" y="0" width="18" height="13" fill="#DC2626"/>
        <text x="3.5" y="9.5" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#FFFFFF" font-weight="700">P1</text>
        <rect x="22" y="0" width="18" height="13" fill="#2563EB"/>
        <text x="25.5" y="9.5" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#FFFFFF" font-weight="700">P2</text>
        <rect x="44" y="0" width="18" height="13" fill="#16A34A"/>
        <text x="47.5" y="9.5" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#FFFFFF" font-weight="700">P3</text>
        <rect x="66" y="0" width="18" height="13" fill="#EAB308"/>
        <text x="69.5" y="9.5" font-family="JetBrains Mono, monospace" font-size="7.5" fill="#111214" font-weight="800">P4</text>
      </g>
      <text x="18" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#1D4ED8">N64 // 4P STAR LOCKSTEP</text>
      <text x="226" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#B91C1C">MUPEN64 [WEBGL2]</text>
    </svg>
  `,

  monopoly: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg-mnp-${s}" x1="0" y1="0" x2="360" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#D1FAE5"/>
          <stop offset="65%" stop-color="#ECFDF5"/>
          <stop offset="100%" stop-color="#FEE2E2"/>
        </linearGradient>
        <pattern id="grid-mnp-${s}" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" stroke="#065F46" stroke-opacity="0.10" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#bg-mnp-${s})"/>
      <rect width="360" height="150" fill="url(#grid-mnp-${s})"/>
      <!-- Classic Board Corner Grid -->
      <g transform="translate(30, 26)" stroke="#111214" stroke-width="1.5">
        <rect x="0" y="0" width="154" height="94" fill="#D1FAE5"/>
        <!-- Corner GO Cell -->
        <rect x="0" y="56" width="38" height="38" fill="#FFFFFF"/>
        <text x="6" y="79" font-family="JetBrains Mono, monospace" font-size="11" font-weight="800" fill="#DC2626" stroke="none">GO↗</text>
        <!-- Property Spaces Along Bottom (Classic Color Bands) -->
        <rect x="38" y="56" width="29" height="38" fill="#FFFFFF"/>
        <rect x="38" y="56" width="29" height="9" fill="#92400E"/>
        <rect x="67" y="56" width="29" height="38" fill="#FFFFFF"/>
        <rect x="67" y="56" width="29" height="9" fill="#38BDF8"/>
        <rect x="96" y="56" width="29" height="38" fill="#FFFFFF"/>
        <rect x="96" y="56" width="29" height="9" fill="#DB2777"/>
        <rect x="125" y="56" width="29" height="38" fill="#FFFFFF"/>
        <rect x="125" y="56" width="29" height="9" fill="#F97316"/>
        <!-- Left Rail Spaces -->
        <rect x="0" y="28" width="38" height="28" fill="#FFFFFF"/>
        <rect x="30" y="28" width="8" height="28" fill="#1D4ED8"/>
        <rect x="0" y="0" width="38" height="28" fill="#FFFFFF"/>
        <rect x="30" y="0" width="8" height="28" fill="#16A34A"/>
        <!-- Center Title Deed Blueprint Box -->
        <rect x="52" y="10" width="88" height="34" fill="#FFFFFF" stroke="#065F46" stroke-dasharray="3 2" stroke-width="1.1"/>
        <text x="64" y="25" font-family="JetBrains Mono, monospace" font-size="8" font-weight="800" fill="#1D4ED8" stroke="none">TITLE DEED</text>
        <text x="64" y="37" font-family="JetBrains Mono, monospace" font-size="7.5" font-weight="700" fill="#059669" stroke="none">$200 PASS GO</text>
      </g>
      <!-- Classic Red Hotel + Twin Dice -->
      <g transform="translate(214, 34)" stroke="#111214" stroke-width="1.6">
        <polygon points="24,14 48,0 72,14 72,48 24,48" fill="#DC2626"/>
        <rect x="34" y="22" width="10" height="10" fill="#FEF08A"/>
        <rect x="52" y="22" width="10" height="10" fill="#FEF08A"/>
        <rect x="43" y="36" width="10" height="12" fill="#111214"/>
        <!-- Twin Dice -->
        <rect x="8" y="60" width="24" height="24" fill="#FFFFFF"/>
        <circle cx="15" cy="67" r="2.1" fill="#DC2626" stroke="none"/>
        <circle cx="25" cy="77" r="2.1" fill="#DC2626" stroke="none"/>
        <rect x="42" y="60" width="24" height="24" fill="#FFFFFF"/>
        <circle cx="49" cy="67" r="2.1" fill="#111214" stroke="none"/>
        <circle cx="54" cy="72" r="2.1" fill="#111214" stroke="none"/>
        <circle cx="59" cy="77" r="2.1" fill="#111214" stroke="none"/>
        <rect x="76" y="60" width="44" height="24" fill="#0D9488" stroke-width="1.4"/>
        <text x="86" y="75" font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="800" fill="#FFFFFF" stroke="none">2D6</text>
      </g>
      <text x="18" y="18" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#065F46">BOARD // PROPERTY TRADING</text>
      <text x="220" y="138" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="#B91C1C">LIVE // ROOM AUCTIONS</text>
    </svg>
  `,

  fallback: (game, s) => `
    <svg viewBox="0 0 360 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="schematic-svg" aria-hidden="true">
      <defs>
        <pattern id="grid-fb-${game.serial || "00"}-${s}" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" stroke="currentColor" stroke-opacity="0.09" stroke-width="0.7"/>
        </pattern>
      </defs>
      <rect width="360" height="150" fill="url(#grid-fb-${game.serial || "00"}-${s})"/>
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

window.getGameSchematic = function (game, scope = "card") {
  const renderer = window.GAME_SCHEMATICS[game.id];
  return renderer ? renderer(game, scope) : window.GAME_SCHEMATICS.fallback(game, scope);
};
