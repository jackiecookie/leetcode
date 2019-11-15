/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
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

// console.assert(largestRectangleArea([5, 7, 8, 1, 1, 4, 4, 6, 5, 0, 2]) === 16)
// console.assert(largestRectangleArea([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])===6)
// console.assert(largestRectangleArea([3, 6, 5, 7, 4, 8, 1, 0])===20)
// console.assert(largestRectangleArea([2, 1, 5, 6, 2, 3])===10)
// console.assert(largestRectangleArea([2, 1, 2])===3)

// @lc code=end

