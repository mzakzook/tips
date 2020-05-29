// Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

// Return the number of cells with odd values in the matrix after applying the increment to all indices.

 

// Example 1:


// Input: n = 2, m = 3, indices = [[0,1],[1,1]]
// Output: 6
// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.
// Example 2:


// Input: n = 2, m = 2, indices = [[1,1],[0,0]]
// Output: 0
// Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.
 

// Constraints:

// 1 <= n <= 50
// 1 <= m <= 50
// 1 <= indices.length <= 100
// 0 <= indices[i][0] < n
// 0 <= indices[i][1] < m


function oddCells(n, m, indices) {
  let mat = new Array(n).fill(new Array(m).fill(0))
  for (let i = 0; i < indices.length ; i++) {
    let ind = indices[i]
    for (let y = 0; y < m ; y++) {
      mat[ind[0]][y] += 1
    }
    for (let p = 0; p < mat.length ; p++) {
      mat[p][ind[1]] += 1
    }
  }
  return mat.flat().reduce((acc, item) => {
    if (item % 2 !== 0) {
      acc += 1
    }
    return acc
  }, 0)
};


console.log(oddCells(2, 3, [[0,1],[1,1]]))
