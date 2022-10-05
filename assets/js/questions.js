var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-banner");
var formInitials = document.getElementById("intials-form");
var containerHighScoreEl = document.getElementById("high-score-container");
var ViewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

// buttons
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back");
var btnClearScoresEl = document.querySelector("#clear-high-scores");

// questions and answers
var questionEl = document.getElementById("question");
var answerbuttonsEl = document.getElementById("answer-buttons");
var timeEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover
timerEl.innerText = 0;

// high score
var HighScores = [];

var arrayShuffledQuestions;
var QuestionIndex= 0;

// array of questions
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question:
        "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
      question: "Arrays in JavaScript can be used to store ___.",
      choices: [
        "booleans",
        "strings and numbers",
        "more arrays",
        "all of the above",
      ],
      answer: "all of the above"
    },
    {
      question: "String values must be enclosed within ___ when being assigned to variables.",
      choices: ["parentheses", "curly brackets", "commas", "quotes"],
      answer: "quotes"
    },
    {
      question: "A useful tool used during developmenet and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "console.log", "for loops", "terminal"],
      answer: "console.log"
    }
  ];

// for go back btn
var renderStartPage = function () {
  containerHighScoreEl.classList.add("hide")
  containerHighScoreEl.classList.remove("show")
  containerStartEl.classList.remove("hide")
  containerStartEl.classList.add("show")
  containerScoreEl.removeChild(containerScoreEl.lastChild)
  QuestionIndex = 0
  gameover = ""
  timeEl.textContent = 0
  score = 0

  if (correctEl.className = "show") {
    correctEl.classList.remove("show");
    correctEl.classList.add("hide")
  }
  if (wrongEl.className = "show") {
    wrongEl.classList.remove("show");
    wrongEl.classList.add("hide");
  }
}

// timer

var setTime = function () {
  timeleft = 30;

  var timercheck = setInterval(function() {
    timerEl.innerText = timeleft;
    timeleft--

    if (gameover) {
      clearInterval(timercheck)
    }

    if (timeleft < 0) {
      showScore()
      timerEl.innerText = 0
      clearInterval(timercheck)
    }
  }, 1000)
}
  
// start game
var startGame = function() {
  containerStartEl.classList.add('hide');
  containerStartEl.classList.remove('show');
  containerQuestionEl.classList.remove('hide');
  containerQuestionEl.classList.add('show');

  arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
  setTime()
  setQuestion()
}

// next question
var setQuestion = function() {
  resetAnswers()
  displayQuestion(arrayShuffledQuestions[QuestionIndex])
}

// remove buttons
var resetAnswers = function() {
  while (answerbuttonsEl.firstChild) {
    answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
  };
};

// show question information
var displayQuestion = function(index) {
  questionEl.innerText = index.q
  for (var i = 0; i < index.choices.length; i++) {
    var answerbutton = document.createElement('button')
    answerbutton.innerText = index.choices[i].choice
    answerbutton.classList.add('btn')
    answerbutton.classList.add('answerbtn')
    answerbutton.addEventListener("click", answerCheck)
    answerbuttonsEl.appendChild(answerbutton)
  }
};

// correct
var answerCorrect = function() {
  if (correctEl.className = "hide") {
      correctEl.classList.remove("hide")
      correctEl.classList.add("banner")
      wrongEl.classList.remove("banner")
      wrongEl.classList.add("hide")
      }
}  

// wrong
var answerWrong = function() {
  if (wrongEl.className = "hide") {
      wrongEl.classList.remove("hide")
      wrongEl.classList.add("banner")
      correctEl.classList.remove("banner")
      correctEl.classList.add("hide")
  }
}

//   var questionEl = document.querySelector("#question");
//   var optionListEl = document.querySelector("#option-list");
//   var questionResultEl = document.querySelector("#question-result");
//   var timerEl = document.querySelector("#timer");
  
//   var questionIndex = 0;
//   var correctCount = 0;
  
//   function renderQuestion() {
//     questionEl.textContent = questions[questionIndex].question;
  
//     optionListEl.innerHTML = "";
  
//     var choices = questions[questionIndex].choices;
//     var choicesLenth = choices.length;
  
//     for (var i = 0; i < choicesLenth; i++) {
//       var questionListItem = document.createElement("li");
//       questionListItem.textContent = choices[i];
//       optionListEl.append(questionListItem);
//     }
//   }
  
//   function nextQuestion() {
//     questionIndex++;
//     renderQuestion();
//   }
  
//   function checkAnswer(event) {
//     // check if answer is correct
//     if (event.target.matches("li")){
//         var answer = event.target.textContent;
//         if (answer === questions[questionIndex].answer) {
//             questionResultEl.textContent = "correct";
//             // Update the correctCount if necessary
//             correctCount++;
//             // Notify the user if their response is correct/wrong.
//         } else {
//             questionResultEl.textContext = "incorrect";
//         }
//     }
    
//     // wait 2 seconds and call next question
//     setTimeout(nextQuestion, 2000);
//   }
  
//   //add event listener to option-list and call checkAsnwer function
//   optionListEl.addEventListener("click", checkAnswer);
  
//   function renderQuestion() {}
  
//   renderQuestion();

// document.querySelector("#change-question")
//   .addEventListener("click", function() {
//       questionIndex++;
//       renderQuestion();
//   })