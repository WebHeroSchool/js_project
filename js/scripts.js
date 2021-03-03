let num,
  score;

const questionsArray = [
  {
    question: 'Вопрос 1',
    correctAnswer: 'Ответ 1'
  },
  {
    question: 'Вопрос 2',
    correctAnswer: 'Ответ 2'
  },
  {
    question: 'Вопрос 3',
    correctAnswer: 'Ответ 3'
  },
  {
    question: 'Вопрос 4',
    correctAnswer: 'Ответ 4'
  }
];

function quiz(array) {
  array.forEach((item) => {
    let answer = prompt(item.question, '').toLowerCase();
    if (answer === item.correctAnswer.toLowerCase()) {
      alert('Верно!')
    } else {
      alert('Неверно!')
    }
  })
}

quiz(questionsArray);
