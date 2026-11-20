/**
 * ============================================================================
 * ENDPORT // PORTAL CONTROLLER
 * ============================================================================
 * Drives dynamic rendering, category filtering, hover/click/keyboard spec
 * inspection, copy-link clipboard actions, mobile drawer, and audio feedback.
 * ============================================================================
 */

(function () {
  const games = Array.isArray(window.GAMES) ? window.GAMES : [];
  const meta = window.PORTAL_META || {};
  const audio = window.EndportAudio;

  // DOM References
  const cardsGrid = document.getElementById("cardsGrid");
  const filterGroup = document.getElementById("filterGroup");
  const inspectorColumn = document.getElementById("inspectorColumn");
  const inspectorPanel = document.getElementById("inspectorPanel");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const visibleCountReadout = document.getElementById("visibleCountReadout");
  const audioToggle = document.getElementById("audioToggle");
  const audioToggleLabel = document.getElementById("audioToggleLabel");
  const railClock = document.getElementById("railClock");

  // Application State
  let activeFilter = "all";
  let selectedId = games.length ? games[0].id : null;
  let lastHoveredId = null;

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function stripProtocol(url) {
    return String(url || "").replace(/^https?:\/\//i, "").replace(/\/$/, "");
  }

  function getThemeStyleAttr(game) {
    const t = game && game.theme ? game.theme : {};
    const primary = t.primary || "#FFE600";
    const secondary = t.secondary || "#111214";
    const ink = t.ink || "#111214";
    const tint = t.tint || "rgba(255, 230, 0, 0.08)";
    return `--game-primary:${primary};--game-secondary:${secondary};--game-ink:${ink};--game-tint:${tint};`;
  }

  function applyThemeVars(el, game) {
    if (!el) return;
    const t = game && game.theme ? game.theme : {};
    el.style.setProperty("--game-primary", t.primary || "#FFE600");
    el.style.setProperty("--game-secondary", t.secondary || "#111214");
    el.style.setProperty("--game-ink", t.ink || "#111214");
    el.style.setProperty("--game-tint", t.tint || "rgba(255, 230, 0, 0.08)");
  }

  function isMobileViewport() {
    return window.matchMedia("(max-width: 1120px)").matches;
  }

  function getFilteredGames() {
    switch (activeFilter) {
      case "coop":
        return games.filter((g) => g.status === "live" && g.category === "coop");
      case "versus":
        return games.filter((g) => g.status === "live" && g.category === "versus");
      case "coming-soon":
        return games.filter((g) => g.status === "coming-soon");
      default:
        return games;
    }
  }

  // Initialize Static Meta & Telemetry Counts
  function initHeaderMeta() {
    const liveCount = games.filter((g) => g.status === "live").length;
    const stagedCount = games.filter((g) => g.status === "coming-soon").length;

    const elBrand = document.getElementById("railBrand");
    const elBrandMark = document.getElementById("brandMark");
    const elSub = document.getElementById("railSubBrand");
    const elNode = document.getElementById("railNode");
    const elDesc = document.getElementById("mastheadDesc");
    const elRailStatus = document.getElementById("railStatusCount");
    const elMetricLive = document.getElementById("metricLive");
    const elMetricStaged = document.getElementById("metricStaged");
    const elIndexRange = document.getElementById("mastheadIndexRange");

    if (elIndexRange) {
      elIndexRange.textContent = `INDEX 01–${pad2(games.length)}`;
    }

    if (elBrand && meta.brand) {
      elBrand.textContent = meta.brand;
      elBrand.setAttribute("data-text", meta.brand);
    }
    if (elBrandMark && meta.brandIcon) {
      elBrandMark.textContent = meta.brandIcon;
      elBrandMark.setAttribute("data-text", meta.brandIcon);
    }
    if (elSub && meta.subBrand) elSub.textContent = meta.subBrand;
    if (elNode && meta.node) elNode.textContent = meta.node;
    if (elDesc && meta.tagline) elDesc.textContent = meta.tagline;
    if (elRailStatus) {
      elRailStatus.textContent =
        stagedCount > 0
          ? `${pad2(liveCount)} ACTIVE · ${pad2(stagedCount)} STAGED`
          : `${pad2(liveCount)} ACTIVE · ALL ONLINE`;
    }
    if (elMetricLive) elMetricLive.textContent = pad2(liveCount);
    if (elMetricStaged) elMetricStaged.textContent = pad2(stagedCount);

    // Update audio toggle initial UI
    syncAudioButton();
  }

  // Periodic Glitch Transition: GLADSTONEOG <-> JOHANSANS999
  function startBrandGlitchCycle() {
    const primaryBrand = meta.brand || "GLADSTONEOG";
    const altBrand = meta.altBrand || "JOHANSANS999";
    const primaryIcon = meta.brandIcon || "GO";
    const altIcon = meta.altBrandIcon || "J9";

    const elBrand = document.getElementById("railBrand");
    const elBrandMark = document.getElementById("brandMark");
    const elFooter = document.getElementById("footerBrand");
    const elFavicon = document.getElementById("dynamicFavicon");

    if (!elBrand || !elBrandMark) return;

    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#_-";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let showingAlt = false;

    function updateFavicon(initials) {
      if (!elFavicon) return;
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><polygon points='0,0 24,0 32,8 32,32 0,32' fill='%23111214'/><text x='4' y='22' font-family='monospace' font-size='15' font-weight='800' letter-spacing='-1' fill='%23FFE600'>${initials}</text></svg>`;
      elFavicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    }

    function scrambleTo(el, targetText, durationMs = 360) {
      if (!el) return;
      if (reducedMotion) {
        el.textContent = targetText;
        el.setAttribute("data-text", targetText);
        return;
      }

      el.classList.remove("is-glitching");
      void el.offsetWidth;
      el.classList.add("is-glitching");

      const totalFrames = 10;
      const frameMs = Math.max(24, Math.floor(durationMs / totalFrames));
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const resolvedCount = Math.floor(progress * targetText.length);

        let out = "";
        for (let i = 0; i < targetText.length; i++) {
          if (i < resolvedCount || targetText[i] === " " || targetText[i] === "/") {
            out += targetText[i];
          } else {
            out += glyphs[Math.floor(Math.random() * glyphs.length)];
          }
        }

        el.textContent = out;
        el.setAttribute("data-text", out);

        if (frame >= totalFrames) {
          clearInterval(timer);
          el.textContent = targetText;
          el.setAttribute("data-text", targetText);
          setTimeout(() => el.classList.remove("is-glitching"), 120);
        }
      }, frameMs);
    }

    function runGlitchSwap() {
      showingAlt = !showingAlt;
      const nextBrand = showingAlt ? altBrand : primaryBrand;
      const nextIcon = showingAlt ? altIcon : primaryIcon;
      const nextFooter = `${nextBrand} // MANIFEST`;

      scrambleTo(elBrand, nextBrand, 380);
      scrambleTo(elBrandMark, nextIcon, 320);
      if (elFooter) scrambleTo(elFooter, nextFooter, 380);

      document.title = `${nextBrand} // Multiplayer Web Games Archive`;
      updateFavicon(nextIcon);
    }

    setInterval(runGlitchSwap, 4600);
  }

  function syncAudioButton() {
    const on = audio && audio.isEnabled();
    audioToggle.setAttribute("aria-pressed", on ? "true" : "false");
    audioToggleLabel.textContent = on ? "SFX [ON]" : "SFX [OFF]";
  }

  // Live UTC Clock in Top Rail
  function startClock() {
    function update() {
      const now = new Date();
      const hh = pad2(now.getUTCHours());
      const mm = pad2(now.getUTCMinutes());
      const ss = pad2(now.getUTCSeconds());
      if (railClock) railClock.textContent = `UTC ${hh}:${mm}:${ss}`;
    }
    update();
    setInterval(update, 1000);
  }

  // Render Category Filter Tabs
  function renderFilters() {
    const counts = {
      all: games.length,
      coop: games.filter((g) => g.status === "live" && g.category === "coop").length,
      versus: games.filter((g) => g.status === "live" && g.category === "versus").length,
      "coming-soon": games.filter((g) => g.status === "coming-soon").length,
    };

    const defs = [
      { id: "all", label: "All Units" },
      { id: "coop", label: "Co-op" },
      { id: "versus", label: "Versus" },
    ];
    if (counts["coming-soon"] > 0) {
      defs.push({ id: "coming-soon", label: "Coming Soon" });
    }

    filterGroup.innerHTML = defs
      .map(
        (tab) => `
        <button
          type="button"
          class="filter-btn ${activeFilter === tab.id ? "is-active" : ""}"
          role="tab"
          aria-selected="${activeFilter === tab.id ? "true" : "false"}"
          data-filter="${tab.id}"
        >
          <span>${tab.label}</span>
          <span class="filter-count">${pad2(counts[tab.id])}</span>
        </button>
      `
      )
      .join("");

    filterGroup.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextFilter = btn.dataset.filter;
        if (nextFilter === activeFilter) return;
        activeFilter = nextFilter;
        audio?.click();

        const visible = getFilteredGames();
        if (visible.length && !visible.some((g) => g.id === selectedId)) {
          selectedId = visible[0].id;
        }
        renderFilters();
        renderCards();
        renderInspector(false);
      });
    });
  }

  // Render Game Poster Cards
  function renderCards() {
    const visible = getFilteredGames();

    if (visibleCountReadout) {
      visibleCountReadout.textContent = `SHOWING ${pad2(visible.length)} / ${pad2(games.length)} UNITS`;
    }

    if (!visible.length) {
      cardsGrid.innerHTML = `
        <div class="empty-state">
          NO UNITS MATCH FILTER [${escapeHtml(activeFilter.toUpperCase())}] // SELECT ANOTHER CATEGORY
        </div>
      `;
      return;
    }

    cardsGrid.innerHTML = visible
      .map((game, idx) => {
        const isSelected = game.id === selectedId;
        const isComingSoon = game.status === "coming-soon";
        const schematicMarkup = window.getGameSchematic ? window.getGameSchematic(game, "card") : "";

        return `
          <article
            class="game-card ${isSelected ? "is-selected" : ""} ${isComingSoon ? "is-coming-soon" : ""}"
            data-id="${escapeHtml(game.id)}"
            tabindex="0"
            role="button"
            aria-pressed="${isSelected ? "true" : "false"}"
            aria-label="${escapeHtml(game.title)} — ${escapeHtml(game.modeLabel)}"
            style="${getThemeStyleAttr(game)}animation-delay: ${Math.min(idx * 45, 280)}ms"
          >
            ${isComingSoon ? `<div class="hazard-bar" aria-hidden="true"></div>` : ""}

            <div class="card-header">
              <div class="card-index">
                <span class="card-serial">${escapeHtml(game.serial)}</span>
                <span class="card-code">${escapeHtml(game.code)}</span>
              </div>
              <div class="card-status">
                <span class="status-dot" aria-hidden="true"></span>
                <span>${isComingSoon ? "STAGED // SOON" : "ONLINE"}</span>
              </div>
            </div>

            <div class="card-schematic">
              ${schematicMarkup}
              <span class="corner-tick tl" aria-hidden="true"></span>
              <span class="corner-tick tr" aria-hidden="true"></span>
              <span class="corner-tick bl" aria-hidden="true"></span>
              <span class="corner-tick br" aria-hidden="true"></span>
              ${
                isComingSoon
                  ? `
                    <div class="redacted-overlay">
                      <span class="classified-stamp">CLASSIFIED // COMING SOON</span>
                    </div>
                  `
                  : ""
              }
            </div>

            <div class="card-body">
              <div class="card-title-row">
                <h2 class="card-title">${escapeHtml(game.title)}</h2>
                <span class="card-year">${escapeHtml(game.year)}</span>
              </div>
              <p class="card-subtitle">${escapeHtml(game.subtitle)}</p>

              <div class="card-tags">
                <span class="spec-tag ${isComingSoon ? "" : "tag-accent"}">${escapeHtml(game.players)}</span>
                <span class="spec-tag">${escapeHtml(game.modeLabel)}</span>
              </div>
            </div>

            <div class="card-footer">
              <span class="card-inspect-hint">
                ${isSelected ? "● INSPECTING" : "VIEW SPECS →"}
              </span>
              ${
                isComingSoon
                  ? `<span class="card-launch-link is-locked" data-locked="true">LOCKED ⊘</span>`
                  : `<a
                      class="card-launch-link"
                      href="${escapeHtml(game.url)}"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-launch="true"
                    >LAUNCH ↗</a>`
              }
            </div>
          </article>
        `;
      })
      .join("");

    // Bind card events
    cardsGrid.querySelectorAll(".game-card").forEach((cardEl) => {
      const id = cardEl.dataset.id;

      // Desktop hover updates Spec Inspector smoothly
      cardEl.addEventListener("mouseenter", () => {
        if (isMobileViewport()) return;
        if (lastHoveredId !== id) {
          lastHoveredId = id;
          audio?.tick();
        }
        if (selectedId !== id) {
          selectGame(id, { animateInspector: true, openDrawer: false });
        }
      });

      // Click card to lock selection (and open drawer on mobile)
      cardEl.addEventListener("click", (e) => {
        if (e.target.closest("[data-launch]")) {
          audio?.launch();
          return;
        }
        if (e.target.closest("[data-locked]")) {
          audio?.locked();
        } else {
          audio?.click();
        }
        selectGame(id, { animateInspector: true, openDrawer: isMobileViewport() });
      });

      // Keyboard focus selection
      cardEl.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          const game = games.find((g) => g.id === id);
          if (e.key === "Enter" && game && game.status === "live") {
            audio?.launch();
            window.open(game.url, "_blank", "noopener,noreferrer");
          } else {
            if (game && game.status === "coming-soon") audio?.locked();
            else audio?.click();
            selectGame(id, { animateInspector: true, openDrawer: isMobileViewport() });
          }
        }
      });
    });
  }

  function selectGame(id, { animateInspector = true, openDrawer = false } = {}) {
    selectedId = id;

    // Update active visual class without rebuilding the entire grid DOM
    cardsGrid.querySelectorAll(".game-card").forEach((card) => {
      const match = card.dataset.id === id;
      card.classList.toggle("is-selected", match);
      card.setAttribute("aria-pressed", match ? "true" : "false");
      const hint = card.querySelector(".card-inspect-hint");
      if (hint) {
        hint.textContent = match ? "● INSPECTING" : "VIEW SPECS →";
      }
    });

    renderInspector(animateInspector);

    if (openDrawer) {
      openMobileDrawer();
    }
  }

  // Render Interactive Spec Inspector Panel
  function renderInspector(animate = true) {
    const game = games.find((g) => g.id === selectedId) || games[0];
    if (!game) return;

    const isComingSoon = game.status === "coming-soon";
    const schematicMarkup = window.getGameSchematic ? window.getGameSchematic(game, "inspector") : "";
    const hostDisplay = stripProtocol(game.url);

    applyThemeVars(inspectorPanel, game);

    inspectorPanel.innerHTML = `
      <div class="inspector-topbar">
        <span>SPEC INSPECTOR // <span class="inspector-topbar-unit">UNIT ${escapeHtml(game.serial)}</span></span>
        <button type="button" class="inspector-close-btn" id="inspectorCloseBtn">CLOSE [ESC]</button>
      </div>

      ${isComingSoon ? `<div class="inspector-hazard" aria-hidden="true"></div>` : ""}

      <div class="inspector-schematic-wrap">
        ${schematicMarkup}
        ${
          isComingSoon
            ? `
              <div class="redacted-overlay">
                <span class="classified-stamp">DEPLOYMENT PENDING</span>
              </div>
            `
            : ""
        }
      </div>

      <div class="inspector-body">
        <div class="inspector-heading-block">
          <div class="inspector-meta-row">
            <span class="inspector-mode-pill ${isComingSoon ? "is-staged" : ""}">
              ${escapeHtml(game.modeLabel)}
            </span>
            <span>${escapeHtml(game.code)} // ${escapeHtml(game.year)}</span>
          </div>
          <h2 class="inspector-title">${escapeHtml(game.title)}</h2>
          <p class="inspector-summary">${escapeHtml(game.summary)}</p>
        </div>

        <div class="spec-matrix">
          <div class="spec-cell">
            <span class="spec-k">MULTIPLAYER</span>
            <span class="spec-v">${escapeHtml(game.players)}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-k">STATUS</span>
            <span class="spec-v">${isComingSoon ? "STAGED / DEV" : "LIVE ONLINE"}</span>
          </div>
          <div class="spec-cell is-full">
            <span class="spec-k">RUNTIME ENGINE</span>
            <span class="spec-v">${escapeHtml(game.engine)}</span>
          </div>
          <div class="spec-cell is-full">
            <span class="spec-k">NETWORK LAYER</span>
            <span class="spec-v">${escapeHtml(game.network)}</span>
          </div>
        </div>

        <div>
          <h3 class="inspector-section-label">ENGINEERING BRIEF</h3>
          <ul class="highlights-list">
            ${(game.highlights || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>

        <div>
          <h3 class="inspector-section-label">PRIMARY CONTROLS</h3>
          <div class="controls-grid">
            ${(game.controls || [])
              .map(
                (ctrl) => `
                <div class="control-item">
                  <kbd class="keycap">${escapeHtml(ctrl.keys)}</kbd>
                  <span class="control-action">${escapeHtml(ctrl.action)}</span>
                </div>
              `
              )
              .join("")}
          </div>
        </div>

        <div>
          <h3 class="inspector-section-label">${isComingSoon ? "STAGED ENDPOINT" : "WORKER ENDPOINT"}</h3>
          <div class="endpoint-box">
            <span class="endpoint-url" title="${escapeHtml(game.url)}">${escapeHtml(hostDisplay)}</span>
            <button type="button" class="copy-btn" id="copyEndpointBtn">COPY</button>
          </div>
        </div>

        ${
          isComingSoon
            ? `
              <button type="button" class="launch-cta is-disabled" id="lockedCtaBtn" aria-disabled="true">
                <span>DEPLOYMENT PENDING</span>
                <span class="launch-cta-arrow">LOCKED ⊘</span>
              </button>
              <p class="staged-note">
                UNIT ${escapeHtml(game.serial)} (${escapeHtml(game.code)}) is currently under construction &amp; multiplayer staging. Flip <code>status: "live"</code> in <code>games.js</code> once ready.
              </p>
            `
            : `
              <a
                href="${escapeHtml(game.url)}"
                target="_blank"
                rel="noopener noreferrer"
                class="launch-cta"
                id="inspectorLaunchBtn"
              >
                <span>LAUNCH ${escapeHtml(game.title)}</span>
                <span class="launch-cta-arrow">DEPLOY ↗</span>
              </a>
            `
        }
      </div>
    `;

    if (animate) {
      inspectorPanel.classList.remove("is-updating");
      void inspectorPanel.offsetWidth;
      inspectorPanel.classList.add("is-updating");
    }

    // Bind Inspector internal buttons
    const closeBtn = document.getElementById("inspectorCloseBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        audio?.click();
        closeMobileDrawer();
      });
    }

    const copyBtn = document.getElementById("copyEndpointBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(game.url).catch(() => {});
        }
        audio?.copy();
        copyBtn.textContent = "COPIED ✓";
        copyBtn.classList.add("is-copied");
        setTimeout(() => {
          copyBtn.textContent = "COPY";
          copyBtn.classList.remove("is-copied");
        }, 1400);
      });
    }

    const launchBtn = document.getElementById("inspectorLaunchBtn");
    if (launchBtn) {
      launchBtn.addEventListener("click", () => {
        audio?.launch();
      });
    }

    const lockedBtn = document.getElementById("lockedCtaBtn");
    if (lockedBtn) {
      lockedBtn.addEventListener("click", () => {
        audio?.locked();
      });
    }
  }

  // Mobile Drawer Controls
  function openMobileDrawer() {
    inspectorColumn.classList.add("is-drawer-open");
    drawerBackdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileDrawer() {
    inspectorColumn.classList.remove("is-drawer-open");
    drawerBackdrop.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  drawerBackdrop.addEventListener("click", () => {
    audio?.click();
    closeMobileDrawer();
  });

  // Audio Toggle
  audioToggle.addEventListener("click", () => {
    audio?.toggle();
    syncAudioButton();
  });

  // Global Keyboard Navigation (↑ ↓ ← → to cycle units, Enter to launch, Esc to close mobile drawer)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileDrawer();
      return;
    }

    // Ignore arrow keys if user is focused on a filter button or link
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    const visible = getFilteredGames();
    if (!visible.length) return;

    const currentIdx = Math.max(0, visible.findIndex((g) => g.id === selectedId));

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = visible[(currentIdx + 1) % visible.length];
      audio?.tick();
      selectGame(next.id, { animateInspector: true, openDrawer: false });
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = visible[(currentIdx - 1 + visible.length) % visible.length];
      audio?.tick();
      selectGame(prev.id, { animateInspector: true, openDrawer: false });
    } else if (e.key === "Enter" && tag === "BODY") {
      const current = visible[currentIdx];
      if (!current) return;
      if (current.status === "live") {
        audio?.launch();
        window.open(current.url, "_blank", "noopener,noreferrer");
      } else {
        audio?.locked();
      }
    }
  });

  // Bootstrap Portal
  initHeaderMeta();
  startBrandGlitchCycle();
  startClock();
  renderFilters();
  renderCards();
  renderInspector(false);
})();
