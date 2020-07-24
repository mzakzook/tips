// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] !== nums[1]) return nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i];
  }
  return nums.slice(-1)[0];
};


console.log(singleNumber([2,2,1])); // => 1
console.log(singleNumber([4,1,2,1,2])); // => 4
console.log(singleNumber([2, 5, 98, 97, 97, 64, 63, 63, 5, 2, 64])) // => 98
