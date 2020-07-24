// Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

// Return how many groups have the largest size.

 

// Example 1:

// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.
// Example 2:

// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.
// Example 3:

// Input: n = 15
// Output: 6
// Example 4:

// Input: n = 24
// Output: 5
 

// Constraints:

// 1 <= n <= 10^4



// var countLargestGroup = function(n) {
//     let groups = {};
//     for (let i = 1; i <= n; i++) {
//         let sum = i.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
//         if (groups[sum]) {
//             groups[sum].push(i);
//         } else {
//             groups[sum] = [i];
//         }
//     }
//     let result = 0;
//     let length = 0;
//     for (let key in groups) {
//         if (groups[key].length === length) {
//             result += 1;
//         } else if (groups[key].length > length) {
//             length = groups[key].length;
//             result = 1;
//         }
//     }
//     return result;
// };


var countLargestGroup = function(n) {
  let groups = {};
  let largest = 0;
  let result = 0;
  for (let i = 1; i <= n; i++) {
      let sum = i.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
      if (groups[sum]) {
          groups[sum].push(i);  
      } else {
          groups[sum] = [i];  
      }
      if (groups[sum].length === largest) {
        result += 1;
      } else if (groups[sum].length > largest) {
        largest = groups[sum].length;
        result = 1;
      }
  }
  return result;
};



console.log(countLargestGroup(13)); // => 4
console.log(countLargestGroup(2)); // => 2
console.log(countLargestGroup(15)); // => 6
console.log(countLargestGroup(24)); // => 5