function getAllPrimeFactors(n) { 
  let results = []
  if (n === 1) return [1]
  let i = 2
  let sqrt = Math.floor(Math.sqrt(n))
  while (n > 1 && i <= sqrt) {
    if (n % i === 0) {
      results.push(i)
      n /= i
    } else {
      i++
    }
  }
  if (n > 1 && Math.floor(n) === n) results.push(n)
  return results
}


function getUniquePrimeFactorsWithCount(n) { 
  let preResults = getAllPrimeFactors(n)
  let results = [[],[]]
  if (preResults.length === 0) return results
  let count = 1
  for (let i = 0; i < preResults.length - 1; i++) {
    if (preResults[i] === preResults[i + 1]) {
      count++
    } else {
      results[0].push(preResults[i])
      results[1].push(count)
      count = 1
    }
  }
  if (preResults.slice(-1)[0] === preResults.slice(-2)[0]) {
    results[0].push(preResults.slice(-1)[0])
    results[1].push(count)
  } else {
    results[0].push(preResults.slice(-1)[0])
    results[1].push(count)
  }
  return results
}

function getUniquePrimeFactorsWithProducts(n) { 
  let preResults = getUniquePrimeFactorsWithCount(n)
  let results = []
  if (preResults[0].length === 0) return results
  for (let i = 0; i < preResults[0].length ; i++) {
    results.push(preResults[0][i] ** preResults[1][i])
  }
  return results
}



console.log(getAllPrimeFactors(100)) //[2,2,5,5]

console.log(getUniquePrimeFactorsWithCount(100)) //[[2,5],[2,2]]

console.log(getUniquePrimeFactorsWithProducts(100)) //[4,25]



console.log(getAllPrimeFactors(2)) 

console.log(getUniquePrimeFactorsWithCount(2))

console.log(getUniquePrimeFactorsWithProducts(2)) 



console.log(getAllPrimeFactors(1)) 

console.log(getUniquePrimeFactorsWithCount(1))

console.log(getUniquePrimeFactorsWithProducts(1)) 




console.log(getUniquePrimeFactorsWithCount(113))


console.log(getUniquePrimeFactorsWithCount(114))


console.log(getUniquePrimeFactorsWithCount(115))
