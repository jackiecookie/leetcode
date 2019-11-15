/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  if (root == null) {
    return true
  }
  let depth = function (node, count = 0) {
    if (node != null) {
      count++;
      let leftDepth = depth(node.left, count);
      let rightDepth = depth(node.right, count);
      return leftDepth > rightDepth ? leftDepth : rightDepth
    } else {
      return count;
    }
  }

  let leftDepth = depth(root.left);
  let rightDepth = depth(root.right);
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};
// @lc code=end

