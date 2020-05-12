// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

 

// Example 1:

// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:

// Input: nums = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one element.
 

// Constraints:

// 1 <= n <= 10 ^ 4
// - 10 ^ 5 <= nums[i] <= 10 ^ 5


function checkPossibility(nums) {
  let numsCopy = JSON.parse(JSON.stringify(nums))
  if (JSON.stringify(numsCopy.sort((a, b) => a - b)) === JSON.stringify(nums)) return true
  for (let i = 0; i < nums.length - 1 ; i++) {
    let newArr = nums.slice(0, i).concat(nums[i + 1]).concat(nums.slice(i + 1))
    let newArrCop = JSON.parse(JSON.stringify(newArr))
    if (JSON.stringify(newArrCop.sort((a, b) => a - b)) === JSON.stringify(newArr)) return true      
  }
  let lastArr = nums.slice(0, -1).concat(Number.MAX_SAFE_INTEGER)
  let lastArrCop = JSON.parse(JSON.stringify(lastArr))
  if (JSON.stringify(lastArrCop.sort((a, b) => a - b)) === JSON.stringify(lastArr)) return true
  return false
}



console.log(checkPossibility([4, 2, 3]))



