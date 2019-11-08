/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let len = height.length;

  let left = [0];
  let right = [];
  right[len - 1] = 0
  for (let index = 1; index < len; index++) {
    const element = height[index - 1];
    if (element > left[index - 1]) {
      left.push(element)
    } else {
      left.push(left[index - 1])
    }
  }
  for (let index1 = len - 2; index1 >= 0; index1--) {
    const element = height[index1 + 1];
    if (element > right[index1 + 1]) {
      right[index1] = element
    } else {
      right[index1] = right[index1 + 1]
    }
  }
  let result = 0;
  for (let i = 0; i < len; i++) {
    const element = height[i];
    let low = Math.min(left[i], right[i]);
    if (low > element) {
      result += low - element
    }
  }
  return result;
};

// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
// @lc code=end

