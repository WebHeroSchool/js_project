let num;

const questionsArray = [
  {
    question: 'Вопрос 1',
    correctAnswer: '1'
  },
  {
    question: 'Вопрос 2',
    correctAnswer: '2'
  },
  {
    question: 'Вопрос 3',
    correctAnswer: '3'
  },
  {
    question: 'Вопрос 4',
    correctAnswer: '4'
  }
];

function quiz(array) {
  let score = 0;
  let p = document.querySelector('.answer');

  array.forEach((item) => {
    let answer = prompt(item.question, '').toLowerCase();
    if (answer === item.correctAnswer.toLowerCase()) {
      alert('Верно!');
      score++;
    } else {
      alert('Неверно!')
    }
    })
    // alert('Количетво правильных ответов '+ score +'');
    p.innerHTML = ('Количетво правильных ответов '+ score +'.');
}

quiz(questionsArray);
