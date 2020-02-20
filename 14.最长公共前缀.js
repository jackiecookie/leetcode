/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  
  let len = strs.length;
  let goGetIt = function (i) {
    let str = strs[0][i];
    if (str === undefined) {
      return i - 1
    }
    for (let j = 1; j < strs.length; j++) {
      if (str !== strs[j][i]) {
        return i - 1
      }
    }

    return goGetIt(i + 1);
  }

  let i = len > 0 ? goGetIt(0) : -1;

  if (i >= 0) {

    return strs[0].slice(0, i + 1);
  } else {
    return ""
  }

};

longestCommonPrefix([])
// @lc code=end

