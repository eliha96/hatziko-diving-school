(() => {
  // js/features/animations.js
  function initBubbles() {
    const container = document.getElementById("bubbles");
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < 25; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      const size = Math.random() * 25 + 8;
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";
      bubble.style.left = Math.random() * 100 + "%";
      bubble.style.animationDelay = Math.random() * 8 + "s";
      bubble.style.animationDuration = Math.random() * 6 + 6 + "s";
      container.appendChild(bubble);
    }
  }

  // js/coming-soon/countdown.js
  var countdownTargetDate = null;
  var timerInterval = null;
  var currentTickSpeed = 1e3;
  var speedBoostClicks = 0;
  function getFridayTargetTimestamp() {
    return (/* @__PURE__ */ new Date("2026-10-09T10:00:00+03:00")).getTime();
  }
  function initCountdown() {
    const targetMs = getFridayTargetTimestamp();
    localStorage.setItem("hatziko_cs_target_date", targetMs.toString());
    countdownTargetDate = targetMs;
    startTimerInterval(1e3);
  }
  function startTimerInterval(msSpeed) {
    if (timerInterval) clearInterval(timerInterval);
    currentTickSpeed = msSpeed;
    updateCountdownDisplay();
    timerInterval = setInterval(updateCountdownDisplay, currentTickSpeed);
  }
  function updateCountdownDisplay() {
    const now = Date.now();
    let diff = countdownTargetDate - now;
    if (speedBoostClicks === 1) {
      countdownTargetDate -= 4e3;
      diff = countdownTargetDate - now;
    } else if (speedBoostClicks === 2) {
      countdownTargetDate -= 2e4;
      diff = countdownTargetDate - now;
    }
    if (diff <= 0) {
      diff = 0;
    }
    const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    const hours = Math.floor(diff % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
    const mins = Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60));
    const secs = Math.floor(diff % (1e3 * 60) / 1e3);
    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");
    if (daysEl) daysEl.innerText = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, "0");
    if (minsEl) minsEl.innerText = String(mins).padStart(2, "0");
    if (secsEl) secsEl.innerText = String(secs).padStart(2, "0");
  }
  function initSpeedUpButton() {
    const btn = document.getElementById("btn-speed-up");
    const card = document.getElementById("countdown-card");
    const warnBadge = document.getElementById("system-warning-badge");
    if (!btn) return;
    btn.addEventListener("click", () => {
      speedBoostClicks++;
      if (speedBoostClicks === 1) {
        startTimerInterval(200);
        card.className = "cs-countdown-card speed-boost-1";
        if (warnBadge) warnBadge.classList.add("hidden");
      } else if (speedBoostClicks === 2) {
        startTimerInterval(40);
        card.className = "cs-countdown-card speed-boost-2 glitch-shake";
        document.body.classList.add("screen-rumble");
        if (warnBadge) {
          warnBadge.innerText = "\u26A0\uFE0F WARNING: SYSTEM OVERLOAD - CORE TEMPERATURE CRITICAL";
          warnBadge.classList.remove("hidden");
        }
      } else if (speedBoostClicks >= 3) {
        if (timerInterval) clearInterval(timerInterval);
        document.body.classList.remove("screen-rumble");
        document.body.classList.add("system-meltdown");
        card.className = "cs-countdown-card crash-glitch";
        if (warnBadge) {
          warnBadge.innerText = "\u{1F4A5} CATASTROPHIC SYSTEM FAILURE - REBOOTING...";
          warnBadge.classList.remove("hidden");
        }
        const daysEl = document.getElementById("cd-days");
        const hoursEl = document.getElementById("cd-hours");
        const minsEl = document.getElementById("cd-mins");
        const secsEl = document.getElementById("cd-secs");
        if (daysEl) daysEl.innerText = "88";
        if (hoursEl) hoursEl.innerText = "ERR";
        if (minsEl) minsEl.innerText = "404";
        if (secsEl) secsEl.innerText = "\u{1F525}";
        btn.disabled = true;
        setTimeout(() => {
          document.body.classList.remove("system-meltdown");
          document.body.classList.remove("screen-rumble");
          if (warnBadge) warnBadge.classList.add("hidden");
          countdownTargetDate = getFridayTargetTimestamp();
          localStorage.setItem("hatziko_cs_target_date", countdownTargetDate.toString());
          speedBoostClicks = 0;
          card.className = "cs-countdown-card";
          btn.disabled = false;
          startTimerInterval(1e3);
        }, 2800);
      }
    });
  }

  // js/coming-soon/hacker-terminal.js
  var terminalTimeouts = [];
  function clearTerminalTimeouts() {
    terminalTimeouts.forEach((t) => clearTimeout(t));
    terminalTimeouts = [];
  }
  function startTerminalStream() {
    const logsContainer = document.getElementById("terminal-logs");
    if (!logsContainer) return;
    logsContainer.innerHTML = "";
    clearTerminalTimeouts();
    const initialLogs = [
      { delay: 600, text: "initiating system...", type: "normal" },
      { delay: 2e3, text: "connecting to core mainframes...", type: "normal" },
      { delay: 3400, text: "accessing database...", type: "normal" },
      { delay: 4800, text: "bypassing security protocols...", type: "normal" },
      { delay: 6200, text: "loading developer credentials...", type: "normal" },
      { delay: 7600, text: "verifying identity...", type: "normal" },
      { delay: 9200, text: "ERROR - we have an intruder!", type: "error" },
      { delay: 10800, text: "downloading virus...", type: "warning" },
      { delay: 12400, text: "[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100% VIRUS INJECTED", type: "error" },
      { delay: 14e3, text: "[CRITICAL] Firewall overridden from IP: 127.0.0.1", type: "error" },
      { delay: 15600, text: "[SYSTEM] Capturing security camera feed...", type: "warning" },
      { delay: 17200, text: "[ALERT] Intruder photo rendered successfully.", type: "warning" }
    ];
    initialLogs.forEach((item) => {
      const timeout = setTimeout(() => {
        const line = document.createElement("p");
        line.className = "log-line " + (item.type === "error" ? "log-error" : item.type === "warning" ? "log-warn" : "");
        line.innerText = item.text;
        logsContainer.appendChild(line);
        logsContainer.scrollTop = logsContainer.scrollHeight;
      }, item.delay);
      terminalTimeouts.push(timeout);
    });
    const imageStartTime = 18800;
    const imgTimeout = setTimeout(() => {
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "rat-scanline-image-wrapper";
      const img = document.createElement("img");
      img.src = "matrix_rat_catch_me_if_you_can.jpg";
      img.alt = "Catch me if you can";
      img.className = "rat-scanline-img";
      imgWrapper.appendChild(img);
      logsContainer.appendChild(imgWrapper);
      let scrollCount = 0;
      const scrollInterval = setInterval(() => {
        logsContainer.scrollTop = logsContainer.scrollHeight;
        scrollCount++;
        if (scrollCount > 40) clearInterval(scrollInterval);
      }, 50);
      setTimeout(() => {
        imgWrapper.style.maxHeight = "none";
        logsContainer.scrollTop = logsContainer.scrollHeight;
      }, 1600);
    }, imageStartTime);
    terminalTimeouts.push(imgTimeout);
  }

  // js/coming-soon/dev-portal.js
  function playKambuchaSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + i * 0.12 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.12);
        osc.stop(ctx.currentTime + i * 0.12 + 0.4);
      });
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = "triangle";
      subOsc.frequency.setValueAtTime(160, ctx.currentTime + 0.4);
      subOsc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 1.8);
      subGain.gain.setValueAtTime(0.3, ctx.currentTime + 0.4);
      subGain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 1.8);
      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(ctx.currentTime + 0.4);
      subOsc.stop(ctx.currentTime + 1.8);
    } catch (e) {
      console.log("Audio synth error:", e);
    }
  }
  function triggerKambuchaSecretUnlock() {
    playKambuchaSound();
    let overlay = document.getElementById("kambucha-portal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "kambucha-portal-overlay";
      overlay.className = "kambucha-portal-overlay";
      overlay.innerHTML = `
            <div class="kambucha-portal-card">
                <div class="kambucha-icon">\u{1F344}\u26A1\u{1F513}</div>
                <h1 class="kambucha-portal-title">ACCESS GRANTED</h1>
                <p class="kambucha-portal-sub">SCOBY OVERRIDE: KAMBUCHA MUSHROOM PROTOCOL ACTIVE</p>
                <div class="kambucha-loading-bar">
                    <div class="kambucha-bar-fill"></div>
                </div>
                <p class="kambucha-status-text">\u{1F344} \u05D4\u05EA\u05E1\u05E1\u05EA \u05E4\u05D8\u05E8\u05D9\u05D9\u05EA \u05D4\u05E7\u05DE\u05D1\u05D5\u05E6'\u05D4 \u05D4\u05D5\u05E9\u05DC\u05DE\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4, \u05D4\u05D9\u05DB\u05D5\u05E0\u05D5 \u05DC\u05E9\u05D9\u05DC\u05E9\u05D5\u05DC...</p>
            </div>
        `;
      document.body.appendChild(overlay);
    } else {
      overlay.classList.remove("hidden");
    }
    document.body.classList.add("kambucha-flash-active");
    setTimeout(() => {
      window.location.href = "main-site-hidden.html";
    }, 4800);
  }
  function initDevPortal() {
    const devBtn = document.getElementById("dev-portal-btn");
    const modal = document.getElementById("dev-modal");
    const closeBtn = document.getElementById("dev-modal-close");
    const form = document.getElementById("dev-login-form");
    const terminal = document.getElementById("matrix-terminal");
    const exitTermBtn = document.getElementById("btn-exit-terminal");
    const passInput = document.getElementById("dev-password-input");
    const errorMsg = document.getElementById("dev-error-msg");
    let devLoginAttempts = 0;
    if (devBtn) {
      devBtn.addEventListener("click", () => {
        devLoginAttempts = 0;
        if (passInput) passInput.value = "";
        if (errorMsg) errorMsg.classList.add("hidden");
        if (modal) {
          modal.classList.remove("hidden");
          setTimeout(() => {
            modal.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 50);
        }
        if (passInput) passInput.focus();
      });
    }
    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
      });
    }
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const typedPass = passInput ? passInput.value.trim().toLowerCase() : "";
        if (typedPass === "kambucha") {
          if (modal) modal.classList.add("hidden");
          triggerKambuchaSecretUnlock();
          return;
        }
        if (devLoginAttempts === 0) {
          devLoginAttempts = 1;
          if (errorMsg) {
            errorMsg.innerHTML = `
                        <div style="color:#ff4757; font-weight:700; margin-top:0.75rem;">\u05E1\u05D9\u05E1\u05DE\u05D0 \u05E9\u05D2\u05D5\u05D9\u05D4 - \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E4\u05EA\u05D7?</div>
                        <div style="color:#ff7675; font-size:0.85rem; font-weight:600; margin-top:0.25rem;">\u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D5\u05EA \u05E9\u05E0\u05D5\u05EA\u05E8\u05D5: 1</div>
                    `;
            errorMsg.classList.remove("hidden");
          }
          if (passInput) {
            passInput.value = "";
            passInput.focus();
          }
        } else {
          if (modal) modal.classList.add("hidden");
          if (terminal) {
            terminal.classList.remove("hidden");
            startTerminalStream();
            setTimeout(() => {
              terminal.scrollIntoView({ behavior: "smooth", block: "start" });
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }, 50);
          }
        }
      });
    }
    if (exitTermBtn && terminal) {
      exitTermBtn.addEventListener("click", () => {
        terminal.classList.add("hidden");
        clearTerminalTimeouts();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (terminal && !terminal.classList.contains("hidden")) {
          terminal.classList.add("hidden");
          clearTerminalTimeouts();
        }
        if (modal && !modal.classList.contains("hidden")) {
          modal.classList.add("hidden");
        }
      }
    });
    let secretBuffer = "";
    document.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      secretBuffer += e.key.toLowerCase();
      if (secretBuffer.length > 25) secretBuffer = secretBuffer.slice(-25);
      if (secretBuffer.includes("kambucha")) {
        secretBuffer = "";
        triggerKambuchaSecretUnlock();
      }
    });
  }

  // js/coming-soon/rat-game.js
  var currentRatsCaught = 0;
  var ratHighScore = 0;
  function initRatSpawner() {
    const container = document.getElementById("rat-container");
    const currentScoreEl = document.getElementById("rat-score-current");
    const highScoreEl = document.getElementById("rat-score-high");
    const badgeEl = document.getElementById("rat-counter-badge");
    if (!container) return;
    const savedHighScore = localStorage.getItem("hatziko_rat_high_score");
    if (savedHighScore) {
      ratHighScore = parseInt(savedHighScore, 10) || 0;
    }
    if (highScoreEl) highScoreEl.innerText = ratHighScore.toString();
    if (currentScoreEl) currentScoreEl.innerText = "0";
    function spawnRat() {
      const rat = document.createElement("div");
      rat.className = "rat-element";
      const isLeftToRight = Math.random() > 0.5;
      const verticalTop = Math.floor(Math.random() * 65 + 15);
      const durationSec = (Math.random() * 3.5 + 2.5).toFixed(1);
      const scaleFactor = (Math.random() * 0.65 + 0.75).toFixed(2);
      rat.style.top = `${verticalTop}%`;
      rat.style.animationDuration = `${durationSec}s`;
      if (isLeftToRight) {
        rat.style.left = "-70px";
        rat.classList.add("rat-move-right");
      } else {
        rat.style.right = "-70px";
        rat.classList.add("rat-move-left");
      }
      rat.innerHTML = `<span class="rat-emoji" style="transform: ${isLeftToRight ? "none" : "scaleX(-1)"} scale(${scaleFactor}); display: inline-block;">\u{1F400}</span>`;
      let isCaught = false;
      rat.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isCaught) return;
        isCaught = true;
        rat.style.animationPlayState = "paused";
        currentRatsCaught++;
        if (currentScoreEl) currentScoreEl.innerText = currentRatsCaught.toString();
        if (currentRatsCaught > ratHighScore) {
          ratHighScore = currentRatsCaught;
          localStorage.setItem("hatziko_rat_high_score", ratHighScore.toString());
          if (highScoreEl) highScoreEl.innerText = ratHighScore.toString();
          if (badgeEl) {
            badgeEl.classList.add("new-record-flash");
            setTimeout(() => badgeEl.classList.remove("new-record-flash"), 1e3);
          }
        }
        const speechBubble = document.createElement("div");
        speechBubble.className = "rat-speech-bubble";
        speechBubble.setAttribute("dir", "rtl");
        speechBubble.innerText = '\u{1F400} "\u05D0\u05E0\u05D9 \u05D0\u05E6\u05DC\u05D9\u05D7 \u05DC\u05E4\u05E6\u05D7 \u05D0\u05EA \u05D6\u05D4!"';
        rat.appendChild(speechBubble);
        setTimeout(() => {
          rat.style.transition = "transform 0.5s ease-in, opacity 0.5s ease-in";
          rat.style.transform = `scale(${scaleFactor * 1.8}) translateY(-80px)`;
          rat.style.opacity = "0";
          setTimeout(() => rat.remove(), 500);
        }, 1200);
      });
      container.appendChild(rat);
      setTimeout(() => {
        if (rat.parentNode) rat.remove();
      }, durationSec * 1e3 + 500);
    }
    setTimeout(spawnRat, 1500);
    setInterval(() => {
      spawnRat();
      if (Math.random() > 0.6) {
        setTimeout(spawnRat, 700);
      }
    }, 4500);
  }

  // js/coming-soon/main.js
  document.addEventListener("DOMContentLoaded", () => {
    initBubbles();
    initCountdown();
    initSpeedUpButton();
    initDevPortal();
    initRatSpawner();
  });
})();
