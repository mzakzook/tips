function queueTime(customers, n) {
  let tills = []
  if (customers.length >= n) {
    for (let i = 0; i < n; i ++) {
      tills[i] = customers[i]
      console.log(tills)
    }
  } else {
    return customers.sort((a, b) => a - b)[customers.length - 1]
  }
  if (customers.length > n) {
    for (let i = 0; i < customers.length - n; i++) {
      console.log((i + n).toString() + ". -> " + customers[n + i].toString())
      console.log(tills.sort((a, b) => a - b)[0])
      tills.sort((a, b) => a - b)[0] += customers[n + i]
      console.log(tills)
    }
  }
  return tills.sort((a, b) => a - b)[tills.length - 1]
}

// console.log(queueTime([1,2,3,4,5], 100))
// console.log(queueTime([1,2,3,4,5], 3))
// console.log(queueTime([2,2,3,3,4,4], 2))
console.log(queueTime([17,26,29,24,37,41,41,15,50,31,49,8,48,42,12,36,44,19,48,6,20,20], 4))

// console.log(new Array(5).fill(0))

// console.log([2, 2, 1, -4].indexOf(Math.min.apply(Math, [2, 2, 1, -4])))


// function queueTime(customers, n) {
//   let tills = new Array(n).fill(0)
//   for (let i = 0; i < customers.length; i++) {
//     let readyTill = tills.indexOf(Math.min.apply(Math, tills))
//     tills[readyTill] += customers[i]
//   }
//   return Math.max.apply(Math, tills)
// }


// console.log([17,26,29,24,37,41,41,15,50,31,49,8,48,42,12,36,44,19,48,6,20,20].sort((a, b) => a - b))