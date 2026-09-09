function filterUsers() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#activityTableBody tr');
    
    rows.forEach(row => {
        const username = row.cells[0].textContent.toLowerCase();
        const ip = row.cells[1].textContent.toLowerCase();
        
        if (username.includes(input) || ip.includes(input)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function logout() {
    localStorage.removeItem('adminLogin');
    alert('You have been logged out.');
    window.location.href = '../index.html';
}

function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('open');
}

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

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    const toggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (toggle) toggle.checked = true;
    }
}

// Check if admin is logged in
function checkAdminLogin() {
    const adminLogin = localStorage.getItem('adminLogin');
    if (!adminLogin) {
        window.location.href = 'login.html';
    }
}

// Load theme and check login on page load
document.addEventListener('DOMContentLoaded', function() {
    loadThemePreference();
    if (document.body.classList.contains('admin-dashboard')) {
        checkAdminLogin();
    }
});

// Close settings panel when clicking outside
document.addEventListener('click', function(event) {
    const panel = document.getElementById('settingsPanel');
    const settingsBtn = document.querySelector('.settings-btn');
    
    if (panel && settingsBtn && !panel.contains(event.target) && !settingsBtn.contains(event.target)) {
        panel.classList.remove('open');
    }
});