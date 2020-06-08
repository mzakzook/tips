function cheatHeavy(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1.1) return `The heavy pill is in bottle number ${i + 1}.`;
  }
}

function findHeavy(arr) {
  let weight = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    weight += (arr[i] * (i + 1));
    count += i + 1;
  }
  return `The heavy pill is in bottle number ${(weight - count) * 10}.`;
}


console.log(findHeavy([1, 1, 1, 1, 1.1, 1, 1])); // => 'The heavy pill is in bottle number 5.'
console.log(cheatHeavy([1, 1.1, 1, 1, 1, 1, 1])); // => 'The heavy pill is in bottle number 2.'