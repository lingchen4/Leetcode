const isSymmetric = (root) => {
  if (!root) return false;
  const helper = (t1, t2) => {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    return (
      t1.val === t2.val &&
      helper(t1.left, t2.right) &&
      helper(t1.right, t2.left)
    );
  };

  return helper(root.left, root.right);
};
