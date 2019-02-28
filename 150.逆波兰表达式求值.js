/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 *
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/description/
 *
 * algorithms
 * Medium (42.22%)
 * Total Accepted:    4.9K
 * Total Submissions: 11.3K
 * Testcase Example:  '["2","1","+","3","*"]'
 *
 * 根据逆波兰表示法，求表达式的值。
 *
 * 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 *
 * 说明：
 *
 *
 * 整数除法只保留整数部分。
 * 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 *
 *
 * 示例 1：
 *
 * 输入: ["2", "1", "+", "3", "*"]
 * 输出: 9
 * 解释: ((2 + 1) * 3) = 9
 *
 *
 * 示例 2：
 *
 * 输入: ["4", "13", "5", "/", "+"]
 * 输出: 6
 * 解释: (4 + (13 / 5)) = 6
 *
 *
 * 示例 3：
 *
 * 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * 输出: 22
 * 解释:
 * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 *
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let cal = function(num1, num2, symbol) {
    switch (symbol) {
      case "+":
        return num2 + num1;
      case "-":
        return num2 - num1;
      case "*":
        return num2 * num1;
      case "/":
        return parseInt(num2 / num1);
    }
  };
  let stack = [];
  let len = tokens.length;
  for (let i = 0; i < len; i++) {
    let token = tokens[i];
    //+, -, *, /
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      let num1 = Number(stack.pop());
      let num2 = Number(stack.pop());
      let result = cal(num1, num2, token);
      stack.push(result);
    } else {
      stack.push(token);
    }
  }
  return stack.pop();
};

// evalRPN(["2", "1", "+", "3", "*"])
// evalRPN(["4", "13", "5", "/", "+"]);
// evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
