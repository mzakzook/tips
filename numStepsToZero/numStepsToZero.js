// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/


var numberOfSteps  = function(num) {
  let count = 0
  let newNum = num
  while (newNum > 0) {
      if (newNum % 2 === 0) {
          newNum /= 2
          count += 1
      } else {
          newNum -= 1
          count += 1
      }
  }
  return count
};