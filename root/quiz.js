const questions = [
    { question: "What is the speed of light (in km/s)?", type: "numeric", answer: 299792, difficulty: "easy" },
    { question: "Who developed the theory of general relativity?", options: ["Newton", "Einstein", "Tesla", "Curie"], answer: "Einstein", difficulty: "medium" },
    { question: "What is the atomic number of Oxygen?", type: "numeric", answer: 8, difficulty: "easy" },
    { question: "Which programming language is known for its simplicity and readability?", options: ["Java", "C++", "Python", "JavaScript"], answer: "Python", difficulty: "easy" },
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Primary Unit", "Core Processing Utility", "Central Programming Unit"], answer: "Central Processing Unit", difficulty: "easy" },
    { question: "Which planet has the strongest gravity?", options: ["Earth", "Jupiter", "Neptune", "Mars"], answer: "Jupiter", difficulty: "hard" },

    { question: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Remote Administrative Module", "Rapid Application Manager"], answer: "Random Access Memory", difficulty: "easy" },
    { question: "Which scientist formulated the laws of motion?", options: ["Einstein", "Galileo", "Newton", "Kepler"], answer: "Newton", difficulty: "medium" },
    { question: "What is the chemical formula for water?", options: ["HO", "O2", "H2O", "CO2"], answer: "H2O", difficulty: "easy" },
    { question: "Which country developed the first nuclear bomb?", options: ["Russia", "USA", "Germany", "China"], answer: "USA", difficulty: "hard" },
    { question: "Which unit is used to measure electric current?", options: ["Volts", "Ohms", "Amperes", "Watts"], answer: "Amperes", difficulty: "medium" },
    { question: "What year was the first iPhone released?", type: "numeric", answer: 2007, difficulty: "medium" },
    { question: "Who invented the World Wide Web?", options: ["Tim Berners-Lee", "Bill Gates", "Alan Turing", "Steve Jobs"], answer: "Tim Berners-Lee", difficulty: "medium" },
    { question: "What does HTTP stand for?", options: ["HyperText Transmission Protocol", "HyperText Transfer Protocol", "Hyperlink Transfer Protocol", "Hyper Terminal Text Protocol"], answer: "HyperText Transfer Protocol", difficulty: "easy" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], answer: "Diamond", difficulty: "easy" },
    { question: "Which company developed the Java programming language?", options: ["Apple", "Microsoft", "Sun Microsystems", "Google"], answer: "Sun Microsystems", difficulty: "hard" },
    { question: "Which spacecraft was the first to land on the moon?", options: ["Apollo 11", "Voyager 1", "Sputnik", "Luna 2"], answer: "Apollo 11", difficulty: "hard" },
    { question: "How many bits are in a byte?", type: "numeric", answer: 8, difficulty: "easy" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], answer: "Mitochondria", difficulty: "easy" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au", difficulty: "easy" },
    { question: "Which search engine was founded in 1998?", options: ["Yahoo", "Bing", "Google", "DuckDuckGo"], answer: "Google", difficulty: "medium" },
    { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dinucleic Amino Acid", "Dynamic Network Algorithm", "Double Nucleotide Arrangement"], answer: "Deoxyribonucleic Acid", difficulty: "medium" },
    { question: "Which programming language is primarily used for web development?", options: ["Java", "Python", "JavaScript", "C++"], answer: "JavaScript", difficulty: "easy" },
    { question: "Which element is a key component of semiconductor chips?", options: ["Gold", "Silicon", "Copper", "Platinum"], answer: "Silicon", difficulty: "medium" },
    { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "H2O", "C6H12O6"], answer: "NaCl", difficulty: "easy" },
    { question: "What does HTML stand for?", options: ["Hyperlink and Text Markup Language", "HyperText Markup Language", "High-Tech Machine Language", "Home Tool Management Language"], answer: "HyperText Markup Language", difficulty: "easy" },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars", difficulty: "easy" },
    { question: "Which subatomic particle has no electric charge?", options: ["Proton", "Electron", "Neutron", "Photon"], answer: "Neutron", difficulty: "medium" },
    { question: "What is the first element in the periodic table?", options: ["Helium", "Hydrogen", "Lithium", "Oxygen"], answer: "Hydrogen", difficulty: "easy" },
    { question: "Which gas do plants absorb from the atmosphere for photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide", difficulty: "easy" },
    { question: "What is the largest organ in the human body?", options: ["Heart", "Brain", "Skin", "Liver"], answer: "Skin", difficulty: "medium" },
    { question: "Which programming language is known for its ability to be compiled or interpreted?", options: ["Python", "Java", "C", "JavaScript"], answer: "Java", difficulty: "medium" },
    { question: "Which energy source is derived from the Earth's internal heat?", options: ["Solar", "Geothermal", "Wind", "Nuclear"], answer: "Geothermal", difficulty: "medium" },
    { question: "Which famous scientist discovered radioactivity?", options: ["Marie Curie", "Albert Einstein", "Isaac Newton", "Nikola Tesla"], answer: "Marie Curie", difficulty: "hard" },
    { question: "What does AI stand for?", options: ["Advanced Integration", "Artificial Intelligence", "Automated Interaction", "Analytical Inference"], answer: "Artificial Intelligence", difficulty: "easy" },
    { question: "What is the boiling point of water in Celsius?", type: "numeric", answer: 100, difficulty: "easy" },
    { question: "What is the name of the first artificial satellite launched into space?", options: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble"], answer: "Sputnik 1", difficulty: "hard" },
    { question: "Which type of electromagnetic radiation has the shortest wavelength?", options: ["Microwaves", "X-rays", "Radio waves", "Gamma rays"], answer: "Gamma rays", difficulty: "hard" },
    { question: "What part of the computer performs calculations and logical operations?", options: ["GPU", "CPU", "RAM", "SSD"], answer: "CPU", difficulty: "easy" },
    { question: "Which company developed the first graphical web browser?", options: ["Google", "Microsoft", "Netscape", "Mozilla"], answer: "Netscape", difficulty: "medium" },

];

let currentQuestionIndex = 0;
let score = 0;
let timeElapsed = 0;
let quizStarted = false;
let timerInterval;

// Timer function (Starts with quiz)
function startTimer() {
    timerInterval = setInterval(() => {
        if (quizStarted) {
            timeElapsed++;
            document.getElementById("timer").textContent = `Time: ${timeElapsed}s`;
        }
    }, 1000);
}

// Start Quiz Function
document.getElementById("start-quiz").addEventListener("click", function () {
    quizStarted = true;
    this.classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    startTimer();
    loadQuestion();
});

// Load Question
function loadQuestion() {
    const questionContainer = document.getElementById("quiz-container");
    const q = questions[currentQuestionIndex];
    let html = `<h3>${q.question}</h3>`;

    document.getElementById("feedback").innerHTML = ""; // Clear feedback when loading a new question

    if (q.options) {
        q.options.forEach(option => {
            html += `<button onclick="checkAnswer('${option}')" class="bg-blue-500 text-white px-4 py-2 rounded m-2">${option}</button>`;
        });
    } else {
        html += `<input type="number" id="numeric-answer" class="border px-2 py-1 rounded"> 
                 <button onclick="checkAnswer(document.getElementById('numeric-answer').value)" class="bg-green-500 text-white px-4 py-2 rounded">Submit</button>`;
    }

    questionContainer.innerHTML = html;
    updateButtonVisibility(); // Update button visibility based on question progress
}

function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const feedback = document.getElementById("feedback");

    // Prevent multiple clicks from increasing score
    if (!questions[currentQuestionIndex].answered) {
        if (userAnswer == correctAnswer) {
            feedback.innerHTML += `<p class="text-green-500">✅ Correct: ${questions[currentQuestionIndex].question}</p>`;
            score++;
        } else {
            feedback.innerHTML += `<p class="text-red-500">❌ Wrong: ${questions[currentQuestionIndex].question} - Correct: ${correctAnswer}</p>`;
        }
        
        // Mark question as answered to prevent multiple scoring
        questions[currentQuestionIndex].answered = true;
    }

    nextQuestion();
}


// Next Question Logic
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults(); // Show results when quiz ends
    }
}

// Previous Question Logic
document.getElementById("prev").addEventListener("click", function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Show Final Score & Retry Button
function showResults() {
    document.getElementById("final-score").textContent = `${score} / ${questions.length}`;
    document.getElementById("score-container").classList.remove("hidden");
    document.getElementById("submit-btn").classList.add("hidden");
    document.getElementById("retry-btn").classList.remove("hidden");
    clearInterval(timerInterval);
}

// Retry Quiz Logic
document.getElementById("retry-btn").addEventListener("click", function () {
    score = 0;
    currentQuestionIndex = 0;
    timeElapsed = 0;
    quizStarted = false;
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("score-container").classList.add("hidden");
    document.getElementById("retry-btn").classList.add("hidden");
    document.getElementById("start-quiz").classList.remove("hidden");
});

// Show Submit Button When Quiz Ends
function updateButtonVisibility() {
    document.getElementById("prev").classList.toggle("hidden", currentQuestionIndex === 0);
    document.getElementById("next").classList.toggle("hidden", currentQuestionIndex >= questions.length - 1);
    document.getElementById("submit-btn").classList.toggle("hidden", currentQuestionIndex !== questions.length - 1);
}

// Dark Mode Toggle (No changes needed)
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.textContent = "🌙"; // Change to moon emoji for dark mode
        localStorage.setItem("theme", "dark");
    } else {
        this.textContent = "🌞"; // Change to sun emoji for light mode
        localStorage.setItem("theme", "light");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        document.getElementById("theme-toggle").textContent = "🌙";
    } else {
        document.getElementById("theme-toggle").textContent = "🌞";
    }
});

// Load first question
loadQuestion();
