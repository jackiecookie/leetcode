/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = [nums[0], nums[1]];
  let dp1 = [0, nums[1]];
  let len = nums.length;
  if (len < 2) {
    return nums[0] || 0;
  }
  for (let i = 2; i < len; i++) {
    let num = nums[i];
    dp[i] = Math.max(...dp.slice(0, dp.length - 1)) + num;
    dp1[i] = Math.max(...dp1.slice(0, dp1.length - 1)) + num;
  }

  dp[len-1] = 0;
  return Math.max(...dp1.concat(dp));
};

// console.assert(rob([2, 7, 9, 3, 1]) === 11)

// console.assert(rob([2,1,2,6,1,8,10,10]) === 25)
// console.assert(rob([6, 6, 4, 8, 4, 3, 3, 10]) === 27)
// console.assert(rob([8, 4, 8, 5, 9, 6, 5, 4, 4, 10]) === 34)
// console.assert(rob([1, 1, 3, 6, 7, 10, 7, 1, 8, 5, 9, 1, 4, 4, 3]) === 41)
// console.assert(rob([4, 1, 2, 7, 5, 3, 1]) === 14)
// console.assert(rob([1, 3, 1, 3, 100]) === 103)
// console.assert(rob([2, 3, 2]) === 3)
// console.assert(rob([1, 2, 3, 1]) === 4)
// @lc code=end

