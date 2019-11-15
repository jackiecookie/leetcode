/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aLen = a.length;
  let bLen = b.length;
  let aLenGtb = aLen >= bLen;
  let target = aLenGtb ? b.split('') : a.split('');
  let other = aLenGtb ? a.split('') : b.split('');
  let jw = function (index) {
    let num = other[index]
    if (index === -1) {
      other = ['1', ...other];
      return
    }
    if (num === '1') {
      other[index] = '0'
      jw(index - 1);
    } else {
      other[index] = '1'
    }
  }
  for (let i = target.length - 1, jj =0; i >= 0; i-- , jj++) {
    let j = other.length - 1 -jj;
    const num = target[i];
    if (num === '1')
      if (other[j] === '1') {
        other[j] = '0';
        jw(j - 1);
      } else {
        other[j] = '1'
      }
  }
  return other.join('');
};

// addBinary("1111", '1111')
// @lc code=end

