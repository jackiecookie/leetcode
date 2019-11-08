/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let num1Len = num1.length;
  let num2Len = num2.length;
  let result = new Array(num1Len + num2Len).fill(0);
  let jw = function (index) {
    result[index] = result[index] + 1;
    if (result[index] >= 10) {
      let _rStr = result[index].toString();
      result[index] = parseInt(_rStr[_rStr.length - 1]);
      jw(index - 1)
    }
  }
  for (let i = num1.length - 1, ii = 0; i >= 0; i-- , ii++) {
    const numi = parseInt(num1[i]);
    for (let j = num2.length - 1, jj = 0; j >= 0; j-- , jj++) {
      const numj = parseInt(num2[j]);
      let numij = (numi * numj).toString();
      let startIndex = (num1Len + num2Len - 1) - (ii + jj);
      for (let k = numij.length - 1, kk = 0; k >= 0; k-- , kk++) {
        const str = numij[k];
        let _r = result[startIndex - kk] + parseInt(str);
        if (_r >= 10) {
          jw(startIndex - kk - 1);
          let _rStr = _r.toString()
          _r = parseInt(_rStr[_rStr.length - 1]);
        }
        result[startIndex - kk] = _r;
      }
    }
  }
  let str = '';
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    if (str === '' && element === 0) {
      continue
    }
    str += element;
  }
  if (str === '') {
    str = '0'
  }
  return str;

};

// multiply("6719", "12261761")
// @lc code=end

