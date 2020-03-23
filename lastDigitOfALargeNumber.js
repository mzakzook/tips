// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

// For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

// You may assume that the input will always be valid.

// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9    
// lastDigit("10","10000000000")  // returns 0
// Remarks
// JavaScript, C++, R, PureScript
// Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

var lastDigit = function(str1, str2){  
  if (str2 === "0") {
    return 1;
  }
  if (str1[str1.length - 1] === "0") {
    return 0
  }
  if (str2 === "1") {
    return parseInt(str1[str1.length - 1])
  }
  let x
  if (parseInt(str2) > 4) {
    x = (parseInt(str2.substr(str2.length - 5)) % 4) + 4
  } else {
    x = parseInt(str2)
  }
  let y = (Math.pow(parseInt(str1[str1.length - 1]), x)).toString()
  return parseInt(y[y.length - 1])
}


console.log(lastDigit("4", "1")) //, 4);
console.log(lastDigit("4", "2")) //, 6);
console.log(lastDigit("9", "7")) //, 9);
console.log(lastDigit("10","10000000000")) //, 0);
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376")) //, 6);
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")) //, 7);


// Test.describe("lastDigit", function(){
//   Test.it("should work for some examples", function(){
//     Test.assertEquals(lastDigit("4", "1"), 4);
//     Test.assertEquals(lastDigit("4", "2"), 6);
//     Test.assertEquals(lastDigit("9", "7"), 9);
//     Test.assertEquals(lastDigit("10","10000000000"), 0);
//     Test.assertEquals(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 6);
//     Test.assertEquals(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 7);
//   });
//   Test.it("should work for x ^ 0", function(){
//     var randomString = function(){
//       var i = Math.floor(Math.random() * 100) + 1, str="";
//       while(i --> 0){
//         str = str + "01234567890".charAt(Math.floor(Math.random()*10));
//       }
//       return str;
//     };
//     var i, r;
//     for(i = 0; i < 100; ++i){
//       r = lastDigit(randomString(), "0");
//       if(i < 1 || r !== 1){
//         Test.assertEquals(r, 1, "x ^ 0 has 1 as last digit");
//         if(r !== 1)
//           return;
//       }
//     }
//   });
// });