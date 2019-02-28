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
  const MINEST = -999999;
  const MAXEST = 999999;
  let len1 = nums1.length;
  let len2 = nums2.length;
  let totleLen = len1 + len2;
  let x = 0;
  let y = len1;
  let postionX = Math.ceil((x+y) / 2)//(x + y) >> 1;
  while (true) {
    let postionY = Math.ceil(totleLen / 2) - postionX;
    let leftSide1 = nums1.slice(0, postionX);
    let leftSide2 = nums2.slice(0, postionY);
    let rightSide1 = nums1.slice(postionX);
    let rightSide2 = nums2.slice(postionY);

    let leftSide1Max = leftSide1[leftSide1.length - 1] || MINEST;
    let leftSide2Max = leftSide2[leftSide2.length - 1] || MINEST;
    let rightSide1Min = rightSide1[0] || MAXEST;
    let rightSide2Min = rightSide2[0] || MAXEST;
    if (leftSide1Max <= rightSide2Min && leftSide2Max <= rightSide1Min) {
      //中位数就在这4个数字里面
      let isOdd = totleLen % 2 === 0;
      if (isOdd) {
        let leftSideMax = Math.max(leftSide1Max, leftSide2Max);
        let rightSideMix = Math.min(rightSide1Min, rightSide2Min);
        return (leftSideMax + rightSideMix) / 2;
      } else {
        return Math.max(leftSide1Max, leftSide2Max);
      }
    } else {
      if (leftSide1Max > rightSide2Min) {
        postionX = postionX - 1;
      } else {
        postionX = postionX + 1;
      }
    }
  }
};

console.log(findMedianSortedArrays([1, 3], [2]) === 2);
console.log(findMedianSortedArrays([1, 2], [3, 4]) === 2.5);
console.log(findMedianSortedArrays([2], []) === 2);
