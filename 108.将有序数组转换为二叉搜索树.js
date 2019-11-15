/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let buildTree = function (nums) {
    if (nums.length === 0) {
      return null;
    }
    let mid = nums.length >> 1;
    let root = new TreeNode(nums[mid]);
    root.left = buildTree(nums.slice(0, mid));
    root.right = buildTree(nums.slice(mid + 1));
    return root;
  }
  return buildTree(nums)
};


// sortedArrayToBST([-10, -3, 0, 5, 9])

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
// @lc code=end

