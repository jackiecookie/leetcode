/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let sLen = s.length;
    let tLen = t.length;
    let dp = [[]];
    for (let index = 0; index <= sLen; index++) {
        dp[0][index] = 1;
    }
    for (let index = 1; index <= tLen; index++) {
        dp[index] = [0];
    }

    for (let j = 1; j <= sLen; j++) {
        let sStr = s[j - 1];
        for (let i = 1; i <= tLen; i++) {
            let tStr = t[i - 1];
            if (sStr === tStr) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
            } else {
                dp[i][j] = dp[i][j - 1]
            }
        }

    }

    return dp[tLen][sLen];
};

// numDistinct("rabbbit", "rabbit")
// @lc code=end

