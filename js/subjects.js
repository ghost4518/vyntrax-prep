function toggleChapter(header) {
    const content = header.nextElementSibling;
    header.classList.toggle('open');
    content.classList.toggle('show');
}

function showQuestions(topic) {
    alert(`Loading practice questions for: ${topic}\n\nThis feature will show chapter-wise and concept-wise questions with detailed solutions.`);
    // In production, this would load questions from a database
}

// Load theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    const toggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (toggle) toggle.checked = true;
    }
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

function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', loadThemePreference);

document.addEventListener('click', function(event) {
    const panel = document.getElementById('settingsPanel');
    const settingsBtn = document.querySelector('.settings-btn');
    
    if (panel && settingsBtn && !panel.contains(event.target) && !settingsBtn.contains(event.target)) {
        panel.classList.remove('open');
    }
});