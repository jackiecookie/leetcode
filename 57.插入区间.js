/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  let min = newInterval[0];
  let max = newInterval[1];
  let startIndex = -1;
  let endIndex = -1;
  for (let i = intervals.length - 1; i >= 0; i--) {
    const nums = intervals[i];
    if (nums[1] >= max) {

      endIndex = i;
      if (nums[0] > max) {
        endIndex--;
      }
    } else if (min >= nums[0]) {
      startIndex = i;
      if (min > nums[1]) {
        startIndex++;
      }
      break;
    }
  }
  if (startIndex === -1 && max >= intervals[0][0]) {
    startIndex = 0;
  }
  if (endIndex === -1) {
    if (max >= intervals[intervals.length - 1][1]) {
      endIndex = intervals.length - 1
    } else {
      endIndex = startIndex;
    }
  }
  if (startIndex === -1) {
    intervals = [newInterval, ...intervals]
  }
  else if (endIndex < startIndex) {
    if (intervals[1]) {
      intervals = [...intervals.slice(0, endIndex+1), newInterval, ...intervals.slice(startIndex)]
    } else {
      intervals = [intervals[0], newInterval]
    }

  }
  else {
    intervals[startIndex] = [Math.min(min, (startIndex == -1 || startIndex > intervals.length - 1 ? min : intervals[startIndex][0])), Math.max(max, (endIndex == -1 || endIndex > intervals.length - 1 ? max : intervals[endIndex][intervals[endIndex].length - 1]))]
    intervals.splice(startIndex + 1, endIndex - startIndex);
  }
  return intervals;
};

// insert([[6, 10], [13, 16], [19, 19], [23, 25], [34, 39], [41, 43], [49, 51]], [27, 27])
// insert([[3,5],[12,15]],[6,6])
// insert([[2, 6], [7, 9]], [15, 18])
// insert([[1, 5]], [6, 8])
// insert([[3, 5], [12, 15]], [6, 6])
// insert([[1,5],[6,8]],[0,9])
// insert([[1, 5], [6, 8]], [3, 7])
// insert([[1, 5]], [0, 0])
// insert([[1, 5]], [0, 3])
// insert([[1, 5]], [2, 3])
// insert([[1, 3], [6, 9]], [4, 6])
// insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])
// insert([[1,3],[6,9]],[2,5])
// @lc code=end

