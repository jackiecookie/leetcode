/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (num === 0) {
    return "Zero"
  }
  let goGetIt = function (numStr, level) {
    let res = undefined;
    let num = parseInt(numStr);
    if (num === 0) {
      return ""
    }
    if (translations[num]) {
      res = translations[num];
    }
    if (res === undefined) {
      let result = [];
      for (let index = numStr.length - 1, level = 0; index >= 0; index-- , level++) {
        let num = parseInt(numStr[index]);
        let bs = 1;
        if (level === 2) {
          bs = 100;
        } else if (level === 1) {
          if(num===1){
            num =  parseInt(numStr[index]+numStr[index+1]);
            result.splice(result.length-1)
            result.push(translations[num]);
            continue;
          }
          bs = 10;
        }
        if (translations[num * bs]) {
          result.push(translations[num * bs])
        }

      }
      res = result.reverse().join(" ");
    }
    if (level > 0) {
      let str = "Thousand";
      if (level === 2) {
        str = "Million";
      }
      else if (level === 3) {
        str = "Billion";
      }
      res += " " + str
    }
    return res
  }
  let result = [];
  let str = num.toString();
  for (let index = str.length, level = 0; index >= 0; index -= 3, level++) {
    let _i = index - 3;
    let _count = 3;
    if (_i < 0) {
      _count = _count + _i;
      _i = 0
    }
    if (_count === 0) {
      break
    }
    const numStr = str.substr(_i, _count);

    let res = goGetIt(numStr, level);
    if (res !== "") {
      result.push(res)
    }

  }

  let _r = result.reverse().join(" ");
  return _r
};



const translations = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
  100: 'One Hundred',
  200: 'Two Hundred',
  300: 'Three Hundred',
  400: 'Four Hundred',
  500: 'Five Hundred',
  600: 'Six Hundred',
  700: 'Seven Hundred',
  800: 'Eight Hundred',
  900: 'Nine Hundred'
}

// numberToWords(111)
// @lc code=end

