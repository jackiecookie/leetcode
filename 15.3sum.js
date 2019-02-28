/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (19.49%)
 * Total Accepted:    34.9K
 * Total Submissions: 171.4K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
		return [];
	}
  let resultHash = {};
  let calcHash = {};
  let result = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let numI = nums[i];
      let numJ = nums[j];
      let sum = numI + numJ;
      if (!calcHash[sum]) {
        calcHash[sum] = [];
      }
      calcHash[sum].push({
        i: numI,
        j: numJ,
        indexI: i,
        indexJ: j
      });
    }
  }
  for (let i = 0; i < len; i++) {
    let num = nums[i];
    let expect = 0 - num;
    if (calcHash[expect]) {
        for (const val of calcHash[expect]) {
            let min = Math.min(nums[i], val.i, val.j);
            let max = Math.max(nums[i], val.i, val.j);
            if (
                !resultHash[`${min}+${max}}`]&&
              val.indexI !== i &&
              val.indexJ !== i 
            ) {
              resultHash[`${min}+${max}}`] = 1;
              result.push([nums[i], val.i, val.j]);
            }
        }
    }
  }
  return result;
};

