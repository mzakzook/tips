// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.


function rob(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  let results = new Array(nums.length)
  results[0] = nums[0]
  results[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < results.length ; i++) {
      results[i] = Math.max(nums[i] + results[i - 2], results[i - 1])
  }
  return results[nums.length - 1]
}

console.log(rob([5, 1, 8, 100, 70, 1, 1, 1]))


function stepper(nums, memo = {}) {
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return true;

    let maxRange = nums[0];
    for (let step = 1; step <= maxRange; step++) {
        if (stepper(nums.slice(step), memo)) {
            memo[nums.length] = true;
            return true;
        }
    }
    memo[nums.length] = false
    return false;
  }


//   You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.

function climbStairs(n) {
  if (n === 1) return 1
  let result = []
  result[1] = 1
  result[2] = 2
  for (let i = 3; i <= n ; i++) {
      result[i] = result[i - 1] + result[i - 2]
  }
  return result[n]
}