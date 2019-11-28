// Aliquot Sequence 
 
// A number's aliquot sum is the sum of all of its factors excluding itself.
// For example, the aliquot sum of 10 is: 1 + 2 + 5 = 8
// We can use the aliquot sum to define a special sequence, called the aliquot sequence. The aliquot sequence of a number begins with the number itself. 
// The second number in the sequence is the first number's aliquot sum, the third number is the second number's aliquot sum, and so on.
// For example, the first 4 numbers in the aliquot sequence of 10 are: 10, 8, 7, 1
//  Write a function that takes in two numbers, base and n, and returns the aliquot sequence of length n starting with base.
//  Examples:
//  generateAliquotSequence(10, 4)  => [10, 8, 7, 1]
//  generateAliquotSequence(7, 4)  => [7, 1, 0, 0]
//  generateAliquotSequence(20) => [20]
 
//  (Helpful tip: make sure you understand the prompt and break down the problem into smaller problems to solve!)


generateAliquotSequence = (base, n) => {
  let counter = base
  let arr = [base]
  for (let y = 1; y < n ; y++) {
    let sum = 0
    let i = Math.floor(Math.sqrt(counter))
    while (i > 0 && counter !== 1) {
      if (counter % i === 0) {
        sum += i
        if (i * i !== counter && counter / i !== counter) {
          sum += counter / i
        }
      }
      i--
    }
    arr.push(sum)
    counter = sum
  }
  return arr
} 




console.log(generateAliquotSequence(10, 4))
console.log(generateAliquotSequence(7, 4))
console.log(generateAliquotSequence(20))
