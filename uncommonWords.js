// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

 

// Example 1:

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: A = "apple apple", B = "banana"
// Output: ["banana"]
 

// Note:

// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A and B both contain only spaces and lowercase letters.


var uncommonFromSentences = function(A, B) {
  let result = [];
  let aArr = A.split(' ');
  let bArr = B.split(' ');
  let words = {};
  let bad = [];
  for (let i = 0; i < aArr.length; i++) {
      if (!bArr.includes(aArr[i])) {
          if (bad.includes(aArr[i])) continue;
          if (words[aArr[i]]) {
              words[aArr[i]] += 1;
          } else {
              words[aArr[i]] = 1;
          }
      } else {
          bad.push(aArr[i]);
          while(bArr.includes(aArr[i])) {
              bArr.splice(bArr.indexOf(aArr[i]), 1);
          }
      }
  }
  for (let i = 0; i < bArr.length; i++) {
      if (words[bArr[i]]) {
          words[bArr[i]] += 1;
      } else {
          words[bArr[i]] = 1;
      }
  }
  for (let key in words) {
      if (words[key] === 1) result.push(key);
  }
  return result;
};



console.log(uncommonFromSentences("this apple is sweet","this apple is sour")); // => ["sweet","sour"]
console.log(uncommonFromSentences("apple apple","banana")); // => ["banana"]