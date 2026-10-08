/* ==========================================================================
   Hatziko Diving School - State & Storage Engine
   ========================================================================== */

import { DEFAULT_DATA } from '../data/defaultData.js';

// Global state instance initialized from DEFAULT_DATA
let appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
let isEditMode = false;

/**
 * Returns current state object
 */
export function getState() {
    return appState;
}

/**
 * Update whole state or assign partial object
 */
export function setState(newState) {
    appState = newState;
}

/**
 * Returns whether edit mode is active
 */
export function getEditMode() {
    return isEditMode;
}

/**
 * Set edit mode boolean
 */
export function setEditMode(active) {
    isEditMode = active;
}

/**
 * Load saved state from LocalStorage with legacy migration checks
 */
export function loadSavedData() {
    const saved = localStorage.getItem('hatziko_site_data');
    if (saved) {
        try {
            appState = Object.assign({}, DEFAULT_DATA, JSON.parse(saved));
            appState.logoSrc = 'assets/new-transparent-logo.png';
            if (appState.heroSrc === 'assets/hero.jpg') {
                appState.heroSrc = 'assets/hero-new.jfif';
            }
            if (!appState.stats || appState.stats.length === 0) {
                appState.stats = JSON.parse(JSON.stringify(DEFAULT_DATA.stats));
            }
            if (!appState.calcSliders || appState.calcSliders.length === 0) {
                appState.calcSliders = JSON.parse(JSON.stringify(DEFAULT_DATA.calcSliders));
            }
            if (appState.syllabus) {
                appState.syllabus.forEach(item => {
                    if (!item.part) {
                        if (item.id === 's1' || item.id === 's2') item.part = 'pool';
                        else if (item.id === 's3' || item.id === 's4') item.part = 'sea';
                        else if (item.id === 's5') item.part = 'final';
                        else item.part = 'pool';
                    }
                });
            }
            if (appState.heroBadge && (appState.heroBadge.includes('⭐½') || appState.heroBadge.includes('⭐1/2') || appState.heroBadge.includes('⭐ 1/2'))) {
                appState.heroBadge = appState.heroBadge.replace(/⭐\s*½|⭐\s*1\/2|½|1\/2/g, '<img src="assets/half-star.png" class="half-star-img" alt="חצי כוכב">');
            }
            if (appState.testimonials) {
                appState.testimonials.forEach(t => {
                    if (t.stars && (t.stars.includes('⭐½') || t.stars.includes('⭐1/2') || t.stars.includes('⭐ 1/2') || t.stars.includes('½'))) {
                        t.stars = t.stars.replace(/⭐\s*½|⭐\s*1\/2|½|1\/2/g, '<img src="assets/half-star.png" class="half-star-img" alt="חצי כוכב">');
                    }
                });
            }
            if (!appState.certReasons || appState.certReasons.length === 0) {
                appState.certReasons = JSON.parse(JSON.stringify(DEFAULT_DATA.certReasons));
            }
            if (!appState.regReasons || appState.regReasons.length === 0) {
                appState.regReasons = JSON.parse(JSON.stringify(DEFAULT_DATA.regReasons));
            }
            if (!appState.regMotivations || appState.regMotivations.length === 0) {
                appState.regMotivations = JSON.parse(JSON.stringify(DEFAULT_DATA.regMotivations));
            }
        } catch (e) {
            console.error("Failed to parse saved data, loading default.", e);
            appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    }
    return appState;
}

/**
 * Persist current state to LocalStorage
 */
export function saveData() {
    localStorage.setItem('hatziko_site_data', JSON.stringify(appState));
}

/**
 * Reset state to factory default and persist
 */
export function resetData() {
    appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveData();
    return appState;
}
