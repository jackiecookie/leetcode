/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let redIndex = 0;
  let whiteIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let index = -1;
    if (num === 0) {
      index = redIndex;
      if (redIndex == whiteIndex) {
        whiteIndex++;
      }
      redIndex++;

    } else if (num === 1) {
      index = whiteIndex;
      whiteIndex++;
    }
    if (index > -1 && index !== i) {
      nums[i] = nums[index];
      nums[index] = num;
      i--;
    }
  }
  return nums;
};

// sortColors([1])
// @lc code=end

