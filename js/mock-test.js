// Sample questions data
const questionsData = {
    'Full_Mock_1': [
        {
            question: 'What is the value of log₁₀(1000)?',
            options: ['1', '2', '3', '4'],
            correct: 2,
            explanation: 'log₁₀(1000) = log₁₀(10³) = 3. Using the property logₐ(aⁿ) = n, we get the answer as 3.',
            subject: 'Mathematics',
            concept: 'Logarithms'
        },
        {
            question: 'Which of the following is the SI unit of force?',
            options: ['Dyne', 'Newton', 'Erg', 'Joule'],
            correct: 1,
            explanation: 'The SI unit of force is Newton (N). 1 N = 1 kg⋅m/s². Dyne is the CGS unit.',
            subject: 'Physics',
            concept: 'Units and Measurements'
        },
        {
            question: 'What is the general formula for an alkane?',
            options: ['CₙH₂ₙ', 'CₙH₂ₙ+₂', 'CₙH₂ₙ-₂', 'CₙHₙ'],
            correct: 1,
            explanation: 'The general formula for alkanes (saturated hydrocarbons) is CₙH₂ₙ+₂, where n is the number of carbon atoms.',
            subject: 'Chemistry',
            concept: 'Hydrocarbons'
        }
    ],
    'Math_Chapter_1': [
        {
            question: 'If f(x) = 2x + 3, what is f(5)?',
            options: ['8', '10', '13', '15'],
            correct: 2,
            explanation: 'f(5) = 2(5) + 3 = 10 + 3 = 13',
            subject: 'Mathematics',
            concept: 'Functions'
        }
    ]
};

let currentTest = null;
let currentQuestion = 0;
let userAnswers = {};
let testStartTime = null;

function startTest(testName) {
    currentTest = testName;
    currentQuestion = 0;
    userAnswers = {};
    testStartTime = Date.now();
    
    document.getElementById('mockContent').style.display = 'none';
    document.getElementById('testInterface').style.display = 'block';
    document.getElementById('testTitle').textContent = testName.replace(/_/g, ' ');
    
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const questions = questionsData[currentTest] || questionsData['Full_Mock_1'];
    const q = questions[currentQuestion];
    
    if (!q) return;
    
    const questionNum = currentQuestion + 1;
    document.getElementById('questionDisplay').innerHTML = `
        <h4>Question ${questionNum}</h4>
        <p><strong>${q.question}</strong></p>
        <p><small>Subject: ${q.subject} | Concept: ${q.concept}</small></p>
    `;
    
    let optionsHTML = '';
    q.options.forEach((option, index) => {
        const isSelected = userAnswers[currentQuestion] === index;
        optionsHTML += `
            <label class="option ${isSelected ? 'selected' : ''}">
                <input type="radio" name="answer" value="${index}" 
                       ${isSelected ? 'checked' : ''} 
                       onchange="selectAnswer(${index})">
                <span>${String.fromCharCode(65 + index)}. ${option}</span>
            </label>
        `;
    });
    
    document.getElementById('optionsContainer').innerHTML = optionsHTML;
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    displayQuestion();
}

function nextQuestion() {
    const questions = questionsData[currentTest] || questionsData['Full_Mock_1'];
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function startTimer() {
    // Simple timer implementation
    let timeLeft = 3 * 3600; // 3 hours in seconds
    
    setInterval(() => {
        timeLeft--;
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        document.getElementById('timer').textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function submitTest() {
    const questions = questionsData[currentTest] || questionsData['Full_Mock_1'];
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    
    questions.forEach((q, index) => {
        if (userAnswers[index] === undefined) {
            skipped++;
        } else if (userAnswers[index] === q.correct) {
            correct++;
        } else {
            wrong++;
        }
    });
    
    const percentage = Math.round((correct / questions.length) * 100);
    
    document.getElementById('testInterface').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = wrong;
    document.getElementById('skippedCount').textContent = skipped;
}

function viewSolutions() {
    const questions = questionsData[currentTest] || questionsData['Full_Mock_1'];
    let solutionsHTML = '<h3>Solutions & Analysis</h3>';
    
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correct;
        const status = userAnswer === undefined ? 'Skipped' : (isCorrect ? '✓ Correct' : '✗ Incorrect');
        
        solutionsHTML += `
            <div class="solution-item" style="margin: 1.5rem 0; padding: 1rem; border-left: 4px solid ${isCorrect ? '#10b981' : '#ef4444'}; background: rgba(0,0,0,0.05); border-radius: 5px;">
                <h4>Q${index + 1}: ${q.question}</h4>
                <p><strong>Your Answer:</strong> ${userAnswer !== undefined ? q.options[userAnswer] : 'Not answered'}</p>
                <p><strong>Correct Answer:</strong> ${q.options[q.correct]}</p>
                <p><strong>Explanation:</strong> ${q.explanation}</p>
                <p><strong>Status:</strong> ${status}</p>
            </div>
        `;
    });
    
    alert(solutionsHTML);
}

function retakeTest() {
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('mockContent').style.display = 'block';
    currentTest = null;
    currentQuestion = 0;
    userAnswers = {};
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