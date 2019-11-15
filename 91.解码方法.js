/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.length === 0 || s[0] === '0') {
    return 0;
  }
  let current = 1;
  let prve = 1;
  for (let i = 1; i < s.length; i++) {
    let item = current;
    const num = parseInt(s[i]);
    if (num === 0) {
      current = prve;
      let prveNum = parseInt(s[i - 1]);
      if (prveNum >= 3 || prveNum == 0) {
        return 0;
      }
    } else if (s[i - 1] !== '0' && (parseInt(s[i - 1] + s[i]) <= 26)) {
      current = current + prve;
    }

    prve = item;
  }
  return current;
};

// numDecodings("101")
// @lc code=end

