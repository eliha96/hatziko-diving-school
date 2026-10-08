/* ==========================================================================
   Hatziko Diving School - Testimonials Component Renderer
   ========================================================================== */

import { escapeHtml, renderStars } from '../core/utils.js';

export function renderTestimonials(appState, isEditMode) {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    if (!appState.testimonials) return;

    container.innerHTML = appState.testimonials.map(item => `
        <div class="testimonial-card glass-card" data-id="${item.id}">
            <div>
                <div class="testimonial-header">
                    <div class="testimonial-avatar">🤿</div>
                    <div>
                        <div class="testimonial-author">${escapeHtml(item.name)}</div>
                        <div class="testimonial-role">${escapeHtml(item.role)}</div>
                    </div>
                </div>
                <div class="testimonial-stars">${renderStars(item.stars)}</div>
                <p class="testimonial-text">"${escapeHtml(item.text)}"</p>
            </div>
            ${isEditMode ? `
                <div class="item-actions-bar">
                    <button class="btn btn-sm btn-outline" onclick="openEditModal('testimonial', '${item.id}')">✏️ ערוך המלצה</button>
                    <button class="btn btn-sm btn-outline" onclick="deleteItem('testimonial', '${item.id}')">🗑️ מחק</button>
                </div>
            ` : ''}
        </div>
    `).join('');
}
