var escapeGhosts = function(ghosts, target) {
  let myDis = Math.abs(target[0]) + Math.abs(target[1])
  let a 
  let b
  for (let i = 0; i < ghosts.length; i++) {
      if (ghosts[i][0] >= target[0]) {
          a = ghosts[i][0] - target[0]
      } else {
          a = target[0] - ghosts[i][0]
      }
      if (ghosts[i][1] >= target[1]) {
          b = ghosts[i][1] - target[1]
      } else {
          b = target[1] - ghosts[i][1] 
      }
      let ghostDis = a + b
      if (ghostDis <= myDis) {
          return false
      }
  }
  return true
};

console.log(escapeGhosts([[1,9],[2,-5],[3,8],[9,8],[-1,3]], [8,-10]))

