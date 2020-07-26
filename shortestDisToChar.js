// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

// Note:

// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.



var shortestToChar = function(S, C) {
  let indexes = [];
  for (let i = 0; i < S.length; i++) {
      if (S[i] === C) indexes.push(i);
  }
  let result = [];
  for (let i = 0; i < S.length; i++) {
      if (indexes.includes(i)) {
          result.push(0);
      } else {
          let min = Number.MAX_SAFE_INTEGER;
          for (let y = 0; y < indexes.length; y++) {
              if (Math.abs(indexes[y] - i) < min) min = Math.abs(indexes[y] - i);
          }
          result.push(min);
      }
  }
  return result;
};


console.log(shortestToChar("loveleetcode","e")); // => [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]