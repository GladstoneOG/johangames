/**
 * ============================================================================
 * ENDPORT // TACTILE INDUSTRIAL UI AUDIO ENGINE (Zero External Files)
 * ============================================================================
 * Synthesizes ultra-short mechanical clicks, relay ticks, and terminal chimes
 * using the Web Audio API. Off by default; toggleable via the top rail.
 * ============================================================================
 */

(function () {
  const STORAGE_KEY = "endport_audio_enabled";
  let ctx = null;
  let enabled = false;

  try {
    enabled = localStorage.getItem(STORAGE_KEY) === "1";
  } catch (_) {
    enabled = false;
  }

  function ensureContext() {
    if (!enabled) return null;
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      ctx = new AudioCtx();
    }
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function playTone({ freqStart, freqEnd, duration, gainPeak, type = "triangle", delay = 0 }) {
    const audio = ensureContext();
    if (!audio) return;

    const now = audio.currentTime + delay;
    const osc = audio.createOscillator();
    const gain = audio.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freqStart, now);
    if (freqEnd && freqEnd !== freqStart) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), now + duration);
    }

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainPeak, now + Math.min(0.004, duration * 0.25));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(audio.destination);

    osc.start(now);
    osc.stop(now + duration + 0.01);
  }

  function playNoiseClick(duration = 0.018, gainPeak = 0.035, centerFreq = 2400) {
    const audio = ensureContext();
    if (!audio) return;

    const now = audio.currentTime;
    const bufferSize = Math.max(1, Math.floor(audio.sampleRate * duration));
    const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
    }

    const noise = audio.createBufferSource();
    noise.buffer = buffer;

    const filter = audio.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(centerFreq, now);
    filter.Q.setValueAtTime(2.2, now);

    const gain = audio.createGain();
    gain.gain.setValueAtTime(gainPeak, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audio.destination);

    noise.start(now);
    noise.stop(now + duration);
  }

  const EndportAudio = {
    isEnabled() {
      return enabled;
    },

    toggle() {
      enabled = !enabled;
      try {
        localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
      } catch (_) {}

      if (enabled) {
        ensureContext();
        this.click();
        playTone({ freqStart: 880, freqEnd: 1175, duration: 0.06, gainPeak: 0.04, type: "sine", delay: 0.03 });
      }
      return enabled;
    },

    tick() {
      if (!enabled) return;
      playNoiseClick(0.012, 0.022, 3100);
      playTone({ freqStart: 1450, freqEnd: 820, duration: 0.016, gainPeak: 0.014, type: "sine" });
    },

    click() {
      if (!enabled) return;
      playNoiseClick(0.02, 0.045, 1950);
      playTone({ freqStart: 460, freqEnd: 190, duration: 0.032, gainPeak: 0.04, type: "triangle" });
    },

    copy() {
      if (!enabled) return;
      playTone({ freqStart: 784, freqEnd: 784, duration: 0.045, gainPeak: 0.035, type: "triangle", delay: 0 });
      playTone({ freqStart: 1174, freqEnd: 1174, duration: 0.07, gainPeak: 0.038, type: "triangle", delay: 0.05 });
    },

    launch() {
      if (!enabled) return;
      playNoiseClick(0.022, 0.05, 1800);
      playTone({ freqStart: 523.25, freqEnd: 523.25, duration: 0.075, gainPeak: 0.045, type: "triangle", delay: 0 });
      playTone({ freqStart: 783.99, freqEnd: 1046.5, duration: 0.14, gainPeak: 0.045, type: "sine", delay: 0.055 });
    },

    locked() {
      if (!enabled) return;
      playTone({ freqStart: 165, freqEnd: 120, duration: 0.055, gainPeak: 0.05, type: "sawtooth", delay: 0 });
      playTone({ freqStart: 140, freqEnd: 105, duration: 0.07, gainPeak: 0.04, type: "sawtooth", delay: 0.07 });
    },
  };

  window.EndportAudio = EndportAudio;
})();
