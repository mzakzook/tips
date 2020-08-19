// Given an array of integers (a) return the number of pairs (a[i] & a[y]) whose sum is equivalent to a power of 2. 
// 1 is considered a power of 2 and y must be greater than or equal to i.

function pairSummingToPowerOfTwo(a) {
  let count = 0;
  let powers = [1,2];
  for (let i = 0; i < a.length; i++) {
      for (let y = i; y < a.length; y++) {
          if (powers.includes(a[i] + a[y])) {
              count += 1;
              continue;
          } else if ((a[i] + a[y]) % 2 !== 0) {
              continue;
          }
          let num = powers.slice(-1)[0] * 2;
          while (a[i] + a[y] >= num) {
              if (a[i] + a[y] === num) {
                  count += 1;
              }
              powers.push(num);
              num *= 2;
          }
      }
  }
  return count;
}


console.log(pairSummingToPowerOfTwo([-48, 19, -9, 16, 31, 39, 3, -10, 12, -31, 33, -12, -8, 15, 28, 7, -17, -18, 13, -6, 2, 22, -5, 5, 4, 18, 11, 14, -39, 46, -46, 38, 42, -41, -16, -35, -20, 48, 30, -27, 35, 34, 32, -47, -11, -37, -26, -29, -22, -32, 26, 8, -36, -30, -19]))
// returns 90
