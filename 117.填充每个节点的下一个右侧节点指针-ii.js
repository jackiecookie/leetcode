/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) return null;
    
    if (root.left !== null) {
        if (root.right !== null) {
            root.left.next = root.right;
        } else {
            root.left.next = help(root);
        }
    }
    
    if (root.right !== null) {
        root.right.next = help(root);
    }
    
    // 递归顺序，必须先右后左
    // 确保每一层从左向右扫描时能够扫描到
    connect(root.right)
    connect(root.left);
    
    return root;
};


// 寻找可以root下可以连接的下一个节点
function help(root) {
    // root下已经没有可以连接的子节点，将root设置为root.next
    root = root.next;
    while (root) {
        if (root.left !== null) return root.left;
        if (root.right !== null) return root.right;
        root = root.next;
    }
    return null;
}
// @lc code=end

