/* ==========================================================================
   Hatziko Diving School - Dynamic Edit Engine & Modals Module
   ========================================================================== */

import { escapeHtml, getStarCount, updateCharCounter } from '../core/utils.js';
import { getState, setState, getEditMode, setEditMode, saveData, resetData } from '../core/store.js';
import { updateCertReasonDisplay, isCustomReason } from './certificate.js';
import { setSyllabusTab } from '../components/syllabus.js';

let editingModalItemType = null;
let editingModalItemId = null;
let globalRenderAllCallback = null;

export function setRenderAllCallback(fn) {
    globalRenderAllCallback = fn;
}

function triggerRenderAll() {
    if (typeof globalRenderAllCallback === 'function') {
        globalRenderAllCallback();
    }
}

// Reordering functions
export function moveItem(type, id, direction) {
    const appState = getState();
    let list = null;
    if (type === 'testimonial' || type === 'testimonials') list = appState.testimonials;
    else if (type === 'stat' || type === 'stats') list = appState.stats;
    else if (type === 'calcSlider' || type === 'calcSliders') list = appState.calcSliders;
    else if (type === 'syllabus') list = appState.syllabus;
    else if (type === 'faq' || type === 'faqs') list = appState.faqs;

    if (!list) return;
    const idx = list.findIndex(x => x.id === id);
    if (idx === -1) return;

    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= list.length) return;

    const [item] = list.splice(idx, 1);
    list.splice(targetIdx, 0, item);

    saveData();
    triggerRenderAll();
}

export function moveModalRow(btn, direction) {
    const row = btn.closest('.modal-reorder-row') || btn.closest('.form-group');
    if (!row) return;
    if (direction === -1) {
        const prev = row.previousElementSibling;
        if (prev) {
            row.parentNode.insertBefore(row, prev);
        }
    } else if (direction === 1) {
        const next = row.nextElementSibling;
        if (next) {
            row.parentNode.insertBefore(next, row);
        }
    }
}

window.moveItem = moveItem;
window.moveModalRow = moveModalRow;

// Update Logo and Hero Image Sources
export function renderImages(appState) {
    const mainLogo = document.getElementById('main-logo-img');
    const heroLogo = document.getElementById('hero-logo-img');
    const certLogo = document.getElementById('cert-logo-img');
    const footerLogo = document.getElementById('footer-logo-img');
    const mainHero = document.getElementById('main-hero-img');

    const logoUrl = appState.logoSrc || 'assets/new-transparent-logo.png';
    const heroUrl = appState.heroSrc || 'assets/hero-new.jfif';

    if (mainLogo) mainLogo.src = logoUrl;
    if (heroLogo) heroLogo.src = logoUrl;
    if (certLogo) certLogo.src = logoUrl;
    if (footerLogo) footerLogo.src = logoUrl;
    if (mainHero) mainHero.src = heroUrl;
}

// Render Simple Editable Text Elements & Placeholders
export function renderStaticText(appState, isEditMode) {
    document.querySelectorAll('.editable').forEach(el => {
        const key = el.getAttribute('data-key');
        if (key && appState[key] !== undefined) {
            if (key === 'heroBadge' || (typeof appState[key] === 'string' && appState[key].includes('<img'))) {
                el.innerHTML = appState[key];
            } else {
                el.innerText = appState[key];
            }
        }

        if (isEditMode) {
            el.contentEditable = "true";
            el.title = "לחץ לעריכה";
            el.onblur = () => {
                appState[key] = el.innerText.trim();
                saveData();
                if (key === 'certDocBodyPrefix') {
                    updateCertReasonDisplay();
                }
                if (key === 'certNameDefault') {
                    const certNameInput = document.getElementById('cert-name-input');
                    if (certNameInput) certNameInput.value = appState.certNameDefault;
                }
            };
        } else {
            el.contentEditable = "false";
            el.title = "";
            el.onblur = null;
        }
    });

    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-key-placeholder');
        if (key && appState[key] !== undefined) {
            el.placeholder = appState[key];
        }
    });

    // Sync certificate recipient input with default
    const certNameInput = document.getElementById('cert-name-input');
    if (certNameInput && appState.certNameDefault) {
        if (!certNameInput.value || certNameInput.value === "אלופה עם בעיות אוזניים") {
            certNameInput.value = appState.certNameDefault;
        }
        certNameInput.placeholder = appState.certNameDefault;
    }
}

// Render Select Dropdown Options Dynamically
export function renderDropdownOptions(appState) {
    const certReasonSelect = document.getElementById('cert-reason-select');
    if (certReasonSelect && appState.certReasons) {
        const currentVal = certReasonSelect.value;
        certReasonSelect.innerHTML = appState.certReasons.map(r => 
            `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`
        ).join('');
        if (currentVal && appState.certReasons.includes(currentVal)) {
            certReasonSelect.value = currentVal;
        } else if (appState.certReasonDefault && appState.certReasons.includes(appState.certReasonDefault)) {
            certReasonSelect.value = appState.certReasonDefault;
        }
        updateCertReasonDisplay();
    }

    const regReasonSelect = document.getElementById('reg-reason');
    if (regReasonSelect && appState.regReasons) {
        const currentVal = regReasonSelect.value;
        regReasonSelect.innerHTML = appState.regReasons.map(item => {
            const label = typeof item === 'object' ? item.label : item;
            return `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`;
        }).join('');
        if (currentVal && appState.regReasons.some(x => (typeof x === 'object' ? x.label : x) === currentVal)) {
            regReasonSelect.value = currentVal;
        } else if (appState.regReasonDefault) {
            regReasonSelect.value = appState.regReasonDefault;
        }

        const regCustomGroup = document.getElementById('reg-custom-reason-group');
        if (regCustomGroup) {
            if (isCustomReason(regReasonSelect.value)) {
                regCustomGroup.classList.remove('hidden');
            } else {
                regCustomGroup.classList.add('hidden');
            }
        }
    }

    const regMotSelect = document.getElementById('reg-motivation');
    if (regMotSelect && appState.regMotivations) {
        const currentVal = regMotSelect.value;
        regMotSelect.innerHTML = appState.regMotivations.map(item => {
            const label = typeof item === 'object' ? item.label : item;
            return `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`;
        }).join('');
        if (currentVal && appState.regMotivations.some(x => (typeof x === 'object' ? x.label : x) === currentVal)) {
            regMotSelect.value = currentVal;
        } else if (appState.regMotivationDefault) {
            regMotSelect.value = appState.regMotivationDefault;
        }
    }
}

// Edit Modal Functions
export function openEditModal(type, id = null) {
    editingModalItemType = type;
    editingModalItemId = id;
    const appState = getState();
    const modal = document.getElementById('edit-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    let item = null;
    if (id) {
        if (type === 'stat') item = appState.stats.find(x => x.id === id);
        if (type === 'calcSlider') item = appState.calcSliders.find(x => x.id === id);
        if (type === 'syllabus') item = appState.syllabus.find(x => x.id === id);
        if (type === 'testimonial') item = appState.testimonials.find(x => x.id === id);
        if (type === 'faq') item = appState.faqs.find(x => x.id === id);
    }

    if (type === 'stat') {
        modalTitle.innerText = id ? "עריכת מדד/מספר" : "הוספת מדד/מספר חדש";
        modalBody.innerHTML = `
            <div class="form-group">
                <label>ערך/מספר (למשל: 0.5, 100%, 0):</label>
                <input type="text" id="m-stat-number" class="form-control" value="${item ? escapeHtml(item.number) : '100%'}">
            </div>
            <div class="form-group">
                <label>תיאור/תווית (למשל: הפסקות קפה):</label>
                <input type="text" id="m-stat-label" class="form-control" value="${item ? escapeHtml(item.label) : 'מדד חדש'}">
            </div>
        `;
    } else if (type === 'calcSlider') {
        modalTitle.innerText = id ? "עריכת מדד במחשבון" : "הוספת מדד חדש למחשבון";
        modalBody.innerHTML = `
            <div class="form-group">
                <label>תווית/שם המדד (כולל אימוג'י):</label>
                <input type="text" id="m-calc-label" class="form-control" value="${item ? escapeHtml(item.label) : '🦈 פחד מכרישים דמיוניים:'}">
            </div>
            <div class="form-group">
                <label>ערך ברירת מחדל (0-100%):</label>
                <input type="number" id="m-calc-val" class="form-control" min="0" max="100" value="${item ? item.value : 50}">
            </div>
            <div class="form-group">
                <label>משקל/השפעה על המחשבון (למשל 1, 0.5, 2):</label>
                <input type="number" step="0.1" id="m-calc-weight" class="form-control" value="${item ? (item.weight || 1) : 1}">
            </div>
        `;
    } else if (type === 'syllabus') {
        const selectedPart = item ? (item.part || 'pool') : 'pool';
        modalTitle.innerText = id ? "עריכת שיעור בתוכנית" : "הוספת שיעור בתוכנית";
        modalBody.innerHTML = `
            <div class="form-group">
                <label>חלק / קטגוריה בסילבוס:</label>
                <select id="m-part" class="form-control">
                    <option value="pool" ${selectedPart === 'pool' ? 'selected' : ''}>חלק א': בריכה (תכלת)</option>
                    <option value="sea" ${selectedPart === 'sea' ? 'selected' : ''}>חלק ב': ים (טורקיז)</option>
                    <option value="final" ${selectedPart === 'final' ? 'selected' : ''}>חלק ג': כישלון מסכם ותעודה (כתום)</option>
                </select>
            </div>
            <div class="form-group">
                <label>מספר/כותרת קטנה (למשל: שיעור 1, שיעור מסכם):</label>
                <input type="text" id="m-number" class="form-control" value="${item ? (item.number || 'שיעור') : 'שיעור'}">
            </div>
            <div class="form-group">
                <label>כותרת השיעור:</label>
                <input type="text" id="m-title" class="form-control" value="${item ? item.title : ''}">
            </div>
            <div class="form-group">
                <label>משך זמן:</label>
                <input type="text" id="m-duration" class="form-control" value="${item ? (item.duration || '20 דקות') : '20 דקות'}">
            </div>
            <div class="form-group">
                <label>פירוט השיעור:</label>
                <textarea id="m-desc" class="form-control" rows="3">${item ? item.desc : ''}</textarea>
            </div>
            <div class="form-group">
                <label>רמת קושי:</label>
                <input type="text" id="m-difficulty" class="form-control" value="${item ? item.difficulty : 'רמת קושי: קלה ביותר'}">
            </div>
        `;
    } else if (type === 'testimonial') {
        const starsCount = item ? getStarCount(item.stars) : 3;
        const textVal = item ? (item.text || '') : '';
        modalTitle.innerText = id ? "עריכת המלצה" : "הוספת המלצה חדשה";
        modalBody.innerHTML = `
            <div class="form-group">
                <label>שם הממליץ/ה:</label>
                <input type="text" id="m-name" class="form-control" value="${item ? escapeHtml(item.name) : ''}">
            </div>
            <div class="form-group">
                <label>תפקיד/תיאור:</label>
                <input type="text" id="m-role" class="form-control" value="${item ? escapeHtml(item.role) : 'חצי-בוגר/ת מחזור א'}">
            </div>
            <div class="form-group">
                <label>מספר חצאי כוכבים (למשל: 1, 2, 3, 4, 5):</label>
                <input type="number" id="m-stars-count" class="form-control" min="1" max="10" value="${starsCount}">
                <small style="color:var(--text-secondary); font-size:0.8rem;">הזן מספר – תמונת חצי הכוכב תופיע כמספר הפעמים שתבחר.</small>
            </div>
            <div class="form-group" style="margin-top:1rem;">
                <label>תוכן ההמלצה (עד 500 תווים / כ-80 מילים):</label>
                <textarea id="m-text" class="form-control" rows="4" maxlength="500" oninput="updateCharCounter(this)">${escapeHtml(textVal)}</textarea>
                <div id="char-counter" style="font-size:0.8rem; color:var(--text-secondary); text-align:left; margin-top:0.35rem;">
                    <span id="char-count">${textVal.length}</span> / 500 תווים (עד 80 מילים)
                </div>
            </div>
        `;
    } else if (type === 'faq') {
        modalTitle.innerText = id ? "עריכת שאלה" : "הוספת שאלה חדשה";
        modalBody.innerHTML = `
            <div class="form-group">
                <label>השאלה:</label>
                <input type="text" id="m-question" class="form-control" value="${item ? item.question : ''}">
            </div>
            <div class="form-group">
                <label>התשובה הכנה:</label>
                <textarea id="m-answer" class="form-control" rows="3">${item ? item.answer : ''}</textarea>
            </div>
        `;
    } else if (type === 'certReasons') {
        modalTitle.innerText = "עריכת סיבות פרישה (תעודה)";
        const optionsList = appState.certReasons || [];
        modalBody.innerHTML = `
            <p style="color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem;">ערוך, הוסף, מחק או שנה את הסדר (באמצעות החצים ⬆️ ⬇️) של סיבות הפרישה שיופיעו בתיבת הבחירה של מחולל התעודות:</p>
            <div id="m-cert-reasons-list">
                ${optionsList.map(opt => `
                    <div class="form-group modal-reorder-row" style="display:flex; gap:0.4rem; align-items:center; margin-bottom:0.5rem;">
                        <button type="button" class="btn btn-sm btn-outline" title="הזז למעלה" onclick="moveModalRow(this, -1)" style="padding:0.25rem 0.5rem;">⬆️</button>
                        <button type="button" class="btn btn-sm btn-outline" title="הזז למטה" onclick="moveModalRow(this, 1)" style="padding:0.25rem 0.5rem;">⬇️</button>
                        <input type="text" class="form-control m-cert-opt-input" value="${escapeHtml(opt)}" style="flex:1;">
                        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444; padding:0.25rem 0.5rem;" onclick="this.parentElement.remove()" title="מחק">🗑️</button>
                    </div>
                `).join('')}
            </div>
            <button type="button" class="btn btn-sm btn-outline" style="margin-top:0.5rem;" onclick="addCertReasonRow()">➕ הוסף סיבת פרישה חדשה</button>
        `;
    } else if (type === 'regReasons') {
        modalTitle.innerText = "עריכת סיבות פרישה משוערות (טופס הרשמה)";
        const optionsList = appState.regReasons || [];
        modalBody.innerHTML = `
            <p style="color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem;">ערוך, הוסף, מחק או שנה את הסדר (באמצעות החצים ⬆️ ⬇️) של סיבות הפרישה בטופס ההרשמה:</p>
            <div id="m-reg-reasons-list">
                ${optionsList.map(item => {
                    const val = typeof item === 'object' ? item.label : item;
                    return `
                        <div class="form-group modal-reorder-row" style="display:flex; gap:0.4rem; align-items:center; margin-bottom:0.5rem;">
                            <button type="button" class="btn btn-sm btn-outline" title="הזז למעלה" onclick="moveModalRow(this, -1)" style="padding:0.25rem 0.5rem;">⬆️</button>
                            <button type="button" class="btn btn-sm btn-outline" title="הזז למטה" onclick="moveModalRow(this, 1)" style="padding:0.25rem 0.5rem;">⬇️</button>
                            <input type="text" class="form-control m-reg-opt-input" value="${escapeHtml(val)}" style="flex:1;">
                            <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444; padding:0.25rem 0.5rem;" onclick="this.parentElement.remove()" title="מחק">🗑️</button>
                        </div>
                    `;
                }).join('')}
            </div>
            <button type="button" class="btn btn-sm btn-outline" style="margin-top:0.5rem;" onclick="addRegReasonRow()">➕ הוסף אפשרות חדשה</button>
        `;
    } else if (type === 'regMotivations') {
        modalTitle.innerText = "עריכת רמות מוטיבציה (טופס הרשמה)";
        const optionsList = appState.regMotivations || [];
        modalBody.innerHTML = `
            <p style="color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem;">ערוך, הוסף, מחק או שנה את הסדר (באמצעות החצים ⬆️ ⬇️) של רמות המוטיבציה בטופס ההרשמה:</p>
            <div id="m-reg-mot-list">
                ${optionsList.map(item => {
                    const val = typeof item === 'object' ? item.label : item;
                    return `
                        <div class="form-group modal-reorder-row" style="display:flex; gap:0.4rem; align-items:center; margin-bottom:0.5rem;">
                            <button type="button" class="btn btn-sm btn-outline" title="הזז למעלה" onclick="moveModalRow(this, -1)" style="padding:0.25rem 0.5rem;">⬆️</button>
                            <button type="button" class="btn btn-sm btn-outline" title="הזז למטה" onclick="moveModalRow(this, 1)" style="padding:0.25rem 0.5rem;">⬇️</button>
                            <input type="text" class="form-control m-mot-opt-input" value="${escapeHtml(val)}" style="flex:1;">
                            <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444; padding:0.25rem 0.5rem;" onclick="this.parentElement.remove()" title="מחק">🗑️</button>
                        </div>
                    `;
                }).join('')}
            </div>
            <button type="button" class="btn btn-sm btn-outline" style="margin-top:0.5rem;" onclick="addRegMotRow()">➕ הוסף אפשרות חדשה</button>
        `;
    } else if (type === 'certDefaults') {
        modalTitle.innerText = "עריכת ערכי ברירת מחדל של התעודה";
        const reasons = appState.certReasons || [];
        const curDefReason = appState.certReasonDefault || (reasons[0] || '');
        modalBody.innerHTML = `
            <div class="form-group">
                <label>שם ברירת מחדל למקבל/ת התעודה:</label>
                <input type="text" id="m-cert-name-default" class="form-control" value="${escapeHtml(appState.certNameDefault || 'אלופה עם בעיות אוזניים')}">
            </div>
            <div class="form-group">
                <label>סיבת פרישה נבחרת כברירת מחדל:</label>
                <select id="m-cert-reason-default" class="form-control">
                    ${reasons.map(r => `<option value="${escapeHtml(r)}" ${r === curDefReason ? 'selected' : ''}>${escapeHtml(r)}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>כותרת התעודה (מסמך):</label>
                <input type="text" id="m-cert-doc-title" class="form-control" value="${escapeHtml(appState.certDocTitle || 'תעודת חצי כוכב רשמית')}">
            </div>
            <div class="form-group">
                <label>פסקת פתיחה ("מוענקת בזאת..."):</label>
                <input type="text" id="m-cert-doc-to-text" class="form-control" value="${escapeHtml(appState.certDocToText || 'תעודה זו מוענקת בזאת בגאווה רבה ל:')}">
            </div>
            <div class="form-group">
                <label>טקסט גוף התעודה (לפני סיבת הפרישה):</label>
                <textarea id="m-cert-body-prefix" class="form-control" rows="3">${escapeHtml(appState.certDocBodyPrefix || '')}</textarea>
            </div>
            <div class="form-group">
                <label>חתימת מדריך:</label>
                <input type="text" id="m-cert-sig1" class="form-control" value="${escapeHtml(appState.certDocSig1 || 'חזיכו - מדריך ראשי')}">
            </div>
            <div class="form-group">
                <label>טקסט חותמת:</label>
                <input type="text" id="m-cert-seal" class="form-control" value="${escapeHtml(appState.certDocSeal || 'חצי מוכר')}">
            </div>
        `;
    } else if (type === 'regDefaults') {
        modalTitle.innerText = "עריכת ערכי ברירת מחדל של טופס ההרשמה";
        const reasons = (appState.regReasons || []).map(r => typeof r === 'object' ? r.label : r);
        const mots = (appState.regMotivations || []).map(m => typeof m === 'object' ? m.label : m);
        const curDefReason = appState.regReasonDefault || (reasons[0] || '');
        const curDefMot = appState.regMotivationDefault || (mots[0] || '');

        modalBody.innerHTML = `
            <div class="form-group">
                <label>טקסט מנחה (Placeholder) לשם מלא:</label>
                <input type="text" id="m-reg-name-ph" class="form-control" value="${escapeHtml(appState.regNamePlaceholder || 'ישראל ישראלי')}">
            </div>
            <div class="form-group">
                <label>טקסט מנחה (Placeholder) לטלפון:</label>
                <input type="text" id="m-reg-phone-ph" class="form-control" value="${escapeHtml(appState.regPhonePlaceholder || '050-0000000')}">
            </div>
            <div class="form-group">
                <label>טקסט מנחה (Placeholder) להערות מיוחדות:</label>
                <textarea id="m-reg-notes-ph" class="form-control" rows="2">${escapeHtml(appState.regNotesPlaceholder || '')}</textarea>
            </div>
            <div class="form-group">
                <label>סיבת פרישה נבחרת כברירת מחדל:</label>
                <select id="m-reg-reason-default" class="form-control">
                    ${reasons.map(r => `<option value="${escapeHtml(r)}" ${r === curDefReason ? 'selected' : ''}>${escapeHtml(r)}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>רמת מוטיבציה נבחרת כברירת מחדל:</label>
                <select id="m-reg-mot-default" class="form-control">
                    ${mots.map(m => `<option value="${escapeHtml(m)}" ${m === curDefMot ? 'selected' : ''}>${escapeHtml(m)}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>טקסט כפתור השליחה:</label>
                <input type="text" id="m-reg-btn-text" class="form-control" value="${escapeHtml(appState.registerBtnText || 'שגרו בקשה (בלי לחץ)')}">
            </div>
        `;
    }

    modal.classList.remove('hidden');
}

export function addCertReasonRow() {
    const list = document.getElementById('m-cert-reasons-list');
    if (!list) return;
    const div = document.createElement('div');
    div.className = 'form-group modal-reorder-row';
    div.style.cssText = 'display:flex; gap:0.4rem; align-items:center; margin-bottom:0.5rem;';
    div.innerHTML = `
        <button type="button" class="btn btn-sm btn-outline" title="הזז למעלה" onclick="moveModalRow(this, -1)" style="padding:0.25rem 0.5rem;">⬆️</button>
        <button type="button" class="btn btn-sm btn-outline" title="הזז למטה" onclick="moveModalRow(this, 1)" style="padding:0.25rem 0.5rem;">⬇️</button>
        <input type="text" class="form-control m-cert-opt-input" placeholder="סיבת פרישה חדשה..." value="" style="flex:1;">
        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444; padding:0.25rem 0.5rem;" onclick="this.parentElement.remove()" title="מחק">🗑️</button>
    `;
    list.appendChild(div);
}

export function addRegReasonRow() {
    const list = document.getElementById('m-reg-reasons-list');
    if (!list) return;
    const div = document.createElement('div');
    div.className = 'form-group modal-reorder-row';
    div.style.cssText = 'display:flex; gap:0.4rem; align-items:center; margin-bottom:0.5rem;';
    div.innerHTML = `
        <button type="button" class="btn btn-sm btn-outline" title="הזז למעלה" onclick="moveModalRow(this, -1)" style="padding:0.25rem 0.5rem;">⬆️</button>
        <button type="button" class="btn btn-sm btn-outline" title="הזז למטה" onclick="moveModalRow(this, 1)" style="padding:0.25rem 0.5rem;">⬇️</button>
        <input type="text" class="form-control m-reg-opt-input" placeholder="אפשרות חדשה..." value="" style="flex:1;">
        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444; padding:0.25rem 0.5rem;" onclick="this.parentElement.remove()" title="מחק">🗑️</button>
    `;
    list.appendChild(div);
}

export function addRegMotRow() {
    const list = document.getElementById('m-reg-mot-list');
    if (!list) return;
    const div = document.createElement('div');
    div.className = 'form-group modal-reorder-row';
    div.style.cssText = 'display:flex; gap:0.4rem; align-items:center; margin-bottom:0.5rem;';
    div.innerHTML = `
        <button type="button" class="btn btn-sm btn-outline" title="הזז למעלה" onclick="moveModalRow(this, -1)" style="padding:0.25rem 0.5rem;">⬆️</button>
        <button type="button" class="btn btn-sm btn-outline" title="הזז למטה" onclick="moveModalRow(this, 1)" style="padding:0.25rem 0.5rem;">⬇️</button>
        <input type="text" class="form-control m-mot-opt-input" placeholder="אפשרות חדשה..." value="" style="flex:1;">
        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444; padding:0.25rem 0.5rem;" onclick="this.parentElement.remove()" title="מחק">🗑️</button>
    `;
    list.appendChild(div);
}

export function closeModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) modal.classList.add('hidden');
    editingModalItemType = null;
    editingModalItemId = null;
}

export function saveModalItem() {
    const appState = getState();
    const type = editingModalItemType;
    const id = editingModalItemId || 'item_' + Date.now();

    if (type === 'certReasons') {
        const inputs = document.querySelectorAll('.m-cert-opt-input');
        const newReasons = Array.from(inputs).map(inp => inp.value.trim()).filter(v => v.length > 0);
        if (newReasons.length > 0) {
            appState.certReasons = newReasons;
        }
    } else if (type === 'regReasons') {
        const inputs = document.querySelectorAll('.m-reg-opt-input');
        const newReasons = Array.from(inputs).map((inp, idx) => ({ id: 'rr_' + idx, label: inp.value.trim() })).filter(x => x.label.length > 0);
        if (newReasons.length > 0) {
            appState.regReasons = newReasons;
        }
    } else if (type === 'regMotivations') {
        const inputs = document.querySelectorAll('.m-mot-opt-input');
        const newMots = Array.from(inputs).map((inp, idx) => ({ id: 'rm_' + idx, label: inp.value.trim() })).filter(x => x.label.length > 0);
        if (newMots.length > 0) {
            appState.regMotivations = newMots;
        }
    } else if (type === 'certDefaults') {
        const nameDef = document.getElementById('m-cert-name-default');
        const reasonDef = document.getElementById('m-cert-reason-default');
        const titleDef = document.getElementById('m-cert-doc-title');
        const toDef = document.getElementById('m-cert-doc-to-text');
        const bodyDef = document.getElementById('m-cert-body-prefix');
        const sigDef = document.getElementById('m-cert-sig1');
        const sealDef = document.getElementById('m-cert-seal');

        if (nameDef) appState.certNameDefault = nameDef.value.trim();
        if (reasonDef) appState.certReasonDefault = reasonDef.value;
        if (titleDef) appState.certDocTitle = titleDef.value.trim();
        if (toDef) appState.certDocToText = toDef.value.trim();
        if (bodyDef) appState.certDocBodyPrefix = bodyDef.value;
        if (sigDef) appState.certDocSig1 = sigDef.value.trim();
        if (sealDef) appState.certDocSeal = sealDef.value.trim();

        // Update active input and display
        const certNameInput = document.getElementById('cert-name-input');
        const certDisplayName = document.getElementById('cert-display-name');
        if (certNameInput) certNameInput.value = appState.certNameDefault;
        if (certDisplayName) certDisplayName.innerText = appState.certNameDefault;
    } else if (type === 'regDefaults') {
        const namePh = document.getElementById('m-reg-name-ph');
        const phonePh = document.getElementById('m-reg-phone-ph');
        const notesPh = document.getElementById('m-reg-notes-ph');
        const reasonDef = document.getElementById('m-reg-reason-default');
        const motDef = document.getElementById('m-reg-mot-default');
        const btnText = document.getElementById('m-reg-btn-text');

        if (namePh) appState.regNamePlaceholder = namePh.value;
        if (phonePh) appState.regPhonePlaceholder = phonePh.value;
        if (notesPh) appState.regNotesPlaceholder = notesPh.value;
        if (reasonDef) appState.regReasonDefault = reasonDef.value;
        if (motDef) appState.regMotivationDefault = motDef.value;
        if (btnText) appState.registerBtnText = btnText.value;
    } else if (type === 'stat') {
        const newItem = {
            id,
            number: document.getElementById('m-stat-number').value,
            label: document.getElementById('m-stat-label').value
        };
        if (editingModalItemId) {
            const idx = appState.stats.findIndex(x => x.id === id);
            appState.stats[idx] = newItem;
        } else {
            appState.stats.push(newItem);
        }
    } else if (type === 'calcSlider') {
        const newItem = {
            id,
            label: document.getElementById('m-calc-label').value,
            value: parseInt(document.getElementById('m-calc-val').value) || 50,
            weight: parseFloat(document.getElementById('m-calc-weight').value) || 1
        };
        if (editingModalItemId) {
            const idx = appState.calcSliders.findIndex(x => x.id === id);
            appState.calcSliders[idx] = newItem;
        } else {
            appState.calcSliders.push(newItem);
        }
    } else if (type === 'syllabus') {
        const newItem = {
            id,
            part: document.getElementById('m-part').value,
            number: document.getElementById('m-number').value,
            title: document.getElementById('m-title').value,
            duration: document.getElementById('m-duration').value,
            desc: document.getElementById('m-desc').value,
            difficulty: document.getElementById('m-difficulty').value
        };
        if (editingModalItemId) {
            const idx = appState.syllabus.findIndex(x => x.id === id);
            appState.syllabus[idx] = newItem;
        } else {
            appState.syllabus.push(newItem);
        }
        setSyllabusTab(newItem.part);
        document.querySelectorAll('.syllabus-tab').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-part') === newItem.part);
        });
    } else if (type === 'testimonial') {
        const countVal = parseInt(document.getElementById('m-stars-count').value) || 1;
        const newItem = {
            id,
            name: document.getElementById('m-name').value,
            role: document.getElementById('m-role').value,
            stars: countVal,
            text: document.getElementById('m-text').value
        };
        if (editingModalItemId) {
            const idx = appState.testimonials.findIndex(x => x.id === id);
            appState.testimonials[idx] = newItem;
        } else {
            if (appState.testimonials && appState.testimonials.length >= 5) {
                alert("ניתן להוסיף עד 5 המלצות בסך הכל (כדי לשמור על מראה מאוזן ומהודק).");
                return;
            }
            appState.testimonials.push(newItem);
        }
    } else if (type === 'faq') {
        const newItem = {
            id,
            question: document.getElementById('m-question').value,
            answer: document.getElementById('m-answer').value
        };
        if (editingModalItemId) {
            const idx = appState.faqs.findIndex(x => x.id === id);
            appState.faqs[idx] = newItem;
        } else {
            appState.faqs.push(newItem);
        }
    }

    saveData();
    triggerRenderAll();
    closeModal();
}

export function deleteItem(type, id) {
    if (!confirm("בטוח שברצונך למחוק פריט זה?")) return;
    const appState = getState();

    if (type === 'stat') appState.stats = appState.stats.filter(x => x.id !== id);
    if (type === 'calcSlider') {
        if (appState.calcSliders.length <= 1) {
            alert("חובה להשאיר לפחות מדד אחד במחשבון.");
            return;
        }
        appState.calcSliders = appState.calcSliders.filter(x => x.id !== id);
    }
    if (type === 'syllabus') appState.syllabus = appState.syllabus.filter(x => x.id !== id);
    if (type === 'testimonial') appState.testimonials = appState.testimonials.filter(x => x.id !== id);
    if (type === 'faq') appState.faqs = appState.faqs.filter(x => x.id !== id);
    
    saveData();
    triggerRenderAll();
}

// Image Modal Engine
export function initImageModal() {
    const changeImgBtn = document.getElementById('btn-change-images');
    const modal = document.getElementById('images-modal');
    const closeBtn = document.getElementById('images-modal-close-btn');
    const cancelBtn = document.getElementById('images-modal-cancel-btn');
    const saveBtn = document.getElementById('images-modal-save-btn');

    const logoPathInput = document.getElementById('custom-logo-path');
    const heroPathInput = document.getElementById('custom-hero-path');

    if (changeImgBtn && modal) {
        changeImgBtn.addEventListener('click', () => {
            const appState = getState();
            if (logoPathInput) logoPathInput.value = appState.logoSrc || 'assets/new-transparent-logo.png';
            if (heroPathInput) heroPathInput.value = appState.heroSrc || 'assets/hero-new.jfif';
            modal.classList.remove('hidden');
        });
    }

    if (closeBtn && modal) closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    if (cancelBtn && modal) cancelBtn.addEventListener('click', () => modal.classList.add('hidden'));

    if (saveBtn && modal) {
        saveBtn.addEventListener('click', () => {
            const appState = getState();
            appState.logoSrc = logoPathInput.value.trim() || 'assets/new-transparent-logo.png';
            appState.heroSrc = heroPathInput.value.trim() || 'assets/hero-new.jfif';
            saveData();
            triggerRenderAll();
            modal.classList.add('hidden');
            alert("התמונות עודכנו בהצלחה!");
        });
    }
}

// Setup Event Listeners for Edit Mode Toolbar and Modals
export function setupEditEventListeners(renderAll) {
    setRenderAllCallback(renderAll);

    const toggleBtn = document.getElementById('toggle-edit-mode');
    const editBar = document.getElementById('edit-mode-bar');

    if (toggleBtn && editBar) {
        toggleBtn.addEventListener('click', () => {
            const active = !getEditMode();
            setEditMode(active);
            document.body.classList.toggle('in-edit-mode', active);
            editBar.classList.toggle('hidden', !active);
            
            const txt = document.getElementById('edit-toggle-text');
            const icon = document.getElementById('edit-toggle-icon');
            if (txt) txt.innerText = active ? "מצב תצוגה" : "מצב עריכה";
            if (icon) icon.innerText = active ? "👁️" : "✏️";
            
            renderAll();
        });
    }

    const saveBtn = document.getElementById('btn-save-data');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            saveData();
            alert("כל השינויים נשמרו בהצלחה בדפדפן! 🎉");
        });
    }

    const exportBtn = document.getElementById('btn-export-data');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const dataStr = JSON.stringify(getState(), null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'site-data.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            alert("קובץ site-data.json ירד לתיקיית ההורדות שלך! 📥\nעכשיו רק תכתוב לי בצ'אט: 'תטמיע את site-data.json' ואני אעדכן את הפרויקט ואדחוף לגיט מיד!");
        });
    }

    const resetBtn = document.getElementById('btn-reset-data');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm("האם אתה בטוח שברצונך לאפס את האתר לטקסטים והגדרות המקוריות?")) {
                resetData();
                renderAll();
            }
        });
    }

    const addStatBtn = document.getElementById('btn-add-stat');
    if (addStatBtn) addStatBtn.addEventListener('click', () => openEditModal('stat'));

    const addCalcSliderBtn = document.getElementById('btn-add-calc-slider');
    if (addCalcSliderBtn) addCalcSliderBtn.addEventListener('click', () => openEditModal('calcSlider'));

    const addSylBtn = document.getElementById('btn-add-syllabus');
    if (addSylBtn) addSylBtn.addEventListener('click', () => openEditModal('syllabus'));

    const addTestimonialBtn = document.getElementById('btn-add-testimonial');
    if (addTestimonialBtn) {
        addTestimonialBtn.addEventListener('click', () => {
            const appState = getState();
            if (appState.testimonials && appState.testimonials.length >= 5) {
                alert("ניתן להוסיף עד 5 המלצות בסך הכל (כדי לשמור על תצוגה מאוזנת ומהודקת).");
                return;
            }
            openEditModal('testimonial');
        });
    }

    const addFaqBtn = document.getElementById('btn-add-faq');
    if (addFaqBtn) addFaqBtn.addEventListener('click', () => openEditModal('faq'));

    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeModal);

    const modalSaveBtn = document.getElementById('modal-save-btn');
    if (modalSaveBtn) modalSaveBtn.addEventListener('click', saveModalItem);

    // Registration reason custom input toggle
    const regReasonSelect = document.getElementById('reg-reason');
    const regCustomGroup = document.getElementById('reg-custom-reason-group');
    const regCustomInput = document.getElementById('reg-custom-reason-input');
    if (regReasonSelect) {
        regReasonSelect.addEventListener('change', () => {
            if (isCustomReason(regReasonSelect.value)) {
                if (regCustomGroup) regCustomGroup.classList.remove('hidden');
                if (regCustomInput) regCustomInput.focus();
            } else {
                if (regCustomGroup) regCustomGroup.classList.add('hidden');
            }
        });
    }

    const form = document.getElementById('satirical-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameEl = document.getElementById('reg-name');
            const name = nameEl ? nameEl.value : '';
            const reasonEl = document.getElementById('reg-reason');
            let reason = reasonEl ? reasonEl.value : '';
            if (isCustomReason(reason) && regCustomInput && regCustomInput.value.trim()) {
                reason = regCustomInput.value.trim();
            }
            alert(`תודה ${name}! הבקשה שלך לשמור חצי כוכב נקלטה (סיבת פרישה: ${reason}). תפוס/פי פינה בצל, אנחנו בדרך עם הקפה! ☕`);
        });
    }
}
