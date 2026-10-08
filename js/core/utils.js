/* ==========================================================================
   Hatziko Diving School - Utility Functions
   ========================================================================== */

/**
 * Counts the effective number of half-stars from a value (number, string, or markup)
 */
export function getStarCount(starVal) {
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

/**
 * Helper for rendering star count as PNG half-stars
 */
export function renderStars(starVal) {
    const count = getStarCount(starVal);
    let html = '';
    for (let i = 0; i < count; i++) {
        html += '<img src="assets/half-star.png" class="half-star-img" alt="חצי כוכב">';
    }
    return html;
}

/**
 * Live character counter for textarea fields (e.g. Testimonial edit)
 */
export function updateCharCounter(el) {
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

/**
 * Format date string YYYY-MM-DD into DD/MM/YYYY
 */
export function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

/**
 * Escape HTML special characters to prevent XSS
 */
export function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
