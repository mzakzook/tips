var romanToInt = function(s) {
  let translateNum = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
  let numArr = s.split('').map(letter => translateNum[letter])
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < numArr[i + 1]) {
      numArr = numArr.slice()
    }
  }
};

