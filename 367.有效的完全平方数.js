/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let i = 1;
  while(num > 0) {
      num -= i;
      i += 2;
  }
  return num == 0;

};
// @lc code=end

