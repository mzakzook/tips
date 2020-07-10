// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.


var reverseWords = function(s) {
  let wordArr = s.split(' ');
  let result = [];
  for (let i = 0; i < wordArr.length; i++) {
      result.push(wordArr[i].split('').reverse().join(''))
  }
  return result.join(' ')
};


console.log(reverseWords("Let's take LeetCode contest")); // => "s'teL ekat edoCteeL tsetnoc"