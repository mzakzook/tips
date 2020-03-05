//print each translation then return number of translations 



function numTrans( number ) {

  // Convert our number into an array of digits
  const digits = number.toString().split( "" ).map( digit => parseInt( digit ) );

  // Initialize our tree with a single sequence of the first digit
  const translations = [[ digits[ 0 ] ]];

  // Loop through remaining digits
  for ( let i = 1; i < digits.length; i ++ ) {

      // Loop through translations; don't include ones we add on this step
      const length = translations.length;
      for ( let n = 0; n < length; n ++ ) {

          // Fork the translation if lastDigit * 10 + currentDigit is within our range
          const sum = translations[ n ][ translations[ n ].length - 1 ] * 10 + digits[ i ];
          if ( sum <= 26 ) translations.push( [ ...translations[ n ].slice( 0, - 1 ), sum ] );

          // Append currentDigit to the translation
          translations[ n ].push( digits[ i ] );

      }

  }

  const values = "abcdefghijklmnopqrstuvwxyz";
  

  return translations.map( translation => translation.map( key => values[ key - 1 ] ).join( "" ) );

}

/* Saam's solution. Hopefully it's correct!

let known = new Map; // Just used to ensure non exponential (I think). It's essentially dynamic programming
function variants(str) {
    if (!str.length)
        return [[]];

    if (known.has(str))
        return known.get(str);

    let result = [];

    for (let i = 0; i < str.length; ++i) {
        let start = str.slice(0, i + 1);
        let value = parseInt(start);
        if (value > 26)
            break;
        let rest = variants(str.slice(i + 1, str.length));
        let combined = rest.map(x => [start, ...x]);
        result.push(...combined);
    }

    known.set(str, result);
    return result;
}

*/



console.log(numTrans(123621384219321))
console.log(numTrans(123621384219321).length);