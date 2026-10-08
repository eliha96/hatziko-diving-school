/* ==========================================================================
   Hatziko Diving School - Main Application Entry Point
   ========================================================================== */

import { loadSavedData, getState, getEditMode } from './core/store.js';
import { updateCharCounter } from './core/utils.js';
import { initBubbles } from './features/animations.js';
import { renderStats } from './components/stats.js';
import { renderSyllabus, switchSyllabusTab, openSyllabusDetailModal, initSyllabusDetailModal } from './components/syllabus.js';
import { renderTestimonials } from './components/testimonials.js';
import { renderFAQs } from './components/faq.js';
import { renderCalculatorSliders, updateCalculatorResult, initCalculator, openDepthLevelsModal } from './features/calculator.js';
import { initCertificate } from './features/certificate.js';
import { initRatModalHandlers } from './features/rat-dispatch.js';
import {
    renderImages,
    renderStaticText,
    renderDropdownOptions,
    openEditModal,
    closeModal,
    saveModalItem,
    deleteItem,
    moveItem,
    moveModalRow,
    addCertReasonRow,
    addRegReasonRow,
    addRegMotRow,
    initImageModal,
    setupEditEventListeners
} from './features/edit-engine.js';

// Expose functions globally for inline HTML event handlers and dynamically generated markup
window.openEditModal = openEditModal;
window.closeModal = closeModal;
window.saveModalItem = saveModalItem;
window.addCertReasonRow = addCertReasonRow;
window.addRegReasonRow = addRegReasonRow;
window.addRegMotRow = addRegMotRow;
window.deleteItem = deleteItem;
window.moveItem = moveItem;
window.moveModalRow = moveModalRow;
window.switchSyllabusTab = switchSyllabusTab;
window.updateCalculatorResult = updateCalculatorResult;
window.updateCharCounter = updateCharCounter;
window.openSyllabusDetailModal = openSyllabusDetailModal;
window.openDepthLevelsModal = openDepthLevelsModal;

function initMobileNavigation() {
    const toggleBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBtn.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggleBtn.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });

    // Close menu when tapping outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
            toggleBtn.classList.remove('active');
            navMenu.classList.remove('open');
        }
    });
}

/**
 * Render all dynamic components and text elements on the page
 */
export function renderAll() {
    const state = getState();
    const isEditMode = getEditMode();

    renderImages(state);
    renderStaticText(state, isEditMode);
    renderDropdownOptions(state);
    renderStats(state, isEditMode);
    renderCalculatorSliders(state, isEditMode);
    renderSyllabus(state, isEditMode);
    renderTestimonials(state, isEditMode);
    renderFAQs(state, isEditMode);
}

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    initBubbles();
    renderAll();
    setupEditEventListeners(renderAll);
    initCalculator();
    initCertificate();
    initImageModal();
    initRatModalHandlers();
    initSyllabusDetailModal();
    initMobileNavigation();
});
