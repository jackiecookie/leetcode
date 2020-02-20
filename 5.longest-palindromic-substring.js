/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (23.76%)
 * Total Accepted:    36.8K
 * Total Submissions: 151.6K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   let result = "";
//   let len = s.length;
//   let dp = [];
//   for (let i = len - 1; i >= 0; i--) {
//     for (let j = i; j < len; j++) {
//       dp[i] = dp[i] || [];
//       let n = j - i + 1;
//       dp[i][j] = s[i] === s[j] && (n <= 3 || dp[i + 1][j - 1]);
//       if (dp[i][j] && result.length < n) {
//         result = s.substr(i, n);
//       }
//     }
//   }
//   return result;
// };


var longestPalindrome = function (s) {
  let len = s.length;
  let dp = [];

  let res = ''

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      dp[i] = dp[i] || [];
      let l = j - i;
      dp[i][j] = false;
      if (l == 0) {
        dp[i][j] = true;
      } else if (s[i] == s[j] && (i + 1 == j - 1 || dp[i + 1][j - 1] || l == 1)) {
        dp[i][j] = true;
        if (l + 1 > res.length) {
          res = s.slice(i, j + 1);
        }
      }
    }
  }

  return res;
};

// longestPalindrome("babad");
longestPalindrome("a");
// longestPalindrome("abcba");
