/* ==========================================================================
   Hatziko Diving School - Rat Dispatch & Pinecone Confetti Module
   ========================================================================== */

export function triggerPineconeConfetti() {
    let canvas = document.getElementById('pinecone-confetti-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'pinecone-confetti-canvas';
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const emojis = ['🌲', '🌰', '🐀', '☕', '⭐', '🤿'];
    const colors = ['#22c55e', '#84cc16', '#15803d', '#b45309', '#d97706', '#fbbf24', '#a16207'];
    const particles = [];
    const totalCount = 85;

    for (let i = 0; i < totalCount; i++) {
        const isEmoji = i % 2 === 0;
        particles.push({
            isEmoji,
            char: isEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : null,
            color: colors[Math.floor(Math.random() * colors.length)],
            x: canvas.width / 2 + (Math.random() - 0.5) * 160,
            y: canvas.height * 0.5 + (Math.random() - 0.5) * 40,
            vx: (Math.random() - 0.5) * 34,
            vy: -Math.random() * 25 - 14,
            size: isEmoji ? Math.floor(Math.random() * 18 + 24) : Math.floor(Math.random() * 9 + 8),
            rotation: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 24,
            alpha: 1,
            decay: Math.random() * 0.013 + 0.007,
            gravity: 0.72
        });
    }

    let animationId = null;

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let activeCount = 0;

        for (let p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.rotation += p.vRot;
            p.alpha -= p.decay;

            if (p.alpha > 0 && p.y < canvas.height + 60) {
                activeCount++;
                ctx.save();
                ctx.globalAlpha = Math.max(0, p.alpha);
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);

                if (p.isEmoji) {
                    ctx.font = `${p.size}px sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(p.char, 0, 0);
                } else {
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
                }

                ctx.restore();
            }
        }

        if (activeCount > 0) {
            animationId = requestAnimationFrame(render);
        } else {
            cancelAnimationFrame(animationId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
        }
    }

    render();
}

export function openRatSuccessModal(formData) {
    const modal = document.getElementById('registration-success-modal');
    if (!modal) return;

    const summaryEl = document.getElementById('rat-submission-summary');
    if (summaryEl) {
        summaryEl.innerHTML = `
            <div class="rat-summary-row">
                <span class="rat-summary-label">👤 שם:</span>
                <span class="rat-summary-val">${formData.name || 'לא צוין'}</span>
            </div>
            <div class="rat-summary-row">
                <span class="rat-summary-label">📞 טלפון:</span>
                <span class="rat-summary-val">${formData.phone || 'לא צוין'}</span>
            </div>
            <div class="rat-summary-row">
                <span class="rat-summary-label">🛑 סיבת פרישה:</span>
                <span class="rat-summary-val" title="${formData.reason}">${formData.reason || 'ללא'}</span>
            </div>
            <div class="rat-summary-row">
                <span class="rat-summary-label">⚡ רמת מוטיבציה:</span>
                <span class="rat-summary-val">${formData.motivation || '50%'}</span>
            </div>
            ${formData.notes ? `
                <div class="rat-summary-row">
                    <span class="rat-summary-label">🍦 הערות/ארטיק:</span>
                    <span class="rat-summary-val" title="${formData.notes}">${formData.notes}</span>
                </div>
            ` : ''}
        `;
    }

    // Build WhatsApp Message for +972-628618645
    const waNumber = '972628618645';
    const waText = [
        'היי חזיכו! 🤿',
        'שיריינתי מקום בקורס החצי כוכב הקרוב:',
        `👤 שם מלא: ${formData.name || 'ישראל ישראלי'}`,
        `📞 טלפון: ${formData.phone || 'לא צוין'}`,
        `🛑 סיבת פרישה משוערת: ${formData.reason || 'אין כוח'}`,
        `⚡ רמת מוטיבציה: ${formData.motivation || '50%'}`,
        formData.notes ? `🍦 הערות מיוחדות: ${formData.notes}` : '',
        '',
        '🌲 מחכה שהחולדה המפצחת תאשר לי את הרישום! 🐀'
    ].filter(Boolean).join('\n');

    const waBtn = document.getElementById('btn-rat-whatsapp');
    if (waBtn) {
        waBtn.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
    }

    modal.classList.remove('hidden');

    // Trigger celebratory pinecone confetti
    triggerPineconeConfetti();
}

export function closeRatSuccessModal() {
    const modal = document.getElementById('registration-success-modal');
    if (modal) modal.classList.add('hidden');
}

export function initRatModalHandlers() {
    const modal = document.getElementById('registration-success-modal');
    const closeBtn = document.getElementById('rat-success-close-btn');
    const bottomCloseBtn = document.getElementById('btn-rat-close');

    if (closeBtn) closeBtn.addEventListener('click', closeRatSuccessModal);
    if (bottomCloseBtn) bottomCloseBtn.addEventListener('click', closeRatSuccessModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeRatSuccessModal();
            }
        });
    }
}
