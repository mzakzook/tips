// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?


var backspaceCompare = function(S, T) {
  while (S.includes('#')) {
      let ind = S.indexOf('#');
      if (ind === 0) {
        S = S.slice(1);
      } else {
        S = S.slice(0, ind - 1) + S.slice(ind + 1);
      }
  }
  while (T.includes('#')) {
      let ind = T.indexOf('#');
      if (ind === 0) {
        T = T.slice(1);
      } else {
        T = T.slice(0, ind - 1) + T.slice(ind + 1);
      }
  }
  return S === T ? true : false;
};



console.log(backspaceCompare("ab#c","ad#c")); // => true
console.log(backspaceCompare("ab##","c#d#")); // => true
console.log(backspaceCompare("a##c","#a#c")); // => true
console.log(backspaceCompare("a#c","b")); // => false