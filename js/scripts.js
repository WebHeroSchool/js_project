let quizContainer = document.querySelector('.quiz');
let resultsContainer = document.querySelector('.results');
let submitButton = document.querySelector('.button_results');
let numCorrect = 0;
let nameForm = document.querySelector('.form');
let sendButton = document.querySelector('.send-button');
let userName = document.querySelector('.user-name');
let buttonsNav = document.querySelector('.wrap-btn');
const previousButton = document.querySelector('.button_previous');
const nextButton = document.querySelector('.button_next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

class Quiz {

    buildQuiz(items, node) {
      const output = [];
      items.forEach(
        (currentQuestion, questionNumber) => {
          let answersArray = [].concat(currentQuestion.correct_answer, currentQuestion.incorrect_answers);
          let answersMarkup = [];
          answersArray.sort(() => Math.random() - 0.5);

          for (let item in answersArray) {
            answersMarkup.push(
              `<label>
                <input type='radio' name='question${questionNumber}' value='${answersArray[item]}'>
                  ${answersArray[item]}
                </label>`
              );
            }

            output.push(
              `<div class='slide'>
                <div class='question'> ${currentQuestion.question} </div>
                <div class='answers'> ${answersMarkup.join(' ')} </div>
              </div>`
            );
          }
        );
      node.innerHTML = output.join('');
      sendButton.addEventListener('click', this.validateName);
    }

    // addUserName() {
    //   quizContainer.style.display = 'none';
    //   buttonsNav.style.display = 'none';
    // }
//
//     Quiz.addUserName()
//
    startGame() {
      nameForm.style.opacity = '0';
      quizContainer.style.display = 'inline-block';
      buttonsNav.style.display = 'flex';
      this.showSlide(currentSlide);
    }
//
//     sendButton.addEventListener('click', Quiz.validateName())
//
    validateName() {
      let regex = /^([А-Я]{1}[а-я]{1,9}|[A-Z]{1}[a-z]{1,9})$/;
      userName.classList.remove('error');

      if (!regex.test(userName.value)) {
        // event.preventDefault();
        // event.stopPropagation();
        userName.classList.add('error');

        let error = document.createElement('div');
        error.className = 'error-block';
        error.style.color = 'red';
        error.innerHTML = 'Укажите корректное имя';
        userName.parentElement.insertBefore(error, userName);
      } else {
        this.startGame();
      }
    }
//
//     showSlide(n) {
//       slides[currentSlide].classList.remove('active-slide');
//       slides[n].classList.add('active-slide');
//       currentSlide = n;
//
//       if(currentSlide === 0){
//         previousButton.style.display = 'none';
//       } else{
//         previousButton.style.display = 'block';
//       }
//       if(currentSlide === slides.length-1){
//         nextButton.style.display = 'none';
//         submitButton.style.display = 'block';
//       } else{
//         nextButton.style.display = 'block';
//         submitButton.style.display = 'none';
//       }
//     this.timer()
//     }
// //
//     timer() {
//       let minutes = 0;
//       let seconds = 10;
//       let idInt = function() {
//         if (seconds >= 0) {
//         	document.querySelector('.time').innerHTML = makeMeTwoDigits(minutes) + ":" + makeMeTwoDigits(seconds);
//         	seconds--;
//     	} else {
//         	slides[currentSlide].classList.add('done');
//         	clearInterval(timerId);
//         	if (currentSlide === slides.length - 1) {
//           		this.showResults();
//            		return;
//         	} else {
//           		this.showNextSlide();
//         	}
//         }
//        };
//       let timerId = setInterval(idInt, 1000);
//       function makeMeTwoDigits(n) {
//         return (n < 10 ? "0" : "") + n;
//       }
//         nextButton.addEventListener('click', function() {
//         	clearInterval(timerId);
//         });
//         previousButton.addEventListener('click', function() {
//         	clearInterval(timerId);
//         });
//     }
//
//     checkResults (e) {
//     const tar = e.target;
//     if(tar.tagName === 'INPUT') {
//       const questionNumber = tar.name.slice(-1);
//       const userAnswer = tar.value;
//       const isCorrect = questions[questionNumber].correct_answer === userAnswer;
//       if(isCorrect) {
//         tar.parentNode.style.color = 'green';
//         numCorrect++;
//         } else {
//           tar.parentNode.style.color = 'red';
//         }
//         const radioButtons = e.currentTarget.querySelectorAll('.answer, input');
//         radioButtons.forEach(button => button.setAttribute('disabled', 'disable'));
//       }
//      }
//
//      setAnswerHandlers() {
//        Array.from(quizContainer.querySelectorAll('.slide .answers')).forEach(answer => {
//          answer.addEventListener('click', Quiz.checkResults());
//        })
//      }
//
//     Quiz.setAnswerHandlers()
//
//     showNextSlide() {
//       showSlide(currentSlide + 1);
//     }
//
//     showPreviousSlide() {
//       showSlide(currentSlide - 1)
//     }
//
//     previousButton.addEventListener('click', Quiz.showPreviousSlide());
//     nextButton.addEventListener('click', Quiz.showNextSlide());
//
//     showResults() {
//       // document.querySelector('.time').innerHTML = '';
//       document.querySelector('.time').style.display = 'none';
//       quizContainer.style.display = 'none';
//       previousButton.style.display = 'none';
//       nextButton.style.display = 'none';
//       submitButton.style.display = 'none';
//       resultsContainer.innerHTML = `${userName.value}, your result is ${numCorrect} of ${questions.length}`
//       Quiz.restart()
//     }
//
//     restart() {
//       let restart = document.querySelector('.button_restart');
//       restart.style.display = 'block';
//       restart.addEventListener('click', function() {
//         document.location.reload();
//       });
//     }
// }
//       submitButton.addEventListener('click', Quiz.showResults());

}

async function getQuestions() {
  const response = await fetch('https://opentdb.com/api.php?amount=4&category=22&difficulty=easy&type=multiple');
  const data = await response.json();
  let questions = data.results;
  let quiz = new Quiz;

  quiz.buildQuiz(questions, quizContainer);
  quiz.startGame()
}

getQuestions();









// class Quiz {
//   async getQuestions() {
//     const response = await fetch('https://opentdb.com/api.php?amount=4&category=22&difficulty=easy&type=multiple');
//     const data = await response.json();
//     let questions = data.results;
//     let quizContainer = document.querySelector('.quiz');
//     let resultsContainer = document.querySelector('.results');
//     let submitButton = document.querySelector('.button_results');
//     let numCorrect = 0;
//
//     buildQuiz() {
//       const output = [];
//       questions.forEach(
//         (currentQuestion, questionNumber) => {
//           let answersArray = [].concat(currentQuestion.correct_answer, currentQuestion.incorrect_answers);
//           let answersMarkup = [];
//           answersArray.sort(() => Math.random() - 0.5);
//
//           for (item in answersArray) {
//             answersMarkup.push(
//               `<label>
//                 <input type='radio' name='question${questionNumber}' value='${answersArray[item]}'>
//                   ${answersArray[item]}
//                 </label>`
//               );
//             }
//
//             output.push(
//               `<div class='slide'>
//                 <div class='question'> ${currentQuestion.question} </div>
//                 <div class='answers'> ${answersMarkup.join(' ')} </div>
//               </div>`
//             );
//           }
//         );
//       quizContainer.innerHTML = output.join('');
//     }
//
//     Quiz.buildQuiz()
//
//     let nameForm = document.querySelector('.form');
//     let sendButton = document.querySelector('.send-button');
//     let userName = document.querySelector('.user-name');
//     let buttonsNav = document.querySelector('.wrap-btn');
//
//     addUserName() {
//       quizContainer.style.display = 'none';
//       buttonsNav.style.display = 'none';
//     }
//
//     Quiz.addUserName()
//
//     startGame() {
//       nameForm.style.opacity = '0';
//       quizContainer.style.display = 'inline-block';
//       buttonsNav.style.display = 'flex';
//       Quiz.showSlide(currentSlide);
//     }
//
//     sendButton.addEventListener('click', Quiz.validateName())
//
//     validateName() {
//     let regex = /^([А-Я]{1}[а-я]{1,9}|[A-Z]{1}[a-z]{1,9})$/;
//     userName.classList.remove('error');
//
//       if(!regex.test(userName.value)) {
//         event.preventDefault();
//         event.stopPropagation();
//         userName.classList.add('error');
//
//         let error = document.createElement('div');
//         error.className = 'error-block';
//         error.style.color = 'red';
//         error.innerHTML = 'Укажите корректное имя';
//         userName.parentElement.insertBefore(error, userName);
//       } else {
//         Quiz.startGame();
//       }
//     }
//
//     const previousButton = document.querySelector('.button_previous');
//     const nextButton = document.querySelector('.button_next');
//     const slides = document.querySelectorAll('.slide');
//     let currentSlide = 0;
//
//     showSlide(n) {
//       slides[currentSlide].classList.remove('active-slide');
//       slides[n].classList.add('active-slide');
//       currentSlide = n;
//
//       if(currentSlide === 0){
//         previousButton.style.display = 'none';
//       } else{
//         previousButton.style.display = 'block';
//       }
//       if(currentSlide === slides.length-1){
//         nextButton.style.display = 'none';
//         submitButton.style.display = 'block';
//       } else{
//         nextButton.style.display = 'block';
//         submitButton.style.display = 'none';
//       }
//     Quiz.timer()
//     }
//
//     timer() {
//       let minutes = 0;
//       let seconds = 10;
//       let idInt = function() {
//         if (seconds >= 0) {
//         	document.querySelector('.time').innerHTML = makeMeTwoDigits(minutes) + ":" + makeMeTwoDigits(seconds);
//         	seconds--;
//     	} else {
//         	slides[currentSlide].classList.add('done');
//         	clearInterval(timerId);
//         	if (currentSlide === slides.length - 1) {
//           		Quiz.showResults();
//            		return;
//         	} else {
//           		Quiz.showNextSlide();
//         	}
//         }
//        };
//       let timerId = setInterval(idInt, 1000);
//       function makeMeTwoDigits(n) {
//         return (n < 10 ? "0" : "") + n;
//       }
//         nextButton.addEventListener('click', function() {
//         	clearInterval(timerId);
//         });
//         previousButton.addEventListener('click', function() {
//         	clearInterval(timerId);
//         });
//     }
//
//     checkResults (e) {
//     const tar = e.target;
//     if(tar.tagName === 'INPUT') {
//       const questionNumber = tar.name.slice(-1);
//       const userAnswer = tar.value;
//       const isCorrect = questions[questionNumber].correct_answer === userAnswer;
//       if(isCorrect) {
//         tar.parentNode.style.color = 'green';
//         numCorrect++;
//         } else {
//           tar.parentNode.style.color = 'red';
//         }
//         const radioButtons = e.currentTarget.querySelectorAll('.answer, input');
//         radioButtons.forEach(button => button.setAttribute('disabled', 'disable'));
//       }
//      }
//
//      setAnswerHandlers() {
//        Array.from(quizContainer.querySelectorAll('.slide .answers')).forEach(answer => {
//          answer.addEventListener('click', Quiz.checkResults());
//        })
//      }
//
//     Quiz.setAnswerHandlers()
//
//     showNextSlide() {
//       showSlide(currentSlide + 1);
//     }
//
//     showPreviousSlide() {
//       showSlide(currentSlide - 1)
//     }
//
//     previousButton.addEventListener('click', Quiz.showPreviousSlide());
//     nextButton.addEventListener('click', Quiz.showNextSlide());
//
//     showResults() {
//       // document.querySelector('.time').innerHTML = '';
//       document.querySelector('.time').style.display = 'none';
//       quizContainer.style.display = 'none';
//       previousButton.style.display = 'none';
//       nextButton.style.display = 'none';
//       submitButton.style.display = 'none';
//       resultsContainer.innerHTML = `${userName.value}, your result is ${numCorrect} of ${questions.length}`
//       Quiz.restart()
//     }
//
//     restart() {
//       let restart = document.querySelector('.button_restart');
//       restart.style.display = 'block';
//       restart.addEventListener('click', function() {
//         document.location.reload();
//       });
//     }
// }
//       submitButton.addEventListener('click', Quiz.showResults());
//
//   }
//
//   Quiz.getQuestions();
// }
//
// let quiz = new Quiz;
//
// quiz.buildQuiz();
// quiz.addUserName();





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
