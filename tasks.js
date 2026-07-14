/* tasks.js — task CRUD and rendering */
let tasks = [];
let editingId = null;
let searchQuery = '';
let filterMode = 'all';
let sortMode = 'newest';
let currentUser = null;

function tasksKey() { return TASKS_KEY_PREFIX + currentUser; }
function loadTasks() {
    if (!currentUser) { tasks = []; return; }
    try { const raw = JSON.parse(localStorage.getItem(tasksKey()) || '[]'); tasks = Array.isArray(raw) ? raw : []; } catch { tasks = []; }
}
function saveTasks() { if (!currentUser) return; localStorage.setItem(tasksKey(), JSON.stringify(tasks)); }

function updateStats() {
    const { totalCount, completedCount, remainingCount, progressFill, progressPct } = elements;
    const total = tasks.length;
    const done = tasks.filter(x => x.checked).length;
    totalCount.textContent = total;
    completedCount.textContent = done;
    remainingCount.textContent = total - done;
    const pct = total ? Math.round((done / total) * 100) : 0;
    progressFill.style.width = pct + '%';
    progressPct.textContent = pct + '%';
}

function getVisible() {
    const q = searchQuery.trim().toLowerCase();
    const filtered = tasks.filter(x => {
        const okQ = !q || x.text.toLowerCase().includes(q);
        const okF = filterMode === 'all' || (filterMode === 'completed' && x.checked) || (filterMode === 'pending' && !x.checked);
        return okQ && okF;
    });
    return filtered.sort((a, b) => {
        const diff = new Date(a.createdAt) - new Date(b.createdAt);
        return sortMode === 'newest' ? -diff : diff;
    });
}

function renderTasks() {
    const { list } = elements;
    if (!list) return;
    list.innerHTML = '';
    const visible = getVisible();
    if (visible.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'empty-state';
        empty.textContent = t('task.empty');
        list.appendChild(empty);
        updateStats();
        return;
    }

    visible.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item' + (task.checked ? ' checked' : '');
        li.dataset.id = task.id;

        if (editingId === task.id) {
            const wrap = document.createElement('div');
            wrap.className = 'edit-form';
            const inp = document.createElement('input'); inp.type = 'text'; inp.value = task.text; inp.maxLength = 120;
            const save = document.createElement('button'); save.type = 'button'; save.className = 'save-btn';
            save.innerHTML = '<i class="fa-solid fa-check"></i>';
            const cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'cancel-btn';
            cancel.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            save.addEventListener('click', () => {
                const v = inp.value.trim(); if (!v) { inp.focus(); return; }
                tasks = tasks.map(x => x.id === task.id ? { ...x, text: v } : x);
                editingId = null; saveTasks(); renderTasks(); showToast(t('task.updated'), 'success'); showSuccessFlash(t('task.updated'));
            });
            cancel.addEventListener('click', () => { editingId = null; renderTasks(); });
            inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); save.click(); } if (e.key === 'Escape') { e.preventDefault(); cancel.click(); } });
            wrap.append(inp, save, cancel); li.appendChild(wrap); list.appendChild(li); setTimeout(() => inp.focus(), 0); return;
        }

        const content = document.createElement('div'); content.className = 'task-content';
        const text = document.createElement('span'); text.className = 'task-text'; text.textContent = task.text;
        const meta = document.createElement('small'); meta.className = 'task-meta';
        meta.innerHTML = `<i class="fa-regular fa-clock"></i> ${formatDate(task.createdAt, lang)}`;
        const badge = document.createElement('span'); badge.className = 'task-badge'; badge.dataset.cat = task.category || 'general'; badge.textContent = t('cat.' + (task.category || 'general'));
        content.append(text, meta, badge);

        const actions = document.createElement('div'); actions.className = 'task-actions';
        const edit = document.createElement('button'); edit.type = 'button'; edit.className = 'edit-btn'; edit.setAttribute('aria-label', 'edit'); edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
        const del = document.createElement('button'); del.type = 'button'; del.className = 'delete-btn'; del.setAttribute('aria-label', 'delete'); del.innerHTML = '<i class="fa-solid fa-trash"></i>';
        edit.addEventListener('click', (e) => { e.stopPropagation(); editingId = task.id; renderTasks(); });
        del.addEventListener('click', async (e) => {
            e.stopPropagation();
            const ok = await showConfirm({
                title: t('confirm.deleteTitle'),
                message: t('confirm.deleteMsg'),
                confirmText: t('confirm.yes'),
                cancelText: t('confirm.no'),
                tone: 'danger'
            });
            if (!ok) return;
            const el = li;
            el.classList.add('task-removing');
            setTimeout(() => {
                tasks = tasks.filter(x => x.id !== task.id);
                if (editingId === task.id) editingId = null;
                saveTasks(); renderTasks();
                showToast(t('task.deleted'), 'error');
            }, 220);
        });
        actions.append(edit, del); li.append(content, actions); list.appendChild(li);
    });

    updateStats();
}

function addTask() {
    const { inputBox, categorySelect } = elements;
    const text = inputBox.value.trim(); if (!text) { showToast(t('task.needText'), 'error'); inputBox.focus(); return; }
    tasks.push({ id: `task-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`, text, checked: false, category: categorySelect.value, createdAt: new Date().toISOString(), });
    inputBox.value = ''; categorySelect.value = 'general'; saveTasks(); renderTasks(); showToast(t('task.added'), 'success'); showSuccessFlash(t('task.added')); inputBox.focus();
}

