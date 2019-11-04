/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // let index = -1;
  let len = nums.length;
  let low = 0;
  let height = len - 1;
  while (true) {
    let mid = parseInt((height + low) / 2);
    let num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      if (nums[mid - 1] < target || mid === 0) {
        return mid
      } else {
        height = mid - 1;
      }
    } else {
      if (nums[mid + 1] >= target || mid + 1 === len) {
        return mid + 1
      } else {
        low = mid + 1;
      }
    }
  }
};

// searchInsert([1, 3, 5, 6], 0)
// searchInsert([1, 3, 5, 6], 7)
// searchInsert([1, 3, 5], 1)

// @lc code=end

