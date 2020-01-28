/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length;
    let left = new Array(len).fill(1);
    let right = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        left[i] = left[i-1]*nums[i-1] 
    }
    for (let i = len-2; i >=0; i--) {
        right[i] = right[i+1]*nums[i+1] 
    }
    
    for (let i = 0; i < len; i++) {
        nums[i] = left[i]*right[i] 
    }

    return nums;
};

// productExceptSelf([1,2,3,4])
// @lc code=end

