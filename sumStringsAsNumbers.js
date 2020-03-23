// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


// function sumStrings(a,b) {
//   if (a.length === 0) {
//     a = '0'
//   } else if (b.length === 0) {
//     b = '0'
//   }  
//   let result = ''
//   let carry = 0
//   if (a.length < b.length) {
//     for (let i = 0; i < a.length; i++) {
//       let x = parseInt(a[a.length - (1 + i)]) + parseInt(b[b.length - (1 + i)])
//       let y = x + carry
//       if (x > 9) {
//         carry = 1
//       } else {
//         carry = 0
//       }
//       result = y.toString()[y.toString().length - 1] + result
//     }
//     if (carry === 1) {
//       result = (parseInt(b[b.length - a.length - 1]) + 1).toString() + result
//     } else {
//       result = b[b.length - a.length - 1] + result
//     }
//     for (let z = 0; z < b.length - a.length - 1; z++) {
//       result = b[b.length - a.length - (1 + z)] + result
//     }
//   } else if (a.length > b.length) {
//     for (let i = 0; i < b.length; i++) {
//       let x = parseInt(a[a.length - (1 + i)]) + parseInt(b[b.length - (1 + i)])
//       let y = x + carry
//       if (x > 9) {
//         carry = 1
//       } else {
//         carry = 0
//       }
//       result = y.toString()[y.toString().length - 1] + result
//     }
//     if (carry === 1) {
//       result = (parseInt(a[a.length - b.length - 1]) + 1).toString() + result
//     } else {
//       result = a[a.length - b.length - 1] + result
//     }
//     for (let z = 0; z < b.length - a.length - 1; z++) {
//       result = a[a.length - b.length - (1 + z)] + result
//     }
//   } else {
//     for (let i = 0; i < b.length; i++) {
//       let x = parseInt(a[a.length - (1 + i)]) + parseInt(b[b.length - (1 + i)])
//       let y = x + carry
//       if (x > 9) {
//         carry = 1
//       } else {
//         carry = 0
//       }
//       result = y.toString()[y.toString().length - 1] + result
//     }
//   }
//   return result
// }


function sumStrings(a, b) {
  let result = ''
  let strings = []
  let carry = 0
  let placeholder = '0'
  if (a.length === 0 && b.length === 0) {
    return '0'
  }
  a.length >= b.length ? strings = [a, b] : strings = [b, a]
  for (let i = 0; i < strings[0].length; i++) {
    if (!strings[1][strings[1].length - i - 1]) {
      placeholder = '0'
    } else {
      placeholder = strings[1][strings[1].length - i - 1]
    }
    let y = (parseInt(strings[0][strings[0].length - i - 1]) + parseInt(placeholder) + carry).toString()
    if (y.length > 1) {
      result = y[1] + result
      carry = 1
    } else {
      carry = 0
      result = y + result
    }
  }
  if (carry === 1) {
    result = carry.toString() + result
  }
  return result.replace(/^0+/, '')
}


console.log(sumStrings('8797', '45')) //- Expected: '8842'
console.log(sumStrings('00103', '08567')) //- Expected: '8670'
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')) //- Expected: '712577413488402631964821329'
console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605')) //- Expected: '131151201344081895336534324866'