/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
  if(!head || !head.next || !head.next.next) return null;
  let fast = head.next.next;
  let slow = head.next;
  while(fast !== slow){
      if(!fast.next || !fast.next.next) return null;
      fast = fast.next.next;
      slow = slow.next;
  }
  let p1 = fast;
  let p2 = head;
  while(p1 !== p2){
      p1 = p1.next;
      p2 = p2.next;
  }
  return p1;
};




function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

let a1 = new ListNode(3)
let a2 = new ListNode(2)
let a3 = new ListNode(0)
let a4 = new ListNode(-4)
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a2;
console.log(detectCycle(a1))
// @lc code=end

