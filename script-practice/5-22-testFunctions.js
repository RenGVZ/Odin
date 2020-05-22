const para = document.getElementById("paragraph");

function add7(num) {
  return parseInt(num) + 7;
}

// para.textContent = add7(prompt("What number?"));

function multiply(x, y) {
  return x * y;
}

// para.textContent = multiply(prompt("first number?"), prompt("second number?"));

function capitalize(word) {
  let first = word[0].toUpperCase();
  let rest = word.substring(1).toLowerCase();

  return first + rest;
};

// para.textContent = capitalize(prompt("give me a word"));

function lastLetter(string) {
  let last = string.substr(-1).toUpperCase();
  return last;
}

// para.textContent = lastLetter(prompt("Return the last letter you type"));
