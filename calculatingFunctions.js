// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


function zero(func = null) { 
  if (func === null) return 0
  return parseInt(eval('0' + func))
}
function one(func = null) { 
  if (func === null) return 1
  return parseInt(eval('1' + func))
}
function two(func = null) {
  if (func === null) return 2
  return parseInt(eval('2' + func))
}
function three(func = null) {
  if (func === null) return 3
  return parseInt(eval('3' + func))
}
function four(func = null) {
  if (func === null) return 4
  return parseInt(eval('4' + func))
}
function five(func = null) {
  if (func === null) return 5
  return parseInt(eval('5' + func))
}
function six(func = null) { 
  if (func === null) return 6
  return parseInt(eval('6' + func))
}
function seven(func = null) {
  if (func === null) return 7
  return parseInt(eval('7' + func))
}
function eight(func = null) { 
  if (func === null) return 8
  return parseInt(eval('8' + func))
}
function nine(func = null) {
  if (func === null) return 9
  return parseInt(eval('9' + func))
}

function plus(num) { return `+ ${num}` }
function minus(num) { return `- ${num}` }
function times(num) { return `* ${num}`}
function dividedBy(num) {return `/ ${num}`}


console.log(zero(plus(nine())))
console.log(eight(minus(three())))
console.log(eight(dividedBy(three())))