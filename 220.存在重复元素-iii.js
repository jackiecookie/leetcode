/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let numi = nums[i];
    for (let j = i + 1; j <= i + k; j++) {
      let numj = nums[j];
      let num = Math.abs(numj - numi);
      if (num <= t) {
        return true;
      }
    }
  }

  return false;
};

// containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)
// @lc code=end

