function narcissistic(value) {
  let sum = 0
  let valueArr = value.toString().split('').map(x => parseInt(x))
  for (let i = 0; i < valueArr.length; i++) {
    sum += valueArr[i] ** valueArr.length
  }
  return sum === value ? true : false
}