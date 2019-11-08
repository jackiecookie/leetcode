/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  for (let j = 0; j < colLen; j++) {
    for (let i = rowLen - 1; i >= 0 + j; i--) {
      if (i === j) {
        continue
      }
      let item = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = item;
    }
  }

  for (let jj = 0; jj < rowLen; jj++) {
    for (let ii = 0; ii < parseInt(colLen / 2); ii++) {
      let item = matrix[jj][ii]
      matrix[jj][ii] = matrix[jj][colLen - 1 - ii]
      matrix[jj][colLen - 1 - ii] = item;
    }
  }

};

// rotate([
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ])

// rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16]
// ])
// @lc code=end

