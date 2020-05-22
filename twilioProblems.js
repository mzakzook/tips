// Longest Prefix Match
// determine the longest prefix match (in prefixes array) for each of the phone numbers (in numbers)
// OUTPUT: an array of prefixes (longest) that correspond  to the longest matches for each input number ()
// no prefix found? denote with "" empty string

function match(prefixes, numbers) {
  let result = new Array(numbers.length).fill('')
  for (let i = 0; i < numbers.length ; i++) {
    for (let y = 0; y < prefixes.length ; y++) {
      let preLen = prefixes[y].length
      if (numbers[i].slice(0, preLen) === prefixes[y] && prefixes[y].length > result[i].length) result[i] = prefixes[y]
    }
  }
  return result
}

let prefixes = ['+1415123', '+1', '+1412', '+1510', '+44']
let numbers = ["+14151234567", "+9900", "+14151224983"]
console.log(match(prefixes, numbers))



// SMS Splitting
// input is string 
// output SMS-compliant segments with suffixes (160 characters or less )
// segment suffix ==> (1/5)

function segments(message) {
  let mesCop = message;
  let result = [];
  if (mesCop.length <= 160) return [message]
  let totSeg = Math.ceil(message.length / 154)
  while (mesCop.length > 0) {
    let ind = 154
    while (mesCop[ind] !== ' ') {
      ind -= 1
      if (ind === -1) {
        ind = 154
        break
      }
    }
    result.push(mesCop.slice(0, ind) + ` (${result.length + 1}/${totSeg})`)
    if (mesCop.length > 154) {
      mesCop = mesCop.slice(ind + 1)
    } else {
      mesCop = ''
    }
  }
  return result
}



let message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id tristique quam, in ullamcorper metus. Duis lacinia dolor non quam porta, non turpis duis. Eating pizza for ninja turtles and peace bears"
console.log(message.length);
console.log(segments(message));
console.log(segments('nioewnobnwonvwenpivnwpnvpwenvnwelngwrgowengioewifnqeiwnfioewgoiwnepgnwepngpewnignewngpiewnpgnweonioewniogweoigioewgojwepgwepgpwepewgoiqeoghewogjpowepgewpgpewhgpewhopgwepgpwepgpwepgwepgpoewgpewgpwegwepbweipgnweongpwenpgnweogoweogweo'))


// Longest Prefix Match
// determine the longest prefix match (in prefixes array) for each of the phone numbers (in numbers)
// OUTPUT: an array of prefixes (longest) that correspond  to the longest matches for each input number ()
// no prefix found? denote with "" empty string

function match(prefixes, numbers) {

  let longestPrefixMatches = [];
  let sortedPrefixes = prefixes.sort((a,b) => b.length - a.length);
  // console.log(sortedPrefixes);

  // prefixes.forEach(prefix => {
  //   prefixLookup[prefix] = prefix;
  // });

  // INITIAL SOLUTION. Iterate thru numbers to check if a prefix is found in each number. If so, push result into new longestPrefixMatch array. If not, push in empty string. Keep track of longest prefix too
  for (let i = 0; i < numbers.length; i++) {
      // let length = 0;
      // let prefix;
      let found;
    for (let j = 0; j < prefixes.length; j++) {
      // if (numbers[i].includes(prefixes[j]) && prefixes[j].length > length) {
      // if (prefixes[j].length > length && numbers[i].slice(0, prefixes[j].length) === prefixes[j]) {
        let sliced = numbers[i].slice(0, prefixes[j].length);
      if (sliced === prefixes[j]) {
        longestPrefixMatches.push(prefixes[j]);
        found = true;
        break;
        // length = prefixes[j].length;
        //   prefix = prefixes[j]
      }
    }
    if (!found) longestPrefixMatches.push(' ')
    // longestPrefixMatches.push(length ? prefix : "");
  }
  return longestPrefixMatches;
}


let prefixes = ['+1415123', '+1', '+1412', '+1510', '+44']
let numbers = ["+14151234567", "+9900", "+14151224983"]
// console.log(match(prefixes, numbers))


// SMS Splitting
// input is string 
// output SMS-compliant segments with suffixes (160 characters or less )
// segment suffix ==> (1/5)
function segments(message) {
  if (message.length <= 160) return [message];

  const smsSegments = [];
  const segmentsLen = Math.round(message.length / 155);

  let i = 0;
  let j = 1;

  while (i < message.length) {
    let newSegment = message.slice(i, i + 154);
    newSegment = newSegment + ` (${j}/${segmentsLen})`;
    smsSegments.push(newSegment);
    i += 155;
    j += 1;
  }
  
  return smsSegments;
}

let msg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id tristique quam, in ullamcorper metus. Duis lacinia dolor non quam porta, non turpis duis. Eating pizza in the morning, pizza in the evening, pizza at supper time"
// console.log(message.length);
console.log(segments(msg));