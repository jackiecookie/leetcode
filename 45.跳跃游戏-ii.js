/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let len = nums.length;
  if (len === 1) {
    return 0;
  } else if (len < 3 || nums[0] >= len - 1) {
    return 1;
  }
  let result = 0;
  let inex = 0;
  let step = 1;
  while (true) {
    let maxStep = 0;
    let maxStepIndex = 0;
    for (let i = inex; i < inex + step; i++) {
      if (i === 0) {
        maxStep = 0;
        maxStepIndex = 0;
      } else {
        const currentStep = nums[i];
        let nextStep = nums[i + currentStep]
        if (nextStep === undefined) {
          nextStep = len;
        }
        let canReachEnd = i + currentStep >= len - 1;
        if (currentStep + i >= maxStep || canReachEnd) {
          maxStep = currentStep + i;
          maxStepIndex = i;
          if (canReachEnd) {
            break;
          }
        }
      }

    }
    result++;
    inex = maxStepIndex + 1;
    step = nums[maxStepIndex]
    if (maxStepIndex + step >= len - 1) {
      return result;
    }
  }
  return result;
};
// console.assert(jump([9, 8, 2, 2, 0, 2, 2, 0, 4, 1, 5, 7, 9, 6, 6, 0, 6, 5, 0, 5]) === 3)
// console.assert(jump([5,4,0,1,3,6,8,0,9,4,9,1,8,7,4,8]) ===3)
// console.assert(jump([4,0,6,2,3,7,2,4,0]) ===2)
// console.assert(jump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]) === 3)
// console.assert(jump([1,1,1,2,1]) === 4)
// console.assert(jump([1, 2, 3]) === 2)
// console.assert(jump([1, 2]) === 1)
// console.assert(jump([2, 3, 0, 1, 4]) === 2)
// console.assert(jump([1, 1, 1, 1, 1, 4]) === 5)
// console.assert(jump([3,2,1]) === 1)


// @lc code=end

