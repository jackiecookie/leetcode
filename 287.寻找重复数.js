/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let cache = {};
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if(cache[num]){
        return num;
      }
      cache[num] = true;
    }
};
// @lc code=end

