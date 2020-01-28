/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let dic = {};
    let str = n.toString();
    while (str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            const num = parseInt(str[i]);
            sum += num*num;
        }
        if(sum===1){
            return true;
        }
        if(dic[sum]){
            return false;
        }
        dic[sum] = true;
        str = sum.toString();
    }
   
};

// isHappy(19)
// @lc code=end

