const playBtn = document.getElementById("play-btn");
const para = document.getElementById("paragraph");

playBtn.addEventListener("click", game);

function game() {

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

  function playerPlay() {
    const playerChoice = prompt("rock, paper, or scissors?");
      if (playerChoice === ""){
        alert("Please enter rock, paper or scissors");
      }
      // else if ((playerChoice !== "rock") || (playerChoice !=="scissors") || (playerChoice !=="paper")){
      //   alert("Please enter rock, paper or scissors")
      // }
      return playerChoice;
  }

  function computerPlay() {
    const array = ["rock", "paper", "scissors"];
    const choice = array[Math.floor(Math.random() * array.length)];
    // const selection = array[choice];
    console.log("Cheater's results- computer: " + choice);
    return choice;
  }

  const computerSelection = computerPlay();
  const playerSelection = playerPlay();
  para.textContent = playRound(playerSelection, computerSelection);

}