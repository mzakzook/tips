// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
// Example 2:

// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
// Example 3:

// Input: nums = [3,7]
// Output: 12
 

// Constraints:

// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10^3




// var maxProduct = function(nums) {
//     nums = nums.map(x => x - 1);
//     let result = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < nums.length ; i++) {
//         let others = JSON.parse(JSON.stringify(nums));
//         others.splice(i, 1);
//         for (let y = 0; y < others.length ; y++) {
//             if (nums[i] * others[y] > result) result = nums[i] * others[y];
//         }
//     }
//     return result;
// };



function maxProduct(nums) {
  let result;
  let newNums = nums.map(x => x - 1);
  let firLar = Math.max(...newNums);
  let ind = newNums.indexOf(firLar);
  let comArr = newNums.slice(0, ind).concat(newNums.slice(ind + 1));
  let secLar = Math.max(...comArr);
  let posRes = firLar * secLar;
  let firSma = Math.min(...newNums);
  ind = newNums.indexOf(firSma);
  comArr = newNums.slice(0, ind).concat(newNums.slice(ind + 1));
  let secSma = Math.min(...comArr);
  let negRes = firSma * secSma;
  negRes > posRes ? result = negRes : result = posRes;
  return result;
}


console.log(maxProduct([-1, -5, 252])) // => 12;
console.log(maxProduct([3,4,5,2])) // => 12;
console.log(maxProduct([1,5,4,5])) // => 16;
console.log(maxProduct([3, 7])) // => 12;
