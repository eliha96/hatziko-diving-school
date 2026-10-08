/* ==========================================================================
   Hatziko Diving School - Countdown Timer & Speed Boost Engine
   ========================================================================== */

let countdownTargetDate = null;
let timerInterval = null;
let currentTickSpeed = 1000; // 1 second standard
let speedBoostClicks = 0;

export function getFridayTargetTimestamp() {
    // Friday October 9, 2026 at 10:00:00 AM Israel Time (GMT+3)
    return new Date('2026-10-09T10:00:00+03:00').getTime();
}

export function getThursdayTargetTimestamp() {
    return getFridayTargetTimestamp();
}

export function initCountdown() {
    const targetMs = getFridayTargetTimestamp();
    localStorage.setItem('hatziko_cs_target_date', targetMs.toString());
    countdownTargetDate = targetMs;

    startTimerInterval(1000);
}

export function startTimerInterval(msSpeed) {
    if (timerInterval) clearInterval(timerInterval);
    currentTickSpeed = msSpeed;
    updateCountdownDisplay();
    timerInterval = setInterval(updateCountdownDisplay, currentTickSpeed);
}

export function updateCountdownDisplay() {
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
export function initSpeedUpButton() {
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

                countdownTargetDate = getFridayTargetTimestamp();
                localStorage.setItem('hatziko_cs_target_date', countdownTargetDate.toString());

                speedBoostClicks = 0;
                card.className = "cs-countdown-card";
                btn.disabled = false;
                startTimerInterval(1000);
            }, 2800);
        }
    });
}
