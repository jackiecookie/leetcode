/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (cache[num] !== undefined) {
      let index = cache[num];
      if (i - index <= k) {
        return true;
      }
    }
    cache[num] = i;
  }
  return false;
};

// containsNearbyDuplicate([1, 2, 3, 1], 3)
// containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)

// containsNearbyDuplicate([1, 0, 1, 1], 1)
// @lc code=end

