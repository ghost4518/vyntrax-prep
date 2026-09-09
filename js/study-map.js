function filterSubject(subject) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Show/hide timelines based on filter
    const mathTimeline = document.getElementById('math-timeline');
    const physicsTimeline = document.getElementById('physics-timeline');
    const chemistryTimeline = document.getElementById('chemistry-timeline');

    if (subject === 'all') {
        mathTimeline.style.display = 'block';
        physicsTimeline.style.display = 'block';
        chemistryTimeline.style.display = 'block';
    } else if (subject === 'math') {
        mathTimeline.style.display = 'block';
        physicsTimeline.style.display = 'none';
        chemistryTimeline.style.display = 'none';
    } else if (subject === 'physics') {
        mathTimeline.style.display = 'none';
        physicsTimeline.style.display = 'block';
        chemistryTimeline.style.display = 'none';
    } else if (subject === 'chemistry') {
        mathTimeline.style.display = 'none';
        physicsTimeline.style.display = 'none';
        chemistryTimeline.style.display = 'block';
    }
}

function startBacklogClear(topic) {
    alert(`Starting backlog clearing session for: ${topic}\n\nYou will get:\n- Comprehensive theory notes\n- Step-by-step solutions\n- Concept-wise questions\n- Progress tracking\n\nLet's clear your doubts!`);
    // In production, this would redirect to a detailed learning page
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

document.addEventListener('DOMContentLoaded', loadThemePreference);