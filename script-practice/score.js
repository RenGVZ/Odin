const button = document.querySelector("button");
  let pointsPossible = 50
  let pointsMissed = prompt("How many points did you miss?");
  let calculation = pointsPossible - pointsMissed;
  let score = (calculation / pointsPossible) * 100;

  let answer = document.getElementById("answer");
  // let name = "What's your name?"
  button.onclick = function(){
    `${pointsMissed}`;
    answer.innerText = `${score}%`;
    // console.log(answer.innerHTML);
  }