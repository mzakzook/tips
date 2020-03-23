// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?


var missingNumber = function(nums) {
    nums.sort((a, b) => a - b); // O(n)

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] !== nums[i] + 1 ) {
        return nums[i] + 1
      }
    } // O(n)

    //2n
};


// var missingNumber = function(nums) {
//   if (nums.length === 1 && nums[0] === 0) {
//       return nums[0] + 1
//   }
//   if (nums.length === 1) {
//       return nums[0] - 1
//   }
//   nums.sort((a, b) => a - b); // O(n)
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i + 1] !== nums[i] + 1 ) {
//       return nums[i] + 1
//     }
//   } // O(n)
//   if (nums[0] === 0) {
//       return nums[nums.length - 1] + 1
//   } else {
//       return nums[0] - 1
//   }
// };