function productFib(prod){
  let fibArr = [0, 1]
  for (let i = 0; i < fibArr.length; i++) {
    if (fibArr[i] * fibArr[i + 1] === prod) {
      return [fibArr[i], fibArr[i +1], true]
    } else if (fibArr[i] * fibArr[i + 1] < prod) {
      fibArr.push(fibArr[i] + fibArr[i + 1])
    } else {
      return [fibArr[i], fibArr[i + 1], false]
    }
  }
}

console.log(productFib(714))
console.log(productFib(800))