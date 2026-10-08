/* ==========================================================================
   Hatziko Diving School - Certificate Generator Module
   ========================================================================== */

import { formatDate } from '../core/utils.js';

export function updateCertReasonDisplay() {
    const displayReason = document.getElementById('cert-display-reason');
    const reasonSelect = document.getElementById('cert-reason-select');
    if (displayReason && reasonSelect) {
        displayReason.innerText = reasonSelect.value || '';
    }
}

export function initCertificate() {
    const nameInput = document.getElementById('cert-name-input');
    const reasonSelect = document.getElementById('cert-reason-select');
    const dateInput = document.getElementById('cert-date-input');

    const displayName = document.getElementById('cert-display-name');
    const displayReason = document.getElementById('cert-display-reason');
    const displayDate = document.getElementById('cert-display-date');

    const today = new Date().toISOString().split('T')[0];
    if (dateInput) dateInput.value = today;
    if (displayDate) displayDate.innerText = formatDate(today);

    if (nameInput && displayName) {
        nameInput.addEventListener('input', () => {
            displayName.innerText = nameInput.value || "אלופה עם בעיות אוזניים";
        });
    }

    if (reasonSelect && displayReason) {
        reasonSelect.addEventListener('change', () => {
            updateCertReasonDisplay();
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
