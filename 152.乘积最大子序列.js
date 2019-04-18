/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (30.81%)
 * Total Accepted:    5K
 * Total Submissions: 15.5K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
 *
 * 示例 1:
 *
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 *
 *
 * 示例 2:
 *
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//   let dp = [];
//   let len = nums.length;
// //   let result = -10000;
// //   for (let i = 0; i < len; i++) {
// //     dp[i] = [];
// //     dp[i][i] = nums[i];
// //     if (dp[i][i] > result) {
// //       result = dp[i][i];
// //     }
// //   }
// //   for (let i = 0; i < len; i++) {
// //     for (let j = i + 1; j < len; j++) {
// //       dp[i][j] = dp[i][j - 1] * nums[j];
// //       if (dp[i][j] > result) {
// //         result = dp[i][j];
// //       } 
// //     }
// //   }
//   return result;
// };

function maxProduct(nums) {
    let res = -Number.MAX_VALUE;
    let min = 1;
    let max = 1;
    for (let num of nums) {
      [min, max] = [
        Math.min(num, min * num, max * num),
        Math.max(num, min * num, max * num),
      ];
      res = Math.max(res, max);
    }
    return res;
  }

maxProduct([2,3,-2,4]);
