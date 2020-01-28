/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    if (n == 0) return null;
    let result = '';
    while (n > 0) {
        let r = n % 26;
        let d = parseInt(n / 26);
        if (r == 0) {
            r = 26;
            d = d - 1;
        }
        result += String.fromCharCode (64 + r);
        n = d;
    }
    return result.split('').reverse().join("");
};
// console.assert(convertToTitle(26)==='Z');
// console.assert(convertToTitle(2)==='B');
// console.assert(convertToTitle(52)==='AZ');
// console.assert(convertToTitle(28)==='AB');

// console.assert(convertToTitle(701)==='ZY');
// @lc code=end

