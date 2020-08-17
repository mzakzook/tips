// https://leetcode.com/problems/power-of-two/

var isPowerOfTwo = function(n) {
  let counter = 0
  while ((2 ** counter) <= n) {
      if (n === (2 ** counter)) {
          return true
      } else {
          counter += 1
      }
  }
  return false
};


