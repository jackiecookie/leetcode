/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let max = 0;
  let rows = matrix.length;
  if (rows < 1) {
    return 0;
  }
  let cloum = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    let heights = [];
    for (let j = 0; j < cloum; j++) {
      let num = matrix[i][j];
      if (num == 0) {
        heights.push(0);
      } else {
        let num = 1 + (i === 0 ? 0 : parseInt(matrix[i - 1][j]))
        heights.push(num);
        matrix[i][j] = num;
      }
    }
    let currentMax = largestRectangleArea(heights);
    if (currentMax > max) { max = currentMax }
  }
  return max;
};

var largestRectangleArea = function (heights) {
  if (heights.length <= 1) {
    return heights[0] || 0
  }
  let stack = [{
    num: heights[0],
    prveCount: 0,
    nextCount: 0
  }];
  let max = heights[0];
  for (let i = 1; i < heights.length; i++) {
    let num = heights[i];
    let last = stack[stack.length - 1];
    let count = 0;
    let prveCount = 0;
    while (stack.length > 0 && last.num > num) {
      let item = stack.pop();
      let val = (item.prveCount + item.nextCount + 1 + count) * item.num;
      if (val > max) {
        max = val;
      }
      last = stack.length ? stack[stack.length - 1] : null;
      count++;
      count += item.nextCount;
      prveCount += (item.prveCount + 1)
    }
    if (count > 0 && stack.length > 0) {
      stack[stack.length - 1].nextCount += count;
    }
    stack.push({
      num: num,
      prveCount: prveCount,
      nextCount: 0
    });
  }
  if (stack.length > 0) {
    let count = 0;
    while (stack.length > 0) {
      let item = stack.pop();
      let val = (item.prveCount + item.nextCount + 1 + count) * item.num;
      if (val > max) {
        max = val;
      }
      last = stack.length ? stack[stack.length - 1] : null;
      count++;
      count += item.nextCount;
    }
  }
  return max;
};

// maximalRectangle([["1", "1", "1", "1"], ["1", "1", "1", "1"], ["1", "1", "1", "1"]])
// @lc code=end

