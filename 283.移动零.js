/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;
  let len = nums.length;
  for (let i = 0; i < len;) {
    const num = nums[i];
    if (num === 0) {
      left = i;
      right = i;
    } else {
      i++;
      continue
    }
    for (let j = i + 1; j < len; j++) {
      const nextNum = nums[j];
      if (nextNum === 0) {
        right = j;
      } else {
        break;
      }
    }


    for (let i = right; i >= left && i < len - 1; i--) {
      const item = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = item;
    }
    left++;
    right++;
    i = left;
    if (right === len - 1) {
      break
    }

    // let items = nums.slice(left, right + 1);

  }

  return nums;
};


// moveZeroes([4,2,4,0,0,3,0,5,1,0])
// @lc code=end

