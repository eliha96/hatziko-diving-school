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
                <div class="item-actions-bar" style="display:flex; gap:0.3rem; align-items:center; flex-wrap:wrap; justify-content:center;">
                    <button type="button" class="btn btn-sm btn-outline" title="הזז קדימה (ימינה)" onclick="moveItem('testimonial', '${item.id}', -1)" style="padding:0.2rem 0.5rem; font-size:0.8rem;">➡️ קדימה</button>
                    <button type="button" class="btn btn-sm btn-outline" title="הזז אחורה (שמאלה)" onclick="moveItem('testimonial', '${item.id}', 1)" style="padding:0.2rem 0.5rem; font-size:0.8rem;">אחורה ⬅️</button>
                    <button type="button" class="btn btn-sm btn-outline" onclick="openEditModal('testimonial', '${item.id}')" style="padding:0.2rem 0.5rem; font-size:0.8rem;">✏️ ערוך</button>
                    <button type="button" class="btn btn-sm btn-outline" onclick="deleteItem('testimonial', '${item.id}')" style="padding:0.2rem 0.5rem; font-size:0.8rem; color:#ef4444; border-color:#ef4444;">🗑️ מחק</button>
                </div>
            ` : ''}
        </div>
    `).join('');
}
