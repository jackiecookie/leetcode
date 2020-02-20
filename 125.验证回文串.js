/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let len = s.length;
    let isVailStr = function(s){
        return /[a-z0-9]/.test(s)
    }
    let left = 0;
    let right = len-1;
    while (left<right) {
        let leftStr= s[left].toLowerCase();
        let rightStr = s[right].toLowerCase();
        if(!isVailStr(leftStr)){
            left++;
            continue
        }
        if(!isVailStr(rightStr)){
            right--;
            continue
        }
        if(rightStr!=leftStr){
            return false;
        }
        left++;
        right--;
    }

    return right === left||left>right;
};

// isPalindrome("aa")
// @lc code=end

