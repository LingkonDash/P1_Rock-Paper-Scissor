const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const playerWin = document.getElementById('playerWin')
const computerWin = document.getElementById('computerWin')

let wining = 1
let losing = 1
let playerChoice = document.getElementById('playerDisplay')
let computerChoice = document.getElementById('computerDisplay')
let result = document.getElementById('resultDisplay')

result.style.color = 'black'
const action = ['Rock', 'Paper', 'Scissors'];

button1.addEventListener('click', () => {
  playerChoice.innerHTML = 'Rock'
  
  const randomPicker = Math.floor(Math.random() * action.length)
const random = action[randomPicker]

  computerChoice.innerHTML = (random)
  
  if (computerChoice.innerHTML === 'Rock') {
      result.innerHTML = "IT'S A TIE! 🙂"
      result.style.color = '#e3e014'
  }
  else if (computerChoice.innerHTML === 'Scissors') {
      result.innerHTML = "YOU WIN! 👏"
      result.style.color = 'green'
      playerWin.innerHTML = wining++
  }
  else {
    result.innerHTML = "YOU LOSE 😂"
    result.style.color = 'red'
    computerWin.innerHTML = losing++
  }
})

button2.addEventListener('click', () => {
  playerChoice.innerHTML = 'Paper'
  
  const randomPicker = Math.floor(Math.random() * action.length)
const random = action[randomPicker]

  computerChoice.innerHTML = (random)
  
      if (computerChoice.innerHTML === 'Paper') {
      result.innerHTML = "IT'S A TIE! 🙂"
      result.style.color = '#e3e014'
    }
    else if (computerChoice.innerHTML === 'Rock') {
      result.innerHTML = "YOU WIN! 👏"
      result.style.color = 'green'
      
      playerWin.innerHTML = wining++
    }
    else {
      result.innerHTML = "YOU LOSE 😂"
      result.style.color = 'red'
      computerWin.innerHTML = losing++
    }
  
})

button3.addEventListener('click', () => {
  playerChoice.innerHTML = 'Scissors'
  
  const randomPicker = Math.floor(Math.random() * action.length)
const random = action[randomPicker]

  computerChoice.innerHTML = (random)
  
      if (computerChoice.innerHTML === 'Scissors') {
      result.innerHTML = "IT'S A TIE! 🙂"
      result.style.color = '#e3e014'
    }
    else if (computerChoice.innerHTML === 'Paper') {
      result.innerHTML = "YOU WIN! 👏"
      result.style.color = 'green'
      playerWin.innerHTML = wining++
    }
    else {
      result.innerHTML = "YOU LOSE 😂"
      result.style.color = 'red'
      computerWin.innerHTML = losing++
    }
})
