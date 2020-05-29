class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

// commented naive BST class
class BST {
  constructor() {
      // initialize the tree to be empty
      this.root = null;
  }

  insert(val, root=this.root) {
      // if the tree is currently empty, then create the node as the 'absolute' root
      if(!this.root) {
          this.root = new TreeNode(val);
          return;
      }

      // otherwise, the tree is not empty, so...
      // if our val to insert is less than the root...
      if (val < root.val) {
          if (!root.left) {                       // ...and the left child does not exist,
              root.left = new TreeNode(val);      //      then create the node as the left child
          } else {                                // ...and the left child already exists,
              this.insert(val, root.left);        //      then recursively insert on the left subtree
          }

      // if our val to insert is greater than or equal to the root...
      } else {
          if (!root.right) {                      //  ...and the right child does not exist,
              root.right = new TreeNode(val);     //      then create the node as the right child
          } else {                                //  ...and the right child already exists,
              this.insert(val, root.right);       //      then recursively insert on the right subtree
          }
      }
  }
  // balance(root=this.root) {
  //   let leftHt = this.height(root.left)
  //   let rightHt = this.height(root.right)
  //   if (Math.abs(leftHt - rightHt) > 1) {

  //   }
  // }
  // height(root=this.root) {
  //   if (!root) {
  //     return -1
  //   } else {
  //     return 1 + Math.max(this.height(root.left), this.height(root.right))
  //   }
  // }
}



let balTree = new BST();
balTree.insert(10);
balTree.insert(5);
balTree.insert(16);
balTree.insert(1);
balTree.insert(7);
balTree.insert(16);

let unbalTree = new BST();
unbalTree.insert(1);
unbalTree.insert(5);
unbalTree.insert(7);
unbalTree.insert(10);
unbalTree.insert(16);
unbalTree.insert(16);


console.log(balTree)
console.log(unbalTree)