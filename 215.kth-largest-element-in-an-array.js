/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (55.63%)
 * Total Accepted:    14.3K
 * Total Submissions: 25.4K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 示例 1:
 *
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 *
 *
 * 示例 2:
 *
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 *
 * 说明:
 *
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let quickSelect = function(pivotIndex, arr, k) {
    let arrLen = arr.length;
    if (arrLen === 1) {
      return arr[0];
    }
    let pivot = arr[pivotIndex];
    let rightArr = [];
    let leftArr = [];
    for (let i = 0; i < arrLen; i++) {
      if (i !== pivotIndex) {
        let num = arr[i];
        if (num > pivot) {
          rightArr.push(num);
        } else {
          leftArr.push(num);
        }
      }
    }
    let rightArrLen = rightArr.length;
    let goRight = rightArrLen >= k;
    if (rightArr.length + 1 === k) {
      return pivot;
    } else {
      return quickSelect(
        0,
        goRight ? rightArr : leftArr,
        //走左边的话就应该去掉右边比他大的数 第几个
        goRight ? k : k - (rightArrLen + 1)
      );
    }
  };
  return quickSelect(0, nums, k);
};

// console.log(findKthLargest([3,2,1,5,6,4],2))
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
// console.log(findKthLargest([2, 1], 2))
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 9))

