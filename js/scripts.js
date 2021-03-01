let num,
  score;

// 3. В проекте - преобразовать объекты с заданиями и ответами в единный массив = [question 1, question 2, question 3, question 4]
const questionsArray = [
  {
    question: 'Вопрос 1',
    answer: 'Ответ 1'
  },
  {
    question: 'Вопрос 2',
    answer: 'Ответ 2'
  },
  {
    question: 'Вопрос 3',
    answer: 'Ответ 3'
  },
  {
    question: 'Вопрос 4',
    answer: 'Ответ 4'
  }
];
// 1. Сделать массив [question 1, question 2], вывести в консоль correctAnswer для кажого элемента массива
let questArray = [
  {
    question1: 'Вопрос 1',
    correctAnswer: 'a'
  },
  {
    question2: 'Вопрос 2',
    correctAnswer: 'b'
  }
];

questArray.forEach((item) => {
  console.log(item.correctAnswer);
});

// 2. Из массива в задании 1, сделать массив [question3,question 1, question 2], вывести correctAnswer только там, где он равен "c"
questArray.unshift ({question3: 'Вопрос 3', correctAnswer: 'c'})
console.log(questArray);

questArray.forEach((item) => {
  if (item.correctAnswer === 'c') {
    console.log(item.correctAnswer);
  }
});
