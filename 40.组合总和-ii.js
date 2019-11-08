/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  let len = candidates.length;
  let goGetIt = function (index, arr) {
    if (index === len) {
      return;
    }
    let candidate = candidates[index];
    let count = 1;
    let needBreak = false;
    while (!needBreak && index + count < len) {
      if (candidate === candidates[index + count]) {
        count++
      } else {
        needBreak = true;
      }
    }
    goGetIt(index + count, arr.slice(0));
    arr.push(candidate);
    let sum = arr.reduce((a, b) => {
      return a + b;
    })
    let remainder = target - sum;
    if (remainder === 0) {
      result.push(arr)
    } else if (remainder < 0) {
      return
    } else if (remainder >= candidates[index]) {
      goGetIt(index + 1, arr.slice(0));
    }

  }
  candidates.sort((a, b) => {
    return a - b;
  })
  goGetIt(0, []);
  return result;
};

// combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
// combinationSum2([2,5,2,1,2], 5)

// @lc code=end

