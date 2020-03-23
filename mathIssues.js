Math.round = function(number) {
  let result
  let numArr = number.toString().split('.')
  parseInt(numArr[1]) >= 5 ? result = parseInt(numArr[0]) + 1 : result = parseInt(numArr[0])
  return result
};

Math.ceil = function(number) {
  let result
  number > number.toString().split('.')[0] ? result = parseInt(number.toString().split('.')[0]) + 1 : result = parseInt(number.toString().split('.')[0])
  return result
};

Math.floor = function(number) {
  
  return parseInt(number.toString().split('.')[0])
  
};


// https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript