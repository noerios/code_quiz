//call elements from html
var promptEl = document.querySelector("prompt");

var questionEl=document.getElementById("questionLine");
var ChoicesEl = document.querySelector("choices");
var timerEl = document.getElementById("timer");
let quizFirstEl = document.querySelector("#quizFirst");
let btnOneEl = document.querySelector("#btn-1");
let btnTwoEl = document.querySelector("#btn-2");
let btnThreeEl = document.querySelector("#btn-3");
let btnFourEl = document.querySelector("#btn-4");
let quizEl = document.getElementById("quiz")

var currentQuestionIndex = 0;


var timeLeft = 100;
var display;
var score = 0;
var correct;
var timerId;
var countdown = 550;



let quizQuestions = [
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


function startTimer() {
    timerId = setInterval(function () {
        timerEl.textContent = countdown;
        if (countdown === 0) {
            endGame();
        }
        countdown--;
    }, 1000);
}

function displayQuestion(){
    
    if(currentQuestionIndex===2){
        return displayScore();
    }
    var currentQuestion=quizQuestions[currentQuestionIndex];
    questionEl.innerHTML="<p> " + currentQuestion.question +"</p";
    btnOneEl.innerHTML=currentQuestion.choices[0];
    btnTwoEl.innerHTML=currentQuestion.choices[1];
    btnThreeEl.innerHTML=currentQuestion.choices[2];
    btnFourEl.innerHTML=currentQuestion.choices[3];
};

var startButton = document
    .querySelector("#button")
    
    startButton.addEventListener('click', startButtonClicked);


function startButtonClicked(e) {
    var fiveMinutes = 15 * 5,
        display = document.querySelector("#timer");
    startTimer(fiveMinutes, display);
    displayQuestion();
    startButton.style.display = "none";
}


//finds questions
questionEl.textContent = quizQuestions[0].question;
btnOneEl.innerHTML = quizQuestions[0].choices[0];
btnTwoEl.innerHTML = quizQuestions[0].choices[1];
btnThreeEl.innerHTML = quizQuestions[0].choices[2];
btnFourEl.innerHTML = quizQuestions[0].choices[3];

//checks answers
btnOneEl.addEventListener("click", checkAns);
btnTwoEl.addEventListener("click", checkAns);
btnThreeEl.addEventListener("click", checkAns);
btnFourEl.addEventListener("click", checkAns);

function checkAns(event) {
    if(event.target.innerHTML === quizQuestions[currentQuestionIndex].answer)
    {
        alert("correct!")
        nextQuestion();
    }
    else{
        countdown = countdown - 10;
        alert("Incorrect!")
        nextQuestion();
    }   
}


function nextQuestion() {
    currentQuestionIndex++;

    if(quizQuestions[currentQuestionIndex]!== undefined){
        questionEl.textContent = quizQuestions[currentQuestionIndex].question;
        btnOneEl.innerHTML = quizQuestions[currentQuestionIndex].choices[0];
        btnTwoEl.innerHTML = quizQuestions[currentQuestionIndex].choices[1];
        btnThreeEl.innerHTML = quizQuestions[currentQuestionIndex].choices[2];
        btnFourEl.innerHTML = quizQuestions[currentQuestionIndex].choices[3];
        
    }else{
        document.getElementById("hideContent").style.display = "block";

        quizEl.style.display = "none"
        clearInterval(timerId);
        gameOver();
    }


    
}



function gameOver() {
    console.log('game over!');
    //displaying results now div
    document.querySelector('#results').style.display = 'block';
    //document.getElementById("#hideContent").style.display = "block";
    //adding scores
    document.querySelector('#score').textContent = countdown;

}


