/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = {};
  let windows = {}
  let tLen = t.length;
  let sLen = s.length;
  for (let i = 0; i < tLen; i++) {
    const s = t[i];
    windows[s] = 0;
    if (need[s]) {
      need[s]++;
    } else {
      need[s] = 1;
    }
  }

  let left = 0;
  let right = 0;
  let result = '';
  let subStr = false;
  let count = 0;
  while (right <= sLen) {
    let leftStr = s[left];
    let rightStr = s[right];
    if (count < tLen) {
      if (subStr && (result.length === 0 || right - left < result.length)) {
        result = s.substring(left - 1, right);
        subStr = false;
      }
      if (windows[rightStr] !== undefined) {
        windows[rightStr]++;
        if (windows[rightStr] <= need[rightStr]) {
          count++;
        }
        
      }
      right++;
      if (right > sLen) {
        break;
      }
    } else {
      if (windows[leftStr] !== undefined) {
        windows[leftStr]--;
        if (windows[leftStr] < need[leftStr]) {
          count--;
        }
        subStr = true;
      }
      left++;
    }
  }
  return result;
};
// minWindow("bba", "ab")
// minWindow("aa", "aa")
// minWindow("ADOBECODEBANC", "ABC")
// @lc code=end

