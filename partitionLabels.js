// A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

 

// Example 1:

// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 

// Note:

// S will have length in range [1, 500].
// S will consist of lowercase English letters ('a' to 'z') only.

var partitionLabels = function(S) {
  let result = [];
  let ind = 0;
  for (let i = 1; i < S.length; i++) {
      if (S.slice(ind, i).includes(S[i])) {
          continue;
      } else {
          let good = true;
          for (let y = 0; y < result.length; y++) {
              if (result[y].includes(S[i])) {
                  result.splice(y);
                  ind = result.join('').length;
                  good = false;
              }
          }
          if (good) {
              result.push(S.slice(ind, i));
              ind = i;
          }
      }
  }
  result.push(S.slice(ind));
  return result.map(x => x.length);
};


console.log(partitionLabels("ababcbacadefegdehijhklij")); // => [9,7,8]