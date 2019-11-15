/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let node = dummy;
  while (node.next) {
    if (node.next.next && node.next.val === node.next.next.val) {
      let nonValNode = node.next.next.next;
      while (nonValNode && nonValNode.val === node.next.val) {
        nonValNode = nonValNode.next;
      }
      node.next = nonValNode;
    } else {
      node = node.next;
    }
  }
  return dummy.next;
};


// let a1 = new ListNode(1);
// let a2 = new ListNode(2);
// let a3 = new ListNode(3);
// let a4 = new ListNode(3);
// let a5 = new ListNode(4);
// let a6 = new ListNode(4);
// let a7 = new ListNode(5);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
// a4.next = a5;
// a5.next = a6;
// a6.next = a7;
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// let result = deleteDuplicates(a1);
// console.log(result)
// @lc code=end

