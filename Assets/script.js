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

var currentQuestionIndex = 0;

var timerInterval;
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
    btnOneEl.innerHTML=currentQuestion.choice1;
    btnTwoEl.innerHTML=currentQuestion.choice2;
    btnThreeEl.innerHTML=currentQuestion.choice3;
    btnFourEl.innerHTML=currentQuestion.choice4;
};

function startButtonClicked(e) {
    var fiveMinutes = 15 * 5,
        display = document.querySelector("#timer");
    startTimer(fiveMinutes, display);
    displayQuestion();
}

var startButton = document
    .querySelector("#button")
    .addEventListener('click', startButtonClicked);

    // function displayQuestion() {
    //     var currentQuestion = quizQuestions[currentQuestionIndex];
    //     if (!currentQuestion) {
    //         return gameOver();
    //     } 
    //     PromptEl.textContent = currentQuestion;//title element
    //     ChoicesEl.innerHTML = '';
    //     ul.innerHTML = '';    



// function startQuiz () {
//     displayQuestion();
//     timerInterval = setInterval(function() {
//         timeLeft--;
//         timerEl.textContent = "Remaining time: " + timeLeft;
//         if(timeLeft===0) {
//             clearInterval(timerInterval);
//             displayScore();
//         }
//     }, 1000);
// }


//finds questions
quizFirstEl.textContent = quizQuestions[0].question;
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
    if(event.target.innerHTML === quizQuestions[currentQuestionIndex].ans)
    {
        alert("correct!")
        nextQuestion();
    }
    else{
        secondsLeft = secondsLeft - 10;
        alert("Incorrect!")
        nextQuestion();
    }   
}

// function answerButtonClicked(e) {
//     if (this.value !== questions[currentQuestionIndex].answer) {
//         alert('incorrect');
//         timer -=10;
//     }
//     else {
//         alert('correct')
//     }
//     currentQuestionIndex++;
//     displayQuestion();
//}



    // for (var i = 0; i < currentQuestion.choices.length; i++) {
    //     var li = document.createElement('li');
    //     var choiceButton = document.createElement('button');
    //     choiceButton.setAttribute('value', currentQuestion.choices[i]);
    //     choiceButton.textContent = currentQuestion.choices[i];
    //     choiceButton.onclick = answerButtonClicked;
    //     choiceButton.classList.add('answerChoice'); //check answerchoice
    //     li.append(choiceButton);
    //     ul.append(li);
    // }
//}


function nextQuestion() {
    currentQuestionIndex++;

    if(questions[currentQuestionIndex]!== undefined){
        quizFirstEl.textContent = quizQuestions[currentQuestionIndex].question;
        btnOneEl.innerHTML = quizQuestions[currentQuestionIndex].options[0];
        btnTwoEl.innerHTML = quizQuestions[currentQuestionIndex].options[1];
        btnThreeEl.innerHTML = quizQuestions[currentQuestionIndex].options[2];
        btnFourEl.innerHTML = quizQuestions[currentQuestionIndex].options[3];
        
    }else{
        document.getElementById("hideContent").style.display = "block";

        quizEl.style.display = "none"
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


