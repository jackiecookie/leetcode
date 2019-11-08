/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  for (let i = 0; i < intervals.length - 1; i++) {
    const nums = intervals[i];
    const next = intervals[i + 1];
    const numLast = nums[nums.length - 1];
    if (numLast >= next[0]) {
      let nextMax = next[next.length - 1];
      // if (nums[0] > nextMax) {
      //   let item = intervals[i];
      //   intervals[i] = intervals[i + 1];
      //   intervals[i + 1] = item;
      //   i++;
      // } else {
      let min = nums[0] < next[0] ? nums[0] : next[0];
      let max = numLast > nextMax ? numLast : nextMax
      intervals[i] = [min, max];
      intervals.splice(i + 1, 1)
      i--;
      // }

    }
  }
  return intervals;
};


// merge([[1, 4], [0, 0]])
// merge([[1,3],[2,6],[8,10],[15,18]])
// merge([[2,3],[4,5],[6,7],[8,9],[1,10]])
// @lc code=end

