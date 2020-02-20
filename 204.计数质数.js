/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0;
    let dic = [];
    for (let i = 2; i < n; i++) {
        if(!dic[i]){
            count++;
            for (let j = i*2; j <=n ; j+=i) {
                dic[j] = true;
            }
        }
    }
    return count;
};
// @lc code=end

