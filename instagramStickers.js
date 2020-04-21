function stickers_for(phrase) {
  let letC = {'i': 1, 'n': 1, 's': 1, 't': 1, 'a': 2, 'g': 1, 'r': 1, 'm': 1}
  let results = 0
  for (let key in letC) {
    let count = phrase.split('').filter(x => x === key).length
    if (Math.ceil(count / letC[key]) > results) {
      results = Math.ceil(count / letC[key]) 
    }
  }
  return results
}
console.log(stickers_for('artisan martians')) // 2
console.log(stickers_for('taming giant gnats')) // 3



function stickers_for(phrase) {
  let instagramLookup = {
    'i': 1,
    'n': 1,
    's': 1,
    't': 1,
    'a': 2,
    'g': 1,
    'r': 1,
    'a': 2,
    'm': 1
  }

  let phraseLookup = {};
  let maxStickerCount = 0

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === ' ') {
      continue;
    } else if (phraseLookup[phrase[i]]) {
      phraseLookup[phrase[i]] += 1;
    } else {
      phraseLookup[phrase[i]] = 1;
    }
    let stickerCount = phraseLookup[phrase[i]] / instagramLookup[phrase[i]];
    maxStickerCount = Math.max(stickerCount, maxStickerCount);
  }
  return maxStickerCount;
}