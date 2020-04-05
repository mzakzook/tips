var romanToInt = function(s) {
  let translateNum = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
  let numArr = s.split('').map(letter => translateNum[letter])
  let result = 0
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < numArr[i + 1]) {
      result += numArr[i + 1] - numArr[i]
      i++
    } else {
      result += numArr[i]
    }
  }
  return result
};

console.log(romanToInt("LVIII"))

console.log(romanToInt("IX"))

console.log(romanToInt("MCMXCIV"))
