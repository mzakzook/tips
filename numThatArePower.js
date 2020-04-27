// The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

// 8 + 1 = 9 and 92 = 81

// 512 = 5 + 1 + 2 = 8 and 83 = 512

// We need to make a function, power_sumDigTerm(), that receives a number n and may output the n-th term of this sequence of numbers. The cases we presented above means that

// power_sumDigTerm(1) == 81

// power_sumDigTerm(2) == 512

// Happy coding!

// function powerSumDigTerm(n) {
//   let results = []
//   let i = 81
//   do {
//     let numEval = eval(i.toString().split('').join('+'))
//     let powers = numEval
//     if (numEval <= Math.sqrt(i) && numEval !== 1) {
//       if ((numEval % 2 === 0 && i % 2 === 0) || (numEval % 2 !== 0 && i % 2 !== 0)) {
//         while (powers < i) {
//           powers *= numEval
//         }
//         if (powers === i) results.push(powers)
//       }
//     }
//     i++
//   } while (results.length < n)
//   return results.slice(-1)[0]
// }


function powerSumDigTerm(n) {
  let results = []
  for (let i = 2; i < 100 ; i++) {
    for (let y = 2; y < 10 ; y++) {
      let pow = i ** y
      if (eval(pow.toString().split('').join('+')) === i) results.push(pow)
    }
  }
  console.log(results)
  return results.sort((a, b) => a - b)[n - 1]
}


console.log(powerSumDigTerm(6))