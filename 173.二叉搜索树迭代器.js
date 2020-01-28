/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
function BSTIterator(root) {
    var stack = [];
    return { hasNext, next };

    function hasNext() {
        return root || stack.length;
    }

    function next() {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        var result = root.val;
        root = root.right;
        return result;
    }
}

// @lc code=end

