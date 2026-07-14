/* i18n.js — translations and apply helper */
const I18N = (function(){
    return {
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
            'auth.email': 'Email',
            'auth.password': 'Password',
            'auth.loginBtn': 'Sign in',
            'auth.signupBtn': 'Create account',
            'auth.pwHint': 'Use at least 6 characters, mix letters & numbers.',
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
            'auth.email': 'البريد الإلكتروني',
            'auth.password': 'كلمة المرور',
            'auth.loginBtn': 'دخول',
            'auth.signupBtn': 'إنشاء الحساب',
            'auth.pwHint': 'استخدم 6 أحرف على الأقل، مع مزج الحروف والأرقام.',
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
})();

const LANG_KEY = 'tf-lang';
const THEME_KEY = 'tf-theme';
const USERS_KEY = 'tf-users';
const ACTIVE_KEY = 'tf-active-user';
const TASKS_KEY_PREFIX = 'tf-tasks-';

let lang = localStorage.getItem(LANG_KEY) || (navigator.language?.startsWith('ar') ? 'ar' : 'en');
function t(key, vars = {}) {
    let s = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
    Object.keys(vars).forEach(k => { s = s.replace(`{${k}}`, vars[k]); });
    return s;
}

/* ---------- i18n & UI helpers (added) ---------- */
function applyLanguage() {
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (elements.langLabel) elements.langLabel.textContent = lang === 'ar' ? 'EN' : 'AR';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key, { year: String(new Date().getFullYear()) });
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
    if (typeof renderTasks === 'function') renderTasks();
}

function applyTheme(theme) {
    const dark = theme === 'dark';
    document.body.classList.toggle('dark-mode', dark);
    if (elements.themeButton) {
        elements.themeButton.innerHTML = `<i class="fa-solid ${dark ? 'fa-sun' : 'fa-moon'}"></i>`;
    }
}

function setError(inputEl, message) {
    const wrap = inputEl.closest('.input-wrap');
    const err = document.querySelector(`.field-error[data-for="${inputEl.id}"]`);
    if (wrap) wrap.classList.toggle('invalid', Boolean(message));
    if (err) err.textContent = message || '';
}

function validateEmail(el) {
    const v = el.value.trim();
    if (!v) return t('err.emailReq');
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

/* Extra i18n keys for modal confirmations */
(function(){
    const extraEn = {
        'confirm.deleteTitle': 'Delete task?',
        'confirm.deleteMsg': 'This task will be permanently removed. This action cannot be undone.',
        'confirm.clearTitle': 'Delete all tasks?',
        'confirm.clearMsg': 'All your tasks will be permanently removed. Are you sure?',
        'confirm.logoutTitle': 'Sign out?',
        'confirm.logoutMsg': 'You will need to sign in again to access your tasks.',
        'confirm.yes': 'Yes, delete',
        'confirm.yesLogout': 'Yes, sign out',
        'confirm.no': 'Cancel',
    };
    const extraAr = {
        'confirm.deleteTitle': 'حذف المهمة؟',
        'confirm.deleteMsg': 'سيتم حذف هذه المهمة نهائياً ولا يمكن التراجع عن هذا الإجراء.',
        'confirm.clearTitle': 'حذف كل المهام؟',
        'confirm.clearMsg': 'سيتم حذف كل مهامك نهائياً. هل أنت متأكد؟',
        'confirm.logoutTitle': 'تسجيل الخروج؟',
        'confirm.logoutMsg': 'ستحتاج إلى تسجيل الدخول مرة أخرى للوصول إلى مهامك.',
        'confirm.yes': 'نعم، احذف',
        'confirm.yesLogout': 'نعم، سجّل الخروج',
        'confirm.no': 'إلغاء',
    };
    Object.assign(I18N.en, extraEn);
    Object.assign(I18N.ar, extraAr);
})();
