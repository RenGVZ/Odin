class Calculator {
  constructor(prevNum, currentNum) {
    this.currentNum = currentNum,
    this.prevNum = prevNum
    this.clearAll();
  };

  clearAll() {
    this.currentOperand = '';
    this.prevOperand = '';
    this.operation = undefined;
    // this.updateDisplay();
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentNum.innerText + number;
    
    // calculator.updateDisplay(num);
  }

  chooseOperation(operation) {
    // console.log(operation)
    if (this.currentOperand === '') return;
    if (this.prevNum !== '') {
      this.compute()
    }
    this.operation = operation;
    this.prevOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation = this.operation
    let prev = parseFloat(this.prevNum.innerText);
    let current = parseFloat(this.currentNum.innerText);
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break
      case '-':
        computation = prev - current;
        break
      case 'x':
        computation = prev * current;
        break
      case '÷':
        computation = prev / current;
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined;
    this.prevOperand = '';
  }

  getDisplayNumber(number) {
    return number.toLocaleString('en');
    // const stringNumber = number.toString();
    // const integerDigits = parseFloat(stringNumber.split('.')[0]);
    // const decimalDigits = stringNumber.split('.')[1];
    // let integerDisplay
    // if (isNaN(integerDigits)) {
    //   integerDisplay = ''
    // } else {
    //   integerDisplay = integerDigits.toLocaleString('en', {
    //   maximumFractionDigits: 0 })
    // }
    // if (decimalDigits != null) {
    //   return  `${integerDisplay}.${decimalDigits}`
    // } else {
    //   return integerDisplay;
    // }
  }

  updateDisplay() {
    if (this.prevOperand === undefined) this.prevOperand = '';
    if (this.operation === undefined) this.operation = '';
      this.currentNum.innerText = this.getDisplayNumber(this.currentOperand);
      if (this.operation != null) {
        this.prevNum.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
      }
    
    // display.innerText = this.currentNum;
  }
}

const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const display = document.querySelector('[data-current]');
const clear = document.querySelector('[data-all-clear]');
const prevNum = document.querySelector('[data-previous]');
const currentNum = document.querySelector('[data-current]');

const calculator = new Calculator(prevNum, currentNum);

clear.addEventListener('click', event => {
  calculator.clearAll();
  calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay()
})

numbers.forEach(number => {
  number.addEventListener('click', () => {
    // console.log(number.innerText)
    calculator.appendNumber(calculator.getDisplayNumber(number.innerText));
    calculator.updateDisplay();
  })
})

operations.forEach(operation => {
  operation.addEventListener('click', () => {
    calculator.chooseOperation(operation.innerText);
    calculator.updateDisplay();
  })
});

equals.addEventListener('click', () => {
  // console.log(equals)
  calculator.compute();
  calculator.updateDisplay();
})