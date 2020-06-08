function bballGame(p) {
  let winSec = (3 * p**2) - (2 * p**3);
  console.log(winSec)
  return winSec >= p ? 'Play 2nd Game' : 'Play 1st Game';
}


console.log(bballGame(.5))