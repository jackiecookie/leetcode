/*
 * @lc app=leetcode.cn id=486 lang=javascript
 *
 * [486] 预测赢家
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  let dp = [];
  let len = nums.length;
  //init
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i][i] = {
      first: nums[i],
      second: 0
    };
  }

  for (let l = 2; l <= len; l++) {
    for (i = 0; i <= len - l; i++) {
      let j = i + l - 1;
      if (!dp[i][j]) {
        dp[i][j] = {};
      }
      if (nums[i] + dp[i + 1][j].second > dp[i][j - 1].second + nums[j]) {
        dp[i][j].first = nums[i] + dp[i + 1][j].second;
        dp[i][j].second = dp[i + 1][j].first;
      } else {
        dp[i][j].first = nums[j] + dp[i][j - 1].second;
        dp[i][j].second = dp[i][j - 1].first;
      }
    }
  }


  return dp[0][len-1].first>=dp[0][len-1].second
};

PredictTheWinner([1, 5, 2]);
