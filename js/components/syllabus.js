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
                    <button type="button" class="btn-syllabus-detail" onclick="openSyllabusDetailModal('${item.id}')">
                        <span>🔍 פרטים וטיפ הישרדות</span>
                    </button>
                    ${isEditMode ? `
                        <div class="item-actions-bar" style="margin-top:0.75rem;">
                            <button class="btn btn-sm btn-outline" onclick="openEditModal('syllabus', '${item.id}')">✏️ ערוך</button>
                            <button class="btn btn-sm btn-outline" onclick="deleteItem('syllabus', '${item.id}')">🗑️ מחק</button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

export function openSyllabusDetailModal(id) {
    const modal = document.getElementById('syllabus-detail-modal');
    if (!modal) return;

    const state = getState();
    const item = (state.syllabus || []).find(s => s.id === id);
    if (!item) return;

    const badgeEl = document.getElementById('syl-modal-badge');
    const titleEl = document.getElementById('syl-modal-title');
    const durationEl = document.getElementById('syl-modal-duration');
    const descEl = document.getElementById('syl-modal-desc');
    const diffEl = document.getElementById('syl-modal-difficulty');
    const gearEl = document.getElementById('syl-modal-gear');
    const tipEl = document.getElementById('syl-modal-tip');

    const partLabels = { pool: "חלק א' - בריכה 🏊‍♂️", sea: "חלק ב' - ים פתוח 🌊", final: "חלק ג' - סיום ותעודה 🏅" };

    if (badgeEl) badgeEl.innerText = `${partLabels[item.part] || 'שיעור'} | ${item.number || ''}`;
    if (titleEl) titleEl.innerText = item.title || '';
    if (durationEl) durationEl.innerText = item.duration ? `⏱️ משך הזמן: ${item.duration}` : '⏱️ עד שמישהו יתחרט';
    if (descEl) descEl.innerText = item.desc || '';
    if (diffEl) diffEl.innerText = item.difficulty || 'מותאם לחצי כוכב';

    const gearList = [
        "מצופי פלסטיק זוהרים, קפה שחור רותח, ומגבת יבשה ששמורה במרחק בטוח מהמים.",
        "שנורקל עם חור חסום (לתרגול מצבי חירום), כפכפי אצבע, וקרם הגנה 100+.",
        "בקבוק מים מינרליים (לשתייה בלבד, לא להיכנס אליהם), ואישור ויתור תביעות חתום.",
        "משקפת עם אדים בלתי ניתנים להסרה, חטיף אנרגיה חצי אכול, וחבר שיושב בצל וצוחק."
    ];
    const tipList = [
        "אם המים מגיעים מעל הברך - יש לפרוש מיד, לצעוק 'סיימתי את המכסה להיום' ולשוב למגבת.",
        "אין לנסות לפמפם באוזניים אם הראש מחוץ למים; זה רק גורם לעיוותי פנים משונים.",
        "חצי כוכב זה עדיין חצי יותר מאפס. אל תתנו למבטים המרחמים של המציל לערער אתכם.",
        "זכרו: כוכב הים אינו מעניק כוכבי צלילה, הוא סתם נח על החול ומקווה שלא ידרכו עליו."
    ];
    const hash = (item.title || '').length % gearList.length;
    if (gearEl) gearEl.innerText = gearList[hash];
    if (tipEl) tipEl.innerText = tipList[hash];

    modal.classList.remove('hidden');
}

export function closeSyllabusDetailModal() {
    const modal = document.getElementById('syllabus-detail-modal');
    if (modal) modal.classList.add('hidden');
}

export function initSyllabusDetailModal() {
    const closeBtn1 = document.getElementById('syllabus-detail-modal-close-btn');
    const closeBtn2 = document.getElementById('syllabus-detail-modal-close-btn2');
    if (closeBtn1) closeBtn1.addEventListener('click', closeSyllabusDetailModal);
    if (closeBtn2) closeBtn2.addEventListener('click', closeSyllabusDetailModal);

    const modal = document.getElementById('syllabus-detail-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeSyllabusDetailModal();
        });
    }
}
