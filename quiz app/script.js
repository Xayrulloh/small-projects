// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// let shuffledQuestions, currentQuestionIndex

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })

// function startGame() {
//   startButton.classList.add('hide')
//   shuffledQuestions = questions.sort(() => Math.random() - .5)
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion()
// }

// function setNextQuestion() {
//   resetState()
//   showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })
// }

// function resetState() {
//   clearStatusClass(document.body)
//   nextButton.classList.add('hide')
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//   }
// }

// function selectAnswer(e) {
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide')
//   } else {
//     startButton.innerText = 'Restart'
//     startButton.classList.remove('hide')
//   }
// }

// function setStatusClass(element, correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add('correct')
//   } else {
//     element.classList.add('wrong')
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }

// const questions = [
//   {
//     question: 'What is 2 + 2?',
//     answers: [
//       { text: '4', correct: true },
//       { text: '22', correct: false }
//     ]
//   },
//   {
//     question: 'Who is the best YouTuber?',
//     answers: [
//       { text: 'Web Dev Simplified', correct: true },
//       { text: 'Traversy Media', correct: true },
//       { text: 'Dev Ed', correct: true },
//       { text: 'Fun Fun Function', correct: true }
//     ]
//   },
//   {
//     question: 'Is web development fun?',
//     answers: [
//       { text: 'Kinda', correct: false },
//       { text: 'YES!!!', correct: true },
//       { text: 'Um no', correct: false },
//       { text: 'IDK', correct: false }
//     ]
//   },
//   {
//     question: 'What is 4 * 2?',
//     answers: [
//       { text: '6', correct: false },
//       { text: '8', correct: true }
//     ]
//   }
// ]

let a = 0
let questions = {
    question: ['Which method using for add element in the beginning of the array?', 'Which method using for add element at the end of the array?', 'What do you think did you pass the exam?', 'What do you think is it so hard to do this project?'],
    answer: [['push', 'unshift', 'shift', 'pop'], ['push', 'unshift', 'shift', 'pop'] ['Yes absolutely', 'Yes of course', 'I don\'t know', 'Noo 😭😭😭'], ['Yes', 'You are copied this project', 'I think you did only js', 'No very easy to do']],
    correct: ['unshift', 'push', 'I don\'t know', 'I think you did only js']
}

start.onclick = () => {
    start.classList.add('hide');
    container.innerHTML = `
    <div id="question">${questions.question[a]}</div>
    <div id="answer-buttons" class="btn-grid">
      <button id="btn" class="btn">${questions.answer[a][0]}</button>
      <button id="btn" class="btn">${questions.answer[a][1]}</button>
      <button id="btn" class="btn">${questions.answer[a][2]}</button>
      <button id="btn" class="btn">${questions.answer[a][3]}</button>
    </div>
  </div>
  <div id="controls" class="controls"></div>`
    nextQuestion()
}

function nextQuestion() {
    for (let button of btn) {
        button.onclick = () => {
            if (button.innerText === questions.correct[a]) {
                document.body.classList.add('correct')
            } else {document.body.classList.add('wrong')}
            for (let a of btn) {
                if (a.innerText == 'unshift') {
                    a.classList.add('correct')
                } else {a.classList.add('wrong')}
            }
            console.log(controls);
            controls.innerHTML = `<button id="next-btn" class="next-btn btn hide">Next</button>`
        }
    }
}




























