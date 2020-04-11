function primeFactors(n) {
  let resultObj = {}  
  let result = ""
  while (n !== 1) {
    let small = smallestPrime(n)
    if (resultObj[small.toString()]) {
      resultObj[small.toString()] += 1
    } else {
      resultObj[small.toString()] = 1
    }
    n = n / small
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
  return n
}

// function primeFactors(n){
//   for (var i=2, res="", f; i <= n; i++) {
//     f=0;
//     while (n%i == 0) { f++; n/=i }
//     res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
//   }
//   return res 
// }





console.log(primeFactors(86240))

