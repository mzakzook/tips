// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

 

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
 

// Constraints:

// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5



var replaceElements = function(arr) {
  if (arr.length === 1) return [-1]
  let result = []
  for (let i = 0; i < arr.length - 2; i++) {
      result.push(Math.max(...arr.slice(i + 1)))
  }
  return result.concat([arr.slice(-1)[0], -1])
};


console.log(replaceElements([17,18,5,4,6,1])) // => [18,6,6,6,1,-1]