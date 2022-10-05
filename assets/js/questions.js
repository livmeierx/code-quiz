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
      title: "Arrays in JavaScript can be used to store ___.",
      choices: [
        "booleans",
        "strings and numbers",
        "more arrays",
        "all of the above",
      ],
      answer: "all of the above"
    },
    {
      title: "String values must be enclosed within ___ when being assigned to variables.",
      choices: ["parentheses", "curly brackets", "commas", "quotes"],
      answer: "quotes"
    },
    {
      title: "A useful tool used during developmenet and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "console.log", "for loops", "terminal"],
      answer: "console.log"
    }
  ];
  
  var questionEl = document.querySelector("#question");
  var optionListEl = document.querySelector("#option-list");
  var questionResultEl = document.querySelector("#question-result");
  var timerEl = document.querySelector("#timer");
  
  var questionIndex = 0;
  var correctCount = 0;
  
  function renderQuestion() {
    questionEl.textContent = questions[questionIndex].question;
  
    optionListEl.innerHTML = "";
  
    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;
  
    for (var i = 0; i < choicesLenth; i++) {
      var questionListItem = document.createElement("li");
      questionListItem.textContent = choices[i];
      optionListEl.append(questionListItem);
    }
  }
  
  function nextQuestion() {
    questionIndex++;
    renderQuestion();
  }
  
  function checkAnswer(event) {
    // check if answer is correct
    if (event.target.matches("li")){
        var answer = event.target.textContent;
        if (answer === questions[questionIndex].answer) {
            questionResultEl.textContent = "correct";
            // Update the correctCount if necessary
            correctCount++;
            // Notify the user if their response is correct/wrong.
        } else {
            questionResultEl.textContext = "incorrect";
        }
    }
    
    // wait 2 seconds and call next question
    setTimeout(nextQuestion, 2000);
  }
  
  //add event listener to option-list and call checkAsnwer function
  optionListEl.addEventListener("click", checkAnswer);
  
  function renderQuestion() {}
  
  renderQuestion();

document.querySelector("#change-question")
  .addEventListener("click", function() {
      questionIndex++;
      renderQuestion();
  })