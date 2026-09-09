// Admin Login Credentials
const ADMIN_USERNAME = 'ghost441245';
const ADMIN_PASSWORD = '112208123@pyqjee';

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Get user's IP and location info
        getClientIPAndLocation();
        
        // Store login info in localStorage
        const loginData = {
            username: username,
            loginTime: new Date().toLocaleString(),
            ip: 'Retrieving...',
            location: 'Retrieving...'
        };
        localStorage.setItem('adminLogin', JSON.stringify(loginData));
        
        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 500);
    } else {
        alert('❌ Invalid username or password. Please try again.\n\nDefault credentials:\nUsername: ghost441245\nPassword: 112208123@pyqjee');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

function getClientIPAndLocation() {
    // Using a public API to get IP and location
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const loginData = {
                username: 'ghost441245',
                loginTime: new Date().toLocaleString(),
                ip: data.ip,
                location: `${data.city}, ${data.region}, ${data.country_name}`,
                userAgent: navigator.userAgent
            };
            localStorage.setItem('adminLogin', JSON.stringify(loginData));
            console.log('Admin Login Info:', loginData);
        })
        .catch(error => {
            console.log('Could not fetch IP:', error);
            const loginData = {
                username: 'ghost441245',
                loginTime: new Date().toLocaleString(),
                ip: 'Unable to fetch',
                location: 'Unable to fetch',
                userAgent: navigator.userAgent
            };
            localStorage.setItem('adminLogin', JSON.stringify(loginData));
        });
}

function logout() {
    localStorage.removeItem('adminLogin');
    alert('You have been logged out.');
    window.location.href = '../index.html';
}

function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    if (panel) panel.classList.toggle('open');
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

document.addEventListener('DOMContentLoaded', loadThemePreference);