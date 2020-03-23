function countSmileys(arr) {
  let totalSmileys = 0
  for (let i = 0; i < arr.length; i++) {
     if (arr[i].length === 2) { 
        if (arr[i][0] === ':' || arr[i][0] === ';') {
          if (arr[i][1] === ')' || arr[i][1] === 'D') {
            totalSmileys += 1
          }
        }
      } else if (arr[i].length === 3) {
        if (arr[i][0] === ':' || arr[i][0] === ';') {
          if (arr[i][1] === '-' || arr[i][1] === '~') {
            if (arr[i][2] === ')' || arr[i][2] === 'D') {
              totalSmileys += 1
            }
          }
        }
      }
    
  }
  return totalSmileys
}


console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));