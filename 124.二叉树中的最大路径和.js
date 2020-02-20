/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let Depth = function (node) {
        if (node == null) {
            return 0;
        }
        let left = Depth(node.left);
        let right = Depth(node.right);
        Math.max(left, 0)
        maxSum = Math.max(maxSum, Math.max(left, 0) + Math.max(right, 0) + node.val);
        return Math.max(left, right,0) + node.val;
    }

    Depth(root)

    return maxSum;
};
// @lc code=end

