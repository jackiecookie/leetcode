/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (23.70%)
 * Total Accepted:    15.1K
 * Total Submissions: 62.1K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *
 * 假设一个二叉搜索树具有如下特征：
 *
 *
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 * 示例 1:
 *
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
 *
 *
 */
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

// var isValidBST = function(root, result, parentRoot) {
//   //   console.log(root);
//   if (!root) {
//     return result === undefined ? true : result;
//   }
//   let left = root.left;
//   let right = root.right;
//   let leftVal = left ? left.val : undefined;
//   let rightVal = right ? right.val : undefined;
//   let rootVal = root.val;
//   if (
//     leftVal >= rootVal ||
//     rightVal <= rootVal ||
//     (parentRoot && parentRoot(leftVal, rightVal))
//   ) {
//     return false;
//   } else {
//     if (!left && !right) {
//       return true;
//     } else {
//       return (
//         isValidBST(root.left, result, (leftVal, rightVal) => {
//           return leftVal > root.val || rightVal > root.val;
//         }) &&
//         isValidBST(root.right, result, (leftVal, rightVal) => {
//           return leftVal < root.val || rightVal < root.val;
//         })
//       );
//     }
//   }
// };

var isValidBST = function(root) {
  //思路,二叉搜索树 中序遍历是从小到大
  let array = [];
  let btsToArray = function(root) {
    if (root) {
      let value = root.val;
      let left = root.left;
      let right = root.right;
      if (left) {
        btsToArray(left);
      }
      array.push(value);
      if (right) {
        btsToArray(right);
      }
    }
  };
  btsToArray(root);
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) {
      return false;
    }
  }
  return true;
};

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// let root = new TreeNode(2);
// let left = new TreeNode(1);
// let right = new TreeNode(3);
// root.left = left;
// root.right = right;

// // left.left = new TreeNode(0);
// // left.right = new TreeNode(2);

// // right.left = new TreeNode(6);
// // right.right = new TreeNode(20);

// console.log(isValidBST(root));

//[10,5,15,null,null,6,20]
//[10,5,15,null,null,6,20]
