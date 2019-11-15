/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length;
  let jw = function (index, num) {
    if (index === -1) {
      digits = [1, ...new Array(len).fill(0)]
      return true;
    } else {
      let count = digits[index] + num;
      let notSetVal = false;
      if (count >= 10) {
        count = parseInt(count.toString().split('')[1]);
        notSetVal = jw(index - 1, 1);
      }
      if (!notSetVal) {
        digits[index] = count;
      }
      return notSetVal;
    }

  }
  jw(len - 1, 1)
  return digits;
};
// plusOne([9, 9, 8])
// @lc code=end

