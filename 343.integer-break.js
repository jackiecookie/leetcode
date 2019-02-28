/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 *
 * https://leetcode-cn.com/problems/integer-break/description/
 *
 * algorithms
 * Medium (48.20%)
 * Total Accepted:    3.2K
 * Total Submissions: 6.6K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 *
 * 示例 1:
 *
 * 输入: 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 *
 * 示例 2:
 *
 * 输入: 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 *
 * 说明: 你可以假设 n 不小于 2 且不大于 58。
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n, result) {
  if (n == 2 && result === undefined) {
    return 1;
  }
  if (n == 3 && result === undefined) {
    return 2;
  }
  result = result || 1;
  if (n == 1) result = result * 1;
  else if (n == 2) result = result * 2;
  else if (n == 4) result = result * 4;
  else if (n >= 3) {
    result = result * 3;
    n -= 3;
    return integerBreak(n, result);
  }

  return result;
};
