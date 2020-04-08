var countAndSay = function(n) {
  let result = "1"
  let newRes = ""
  let count = 1
  let resArr = result.split('')
  for (let i = 1 ; i < n ; i++) {
      resArr = result.split('')
      for (let y = 1 ; y < resArr.length; y++) {
          
          if (resArr[y] === resArr[y - 1]) {
              count ++
          } else {
                newRes += count.toString() + resArr[y - 1]
                count = 1  
          }
      }
      if (count > 1) {
        newRes += count.toString() + resArr[resArr.length -  1]
        count = 1
      }
      if (resArr[resArr.length - 1] !== resArr[resArr.length - 2] && resArr.length > 1) {
          newRes += "1" + resArr[resArr.length - 1]
      }
      if (resArr.length === 1) {
        newRes = "1" + resArr[0]
      }
      result = newRes
      newRes = ""
      
  }
  return result
  
};


console.log(countAndSay(7))