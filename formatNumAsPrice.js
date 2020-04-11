// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number




var numberToPrice = function(number) {
  let numStr = number.toString()
  let numArr = numStr.split('.')
  if (numArr.length === 1) {
    numArr.push('00')
  }
  if (numArr.length > 2 || (!(numArr[0] == parseInt(numArr[0])) || !(numArr[1] == parseInt(numArr[1])))) {
    return 'NaN'
  }
  if (numArr[1].length === 1) {
    numArr[1] += '0'
  } else if (numArr[1].length > 2) {
    numArr[1] = numArr[1].slice(0,2)
  }
  let dollars = numArr[0]
  let cents = numArr[1]
  let modDol = ''
  if (dollars.length <= 3) return dollars + '.' + cents
  if (dollars[0] !== '-') {
    while (dollars.length > 3) {
      modDol = ',' + dollars.slice(-3) + modDol
      dollars = dollars.slice(0, -3)
    }
  } else {
    while (dollars.length > 4) {
      modDol = ',' + dollars.slice(-3) + modDol
      dollars = dollars.slice(0, -3)
    }
  }
  modDol = dollars + modDol
  return modDol + '.' + cents
}

console.log(numberToPrice(-5))
console.log(numberToPrice(1500.129))
console.log(numberToPrice(-300.1))

