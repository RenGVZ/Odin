// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

const A = [-4,-1,0,3,10];

var sortedSquares = function(A) {
  let squared = [];
  A.forEach(num => {
      squared.push(num * num);
  })
  return squared.sort(function(a, b) {
      return a - b;
  });
};

console.log(sortedSquares(A));

// Expected answer
// [0,1,9,16,100]