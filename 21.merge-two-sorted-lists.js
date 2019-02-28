/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (51.63%)
 * Total Accepted:    39K
 * Total Submissions: 75.6K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let result = new ListNode(0);
  let nextArrow = result;
  while (l1 !== null || l2 !== null) {
    let l1Current = l1 === null ? null : l1.val;
    let l2Current = l2 === null ? null : l2.val;
    if (l1Current === null) {
      nextArrow.next = new ListNode(l2Current);
      nextArrow = nextArrow.next;
      l2 = l2.next;
    } else if (l2Current === null) {
      nextArrow.next = new ListNode(l1Current);
      nextArrow = nextArrow.next;
      l1 = l1.next;
    }
    else if (l1Current > l2Current) {
      nextArrow.next = new ListNode(l2Current);
      nextArrow = nextArrow.next;
      l2 = l2.next;
    } else if (l2Current > l1Current) {
      nextArrow.next = new ListNode(l1Current);
      nextArrow = nextArrow.next;
      l1 = l1.next;
    } else {
      nextArrow.next = new ListNode(l1Current);
      nextArrow.next.next = new ListNode(l2Current);
      nextArrow = nextArrow.next.next;
      l2 = l2.next;
      l1 = l1.next;
    }
  }
  return result.next;
};

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// let l1 = new ListNode(0);
// let l2 = new ListNode(2);
// let l3 = new ListNode(3);
// let l4 = new ListNode(4);

// l1.next = l2;
// l2.next = l4;
// l3.next = l4;

// mergeTwoLists(l1, null);
