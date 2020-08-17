// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

 



 
// Example:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
 

// Note:

// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.


var findWords = function(words) {
  let result = [];
  let first = 'qwertyuiop';
  let second = 'asdfghjkl';
  let third = 'zxcvbnm';
  for (let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();
      let track;
      if (first.includes(word[0])) {
          track = first;
      } else if (second.includes(word[0])) {
          track = second;
      } else {
          track = third;
      }
      let isGood = true;
      for (let y = 1; y < word.length; y++) {
          if (track.includes(word[y])) {
              continue;
          } else {
              isGood = false;
              break;
          }
      }
      if (isGood) result.push(words[i])
  }
  return result;
};


console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // => ["Alaska", "Dad"]