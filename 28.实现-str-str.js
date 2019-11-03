/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let haystackLen = haystack.length;
    let needleLen = needle.length;
    if (needleLen === 0) {
        return 0
    } else if (needleLen > haystackLen || haystackLen === 0) {
        return -1;
    } else {
        let firstNeedle = needle[0];
        let nextStart = -1;
        for (let i = 0, j = 0; i < haystackLen;) {

            let stri = haystack[i];
            let strj = needle[j];
            if (i > 0 && j > 0 && stri === firstNeedle && nextStart == -1) {
                nextStart = i;
            }
            if (stri === strj) {
                if (j === needleLen - 1) {
                    return i - needleLen + 1;
                } else {
                    i++;
                    j++;
                }
            } else {
                j = 0;
                if (nextStart > 0 && nextStart < i) {
                    i = nextStart;
                    nextStart = -1;
                } else {
                    i++;
                }

            }
        }
        return -1;
    }
};
// console.assert(strStr("aabaaabaaac","aabaaac")===4)
// console.assert(strStr("mississippi","pi")===9)
// console.assert(strStr("mississippi","issipi")===-1)
// console.assert(strStr("heloll","ll")===4)
// console.assert(strStr("aaaaa","bba")===-1)
// console.assert(strStr("mississippi", "issip") === 4)



// @lc code=end

