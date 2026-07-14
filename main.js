/* main.js — app init and wiring between modules */
// Wire task handlers and initialization
(function(){
    // Expose globals expected by modules (simple non-bundled approach)
    window.I18N = I18N;
    window.t = t;
    window.LANG_KEY = LANG_KEY;
    window.THEME_KEY = THEME_KEY;
    window.USERS_KEY = USERS_KEY;
    window.ACTIVE_KEY = ACTIVE_KEY;
    window.TASKS_KEY_PREFIX = TASKS_KEY_PREFIX;
    window.$ = $;
    window.elements = elements;
    window.sha256 = sha256;
    window.formatDate = formatDate;
    window.showToast = showToast;

    // load existing user
    const yearEl = $('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
    applyTheme(localStorage.getItem(THEME_KEY) || 'light');
    applyLanguage();

    const savedUser = localStorage.getItem(ACTIVE_KEY);
    if (savedUser && JSON.parse(localStorage.getItem(USERS_KEY) || '{}')[savedUser]) {
        setCurrentUser(savedUser);
    } else {
        elements.authView.classList.remove('hidden');
        elements.todoView.classList.add('hidden');
    }

    // tasks wiring
    elements.addButton.addEventListener('click', addTask);
    elements.inputBox.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addTask(); } });
    elements.clearButton.addEventListener('click', async () => {
        if (!tasks.length) return;
        const ok = await showConfirm({
            title: t('confirm.clearTitle'),
            message: t('confirm.clearMsg'),
            confirmText: t('confirm.yes'),
            cancelText: t('confirm.no'),
            tone: 'danger'
        });
        if (!ok) return;
        tasks = []; editingId = null; saveTasks(); renderTasks();
        showToast(t('task.cleared'), 'error');
    });
    elements.searchBox.addEventListener('input', (e) => { searchQuery = e.target.value; renderTasks(); });
    elements.filterSelect.addEventListener('change', (e) => { filterMode = e.target.value; renderTasks(); });
    elements.sortSelect.addEventListener('change', (e) => { sortMode = e.target.value; renderTasks(); });

    elements.list.addEventListener('click', (e) => {
        const li = e.target.closest('li.task-item');
        if (!li || li.querySelector('.edit-form')) return;
        if (e.target.closest('.edit-btn, .delete-btn')) return;
        const id = li.dataset.id;
        const before = tasks.find(x => x.id === id);
        tasks = tasks.map(x => x.id === id ? { ...x, checked: !x.checked } : x);
        saveTasks(); renderTasks();
        showToast(before && !before.checked ? t('task.done') : t('task.pending'), before && !before.checked ? 'success' : 'info');
    });

    // language/theme toggles
    elements.langButton.addEventListener('click', () => { lang = (lang === 'ar') ? 'en' : 'ar'; localStorage.setItem(LANG_KEY, lang); applyLanguage(); });
    elements.themeButton.addEventListener('click', () => { const next = document.body.classList.contains('dark-mode') ? 'light' : 'dark'; localStorage.setItem(THEME_KEY, next); applyTheme(next); });
})();
