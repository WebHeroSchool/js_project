const response = fetch('https://opentdb.com/api.php?amount=4&category=22&difficulty=easy&type=multiple')
.then(response => response.json())
.then(data => data)
.then(data => console.log(data.results));



let quizContainer = document.querySelector('.quiz');
let resultsContainer = document.querySelector('.results');
let submitButton = document.querySelector('.button_results');
let numCorrect = 0;

function buildQuiz() {
  const output = [];
  response.forEach(
    (currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type='radio' name='question${questionNumber}' value='${letter}'>
          ${letter}:
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }
    output.push(
      `<div class='slide'>
        <div class='question'> ${currentQuestion.question} </div>
        <div class='answers'> ${answers.join('')} </div>
      </div>`
    );
  }
);
  quizContainer.innerHTML = output.join('');
};
buildQuiz();

let nameForm = document.querySelector('.form');
let sendButton = document.querySelector('.send-button');
let userName = document.querySelector('.user-name');
let buttonsNav = document.querySelector('.wrap-btn');

function addUserName() {
  quizContainer.style.display = 'none';
  buttonsNav.style.display = 'none';
}

addUserName();

function startGame() {
  nameForm.style.opacity = '0';
  quizContainer.style.display = 'inline-block';
  buttonsNav.style.display = 'flex';
  showSlide(currentSlide);
}

sendButton.addEventListener('click', validateName);

function validateName() {
let regex = /^([А-Я]{1}[а-я]{1,9}|[A-Z]{1}[a-z]{1,9})$/;
userName.classList.remove('error');

  if(!regex.test(userName.value)) {
    event.preventDefault();
    event.stopPropagation();
    userName.classList.add('error');

    let error = document.createElement('div');
    error.className = 'error-block';
    error.style.color = 'red';
    error.innerHTML = 'Укажите корректное имя';
    userName.parentElement.insertBefore(error, userName);
  } else {
    startGame();
  }
}

const previousButton = document.querySelector('.button_previous');
const nextButton = document.querySelector('.button_next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;

  if(currentSlide === 0){
    previousButton.style.display = 'none';
  } else{
    previousButton.style.display = 'block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'block';
  } else{
    nextButton.style.display = 'block';
    submitButton.style.display = 'none';
  }
timer()
}

function timer() {
  let minutes = 0;
  let seconds = 10;
  let idInt = function() {
    if (seconds >= 0) {
    	document.querySelector('.time').innerHTML = makeMeTwoDigits(minutes) + ":" + makeMeTwoDigits(seconds);
    	seconds--;
	} else {
    	slides[currentSlide].classList.add('done');
    	clearInterval(timerId);
    	if (currentSlide === slides.length - 1) {
      		showResults();
       		return;
    	} else {
      		showNextSlide();
    	}
    }
   };
  let timerId = setInterval(idInt, 1000);
  function makeMeTwoDigits(n){
    return (n < 10 ? "0" : "") + n;
  }
    nextButton.addEventListener('click', function() {
    	clearInterval(timerId);
    });
    previousButton.addEventListener('click', function() {
    	clearInterval(timerId);
    });
}

const checkResults = (e) => {
const tar = e.target;
if(tar.tagName === 'INPUT') {
  const questionNumber = tar.name.slice(-1);
  const userAnswer = tar.value;
  const isCorrect = response[questionNumber].correctAnswer === userAnswer;
  if(isCorrect) {
    tar.parentNode.style.color = 'green';
    numCorrect++;
    } else {
      tar.parentNode.style.color = 'red';
    }
    const radioButtons = e.currentTarget.querySelectorAll('.answer, input');
    radioButtons.forEach(button => button.setAttribute('disabled', 'disable'));
  }
 }

 const setAnswerHandlers = () => {
   Array.from(quizContainer.querySelectorAll('.slide .answers')).forEach(answer => {
     answer.addEventListener('click', checkResults);
   })
 }

setAnswerHandlers();

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1)
}

previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showResults() {
  document.querySelector('.time').innerHTML = '';
  previousButton.style.display = 'none';
  nextButton.style.display = 'none';
  submitButton.style.display = 'none';
  resultsContainer.innerHTML = `${userName.value}, Ваш результат ${numCorrect} из ${response.length}`
  restart()
}

function restart() {
  let restart = document.querySelector('.button_restart');
  restart.style.display = 'block';
  restart.addEventListener('click', function() {
    document.location.reload();
  });
}

  submitButton.addEventListener('click', showResults);


// 1. Добавляем данные вопросов.
// 2. Рисуем разметку слайдов.
// 3. Показываем первый слайд.
// 4. По нажатию на кнопки показываем либо предыдущий, либо следующий слайд.
// 5. Переключаем слайды по таймеру.
// 6. По нажатию на кнопки обнуляем таймер.
// 7. Проверяем правильность ответов.
// 8. Считаем правильные ответы и в конце выводим их количество.
// 9. По кнопке обнуляем игру.
// 10. Перед игрой спрашиваем имя игрока.
// https://opentdb.com/api.php?amount=4&category=22&difficulty=easy&type=multiple
