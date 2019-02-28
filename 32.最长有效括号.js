/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (24.82%)
 * Total Accepted:    6.6K
 * Total Submissions: 26.1K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 * 示例 1:
 *
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 *
 *
 * 示例 2:
 *
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
                                                                                                   
    var ts = s.split('');                                                                           
    var stack = [], max = 0;                                                                        
                                                                                                    
    ts.forEach(function (t, i) {                                                                    
        if (t == '(') {                                                                             
            stack.push(i);                                                                          
        } else {                                                                                    
            if (stack.length === 0 || ts[stack[stack.length - 1]] == ')') {                          
                stack.push(i);                                                                      
            } else {                                                                                
                stack.pop();                                                                        
            }                                                                                       
        }                                                                                           
    });                                                                                             
                              
    stack.push(ts.length);                                                                          
    stack.splice(0, 0, -1);                                                                         
                                                                                                    
    for (var i = 0; i< stack.length - 1; i++) {                                                     
        var v = stack[i+1] - stack[i] - 1;                                                                 
        max = Math.max(max, v);                                                                     
    }                                                                                               
                                                                                                    
    return max;        
};
console.log(longestValidParentheses("(()(((()") === 2);
console.log(longestValidParentheses("(()))())(") === 4);
console.log(longestValidParentheses(")(((((()())()()))()(()))(") === 22);
console.log(longestValidParentheses(")()())()()(") === 4);
console.log(longestValidParentheses("((()))())") === 8);
console.log(longestValidParentheses("()()") === 4);
console.log(longestValidParentheses("(()())") === 6);
console.log(longestValidParentheses("(()()") === 4);
console.log(longestValidParentheses("()(()") === 2);
console.log(longestValidParentheses(")()())") === 4);
console.log(longestValidParentheses(")()())") === 4);
console.log(longestValidParentheses("(()") === 2);
