console.time('fibIter')

function fibIter(n) {
  let arr = new Array(n + 1)
  if (n === 1 || n === 2) return 1;
  arr[1] = 1;
  arr[2] = 1;
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

console.log(fibIter(50))
console.timeEnd('fibIter')


console.time('fibRec')

function fibRec(n) {
  let result
  if (n === 1 || n === 2) {
    result = 1
  } else {
    result = fibRec(n - 1) + fibRec(n - 2)
  }
  return result
}

console.log(fibRec(50))
console.timeEnd('fibRec')


// // http://www.pythontutor.com/javascript.html#code=function%20fib%28n%29%20%7B%0A%20%20let%20result%0A%20%20if%20%28n%20%3D%3D%3D%201%20%7C%7C%20n%20%3D%3D%3D%202%29%20%7B%0A%20%20%20%20result%20%3D%201%0A%20%20%7D%20else%20%7B%0A%20%20%20%20result%20%3D%20fib%28n%20-%201%29%20%2B%20fib%28n%20-%202%29%0A%20%20%7D%0A%20%20return%20result%0A%7D%0A%0Afib%2810%29&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D


console.time('fibMemo')

function fibMemo(n, memo = {}) {
  if (memo[n]) return memo[n]
  let result
  if (n === 1 || n === 2) {
    result = 1
  } else {
    result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
  }
  memo[n] = result
  return result
}

console.log(fibMemo(50))
console.timeEnd('fibMemo')

// // http://www.pythontutor.com/javascript.html#code=function%20fib%28n,%20memo%20%3D%20%7B%7D%29%20%7B%0A%20%20if%20%28memo%5Bn%5D%29%20return%20memo%5Bn%5D%0A%20%20let%20result%0A%20%20if%20%28n%20%3D%3D%3D%201%20%7C%7C%20n%20%3D%3D%3D%202%29%20%7B%0A%20%20%20%20result%20%3D%201%0A%20%20%7D%20else%20%7B%0A%20%20%20%20result%20%3D%20fib%28n%20-%201,%20memo%29%20%2B%20fib%28n%20-%202,%20memo%29%0A%20%20%7D%0A%20%20memo%5Bn%5D%20%3D%20result%0A%20%20return%20result%0A%7D%0A%0Afib%2810%29&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D


