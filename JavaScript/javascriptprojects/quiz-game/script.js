const questions = [
  {
    question: "Which language runs in browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3,
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
    ],
    correct: 1,
  },
  {
    question: "Which company developed Java?",
    answers: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
    correct: 1,
  },
  {
    question: "Which is not a programming language?",
    answers: ["HTML", "Python", "Java", "C++"],
    correct: 0,
  },
  {
    question: "What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Data Object Method",
      "Digital Ordinance Model",
      "Desktop Object Management",
    ],
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestion = document.getElementById("current-question");
const totalQuestion = document.getElementById("total-question");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress");
const finalScore = document.getElementById("final-score");
const maxScore = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");

totalQuestion.innerText = questions.length;
maxScore.innerText = questions.length;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  answersContainer.innerHTML = "";
  let q = questions[currentQuestionIndex];
  questionText.innerText = q.question;
  currentQuestion.innerText = currentQuestionIndex + 1;

  q.answers.forEach((answer, index) => {
    let btn = document.createElement("button");
    btn.innerText = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => selectAnswer(index);
    answersContainer.appendChild(btn);
  });

  progressBar.style.width =
    (currentQuestionIndex / questions.length) * 100 + "%";
}

function selectAnswer(index) {
  let correctIndex = questions[currentQuestionIndex].correct;
  let buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, i) => {
    if (i === correctIndex) btn.classList.add("correct");
    else if (i === index) btn.classList.add("incorrect");
    btn.disabled = true;
  });

  if (index === correctIndex) {
    score++;
    scoreElement.innerText = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) showQuestion();
    else showResult();
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScore.innerText = score;

  if (score === questions.length) resultMessage.innerText = "Perfect Score!";
  else if (score >= 3) resultMessage.innerText = "Great Job!";
  else resultMessage.innerText = "Keep Practicing!";
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}
