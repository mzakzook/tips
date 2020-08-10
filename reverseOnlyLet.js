// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
 

// Note:

// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122 
// S doesn't contain \ or "


var reverseOnlyLetters = function(S) {
  let alpha = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
  let result = '';
  let reverseS = S.split('').filter(x => alpha.includes(x)).reverse();
  for (let i = 0; i < S.length; i++) {
      if (alpha.includes(S[i])) {
          result += reverseS[0];
          reverseS.shift();
      } else {
          result += S[i]
      }
  }
  return result;
};



console.log(reverseOnlyLetters("ab-cd")); // => "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // => "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // => "Qedo1ct-eeLg=ntse-T!"