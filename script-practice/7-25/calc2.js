let newVal = ''
let prevVal = ''
let operation = ''
let result = ''

const currentDisplay = document.querySelector('[data-current]');
const prevDisplay = document.querySelector('[data-prev]');
const equals = document.querySelector('[data-equals]');
const allClear = document.querySelector('[data-all-clear]');

function getNumbers(num) {
  newVal += num;
  currentDisplay.innerText = newVal;
}

function getOperator(operator) {
  operation = operator;
  prevVal = newVal;
  newVal = '';
}

equals.addEventListener('click', function compute() {
  switch (operation) {
    case '+':
      result = parseInt(prevVal) + parseInt(newVal);
      break
    case '-':
      result = parseInt(prevVal) - parseInt(newVal);
      break
    case 'x':
      result = parseInt(prevVal) * parseInt(newVal);
      break
    case '÷':
      result = parseInt(prevVal) / parseInt(newVal);
      break
    case '%':
      result = parseInt(prevVal) % parseInt(newVal);
      break
    default:
      return
  }
  return currentDisplay.innerText = result
});

allClear.addEventListener('click', () => {
  newVal = '';
  prevVal = '';
  operation = '';
  result = '';
  currentDisplay.innerText = '';
})









// const operationButtons = document.querySelectorAll('[data-operation]');
// const equals = document.querySelector('[data-equals]');
// const display = document.querySelector('[data-current]');

// let firstNum = ''
// let secondNum = ''
// let operator = ''

// numberButtons.forEach(button => {
//   button.addEventListener('click', (event) => {
//     firstNum += event.target.innerText;
//     displayNum();
//   });
// });

// function displayNum() {
//   display.innerText = firstNum + secondNum + operator
// }

// operationButtons.forEach(operation => {
//   operation.addEventListener('click', (event) => {
//     operator = event.target.innerText;
//     secondNum += event.target.innerText
//     displaySecondNum();
//     // operate(firstNum, operator)
//   })
// })

// function displaySecondNum() {
//   display.innerText = secondNum
// }

// equals.addEventListener('click', (operate));

// function operate() {
//   console.log(firstNum, operator, secondNum)
// }