/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
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
    //右边有序,就是mid是最小的数
    if (rightIsOrder) {
      if (num < min) {
        min = num;
      }
      if (height === mid) {
        height--;
      } else {
        //goleft
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

// findMin([2, 1])
// findMin([3, 4, 5, 1, 2])
// findMin([4,5,6,7,0,1,2])
// @lc code=end

