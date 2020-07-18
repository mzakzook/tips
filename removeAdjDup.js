// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

 

// Example 1:

// Input: "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 

// Note:

// 1 <= S.length <= 20000
// S consists only of English lowercase letters.


// var removeDuplicates = function(S) {
//   function dedupe(string) {
//       for (let i = 0; i < string.length - 1; i++) {
//           if (string[i] === string[i + 1]) {
//               string = string.slice(0, i) + string.slice(i + 2);
//               return dedupe(string);
//           }
//       }
//       return string;
//   }
//   return dedupe(S);
// };

var removeDuplicates = function(S) {
  for (let i = 0; i < S.length - 1; i++) {
      if (S[i] === S[i + 1]) {
          S = S.slice(0, i) + S.slice(i + 2);
          return removeDuplicates(S);
      }
  }
  return S;
};


console.log(removeDuplicates("abbaca")); // => "ca"