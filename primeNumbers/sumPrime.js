sumPrimeNumbers = (maxValue) => {
  if (maxValue <= 2) {
    return 0
  }
  let sum = 2
  let arr = [2]
  for (let i = 3; i < maxValue ; i++ ) {
    let isPrime = true
    for (let y = 0; arr[y] <= Math.sqrt(i) && isPrime ; y++) {
      if (i % arr[y] === 0) {
        isPrime = false
      }
    }
    if (isPrime === true) {
      arr.push(i)
      sum += i
    }
  }
  return sum
}


console.log(sumPrimeNumbers(2000000))

