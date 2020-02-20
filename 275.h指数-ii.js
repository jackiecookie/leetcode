/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let lo = 0;
  let hi = citations.length - 1;
  
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (isOk(citations, mid)) {
      lo = mid + 1;
      continue;
    }
    
    hi = mid - 1;
  }

  return lo;
};

function isOk(citations, index) {
  const h = index + 1;
  const value = citations[citations.length - 1 - index];
  
  return value >= h;
}
// @lc code=end

