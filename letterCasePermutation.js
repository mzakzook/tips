// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

// Input: S = "3z4"
// Output: ["3z4", "3Z4"]

// Input: S = "12345"
// Output: ["12345"]
// Note:

// S will be a string with length between 1 and 12.
// S will consist only of letters or digits.


var letterCasePermutation = function(S) {
  let result = [S];
  for (let i = 0; i < S.length; i++) {
      let n = S[i].charCodeAt(0);
      if (n >= 65 && n < 91) {
          let resNum = result.length;
          for (let y = 0; y < resNum; y++) {
              result.push(result[y].slice(0, i) + S[i].toLowerCase() + result[y].slice(i + 1));
          }
      } else if (n >= 97 && n < 123) {
          let resNum = result.length;
          for (let y = 0; y < resNum; y++) {
              result.push(result[y].slice(0, i) + S[i].toUpperCase() + result[y].slice(i + 1));
          }
      }
  }
  return result;
};


console.log(letterCasePermutation("a1b2")); // => ["a1b2", "a1B2", "A1b2", "A1B2"]
console.log(letterCasePermutation("3z4")); // => ["3z4", "3Z4"]
console.log(letterCasePermutation("12345")); // => ["12345"]