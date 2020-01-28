/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    nums[-1] = Number.MIN_SAFE_INTEGER;
    nums[nums.length] = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length - 1; i++) {
        const num = nums[i];
        if (num > nums[i + 1] && num > nums[i - 1]) {
            return i;
        }
    }

};

// findPeakElement([1])
// @lc code=end

