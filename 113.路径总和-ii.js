/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let result = [];
  let goGetIt = function (totle, node, arr) {
    if (node === null) {
      return
    }
    totle += node.val;
    arr.push(node.val)

    if (totle === sum) {
      if (node.right === null && node.left === null) {
        result.push(arr.slice(0));
      }
    }
    let remaind = sum - totle;
    goGetIt(totle, node.right, arr.slice(0))
    goGetIt(totle, node.left, arr.slice(0))
  }
  goGetIt(0, root, [])
  return result;
};
// @lc code=end

