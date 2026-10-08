/* ==========================================================================
   Hatziko Diving School - Rat Spawner Mini-Game Engine
   ========================================================================== */

let currentRatsCaught = 0;
let ratHighScore = 0;

export function initRatSpawner() {
    const container = document.getElementById('rat-container');
    const currentScoreEl = document.getElementById('rat-score-current');
    const highScoreEl = document.getElementById('rat-score-high');
    const badgeEl = document.getElementById('rat-counter-badge');

    if (!container) return;

    // Load Personal Record High Score from localStorage
    const savedHighScore = localStorage.getItem('hatziko_rat_high_score');
    if (savedHighScore) {
        ratHighScore = parseInt(savedHighScore, 10) || 0;
    }
    if (highScoreEl) highScoreEl.innerText = ratHighScore.toString();
    if (currentScoreEl) currentScoreEl.innerText = "0";

    function spawnRat() {
        const rat = document.createElement('div');
        rat.className = 'rat-element';
        
        const isLeftToRight = Math.random() > 0.5;
        const verticalTop = Math.floor(Math.random() * 65 + 15); // 15% to 80%
        const durationSec = (Math.random() * 3.5 + 2.5).toFixed(1); // 2.5s (fast) to 6s
        
        // Random rat sizes: 0.75x (small & fast), 1.0x (normal), 1.4x (giant)
        const scaleFactor = (Math.random() * 0.65 + 0.75).toFixed(2);

        rat.style.top = `${verticalTop}%`;
        rat.style.animationDuration = `${durationSec}s`;
        
        if (isLeftToRight) {
            rat.style.left = '-70px';
            rat.classList.add('rat-move-right');
        } else {
            rat.style.right = '-70px';
            rat.classList.add('rat-move-left');
        }

        rat.innerHTML = `<span class="rat-emoji" style="transform: ${isLeftToRight ? 'none' : 'scaleX(-1)'} scale(${scaleFactor}); display: inline-block;">🐀</span>`;

        let isCaught = false;

        // Click on rat easter egg
        rat.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isCaught) return;
            isCaught = true;

            rat.style.animationPlayState = 'paused';
            
            // Increment Session caught count
            currentRatsCaught++;
            if (currentScoreEl) currentScoreEl.innerText = currentRatsCaught.toString();

            // Check if high score broken
            if (currentRatsCaught > ratHighScore) {
                ratHighScore = currentRatsCaught;
                localStorage.setItem('hatziko_rat_high_score', ratHighScore.toString());
                if (highScoreEl) highScoreEl.innerText = ratHighScore.toString();
                
                if (badgeEl) {
                    badgeEl.classList.add('new-record-flash');
                    setTimeout(() => badgeEl.classList.remove('new-record-flash'), 1000);
                }
            }
            
            const speechBubble = document.createElement('div');
            speechBubble.className = 'rat-speech-bubble';
            speechBubble.setAttribute('dir', 'rtl');
            speechBubble.innerText = '🐀 "אני אצליח לפצח את זה!"';
            rat.appendChild(speechBubble);

            setTimeout(() => {
                rat.style.transition = 'transform 0.5s ease-in, opacity 0.5s ease-in';
                rat.style.transform = `scale(${scaleFactor * 1.8}) translateY(-80px)`;
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

    // Spawn first rat after 1.5 seconds, then frequently
    setTimeout(spawnRat, 1500);
    setInterval(() => {
        spawnRat();
        // 40% chance to spawn a second rat simultaneously for multi-rat action!
        if (Math.random() > 0.6) {
            setTimeout(spawnRat, 700);
        }
    }, 4500);
}
