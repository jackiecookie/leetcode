/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let result = [];
  let len = nums.length;
  let set = function (arr, index) {
    if (!arr || !arr.length) {
      return
    }
    let flag = parseInt(arr.length / 2);
    let num = arr[flag];
    if (num === target) {
      result.push(index + flag);
      let itemFlag = flag;
      while (itemFlag >= 0) {
        if (nums[index + itemFlag - 1] === target) {
          result = [index + itemFlag - 1, ...result]
          itemFlag--
        } else {
          itemFlag = -1
        }
      }
      itemFlag = flag;
      while (itemFlag < len) {
        if (nums[index + itemFlag + 1] === target) {
          result.push(index + itemFlag + 1);
          itemFlag++
        } else {
          return;
        }
      }

    } else if (num < target) {
      set(arr.slice(flag + 1), flag + index + 1)
    } else {
      set(arr.slice(0, flag), index)
    }

  }

  set(nums, 0)
  let rlens = result.length;
  if (rlens > 2) {
    result = [result[0], result[rlens - 1]]
  } else if (rlens === 1) {
    result = [result[0], result[0]];
  } else if (rlens === 0) {
    result = [-1, -1];
  }
  return result
};

// searchRange([0, 0, 2, 3, 4, 4, 4, 5], 5)
// searchRange([5, 7, 7, 8, 8, 10], 6)
// @lc code=end

