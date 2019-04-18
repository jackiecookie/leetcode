/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (20.50%)
 * Total Accepted:    9.9K
 * Total Submissions: 46.8K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 *
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 *
 *
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let dp = [[]];
  //[0][0]是指空格空格 匹配从1开始
  dp[0][0] = true;
  let slen = s.length;
  let plen = p.length;
  for (let i = 1; i <= slen; i++) {
    dp[i] = dp[i] || [];
    dp[i][0] = false;
  }

  for (let j = 1; j <= plen; j++) {
    dp[0][j] = p[j - 1] === "*" ? dp[0][j - 2] : false;
  }

  for (let i = 1; i <= slen; i++) {
    for (let j = 1; j <= plen; j++) {
      let sStr = s[i - 1];
      let pStr = p[j - 1];
      if (pStr === sStr || pStr === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (pStr === "*") {
        let conditon = p[j - 1 - 1] === sStr || p[j - 1 - 1] === ".";
        dp[i][j] = dp[i][j - 2] || (conditon && dp[i - 1][j]);
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[slen][plen];
};
console.log(isMatch("aaa", "ab*a*c*a") === true);
console.log(isMatch("ab", ".*c") === false);
console.log(isMatch("ab", ".*") === true);
console.log(isMatch("aa", "a") === false);
console.log(isMatch("aa", "a*") === true);
console.log(isMatch("aab", "c*a*b") === true);
console.log(isMatch("mississippi", "mis*is*p*.") === false);
