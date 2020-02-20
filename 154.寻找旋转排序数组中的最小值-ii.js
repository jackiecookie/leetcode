/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let height = nums.length - 1;
  let low = 0;
  let min = Number.MAX_SAFE_INTEGER;
  while (height >= low) {
    let mid = (height + low) >> 1;
    let num = nums[mid];
    let lowNum = nums[low];
    let heightNum = nums[height];
    let rightIsOrder = heightNum > num;
    if (!rightIsOrder && heightNum === num) {
      rightIsOrder = true;
      for (let i = mid + 1; i < height; i++) {
        if (nums[i] !== num) {
          rightIsOrder = false;
          break;
        }
      }
    }
    if (rightIsOrder) {
      if (num < min) {
        min = num;
      }
      if (height === mid) {
        height--;
      } else {
        height = mid;
      }

    } else {
      if (lowNum < min) {
        min = lowNum;
      }
      if (low === mid) {
        low++;
      } else {
        low = mid;
      }

    }
  }

  return min;
};

// findMin([2, 2, 2, 0, 1])
// @lc code=end

