/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
var connect = function (root, right) {
    if (root !== null&&root !== undefined) {
        if (right) {
            root.next = right;
        } else {
            root.next = null;
        }
        connect(root.left, root.right);
        connect(root.right, right == null ? null : right.left);
        return root;
    } else {
        return root
    }
};

// function Node(val, left, right, next) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//     this.next = next;
// };

// let node4 = new Node(4)
// let node5 = new Node(5)
// let node6 = new Node(6)
// let node7 = new Node(7)

// let node2 = new Node(2, node4, node5)
// let node3 = new Node(3, node6, node7)
// let node1 = new Node(1, node2, node3)
// connect(node1)
// @lc code=end

