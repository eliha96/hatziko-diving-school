/* ==========================================================================
   Hatziko Diving School - Stats Component Renderer
   ========================================================================== */

import { escapeHtml } from '../core/utils.js';
import { DEFAULT_DATA } from '../data/defaultData.js';

export function renderStats(appState, isEditMode) {
    const container = document.getElementById('hero-stats-container');
    if (!container) return;

    if (!appState.stats || appState.stats.length === 0) {
        appState.stats = JSON.parse(JSON.stringify(DEFAULT_DATA.stats));
    }

    container.innerHTML = appState.stats.map(item => `
        <div class="stat-card glass-card" data-id="${item.id}">
            <span class="stat-number">${escapeHtml(item.number)}</span>
            <span class="stat-label">${escapeHtml(item.label)}</span>
            ${isEditMode ? `
                <div class="item-actions-bar" style="margin-top:0.3rem; padding-top:0.3rem; justify-content:center;">
                    <button class="btn btn-sm btn-outline" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="openEditModal('stat', '${item.id}')">✏️</button>
                    <button class="btn btn-sm btn-outline" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="deleteItem('stat', '${item.id}')">🗑️</button>
                </div>
            ` : ''}
        </div>
    `).join('');
}
