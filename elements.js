/* elements.js — cache DOM elements used across modules */
const elements = (function(){
    return {
        inputBox: $('input-box'),
        list: $('iist'),
        addButton: $('btn'),
        clearButton: $('clear-btn'),
        themeButton: $('theme-btn'),
        langButton: $('lang-btn'),
        langLabel: $('lang-label'),
        searchBox: $('search-box'),
        filterSelect: $('filter-select'),
        sortSelect: $('sort-select'),
        categorySelect: $('category-select'),
        totalCount: $('total-count'),
        completedCount: $('completed-count'),
        remainingCount: $('remaining-count'),
        progressFill: $('progress-fill'),
        progressPct: $('progress-pct'),
        authView: $('auth-view'),
        todoView: $('todo-view'),
        loginForm: $('login-form'),
        signupForm: $('signup-form'),
        showLoginButton: $('show-login'),
        showSignupButton: $('show-signup'),
        logoutButton: $('logout-btn'),
        userName: $('user-name'),
        userAvatar: $('user-avatar'),
        toastContainer: $('toast-container')
    };
})();
