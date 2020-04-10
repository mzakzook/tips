var longestCommonPrefix = function(strs) {
  let common = ""
  if (strs.length === 0) return ""
  for (let y = 0; y < strs[0].length ; y++) {
      for (let i = 1; i < strs.length; i++) {
          if (strs[i][y] !== strs[0][y]) {
              return common
          }
      }
      common += strs[0][y]
  }
  return common
};


console.log(longestCommonPrefix(["aca","cba"]))