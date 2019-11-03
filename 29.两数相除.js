/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // only one edge case that would cause overflow : dividend : -2**32, divisor: -1
    if(dividend === -2147483648 && divisor === -1) return 2147483647;
    // the following case is an edge case in JS only
    if(dividend === -2147483648 && divisor === 1) return dividend;
    
    let a = Math.abs(dividend), b = Math.abs(divisor), res = 0;
    for(let i=31; i>=0; i--){
        // There are some situations we need to be clear about:
        // 1. 1 << 31 equals to -2147483648
        // 2. a = Math.abs(dividend) may makes a equal to 2147483648, which is out of the range of 32-bits
        // 3. 2147483648 >> i (0<=i<=31) will be negative numbers
        // so we need to do two things:
        // 1. add Math.abs() below to get positive numbers as we would expect;
        // 2. the second edge case above is separated alone because when a === 1 << 31 and b  === 1, 
        //    the following res will be 1 << 31, too, which will turn into 2147483648 
        //    after we add a sign in front of it (at the return part), and get a wrong answer.
        if(Math.abs(a >> i) - b >=0){
            res += 1 << i;
            a -= (b << i);
        }
    }
    return (dividend > 0) ^ (divisor > 0) ? -res : res;
};
// @lc code=end

