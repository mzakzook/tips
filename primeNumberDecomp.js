function getAllPrimeFactors(n) { 
  let results = []
  let i = 2
  while (n > 1) {
    if (n % i === 0) {
      results.push(i)
      n /= i
    } else {
      i++
    }
  }
  return results
}


function getUniquePrimeFactorsWithCount(n) { 
  let preResults = getAllPrimeFactors(n)
  let results = [[],[]]
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
  for (let i = 0; i < preResults[0].length ; i++) {
    results.push(preResults[0][i] ** preResults[1][i])
  }
  return results
}