//call elements from html
var PromptEl= document.querySelector("#prompt");

var ChoicesEl= document.querySelector("#choices");

var currentQuestionIndex = 0;
var Timer;
var timerInterval;
var display;

var startButton = document
    .querySelector("#button")
    .addEventListener('click', startButtonClicked);

function startButtonClicked(e) {
    var fiveMinutes = 15 * 5,
        display = document.querySelector("#timer");
    startTimer(fiveMinutes, display);
    displayQuestion();
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
    var currentQuestion = questions[currentQuestionIndex];
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


