// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
 

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.
// Accepted
// 71,292
// Submissions
// 148,419


function checkStraightLine(coordinates) {
  let slope = [coordinates[1][0] - coordinates[0][0], coordinates[1][1] - coordinates[0][1]] 
  for (let i = 2; i < coordinates.length ; i++) {
    let xDif = coordinates[i][0] - coordinates[1][0]
    let yDif = coordinates[i][1] - coordinates[1][1]
    if (xDif * slope[1] !== yDif * slope[0]) return false
  }
  return true
};


console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])) //false
console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])) //true

