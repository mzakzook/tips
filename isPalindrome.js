function isPalindrome(string) {
  let reverse = ""
  for (let i = 0; i < string.length; i++) {
    reverse += string[string.length - (i + 1)]
  }
  if (string === reverse) {
    return true
  } else {
    return false
  }
}