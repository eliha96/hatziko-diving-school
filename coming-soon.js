/* ==========================================================================
   Hatziko Diving School - Coming Soon & Interactive Easter Eggs Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initBubbles();
    initCountdown();
    initSpeedUpButton();
    initDevPortal();
    initRatSpawner();
});

// Countdown Timer & Speed Engine
let countdownTargetDate = null;
let timerInterval = null;
let currentTickSpeed = 1000; // 1 second standard
let speedBoostClicks = 0;

function initCountdown() {
    // Save target date 3 days in the future to localStorage so it stays consistent
    let savedTarget = localStorage.getItem('hatziko_cs_target_date');
    if (!savedTarget) {
        const threeDaysMs = 3 * 24 * 60 * 60 * 1000;
        savedTarget = (Date.now() + threeDaysMs).toString();
        localStorage.setItem('hatziko_cs_target_date', savedTarget);
    }
    countdownTargetDate = parseInt(savedTarget);

    startTimerInterval(1000);
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

    // If speed boosted, artificially decrement target faster
    if (speedBoostClicks === 1) {
        countdownTargetDate -= 4000;
        diff = countdownTargetDate - now;
    } else if (speedBoostClicks === 2) {
        countdownTargetDate -= 20000;
        diff = countdownTargetDate - now;
    }

    if (diff <= 0) {
        diff = 0;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
    if (minsEl) minsEl.innerText = String(mins).padStart(2, '0');
    if (secsEl) secsEl.innerText = String(secs).padStart(2, '0');
}

// "האצת בנייה" Speed Boost Button Logic
function initSpeedUpButton() {
    const btn = document.getElementById('btn-speed-up');
    const card = document.getElementById('countdown-card');
    const warnBadge = document.getElementById('system-warning-badge');

    if (!btn) return;

    btn.addEventListener('click', () => {
        speedBoostClicks++;

        if (speedBoostClicks === 1) {
            startTimerInterval(200); // 5x speed
            card.className = "cs-countdown-card speed-boost-1";
            if (warnBadge) warnBadge.classList.add('hidden');
        } else if (speedBoostClicks === 2) {
            startTimerInterval(40); // 25x speed
            card.className = "cs-countdown-card speed-boost-2 glitch-shake";
            document.body.classList.add('screen-rumble');
            if (warnBadge) {
                warnBadge.innerText = "⚠️ WARNING: SYSTEM OVERLOAD - CORE TEMPERATURE CRITICAL";
                warnBadge.classList.remove('hidden');
            }
        } else if (speedBoostClicks >= 3) {
            // CATASTROPHIC SYSTEM MELTDOWN & CRASH!
            if (timerInterval) clearInterval(timerInterval);
            
            document.body.classList.remove('screen-rumble');
            document.body.classList.add('system-meltdown');
            card.className = "cs-countdown-card crash-glitch";
            
            if (warnBadge) {
                warnBadge.innerText = "💥 CATASTROPHIC SYSTEM FAILURE - REBOOTING...";
                warnBadge.classList.remove('hidden');
            }

            const daysEl = document.getElementById('cd-days');
            const hoursEl = document.getElementById('cd-hours');
            const minsEl = document.getElementById('cd-mins');
            const secsEl = document.getElementById('cd-secs');

            if (daysEl) daysEl.innerText = "88";
            if (hoursEl) hoursEl.innerText = "ERR";
            if (minsEl) minsEl.innerText = "404";
            if (secsEl) secsEl.innerText = "🔥";

            btn.disabled = true;

            setTimeout(() => {
                // Reset back to normal after 2.8 seconds
                document.body.classList.remove('system-meltdown');
                document.body.classList.remove('screen-rumble');
                if (warnBadge) warnBadge.classList.add('hidden');

                const threeDaysMs = 3 * 24 * 60 * 60 * 1000;
                countdownTargetDate = Date.now() + threeDaysMs;
                localStorage.setItem('hatziko_cs_target_date', countdownTargetDate.toString());

                speedBoostClicks = 0;
                card.className = "cs-countdown-card";
                btn.disabled = false;
                startTimerInterval(1000);
            }, 2800);
        }
    });
}

// Developer Portal & Matrix Terminal Logic
function initDevPortal() {
    const devBtn = document.getElementById('dev-portal-btn');
    const modal = document.getElementById('dev-modal');
    const closeBtn = document.getElementById('dev-modal-close');
    const form = document.getElementById('dev-login-form');
    const terminal = document.getElementById('matrix-terminal');
    const exitTermBtn = document.getElementById('btn-exit-terminal');
    const passInput = document.getElementById('dev-password-input');
    const errorMsg = document.getElementById('dev-error-msg');

    let devLoginAttempts = 0;

    if (devBtn) {
        devBtn.addEventListener('click', () => {
            devLoginAttempts = 0;
            if (passInput) passInput.value = '';
            if (errorMsg) errorMsg.classList.add('hidden');
            modal.classList.remove('hidden');
            if (passInput) passInput.focus();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (devLoginAttempts === 0) {
                devLoginAttempts = 1;
                if (errorMsg) {
                    errorMsg.innerHTML = `
                        <div style="color:#ff4757; font-weight:700; margin-top:0.75rem;">סיסמא שגויה - אתה בטוח שאתה מפתח?</div>
                        <div style="color:#ff7675; font-size:0.85rem; font-weight:600; margin-top:0.25rem;">ניסיונות שנותרו: 1</div>
                    `;
                    errorMsg.classList.remove('hidden');
                }
                if (passInput) {
                    passInput.value = '';
                    passInput.focus();
                }
            } else {
                modal.classList.add('hidden');
                terminal.classList.remove('hidden');
                startTerminalStream();
            }
        });
    }

    if (exitTermBtn) {
        exitTermBtn.addEventListener('click', () => {
            terminal.classList.add('hidden');
            clearTerminalTimeouts();
        });
    }

    // Allow pressing Escape key to exit terminal or modal instantly
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (terminal && !terminal.classList.contains('hidden')) {
                terminal.classList.add('hidden');
                clearTerminalTimeouts();
            }
            if (modal && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        }
    });
}

let terminalTimeouts = [];

function clearTerminalTimeouts() {
    terminalTimeouts.forEach(t => clearTimeout(t));
    terminalTimeouts = [];
}

function startTerminalStream() {
    const logsContainer = document.getElementById('terminal-logs');
    if (!logsContainer) return;

    // Completely clear terminal on open
    logsContainer.innerHTML = '';
    clearTerminalTimeouts();

    const initialLogs = [
        { delay: 600,   text: "initiating system...", type: "normal" },
        { delay: 2000,  text: "connecting to core mainframes...", type: "normal" },
        { delay: 3400,  text: "accessing database...", type: "normal" },
        { delay: 4800,  text: "bypassing security protocols...", type: "normal" },
        { delay: 6200,  text: "loading developer credentials...", type: "normal" },
        { delay: 7600,  text: "verifying identity...", type: "normal" },
        { delay: 9200,  text: "ERROR - we have an intruder!", type: "error" },
        { delay: 10800, text: "downloading virus...", type: "warning" },
        { delay: 12400, text: "[████████████████████████████████] 100% VIRUS INJECTED", type: "error" },
        { delay: 14000, text: "[CRITICAL] Firewall overridden from IP: 127.0.0.1", type: "error" },
        { delay: 15600, text: "[SYSTEM] Capturing security camera feed...", type: "warning" },
        { delay: 17200, text: "[ALERT] Intruder photo rendered successfully.", type: "warning" }
    ];

    initialLogs.forEach(item => {
        const timeout = setTimeout(() => {
            const line = document.createElement('p');
            line.className = 'log-line ' + (item.type === 'error' ? 'log-error' : (item.type === 'warning' ? 'log-warn' : ''));
            line.innerText = item.text;
            logsContainer.appendChild(line);
            logsContainer.scrollTop = logsContainer.scrollHeight;
        }, item.delay);
        terminalTimeouts.push(timeout);
    });

    const imageStartTime = 18800;

    // Display original matrix CRT green rat image with CATCH ME IF YOU CAN screen text
    const imgTimeout = setTimeout(() => {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'rat-scanline-image-wrapper';
        imgWrapper.innerHTML = `<img src="matrix_rat_catch_me_if_you_can.jpg" alt="Catch me if you can" class="rat-scanline-img" />`;
        logsContainer.appendChild(imgWrapper);
        
        // Continuously scroll to keep bottom of expanding image visible
        let scrollCount = 0;
        const scrollInterval = setInterval(() => {
            logsContainer.scrollTop = logsContainer.scrollHeight;
            if (imgWrapper.scrollIntoView) {
                imgWrapper.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
            scrollCount++;
            if (scrollCount > 40) clearInterval(scrollInterval);
        }, 50);
    }, imageStartTime);
    terminalTimeouts.push(imgTimeout);
}

// Random Rat Running Across Screen Engine
function initRatSpawner() {
    const container = document.getElementById('rat-container');
    if (!container) return;

    function spawnRat() {
        const rat = document.createElement('div');
        rat.className = 'rat-element';
        
        const isLeftToRight = Math.random() > 0.5;
        const verticalTop = Math.floor(Math.random() * 60 + 20); // 20% to 80%
        const durationSec = Math.random() * 3 + 4; // 4 to 7 seconds

        rat.style.top = `${verticalTop}%`;
        
        if (isLeftToRight) {
            rat.style.left = '-60px';
            rat.classList.add('rat-move-right');
        } else {
            rat.style.right = '-60px';
            rat.classList.add('rat-move-left');
        }

        rat.style.animationDuration = `${durationSec}s`;
        rat.innerHTML = `<span class="rat-emoji">🐀</span>`;

        // Click on rat easter egg
        rat.addEventListener('click', (e) => {
            e.stopPropagation();
            rat.style.animationPlayState = 'paused';
            
            const speechBubble = document.createElement('div');
            speechBubble.className = 'rat-speech-bubble';
            speechBubble.innerText = '🐀 "אני רק בודקת תקלות בחיווט!"';
            rat.appendChild(speechBubble);

            setTimeout(() => {
                rat.style.transition = 'transform 0.5s ease-in, opacity 0.5s ease-in';
                rat.style.transform = 'scale(2) translateY(-100px)';
                rat.style.opacity = '0';
                setTimeout(() => rat.remove(), 500);
            }, 1200);
        });

        container.appendChild(rat);

        // Remove after animation completes
        setTimeout(() => {
            if (rat.parentNode) rat.remove();
        }, durationSec * 1000 + 500);
    }

    // Spawn first rat after 3 seconds, then every 7-12 seconds
    setTimeout(spawnRat, 3000);
    setInterval(() => {
        if (Math.random() > 0.3) {
            spawnRat();
        }
    }, 8000);
}

// Ocean Bubbles Generator
function initBubbles() {
    const container = document.getElementById('bubbles');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 25 + 8;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDelay = (Math.random() * 8) + 's';
        bubble.style.animationDuration = (Math.random() * 6 + 6) + 's';
        
        container.appendChild(bubble);
    }
}
