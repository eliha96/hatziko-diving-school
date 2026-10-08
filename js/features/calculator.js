/* ==========================================================================
   Hatziko Diving School - Anxiety & Depth Calculator Module
   ========================================================================== */

import { escapeHtml } from '../core/utils.js';
import { DEFAULT_DATA } from '../data/defaultData.js';
import { getState, getEditMode } from '../core/store.js';

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
    let maxDepth = (2.0 - (factor * 1.8)).toFixed(1);
    if (maxDepth < 0.2) maxDepth = "0.2";

    const calcDepth = document.getElementById('calc-depth');
    const calcZone = document.getElementById('calc-zone');
    const calcAdvice = document.getElementById('calc-advice');

    if (calcDepth) calcDepth.innerText = maxDepth + " מטר";

    if (calcZone && calcAdvice) {
        if (maxDepth >= 1.5) {
            calcZone.innerText = appState.calcZoneHigh || DEFAULT_DATA.calcZoneHigh;
            calcAdvice.innerText = appState.calcAdviceHigh || DEFAULT_DATA.calcAdviceHigh;
        } else if (maxDepth >= 0.8) {
            calcZone.innerText = appState.calcZoneMid || DEFAULT_DATA.calcZoneMid;
            calcAdvice.innerText = appState.calcAdviceMid || DEFAULT_DATA.calcAdviceMid;
        } else {
            calcZone.innerText = appState.calcZoneLow || DEFAULT_DATA.calcZoneLow;
            calcAdvice.innerText = appState.calcAdviceLow || DEFAULT_DATA.calcAdviceLow;
        }
    }
}

export function initCalculator() {
    renderCalculatorSliders(getState(), getEditMode());
}
