/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (nums.length <= 1) {
    return nums[0] === target;
  }
  let height = nums.length - 1;
  let low = 0;
  while (height < nums.length && low >= 0 && height >= low) {
    let mid = (height + low) >> 1;
    let num = nums[mid];
    if (num === target) {
      return true;
    }
    let rightIsOrder = num < nums[height];
    if (!rightIsOrder && num === nums[height]) {
      let m = mid;
      rightIsOrder = true;
      while (m < height) {
        if (nums[m] !== num) {
          rightIsOrder = false;
          break;
        }
        m++
      }
    }
    if (rightIsOrder) {
      if (target <= nums[height] && target > num) {
        if (low === mid) {
          low++
        } else {
          low = mid;
        }
      } else {
        if (height === mid) {
          height--
        } else {
          height = mid;
        }
      }
    } else {
      if (target >= nums[low] && target < num) {
        if (height === mid) {
          height--
        } else {
          height = mid;
        }
      } else {
        if (low === mid) {
          low++
        } else {
          low = mid;
        }
      }
    }
  }
  return false
};
// search([1, 3, 1, 1, 1], 3)
// search([1, 1, 3, 1], 3)
// @lc code=end

