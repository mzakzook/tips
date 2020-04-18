// Hey You !
// Sort these integers for me ...

// By name ...

// Do it now !

// Input
// Range is 0-999

// There may be duplicates

// The array may be empty

// Example
// Input: 1, 2, 3, 4
// Equivalent names: "one", "two", "three", "four"
// Sorted by name: "four", "one", "three", "two"
// Output: 4, 1, 3, 2
// Notes
// Don't fret about formatting rules. If rules are consistently applied it has no effect anyway:
// e.g. one hundred one, one hundred two is same order as one hundred and one, one hundred and two
// e.g. ninety eight, ninety nine is same order as ninety-eight, ninety-nine


function sortByName(ary) {
  let s = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let t = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let resObj = {}
  let wordArr = []

  ary.forEach(num => {
    let resStr = ''
    let numStr = num.toString()
    if (numStr.length === 1) {
      resStr = s[num] 
    }
    if (numStr.length === 2) {
      if (numStr[0] === "1") {
        resStr = s[num]
      } else {
        resStr += t[numStr[0] - 2]
        if (numStr[1] > 0) resStr += s[numStr[1]]
      }
    }
    if (numStr.length === 3) {
      resStr += s[numStr[0]] + ' hundred'
      if (numStr[1] === '1') {
        resStr += ' ' + s[numStr.slice(1)]
      } else if (numStr[1] === '0' && numStr[2] !== '0') {
        resStr += ' ' + s[numStr[2]]
      } else if (numStr[1] !== '0') {
        resStr += ' ' + t[numStr[1] - 2]
        if (numStr[2] !== '0') {
          resStr += ' ' + s[numStr[2]]
        }
      }
    }
    if (!resObj[resStr]) resObj[resStr] = num
    wordArr.push(resStr)
  }) 
  return wordArr.sort().map(num => resObj[num])
}


console.log(sortByName([0, 100, 108, 4, 118, 999]))


console.log([3, 1, 57, 16, 14, 63, 2].sort((a, b) => a - b))