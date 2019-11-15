/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 0) {
    return [];
  }
  let left = 0
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let count = 1;
  let result = [[]];
  while (count <= n * n) {
    let i = 0;
    for (i = left; i <= right; i++ , count++) {
      result[top][i] = count;
    }
    if (count-1 >= n * n) {
      break;
    }
    top++;
    for (i = top; i <= bottom; i++ , count++) {
      if (result[i] === undefined) {
        result[i] = [];
      }
      result[i][right] = count;
    }
    if (count-1 >= n * n) {
      break;
    }
    right--;
    if (result[bottom] === undefined) {
      result[bottom] = [];
    }
    for (i = right; i >= left; i-- , count++) {
      result[bottom][i] = count;
    }
    if (count-1 >= n * n) {
      break;
    }
    bottom--;

    for (i = bottom; i >= top; i-- , count++) {
      result[i][left] = count;
    }
    if (count-1 >= n * n) {
      break;
    }
    left++;
  }
  return result;
};

// generateMatrix(3)
// @lc code=end

