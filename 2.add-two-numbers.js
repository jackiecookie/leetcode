/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (31.83%)
 * Total Accepted:    75.1K
 * Total Submissions: 235.7K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
var addTwoNumbers = function(l1, l2) {
  let l1Item = l1;
  let l2Item = l2;
  let result = new ListNode(0);
  let head = result;
  let jw = 0;
  while (l1Item !== null || l2Item !== null||jw>0) {
    let item = (l1Item===null?0:l1Item.val) + (l2Item===null?0:l2Item.val) + jw;
    let strItem = (item + "").toString();
    let strLen = strItem.length;
    let i = strItem[strLen - 1];
    head.next = new ListNode(Number(i));
    jw = Number(strLen === 2 ? strItem[0] : 0);
    l1Item = l1Item !== null ? l1Item.next : null;
    l2Item = l2Item !== null ? l2Item.next : null;
    head = head.next;
  }
  return result.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
// let a2 = new ListNode(3);
let a1 = new ListNode(8);
let a = new ListNode(1);
a.next = a1;
// a1.next = a2;

// let a3 = new ListNode(4);
// let a4 = new ListNode(6);
let a5 = new ListNode(0);
// a5.next = a4;
// a4.next = a3;

addTwoNumbers(a, a5);
