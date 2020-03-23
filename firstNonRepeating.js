function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.toLowerCase().split('').filter(x => x === s[i].toLowerCase()).length === 1) {
      return s[i]
    }
  }
  return ''
}


console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('sTress'))
console.log(firstNonRepeatingLetter('moonmen'))
console.log(firstNonRepeatingLetter(''))
console.log(firstNonRepeatingLetter('mmnnooppqq'))