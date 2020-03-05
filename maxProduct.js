

function maxProduct(nums) {
  let res = -Number.MAX_VALUE;
  let min = 1;
  let max = 1;
  for (let num of nums) {
    [min, max] = [
      Math.min(num, min * num, max * num),
      Math.max(num, min * num, max * num),
    ];
    res = Math.max(res, max);
  }
  return res;
}

console.log(maxProduct([-3, 5, 6, 12, -7, 234, -2, -1, -1, 5]) * 3)