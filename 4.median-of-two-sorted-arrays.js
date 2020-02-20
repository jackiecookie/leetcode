/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (32.80%)
 * Total Accepted:    31.8K
 * Total Submissions: 97.1K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 *
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 则中位数是 2.0
 *
 *
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 则中位数是 (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  
};



var findMedianSortedArrays = function (nums1, nums2) {
  //中位数必然满足两个条件
  //1：一个数组的中位数,以中位数的index为边界,左边元素的length,必然等于右边元素的length
  //2:左边元素的最大值一定 <= 右边元素的最小值

  // 那么两个有序数组的中位数也必然满足这两个条件
  // 将数组切分成 leftLen = rightLen  && left side last elm < right side first elm

  let len1 = nums1.length;
  let len2 = nums2.length;

  // 第一个数组先切在中间的位置

  let index1 = len1 >> 1;

  let totleCount = len1 + len2;

  // 为了保证两边的数量相同 第二个应该切的位置就是: 左边总共需要的数量 - 一个数组已经提供的左边数量

  let leftSideLen = totleCount >> 1;

  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;

  while (true) {

    let index2 = leftSideLen - index1;


    let leftSide1 = nums1.slice(0, index1);
    let leftSide2 = nums2.slice(0, index2);
    let rightSide1 = nums1.slice(index1);
    let rightSide2 = nums2.slice(index2);

    let leftSide1Max = leftSide1[leftSide1.length - 1] || min;
    let leftSide2Max = leftSide2[leftSide2.length - 1] || min;
    let rightSide1Min = rightSide1[0] || max;
    let rightSide2Min = rightSide2[0] || max;

    if (leftSide1Max <= rightSide2Min && leftSide2Max <= rightSide1Min) {
      // 答案就在这四个数字中
      let isOdd = totleCount % 2 == 0;
      if (!isOdd) {
        return Math.max(leftSide1Max, leftSide2Max);
      } else {
        return (Math.max(leftSide1Max, leftSide2Max) + Math.min(rightSide1Min, rightSide2Min)) / 2;
      }
    } else if (leftSide1Max > rightSide2Min) {
      let nextIdx = index1 >> 1;
      if (nextIdx == index1) {
        index1--;
      } else {
        index1 = nextIdx;
      }
    } else {
      let nextIdx = index1 + len1 >> 1;
      if (nextIdx == index1) {
        index1++;
      } else {
        index1 = nextIdx;
      }
    }

  }

};

console.log(findMedianSortedArrays([2, 3, 4, 5, 6, 7], [1]) === 4);
console.log(findMedianSortedArrays([1, 2, 8], [1, 2, 3, 4, 5, 6, 7, 8, 10, 100]));
console.log(findMedianSortedArrays([1, 3], [2]) === 2);
console.log(findMedianSortedArrays([1, 2], [3, 4]) === 2.5);
console.log(findMedianSortedArrays([2], []) === 2);
