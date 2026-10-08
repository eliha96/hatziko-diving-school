/* ==========================================================================
   Hatziko Diving School - FAQ Component Renderer
   ========================================================================== */

import { escapeHtml } from '../core/utils.js';

export function renderFAQs(appState, isEditMode) {
    const container = document.getElementById('faq-container');
    if (!container) return;

    if (!appState.faqs) return;

    container.innerHTML = appState.faqs.map(item => `
        <div class="faq-item glass-card" data-id="${item.id}">
            <div class="faq-question">
                <span>❓ ${escapeHtml(item.question)}</span>
                <span class="faq-icon">▼</span>
            </div>
            <div class="faq-answer">
                ${escapeHtml(item.answer)}
                ${isEditMode ? `
                    <div class="item-actions-bar">
                        <button class="btn btn-sm btn-outline" onclick="openEditModal('faq', '${item.id}')">✏️ ערוך שאלה</button>
                        <button class="btn btn-sm btn-outline" onclick="deleteItem('faq', '${item.id}')">🗑️ מחק</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.faq-item').forEach(faqEl => {
        faqEl.querySelector('.faq-question').onclick = (e) => {
            if (e.target.tagName === 'BUTTON') return;
            faqEl.classList.toggle('open');
        };
    });
}
