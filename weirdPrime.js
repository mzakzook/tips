// Consider the sequence a(1) = 7, a(n) = a(n-1) + gcd(n, a(n-1)) for n >= 2:

// 7, 8, 9, 10, 15, 18, 19, 20, 21, 22, 33, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 69, 72, 73....

// Let us take the differences between successive elements of the sequence and get a second sequence g: 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1....

// For the sake of uniformity of the lengths of sequences we add a 1 at the head of g:

// g: 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1...

// Removing the 1s gives a third sequence: p: 5, 3, 11, 3, 23, 3... where you can see prime numbers.

// #Task: Write functions:

// 1: an(n) with parameter n: returns the first n terms of the series a(n) (not tested)

// 2: gn(n) with parameter n: returns the first n terms of the series g(n) (not tested)

// 3: countOnes(n) with parameter n: returns the number of 1 in g(n) 
//     (don't forget to add a `1` at the head) # (tested)

// 4: p(n) with parameter n: returns an array of n unique prime numbers (not tested)

// 5: maxp(n) with parameter n: returns the biggest prime number of the sequence pn(n) # (tested)

// 6: anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting result)

// 7: anOverAverage(n) with parameter n: returns as an *integer* the average of anOver(n)  (tested)
// #Note: You can write directly functions 3:, 5: and 7:. There is no need to write functions 1:, 2:, 4: 6: except out of pure curiosity.




function an(n) {
  let result = [7]
  for (let i = 2; i <= n ; i++) {
    result.push(result.slice(-1)[0] + gcd(i, result.slice(-1)[0]))
  }
  return result
}

function gcd(x, y) {
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function g(n) {
  let result = [1]
  let arr = an(n)
  for (let i = 1; i < arr.length ; i++) {
    result.push(arr[i] - arr[i - 1])
  }
  return result
}

function countOnes(n) {
  let arr = g(n)
  let count = 0
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] === 1) count += 1
  }
  return count
}

function p(n) {
  let result = []
  let arr = [7]
  let arrTwo = [1]
  for (let i = 2; result.length < n ; i++) {
    arr.push(arr.slice(-1)[0] + gcd(i, arr.slice(-1)[0]))
    arrTwo.push(arr[i - 1] - arr[i - 2])
    if (arrTwo.slice(-1)[0] !== 1 && !result.includes(arrTwo.slice(-1)[0])) result.push(arrTwo.slice(-1)[0])
  }
  return result
}

function maxp(n) {
  let arr = p(n)
  return arr.sort((a, b) => a - b).slice(-1)[0]
}
  

function anOver(n) {
  let result = []
  let arr = [7]
  for (let i = 2; result.length < n ; i++) {
    arr.push(arr.slice(-1)[0] + gcd(i, arr.slice(-1)[0]))
    if (g(i).slice(-1)[0] === 1) continue
    result.push(arr.slice(-1)[0] / i)
  }
  return result
}
  



function anOverAverage(n) {
  let arr = anOver(n)
  return parseInt(arr.reduce((a, b) => a + b, 0) / arr.length)
}
  
 

console.log(an(4))
console.log(g(6))
console.log(countOnes(10))
console.log(p(10))
console.log(maxp(8))
console.log(anOver(15))
console.log(anOverAverage(15))