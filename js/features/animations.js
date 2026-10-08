/* ==========================================================================
   Hatziko Diving School - Animations (Bubbles, Ocean Atmosphere)
   ========================================================================== */

/**
 * Initialize dynamic rising bubbles in the background container
 */
export function initBubbles() {
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
