


function convertFrac(lst){
  let results = ""
  if (lst.length === 0) return results
  let bigD = lst[0][1]
  for (let i = 1; i < lst.length ; i++) {
    let denom = lst[i][1]
    if (denom > bigD) bigD = denom
  }
  for (let i = 0; i < lst.length ; i++) {
    let denom = lst[i][1]
    let commonD = bigD
    while (commonD % denom !== 0) {
      commonD += bigD
    }
    bigD = commonD
  }
  for (let i = 0; i < lst.length ; i++) {
    let denom = lst[i][1]
    let num = lst[i][0]
    let mult = bigD / denom
    results += "(" + (num * mult).toString() + "," + bigD.toString() + ")"
  }
  return results
}
