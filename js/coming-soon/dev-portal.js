/* ==========================================================================
   Hatziko Diving School - Developer Portal & Kambucha Easter Egg Module
   ========================================================================== */

import { startTerminalStream, clearTerminalTimeouts } from './hacker-terminal.js';

export function playKambuchaSound() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        // High-tech 4-note ascending sci-fi chime
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;

            gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.4);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + i * 0.12);
            osc.stop(ctx.currentTime + i * 0.12 + 0.4);
        });

        // Sub-bass ocean sonar drop
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();
        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(160, ctx.currentTime + 0.4);
        subOsc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 1.8);

        subGain.gain.setValueAtTime(0.3, ctx.currentTime + 0.4);
        subGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

        subOsc.connect(subGain);
        subGain.connect(ctx.destination);

        subOsc.start(ctx.currentTime + 0.4);
        subOsc.stop(ctx.currentTime + 1.8);
    } catch (e) {
        console.log('Audio synth error:', e);
    }
}

export function triggerKambuchaSecretUnlock() {
    playKambuchaSound();

    let overlay = document.getElementById('kambucha-portal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'kambucha-portal-overlay';
        overlay.className = 'kambucha-portal-overlay';
        overlay.innerHTML = `
            <div class="kambucha-portal-card">
                <div class="kambucha-icon">🍄⚡🔓</div>
                <h1 class="kambucha-portal-title">ACCESS GRANTED</h1>
                <p class="kambucha-portal-sub">SCOBY OVERRIDE: KAMBUCHA MUSHROOM PROTOCOL ACTIVE</p>
                <div class="kambucha-loading-bar">
                    <div class="kambucha-bar-fill"></div>
                </div>
                <p class="kambucha-status-text">🍄 התססת פטריית הקמבוצ'ה הושלמה בהצלחה, היכונו לשילשול...</p>
            </div>
        `;
        document.body.appendChild(overlay);
    } else {
        overlay.classList.remove('hidden');
    }

    document.body.classList.add('kambucha-flash-active');

    // Redirect to the full main site after 4.8 seconds
    setTimeout(() => {
        window.location.href = 'main-site-hidden.html';
    }, 4800);
}

export function initDevPortal() {
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
            if (modal) {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 50);
            }
            if (passInput) passInput.focus();
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const typedPass = passInput ? passInput.value.trim().toLowerCase() : '';

            // Secret Developer Override Password: 'kambucha'
            if (typedPass === 'kambucha') {
                if (modal) modal.classList.add('hidden');
                triggerKambuchaSecretUnlock();
                return;
            }

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
                if (modal) modal.classList.add('hidden');
                if (terminal) {
                    terminal.classList.remove('hidden');
                    startTerminalStream();

                    setTimeout(() => {
                        terminal.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }, 50);
                }
            }
        });
    }

    if (exitTermBtn && terminal) {
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

    // Typing 'kambucha' anywhere on the page easter egg listener
    let secretBuffer = '';
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        secretBuffer += e.key.toLowerCase();
        if (secretBuffer.length > 25) secretBuffer = secretBuffer.slice(-25);
        if (secretBuffer.includes('kambucha')) {
            secretBuffer = '';
            triggerKambuchaSecretUnlock();
        }
    });
}
