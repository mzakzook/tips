function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var rangeSumBST = function(root, L, R) {
  if (!root) return 0
  return (root.val >= L && root.val <= R ? root.val : 0) + rangeSumBST(root.left, L, root.val - 1) + rangeSumBST(root.right, root.val + 1, R)
};


console.log(rangeSumBST([10,5,15,3,7,null,18], 7, 15)) // => 32
console.log(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10)) // => 23