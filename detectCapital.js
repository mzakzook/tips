var detectCapitalUse = function(word) {
  if (word.toUpperCase() === word) return true;
  if (word.toLowerCase() === word) return true;
  if (word[0].toUpperCase() === word[0] && word.slice(1).toLowerCase() === word.slice(1)) return true;
  return false
};


console.log(detectCapitalUse("hELLO"))
console.log(detectCapitalUse("HELLO"))
console.log(detectCapitalUse("hello"))
console.log(detectCapitalUse("Hello"))