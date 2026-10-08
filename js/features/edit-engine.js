/* ==========================================================================
   Hatziko Diving School - Dynamic Edit Engine & Modals Module
   ========================================================================== */

import { escapeHtml, getStarCount, updateCharCounter } from '../core/utils.js';
import { getState, setState, getEditMode, setEditMode, saveData, resetData } from '../core/store.js';
import { updateCertReasonDisplay } from './certificate.js';
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
        }
        updateCertReasonDisplay();
    }

    const regReasonSelect = document.getElementById('reg-reason');
    if (regReasonSelect && appState.regReasons) {
        regReasonSelect.innerHTML = appState.regReasons.map(item => {
            const label = typeof item === 'object' ? item.label : item;
            return `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`;
        }).join('');
    }

    const regMotSelect = document.getElementById('reg-motivation');
    if (regMotSelect && appState.regMotivations) {
        regMotSelect.innerHTML = appState.regMotivations.map(item => {
            const label = typeof item === 'object' ? item.label : item;
            return `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`;
        }).join('');
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
            <p style="color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem;">ערוך, הוסף או מחק סיבות פרישה שיופיעו בתיבת הבחירה של מחולל התעודות:</p>
            <div id="m-cert-reasons-list">
                ${optionsList.map(opt => `
                    <div class="form-group" style="display:flex; gap:0.5rem; align-items:center;">
                        <input type="text" class="form-control m-cert-opt-input" value="${escapeHtml(opt)}">
                        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">🗑️</button>
                    </div>
                `).join('')}
            </div>
            <button type="button" class="btn btn-sm btn-outline" style="margin-top:0.5rem;" onclick="addCertReasonRow()">➕ הוסף סיבת פרישה חדשה</button>
        `;
    } else if (type === 'regReasons') {
        modalTitle.innerText = "עריכת סיבות פרישה משוערות (טופס הרשמה)";
        const optionsList = appState.regReasons || [];
        modalBody.innerHTML = `
            <p style="color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem;">ערוך, הוסף או מחק סיבות פרישה בטופס הקבלה/הרשמה:</p>
            <div id="m-reg-reasons-list">
                ${optionsList.map(item => {
                    const val = typeof item === 'object' ? item.label : item;
                    return `
                        <div class="form-group" style="display:flex; gap:0.5rem; align-items:center;">
                            <input type="text" class="form-control m-reg-opt-input" value="${escapeHtml(val)}">
                            <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">🗑️</button>
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
            <p style="color:var(--text-secondary); margin-bottom:1rem; font-size:0.9rem;">ערוך, הוסף או מחק רמות מוטיבציה בטופס הקבלה/הרשמה:</p>
            <div id="m-reg-mot-list">
                ${optionsList.map(item => {
                    const val = typeof item === 'object' ? item.label : item;
                    return `
                        <div class="form-group" style="display:flex; gap:0.5rem; align-items:center;">
                            <input type="text" class="form-control m-mot-opt-input" value="${escapeHtml(val)}">
                            <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">🗑️</button>
                        </div>
                    `;
                }).join('')}
            </div>
            <button type="button" class="btn btn-sm btn-outline" style="margin-top:0.5rem;" onclick="addRegMotRow()">➕ הוסף אפשרות חדשה</button>
        `;
    }

    modal.classList.remove('hidden');
}

export function addCertReasonRow() {
    const list = document.getElementById('m-cert-reasons-list');
    if (!list) return;
    const div = document.createElement('div');
    div.className = 'form-group';
    div.style.cssText = 'display:flex; gap:0.5rem; align-items:center;';
    div.innerHTML = `
        <input type="text" class="form-control m-cert-opt-input" placeholder="סיבת פרישה חדשה..." value="">
        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">🗑️</button>
    `;
    list.appendChild(div);
}

export function addRegReasonRow() {
    const list = document.getElementById('m-reg-reasons-list');
    if (!list) return;
    const div = document.createElement('div');
    div.className = 'form-group';
    div.style.cssText = 'display:flex; gap:0.5rem; align-items:center;';
    div.innerHTML = `
        <input type="text" class="form-control m-reg-opt-input" placeholder="אפשרות חדשה..." value="">
        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">🗑️</button>
    `;
    list.appendChild(div);
}

export function addRegMotRow() {
    const list = document.getElementById('m-reg-mot-list');
    if (!list) return;
    const div = document.createElement('div');
    div.className = 'form-group';
    div.style.cssText = 'display:flex; gap:0.5rem; align-items:center;';
    div.innerHTML = `
        <input type="text" class="form-control m-mot-opt-input" placeholder="אפשרות חדשה..." value="">
        <button type="button" class="btn btn-sm btn-outline" style="color:#ef4444; border-color:#ef4444;" onclick="this.parentElement.remove()">🗑️</button>
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

    const logoPathInput = document.getElementById('input-logo-path');
    const heroPathInput = document.getElementById('input-hero-path');
    const logoFileInput = document.getElementById('upload-logo-file');
    const heroFileInput = document.getElementById('upload-hero-file');

    if (!changeImgBtn || !modal) return;

    changeImgBtn.addEventListener('click', () => {
        const appState = getState();
        logoPathInput.value = appState.logoSrc || 'assets/new-transparent-logo.png';
        heroPathInput.value = appState.heroSrc || 'assets/hero-new.jfif';
        modal.classList.remove('hidden');
    });

    if (closeBtn) closeBtn.onclick = () => modal.classList.add('hidden');
    if (cancelBtn) cancelBtn.onclick = () => modal.classList.add('hidden');

    if (logoFileInput) {
        logoFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    logoPathInput.value = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (heroFileInput) {
        heroFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    heroPathInput.value = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (saveBtn) {
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

    const form = document.getElementById('satirical-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameEl = document.getElementById('reg-name');
            const name = nameEl ? nameEl.value : '';
            alert(`תודה ${name}! הבקשה שלך לשמור חצי כוכב נקלטה. תפוס/פי פינה בצל, אנחנו בדרך עם הקפה! ☕`);
        });
    }
}
