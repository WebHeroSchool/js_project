let num;

const questionsArray = [
  {
    number: 1,
    question: 'Назовите столицу Турции',
    answer: [
      '<input type="radio" class="answer">Анталья',
      '<input type="radio" class="answer">Анкара',
      '<input type="radio" class="answer">Стамбул'
    ],
    correctAnswer: 'Анкара'
  },
  {
    number: 2,
    question: 'Назовите самую северную столицу мира',
    answer: [
      '<input type="radio" class="answer">Рейкьявик',
      '<input type="radio" class="answer">Копенгаген',
      '<input type="radio" class="answer">Стокгольм'
    ],
    correctAnswer: 'Рейкьявик'
  },
  {
    number: 3,
    question: 'Осло - стоица какой страны?',
    answer: [
      '<input type="radio" class="answer">Финляндия',
      '<input type="radio" class="answer">Норвегия',
      '<input type="radio" class="answer">Дания'
    ],
    correctAnswer: 'Норвегия'
  },
  {
    number: 4,
    question: 'Какой из городов не является столицей?',
    answer: [
      '<input type="radio" class="answer">Хельсинки',
      '<input type="radio" class="answer">Гамбург',
      '<input type="radio" class="answer">Скопье'
    ],
    correctAnswer: 'Гамбург'
  }
];

function showSlide(int) {
  let slide = document.querySelector('.slide');
  slide.innerHTML = `<p class="title">Вопрос ${questionsArray[int].number}</p><div class="question">${questionsArray[int].question}</div><div class="answer">${questionsArray[int].answer}</div>`;
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
