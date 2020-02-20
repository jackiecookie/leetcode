/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let result = [];
  let goGetIt = function (node, arr) {
    if(node==null){
      return 
    }
    arr.push(node.val)
    if (node.left != null) {
      goGetIt(node.left, arr);
      arr.pop();
    }
    if (node.right != null) {
      goGetIt(node.right, arr);
      arr.pop();
    }

    if (node.left == null && node.right == null) {
      result.push(arr.join('->'))
    }
  }
  goGetIt(root, [])
  return result;
};
// @lc code=end

