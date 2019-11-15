/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const prveNum = nums[i - 1];
    if (num === prveNum) {
      if (count === 2) {
        //删除
        nums.splice(i,1);
        i--;
      } else {
        count++;
      }
    } else {
      count = 1;
    }
  }
  return nums.length;
};
// removeDuplicates([0,0,1,1,1,1,2,3,3])

// removeDuplicates([1,1,1,2,2,3])
// @lc code=end

