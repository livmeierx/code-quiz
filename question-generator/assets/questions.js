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