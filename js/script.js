// Toggle Settings Panel
function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('open');
}

// Toggle Dark/Light Theme
function toggleTheme() {
    const toggle = document.getElementById('themeToggle');
    const body = document.body;
    
    if (toggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Load Theme Preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    const toggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }
}

// Redirect to Admin Login
function redirectToAdmin() {
    window.location.href = 'admin/login.html';
}

// Load theme preference on page load
document.addEventListener('DOMContentLoaded', loadThemePreference);

// Close settings panel when clicking outside
document.addEventListener('click', function(event) {
    const panel = document.getElementById('settingsPanel');
    const settingsBtn = document.querySelector('.settings-btn');
    
    if (!panel.contains(event.target) && !settingsBtn.contains(event.target)) {
        panel.classList.remove('open');
    }
});