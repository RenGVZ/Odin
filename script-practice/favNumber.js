const button = document.querySelector("button");

  let answer = document.getElementById("answer");
  
  // console.log(response);
  button.addEventListener('click', numFunc)
    
  function numFunc() {
      let number = prompt('what is your favorite number');
      if (number == 42) {
        answer.innerText = "Yay! That's my favorite too!"
      } else if(number < 42) {
        answer.innerText = `Eh, that's OK but ${parseInt(number) + 1} would be even better`
      } else {
        answer.innerText = "LAME. That number is too large!"
      }
    }