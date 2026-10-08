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
    return false;
}

/**
 * Set edit mode boolean
 */
export function setEditMode(active) {
    isEditMode = false;
}

/**
 * Load saved state - always uses authoritative site-data
 */
export function loadSavedData() {
    appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
    isEditMode = false;
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
