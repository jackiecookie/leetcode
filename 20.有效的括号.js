/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.86%)
 * Total Accepted:    46.3K
 * Total Submissions: 127.4K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let isVali = function(s1, s2) {
    return (
      (s1 === "(" && s2 === ")") ||
      (s1 === "[" && s2 === "]") ||
      (s1 === "{" && s2 === "}")
    );
  };
  let stack = [];
  let len = s.length;
  for (let i = 0; i < len; i++) {
    let str = s[i];
    if (str === "(" || str === "[" || str === "{") {
      stack.push(str);
    } else if (str === ")" || str === "]" || str === "}") {
      let lastStr = stack.pop();
      if (!isVali(lastStr, str)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
