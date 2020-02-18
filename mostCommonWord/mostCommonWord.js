var mostCommonWord = function(paragraph, banned) {
  let editPara = paragraph.replace(/[!?',;.]/g," ").replace(/\s{2,}/g," ").toLowerCase().trim()
  let wordCount = {}
  let paraArr = editPara.split(" ")
  let mostUsed = ""
  for (let i = 0; i < paraArr.length; i++) {
      if (banned.includes(paraArr[i])) {
          continue
      } 
      if (!wordCount[paraArr[i]]) {
          wordCount[paraArr[i]] = 1
          if (mostUsed.length < 1) {
              mostUsed = paraArr[i]
          }
      } else {
          wordCount[paraArr[i]] += 1
          if (wordCount[paraArr[i]] > wordCount[mostUsed]) {
              mostUsed = paraArr[i]
          }
      }
  }
  return mostUsed
};


mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])


