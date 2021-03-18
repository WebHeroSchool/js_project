const questionsArray = [
  {
    number: 1,
    question: 'Назовите столицу Турции',
    answer: [
      '<input type="radio" name="answer" id="opt1" value="Анталья" class="answer"><label for="opt1">Анталья</label>',
      '<input type="radio" name="answer" id="opt2" value="Анкара" class="answer"><label for="opt2">Анкара</label>',
      '<input type="radio" name="answer" id="opt3" value="Стамбул" class="answer"><label for="opt3">Стамбул</label>'
    ],
    correctAnswer: 'Анкара'
  },
  {
    number: 2,
    question: 'Назовите самую северную столицу мира',
    answer: [
      '<input type="radio" name="answer" id="opt1" value="Рейкьявик" class="answer"><label for="opt1">Рейкьявик</label>',
      '<input type="radio" name="answer" id="opt2" value="Копенгаген" class="answer"><label for="opt2">Копенгаген</label>',
      '<input type="radio" name="answer" id="opt3" value="Стокгольм" class="answer"><label for="opt3">Стокгольм</label>'
    ],
    correctAnswer: 'Рейкьявик'
  },
  {
    number: 3,
    question: 'Осло - стоица какой страны?',
    answer: [
      '<input type="radio" name="answer" id="opt1" value="Финляндия" class="answer"><label for="opt1">Финляндия</label>',
      '<input type="radio" name="answer" id="opt2" value="Норвегия" class="answer"><label for="opt2">Норвегия</label>',
      '<input type="radio" name="answer" id="opt3" value="Дания" class="answer"><label for="opt3">Дания</label>'
    ],
    correctAnswer: 'Норвегия'
  },
  {
    number: 4,
    question: 'Какой из городов не является столицей?',
    answer: [
      '<input type="radio" name="answer" id="opt1" value="Хельсинки" class="answer"><label for="opt1">Хельсинки</label>',
      '<input type="radio" name="answer" id="opt2" value="Гамбург" class="answer"><label for="opt2">Гамбург</label>',
      '<input type="radio" name="answer" id="opt3" value="Скопье" class="answer"><label for="opt3">Скопье</label>'
    ],
    correctAnswer: 'Гамбург'
  }
];

let counter = 0;

//Вывод слайдов
function showSlide(int) {
  let slide = document.querySelector('.slide');
  slide.innerHTML = `<p class="title">Вопрос ${questionsArray[int].number}</p>
                     <div class="question">${questionsArray[int].question}</div>
                     <div class="answer">${questionsArray[int].answer}</div>`;
  console.log(questionsArray[int].number);
}

function changeSlide() {
  let submitButton = document.querySelectorAll('.button'),
  index = 0;
  showSlide(index);
  submitButton.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('button_previous')) {
        index--;
      } else {
        index++;
      }
      showSlide(index);
    });
  });
}
changeSlide();
//Код из конспекта, не разобралась, как применить
// if (index === 0) {
//   previousButton.style.display = 'none';
// } else {
//   previousButton.style.display = 'inline-block';
// }
//
// if (index === slides.lengh - 1) {
//   nextButton.style.display = 'none';
//   submitButton.style.display = 'inline-block';
// } else {
//   nextButton.style.display = 'inline-block';
//   submitButton.style.display = 'none';
// }


const checkAnswer = () => {
  const answerContainers = document.querySelectorAll('.answer');

  questionsArray.question.forEach(() => {
    const answerContainer = answerContainers[number];
    const selector = `input[name=question${number}]:checked`;
    const userAnswer = (answerContainer.querySelector() || {}).value
    if (userAnswer === questionsArray.correctAnswer) {
    counter++;
      }
    })
}
checkAnswer();

const showResults = () => {
  const answerContainers = document.querySelectorAll('.answer');
  let numCorrect = 0;
  questionsArray.forEach( (currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionsArray[int].number}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value
    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
    }
  });
}



//это попытки перепечатать код из урока и понять, как он работает

// //
// const showResults = () => {
//   const answerContainers = document.querySelectorAll('.answer');
//   let numCorrect = 0;
//   questions.forEach( (currentQuestion, questionNumber) => {
//     const answerContainer = answerContainers[questionNumber];
//     const selector = `input[name=question${number}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value
//     if(userAnswer === currentQuestion.correctAnswer){
//       numCorrect++;
//     }
//   });
// }
// //
// // submitButton.addEventListener('click', () => {
// //   showResults();
// });

// function quiz(array) {
//   let score = 0;
  // let p = document.querySelector('.answer');

  // array.forEach((item) => {
  //   let userAnswer = prompt(item.question, '').toLowerCase();
  //   if (userAnswer === item.correctAnswer.toLowerCase()) {
  //     score++;
  //     }
  //   })
    // alert('Количетво правильных ответов '+ score +'');
    // p.innerHTML = ('Количетво правильных ответов '+ score +'.');
// }

// quiz(questionsArray);
