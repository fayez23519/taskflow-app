/* auth.js — user signup/login and session */
function getUsers() { return JSON.parse(localStorage.getItem(USERS_KEY) || '{}'); }
function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }

function setCurrentUser(username) {
    currentUser = username; // global from tasks module after bundling
    localStorage.setItem(ACTIVE_KEY, username);
    elements.userName.textContent = username;
    elements.userAvatar.textContent = username.charAt(0).toUpperCase();
    elements.authView.classList.add('hidden');
    elements.todoView.classList.remove('hidden');
    loadTasks(); renderTasks();
}

function logout() {
    currentUser = null;
    localStorage.removeItem(ACTIVE_KEY);
    elements.authView.classList.remove('hidden');
    elements.todoView.classList.add('hidden');
    tasks = [];
    showToast(t('ok.loggedOut'), 'info');
}

// Auth handlers wiring
elements.showLoginButton.addEventListener('click', () => {
    elements.showLoginButton.classList.add('active'); elements.showLoginButton.setAttribute('aria-selected', 'true');
    elements.showSignupButton.classList.remove('active'); elements.showSignupButton.setAttribute('aria-selected', 'false');
    elements.loginForm.classList.remove('hidden'); elements.signupForm.classList.add('hidden');
});
elements.showSignupButton.addEventListener('click', () => {
    elements.showSignupButton.classList.add('active'); elements.showSignupButton.setAttribute('aria-selected', 'true');
    elements.showLoginButton.classList.remove('active'); elements.showLoginButton.setAttribute('aria-selected', 'false');
    elements.signupForm.classList.remove('hidden'); elements.loginForm.classList.add('hidden');
});

['login-email', 'signup-email'].forEach(id => { const el = $(id); if (!el) return; el.addEventListener('input', () => setError(el, validateEmail(el))); el.addEventListener('blur', () => setError(el, validateEmail(el))); });
['login-password', 'signup-password'].forEach(id => { const el = $(id); el.addEventListener('input', () => setError(el, validatePassword(el))); });

const signupPw = $('signup-password'); const strengthEl = document.querySelector('.strength'); if (signupPw) signupPw.addEventListener('input', () => { if (strengthEl) strengthEl.dataset.level = String(passwordStrength(signupPw.value)); });

document.querySelectorAll('.toggle-eye').forEach(btn => { btn.addEventListener('click', () => { const target = $(btn.dataset.target); const showing = target.type === 'text'; target.type = showing ? 'password' : 'text'; btn.querySelector('i').className = showing ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'; }); });

// Login
elements.loginForm.addEventListener('submit', async (e) => {
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
    elements.loginForm.reset();
    setCurrentUser(username);
    showToast(t('ok.welcome', { name: username }), 'success'); showSuccessFlash(t('ok.welcome', { name: username }));
});

// Signup
elements.signupForm.addEventListener('submit', async (e) => {
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
    elements.signupForm.reset(); if (strengthEl) strengthEl.dataset.level = '0';
    setCurrentUser(username);
    showToast(t('ok.account'), 'success'); showSuccessFlash(t('ok.account'));
});

elements.logoutButton.addEventListener('click', async () => {
    const ok = await showConfirm({
        title: t('confirm.logoutTitle'),
        message: t('confirm.logoutMsg'),
        confirmText: t('confirm.yesLogout'),
        cancelText: t('confirm.no'),
        tone: 'primary',
        icon: 'fa-right-from-bracket'
    });
    if (ok) logout();
});

