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

    if (!btn) return;

    btn.addEventListener('click', () => {
        speedBoostClicks++;

        if (speedBoostClicks === 1) {
            startTimerInterval(200); // 5x speed
            card.className = "cs-countdown-card speed-boost-1";
            showToast("⚡ מהירות בנייה x5! (הקפה נשפך על המקלדת והשעון טס)");
            btn.innerText = "⚡⚡ האצת בנייה (מהר יותר!)";
        } else if (speedBoostClicks === 2) {
            startTimerInterval(40); // 25x speed
            card.className = "cs-countdown-card speed-boost-2 glitch-shake";
            showToast("🔥 מהירות בנייה x25! (השרת מעלה עשן והמעבד רותח!)");
            btn.innerText = "💥 לחץ פעם אחרונה (על אחריותך)";
        } else if (speedBoostClicks >= 3) {
            // CRASH / BREAK IT!
            if (timerInterval) clearInterval(timerInterval);
            card.className = "cs-countdown-card crash-glitch";
            
            document.getElementById('cd-days').innerText = "88";
            document.getElementById('cd-hours').innerText = "ERR";
            document.getElementById('cd-mins').innerText = "404";
            document.getElementById('cd-secs').innerText = "🔥";

            showToast("💥 יופי הכל נשבר, מההתחלה...", true);
            btn.disabled = true;

            setTimeout(() => {
                // Reset after 2.5 seconds
                const threeDaysMs = 3 * 24 * 60 * 60 * 1000;
                countdownTargetDate = Date.now() + threeDaysMs;
                localStorage.setItem('hatziko_cs_target_date', countdownTargetDate.toString());

                speedBoostClicks = 0;
                card.className = "cs-countdown-card";
                btn.disabled = false;
                btn.innerText = "⚡ האצת בנייה";
                showToast("☕ המערכת אותחלה בהצלחה (וחזרה לקצב הקפה הרגיל)");
                startTimerInterval(1000);
            }, 2500);
        }
    });
}

function showToast(msg, isError = false) {
    const toast = document.getElementById('speed-status-toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.className = `speed-toast ${isError ? 'toast-error' : 'toast-info'}`;
    toast.classList.remove('hidden');
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

    if (devBtn) {
        devBtn.addEventListener('click', () => {
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
            modal.classList.add('hidden');
            terminal.classList.remove('hidden');
            startTerminalStream();
        });
    }

    if (exitTermBtn) {
        exitTermBtn.addEventListener('click', () => {
            terminal.classList.add('hidden');
        });
    }

    // Allow pressing Escape key to exit terminal or modal instantly
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (terminal && !terminal.classList.contains('hidden')) {
                terminal.classList.add('hidden');
            }
            if (modal && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        }
    });
}

let terminalStreamInterval = null;
const terminalMessages = [
    "[SYSTEM] Overriding compilation parameters...",
    "[OK] Coffee Machine online (Coffee level: 98%).",
    "[WARN] Code deleted accidentally yesterday at 03:42 AM.",
    "[DEV] Developer 'Hatziko' active: restoring deleted code...",
    "[SECURITY] Confidential project mode active.",
    "[SYSTEM] Rebuilding HTML & CSS modules...",
    "[INFO] Server compilation speed: 99.9%",
    "[WARN] Rat detected near developer keyboard!",
    "[OK] System recovery progressing smoothly."
];

function startTerminalStream() {
    const logsContainer = document.getElementById('terminal-logs');
    if (!logsContainer) return;

    let index = 0;
    if (terminalStreamInterval) clearInterval(terminalStreamInterval);

    terminalStreamInterval = setInterval(() => {
        const line = document.createElement('p');
        line.className = 'log-line';
        line.innerText = terminalMessages[index % terminalMessages.length];
        logsContainer.appendChild(line);
        logsContainer.scrollTop = logsContainer.scrollHeight;
        index++;
    }, 1200);
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
