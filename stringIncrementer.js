function incrementString (string) {
  // return incrementedString
  
  if (parseInt(string[string.length - 1]) == string[string.length - 1]) {
    let tracker
    for (let i = 0; i < string.length; i++) {
      if (parseInt(string[i]) == string[i]) {
        tracker = i
        break
      }
    }
    return string.slice(0, tracker) + (parseInt(string.slice(tracker)) + 1).toString()
  } else {
    return string + "1"
  }
}

console.log(incrementString('foobar000'))
console.log(incrementString('foo'))
console.log(incrementString('foobar001'))
console.log(incrementString('foobar99'))
console.log(incrementString('foobar099'))
console.log(incrementString(''))

