// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.


var wordPattern = function(pattern, str) {
  let words = {};
  let uniqWords = [];
  let strArr = str.split(' ');
  if (strArr.length !== pattern.length) return false;
  for (let i = 0; i < strArr.length; i++) {
      if (words[pattern[i]]) {
          if (words[pattern[i]] !== strArr[i]) return false;
      } else {
          if (uniqWords.includes(strArr[i])) return false;
          uniqWords.push(strArr[i]);
          words[pattern[i]] = strArr[i];
      }
  }
  return true;
};


console.log(wordPattern("abba","dog cat cat dog")); // => true
console.log(wordPattern("abba","dog cat cat fish")); // => false
console.log(wordPattern("aaaa","dog cat cat dog")); // => false
console.log(wordPattern("abba","dog dog dog dog")); // => false