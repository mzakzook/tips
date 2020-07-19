// 1002. Find Common Characters
// Easy

// 863

// 96

// Add to List

// Share
// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

 

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]
 

// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter


var commonChars = function(A) {
  let first = A[0];
  let result = [];
  for (let i = 0; i < first.length; i++) {
      let good = true;
      for (let y = 1; y < A.length; y++) {
          if (A[y].includes(first[i])) {
              A[y] = A[y].replace(first[i], '');
          } else {
              good = false;
              break;
          }
      }
      if (good) result.push(first[i]);
  }
  return result;
};


console.log(commonChars(["bella","label","roller"])); // => ["e","l","l"]
console.log(commonChars(["cool","lock","cook"])); // => ["c","o"]