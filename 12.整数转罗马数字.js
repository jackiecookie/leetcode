/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let arr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let point = 0;
    let result = '';
    while (num > 0) {
        let pointNum = numArr[point];
        if (num >= pointNum) {
            result += arr[point];
            num -= pointNum;
        }else{
            point++
        }
       
    }
    return result;
};

// intToRoman(1994)
// @lc code=end

