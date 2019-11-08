/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let len = nums.length;
  let result = [];
  let resultDic = {}
  let goGetIt = function (cNums, usedIndex) {
    if (cNums.length === len) {
      let cJoin = cNums.join(',');
      if(!resultDic[cJoin]){
        result.push(cNums.slice(0));
        resultDic[cJoin] = true;
      }
    } else {
      for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        if (!usedIndex[index]) {
          usedIndex[index] = true;
          cNums.push(num);
          goGetIt(cNums, usedIndex);
          usedIndex[index] = false;
          cNums.pop(num);
        }
      }
    }
  }
  goGetIt([], {})
  return result;
};

// permuteUnique([1, 1, 2])
// @lc code=end

