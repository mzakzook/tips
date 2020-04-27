function buddy(start,limit) {
  for (let i = start ; i <= limit ; i++) {
    let y = sum(i) - 1
    if (y > i) {
      if (sum(y) === i + 1) return [i, y]
    }
  }
  return "Nothing";
}

function sum(n) {
  if (n < 2) return 0
  let result = 1
  for (let i = 2; i <= Math.floor(Math.sqrt(n)) ; i++) {
    if (n % i === 0) {
      n !== i * i ? result += i + (n / i) : result += i 
    }
  }
  return result
}


console.log(buddy(23, 4669)) // [48, 75]
console.log(buddy(4952, 6539)) // [5775, 6128] 
console.log(buddy(381, 4318)) // [1050, 1925] 
console.log(buddy(2382, 3679)) // "Nothing" 

