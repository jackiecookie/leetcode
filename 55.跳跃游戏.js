/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length;
  if (len <= 1 || nums[0] >= len - 1) {
    return true;
  }
  let index = 0;
  while (true) {
    let step = nums[index];
    let reachMax = 0;
    let maxIndex = 0;
    for (let i = index + 1; i <= index + step; i++) {
      if (i >= len - 1) {
        return true;
      }
      let reach = i + nums[i];
      if (reach > reachMax) {
        reachMax = reach;
        maxIndex = i;
      }
    }

    if (nums[maxIndex] === 0) {
      return false;
    } else if (maxIndex >= len - 1) {
      return true;
    } else {
      index = maxIndex;
    }
  }
};
// canJump([2, 3, 1, 1, 4])

// canJump([2, 5, 0, 0])
// @lc code=end

