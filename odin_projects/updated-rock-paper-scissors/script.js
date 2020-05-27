// Selectors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const left = document.querySelector('#left > p');
const right = document.querySelector('#right > p');
const para = document.querySelector('#paragraph');
const displayPlayer = document.querySelector('#display-player');
const displayComputer = document.querySelector('#display-computer');
const displayRound = document.querySelector('#display-round');

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// GamePlay Functions
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection){
    playerScore++;
    computerScore++;
    roundCount++;
    displayRound.textContent = roundCount;
    displayPlayer.textContent = playerScore;
    displayComputer.textContent = computerScore;
    return "It's a tie 🏳️";
  } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
    playerScore++;
    roundCount++;
    displayRound.textContent = roundCount;
    displayPlayer.textContent = playerScore;
    displayComputer.textContent = computerScore;
    return "You win! 😀";
  } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissors")){
    computerScore++;
    roundCount++;
    displayRound.textContent = roundCount;
    displayPlayer.textContent = playerScore;
    displayComputer.textContent = computerScore;
    return "You lose 💩";
  };
};
function computerPlay() {
  const array = ['rock', 'paper', 'scissors'];
  const choice = array[Math.floor(Math.random() * array.length)];
    if (choice === 'rock') {
      right.textContent = "🗿 Rock";
    } else if (choice === 'paper') {
      right.textContent = '📄 Paper';
    } else if (choice === 'scissors') {
      right.textContent = '💇‍♂️ Scissors'
    };
  // console.log(`Cheater's Results| Computer- ${choice}`);
  return choice;
};

// Click Events
rock.addEventListener('click', rockPlay);
  function rockPlay () {
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    left.textContent = "🗿Rock!"
    para.textContent = playRound(playerSelection, computerSelection);
  };
paper.addEventListener('click', paperPlay);
  function paperPlay () {
    const playerSelection = 'paper';
    const computerSelection = computerPlay();
    left.textContent = "📄 Paper";
    para.textContent = playRound(playerSelection, computerSelection);
  }
scissors.addEventListener('click', scissorsPlay);
  function scissorsPlay () {
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();
    left.textContent = "💇‍♂️ Scissors";
    para.textContent = playRound(playerSelection, computerSelection);
  }