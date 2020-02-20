/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {

  let len = matrix.length;
  if(len===0){
    return 0;
  }
  let cLen = matrix[0].length;

  let dp = [];
  for (let i = 0; i <= len; i++) {
    dp[i] = new Array(cLen + 1).fill(0)
  }
  let max = 0;
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= cLen; j++) {
      let num = matrix[i - 1][j - 1];
      let r = 0;
      if (num == 1) {
        r = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        if(r>max){
          max = r;
        }
      }
      dp[i][j] = r;
    }
  }

  return max * max;
};


// maximalSquare([
//   [1, 0, 1, 0, 0],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 0, 0, 1, 0]
// ])
// @lc code=end

