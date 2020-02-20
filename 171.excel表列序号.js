/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; ++i) {
        res += (s[i].charCodeAt() - 64) * Math.pow(26, s.length - 1 - i);
    }
    return res;

};
// titleToNumber("A")
// titleToNumber("ZY")
// @lc code=end

