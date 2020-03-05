function numChars(c, string) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === c) {
      count += 1
    }
  }
  
  return count
}


numChars("s", "strings")