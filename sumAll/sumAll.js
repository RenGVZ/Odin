const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (typeof num1 !== "number" || typeof num2 !== "number") return 'ERROR';

  if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }

  let sum = 0
  for (let x = num1; x < num2 + 1; x++) {
    sum += x;
  }
  return sum;
}

console.log(sumAll(1, 5));

module.exports = sumAll
