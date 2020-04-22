// Fun with Anagrams. Given an array of strings, check to see if words are anagrams. If a word is an anagram of another word, the first word stays in the array and the second one does not. Any words that are not anagrams of another stay in the array. Return the array with remaining words sorted.



// function funWithAnagrams(text) {
//   let results = [] 
//   let bad = []
//   for (let i = 0; i < text.length ; i++) {
//     results.push(text[i])
//     for (let y = i + 1 ; y < text.length ; y++) {
//       if (text[i].split('').sort().join('') === text[y].split('').sort().join('')) {
//         bad.push(text[y])   
//       }
//     }
//     text = text.filter(x => !bad.includes(x))
//   }
//   return results
// }


//Katherine's code

// function funWithAnagrams(text) {
//   let words = [];
//   let wordsChecked = [];

//   for (let i = 0; i < text.length; i++) {
//     let sortWord = text[i].split('').sort().join('');
//     if (!wordsChecked.includes(sortWord)) {
//       wordsChecked.push(sortWord);
//       words.push(text[i])
//     } 
//   }

//   return words.sort();
// }


// function funWithAnagrams(text) {
//   let words = [];
//   let wordsChecked = [];

//   for (let i = 0; i < text.length; i++) {
//     let matchFound = false;
//     let objectWord = wordToObject(text[i]);
//     for (let i = 0; i < wordsChecked.length; i++) {
//       if (compareObjects(objectWord, wordsChecked[i])) {
//         matchFound = true;
//         break;
//       }
//     }
//     if (!matchFound) {
//       wordsChecked.push(objectWord);
//       words.push(text[i]);
//     }
//   }
//   return words.sort();
// }

// function wordToObject(word) {
//   let wordObj = {};

//   for (let i = 0; i < word.length; i++) {
//     if (wordObj[word[i]]) {
//       wordObj[word[i]] += 1;
//     } else {
//       wordObj[word[i]] = 1;
//     }
//   }
//   return wordObj;
// }

// function compareObjects(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) return false;
//   }
//   return true;
// }





// n * (m + m log m + n) + n log n


console.log(funWithAnagrams(['code', 'doce', 'ecod', 'frream', 'framer', 'fream', 'frame'])) // ['code', 'frame', 'framer']
console.log(funWithAnagrams(['poke', 'pkoe', 'okpe', 'ekop'])) // ['poke']

// console.log(objEq({'a': 1, 'b': 3}, {'b': 2, 'a': 1}))

function objEq (obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    } 
  } else {
    return false
  }
  return true
}




function funWithAnagrams(text) {
  let results = []
  let badWords = []
  for (let i = 0; i < text.length; i++) {
    let textObj = {}
    for (let y = 0; y < text[i].length ; y++) {
      if (textObj[text[i][y]]) {
        textObj[text[i][y]] += 1
      } else {
        textObj[text[i][y]] = 1
      }
    }
    let match = false
    for (let z = 0; z < badWords.length ; z++) {
      if (objEq(badWords[z], textObj)) {
        match = true
        break
      } 
    }
    if (!match) {
      results.push(text[i])
      badWords.push(textObj)
    }
  }
  return results
}





