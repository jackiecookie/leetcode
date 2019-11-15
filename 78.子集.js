/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let len = nums.length;
  let result = [[]];
  let goGetIt = function (i, arr) {
    for (; i < len;i++) {
      let num = nums[i];
      arr.push(num);
      result.push(arr.slice(0));
      goGetIt(i + 1,arr);
      arr.pop()
    }
  }
  goGetIt(0,[]);
  return result;
};
// subsets([])
// subsets([1,2,3])
// @lc code=end

