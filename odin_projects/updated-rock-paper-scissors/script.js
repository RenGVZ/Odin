// Selectors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const para = document.querySelector('#paragraph');

// GamePlay Functions
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection){
    return "It's a tie 🏳️";
  } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
    return "You win! 😀";
  } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissors")){
    return "You lose 😞";
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
