const playerChoiceDisplay = document.createElement('h3')
const computerChoiceDisplay = document.createElement('h3')
const resultDisplay = document.createElement('h3')
const gameGrid = documnet.getElementById('game')
gameGrid.append(platerChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let playerChoice 
let computerChoice 

