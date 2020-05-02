function validateBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  if (root === null) return true;
  if (root.value >= max || root.value <= min) return false;
  return (
    validateBST(root.left, min, root.value) &&
    validateBST(root.right, root.value, max)
  );
};