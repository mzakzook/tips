function humanReadable(seconds) {
  // TODO
  let hrs = '00'
  let mins = '00'
  let secs = '00'
  if (seconds / 3600 >= 1) {
    if (seconds / 3600 < 10) {
      hrs = '0' + Math.floor(seconds / 3600).toString()
    } else {
      hrs = Math.floor(seconds / 3600).toString()
    }
  }
  seconds -= parseInt(hrs) * 3600
  if (seconds / 60 >= 1) {
    if (seconds / 60 < 10) {
      mins = '0' + Math.floor(seconds / 60).toString()
    } else {
      mins = Math.floor(seconds / 60).toString()
    }
  }
  seconds -= parseInt(mins) * 60
  if (seconds < 10) {
    secs = '0' + seconds.toString()
  } else {
    secs = seconds.toString()
  }
  return hrs + ':' + mins + ':' + secs
}

console.log(humanReadable(0))
console.log(humanReadable(5))
console.log(humanReadable(60))
console.log(humanReadable(86399))
console.log(humanReadable(359999))