/* ==========================================================================
   Hatziko Diving School - Application Logic & Dynamic Depth Engine
   ========================================================================== */

// Comprehensive Default State Data
const DEFAULT_DATA = {
    brandTitle: "חציכו",
    brandSubtitle: "בית ספר לצלילה",
    navCta: "הרשמה לחצי כוכב",
    logoSrc: "assets/logo.jpg",
    heroSrc: "assets/hero.jpg",

    heroBadge: "⭐½ מסלול חצי כוכב יוקרתי",
    heroTitle: "חציכו – בית ספר לצלילה",
    heroMotto: '"חצי כוכב. חצי כוח."',
    heroDescription: "למה לצלול 30 מטר לעומק כשרק ברום המים אפשר לנשום? ברוכים הבאים לבית הספר היחיד בעולם שמבין שבעיות אוזניים וחרדה קלה הן לא מניעה – הן פשוט סיבה מצוינת לסיים בדיוק בחצי.",

    stat1Number: "0.5",
    stat1Label: "כוכבים בדיוק",
    stat2Number: "1.5m",
    stat2Label: "עומק מקסימלי",
    stat3Number: "100%",
    stat3Label: "הפסקות קפה",

    heroCtaPrimary: "תשריינו לי חצי כוכב",
    heroCtaSecondary: "אני מפחד/ת – כנסו למחשבון",
    heroCardIcon: "☕",
    heroCardTitle: "טכניקת הקפה הצף",
    heroCardText: "צלילה בגובה העיניים – מקסימום שלווה, אפס השוואת לחצים.",

    aboutSubtitle: "היתרונות הייחודיים לנו",
    aboutTitle: "למה דווקא מסלול \"חצי כוכב\"?",
    aboutDesc: "אנחנו לא מאמינים במאמץ מיותר. הנה 3 סיבות למה הקורס שלנו הוא המשתלם ביותר:",
    
    feat1Icon: "👂",
    feat1Title: "0% לחץ באוזניים",
    feat1Text: "בזכות שיטת העומק הרדוד שלנו (עד מטר וחצי), האוזניים שלך יישארו פתוחות, רגועות ובלי צורך לפמפם שום דבר חוץ מאשר את האגו.",
    
    feat2Icon: "🛋️",
    feat2Title: "אפס חרדות – 100% בנוחות",
    feat2Text: "נכנסת ללחץ מ-2 מטר עומק? אין בעיה! המדריך מיד עוצר את הצלילה, עולים ליבשה ומזמינים ארטיק רמזור בחוף.",
    
    feat3Icon: "📜",
    feat3Title: "תעודה חצי-מוכרת",
    feat3Text: "התעודה שלנו מוכרת על ידינו בלבד, תקפה מים המלח ועד הבריכה בבית, ומבטיחה שכולם ידעו שהשתדלת – וזה מה שחשוב.",

    syllabusSubtitle: "תוכנית הלימודים היוקרתית",
    syllabusTitle: "מה לומדים בדרך לחצי כוכב?",
    syllabusDesc: "מבנה קורס מוקפד המותאם במיוחד לאנשים עם כוונות טובות ויכולת ביצוע חלקית.",

    calcBadge: "🧮 מחשבון חציכו בלעדי",
    calcTitle: "מחשבון עומק, אוזניים וחרדה",
    calcDesc: "הזינו את המדדים שלכם וגלו מה העומק המקסימלי הבטוח עבורכם היום:",
    calcLabel1: "😱 רמת חרדה ממעמקים:",
    calcLabel2: "👂 רמת רגישות/כאב באוזניים:",
    calcLabel3: "😴 חשק לחזור למלון:",
    calcResultHeader: "העומק המומלץ עבורך:",

    testimonialsSubtitle: "מה אומרים החצי-בוגרים שלנו?",
    testimonialsTitle: "ביקורות מהללות (למחצה)",
    testimonialsDesc: "סיפורים אמיתיים של אנשים שנכנסו למים ויצאו כמעט מיד.",

    certSubtitle: "מזכרת לכל החיים",
    certTitle: "מחולל תעודת \"חצי כוכב\" רשמית",
    certDesc: "הזינו את השם שלכם או של חברים וקבלו תעודת סיום מותאמת אישית!",

    faqSubtitle: "יש לכם שאלות?",
    faqTitle: "שאלות נפוצות (ותשובות כנות)",
    faqDesc: "כל מה שרציתם לדעת לפני שאתם מבינים שאין לכם כוח לזה.",

    registerTitle: "שריון מקום בקורס החצי כוכב הקרוב",
    registerDesc: "מלאו את הפרטים ונחזור אליכם ברגע שנסיים את הקפה.",
    registerBtnText: "שגרו בקשה (בלי לחץ)",

    footerDesc: "בית הספר הסאטירי המוביל בישראל לצלילות רדודות, חצי כוכב ואפס מאמץ.",
    footerDisclaimer: "האתר הינו אתר היתולי/סאטירי שנבנה בהמון אהבה והומור. אין לראות בתעודת \"חצי כוכב\" הסמכה רשמית לצלילה חופשית או צלילת מכשירים, אלא אם כן אתם צוללים באמבטיה.",
    footerCopyright: "© 2026 חציכו – כל הזכויות שמורות לחצי כוכב וחצי כוח.",

    syllabus: [
        {
            id: 's1',
            number: "שיעור 1",
            title: "חבישת ציוד וחרדה ראשונית",
            duration: "15 דקות",
            desc: "לומדים איך לשים מאזן ציפה, להרגיש שזה ממש כבד, ולהגיד 'בעצם חם לי מדי בחליפה'.",
            difficulty: "דרגת קושי: קל עד אפסי"
        },
        {
            id: 's2',
            number: "שיעור 2",
            title: "טכניקות השוואת לחצים (ביבשה)",
            duration: "45 דקות (כולל קפה)",
            desc: "אימון פמפום אוזניים מתקדם בישיבה בבית קפה מול הים. כולל הסבר למה אין שום סיבה לרדת למטה.",
            difficulty: "דרגת קושי: מנוחה מוחלטת"
        },
        {
            id: 's3',
            number: "שיעור 3",
            title: "צלילה עמוקה ל-1.20 מטר",
            duration: "7 דקות",
            desc: "טבילת ראש ראשונה! אפשרות לעמוד על הקרקעית בכל רגע נתון ולזעוק 'המים מלוחים'.",
            difficulty: "דרגת קושי: בריכת ילדים"
        },
        {
            id: 's4',
            number: "שיעור מסכם",
            title: "טקס קבלת החצי כוכב",
            duration: "שעתיים (ארוחת צהריים)",
            desc: "הענקת תעודה רשמית, צילומים עם שנורקל מחוץ למים, והבטחה הדדית שזה היה הקורס האחרון שלנו.",
            difficulty: "דרגת קושי: חגיגי"
        }
    ],

    testimonials: [
        {
            id: 't1',
            name: "אלופה עם בעיות אוזניים",
            role: "חצי-בוגרת מחזור א'",
            stars: "⭐⭐½",
            text: "הגעתי לקורס עם פנטזיה על שוניות ודולפינים, וגיליתי שכבר ב-1.5 מטר האוזניים שלי מוחות. המדריך של חציכו הגיב מיד, העלה אותי למעלה והכין לי אייס קפה. 10/10 לא יורדת יותר מתחת למים!"
        },
        {
            id: 't2',
            name: "הפרטנר המודאג",
            role: "חצי-בוגרת מחזור א'",
            stars: "⭐⭐½",
            text: "כשהגענו ל-2 מטר עומק וראיתי את הקרקעית מתרחקת, נכנסתי לחרדה קלה. במקום ללחוץ עליי, המדריך אמר 'חביבי, היבשה זה הדיבור'. קיבלנו חצי כוכב ונסענו לאכול חומוס."
        },
        {
            id: 't3',
            name: "ספקטיקנית לשעבר",
            role: "חצי-בוגרת מחזור ב'",
            stars: "⭐⭐½",
            text: "כל החברות שלי עשו כוכב ראשון ושני. אני עשיתי חצי כוכב בחציכו וחסכתי 4 ימים של חנק. הכי משתלם בארץ!"
        }
    ],

    faqs: [
        {
            id: 'f1',
            question: "מה מותר לי לעשות עם תעודת חצי כוכב?",
            answer: "התעודה מאפשרת לך להגיד בארוחות שישי 'כן, עשיתי קורס צלילה', ולהחליף נושא במהירות כמשואלים איזה עומק."
        },
        {
            id: 'f2',
            question: "מה קורה אם כואבות לי האוזניים כבר בירידה מהאוטו?",
            answer: "זה מצוין! בדיוק בשביל זה אנחנו פה. במקרה כזה הלימודים עוברים למתכונת של צפייה בסרטוני טבע ביוטיוב."
        },
        {
            id: 'f3',
            question: "מה לעשות אם אני חוטף חרדה באמצע הצלילה?",
            answer: "פשוט מאוד: נעמדים (כי העומק הוא 1.20 מטר), מוציאים את הווסת ומזמינים מונית למלון."
        },
        {
            id: 'f4',
            question: "האם יש הנחה למי שמביא חצי כוח מהבית?",
            answer: "בוודאי. זוגות שנרשמים יחד ומפסיקים יחד מקבלים 50% הנחה על הקורס הבא שלא ייפתח לעולם."
        }
    ]
};

// Global State Instance
let appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
let isEditMode = false;
let editingModalItemType = null;
let editingModalItemId = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    initBubbles();
    renderAll();
    setupEventListeners();
    initCalculator();
    initCertificate();
    initImageModal();
    initScrollDepthTracker();
});

// Scroll Depth Gauge Logic
function initScrollDepthTracker() {
    const depthVal = document.getElementById('depth-value');
    if (!depthVal) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;

        // Scale depth from 0.0m to 2.0m max
        const meters = (progress * 2.0).toFixed(1);

        if (progress < 0.1) {
            depthVal.innerText = `${meters} מטר (פני המים 🦆)`;
        } else if (progress < 0.4) {
            depthVal.innerText = `${meters} מטר (מים רדודים 🐟)`;
        } else if (progress < 0.75) {
            depthVal.innerText = `${meters} מטר (אזור הכרישים 🦈)`;
        } else {
            depthVal.innerText = `${meters} מטר (קרקעית וספינה 🚢)`;
        }
    });
}

// Load from LocalStorage
function loadSavedData() {
    const saved = localStorage.getItem('hatziko_site_data');
    if (saved) {
        try {
            appState = Object.assign({}, DEFAULT_DATA, JSON.parse(saved));
        } catch (e) {
            console.error("Failed to parse saved data, loading default.", e);
            appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    }
}

// Save to LocalStorage
function saveData() {
    localStorage.setItem('hatziko_site_data', JSON.stringify(appState));
}

// Render All Sections
function renderAll() {
    renderImages();
    renderStaticText();
    renderSyllabus();
    renderTestimonials();
    renderFAQs();
}

// Update Logo and Hero Image Sources
function renderImages() {
    const mainLogo = document.getElementById('main-logo-img');
    const certLogo = document.getElementById('cert-logo-img');
    const footerLogo = document.getElementById('footer-logo-img');
    const mainHero = document.getElementById('main-hero-img');

    if (mainLogo) mainLogo.src = appState.logoSrc || 'assets/logo.jpg';
    if (certLogo) certLogo.src = appState.logoSrc || 'assets/logo.jpg';
    if (footerLogo) footerLogo.src = appState.logoSrc || 'assets/logo.jpg';
    if (mainHero) mainHero.src = appState.heroSrc || 'assets/hero.jpg';
}

// Render Simple Editable Text Elements
function renderStaticText() {
    document.querySelectorAll('.editable').forEach(el => {
        const key = el.getAttribute('data-key');
        if (key && appState[key] !== undefined) {
            el.innerText = appState[key];
        }

        if (isEditMode) {
            el.contentEditable = "true";
            el.title = "לחץ לעריכה";
            el.onblur = () => {
                appState[key] = el.innerText.trim();
                saveData();
            };
        } else {
            el.contentEditable = "false";
            el.title = "";
            el.onblur = null;
        }
    });
}

// Render Syllabus
function renderSyllabus() {
    const container = document.getElementById('syllabus-container');
    if (!container) return;

    container.innerHTML = appState.syllabus.map(item => `
        <div class="syllabus-card glass-card" data-id="${item.id}">
            <span class="syllabus-number">${escapeHtml(item.number)}</span>
            <div>
                <h3 class="syllabus-title">${escapeHtml(item.title)}</h3>
                <div class="syllabus-duration">⏱️ ${escapeHtml(item.duration)}</div>
                <p class="syllabus-desc">${escapeHtml(item.desc)}</p>
            </div>
            <div>
                <div class="syllabus-difficulty">${escapeHtml(item.difficulty)}</div>
                ${isEditMode ? `
                    <div class="item-actions-bar">
                        <button class="btn btn-sm btn-outline" onclick="openEditModal('syllabus', '${item.id}')">✏️ ערוך שיעור</button>
                        <button class="btn btn-sm btn-outline" onclick="deleteItem('syllabus', '${item.id}')">🗑️ מחק</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

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
                <div class="testimonial-stars">${escapeHtml(item.stars)}</div>
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

// Render FAQs
function renderFAQs() {
    const container = document.getElementById('faq-container');
    if (!container) return;

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

// Setup Event Listeners
function setupEventListeners() {
    const toggleBtn = document.getElementById('toggle-edit-mode');
    const editBar = document.getElementById('edit-mode-bar');

    toggleBtn.addEventListener('click', () => {
        isEditMode = !isEditMode;
        document.body.classList.toggle('in-edit-mode', isEditMode);
        editBar.classList.toggle('hidden', !isEditMode);
        
        document.getElementById('edit-toggle-text').innerText = isEditMode ? "מצב תצוגה" : "מצב עריכה";
        document.getElementById('edit-toggle-icon').innerText = isEditMode ? "👁️" : "✏️";
        
        renderAll();
    });

    document.getElementById('btn-save-data').addEventListener('click', () => {
        saveData();
        alert("כל השינויים נשמרו בהצלחה בדפדפן! 🎉");
    });

    document.getElementById('btn-reset-data').addEventListener('click', () => {
        if (confirm("האם אתה בטוח שברצונך לאפס את האתר לטקסטים והגדרות המקוריות?")) {
            appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
            saveData();
            renderAll();
        }
    });

    document.getElementById('btn-add-syllabus').addEventListener('click', () => openEditModal('syllabus'));
    document.getElementById('btn-add-testimonial').addEventListener('click', () => openEditModal('testimonial'));
    document.getElementById('btn-add-faq').addEventListener('click', () => openEditModal('faq'));

    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
    document.getElementById('modal-save-btn').addEventListener('click', saveModalItem);

    document.getElementById('satirical-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        alert(`תודה ${name}! הבקשה שלך לשמור חצי כוכב נקלטה. תפוס/פי פינה בצל, אנחנו בדרך עם הקפה! ☕`);
    });
}

// Edit Modal Functions
function openEditModal(type, id = null) {
    editingModalItemType = type;
    editingModalItemId = id;
    const modal = document.getElementById('edit-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    let item = null;
    if (id) {
        if (type === 'syllabus') item = appState.syllabus.find(x => x.id === id);
        if (type === 'testimonial') item = appState.testimonials.find(x => x.id === id);
        if (type === 'faq') item = appState.faqs.find(x => x.id === id);
    }

    if (type === 'syllabus') {
        modalTitle.innerText = id ? "עריכת שיעור בתוכנית" : "הוספת שיעור בתוכנית";
        modalBody.innerHTML = `
            <div class="form-group">
                <label>מספר/כותרת קטנה:</label>
                <input type="text" id="m-number" class="form-control" value="${item ? item.number : 'שיעור חדש'}">
            </div>
            <div class="form-group">
                <label>כותרת השיעור:</label>
                <input type="text" id="m-title" class="form-control" value="${item ? item.title : ''}">
            </div>
            <div class="form-group">
                <label>משך זמן:</label>
                <input type="text" id="m-duration" class="form-control" value="${item ? item.duration : '20 דקות'}">
            </div>
            <div class="form-group">
                <label>תיאור:</label>
                <textarea id="m-desc" class="form-control" rows="3">${item ? item.desc : ''}</textarea>
            </div>
            <div class="form-group">
                <label>רמת קושי:</label>
                <input type="text" id="m-difficulty" class="form-control" value="${item ? item.difficulty : 'דרגת קושי: קל מאוד'}">
            </div>
        `;
    } else if (type === 'testimonial') {
        modalTitle.innerText = id ? "עריכת המלצה" : "הוספת המלצה חדשה";
        modalBody.innerHTML = `
            <div class="form-group">
                <label>שם הממליץ/ה:</label>
                <input type="text" id="m-name" class="form-control" value="${item ? item.name : ''}">
            </div>
            <div class="form-group">
                <label>תפקיד/תיאור:</label>
                <input type="text" id="m-role" class="form-control" value="${item ? item.role : 'חצי-בוגר/ת מחזור א'}">
            </div>
            <div class="form-group">
                <label>דירוג כוכבים (למשל ⭐⭐½):</label>
                <input type="text" id="m-stars" class="form-control" value="${item ? item.stars : '⭐⭐½'}">
            </div>
            <div class="form-group">
                <label>תוכן ההמלצה:</label>
                <textarea id="m-text" class="form-control" rows="3">${item ? item.text : ''}</textarea>
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
    }

    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('edit-modal').classList.add('hidden');
    editingModalItemType = null;
    editingModalItemId = null;
}

function saveModalItem() {
    const type = editingModalItemType;
    const id = editingModalItemId || 'item_' + Date.now();

    if (type === 'syllabus') {
        const newItem = {
            id,
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
    } else if (type === 'testimonial') {
        const newItem = {
            id,
            name: document.getElementById('m-name').value,
            role: document.getElementById('m-role').value,
            stars: document.getElementById('m-stars').value,
            text: document.getElementById('m-text').value
        };
        if (editingModalItemId) {
            const idx = appState.testimonials.findIndex(x => x.id === id);
            appState.testimonials[idx] = newItem;
        } else {
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
    renderAll();
    closeModal();
}

function deleteItem(type, id) {
    if (!confirm("בטוח שברצונך למחוק פריט זה?")) return;
    if (type === 'syllabus') appState.syllabus = appState.syllabus.filter(x => x.id !== id);
    if (type === 'testimonial') appState.testimonials = appState.testimonials.filter(x => x.id !== id);
    if (type === 'faq') appState.faqs = appState.faqs.filter(x => x.id !== id);
    
    saveData();
    renderAll();
}

// Image Modal Engine
function initImageModal() {
    const changeImgBtn = document.getElementById('btn-change-images');
    const modal = document.getElementById('images-modal');
    const closeBtn = document.getElementById('images-modal-close-btn');
    const cancelBtn = document.getElementById('images-modal-cancel-btn');
    const saveBtn = document.getElementById('images-modal-save-btn');

    const logoPathInput = document.getElementById('input-logo-path');
    const heroPathInput = document.getElementById('input-hero-path');
    const logoFileInput = document.getElementById('upload-logo-file');
    const heroFileInput = document.getElementById('upload-hero-file');

    changeImgBtn.addEventListener('click', () => {
        logoPathInput.value = appState.logoSrc || 'assets/logo.jpg';
        heroPathInput.value = appState.heroSrc || 'assets/hero.jpg';
        modal.classList.remove('hidden');
    });

    closeBtn.onclick = () => modal.classList.add('hidden');
    cancelBtn.onclick = () => modal.classList.add('hidden');

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

    saveBtn.addEventListener('click', () => {
        appState.logoSrc = logoPathInput.value.trim() || 'assets/logo.jpg';
        appState.heroSrc = heroPathInput.value.trim() || 'assets/hero.jpg';
        saveData();
        renderAll();
        modal.classList.add('hidden');
        alert("התמונות עודכנו בהצלחה!");
    });
}

// Calculator Logic
function initCalculator() {
    const anxietySlider = document.getElementById('anxiety-slider');
    const earSlider = document.getElementById('ear-slider');
    const lazySlider = document.getElementById('lazy-slider');

    const anxietyVal = document.getElementById('anxiety-val');
    const earVal = document.getElementById('ear-val');
    const lazyVal = document.getElementById('lazy-val');

    const calcDepth = document.getElementById('calc-depth');
    const calcZone = document.getElementById('calc-zone');
    const calcAdvice = document.getElementById('calc-advice');

    function updateCalc() {
        const anx = parseInt(anxietySlider.value);
        const ear = parseInt(earSlider.value);
        const lazy = parseInt(lazySlider.value);

        anxietyVal.innerText = anx + '%';
        earVal.innerText = ear + '%';
        lazyVal.innerText = lazy + '%';

        const factor = (anx * 0.4 + ear * 0.4 + lazy * 0.2) / 100;
        let maxDepth = (2.0 - (factor * 1.8)).toFixed(1);
        if (maxDepth < 0.2) maxDepth = "0.2";

        calcDepth.innerText = maxDepth + " מטר";

        if (maxDepth >= 1.5) {
            calcZone.innerText = "עומק עזים (אזור מים עמוקים בחציכו)";
            calcAdvice.innerText = '"זהירות, מגיע לך עד החזה! מומלץ להחזיק בסולם ולא להוריד את הרגליים מהקרקעית."';
        } else if (maxDepth >= 0.8) {
            calcZone.innerText = "בריכת פעוטות במלון";
            calcAdvice.innerText = '"מעולה! בגובה הזה הראש שלך כמעט מחוץ למים. אפשר לשים שנורקל ועדיין לשמוע את המוזיקה מהבר."';
        } else {
            calcZone.innerText = "גיגית פלסטיק במרפסת";
            calcAdvice.innerText = '"אפס סיכון! הירידה למים מומלצת עם כוס קפה קר וספר טוב. אין צורך לחבוש סנפירים."';
        }
    }

    anxietySlider.addEventListener('input', updateCalc);
    earSlider.addEventListener('input', updateCalc);
    lazySlider.addEventListener('input', updateCalc);

    updateCalc();
}

// Certificate Logic
function initCertificate() {
    const nameInput = document.getElementById('cert-name-input');
    const reasonSelect = document.getElementById('cert-reason-select');
    const dateInput = document.getElementById('cert-date-input');

    const displayName = document.getElementById('cert-display-name');
    const displayReason = document.getElementById('cert-display-reason');
    const displayDate = document.getElementById('cert-display-date');

    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    displayDate.innerText = formatDate(today);

    nameInput.addEventListener('input', () => {
        displayName.innerText = nameInput.value || "אלופה עם בעיות אוזניים";
    });

    reasonSelect.addEventListener('change', () => {
        displayReason.innerText = `על סיום בהצלחה של 50% מקורס הצלילה, הפגנת תושיה בבחירת היבשה, וסיבת פרישה: ${reasonSelect.value}.`;
    });

    dateInput.addEventListener('change', () => {
        displayDate.innerText = formatDate(dateInput.value);
    });

    document.getElementById('btn-print-cert').addEventListener('click', () => {
        window.print();
    });
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Floating Bubbles Animation
function initBubbles() {
    const container = document.getElementById('bubbles');
    if (!container) return;

    for (let i = 0; i < 25; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 25 + 8;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDelay = (Math.random() * 8) + 's';
        bubble.style.animationDuration = (Math.random() * 6 + 6) + 's';
        
        container.appendChild(bubble);
    }
}

// Utility: Escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
