var largeGroupPositions = function(S) {
  let result = []
  let start = 0
  for (let i = 0; i < S.length; i++) {
      if (S[i] === S[start]) {
          if (i === S.length - 1) {
              if (i - start >= 2) {
                  result.push([start, i])
              }
          }
      } else {
          if (i - 1 - start >= 2) {
              result.push([start, i-1])
          }
          start = i
      }
  }
  return result
};


console.log(largeGroupPositions("aaa"))