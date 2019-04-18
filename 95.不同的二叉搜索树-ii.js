/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (48.56%)
 * Total Accepted:    4.5K
 * Total Submissions: 8.6K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。
 *
 * 示例:
 *
 * 输入: 3
 * 输出:
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * 解释:
 * 以上的输出对应以下 5 种不同结构的二叉搜索树：
 *
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) {
    return [];
  }
  let result = getTrees(1, n);
  return result;
};

function getTrees(start, end) {
  if (start > end) {
    return null;
  }
  let trees = [];
  for (let i = start; i <= end; i++) {
    let tree = new TreeNode(i);
    let left = getTrees(start, i - 1);
    let right = getTrees(i + 1, end);
    if (left == null && right == null) {
      tree.left = left;
      tree.right = right;
      trees.push(tree);
    } else {
      if (left && right) {
        left.forEach(l => {
          let copy = Object.assign({}, tree);
          copy.left = l;
          right.forEach(r => {
            let copy1 = Object.assign({}, copy);
            copy1.right = r;
            trees.push(copy1);
          });
        });
      } else if (left) {
        left.forEach(element => {
          let copy = Object.assign({}, tree);
          copy.left = element;
          trees.push(copy);
        });
      } else if (right) {
        right.forEach(element => {
          let copy = Object.assign({}, tree);
          copy.right = element;
          trees.push(copy);
        });
      }
    }
  }

  return trees;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

generateTrees(3);
