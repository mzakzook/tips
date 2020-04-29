// Given a sentence convert the sentence to the modified  pig-latin language: Words beginning with a vowel, remove the vowel letter and append the letter to the end. All words append the letters 'ni' to the end. All words incrementally append the letter 'j'. i.e. 'j','jj','jjj', etc..


function pigLJ(sentence) {
  let senArr = sentence.split(' ')
  let result = []
  for (let i = 0; i < senArr.length ; i++) {
    let re = /^[aeiou]$/i;
    let word = senArr[i]
    if (re.test(word[0])) {
      result.push(word.slice(1) + word[0] + 'ni' + "j".repeat(i + 1))
    } else {
      result.push(word + 'ni' + "j".repeat(i + 1))
    }
  }
  return result.join(' ')
}


console.log(pigLJ('These elephants are way too big but I love them'))