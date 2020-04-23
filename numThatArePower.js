function powerSumDigTerm(n) {
  let results = []
  let i = 81
  do {
    let numEval = eval(i.toString().split('').join('+'))
    let powers = numEval
    if (numEval !== i && numEval !== 1) {
      while (powers < i) {
        powers *= numEval
      }
      if (powers === i) results.push(powers)
    }
    i++
  } while (results.length < n)
  return results.slice(-1)[0]
}



console.log(powerSumDigTerm(2))