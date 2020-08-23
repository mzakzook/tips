// Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

 

// Example 1:

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.
// Example 2:

// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.
// Example 3:

// Input: arr = [1,9]
// Output: 1
// Example 4:

// Input: arr = [1000,1000,3,7]
// Output: 1
// Example 5:

// Input: arr = [1,2,3,4,5,6,7,8,9,10]
// Output: 5
 

// Constraints:

// 1 <= arr.length <= 10^5
// arr.length is even.
// 1 <= arr[i] <= 10^5


var minSetSize = function(arr) {
  let numCnt = {};
  for (let i = 0; i < arr.length; i++) {
      if (numCnt[arr[i]]) {
          numCnt[arr[i]] += 1;
      } else {
          numCnt[arr[i]] = 1;
      }
  }
  let cntArr = [];
  for (let key in numCnt) {
      cntArr.push(numCnt[key]);
  }
  cntArr.sort((a, b) => b - a);
  let result = 0;
  let sum = 0;
  let i = 0;
  while (sum < arr.length / 2) {
      result++;
      sum += cntArr[i];
      i++;
  }
  return result;
};


console.log(minSetSize([3,3,3,3,5,5,5,2,2,7])); // => 2
console.log(minSetSize([7,7,7,7,7,7])); // => 1
console.log(minSetSize([1,9])); // => 1
console.log(minSetSize([1000,1000,3,7])); // => 1
console.log(minSetSize([1,2,3,4,5,6,7,8,9,10])); // => 5