/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (31.50%)
 * Total Accepted:    26.9K
 * Total Submissions: 85.4K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * 示例：
 *
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 *
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 *
 *
 * 说明：
 *
 * 给定的 n 保证是有效的。
 *
 * 进阶：
 *
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let dummy =  ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    // 第一个指针和第二个指针以N的间隔隔开,确保在走的步数一样的情况下,第一个指针走到头的时候第二个指针刚好在被删除节点的前一个
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
  };

  //时间复杂度高,链表过于大,或者链表中的数据比较复杂时可能会引发灾难
// var removeNthFromEnd = function(head, n) {
    
//   let current = head;
//   let nodeArray = [];
//   while (current !== null) {
//     nodeArray.push(current);
//     current = current.next;
//   }
//   let len = nodeArray.length;
//   //删除头部
//   if(n===len){
//     return head.next;
//   }
//   let nodeBeforeRN = nodeArray[len - 1 - n];
//   let nodeAfterRN = n === 1 ? null : nodeArray[len - n + 1];
//   nodeBeforeRN.next = nodeAfterRN;
//   return head;
// };

function ListNode(val, next) {
  return {
    val,
    next
  };
}
let last = ListNode(5, null);
let last1 = ListNode(4, last);
let last2 = ListNode(3, last1);
let last3 = ListNode(2, last2);
let last4 = ListNode(1, last3);
removeNthFromEnd(last4, 4);
