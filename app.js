/* ==========================================================================
   Hatziko Diving School - Application Logic & Complete Dynamic Edit Engine
   ========================================================================== */

// Comprehensive Default State Data
const DEFAULT_DATA = {
    brandTitle: "חציכו",
    brandSubtitle: "בית ספר לצלילה",
    navCta: "הרשמה לחצי כוכב",
    logoSrc: "assets/new-logo.png",
    heroSrc: "assets/hero-new.jfif",

    heroBadge: '<img src="assets/half-star.png" class="half-star-img" alt="חצי כוכב"> מסלול חצי כוכב יוקרתי',
    heroTitle: "חציכו – בית ספר לצלילה",
    heroMotto: '"חצי כוכב. חצי כוח."',
    heroDescription: "למה לצלול 30 מטר לעומק כשרק ברום המים אפשר לנשום? ברוכים הבאים לבית הספר היחיד בעולם שמבין שבעיות אוזניים וחרדה קלה הן לא מניעה – הן פשוט סיבה מצוינת לסיים בדיוק בחצי.",

    stats: [
        { id: 'st1', number: "0.5", label: "כוכבים בדיוק" },
        { id: 'st2', number: "1.5m", label: "עומק מקסימלי" },
        { id: 'st3', number: "100%", label: "הפסקות קפה" },
        { id: 'st4', number: "0%", label: "לחץ באוזניים" }
    ],

    heroCtaPrimary: "תשריינו לי חצי כוכב",
    heroCtaSecondary: "אני מפחד/ת – כנסו למחשבון",

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

    calcSliders: [
        { id: 'c1', label: "😱 רמת חרדה ממעמקים:", value: 50, weight: 1 },
        { id: 'c2', label: "👂 רמת רגישות/כאב באוזניים:", value: 60, weight: 1 },
        { id: 'c3', label: "😴 חשק לחזור למלון:", value: 80, weight: 0.8 }
    ],

    calcZoneHigh: "עומק עזים (אזור מים עמוקים בחציכו)",
    calcAdviceHigh: '"זהירות, מגיע לך עד החזה! מומלץ להחזיק בסולם ולא להוריד את הרגליים מהקרקעית."',
    calcZoneMid: "בריכת פעוטות רדודה",
    calcAdviceMid: '"מעולה! בגובה הזה הראש שלך כמעט מחוץ למים. אפשר לשים שנורקל ועדיין לשמוע את המוזיקה מהבר."',
    calcZoneLow: "גיגית פלסטיק במרפסת",
    calcAdviceLow: '"אפס סיכון! הירידה למים מומלצת עם כוס קפה קר וספר טוב. אין צורך לחבוש סנפירים."',

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
            part: 'pool',
            number: "שיעור 1",
            title: "הכרת מים רדודים וחרדה מבוקרת",
            duration: "15 דקות",
            desc: "לומדים לעמוד במים עד המותניים בבריכה המחוממת, לחבוש מסכה ולהבין שהקרקעית ממש קרובה ובטוחה.",
            difficulty: "רמת קושי: קלה ביותר (אפס מאמץ)"
        },
        {
            id: 's2',
            part: 'pool',
            number: "שיעור 2",
            title: "טכניקות ציפה ונשימה ללא מאמץ",
            duration: "45 דקות (כולל קפה)",
            desc: "תרגול שכיבה על הגב עם שנורקל, ציפה פסיבית והרמת יד מיידית לקריאה למציל במקרה של תחושת עייפות קלה.",
            difficulty: "רמת קושי: מנוחת צהריים מוחלטת"
        },
        {
            id: 's3',
            part: 'sea',
            number: "שיעור 3",
            title: "כניסה מבוקרת לים עד הברכיים",
            duration: "20 דקות",
            desc: "צועדים בזהירות 3 מטרים מהחוף, מרגישים את הגלים הראשונים ומחליטים מיד אם כדאי לחזור לשמשייה.",
            difficulty: "רמת קושי: בינונית (חול באצבעות)"
        },
        {
            id: 's4',
            part: 'sea',
            number: "שיעור 4",
            title: "צלילת עומק רדוד (1.20 מטר)",
            duration: "7 דקות",
            desc: "טבילת ראש ראשונה בים הפתוח! אפשרות לזעוק 'המים מלוחים מדי' ולעמוד בחזרה בביטחון מלא על שתי רגליים.",
            difficulty: "רמת קושי: אתגר גלים קל"
        },
        {
            id: 's5',
            part: 'final',
            number: "שיעור מסכם",
            title: "ירידה למעמקים (להמחשה למה ביבשה יותר נעים)",
            duration: "שעתיים (כולל ארוחת צהריים)",
            desc: "ירידה מבוקרת ל-1.50 מטר, חוויית לחץ קל באוזניים, הסכמה מוחלטת של הקבוצה שביבשה הרבה יותר נעים, וענידת תעודת חצי כוכב!",
            difficulty: "רמת קושי: ויתור אצילי וחגיגי"
        }
    ],

    testimonials: [
        {
            id: 't1',
            name: "אלופה עם בעיות אוזניים",
            role: "חצי-בוגרת מחזור א'",
            stars: 3,
            text: "הגעתי לקורס עם פנטזיה על שוניות ודולפינים, וגיליתי שכבר ב-1.5 מטר האוזניים שלי מוחות. המדריך של חציכו הגיב מיד, העלה אותי למעלה והכין לי אייס קפה. 10/10 לא יורדת יותר מתחת למים!"
        },
        {
            id: 't2',
            name: "הפרטנר המודאג",
            role: "חצי-בוגרת מחזור א'",
            stars: 2,
            text: "כשהגענו ל-2 מטר עומק וראיתי את הקרקעית מתרחקת, נכנסתי לחרדה קלה. במקום ללחוץ עליי, המדריך אמר 'חביבי, היבשה זה הדיבור'. קיבלנו חצי כוכב ונסענו לאכול חומוס."
        },
        {
            id: 't3',
            name: "ספקטיקנית לשעבר",
            role: "חצי-בוגרת מחזור ב'",
            stars: 4,
            text: "כל החברות שלי עשו כוכב ראשון ושני. אני עשיתי חצי כוכב בחציכו וחסכתי 4 ימים של חנק. הכי משתלם בארץ!"
        },
        {
            id: 't4',
            name: "עייף מציוד ומשקל",
            role: "חצי-בוגר מחזור ג'",
            stars: 1,
            text: "שמתי את מאזן הציפה ביבשה, הרגשתי שזה שוקל 40 קילו ואמרתי למדריך שאני מעדיף לחכות בבר של המלון. קיבלתי תעודת חצי כוכב מוכרת במקום!"
        },
        {
            id: 't5',
            name: "חרדתי מצטיין",
            role: "חצי-בוגר מחזור ג'",
            stars: 5,
            text: "נכנסתי למים עד הפופיק, ראיתי צל של דג זהב ונבהלתי. המדריך של חציכו הרגיע אותי והסביר שזה בסדר גמור לפרוש. הקורס הטוב בחיי!"
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
let currentSyllabusTab = 'pool';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    initBubbles();
    renderAll();
    setupEventListeners();
    initCalculator();
    initCertificate();
    initImageModal();
});

// Helper for rendering star count as PNG half-stars
function renderStars(starVal) {
    const count = getStarCount(starVal);
    let html = '';
    for (let i = 0; i < count; i++) {
        html += '<img src="assets/half-star.png" class="half-star-img" alt="חצי כוכב">';
    }
    return html;
}

function getStarCount(starVal) {
    if (starVal === null || starVal === undefined || starVal === '') return 3;
    if (typeof starVal === 'number') return Math.max(1, Math.min(10, starVal));
    if (typeof starVal === 'string') {
        const parsed = parseFloat(starVal);
        if (!isNaN(parsed) && parsed > 0) {
            return Math.max(1, Math.min(10, Math.round(parsed)));
        }
        const imgMatches = (starVal.match(/<img/g) || []).length;
        const emojiMatches = (starVal.match(/⭐|½|1\/2/g) || []).length;
        const total = imgMatches + emojiMatches;
        return total > 0 ? Math.min(10, total) : 3;
    }
    return 3;
}

function updateCharCounter(el) {
    const counter = document.getElementById('char-count');
    if (counter) {
        counter.innerText = el.value.length;
        if (el.value.length >= 480) {
            counter.style.color = '#ef4444';
        } else {
            counter.style.color = 'var(--text-secondary)';
        }
    }
}

// Load from LocalStorage
function loadSavedData() {
    const saved = localStorage.getItem('hatziko_site_data');
    if (saved) {
        try {
            appState = Object.assign({}, DEFAULT_DATA, JSON.parse(saved));
            if (appState.logoSrc === 'assets/logo.jpg') {
                appState.logoSrc = 'assets/new-logo.png';
            }
            if (appState.heroSrc === 'assets/hero.jpg') {
                appState.heroSrc = 'assets/hero-new.jfif';
            }
            if (!appState.stats || appState.stats.length === 0) {
                appState.stats = JSON.parse(JSON.stringify(DEFAULT_DATA.stats));
            }
            if (!appState.calcSliders || appState.calcSliders.length === 0) {
                appState.calcSliders = JSON.parse(JSON.stringify(DEFAULT_DATA.calcSliders));
            }
            if (appState.syllabus) {
                appState.syllabus.forEach(item => {
                    if (!item.part) {
                        if (item.id === 's1' || item.id === 's2') item.part = 'pool';
                        else if (item.id === 's3' || item.id === 's4') item.part = 'sea';
                        else if (item.id === 's5') item.part = 'final';
                        else item.part = 'pool';
                    }
                });
            }
            if (appState.heroBadge && (appState.heroBadge.includes('⭐½') || appState.heroBadge.includes('⭐1/2') || appState.heroBadge.includes('⭐ 1/2'))) {
                appState.heroBadge = appState.heroBadge.replace(/⭐\s*½|⭐\s*1\/2|½|1\/2/g, '<img src="assets/half-star.png" class="half-star-img" alt="חצי כוכב">');
            }
            if (appState.testimonials) {
                appState.testimonials.forEach(t => {
                    if (t.stars && (t.stars.includes('⭐½') || t.stars.includes('⭐1/2') || t.stars.includes('⭐ 1/2') || t.stars.includes('½'))) {
                        t.stars = t.stars.replace(/⭐\s*½|⭐\s*1\/2|½|1\/2/g, '<img src="assets/half-star.png" class="half-star-img" alt="חצי כוכב">');
                    }
                });
            }
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
    renderStats();
    renderCalculatorSliders();
    renderSyllabus();
    renderTestimonials();
    renderFAQs();
}

// Update Logo and Hero Image Sources
function renderImages() {
    const mainLogo = document.getElementById('main-logo-img');
    const heroLogo = document.getElementById('hero-logo-img');
    const certLogo = document.getElementById('cert-logo-img');
    const footerLogo = document.getElementById('footer-logo-img');
    const mainHero = document.getElementById('main-hero-img');

    const logoUrl = appState.logoSrc || 'assets/new-logo.png';
    const heroUrl = appState.heroSrc || 'assets/hero-new.jfif';

    if (mainLogo) mainLogo.src = logoUrl;
    if (heroLogo) heroLogo.src = logoUrl;
    if (certLogo) certLogo.src = logoUrl;
    if (footerLogo) footerLogo.src = logoUrl;
    if (mainHero) mainHero.src = heroUrl;
}

// Render Simple Editable Text Elements
function renderStaticText() {
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
                appState[key] = el.innerHTML.trim();
                saveData();
            };
        } else {
            el.contentEditable = "false";
            el.title = "";
            el.onblur = null;
        }
    });
}

// Render Dynamic Hero Stat Tiles
function renderStats() {
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

// Render Dynamic Calculator Sliders
function renderCalculatorSliders() {
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

// Calculate Depth & Result Zone
function updateCalculatorResult() {
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

// Switch Active Syllabus Tab
function switchSyllabusTab(part) {
    currentSyllabusTab = part;
    document.querySelectorAll('.syllabus-tab').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-part') === part);
    });
    renderSyllabus();
}

// Render Syllabus
function renderSyllabus() {
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

    const addStatBtn = document.getElementById('btn-add-stat');
    if (addStatBtn) addStatBtn.addEventListener('click', () => openEditModal('stat'));

    const addCalcSliderBtn = document.getElementById('btn-add-calc-slider');
    if (addCalcSliderBtn) addCalcSliderBtn.addEventListener('click', () => openEditModal('calcSlider'));

    document.getElementById('btn-add-syllabus').addEventListener('click', () => openEditModal('syllabus'));
    document.getElementById('btn-add-testimonial').addEventListener('click', () => {
        if (appState.testimonials && appState.testimonials.length >= 5) {
            alert("ניתן להוסיף עד 5 המלצות בסך הכל (כדי לשמור על תצוגה מאוזנת ומהודקת).");
            return;
        }
        openEditModal('testimonial');
    });
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
                <input type="text" id="m-stat-number" class="form-control" value="${item ? item.number : '100%'}">
            </div>
            <div class="form-group">
                <label>תיאור/תווית (למשל: הפסקות קפה):</label>
                <input type="text" id="m-stat-label" class="form-control" value="${item ? item.label : 'מדד חדש'}">
            </div>
        `;
    } else if (type === 'calcSlider') {
        modalTitle.innerText = id ? "עריכת מדד במחשבון" : "הוספת מדד חדש למחשבון";
        modalBody.innerHTML = `
            <div class="form-group">
                <label>תווית/שם המדד (כולל אימוג'י):</label>
                <input type="text" id="m-calc-label" class="form-control" value="${item ? item.label : '🦈 פחד מכרישים דמיוניים:'}">
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
        const selectedPart = item ? (item.part || 'pool') : currentSyllabusTab;
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

    if (type === 'stat') {
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
        currentSyllabusTab = newItem.part;
        document.querySelectorAll('.syllabus-tab').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-part') === currentSyllabusTab);
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
    renderAll();
    closeModal();
}

function deleteItem(type, id) {
    if (!confirm("בטוח שברצונך למחוק פריט זה?")) return;
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
        logoPathInput.value = appState.logoSrc || 'assets/new-logo.png';
        heroPathInput.value = appState.heroSrc || 'assets/hero-new.jfif';
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
        appState.logoSrc = logoPathInput.value.trim() || 'assets/new-logo.png';
        appState.heroSrc = heroPathInput.value.trim() || 'assets/hero-new.jfif';
        saveData();
        renderAll();
        modal.classList.add('hidden');
        alert("התמונות עודכנו בהצלחה!");
    });
}

// Calculator Initialization Wrapper
function initCalculator() {
    renderCalculatorSliders();
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

    container.innerHTML = '';
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
