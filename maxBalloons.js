// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 10^4
// text consists of lower case English letters only.


var maxNumberOfBalloons = function(text) {
  let balloon = [0, 0, 0, 0, 0];
  for (let i = 0; i < text.length; i++) {
      if (text[i] === 'b') balloon[0] += 1;
      if (text[i] === 'a') balloon[1] += 1;
      if (text[i] === 'l') balloon[2] += 1;
      if (text[i] === 'o') balloon[3] += 1;
      if (text[i] === 'n') balloon[4] += 1;
  }
  let count = 0;
  while (!balloon.includes(0)) {
      if (balloon[0] > 0) {
          balloon[0] -= 1;
      } else {
          return count;
      }
      if (balloon[1] > 0) {
          balloon[1] -= 1;
      } else {
          return count;
      }
      if (balloon[2] > 1) {
          balloon[2] -= 2;
      } else {
          return count;
      } 
      if (balloon[3] > 1) {
          balloon[3] -= 2;
      } else {
          return count;
      }
      if (balloon[4] > 0) {
          balloon[4] -= 1;
      } else {
          return count;
      }
      count += 1;
  }
  return count;
}


console.log(maxNumberOfBalloons("nlaebolko")); // => 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // => 2
console.log(maxNumberOfBalloons("leetcode")); // => 0