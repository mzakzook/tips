// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

// Example 1:

// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"
// Example 2:

// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"
// Example 3:

// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"
 

// Constraints:

// The given dates are valid dates between the years 1971 and 2100.


var dayOfTheWeek = function(day, month, year) {
  let days = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'}
  let d = new Date(`${year}-${month}-${day}`)
  return days[d.getDay()];
};


console.log(dayOfTheWeek(31,8,2019)); // => 'Saturday'
console.log(dayOfTheWeek(18,7,1999)); // => 'Sunday'
console.log(dayOfTheWeek(15,8,1993)); // => 'Sunday'