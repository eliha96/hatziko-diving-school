/* ==========================================================================
   Hatziko Diving School - Coming Soon Page Entry Point
   ========================================================================== */

import { initBubbles } from '../features/animations.js';
import { initCountdown, initSpeedUpButton } from './countdown.js';
import { initDevPortal } from './dev-portal.js';
import { initRatSpawner } from './rat-game.js';

document.addEventListener('DOMContentLoaded', () => {
    initBubbles();
    initCountdown();
    initSpeedUpButton();
    initDevPortal();
    initRatSpawner();
});
