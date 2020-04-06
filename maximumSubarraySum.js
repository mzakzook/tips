var maxSequence = function(arr){
  // ...
  let max = 0
  let tracker = 0
  for (let i = 0; i < arr.length; i++) {
    tracker += arr[i]
    if (tracker < 0) {
      tracker = 0
    }
    if (tracker > max) {
      max = tracker
    }
  }
  return max
}



console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))