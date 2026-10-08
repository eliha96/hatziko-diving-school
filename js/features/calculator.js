/* ==========================================================================
   Hatziko Diving School - Anxiety & Depth Calculator Module
   ========================================================================== */

import { escapeHtml } from '../core/utils.js';
import { DEFAULT_DATA } from '../data/defaultData.js';
import { getState, getEditMode } from '../core/store.js';

export const DEFAULT_CALC_LEVELS = [
    {
        maxFactor: 0.20,
        zone: "אחי, אתה סטרייט מדי",
        advice: "\"לך לך לאילת, תעשה צלילה חופשית ושהמחסור בחמצן יצדיק את מעט תאי המוח הפעילים שלך.\"",
        calcDepth: (f) => (2.0 - f * 2.5).toFixed(1) + " מטר"
    },
    {
        maxFactor: 0.40,
        zone: "בריכת פעוטות",
        advice: "\"כאן מיוצרת אמבה אוכלת מוח. עדיף להימנע, אם אפשר גם מלהביא פעוטות\"",
        calcDepth: (f) => (1.4 - (f - 0.2) * 3.0).toFixed(1) + " מטר"
    },
    {
        maxFactor: 0.60,
        zone: "גיגית במרפסת",
        advice: "\"מקום הראוי לבגדים לפני תלייה, או לתינוקות לפני המצאת האמבט. מומלץ להתרחק\"",
        calcDepth: (f) => (0.50 - (f - 0.4) * 1.0).toFixed(2) + " מטר"
    },
    {
        maxFactor: 0.80,
        zone: "שלולית בצד הכביש",
        advice: "\"אם מוחמד לא בא לשלולית האוטובוס יביא את השלולית למוחמד. תמיד עמוק יותר ממה שנראה ורטוב בגרביים למשך יום שלם.\"",
        calcDepth: (f) => (0.20 - (f - 0.6) * 0.5).toFixed(2) + " מטר"
    },
    {
        maxFactor: 1.01,
        zone: "ספונג'ת ריצפה",
        advice: "\"זהירות לא להחליק! מומלץ להצטייד בכפכפים ובבן זוג שיעשה את זה במקומך\"",
        calcDepth: (f) => {
            const val = (0.05 - (f - 0.8) * 0.2).toFixed(2);
            return (val < 0.01 ? "0.01" : val) + " מטר";
        }
    }
];

export function renderCalculatorSliders(appState, isEditMode) {
    const container = document.getElementById('calc-sliders-container');
    if (!container) return;

    if (!appState.calcSliders || appState.calcSliders.length === 0) {
        appState.calcSliders = JSON.parse(JSON.stringify(DEFAULT_DATA.calcSliders));
    }

    container.innerHTML = appState.calcSliders.map(item => `
        <div class="slider-group" data-id="${item.id}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <label for="slider-${item.id}" style="margin:0;">
                    <span class="slider-label-text">${escapeHtml(item.label)}</span>
                    <span id="val-${item.id}" class="slider-value">${item.value}%</span>
                </label>
                ${isEditMode ? `
                    <div class="item-actions-bar" style="margin:0; gap:0.3rem;">
                        <button class="btn btn-sm btn-outline" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="openEditModal('calcSlider', '${item.id}')">✏️</button>
                        <button class="btn btn-sm btn-outline" style="padding:0.1rem 0.4rem; font-size:0.75rem;" onclick="deleteItem('calcSlider', '${item.id}')">🗑️</button>
                    </div>
                ` : ''}
            </div>
            <input type="range" id="slider-${item.id}" min="0" max="100" value="${item.value}" oninput="updateCalculatorResult()">
        </div>
    `).join('');

    updateCalculatorResult();
}

export function updateCalculatorResult() {
    const appState = getState();
    if (!appState.calcSliders || appState.calcSliders.length === 0) return;

    let totalWeight = 0;
    let weightedSum = 0;

    appState.calcSliders.forEach(item => {
        const sliderEl = document.getElementById(`slider-${item.id}`);
        const valEl = document.getElementById(`val-${item.id}`);
        const val = sliderEl ? parseInt(sliderEl.value) : (item.value || 50);
        item.value = val;
        if (valEl) valEl.innerText = val + '%';

        const weight = (typeof item.weight === 'number' && !isNaN(item.weight)) ? item.weight : 1;
        weightedSum += val * weight;
        totalWeight += weight;
    });

    const factor = totalWeight > 0 ? (weightedSum / (100 * totalWeight)) : 0.5;

    const customLevels = (appState.calcLevels && appState.calcLevels.length === 5)
        ? appState.calcLevels
        : null;

    let chosenIdx = 4;
    for (let i = 0; i < DEFAULT_CALC_LEVELS.length; i++) {
        if (factor <= DEFAULT_CALC_LEVELS[i].maxFactor) {
            chosenIdx = i;
            break;
        }
    }

    const defaultLevel = DEFAULT_CALC_LEVELS[chosenIdx];
    const zoneName = (customLevels && customLevels[chosenIdx] && customLevels[chosenIdx].zone)
        ? customLevels[chosenIdx].zone
        : defaultLevel.zone;

    const adviceText = (customLevels && customLevels[chosenIdx] && customLevels[chosenIdx].advice)
        ? customLevels[chosenIdx].advice
        : defaultLevel.advice;

    const depthText = defaultLevel.calcDepth(factor);

    const calcDepth = document.getElementById('calc-depth');
    const calcZone = document.getElementById('calc-zone');
    const calcAdvice = document.getElementById('calc-advice');

    if (calcDepth) calcDepth.innerText = depthText;
    if (calcZone) calcZone.innerText = zoneName;
    if (calcAdvice) calcAdvice.innerText = adviceText;
}

export function openDepthLevelsModal() {
    const modal = document.getElementById('depth-levels-modal');
    const listEl = document.getElementById('depth-zones-modal-list');
    if (!modal || !listEl) return;

    const state = getState();
    const customLevels = (state.calcLevels && state.calcLevels.length === 5)
        ? state.calcLevels
        : null;

    listEl.innerHTML = DEFAULT_CALC_LEVELS.map((level, idx) => {
        const zone = (customLevels && customLevels[idx] && customLevels[idx].zone) || level.zone;
        const advice = (customLevels && customLevels[idx] && customLevels[idx].advice) || level.advice;
        const sampleDepth = level.calcDepth(Math.max(0.01, level.maxFactor - 0.08));

        return `
            <div class="depth-zone-item">
                <div class="depth-zone-head">
                    <span class="depth-zone-name">#${idx + 1} ${escapeHtml(zone)}</span>
                    <span class="depth-zone-meter">📏 עד ${sampleDepth}</span>
                </div>
                <div class="depth-zone-advice">${escapeHtml(advice)}</div>
            </div>
        `;
    }).join('');

    modal.classList.remove('hidden');
}

export function closeDepthLevelsModal() {
    const modal = document.getElementById('depth-levels-modal');
    if (modal) modal.classList.add('hidden');
}

export function initCalculator() {
    renderCalculatorSliders(getState(), getEditMode());

    const btnShow = document.getElementById('btn-show-depth-zones');
    if (btnShow) btnShow.addEventListener('click', openDepthLevelsModal);

    const closeBtn = document.getElementById('depth-levels-modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeDepthLevelsModal);

    const okBtn = document.getElementById('depth-levels-modal-ok-btn');
    if (okBtn) okBtn.addEventListener('click', closeDepthLevelsModal);

    const modal = document.getElementById('depth-levels-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeDepthLevelsModal();
        });
    }
}
