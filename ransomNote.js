var canConstruct = function(ransomNote, magazine) {
  let magCopy = magazine
  for (let i = 0; i < ransomNote.length; i++) {
      if (magCopy.includes(ransomNote[i])) {
          magCopy = magCopy.replace(ransomNote[i], '')
      } else {
          return false
      }
  }
  return true
};


console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
console.log(canConstruct('ab', 'ab'))


