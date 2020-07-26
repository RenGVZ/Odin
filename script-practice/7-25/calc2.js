const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equals = document.querySelector('[data-equals]');
const display = document.querySelector('[data-current]');

let firstNum = ''
let secondNum = ''
let operator = ''

numberButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    firstNum += event.target.innerText;
    displayNum();
  });
});

function displayNum() {
  display.innerText = firstNum + secondNum + operator
}

operationButtons.forEach(operation => {
  operation.addEventListener('click', (event) => {
    operator = event.target.innerText;
    secondNum += event.target.innerText
    displaySecondNum();
    // operate(firstNum, operator)
  })
})

function displaySecondNum() {
  display.innerText = secondNum
}

equals.addEventListener('click', (operate));

function operate() {
  console.log(firstNum, operator, secondNum)
}