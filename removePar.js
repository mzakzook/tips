// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

// Example 1:

// Input: "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".
 

// Note:

// S.length <= 10000
// S[i] is "(" or ")"
// S is a valid parentheses string


var removeOuterParentheses = function(S) {
  let bal = 0;
  let ind = 0;
  let result = "";
  for (let i = 0; i < S.length ; i++) {
      S[i] === '(' ? bal += 1 : bal -= 1;
      if (bal === 0) {
          result += S.slice(ind + 1, i);
          ind = i + 1;
      }
  }
  return result;
};

// var removeOuterParentheses = function(S) {
//   if (S === "") return S;
//   let start = 0;
//   let end = 0;
//   let ind = 0;
//   let result = "";
//   for (let i = 0; i < S.length ; i++) {
//       S[i] === '(' ? start += 1 : end += 1;
//       if (start === end) {
//           result += S.slice(ind + 1, i);
//           ind = i + 1;
//           start = 0;
//           end = 0;
//       }
//   }
//   return result;
// };


console.log(removeOuterParentheses('(()())(())(()(()))')) // => '()()()()(())'
console.log(removeOuterParentheses('')) // => ''
console.log(removeOuterParentheses('()()()')) // => ''
console.log(removeOuterParentheses('(())()((()))')) // => '()(())'


 

