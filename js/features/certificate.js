/* ==========================================================================
   Hatziko Diving School - Certificate Generator Module
   ========================================================================== */

import { formatDate } from '../core/utils.js';
import { getState, getEditMode, saveData } from '../core/store.js';

export function isCustomReason(val) {
    if (!val) return false;
    const s = String(val).toLowerCase();
    return s.includes('מותאמת אישית') || s.includes('בהתאמה אישית') || s.includes('אישית');
}

export function updateCertReasonDisplay() {
    const displayReason = document.getElementById('cert-display-reason');
    const reasonSelect = document.getElementById('cert-reason-select');
    const customGroup = document.getElementById('cert-custom-reason-group');
    const customInput = document.getElementById('cert-custom-reason-input');

    if (!displayReason || !reasonSelect) return;

    const val = reasonSelect.value || '';
    if (isCustomReason(val)) {
        if (customGroup) customGroup.classList.remove('hidden');
        const customVal = customInput ? customInput.value.trim() : '';
        displayReason.innerText = customVal || 'סיבה מותאמת אישית...';
    } else {
        if (customGroup) customGroup.classList.add('hidden');
        displayReason.innerText = val;
    }
}

export function initCertificate() {
    const appState = getState();
    const nameInput = document.getElementById('cert-name-input');
    const reasonSelect = document.getElementById('cert-reason-select');
    const customInput = document.getElementById('cert-custom-reason-input');
    const dateInput = document.getElementById('cert-date-input');

    const displayName = document.getElementById('cert-display-name');
    const displayReason = document.getElementById('cert-display-reason');
    const displayDate = document.getElementById('cert-display-date');

    // Default recipient name from state
    const defaultName = appState.certNameDefault || "אלופה עם בעיות אוזניים";
    if (nameInput) {
        nameInput.value = defaultName;
    }
    if (displayName) {
        displayName.innerText = defaultName;
    }

    const today = new Date().toISOString().split('T')[0];
    if (dateInput) dateInput.value = today;
    if (displayDate) displayDate.innerText = formatDate(today);

    if (nameInput && displayName) {
        nameInput.addEventListener('input', () => {
            const currentVal = nameInput.value.trim();
            const fallback = appState.certNameDefault || "אלופה עם בעיות אוזניים";
            displayName.innerText = currentVal || fallback;

            // In edit mode, auto-save default recipient name
            if (getEditMode()) {
                appState.certNameDefault = currentVal || fallback;
                saveData();
            }
        });
    }

    if (reasonSelect && displayReason) {
        reasonSelect.addEventListener('change', () => {
            updateCertReasonDisplay();
            if (isCustomReason(reasonSelect.value) && customInput) {
                customInput.focus();
            }
        });
    }

    if (customInput && displayReason) {
        customInput.addEventListener('input', () => {
            displayReason.innerText = customInput.value.trim() || 'סיבה מותאמת אישית...';
        });
    }

    if (dateInput && displayDate) {
        dateInput.addEventListener('change', () => {
            displayDate.innerText = formatDate(dateInput.value);
        });
    }

    const printBtn = document.getElementById('btn-print-cert');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}
