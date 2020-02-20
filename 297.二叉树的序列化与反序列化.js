/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) return [];
  let res = [];
  let node = root,
    queue = [node];
  while (queue.length > 0) {
    node = queue.shift();
    if (node === null) {
      res.push(null);
    } else {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return res;

};



/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length === 0) return null;
  let root = new TreeNode(data.shift());
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    // 数组中的节点已经计算完毕
    if (data.length <= 0) break;
    let left = data.shift(); // 左子节点的值
    if (left === null) {
      node.left = null;
    } else {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }
    // 数组中的节点已经计算完毕
    if (data.length <= 0) break;
    let right = data.shift();
    if (right === null) {
      node.right = null;
    } else {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }
  return root;

};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


let root = new TreeNode(5);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);
deserialize(serialize(root))
// @lc code=end

