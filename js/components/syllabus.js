/* ==========================================================================
   Hatziko Diving School - Syllabus Component Renderer
   ========================================================================== */

import { escapeHtml } from '../core/utils.js';
import { DEFAULT_DATA } from '../data/defaultData.js';
import { getState, getEditMode } from '../core/store.js';

let currentSyllabusTab = 'pool';

export function getCurrentSyllabusTab() {
    return currentSyllabusTab;
}

export function setSyllabusTab(part) {
    currentSyllabusTab = part;
}

export function switchSyllabusTab(part) {
    currentSyllabusTab = part;
    document.querySelectorAll('.syllabus-tab').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-part') === part);
    });
    renderSyllabus(getState(), getEditMode());
}

export function renderSyllabus(appState, isEditMode) {
    const container = document.getElementById('syllabus-container');
    if (!container) return;

    if (!appState.syllabus || appState.syllabus.length === 0) {
        appState.syllabus = JSON.parse(JSON.stringify(DEFAULT_DATA.syllabus));
    }

    const filtered = appState.syllabus.filter(item => {
        const itemPart = item.part || 'pool';
        return itemPart === currentSyllabusTab;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:3rem 1rem; color: var(--text-secondary);">
                <p style="font-size:1.1rem; margin-bottom:1rem;">אין עדיין שיעורים בחלק זה.</p>
                ${isEditMode ? `<button class="btn btn-outline" onclick="openEditModal('syllabus')">➕ הוסף שיעור לחלק זה</button>` : ''}
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(item => {
        const itemPart = item.part || 'pool';
        const themeClass = itemPart === 'sea' ? 'theme-sea' : (itemPart === 'final' ? 'theme-final' : 'theme-pool');

        return `
            <div class="syllabus-card glass-card ${themeClass}" data-id="${item.id}">
                <span class="syllabus-number">${escapeHtml(item.number || 'שיעור')}</span>
                <div>
                    <h3 class="syllabus-title">${escapeHtml(item.title)}</h3>
                    ${item.duration ? `<div class="syllabus-duration">⏱️ ${escapeHtml(item.duration)}</div>` : ''}
                    <p class="syllabus-desc">${escapeHtml(item.desc)}</p>
                </div>
                <div>
                    <div class="syllabus-difficulty">${escapeHtml(item.difficulty)}</div>
                    ${isEditMode ? `
                        <div class="item-actions-bar" style="margin-top:1rem;">
                            <button class="btn btn-sm btn-outline" onclick="openEditModal('syllabus', '${item.id}')">✏️ ערוך שיעור</button>
                            <button class="btn btn-sm btn-outline" onclick="deleteItem('syllabus', '${item.id}')">🗑️ מחק</button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}
