/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let top = 0;
  let left = 0;
  let len = matrix.length;
  if(len===0){
    return [];
  }
  let rLen = matrix[0].length;
  let bottom = len - 1;
  let right = rLen - 1;
  let result = [];

  while (result.length < len * rLen) {
    let i = 0;
    for (i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++;
    if (result.length === len * rLen) {
      break
    }

    for (i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--;
    if (result.length === len * rLen) {
      break
    }
    for (i = right; i >= left; i--) {
      result.push(matrix[bottom][i])
    }
    bottom--;
    if (result.length === len * rLen) {
      break
    }
    for (i = bottom; i >= top; i--) {
      result.push(matrix[i][left])
    }
    left++;
  }

  return result;
};

// spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ])
// @lc code=end

