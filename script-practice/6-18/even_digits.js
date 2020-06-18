// Leet Code exercise
// Given an array nums of integers, return how many of them contain an even number of digits.
 
// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

const nums = [12,345,2,6,7896]

var findNumbers = function(nums) {
//     0. make const even = 0
  let even = [];
//     1. itterate over elements in nums array
  nums.forEach(num => {
//     2. convert each element to string() and then get it's .length
    const length = num.toString().length;
        // console.log(typeof length);
//     3. if that length is divisible by 2 (num % 2 = 0) then return it to the even variable 
      if (length % 2 == 0) {
            even++;
      };
    });
    return even;
};

console.log(findNumbers(nums));