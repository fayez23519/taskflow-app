/* ==========================================================
   TaskFlow — Vanilla JS
   Auth (hashed pw) · i18n (AR/EN) · Tasks · Filters · Theme
   ========================================================== */

/* ---------- i18n ---------- */
const I18N = {
    en: {
        'hero.eyebrow': 'Frontend Portfolio Project',
        'hero.title': 'Organize your day with',
        'hero.lead': 'A polished productivity app with authentication, search, filters, categories, and real-time progress tracking — built with vanilla HTML, CSS & JavaScript.',
        'feat.search': 'Instant search',
        'feat.filter': 'Smart filters',
        'feat.cat': 'Categories',
        'feat.progress': 'Live progress',
        'auth.login': 'Login',
        'auth.signup': 'Sign Up',
        'auth.loginTitle': 'Welcome back',
        'auth.loginSub': 'Sign in to access your personal task board.',
        'auth.signupTitle': 'Create your account',
        'auth.signupSub': 'Start organizing tasks in seconds.',
        'auth.username': 'Username',
            'auth.email': 'Email',
        'auth.password': 'Password',
        'auth.loginBtn': 'Sign in',
        'auth.signupBtn': 'Create account',
        'auth.pwHint': 'Use at least 6 characters, mix letters & numbers.',
        'err.userReq': 'Username is required.',
        'err.userShort': 'Username must be at least 3 characters.',
        'err.userChars': 'Only letters, numbers, dot, dash and underscore.',
        'err.emailReq': 'Email is required.',
        'err.emailInvalid': 'Please enter a valid email address.',
        'err.pwReq': 'Password is required.',
        'err.pwShort': 'Password must be at least 6 characters.',
        'err.userExists': 'This username is already taken.',
        'err.badCreds': 'Invalid username or password.',
        'ok.welcome': 'Welcome, {name}!',
        'ok.account': 'Account created successfully.',
        'ok.loggedOut': 'You have been logged out.',
        'app.signedInAs': 'Signed in as',
        'app.logout': 'Logout',
        'app.add': 'Add',
        'app.addPh': 'Add your task…',
        'app.searchPh': 'Search tasks…',
        'app.clearAll': 'Delete All',
        'stats.total': 'Total',
        'stats.done': 'Completed',
        'stats.left': 'Remaining',
        'stats.completeSuffix': 'complete',
        'filter.all': 'All tasks',
        'filter.done': 'Completed',
        'filter.pending': 'Pending',
        'sort.new': 'Newest first',
        'sort.old': 'Oldest first',
        'cat.general': 'General',
        'cat.programming': 'Programming',
        'cat.study': 'Study',
        'cat.work': 'Work',
        'cat.personal': 'Personal',
        'task.added': 'Task added successfully.',
        'task.deleted': 'Task deleted.',
        'task.updated': 'Task updated.',
        'task.done': 'Task marked as completed.',
        'task.pending': 'Task marked as pending.',
        'task.cleared': 'All tasks cleared.',
        'task.empty': 'No tasks match your current view.',
        'task.needText': 'Please enter a task first.',
        'footer.copy': '© {year} TaskFlow — All rights reserved.',
    },
    ar: {
        'hero.eyebrow': 'مشروع بورتفوليو فرونت-إند',
        'hero.title': 'نظّم يومك مع',
        'hero.lead': 'تطبيق إنتاجية أنيق يتضمّن تسجيل الدخول، البحث، الفلاتر، التصنيفات، وتتبّع التقدم لحظياً — مبني بلغات HTML و CSS و JavaScript فقط.',
        'feat.search': 'بحث فوري',
        'feat.filter': 'فلاتر ذكية',
        'feat.cat': 'تصنيفات',
        'feat.progress': 'تقدّم مباشر',
        'auth.login': 'تسجيل الدخول',
        'auth.signup': 'إنشاء حساب',
        'auth.loginTitle': 'مرحباً بعودتك',
        'auth.loginSub': 'سجّل الدخول للوصول إلى لوحة مهامك الشخصية.',
        'auth.signupTitle': 'أنشئ حسابك',
        'auth.signupSub': 'ابدأ بتنظيم مهامك خلال ثوانٍ.',
        'auth.username': 'اسم المستخدم',
            'auth.email': 'البريد الإلكتروني',
        'auth.password': 'كلمة المرور',
        'auth.loginBtn': 'دخول',
        'auth.signupBtn': 'إنشاء الحساب',
        'auth.pwHint': 'استخدم 6 أحرف على الأقل، مع مزج الحروف والأرقام.',
        'err.userReq': 'اسم المستخدم مطلوب.',
        'err.userShort': 'يجب أن يكون اسم المستخدم 3 أحرف على الأقل.',
        'err.userChars': 'يُسمح فقط بالأحرف والأرقام والنقطة والشرطة والشرطة السفلية.',
        'err.emailReq': 'البريد الإلكتروني مطلوب.',
        'err.emailInvalid': 'الرجاء إدخال عنوان بريد إلكتروني صالح.',
        'err.pwReq': 'كلمة المرور مطلوبة.',
        'err.pwShort': 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.',
        'err.userExists': 'اسم المستخدم مستخدم بالفعل.',
        'err.badCreds': 'اسم المستخدم أو كلمة المرور غير صحيحة.',
        'ok.welcome': 'أهلاً بك، {name}!',
        'ok.account': 'تم إنشاء الحساب بنجاح.',
        'ok.loggedOut': 'تم تسجيل الخروج.',
        'app.signedInAs': 'مسجّل الدخول باسم',
        'app.logout': 'خروج',
        'app.add': 'إضافة',
        'app.addPh': 'أضف مهمتك…',
        'app.searchPh': 'ابحث في المهام…',
        'app.clearAll': 'حذف الكل',
        'stats.total': 'الإجمالي',
        'stats.done': 'مكتملة',
        'stats.left': 'متبقية',
        'stats.completeSuffix': 'مكتمل',
        'filter.all': 'كل المهام',
        'filter.done': 'المكتملة',
        'filter.pending': 'غير المكتملة',
        'sort.new': 'الأحدث أولاً',
        'sort.old': 'الأقدم أولاً',
        'cat.general': 'عام',
        'cat.programming': 'برمجة',
        'cat.study': 'دراسة',
        'cat.work': 'عمل',
        'cat.personal': 'شخصي',
        'task.added': 'تمت إضافة المهمة بنجاح.',
        'task.deleted': 'تم حذف المهمة.',
        'task.updated': 'تم تحديث المهمة.',
        'task.done': 'تم وضع علامة على المهمة كمكتملة.',
        'task.pending': 'تم إعادة المهمة إلى قائمة الانتظار.',
        'task.cleared': 'تم حذف كل المهام.',
        'task.empty': 'لا توجد مهام تطابق العرض الحالي.',
        'task.needText': 'يرجى إدخال المهمة أولاً.',
        'footer.copy': '© {year} TaskFlow — جميع الحقوق محفوظة.',
    }
};

const LANG_KEY = 'tf-lang';
const THEME_KEY = 'tf-theme';
const USERS_KEY = 'tf-users';
const ACTIVE_KEY = 'tf-active-user';
const TASKS_KEY_PREFIX = 'tf-tasks-';

let lang = localStorage.getItem(LANG_KEY) || (navigator.language?.startsWith('ar') ? 'ar' : 'en');
const t = (key, vars = {}) => {
    let s = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
    Object.keys(vars).forEach(k => { s = s.replace(`{${k}}`, vars[k]); });
    return s;
};

/* ---------- Elements ---------- */
const $ = (id) => document.getElementById(id);
const inputBox = $('input-box');
const list = $('iist');
const addButton = $('btn');
const clearButton = $('clear-btn');
const themeButton = $('theme-btn');
const langButton = $('lang-btn');
const langLabel = $('lang-label');
const searchBox = $('search-box');
const filterSelect = $('filter-select');
const sortSelect = $('sort-select');
const categorySelect = $('category-select');
const totalCount = $('total-count');
const completedCount = $('completed-count');
const remainingCount = $('remaining-count');
const progressFill = $('progress-fill');
const progressPct = $('progress-pct');
const authView = $('auth-view');
const todoView = $('todo-view');
const loginForm = $('login-form');
const signupForm = $('signup-form');
const showLoginButton = $('show-login');
const showSignupButton = $('show-signup');
const logoutButton = $('logout-btn');
const userName = $('user-name');
const userAvatar = $('user-avatar');
const toastContainer = $('toast-container');

let tasks = [];
let editingId = null;
let searchQuery = '';
let filterMode = 'all';
let sortMode = 'newest';
let currentUser = null;

/* ---------- Utils ---------- */
async function sha256(text) {
    if (crypto?.subtle) {
        const buf = new TextEncoder().encode(text);
        const hash = await crypto.subtle.digest('SHA-256', buf);
        return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    // Very weak fallback (should not happen in modern browsers)
    return 'plain:' + text;
}

function formatDate(value) {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    const locale = lang === 'ar' ? 'ar' : 'en';
    return d.toLocaleString(locale, { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
}

function showToast(msg, type = 'info') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    const icons = { success: 'fa-circle-check', error: 'fa-circle-xmark', info: 'fa-circle-info' };
    el.innerHTML = `<i class="fa-solid ${icons[type] || icons.info}"></i><span></span>`;
    el.querySelector('span').textContent = msg;
    toastContainer.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(-6px)'; }, 2400);
    setTimeout(() => el.remove(), 2800);
}

/* ---------- i18n apply ---------- */
function applyLanguage() {
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langLabel.textContent = lang === 'ar' ? 'EN' : 'AR';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // pass dynamic vars (e.g., year)
        el.textContent = t(key, { year: String(new Date().getFullYear()) });
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
    // Re-render dynamic bits
    renderTasks();
}

/* ---------- Theme ---------- */
function applyTheme(theme) {
    const dark = theme === 'dark';
    document.body.classList.toggle('dark-mode', dark);
    themeButton.innerHTML = `<i class="fa-solid ${dark ? 'fa-sun' : 'fa-moon'}"></i>`;
}

/* ---------- Users ---------- */
const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
const saveUsers = (u) => localStorage.setItem(USERS_KEY, JSON.stringify(u));

/* ---------- Validation ---------- */
function setError(inputEl, message) {
    const wrap = inputEl.closest('.input-wrap');
    const err = document.querySelector(`.field-error[data-for="${inputEl.id}"]`);
    if (wrap) wrap.classList.toggle('invalid', Boolean(message));
    if (err) err.textContent = message || '';
}

function validateEmail(el) {
    const v = el.value.trim();
    if (!v) return t('err.emailReq');
    // Simple email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(v)) return t('err.emailInvalid');
    return '';
}
function validatePassword(el) {
    const v = el.value;
    if (!v) return t('err.pwReq');
    if (v.length < 6) return t('err.pwShort');
    return '';
}

function passwordStrength(pw) {
    let s = 0;
    if (pw.length >= 6) s++;
    if (pw.length >= 10) s++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
    if (/\d/.test(pw) && /[^A-Za-z0-9]/.test(pw)) s++;
    return s;
}

/* ---------- Tasks ---------- */
function tasksKey() { return TASKS_KEY_PREFIX + currentUser; }

function loadTasks() {
    if (!currentUser) { tasks = []; return; }
    try {
        const raw = JSON.parse(localStorage.getItem(tasksKey()) || '[]');
        tasks = Array.isArray(raw) ? raw : [];
    } catch { tasks = []; }
}
function saveTasks() {
    if (!currentUser) return;
    localStorage.setItem(tasksKey(), JSON.stringify(tasks));
}

function updateStats() {
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
            const inp = document.createElement('input');
            inp.type = 'text'; inp.value = task.text; inp.maxLength = 120;
            const save = document.createElement('button'); save.type = 'button'; save.className = 'save-btn';
            save.innerHTML = '<i class="fa-solid fa-check"></i>';
            const cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'cancel-btn';
            cancel.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            save.addEventListener('click', () => {
                const v = inp.value.trim();
                if (!v) { inp.focus(); return; }
                tasks = tasks.map(x => x.id === task.id ? { ...x, text: v } : x);
                editingId = null; saveTasks(); renderTasks();
                showToast(t('task.updated'), 'info');
            });
            cancel.addEventListener('click', () => { editingId = null; renderTasks(); });
            inp.addEventListener('keydown', e => {
                if (e.key === 'Enter') { e.preventDefault(); save.click(); }
                if (e.key === 'Escape') { e.preventDefault(); cancel.click(); }
            });
            wrap.append(inp, save, cancel);
            li.appendChild(wrap);
            list.appendChild(li);
            setTimeout(() => inp.focus(), 0);
            return;
        }

        const content = document.createElement('div');
        content.className = 'task-content';
        const text = document.createElement('span'); text.className = 'task-text'; text.textContent = task.text;
        const meta = document.createElement('small'); meta.className = 'task-meta';
        meta.innerHTML = `<i class="fa-regular fa-clock"></i> ${formatDate(task.createdAt)}`;
        const badge = document.createElement('span');
        badge.className = 'task-badge'; badge.dataset.cat = task.category || 'general';
        badge.textContent = t('cat.' + (task.category || 'general'));

        content.append(text, meta, badge);

        const actions = document.createElement('div');
        actions.className = 'task-actions';
        const edit = document.createElement('button'); edit.type = 'button'; edit.className = 'edit-btn';
        edit.setAttribute('aria-label', 'edit');
        edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
        const del = document.createElement('button'); del.type = 'button'; del.className = 'delete-btn';
        del.setAttribute('aria-label', 'delete');
        del.innerHTML = '<i class="fa-solid fa-trash"></i>';

        edit.addEventListener('click', (e) => { e.stopPropagation(); editingId = task.id; renderTasks(); });
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter(x => x.id !== task.id);
            if (editingId === task.id) editingId = null;
            saveTasks(); renderTasks();
            showToast(t('task.deleted'), 'error');
        });

        actions.append(edit, del);
        li.append(content, actions);
        list.appendChild(li);
    });

    updateStats();
}

function addTask() {
    const text = inputBox.value.trim();
    if (!text) { showToast(t('task.needText'), 'error'); inputBox.focus(); return; }
    tasks.push({
        id: `task-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
        text,
        checked: false,
        category: categorySelect.value,
        createdAt: new Date().toISOString(),
    });
    inputBox.value = '';
    categorySelect.value = 'general';
    saveTasks(); renderTasks();
    showToast(t('task.added'), 'success');
    inputBox.focus();
}

/* ---------- Session ---------- */
function setCurrentUser(username) {
    currentUser = username;
    localStorage.setItem(ACTIVE_KEY, username);
    userName.textContent = username;
    userAvatar.textContent = username.charAt(0).toUpperCase();
    authView.classList.add('hidden');
    todoView.classList.remove('hidden');
    loadTasks(); renderTasks();
}

function logout() {
    currentUser = null;
    localStorage.removeItem(ACTIVE_KEY);
    authView.classList.remove('hidden');
    todoView.classList.add('hidden');
    tasks = [];
    showToast(t('ok.loggedOut'), 'info');
}

/* ---------- Auth handlers ---------- */
showLoginButton.addEventListener('click', () => {
    showLoginButton.classList.add('active'); showLoginButton.setAttribute('aria-selected', 'true');
    showSignupButton.classList.remove('active'); showSignupButton.setAttribute('aria-selected', 'false');
    loginForm.classList.remove('hidden'); signupForm.classList.add('hidden');
});
showSignupButton.addEventListener('click', () => {
    showSignupButton.classList.add('active'); showSignupButton.setAttribute('aria-selected', 'true');
    showLoginButton.classList.remove('active'); showLoginButton.setAttribute('aria-selected', 'false');
    signupForm.classList.remove('hidden'); loginForm.classList.add('hidden');
});

// Live validation for email fields
['login-email', 'signup-email'].forEach(id => {
    const el = $(id);
    if (!el) return;
    el.addEventListener('input', () => setError(el, validateEmail(el)));
    el.addEventListener('blur', () => setError(el, validateEmail(el)));
});
['login-password', 'signup-password'].forEach(id => {
    const el = $(id);
    el.addEventListener('input', () => setError(el, validatePassword(el)));
});

// Password strength meter
const signupPw = $('signup-password');
const strengthEl = document.querySelector('.strength');
signupPw.addEventListener('input', () => {
    strengthEl.dataset.level = String(passwordStrength(signupPw.value));
});

// Toggle eye
document.querySelectorAll('.toggle-eye').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = $(btn.dataset.target);
        const showing = target.type === 'text';
        target.type = showing ? 'password' : 'text';
        btn.querySelector('i').className = showing ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash';
    });
});

// Login submit
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const uEl = $('login-email'); const pEl = $('login-password');
    const uErr = validateEmail(uEl); const pErr = validatePassword(pEl);
    setError(uEl, uErr); setError(pEl, pErr);
    if (uErr || pErr) return;

    const username = uEl.value.trim();
    const users = getUsers();
    const record = users[username];
    const hashed = await sha256(pEl.value);
    if (!record || record.password !== hashed) {
        setError(pEl, t('err.badCreds'));
        showToast(t('err.badCreds'), 'error');
        return;
    }
    loginForm.reset();
    setCurrentUser(username);
    showToast(t('ok.welcome', { name: username }), 'success');
});

// Signup submit
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const uEl = $('signup-email'); const pEl = $('signup-password');
    const uErr = validateEmail(uEl); const pErr = validatePassword(pEl);
    setError(uEl, uErr); setError(pEl, pErr);
    if (uErr || pErr) return;

    const username = uEl.value.trim();
    const users = getUsers();
    if (users[username]) {
        setError(uEl, t('err.userExists'));
        showToast(t('err.userExists'), 'error');
        return;
    }
    users[username] = { password: await sha256(pEl.value), createdAt: new Date().toISOString() };
    saveUsers(users);
    signupForm.reset();
    strengthEl.dataset.level = '0';
    setCurrentUser(username);
    showToast(t('ok.account'), 'success');
});

logoutButton.addEventListener('click', logout);

/* ---------- Task handlers ---------- */
addButton.addEventListener('click', addTask);
inputBox.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addTask(); } });
clearButton.addEventListener('click', () => {
    if (!tasks.length) return;
    tasks = []; editingId = null; saveTasks(); renderTasks();
    showToast(t('task.cleared'), 'error');
});
searchBox.addEventListener('input', (e) => { searchQuery = e.target.value; renderTasks(); });
filterSelect.addEventListener('change', (e) => { filterMode = e.target.value; renderTasks(); });
sortSelect.addEventListener('change', (e) => { sortMode = e.target.value; renderTasks(); });

list.addEventListener('click', (e) => {
    const li = e.target.closest('li.task-item');
    if (!li || li.querySelector('.edit-form')) return;
    if (e.target.closest('.edit-btn, .delete-btn')) return;
    const id = li.dataset.id;
    const before = tasks.find(x => x.id === id);
    tasks = tasks.map(x => x.id === id ? { ...x, checked: !x.checked } : x);
    saveTasks(); renderTasks();
    showToast(before && !before.checked ? t('task.done') : t('task.pending'), before && !before.checked ? 'success' : 'info');
});

/* ---------- Language & Theme toggles ---------- */
langButton.addEventListener('click', () => {
    lang = (lang === 'ar') ? 'en' : 'ar';
    localStorage.setItem(LANG_KEY, lang);
    applyLanguage();
});
themeButton.addEventListener('click', () => {
    const next = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
});

/* ---------- Init ---------- */
const yearEl = $('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
applyTheme(localStorage.getItem(THEME_KEY) || 'light');
applyLanguage();

const savedUser = localStorage.getItem(ACTIVE_KEY);
if (savedUser && getUsers()[savedUser]) {
    setCurrentUser(savedUser);
} else {
    authView.classList.remove('hidden');
    todoView.classList.add('hidden');
}
