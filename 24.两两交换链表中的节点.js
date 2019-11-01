/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  let next = head&& head.next;
  if (next) {
   
    head.next = next.next;
    next.next = head;
    let item = head;
    head = next;
    next = item;
    if(next.next){
      let _next= swapPairs(next.next);
      next.next = _next
    }else{
      return head
    }
  }
  return head;
};


// function ListNode(val, next) {
//   this.val = val;
//   this.next = next;
// }

// let a =new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4))))
// let res = swapPairs(a);
// console.log(res)
// @lc code=end

