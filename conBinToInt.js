// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

 

// Example 1:


// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
// Example 2:

// Input: head = [0]
// Output: 0
// Example 3:

// Input: head = [1]
// Output: 1
// Example 4:

// Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// Output: 18880
// Example 5:

// Input: head = [0,0]
// Output: 0
 

// Constraints:

// The Linked List is not empty.
// Number of nodes will not exceed 30.
// Each node's value is either 0 or 1.


// var getDecimalValue = function(head) {
//     let storage = head
//     let arr = []
//     let result = 0
//     while (storage !== null) {
//         arr.push(storage.val)
//         storage = storage.next
//     }
//     for (let i = 0; i < arr.length ; i++) {
//         result += arr[i] * (2**(arr.length - 1 - i))
//     }
//     return result
// };

// function getDecimalValue(head) {
//     let count = 0
//     let storage = head
//     while (storage) {
//         count += 1
//         storage = storage.next
//     }
//     let result = 0
//     let current = head
//     for (let i = count - 1; i >= 0 ; i--) {
//         result += current.val * (2**i)
//         current = current.next
//     }
//     return result
// }


var getDecimalValue = function (head, binaryStr = '') {
  while (head) {
      binaryStr += head.val;
      head = head.next;
  }
  return parseInt(binaryStr, 2);
};


console.log(getDecimalValue([1,0,1])) // => 5