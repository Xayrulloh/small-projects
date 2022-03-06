const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
class Game {
    constructor(yourScoreSpan, computerScoreSpan) {
        this.yourScoreSpan = yourScoreSpan,
        this.computerScoreSpan = computerScoreSpan
        this.SELECTIONS = [
            {
                name: 'rock',
                emoji: '✊',
                beats: 'scissors'
            },
            {
                name: 'paper',
                emoji: '✋',
                beats: 'rock'
            },
            {
                name: 'scissors',
                emoji: '✌',
                beats: 'paper'
            }
        ]
    }

    start(selectionName) {
        let selection = this.SELECTIONS.find(selection => selection.name === selectionName)
        this.makeSelection(selection)
    }
    makeSelection(selection) {
        const computerSelection = this.randomSelection()
        const yourWinner = this.isWinner(selection, computerSelection)
        const computerWinner = this.isWinner(computerSelection, selection)

        this.addSelectionResult(computerSelection, computerWinner)
        this.addSelectionResult(selection, yourWinner)

        yourWinner ? this.incrementScore(this.yourScoreSpan) : ''
        computerWinner ? this.incrementScore(this.computerScoreSpan) : ''
    }
    incrementScore(scoreSpan) {
        scoreSpan.innerText = +scoreSpan.innerText + 1
    }
    addSelectionResult(selection, winner) {
        const div = document.createElement('div')
        div.innerText = selection.emoji
        div.classList.add('result-selection')
        winner ? div.classList.add('winner') : ''
        finalColumn.after(div)
    }
    isWinner(selection, opponentSelection) {
        return selection.beats === opponentSelection.name
    }
    randomSelection() {
        return this.SELECTIONS[Math.random() * this.SELECTIONS.length | 0]
    }
}

const game = new Game(yourScoreSpan, computerScoreSpan)

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        game.start(selectionName)
    })
})






