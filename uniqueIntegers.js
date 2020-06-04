// Given an integer n, return any array containing n unique integers such that they add up to 0.

 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]
 

// Constraints:

// 1 <= n <= 1000


var sumZero = function(n) {
  if (n === 1) return [0];
  if (n === 2) return [-1, 1];
  let result = [];
  for (let i = parseInt((-1 * (n / 2))); i < 0 ; i++) {
    result.push(i);
  }
  if (n % 2 !== 0) result.push(0);
  for (let i = 1; i <= parseInt(n / 2) ; i++) {
    result.push(i);
  }
  return result;
};


console.log(sumZero(5)) // => [-2, -1, 0, 1, 2]
console.log(sumZero(4)) // => [-2, -1, 1, 2]
console.log(sumZero(3)) // => [-1, 0, 1]
console.log(sumZero(1)) // => [0]