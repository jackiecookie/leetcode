/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (35.46%)
 * Total Accepted:    8.4K
 * Total Submissions: 23.5K
 * Testcase Example:  '[1,2,0]'
 *
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 *
 * 示例 1:
 *
 * 输入: [1,2,0]
 * 输出: 3
 *
 *
 * 示例 2:
 *
 * 输入: [3,4,-1,1]
 * 输出: 2
 *
 *
 * 示例 3:
 *
 * 输入: [7,8,9,11,12]
 * 输出: 1
 *
 *
 * 说明:
 *
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  //思路:对于数组长度为len的数字来说结果肯定在 1-len+1的范围内,
  //把数组中的数按照数组的下标放好,没有的地方标空,数字大于长度或者小于等于0的数字我们不考虑
  //数组变成[1,2,null,3],遍历这个数组找到null的位置就是结果,没有的话len+1就是结果
  let len = nums.length;
  if (len == 0) {
    return 1;
  }
  for (let i = 0; i < len; ) {
    let num = nums[i];
    if (num > len || num <= 0) {
      nums[i] = null;
      i++;
    } else {
      if (num === i + 1) {
        i++;
      } else {
        let item = nums[num - 1];
        if (item === num) {
          nums[i] = null;
          i++;
          continue;
        }
        nums[num - 1] = num;
        nums[i] = item;
      }
    }
  }
  let result = len + 1;
  for (let i = 0; i < len; i++) {
    if (nums[i] === null) {
      result = i + 1;
      break;
    }
  }
  return result;
};

// firstMissingPositive([1, 1]);
