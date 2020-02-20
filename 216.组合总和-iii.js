/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  let goGetIt = function (arr, sum, i) {
    if (i > 10 || sum > n) {
      return;
    }
    if (arr.length === k) {
      if (sum === n) {
        result.push(arr.slice(0));
      }
      return
    }
    for (; i <= 9;) {
      arr.push(i);
      goGetIt(arr, sum + i, ++i);
      arr.pop();
    }
  }

  goGetIt([], 0, 1)
  return result;
};


//  combinationSum3(3, 15)
// @lc code=end

