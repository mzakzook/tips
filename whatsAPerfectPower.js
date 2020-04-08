var isPP = function(n){
  if (n === 1) return null
  let start = Math.floor(Math.sqrt(n))
  if (start ** 2 === n) return [start, 2]
  for (let y = start; y > 1; y--) {
    for (let i = 3; y ** i <= n; i++) {
      if (y ** i === n) return [y, i]
    }
  }
  return null
}


console.log(isPP(78124)) //null
console.log(isPP(78125)) //[5, 7]
