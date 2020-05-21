// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
// Example 4:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
 

// Constraints:

// 1 <= s.length <= 1000
// s[i] = 'L' or 'R'



function balancedStringSplit(s) {
  let rCount = 0;
  let lCount = 0;
  let result = 0;
  for (let i = 0 ; i < s.length ; i++) {
      if (s[i] === 'R') rCount += 1;
      if (s[i] === 'L') lCount += 1;
      if (rCount === lCount) {
          result += 1;
          rCount = 0;
          lCount = 0;
      }
  }
  return result;
};



console.log(balancedStringSplit("RLRRLLRLRL")) // => 4
console.log(balancedStringSplit("RLLLLRRRLR")) // => 3
console.log(balancedStringSplit("LLLLRRRR")) // => 1
console.log(balancedStringSplit("RLRRRLLRLL")) // => 2





