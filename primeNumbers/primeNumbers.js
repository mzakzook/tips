primeNumbers = (element) => {
  if (element === 1) {
    return 2
  } else if (element <= 0) {
    return null
  }
  let arr = [2]
  for (let i = 3; arr.length < element ; i++ ) {
    let isPrime = true
    for (let y = 0; y < arr.length && isPrime ; y++) {
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


console.log(primeNumbers(10001))

