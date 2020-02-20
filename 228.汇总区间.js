/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if(nums.length===0){
    return [];
  }
  let dp = [[nums[0]]];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const prveNum = nums[i - 1];
    if (num - prveNum == 1) {
      if (dp[index].length === 2) {
        dp[index][1] = num;
      } else {
        dp[index].push(num);
      }
    } else {
      index++;
      dp[index] = [num];
    }
  }
  
  return dp.reduce((a,c)=>{
    a.push(c.join('->'));
    return a;
  },[])
};

// summaryRanges([0,2,3,4,6,8,9])
// @lc code=end

