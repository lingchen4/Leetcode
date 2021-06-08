var serialize = function (root) {
  var arr = [];
  serializeHelper(root);
  function serializeHelper(node) {
    if (node === null) {
      arr.push("null");
      return;
    }
    // preorder
    arr.push(node.val);
    serializeHelper(node.left);
    serializeHelper(node.right);
  }
  var s = arr.join(",");
  return s.slice(0, s.length);
};

var deserialize = function (data) {
  var arr = data.split(",");
  var index = 0;
  var node = deserializeHelper();
  function deserializeHelper() {
    if (index >= arr.length) {
      return null;
    }
    if (arr[index] === "null") {
      index++;
      return null;
    }
    var cur = new TreeNode(parseInt(arr[index++]));
    cur.left = deserializeHelper();
    cur.right = deserializeHelper();
    return cur;
  }
  return node;
};
