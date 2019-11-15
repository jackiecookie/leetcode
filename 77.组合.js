/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let goGetIt = function (i, arr) {
    if (arr.length === k) {
      result.push(arr.slice(0));
      return
    }
    for (; i <= n; i++) {
      arr.push(i);
      goGetIt(i + 1, arr);
      arr.pop();
    }
  }
  goGetIt(1,[]);
  return result;
};

// combine(4,2)
// @lc code=end

