/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */
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
var reverseList = function (head) {
    function reverse(list, next) {
        if(!list&&!next){
            return null;
        }
        if (!next) next = list.next;
        if (next != null) {
            let result = reverse(next, next.next);
            next.next = list;
            list.next = null;
            return result;
        } else {
            next = list;
            return next;
        }
    }
    return reverse(head)
};


// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// let result = reverseList(head)
// console.log(result)
