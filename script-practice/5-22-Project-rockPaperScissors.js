function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection){
    return "tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors"){
    return "player wins";
  } else if (playerSelection == "rock" && computerSelection == "paper"){
    return "computer wins";
  } else if (playerSelection == "scissors" && computerSelection == "rock"){
    return "computer wins";
  } else if (playerSelection == "scissors" && computerSelection == "paper"){
    return "player wins";
  } else if (playerSelection == "paper" && computerSelection == "rock"){
    return "player wins";
  } else if (playerSelection == "paper" && computerSelection == "scissors"){
    return "computer wins";
  }
};

const computerSelection = computerPlay();
const playerSelection = playerPlay();

function playerPlay() {
  const playerChoice = prompt("rock, paper, or scissors?");
  return playerChoice;
}

function computerPlay() {
  const array = ["rock", "paper", "scissors"];
  const choice = array[Math.floor(Math.random() * array.length)];
  // const selection = array[choice];
  console.log("Cheater's results- computer: " + choice);
  return choice;
}

const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", playRound);

// console.log(playRound(playerSelection, computerSelection));
const para = document.getElementById("paragraph");
para.textContent = playRound(playerSelection, computerSelection);
