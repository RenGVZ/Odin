// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
const arr = [0, 3, 4, 5];

// function squareSum(numbers) {
//   return numbers.reduce((sum, num) => {
//     return sum += (num * num);
//   }, 0)
// }

function squareSum(numbers) {
  sum = 0;
  numbers.forEach((n) => {
    sum += (n * n);
  });
  return sum;
}

console.log(squareSum(arr));