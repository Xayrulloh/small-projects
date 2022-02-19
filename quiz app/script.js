// ozgaruvcila ocvolingan
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// eventListeners
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// functions
function startGame() {

    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
        button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which method using for add element in the beginning of the array?',
    answers: [
      { text: 'push', correct: false },
      { text: 'unshift', correct: true },
      { text: 'shift', correct: false },
      { text: 'pop', correct: false }
    ]
  },
  {
    question: 'Which method using for add element at the end of the array?',
    answers: [
        { text: 'unshift', correct: false },
        { text: 'shift', correct: false },
        { text: 'pop', correct: false },
        { text: 'push', correct: true }
    ]
  },
  {
    question: 'What do you think did you pass the exam?',
    answers: [
        { text: 'I don\'t know', correct: true },
      { text: 'Yes absolutely', correct: false },
      { text: 'Yes of course', correct: false },
      { text: 'Noo 😭😭😭', correct: false }
    ]
  },
  {
    question: 'What do you think is it so hard to do this project?',
    answers: [
        { text: 'No very easy to do', correct: false },
        { text: 'I think you did only js', correct: false },
        { text: 'Different to everyone', correct: true },
        { text: 'You are copied this project', correct: false }
    ]
  }
]





























