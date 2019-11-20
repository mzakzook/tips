function sum(array) {
  let total = 0
  for ( i = 0 ; i < array.length ; i++ ) {
    total += array[i]
  }
  return total
}

function range(x, y, z=1) {
  let array = []
  let i = x
  if (z === 0 || x === y) {
    array = [i]
  } else if (y > x) {
    while (i <= y && i >= x) {
      array.push(i)
      i += z
    }
  } else {
    while (i >= y && i <= x) {
      array.push(i)
      i += z
    }
  }
  return array
}