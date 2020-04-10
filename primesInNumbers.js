function primeFactors(n) {
  let resultObj = {}  
  let result = ""
  if (!smallestPrime(n)) return `(${n})`
  while (smallestPrime(n)) {
    let small = smallestPrime(n)
    if (resultObj[small.toString()]) {
      resultObj[small.toString()] += 1
    } else {
      resultObj[small.toString()] = 1
    }
    n = n / small
  }
  if (!smallestPrime(n) && n !== 1) {
    if (resultObj[n.toString()]) {
      resultObj[n.toString()] += 1
    } else {
      resultObj[n.toString()] = 1
    }
  }
  for (let key in resultObj) {
    if (resultObj[key] === 1) {
      result += "(" + key + ")"
    } else {
      result += `(${key}**${resultObj[key]})`
    }
  }
  return result
}





function smallestPrime(n) {
  let primes = [2]
  if (n % 2 === 0) return 2
  for (let i = 3 ; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    let isPrime = true
    for (let y = 0 ; y < primes.length ; y++) {
      if (i % primes[y] === 0) {
        isPrime = false
      }
    }
    if (isPrime) {
      primes.push(i)
      if (n % i === 0) {
        return i
      }
    }
  }
  return false
}


console.log(primeFactors(3362))

