/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let isMirror = function (left, right) {
    if (left == null || right == null) {
      return right == left
    }
    return left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
  }
  if (root == null) {
    return true
  }
  return isMirror(root.left, root.right)
};
// @lc code=end

