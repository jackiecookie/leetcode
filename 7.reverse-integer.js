/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.06%)
 * Total Accepted:    73.2K
 * Total Submissions: 235.6K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
    let xStr = x.toString();
    let symbol = xStr[0];
    let isSymbol = symbol==='-';
    let result = '';
    let len = xStr.length;
    for (let index = len-1; (!isSymbol&&index >=0)||(isSymbol&&index>0); index--) {
        const element = xStr[index];
        if(result===''&&element==='0'){
            continue;
        }else{
            result+=element;
        }
    }
    if(isSymbol){
        result='-'+result
    }
    let numResult = Number(result);
    //处理精度问题
    if(numResult< Math.pow(-2,31)||numResult>(Math.pow(2,31)-1)){
        return 0;
    } 
    return numResult;
};