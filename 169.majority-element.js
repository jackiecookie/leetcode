/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (55.84%)
 * Total Accepted:    19.5K
 * Total Submissions: 34.4K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 *
 * 示例 1:
 *
 * 输入: [3,2,3]
 * 输出: 3
 *
 * 示例 2:
 *
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  //摩尔投票发
  //众位数是数字大于数组上一半的个数，所以个数只有可能有一个
  let majority = nums[0];
  let len = nums.length;
  let count = 1;
  for (let i = 1; i < len; i++) {
    let num = nums[i];
    if (majority === num) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majority = num;
        count = 1;
      }
    }
  }
  return majority;
};

