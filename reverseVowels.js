// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".


var reverseVowels = function(s) {
  let vowels = "aAeEiIoOuU";
  let word = [];
  let vows = [];
  for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
          vows.unshift(s[i]);
          word.push('vow');
      } else {
          word.push(s[i]);
      }
  }
  for (let i = 0; i < vows.length; i++) {
      let index = word.indexOf('vow');
      word[index] = vows[i];
  }
  return word.join('');
};


console.log(reverseVowels("hello")); // => "holle"
console.log(reverseVowels("leetcode")); // => "leotcede"