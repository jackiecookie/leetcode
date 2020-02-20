/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let result = 1;
  let current = 1
  for (let index = 0; index < nums.length - 1; index++) {
    const num = nums[index];
    const num1 = nums[index + 1];
    let gap = num1 - num;
    if (gap === 1) {
      current++;
    } else if (gap > 1) {
      if (current > result) {
        result = current;
      }
      current = 1;
    }
  }
  return current > result ? current : result;
};

// longestConsecutive([9,1,-3,2,4,8,3,-1,6,-2,-4,7])
// @lc code=end

