/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, n = 0) {
  if (n >= nums.length) return [[]];
  const res = [];
  const prevs = permute(nums, n + 1);  // permutations of elements after n
  for (let prev of prevs) {
      for (let i = 0; i <= prev.length; i++) {
          let p = prev.slice(0);
          p.splice(i, 0, nums[n]);  // successively insert element n
          res.push(p);
      }
  }
  return res;
};
// permute([1, 2, 3])
// @lc code=end

