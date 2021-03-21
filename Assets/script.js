//call elements from html
var PromptEl = document.querySelector("prompt");

var ChoicesEl = document.querySelector("choices");
var timerEl = document.getElementById("timer");

var currentQuestionIndex = 0;

var timerInterval;
var timeLeft = 100;
var display;
var score = 0;
var correct;
var timerId;
var countdown = 550;


var quizQuestions = [
    {
        question: "In what year was Mariah Carey's first single released?",
        choices: ["1989", "1990", "1991", "1992"],
        answer: "1990",
    },
    {
        question: "Which song took 25 years to reach its peak at #1 on the Billboard Hot 100?",
        choices: ["Always Be My Baby", "Honey", "All I Want for Christmas Is You", "We Belong Together"],
        answer: "All I Want for Christmas Is You"
    },
    {
        question: "How many Grammy awards has Mariah Carey won?",
        choices: ["5", "8", "9", "12"],
        answer: "5",
    }
]



var startButton = document
    .querySelector("#button")
    .addEventListener('click', startButtonClicked);

function startButtonClicked(e) {
    var fiveMinutes = 15 * 5,
        display = document.querySelector("#timer");
    startTimer(fiveMinutes, display);
    displayQuestion();
}

function startQuiz () {
    displayQuestion();
    timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Remaining time: " + timeLeft;
        if(timeLeft===0) {
            clearInterval(timerInterval);
            displayScore();
        }
    }, 1000);
}

function startTimer() {
    timerId = setInterval(function () {
        timerEl.textContent = countdown;
        if (countdown === 0) {
            endGame();
        }
        countdown--;
    }, 1000);
}


function answerButtonClicked(e) {
    if (this.value !== questions[currentQuestionIndex].answer) {
        alert('incorrect');
        timer -=10;
    }
    else {
        alert('correct')
    }
    currentQuestionIndex++;
    displayQuestion();
}

function displayQuestion(e) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    if (!currentQuestion) {
        return gameOver();
    } 
    document.querySelector('#prompt').textContent = currentQuestion;//title element
    document.querySelector('#choices').innerHTML = '';
    ul.innerHTML = '';

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var li = document.createElement('li');
        var choiceButton = document.createElement('button');
        choiceButton.setAttribute('value', currentQuestion.choices[i]);
        choiceButton.textContent = currentQuestion.choices[i];
        choiceButton.onclick = answerButtonClicked;
        choiceButton.classList.add('answerChoice'); //check answerchoice
        li.append(choiceButton);
        ul.append(li);
    }
}



function gameOver() {
    clearInterval(timerInterval);
    console.log('game over!');
    //displaying results now div
    document.querySelector('#results').style.display = 'block';
    //hiding the choices div
    document.querySelector('.container').style.display = 'none';
    //adding scores
    document.querySelector('#score').textContent = timer;
    document.querySelector('#time').textContent = timer;

}


