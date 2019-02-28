/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (67.45%)
 * Total Accepted:    13.5K
 * Total Submissions: 19.9K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 例如，给出 n = 3，生成结果为：
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];
  let generate = function(str, open, close) {
    console.log(`open:${open}   close:${close}  ⤵️ str:${str}`)
    if (str.length === n * 2) {
      result.push(str);
      
      return;
    }
    if (open < n) {
      generate(str + "(", open + 1, close);
    }
    if (close < open) {
      generate(str + ")", open, close + 1);
      console.log(`open:${open}   close:${close}  ⤴️`)
    }
  };
  generate("", 0, 0);
  console.log(result)
  return result;
};

generateParenthesis(3)

