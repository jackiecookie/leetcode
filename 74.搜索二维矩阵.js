/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  if (m === 0) {
    return false;
  }
  let n = matrix[0].length;
  let totle = m * n;
  let top = totle;
  let bottom = 0;
  while (top - bottom >= 1) {
    let middle = Math.ceil((top + bottom) / 2);
    let cloum = Math.ceil(middle / n) - 1;
    let row = Math.abs(middle - (cloum * n)) - 1;
    let num = matrix[cloum][row];
    if (num === target) {
      return true
    } else if (num < target) {
      if (bottom === middle) {
        bottom++
      } else {
        bottom = middle;
      }
    } else {
      if (top === middle) {
        top--
      } else {
        top = middle;
      }
    }
  }
  return false;
};

// searchMatrix([[1]], 2)
// searchMatrix(
//   [[1,3]]
// , 3)

// searchMatrix([
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ], 13)

// searchMatrix([
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ], 3)
// @lc code=end

