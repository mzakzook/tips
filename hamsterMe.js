// Introduction
// Hamsters are rodents belonging to the subfamily Cricetinae. The subfamily contains about 25 species, classified in six or seven genera. They have become established as popular small house pets, and, partly because they are easy to breed in captivity, hamsters are often used as laboratory animals. Wikipedia Link

// hamster

// And you could have skipped the introduction as it is entirely unrelated to your task. xD

// Task
// Write a function that accepts two inputs: code and message and returns an encrypted string from message using the code. The code is a string that generates the key in the way shown below:

//  1  | h a m s t e r
//  2  | i b n   u f
//  3  | j c o   v g
//  4  | k d p   w
//  5  | l   q   x
//  6  |         y
//  7  |         z
// All letters from code get number 1. All letters which directly follow letters from code get number 2 (unless they already have a smaller number assigned), etc. It's difficult to describe but it should be easy to understand from the example below:

//  1  | a e h m r s t
//  2  | b f i n     u
//  3  | c g j o     v
//  4  | d   k p     w
//  5  |     l q     x
//  6  |             y
//  7  |             z
// How does the encoding work using the hamster code?

// a => a1
// b => a2
// c => a3
// d => a4
// e => e1
// f => e2
// ...
// And applying it to strings :

// hamsterMe('hamster', 'hamster')   => h1a1m1s1t1e1r1
// hamsterMe('hamster', 'helpme')    => h1e1h5m4m1e1
// And you probably started wondering what will happen if there is no a in the code. Just add these letters after the last available letter (in alphabetic order) in the code.

// The key for code hmster is:

//  1  | e h m r s t
//  2  | f i n     u
//  3  | g j o     v
//  4  |   k p     w
//  5  |   l q     x
//  6  |           y
//  7  |           z
//  8  |           a
//  9  |           b
// 10  |           c
// 11  |           d
// Additional notes
// The code will have at least 1 letter.
// Duplication of letters in code is possible and should be handled.
// The code and message consist of only lowercase letters.


function hamsterMe(code, message) {
  let sorted = code.split('').sort()
  let alphaLookup = {}
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < sorted.length; i++) {
    if (!alphaLookup[sorted[i]]) alphaLookup[sorted[i]] = []
  }
  let i = 0
  while (alpha.length > 0) {
    let found = false
    if (sorted.includes(alpha[i])) {
      alpha = alpha.replace(alpha[i], '')
      found = true
      continue
    }
    for (let y = 0; y < sorted.length ; y++) {

      if (sorted[y] > alpha[i] && alpha[i] > sorted[0]) {
        alphaLookup[sorted[y - 1]].push(alpha[i])
        alpha = alpha.replace(alpha[i], '')
        found = true
        break
      }
      
    }
    if (alpha[i] > sorted.slice(-1)[0]) {
      alphaLookup[sorted.slice(-1)[0]].push(alpha[i])
      alpha = alpha.replace(alpha[i], '')
      found = true
    }

    if (alpha[i] < sorted[0] && (alphaLookup[sorted.slice(-1)[0]].includes('z') || sorted.includes('z'))) {
      alphaLookup[sorted.slice(-1)[0]].push(alpha[i])
      alpha = alpha.replace(alpha[i], '')
      found = true
    }
    if (!found) {
      alpha += alpha[i]
      alpha = alpha.replace(alpha[i], '')
      
    }
  }
  let result = ''
  for (let z = 0; z < message.length ; z++) {
    let char = message[z]
    if (char === ' ') {
      result += ' '
      continue
    }
    if (sorted.includes(char)) {
      result += char + '1'
      continue
    }
    for (let key in alphaLookup) {
      for (let p = 0; p < alphaLookup[key].length ; p++) {
        let codeChar = alphaLookup[key][p]
        if (codeChar === char) {
          result += key + (p + 2).toString()
          break
        }
      }
    }
  }
  return result
  
}




console.log(hamsterMe('hmster', 'hamster'))
console.log(hamsterMe("hamster", "helpme"))



