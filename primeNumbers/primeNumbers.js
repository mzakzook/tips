nthPrimeNumber = (element) => {
  if (element === 1) {
    return 2
  } else if (element <= 0) {
    return null
  }
  let arr = [2]
  for (let i = 3; arr.length < element ; i++ ) {
    let isPrime = true
    for (let y = 0; arr[y] <= Math.sqrt(i) && isPrime ; y++) {
      if (i % arr[y] === 0) {
        isPrime = false
      }
    }
    if (isPrime === true) {
      arr.push(i)
    }
  }
  return arr[arr.length - 1]
}


console.log(nthPrimeNumber(10001))

console.log(nthPrimeNumber(1000001))

