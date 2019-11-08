/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let dp = [[true]];
  let sLen = s.length;
  let pLen = p.length;
  for (let i = 1; i <= sLen; i++) {
    dp[0][i] = false;
  }
  for (let j = 1; j <= pLen; j++) {
    let match = p[j - 1] === '*' && dp[j - 1][0]
    dp[j] = [match];
  }


  for (let ii = 1; ii <= pLen; ii++) {
    const pStr = p[ii - 1];
    for (let jj = 1; jj <= sLen; jj++) {
      const str = s[jj - 1];
      let match = ((pStr === '?' || str === pStr) && dp[ii - 1][jj - 1]) || (pStr === '*' && (dp[ii - 1][jj] || dp[ii][jj - 1]))
      dp[ii][jj] = match
    }
  }
  return dp[pLen][sLen]
};


// console.assert(isMatch("aab", "c*a*b")===false)
// console.assert(isMatch("cb", "?a")===false)
// console.assert(isMatch("adceb", "*a*b")===true)
// console.assert(isMatch("aa", "*")===true)
// console.assert(isMatch("aa", "a")===false)

// @lc code=end

