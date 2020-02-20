/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let cache = {};
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if(cache[num]){
        return true
      }
      cache[num] = true
    }

    return false
};
// @lc code=end

