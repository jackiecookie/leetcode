/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root, count = 0) {
  if (root === null) {
    return count;
  }
  count++;
  if (root.left == null && root.right == null) {
    return count;
  }
  let leftDepth = root.left === null ? Number.MAX_SAFE_INTEGER : minDepth(root.left, count);
  let righttDepth = root.right === null ? Number.MAX_SAFE_INTEGER : minDepth(root.right, count);
  return Math.min(righttDepth, leftDepth)
};
// @lc code=end

