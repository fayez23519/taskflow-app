/* utils.js — small helpers (browser-safe, no CommonJS) */
const $ = (id) => document.getElementById(id);

async function sha256(text) {
    if (window.crypto?.subtle) {
        const buf = new TextEncoder().encode(text);
        const hash = await crypto.subtle.digest('SHA-256', buf);
        return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    return 'plain:' + text;
}

function formatDate(value, langCode) {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    const locale = langCode === 'ar' ? 'ar' : 'en';
    return d.toLocaleString(locale, { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
}

/* ---------- Professional Toast ---------- */
function showToast(msg, type = 'info', opts = {}) {
    const container = $('toast-container');
    if (!container) return;
    const duration = opts.duration ?? 3200;
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    const icons = {
        success: 'fa-circle-check',
        error: 'fa-circle-xmark',
        info: 'fa-circle-info',
        warning: 'fa-triangle-exclamation'
    };
    el.innerHTML = `
        <div class="toast-icon"><i class="fa-solid ${icons[type] || icons.info}"></i></div>
        <div class="toast-body"><p class="toast-msg"></p></div>
        <button type="button" class="toast-close" aria-label="close"><i class="fa-solid fa-xmark"></i></button>
        <span class="toast-progress"><span style="animation-duration:${duration}ms"></span></span>
    `;
    el.querySelector('.toast-msg').textContent = msg;
    const close = () => {
        el.classList.add('toast-out');
        setTimeout(() => el.remove(), 320);
    };
    el.querySelector('.toast-close').addEventListener('click', close);
    container.appendChild(el);
    setTimeout(close, duration);
}

/* ---------- Professional Confirm Modal ---------- */
function showConfirm({ title, message, confirmText, cancelText, tone = 'primary', icon }) {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        const iconClass = icon || (tone === 'danger' ? 'fa-triangle-exclamation'
            : tone === 'success' ? 'fa-circle-check' : 'fa-circle-question');
        overlay.innerHTML = `
            <div class="modal-card modal-${tone}" role="dialog" aria-modal="true">
                <div class="modal-icon"><i class="fa-solid ${iconClass}"></i></div>
                <h3 class="modal-title"></h3>
                <p class="modal-message"></p>
                <div class="modal-actions">
                    <button type="button" class="btn-ghost modal-cancel"></button>
                    <button type="button" class="btn-${tone === 'danger' ? 'danger' : 'primary'} modal-confirm"></button>
                </div>
            </div>
        `;
        overlay.querySelector('.modal-title').textContent = title || '';
        overlay.querySelector('.modal-message').textContent = message || '';
        overlay.querySelector('.modal-confirm').textContent = confirmText || 'OK';
        overlay.querySelector('.modal-cancel').textContent = cancelText || 'Cancel';

        const done = (val) => {
            overlay.classList.add('modal-out');
            setTimeout(() => { overlay.remove(); document.removeEventListener('keydown', onKey); resolve(val); }, 220);
        };
        const onKey = (e) => {
            if (e.key === 'Escape') done(false);
            if (e.key === 'Enter') done(true);
        };
        overlay.querySelector('.modal-confirm').addEventListener('click', () => done(true));
        overlay.querySelector('.modal-cancel').addEventListener('click', () => done(false));
        overlay.addEventListener('click', (e) => { if (e.target === overlay) done(false); });
        document.addEventListener('keydown', onKey);
        document.body.appendChild(overlay);
        setTimeout(() => overlay.querySelector('.modal-confirm').focus(), 30);
    });
}

/* ---------- Success flash (short celebratory popup) ---------- */
function showSuccessFlash(text) {
    const container = $('toast-container');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'success-flash';
    el.innerHTML = `
        <div class="success-flash-ring"><i class="fa-solid fa-check"></i></div>
        <span></span>
    `;
    el.querySelector('span').textContent = text;
    container.appendChild(el);
    setTimeout(() => { el.classList.add('toast-out'); }, 1400);
    setTimeout(() => el.remove(), 1750);
}
