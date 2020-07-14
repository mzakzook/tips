// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// For example:
// Given BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2
 

// return [2].

// Note: If a tree has more than one mode, you can return them in any order.

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).



var findMode = function(root, objTrack = {}) {
  function createObj(root) {
      if (!root) return;
      if (objTrack[root.val]) {
          objTrack[root.val] += 1;
      } else {
          objTrack[root.val] = 1;
      }
      createObj(root.left);
      createObj(root.right); 
  }
  createObj(root);
  let freq = 0;
  let result = [];
  for (let key in objTrack) {
      if (objTrack[key] > freq) {
          result = [key];
          freq = objTrack[key];
      } else if (objTrack[key] === freq) {
          result.push(key);
      }
  } 
  return result;
};