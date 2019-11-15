/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let result = [];
  let goGetIt = function (arr, dic) {
    if (arr.length === n) {
      result.push(arr.slice(0))
      if (result.length === k) {
        return result[k - 1].join('');
      }
    } else {
      for (let i = 1; i <= n; i++) {
        if (!dic[i]) {
          arr.push(i)
          dic[i] = true;
          let result = goGetIt(arr, dic)
          if (result) {
            return result;
          }
          dic[i] = false;
          arr.pop();
        }
      }
    }
  }
  return goGetIt([], {})
};

// getPermutation(9, 214267)

// getPermutation(3, 3)
// @lc code=end

