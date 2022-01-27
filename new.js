const playerChoiceDisplay = document.createElement('h3')
const computerChoiceDisplay = document.createElement('h3')
const resultDisplay = document.createElement('h3')
const gameGrid = documnet.getElementById('game')
gameGrid.append(platerChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let playerChoice 
let computerChoice 

const handleClick = (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innterHTML = 'Player choice: ' + playerChoice
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => { 
    const randomChoice = choices[Math.random(Math.random() * choices.length)]
    computerChoice = randomChoice 
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i ++) { 
    const button = documet.createElement('button')
    button.id = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResult = () => { 
    switch (playerChoice + computerChoice) { 
        case 'scissorspaper':
        case 'rocksscirssors':
        case 'paperrock':
            resultDisplay.innerHTML = "YOU WIN!"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "YOU LOSE!"
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
        resultDisplay.innerHTML = "ITS A DRAW"
        break
    }
}