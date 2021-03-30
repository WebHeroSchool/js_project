const myQuestions = [
  {
    number: 1,
    question: 'Назовите столицу Турции',
    answers: {
      a: 'Анталья',
      b: 'Анкара',
      c: 'Стамбул'
    },
    correctAnswer: 'b'
  },
  {
    number: 2,
    question: 'Назовите самую северную столицу мира',
    answers: {
      a: 'Рейкьявик',
      b: 'Копенгаген',
      c: 'Стокгольм'
    },
    correctAnswer: 'a'
  },
  {
    number: 3,
    question: 'Осло - стоица какой страны?',
    answers: {
      a: 'Финляндия',
      b: 'Норвегия',
      c: 'Дания'
    },
    correctAnswer: 'b'
  },
  {
    number: 4,
    question: 'Какой из городов не является столицей?',
    answers: {
      a: 'Хельсинки',
      b: 'Гамбург',
      c: 'Скопье'
    },
    correctAnswer: 'b'
  }
];

let quizContainer = document.querySelector('.quiz');
let resultsContainer = document.querySelector('.results');
let submitButton = document.querySelector('.button_results');
let numCorrect = 0;

function buildQuiz() {
  const output = [];
  myQuestions.forEach(
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

let nameForm = document.querySelector('.name-form');
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
}
const checkResults = (e) => {
const tar = e.target;
if(tar.tagName === 'INPUT') {
  const questionNumber = tar.name.slice(-1);
  const userAnswer = tar.value;
  const isCorrect = myQuestions[questionNumber].correctAnswer === userAnswer;
  if(isCorrect) {
    tar.parentNode.style.color = 'green';
    numCorrect++;
    } else {
      tar.parentNode.style.color = 'red';
    }
    const radioButtons = e.currentTarget.querySelectorAll('.answer, input');
    radioButtons.forEach(button => button.setAttribute('disabled', 'disable'))
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
  previousButton.style.display = 'none';
  nextButton.style.display = 'none';
  submitButton.style.display = 'none';
  resultsContainer.innerHTML = `${userName.value}, Ваш результат ${numCorrect} из ${myQuestions.length}`}
  submitButton.addEventListener('click', showResults);
