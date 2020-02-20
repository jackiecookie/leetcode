/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations = citations.sort((a, b) => {
    return b-a;
  })
  for (let i = 0; i < citations.length; i++) {
    if(i>=citations[i]){
      return i;
    }
  }

  return citations.length;
};

// hIndex([3,0,6,1,5])
// @lc code=end

