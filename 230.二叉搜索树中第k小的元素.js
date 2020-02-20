/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let res = [];
  let push = function (node) {
    if (node === null) {
      return
    }
    push(node.left)
    if (res.length === k) {
      return
    }
    res.push(node.val)
    push(node.right)

  }
  push(root)
  return res[k - 1]
};




// @lc code=end

