/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if (s === " " || s === '') {
    return false;
  }
  let num = Number(s)
  return !isNaN(num)
};
// @lc code=end

